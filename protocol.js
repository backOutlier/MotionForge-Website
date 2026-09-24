(() => {
  'use strict';

  const protocols = [
    { id: 'r1', label: 'R1', title: 'Fine asynchronous steps', detail: 'The environment keeps advancing at 120 Hz while the policy computes.', ticks: Array.from({ length: 26 }, (_, i) => i / 25) },
    { id: 'r2', label: 'R2', title: 'Coarser asynchronous steps', detail: 'The environment also advances during inference, with coarser simulation steps.', ticks: [0, 0.2, 0.4, 0.6, 0.8, 1] },
    { id: 'r3', label: 'R3', title: 'Step-synchronous execution', detail: 'The environment freezes during inference and resumes when an action returns.', ticks: Array.from({ length: 9 }, (_, i) => (17 + i) / 25) },
  ];

  // Fig. 6(c). Source: ../chart_source/protocol_data.csv.
  // FC and CM contain 10 tasks each; their means therefore have equal weight.
  const results = [
    { name: 'ACT', scores: [26.2, 33.8, 49.9] },
    { name: 'X-VLA', scores: [13.6, 15.9, 41.1] },
    { name: 'GR00T N1.7', scores: [12.7, 11.6, 34.4] },
  ];

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function renderDemo(mount) {
    const figure = node('figure', 'protocol-figure');
    figure.setAttribute('aria-labelledby', 'protocol-figure-title');
    figure.setAttribute('aria-describedby', 'protocol-figure-caption');
    const header = node('div', 'protocol-figure-header');
    const titleBlock = node('div');
    titleBlock.append(node('p', 'protocol-eyebrow', 'Shared wall-clock timeline'));
    const title = node('h3', 'protocol-figure-title', 'The world moves while the policy thinks.');
    title.id = 'protocol-figure-title';
    titleBlock.append(title);

    const controls = node('div', 'protocol-controls');
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', 'Timeline playback');
    const toggle = node('button', 'protocol-control protocol-control-primary', 'Play timeline');
    const reset = node('button', 'protocol-control', 'Reset');
    toggle.type = reset.type = 'button';
    controls.append(toggle, reset);
    header.append(titleBlock, controls);
    figure.append(header);

    const timeline = node('div', 'protocol-timeline');
    const axisRow = node('div', 'protocol-axis-row');
    axisRow.append(node('div', 'protocol-axis-label', 'Policy timeline'));
    const axis = node('div', 'protocol-axis');
    axis.setAttribute('aria-hidden', 'true');
    axis.append(node('span', 'protocol-observation-label', 'Observation'));
    axis.append(node('span', 'protocol-return-label', 'Action returns'));
    const stages = node('div', 'protocol-stages');
    stages.append(node('span', 'protocol-inference-stage', 'Inference'));
    stages.append(node('span', 'protocol-action-stage', 'Execution'));
    axis.append(stages);
    axisRow.append(axis);
    timeline.append(axisRow);

    const ticks = [];
    const cursors = [];
    protocols.forEach(protocol => {
      const row = node('div', `protocol-row protocol-${protocol.id}`);
      const label = node('div', 'protocol-row-label');
      const heading = node('h4');
      heading.append(node('span', 'protocol-badge', protocol.label));
      if (protocol.id === 'r1') heading.append(node('span', 'protocol-default', 'MotionForge · 120 Hz'));
      else heading.append(node('span', 'protocol-row-kind', protocol.id === 'r2' ? 'Coarser updates' : 'Paused inference'));
      label.append(heading, node('p', 'protocol-row-description', protocol.detail));

      const track = node('div', 'protocol-track');
      track.setAttribute('role', 'img');
      track.setAttribute('aria-label', `${protocol.label}: ${protocol.title}. ${protocol.detail}`);
      const rail = node('div', 'protocol-rail');
      rail.setAttribute('aria-hidden', 'true');
      rail.append(node('span', 'protocol-inference-background'));
      rail.append(node('span', 'protocol-return-line'));
      if (protocol.id === 'r3') rail.append(node('span', 'protocol-freeze-label', 'Environment frozen'));
      rail.append(node('span', 'protocol-rail-line'));
      protocol.ticks.forEach(position => {
        const tick = node('span', 'protocol-tick');
        tick.style.left = `${position * 100}%`;
        rail.append(tick);
        ticks.push({ element: tick, position });
      });
      const cursor = node('span', 'protocol-playhead');
      rail.append(cursor);
      cursors.push(cursor);
      track.append(rail);
      track.append(node('span', 'protocol-track-caption', protocol.title));
      row.append(label, track);
      timeline.append(row);
    });
    figure.append(timeline);

    const footer = node('div', 'protocol-timeline-footer');
    const status = node('p', 'protocol-status', 'At a glance: R1 and R2 update during inference; R3 waits.');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    footer.append(status, node('span', 'protocol-tick-key', 'Each tick is an environment update.'));
    figure.append(footer);

    const caption = node('figcaption', 'protocol-caption');
    caption.id = 'protocol-figure-caption';
    caption.append(document.createTextNode('Schematic illustration, not a recorded rollout. Timing and tick spacing are illustrative; no specific R2 frequency is implied. R1 uses a fixed 120 Hz simulation clock. '));
    const source = node('a', 'inline-source', 'Fig. 3 and Sec. III-D ↗');
    source.href = 'assets/paper.pdf#page=3';
    source.target = '_blank';
    source.rel = 'noopener';
    caption.append(source);
    figure.append(caption);
    mount.replaceChildren(figure);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const duration = 7200;
    const returnPosition = 0.68;
    let progress = 0;
    let isPlaying = false;
    let hasStarted = false;
    let startedAt = 0;
    let animationFrame = 0;
    let phase = '';

    function updateControls() {
      if (reducedMotion.matches) toggle.textContent = progress >= 1 ? 'Replay steps' : 'Next phase';
      else toggle.textContent = isPlaying ? 'Pause' : progress >= 1 ? 'Replay timeline' : hasStarted ? 'Resume' : 'Play timeline';
      toggle.setAttribute('aria-label', toggle.textContent);
      reset.disabled = !hasStarted;
    }

    function paint() {
      figure.dataset.playback = hasStarted ? 'active' : 'overview';
      cursors.forEach(cursor => { cursor.style.left = `${progress * 100}%`; });
      ticks.forEach(tick => { tick.element.classList.toggle('is-future', hasStarted && tick.position > progress); });
      let nextPhase = 'overview';
      if (hasStarted) nextPhase = progress >= 1 ? 'complete' : progress >= returnPosition ? 'execution' : 'inference';
      if (nextPhase !== phase) {
        phase = nextPhase;
        const labels = {
          overview: 'At a glance: R1 and R2 update during inference; R3 waits.',
          inference: 'Policy inference: R1 and R2 advance; R3 stays frozen.',
          execution: 'The action has returned. All three environments now advance.',
          complete: 'Timeline complete. R3 omitted environment evolution during inference.',
        };
        status.textContent = labels[phase];
      }
      figure.dataset.phase = phase;
    }

    function stop() {
      isPlaying = false;
      cancelAnimationFrame(animationFrame);
      updateControls();
    }

    function animate(now) {
      if (!isPlaying) return;
      progress = Math.min((now - startedAt) / duration, 1);
      paint();
      if (progress >= 1) stop();
      else animationFrame = requestAnimationFrame(animate);
    }

    toggle.addEventListener('click', () => {
      if (reducedMotion.matches) {
        hasStarted = true;
        progress = progress >= 1 ? 0.34 : progress < 0.34 ? 0.34 : progress < returnPosition ? returnPosition : 1;
        paint();
        updateControls();
        return;
      }
      if (isPlaying) { stop(); return; }
      if (progress >= 1) progress = 0;
      hasStarted = true;
      isPlaying = true;
      startedAt = performance.now() - progress * duration;
      paint();
      updateControls();
      animationFrame = requestAnimationFrame(animate);
    });

    reset.addEventListener('click', () => {
      stop();
      progress = 0;
      hasStarted = false;
      paint();
      updateControls();
    });
    reducedMotion.addEventListener('change', () => { stop(); updateControls(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden && isPlaying) stop(); });
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting && isPlaying) stop();
      });
      observer.observe(figure);
    }
    paint();
    updateControls();
  }

  function renderResults(mount) {
    const figure = node('figure', 'protocol-result-figure');
    figure.setAttribute('aria-labelledby', 'protocol-result-title');
    const header = node('div', 'protocol-results-header');
    header.append(node('p', 'protocol-eyebrow', 'Execution protocol ablation · Fig. 6(c)'));
    const title = node('h3', 'protocol-figure-title', 'Pausing the world changes the score.');
    title.id = 'protocol-result-title';
    header.append(title);
    const scope = node('p', 'protocol-result-scope', 'Mean success rate (%) on 20 tasks in Factory Conveyor and Circular Motion, across three policies.');
    scope.id = 'protocol-results-scope';
    header.append(scope);
    figure.append(header);

    const legend = node('ul', 'protocol-result-legend');
    protocols.forEach(protocol => {
      const item = node('li', `protocol-${protocol.id}`);
      const swatch = node('span', 'protocol-legend-swatch');
      swatch.setAttribute('aria-hidden', 'true');
      item.append(swatch, document.createTextNode(`${protocol.label} · ${protocol.id === 'r1' ? 'Fine asynchronous' : protocol.id === 'r2' ? 'Coarser asynchronous' : 'Frozen during inference'}`));
      legend.append(item);
    });
    figure.append(legend);

    const charts = node('div', 'protocol-result-charts');
    charts.setAttribute('aria-describedby', scope.id);
    results.forEach(result => {
      const card = node('div', 'protocol-result-card');
      card.append(node('h4', 'protocol-result-policy', result.name));
      const group = node('div', 'protocol-result-bars');
      group.setAttribute('role', 'img');
      group.setAttribute('aria-label', `${result.name}: R1 ${result.scores[0].toFixed(1)}%, R2 ${result.scores[1].toFixed(1)}%, R3 ${result.scores[2].toFixed(1)}%.`);
      result.scores.forEach((score, i) => {
        const row = node('div', `protocol-result-row protocol-${protocols[i].id}`);
        row.setAttribute('aria-hidden', 'true');
        row.append(node('span', 'protocol-result-label', protocols[i].label));
        const track = node('div', 'protocol-result-track');
        const bar = node('span', 'protocol-result-bar');
        bar.style.width = `${score / 60 * 100}%`;
        track.append(bar);
        row.append(track, node('span', 'protocol-result-value', score.toFixed(1)));
        group.append(row);
      });
      const axis = node('div', 'protocol-result-axis');
      axis.setAttribute('aria-hidden', 'true');
      [0, 20, 40, 60].forEach(value => axis.append(node('span', '', `${value}${value === 60 ? '%' : ''}`)));
      group.append(axis);
      card.append(group);
      charts.append(card);
    });
    figure.append(charts);

    const insight = node('figcaption', 'protocol-result-insight');
    insight.append(node('strong', '', '+21.7–27.5 percentage points'));
    insight.append(document.createTextNode(' higher success with frozen inference (R3) than real-time execution (R1) in this ablation. R1 versus R2 varies by policy.'));
    figure.append(insight);

    const details = node('details', 'protocol-result-details');
    details.append(node('summary', '', 'View protocol results table'));
    const table = node('table', 'protocol-result-table');
    table.append(node('caption', '', 'Mean success rate (%), FC + CM. All three protocols use the same evaluation subset.'));
    const head = node('thead');
    const headRow = node('tr');
    ['Policy', 'R1', 'R2', 'R3'].forEach(label => {
      const cell = node('th', '', label);
      cell.scope = 'col';
      headRow.append(cell);
    });
    head.append(headRow);
    table.append(head);
    const body = node('tbody');
    results.forEach(result => {
      const row = node('tr');
      const name = node('th', '', result.name);
      name.scope = 'row';
      row.append(name);
      result.scores.forEach(score => row.append(node('td', '', score.toFixed(1))));
      body.append(row);
    });
    table.append(body);
    details.append(table);
    figure.append(details);
    mount.replaceChildren(figure);
  }

  const demo = document.getElementById('protocol-demo');
  const resultMount = document.getElementById('protocol-results');
  if (demo) renderDemo(demo);
  if (resultMount) renderResults(resultMount);
})();
