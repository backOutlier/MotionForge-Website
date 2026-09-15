(() => {
  'use strict';

  // Overall / All success rates (%) from Tables II and III of the manuscript.
  // Keep this order and the shared 0–25% scale across every evaluation setting.
  const policies = [
    { name: 'ACT', id: 22.20, lighting: 10.65, object: 14.90, background: 8.20, speed: 17.00, joint: 0.10 },
    { name: 'X-VLA', id: 13.10, lighting: 17.70, object: 13.20, background: 15.80, speed: 19.05, joint: 5.85 },
    { name: 'GR00T N1.7', id: 11.55, lighting: 14.80, object: 10.00, background: 12.40, speed: 10.15, joint: 5.30 },
    { name: 'SmolVLA', id: 6.95, lighting: 5.30, object: 1.30, background: 5.90, speed: 10.70, joint: 2.05 },
    { name: 'π0.5', id: 4.85, lighting: 2.70, object: 1.40, background: 3.35, speed: 7.40, joint: 1.65 },
    { name: 'DP', id: 4.60, lighting: 1.60, object: 2.15, background: 4.20, speed: 12.65, joint: 0.00 },
    { name: 'FastWAM', id: 1.15, lighting: 1.05, object: 1.55, background: 0.05, speed: 1.15, joint: 0.00 },
  ];

  const settings = {
    id: {
      title: 'In-distribution performance',
      context: 'All 40 tasks · Overall / All column · Table II',
      insight: 'ACT reaches the highest overall success rate in this evaluation: 22.20%. Dynamic manipulation remains challenging for all seven evaluated policies.',
    },
    lighting: {
      title: 'Lighting shift',
      context: 'All 40 tasks · Lighting OOD / All column · Table III',
      insight: 'Under held-out lighting, X-VLA reaches 17.70% and GR00T N1.7 reaches 14.80%; both exceed their in-distribution scores in these experiments.',
    },
    object: {
      title: 'Unseen objects',
      context: 'All 40 tasks · Object OOD / All column · Table III',
      insight: 'ACT reaches 14.90% on unseen objects, followed by X-VLA at 13.20%. Object shifts reduce success for five of the seven evaluated policies.',
    },
    background: {
      title: 'Background shift',
      context: 'All 40 tasks · Background OOD / All column · Table III',
      insight: 'X-VLA reaches 15.80% and GR00T N1.7 reaches 12.40% under held-out backgrounds. The effect of a visual shift varies across policies.',
    },
    speed: {
      title: 'Motion-speed shift',
      context: 'All 40 tasks · Speed OOD / All column · Table III',
      insight: 'These scores pool slower and faster settings, using slower settings alone where no valid faster setting exists. They are distinct from the common-subset, per-speed analysis in Figure 6(a).',
    },
    joint: {
      title: 'All four factors shift',
      context: 'All 40 tasks · Joint OOD / All column · Table III',
      insight: 'With lighting, objects, backgrounds, and speed shifted together, the highest overall success rate is 5.85%. Every evaluated policy scores below its in-distribution result.',
    },
  };

  const modes = Object.keys(settings);
  const tabs = Array.from(document.querySelectorAll('[data-result-mode]'));
  const chart = document.getElementById('results-chart');
  const title = document.getElementById('result-title');
  const context = document.getElementById('result-context');
  const insight = document.getElementById('result-insight');
  const tableBody = document.getElementById('results-table-body');

  if (!chart || !tabs.length) return;

  tabs.forEach((tab) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', 'results-chart');
    if (!tab.id) tab.id = `result-tab-${tab.dataset.resultMode}`;
  });
  chart.setAttribute('role', 'tabpanel');

  if (tableBody) {
    const rows = policies.map((policy) => {
      const row = document.createElement('tr');
      const name = document.createElement('th');
      name.scope = 'row';
      name.textContent = policy.name;
      row.append(name);
      modes.forEach((mode) => {
        const value = document.createElement('td');
        value.textContent = policy[mode].toFixed(2);
        row.append(value);
      });
      return row;
    });
    tableBody.replaceChildren(...rows);
  }

  const render = (mode) => {
    if (!Object.prototype.hasOwnProperty.call(settings, mode)) return;
    const setting = settings[mode];
    const highest = Math.max(...policies.map((policy) => policy[mode]));

    tabs.forEach((tab) => {
      const selected = tab.dataset.resultMode === mode;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) chart.setAttribute('aria-labelledby', tab.id);
    });

    const rows = policies.map((policy) => {
      const row = document.createElement('div');
      row.className = `result-row${policy[mode] === highest ? ' is-best' : ''}`;

      const name = document.createElement('span');
      name.className = 'result-name';
      name.textContent = policy.name;

      const track = document.createElement('div');
      track.className = 'result-track';
      track.setAttribute('aria-hidden', 'true');
      const bar = document.createElement('div');
      bar.className = 'result-bar';
      bar.style.width = `${(policy[mode] / 25) * 100}%`;
      track.append(bar);

      const value = document.createElement('span');
      value.className = 'result-value';
      value.textContent = `${policy[mode].toFixed(2)}%`;
      row.append(name, track, value);
      return row;
    });

    chart.replaceChildren(...rows);
    if (title) title.textContent = setting.title;
    if (context) context.textContent = setting.context;
    if (insight) insight.textContent = setting.insight;
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => render(tab.dataset.resultMode));
    tab.addEventListener('keydown', (event) => {
      let nextIndex;
      switch (event.key) {
        case 'ArrowLeft':
          nextIndex = (index - 1 + tabs.length) % tabs.length;
          break;
        case 'ArrowRight':
          nextIndex = (index + 1) % tabs.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = tabs.length - 1;
          break;
        default:
          return;
      }
      event.preventDefault();
      tabs[nextIndex].focus();
      render(tabs[nextIndex].dataset.resultMode);
    });
  });

  const initialTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true');
  render(initialTab ? initialTab.dataset.resultMode : 'id');
})();
