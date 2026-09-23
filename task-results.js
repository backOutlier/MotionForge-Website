(() => {
  'use strict';

  const section = document.getElementById('task-results');
  if (!section) return;

  const data = window.MOTIONFORGE_TASK_RESULTS;
  const conditionSelect = document.getElementById('task-condition');
  const sceneSelect = document.getElementById('task-scene');
  const horizonSelect = document.getElementById('task-horizon');
  const head = document.getElementById('task-results-head');
  const body = document.getElementById('task-results-body');
  const average = document.getElementById('task-results-average');
  const count = document.getElementById('task-results-count');
  const caption = document.getElementById('task-results-caption');
  const fallback = document.getElementById('task-results-fallback');

  if (!data || !data.rows || !data.policies || !data.conditions) {
    fallback.textContent = 'Task results could not be loaded. Download the task CSV above to view all results.';
    [conditionSelect, sceneSelect, horizonSelect].forEach((select) => {
      select.disabled = true;
    });
    return;
  }

  const sceneOrder = ['fc', 'cm', 'ht', 'ei'];
  const taskNames = new Map();
  (window.MOTIONFORGE_GALLERIES || []).forEach((gallery) => {
    if (gallery.group !== 'scene') return;
    gallery.videos.forEach((video) => {
      const match = (video.caption || '').match(/^([A-Z]+)-(\d+)/);
      if (match) taskNames.set(`${match[1]}-${match[2]}`, video.title);
    });
  });

  const displayTask = (task) => task.replace(/^HRI/, 'EI').replace(/^([A-Z]+)(\d+)$/, '$1-$2');
  const makeCell = (tag, text) => {
    const cell = document.createElement(tag);
    cell.textContent = text;
    return cell;
  };

  conditionSelect.replaceChildren(...data.conditions.map((condition) => {
    const option = document.createElement('option');
    option.value = condition.key;
    option.textContent = condition.label;
    return option;
  }));
  if (data.conditions.some((condition) => condition.key === 'id')) conditionSelect.value = 'id';

  head.replaceChildren(...['Task', 'Horizon', ...data.policies.map((policy) => policy.label)].map((label) => {
    const cell = makeCell('th', label);
    cell.scope = 'col';
    return cell;
  }));

  const render = () => {
    const condition = data.conditions.find((item) => item.key === conditionSelect.value);
    if (!condition) return;
    const rows = data.rows.filter((row) => row.condition === condition.key
      && (sceneSelect.value === 'all' || row.scene === sceneSelect.value)
      && (horizonSelect.value === 'all' || row.horizon === horizonSelect.value))
      .sort((a, b) => sceneOrder.indexOf(a.scene) - sceneOrder.indexOf(b.scene) || a.task.localeCompare(b.task));

    body.replaceChildren(...rows.map((result) => {
      const row = document.createElement('tr');
      row.dataset.task = result.task;
      const taskCell = document.createElement('th');
      taskCell.scope = 'row';
      const taskId = displayTask(result.task);
      const id = makeCell('span', taskId);
      id.className = 'task-id';
      taskCell.append(id);
      if (taskNames.has(taskId)) {
        const title = makeCell('span', taskNames.get(taskId));
        title.className = 'task-title';
        taskCell.append(title);
      }
      row.append(taskCell, makeCell('td', result.horizon === 'short' ? 'Short' : 'Long'));
      data.policies.forEach((policy) => {
        row.append(makeCell('td', result.values[policy.key].toFixed(2)));
      });
      return row;
    }));

    if (!rows.length) {
      const row = document.createElement('tr');
      const cell = makeCell('td', 'No tasks match these filters.');
      cell.colSpan = data.policies.length + 2;
      row.append(cell);
      body.append(row);
    }

    const label = makeCell('th', `Mean (${rows.length} ${rows.length === 1 ? 'task' : 'tasks'})`);
    label.scope = 'row';
    label.colSpan = 2;
    average.replaceChildren(label, ...data.policies.map((policy) => {
      const mean = rows.length ? rows.reduce((sum, row) => sum + row.values[policy.key], 0) / rows.length : null;
      return makeCell('td', mean === null ? '—' : mean.toFixed(2));
    }));

    const sceneLabel = sceneSelect.selectedOptions[0].textContent;
    const horizonLabel = horizonSelect.value === 'all' ? 'All horizons' : `${horizonSelect.selectedOptions[0].textContent} tasks`;
    count.textContent = `${rows.length} of 40 tasks · ${condition.label} · ${sceneLabel} · ${horizonLabel}`;
    caption.textContent = `${condition.label}: success rates (%) by task. Higher is better.`;
  };

  [conditionSelect, sceneSelect, horizonSelect].forEach((select) => select.addEventListener('change', render));
  fallback.hidden = true;
  render();
})();
