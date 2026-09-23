#!/usr/bin/env python3
"""Validate task scores against both website summaries, then export display data.

Run from the website directory with: python3 scripts/build_task_results.py
The source CSV remains untouched. Its notes and sources columns are deliberately
excluded from the website export because the data owner corrected that metadata.
"""

import argparse
import csv
import io
import json
import re
from decimal import Decimal, InvalidOperation
from pathlib import Path


WEBSITE = Path(__file__).resolve().parents[1]
POLICIES = [
    {"key": "ACT", "label": "ACT"},
    {"key": "X-VLA", "label": "X-VLA"},
    {"key": "GR00T", "label": "GR00T N1.7"},
    {"key": "SmolVLA", "label": "SmolVLA"},
    {"key": "Pi0.5", "label": "π0.5"},
    {"key": "DP", "label": "DP"},
    {"key": "FastWAM", "label": "FastWAM"},
]
CONDITIONS = [
    {"key": "id", "label": "In-distribution", "source": "ID"},
    {"key": "object", "label": "Object OOD", "source": "Object-OOD"},
    {"key": "background", "label": "Background OOD", "source": "Background-OOD"},
    {"key": "lighting", "label": "Lighting OOD", "source": "Lighting-OOD"},
    {"key": "speed", "label": "Speed OOD", "source": "Speed-OOD"},
    {"key": "joint", "label": "Joint OOD", "source": "Joint-OOD"},
]
SCENES = {"CM": "cm", "FC": "fc", "HRI": "ei", "HT": "ht"}
TASKS = {f"{prefix}{index:03d}" for prefix in SCENES for index in range(10)}
EXPORT_COLUMNS = [
    "condition", "task", "task_length", "DP", "ACT", "SmolVLA", "X-VLA",
    "Pi0.5", "GR00T", "FastWAM", "unit",
]


def require(condition, message):
    if not condition:
        raise ValueError(message)


def read_csv(path):
    with path.open(encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        require(reader.fieldnames is not None, f"Empty CSV: {path}")
        require(len(reader.fieldnames) == len(set(reader.fieldnames)),
                f"Duplicate column names in {path}")
        rows = list(reader)
    require(all(None not in row for row in rows), f"Extra CSV fields in {path}")
    return rows


def decimal(value, context):
    try:
        result = Decimal(value)
    except (InvalidOperation, TypeError):
        raise ValueError(f"Invalid number at {context}: {value!r}") from None
    require(result.is_finite() and 0 <= result <= 100,
            f"Score outside 0–100 at {context}: {value!r}")
    return result


def csv_text(rows, columns):
    buffer = io.StringIO(newline="")
    writer = csv.DictWriter(buffer, fieldnames=columns, lineterminator="\n")
    writer.writeheader()
    writer.writerows(rows)
    return buffer.getvalue()


def javascript_summary(path):
    source = path.read_text(encoding="utf-8")
    match = re.search(r"\bconst\s+policies\s*=\s*\[(.*?)\]\s*;", source, re.S)
    require(match is not None, f"Could not find policies array in {path}")
    summary = {}
    for body in re.findall(r"\{([^{}]*)\}", match.group(1)):
        name = re.search(r"\bname\s*:\s*(['\"])(.*?)\1", body)
        require(name is not None, f"Missing policy name in {path}")
        label = name.group(2)
        require(label not in summary, f"Duplicate JS policy: {label}")
        summary[label] = {}
        for condition in CONDITIONS:
            key = condition["key"]
            values = re.findall(rf"\b{key}\s*:\s*([0-9]+(?:\.[0-9]+)?)\s*(?=,|$)", body)
            require(len(values) == 1, f"Missing or duplicate JS score: {label}/{key}")
            summary[label][key] = decimal(values[0], f"results.js/{label}/{key}")
    require(set(summary) == {p["label"] for p in POLICIES},
            "JavaScript summary must contain exactly the seven expected policies")
    return summary


def build(source, results_csv, results_js):
    rows = read_csv(source)
    require(len(rows) == 240, f"Expected 240 task rows, found {len(rows)}")
    allowed_conditions = {condition["source"] for condition in CONDITIONS}
    by_condition = {condition: {} for condition in allowed_conditions}
    horizons = {}
    scores = {}
    for row in rows:
        require(set(EXPORT_COLUMNS).issubset(row), "Source CSV is missing required columns")
        condition, task = row["condition"], row["task"]
        require(condition in allowed_conditions, f"Unknown condition: {condition}")
        require(task in TASKS, f"Unknown task: {task}")
        require(task not in by_condition[condition], f"Duplicate row: {condition}/{task}")
        require(row["task_length"] in {"short", "long"}, f"Invalid task_length: {task}")
        require(row["unit"] == "percent_0_to_100", f"Invalid unit: {condition}/{task}")
        require(horizons.setdefault(task, row["task_length"]) == row["task_length"],
                f"Inconsistent task_length across conditions: {task}")
        values = {}
        for policy in POLICIES:
            model = policy["key"]
            value = decimal(row[model], f"{condition}/{task}/{model}")
            require(value % 2 == 0, f"Score is not on the 2-point grid: {condition}/{task}/{model}")
            values[model] = value
        scores[(condition, task)] = values
        by_condition[condition][task] = row
    for condition, tasks in by_condition.items():
        require(set(tasks) == TASKS, f"Condition {condition} does not contain all 40 tasks")
    require(sum(len(values) for values in scores.values()) == 1680,
            "Expected exactly 1,680 task scores")

    overall_rows = read_csv(results_csv)
    require(len(overall_rows) == 7, "Expected seven CSV summary policies")
    overall = {}
    for row in overall_rows:
        label = row.get("method")
        require(label not in overall, f"Duplicate CSV summary policy: {label}")
        overall[label] = row
    require(set(overall) == {p["label"] for p in POLICIES},
            "CSV summary must contain exactly the seven expected policies")
    js_overall = javascript_summary(results_js)

    verification = []
    display_rows = []
    export_rows = []
    for condition in CONDITIONS:
        source_condition, key = condition["source"], condition["key"]
        condition_rows = by_condition[source_condition]
        for task in sorted(condition_rows):
            row = condition_rows[task]
            prefix = re.fullmatch(r"([A-Z]+)\d{3}", task).group(1)
            display_rows.append({
                "condition": key, "task": task, "scene": SCENES[prefix],
                "horizon": row["task_length"],
                "values": {model: int(value) for model, value in scores[(source_condition, task)].items()},
            })
            export_rows.append({column: row[column] for column in EXPORT_COLUMNS})
        for policy in POLICIES:
            model, label = policy["key"], policy["label"]
            total = sum((scores[(source_condition, task)][model] for task in TASKS), Decimal(0))
            mean = total / Decimal(40)
            csv_column = "id_success_pct" if key == "id" else f"{key}_ood_success_pct"
            csv_score = decimal(overall[label].get(csv_column), f"results.csv/{label}/{key}")
            js_score = js_overall[label][key]
            require(mean == csv_score == js_score,
                    f"Summary mismatch for {source_condition}/{label}: "
                    f"task mean={mean}, CSV={csv_score}, JavaScript={js_score}")
            verification.append({
                "condition": source_condition, "model": model, "task_count": 40,
                "task_weight": "1/40", "sum_task_success_pct": str(total),
                "recomputed_overall_pct": f"{mean:.2f}",
                "website_csv_overall_pct": f"{csv_score:.2f}",
                "website_js_overall_pct": f"{js_score:.2f}",
                "difference_vs_csv_pct": f"{mean - csv_score:.2f}",
                "difference_vs_js_pct": f"{mean - js_score:.2f}", "status": "PASS",
            })
    require(len(verification) == 42, "Expected 42 summary comparisons")
    data = {"policies": POLICIES, "conditions": CONDITIONS, "rows": display_rows}
    return {
        "task-results-data.js": "// Generated by scripts/build_task_results.py; do not edit.\n"
        + "window.MOTIONFORGE_TASK_RESULTS = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n",
        "task-results.csv": csv_text(export_rows, EXPORT_COLUMNS),
        "task-results-verification.csv": csv_text(verification, list(verification[0])),
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=WEBSITE.parent / "website_alignment_20260923" / "merged_id_ood_40tasks_website_aligned.csv")
    parser.add_argument("--results-csv", type=Path, default=WEBSITE / "assets" / "results.csv")
    parser.add_argument("--results-js", type=Path, default=WEBSITE / "results.js")
    parser.add_argument("--output-dir", type=Path, default=WEBSITE / "assets")
    args = parser.parse_args()
    try:
        # No output is written until every source and both summaries validate.
        outputs = build(args.source, args.results_csv, args.results_js)
    except (ValueError, OSError) as error:
        parser.exit(1, f"Validation failed: {error}\n")
    args.output_dir.mkdir(parents=True, exist_ok=True)
    for name, content in outputs.items():
        (args.output_dir / name).write_text(content, encoding="utf-8")
    print("Validated 240 task rows, 1,680 scores, and 42/42 exact summary matches.")
    print(f"Wrote {', '.join(outputs)} to {args.output_dir}")


if __name__ == "__main__":
    main()
