# MotionForge Project Website

A static website for MotionForge, featuring the benchmark, data generation pipeline, evaluation protocols, video galleries, and result tables.

**[Open the website](https://backoutlier.github.io/MotionForge-Website/)**

## Website sections

1. **Overview** — Research motivation, overview video, benchmark scale, and three main contributions.
2. **Benchmark** — Four scene families, a DOMINO / MotionForge motion comparison, and the CM-008 long-horizon task example.
3. **Pipeline** — Four steps describing the two-stage pipeline and the distinction between generated data and training subsets.
4. **Evaluation** — R1/R2/R3 interaction timelines and the ID, single-factor OOD, and joint OOD settings.
5. **Results** — Overall results across 40 tasks, plus a separate protocol comparison covering the 20 FC and CM tasks.
6. **Explore** — Video galleries, task-level result filters, and data downloads.

The ID galleries contain 40 Level 2 state-machine tasks with 120 videos. The OOD galleries contain 16 selected cases with 48 videos. Task cards support Overview, Front, and Wrist camera views. Cards and posters load when a gallery tab is first opened, and videos pause when switching away. The Joint OOD tab describes simultaneous changes to all four factors.

The horizontal video galleries were inspired by the interaction on the [π₀ project page](https://www.pi.website/blog/pi0), with an independent implementation and separate media assets. The site uses Arial / Helvetica throughout.

## Local preview

Open `index.html` directly, or run the following command from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit <http://127.0.0.1:8000>. No dependencies or build step are required to serve the website.

## GitHub Pages

The website is published from the root of the `main` branch. In **Settings → Pages**, the source should be **Deploy from a branch**, with **main** and **/ (root)** selected.

The entry point is `index.html`. This README documents the repository; it is not required to render the website. The `.nojekyll` file keeps the site as plain static files.

The project base path is configured in `site-config.js`:

```js
base_url: '/MotionForge-Website/'
```

This path is applied on GitHub Pages domains. Local previews and anonymous mirrors retain relative paths. Update this value if the repository name changes.

After pushing a commit, check **Actions → pages build and deployment** and wait for the deployment to complete before testing the published site. If the repository opens but the website does not, check the Pages deployment and use the website link above.

## Media configuration

Media entries are configured in `content.js`. Task videos and posters are stored under `assets/media/`; the overview video is `MotionForge_Video.mp4` in the repository root.

The ID assets come from the September 17, 2026 export. Source tasks labeled HRI are displayed as EI. See the [ID media notes](assets/media/id/README.md) and [ID manifest](assets/media/id/manifest.json). Each WebP poster is an extracted frame from the corresponding video, with the same filename stem.

The OOD assets come from the September 19, 2026 export. Only 16 selected cases are included under [assets/media/ood](assets/media/ood/README.md); the complete original export is excluded from Git. Cases were selected by comparing them with the corresponding ID views, prioritizing visible differences. Each case has a chosen default camera and a poster extracted from the actual video. The [OOD manifest](assets/media/ood/manifest.json) records the selected tasks, variants, and source mapping.

### Overview video

`MOTIONFORGE_MEDIA.overview` is configured as follows:

```js
{
  type: 'video',
  src: 'MotionForge_Video.mp4',
  poster: 'assets/media/overview.webp',
  alt: 'MotionForge overview',
  muted: false
}
```

The video loads on interaction and plays with audio. It supports pause, seeking, and fullscreen, while preserving its original aspect ratio on desktop and mobile. Update both the video path and poster when replacing it.

### Video galleries

`MOTIONFORGE_COMPARISON` configures the motion comparison. The DOMINO clip is stored under `assets/media/comparison/`, and MotionForge reuses the HT-001 Overview clip. Both videos play in full at their original speed and can play simultaneously. See the [comparison media notes](assets/media/comparison/README.md) for attribution and licensing.

Each object in `MOTIONFORGE_GALLERIES` defines a gallery tab, and each entry in its `videos` array defines a task card. Tabs support the arrow keys, Home, and End. Deep links such as `#gallery-cm` and `#gallery-cm-clip-9` activate the relevant tab and locate the scene or task.

The `src` and `poster` fields define the default view. The optional `views` array provides additional cameras. For example, with `taskPath` pointing to a task's `level2` directory:

```js
{
  title: 'Grasp a moving object',
  src: `${taskPath}/overview.mp4`,
  poster: `${taskPath}/overview.webp`,
  caption: 'FC-000 · State machine · Level 2',
  views: [
    { id: 'overview', label: 'Overview', src: `${taskPath}/overview.mp4`, poster: `${taskPath}/overview.webp` },
    { id: 'front', label: 'Front', src: `${taskPath}/front.mp4`, poster: `${taskPath}/front.webp` },
    { id: 'wrist', label: 'Wrist', src: `${taskPath}/wrist.mp4`, poster: `${taskPath}/wrist.webp` }
  ]
}
```

A single-view entry only requires `title` and `src`; `poster` and `caption` are optional. Adding or removing entries automatically updates gallery navigation. Use MP4 / H.264 videos and retain the original aspect ratio.

| ID | Gallery |
| --- | --- |
| `fc` | Factory Conveyor |
| `cm` | Circular Motion |
| `ht` | Home Tabletop |
| `ei` | Embodied Interaction |
| `object` | Object OOD |
| `background` | Background OOD |
| `lighting` | Lighting OOD |
| `speed` | Speed OOD |
| `joint` | Joint OOD: all four factors change together |

OOD captions identify the task and visible change; full settings remain in the manifests. Level 3 in the Speed gallery refers to the source motion setting, not playback speed. Gallery clips are selected successful demonstrations, separate from the result tables.

## Results and task-level tables

`results.js` contains 42 overall success rates: seven policies across six conditions, corresponding to Tables II and III of the paper. `assets/results.csv` contains the same overall values.

The task table contains 1,680 values across 40 tasks, six conditions, and seven models. It supports condition, scene, and task-horizon filters and provides a complete CSV download. Task names match the galleries; EI in the interface corresponds to HRI in the source CSV.

The task table is generated from `../website_alignment_20260923/merged_id_ood_40tasks_website_aligned.csv`, a derived dataset adjusted and completed to match the website's aggregate targets. The exported `assets/task-results.csv` contains the condition, task, horizon, seven model values, and unit. Its numeric values match that input; the source notes and provenance columns are not included in the website export.

Overall values use an equal-weight mean across 40 tasks. Each condition contains ten tasks per scene, or 23 short-horizon and 17 long-horizon tasks. Group means must be weighted by their task counts when combined. The filtered table footer summarizes only the selected subset.

To regenerate the website data from the original local input:

```sh
python3 scripts/build_task_results.py
```

The default source is outside this repository. To use another complete input file, specify its path:

```sh
python3 scripts/build_task_results.py --source /path/to/task-results.csv
```

The script uses only the Python standard library. It checks completeness and compares all 42 task means against both `assets/results.csv` and `results.js` before writing the website data and `assets/task-results-verification.csv`. This checks arithmetic consistency, not independent experimental validity.

The table loads local JavaScript data, so filtering works both when opening `index.html` directly and when serving the site over HTTP. Keep `results.js` and the overall CSV synchronized when updating aggregate values.

## Real-time evaluation protocols

`protocol.js` renders `#protocol-demo` and `#protocol-results`. The timeline follows Fig. 3 of the paper:

- **R1:** asynchronous advancement with a fixed 120 Hz fine-step environment clock.
- **R2:** asynchronous advancement with coarser steps.
- **R3:** the environment freezes during inference.

Timeline spacing is illustrative and does not specify an R2 frequency. A complete static diagram is visible by default, with controls for play, pause, and reset. With `prefers-reduced-motion`, the animation advances by stage.

The protocol results come from Fig. 6(c) and the local source `../chart_source/protocol_data.csv`. They cover only the 20 FC and CM tasks and three policies, and are displayed separately from the 40-task overall results.

| Policy | R1 (%) | R2 (%) | R3 (%) |
| --- | ---: | ---: | ---: |
| ACT | 26.2 | 33.8 | 49.9 |
| X-VLA | 13.6 | 15.9 | 41.1 |
| GR00T N1.7 | 12.7 | 11.6 | 34.4 |

## Repository files

| File | Purpose |
| --- | --- |
| `index.html` | Website entry point, research narrative, evaluation design, and exploration sections |
| `site-config.js` | GitHub Pages project base path |
| `styles.css` | Typography, media sizing, and responsive layout |
| `story.css` | Section layouts, pipeline, benchmark overview, and OOD matrix |
| `protocol.js` / `protocol.css` | Protocol timeline and comparison charts |
| `explorer.css` | Responsive video explorer layout |
| `content.js` | Central video and image configuration |
| `app.js` | Gallery tabs, task deep links, horizontal navigation, and playback |
| `results.js` | Overall result charts and values |
| `task-results.js` | Task table, filters, and subset means |
| `scripts/build_task_results.py` | Task-data validation and website data generation |
| `assets/paper.pdf` | Paper copy with PDF document metadata removed |
| `assets/results.csv` | Overall result table |
| `assets/task-results.csv` | Downloadable task-level data, with 240 rows |
| `assets/task-results-data.js` | Task data loaded directly by the website |
| `assets/task-results-verification.csv` | Arithmetic comparison of the 42 overall means |

## Anonymous hosting

The site serves its assets locally and uses relative paths, without external fonts, CDNs, or analytics scripts. Place this directory at the root of the repository to be anonymized, configure the mirror through anonymous.4open.science, and check the videos, PDF, and charts at the generated address.

Review repository documentation, links, new media, audio, and filenames for identifying information before creating an anonymous copy.
