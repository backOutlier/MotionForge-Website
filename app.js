(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const videos = new Set();
  const galleries = [];

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function icon(kind) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', kind === 'play' ? 'M9 5.5 19 12 9 18.5Z' : kind === 'previous' ? 'M15 5 8 12l7 7' : 'm9 5 7 7-7 7');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.append(path);
    return svg;
  }

  const videoObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => entries.forEach(entry => {
      entry.target.dataset.inViewport = String(entry.isIntersecting);
      if (!entry.isIntersecting) entry.target.pause();
    })) : null;

  function setPoster(video, poster) {
    if (!poster) video.removeAttribute('poster');
    else video.poster = poster;
  }

  function createVideo(asset, label) {
    const video = node('video', 'asset-media');
    video.controls = true;
    video.playsInline = true;
    video.muted = asset.muted !== false;
    video.preload = 'none';
    if (asset.playbackGroup) video.dataset.playbackGroup = asset.playbackGroup;
    video.setAttribute('aria-label', asset.alt || label);
    // Bind the existing still immediately, even with video preload disabled.
    // Gallery panels themselves are created only when their tab is opened.
    setPoster(video, asset.poster);
    if (asset.captions) {
      const track = document.createElement('track');
      track.kind = 'captions';
      track.src = asset.captions;
      track.srclang = 'en';
      track.label = 'English';
      track.default = true;
      video.append(track);
    }
    videos.add(video);
    video.addEventListener('play', () => {
      if (document.hidden || video.closest('[hidden]')) {
        video.pause();
        return;
      }
      videos.forEach(other => {
        const sameGroup = video.dataset.playbackGroup && other.dataset.playbackGroup === video.dataset.playbackGroup;
        if (other !== video && !sameGroup) other.pause();
      });
    });
    if (videoObserver) videoObserver.observe(video);
    return video;
  }

  const overview = document.querySelector('[data-media-slot="overview"]');
  const overviewAsset = window.MOTIONFORGE_MEDIA && window.MOTIONFORGE_MEDIA.overview;
  if (overview && overviewAsset && overviewAsset.src) {
    const element = overviewAsset.type === 'video'
      ? createVideo(overviewAsset, 'MotionForge overview')
      : node('img', 'asset-media');
    if (element.tagName === 'IMG') {
      element.alt = overviewAsset.alt || 'MotionForge overview';
      element.decoding = 'async';
    }
    element.addEventListener('error', () => {
      overview.classList.remove('has-media');
      element.remove();
      overview.append(node('p', 'media-error', 'This media could not be loaded.'));
    }, { once: true });
    overview.append(element);
    overview.classList.add('has-media');
    element.src = overviewAsset.src;
  }

  document.querySelectorAll('[data-comparison-slot]').forEach(slot => {
    const asset = (window.MOTIONFORGE_COMPARISON || {})[slot.dataset.comparisonSlot];
    if (!asset || !asset.src) return;
    const video = createVideo(asset, 'Causal motion comparison');
    video.addEventListener('error', () => {
      slot.classList.remove('has-media');
      video.remove();
      slot.append(node('p', 'comparison-error', 'This video could not be loaded.'));
    }, { once: true });
    slot.append(video);
    slot.classList.add('has-media');
    video.src = asset.src;
  });

  function createCard(asset, gallery, index) {
    const title = asset.title || `${gallery.title} · Clip ${String(index + 1).padStart(2, '0')}`;
    const card = node('article', 'video-card');
    card.id = `gallery-${gallery.id}-clip-${index + 1}`;
    card.setAttribute('aria-label', `${index + 1} of ${gallery.videos.length}: ${title}`);
    const frame = node('div', 'video-frame');
    const placeholder = node('div', 'video-placeholder');
    placeholder.append(icon('play'), node('span', '', 'Video placeholder'));
    frame.append(placeholder, node('span', 'clip-number', String(index + 1).padStart(2, '0')));
    const views = Array.isArray(asset.views) ? asset.views.filter(view => view.src) : [];
    const initialView = views.find(view => view.src === asset.src) || views[0];
    const initialAsset = initialView ? { ...asset, ...initialView } : asset;
    let cameraControls;
    if (initialAsset.src) {
      const video = createVideo(initialAsset, title);
      video.id = `${card.id}-video`;
      let pendingSwitch = null;
      frame.classList.add('has-media');
      video.addEventListener('error', () => {
        pendingSwitch = null;
        video.pause();
        frame.classList.remove('has-media');
        video.hidden = true;
        placeholder.replaceChildren(icon('play'), node('span', '', 'Video unavailable'));
      });
      video.addEventListener('loadedmetadata', () => {
        if (!pendingSwitch) return;
        const { time, playing } = pendingSwitch;
        pendingSwitch = null;
        if (time > 0 && Number.isFinite(video.duration)) {
          video.currentTime = Math.min(time, Math.max(0, video.duration - 0.05));
        }
        const anotherPlaying = [...videos].some(other => other !== video && !other.paused);
        if (playing && !anotherPlaying && !document.hidden && !video.closest('[hidden]') && video.dataset.inViewport !== 'false') {
          video.play().catch(() => {});
        }
      });
      frame.append(video);
      video.src = initialAsset.src;
      if (views.length > 1) {
        frame.classList.add('has-views');
        cameraControls = node('div', 'camera-controls');
        cameraControls.setAttribute('role', 'group');
        cameraControls.setAttribute('aria-label', `Camera view for ${title}`);
        let selectedView = initialView.id;
        video.dataset.view = selectedView;
        video.setAttribute('aria-label', `${title} — ${initialView.label} view`);
        const buttons = views.map(view => {
          const button = node('button', 'camera-button', view.label || view.id);
          button.type = 'button';
          button.dataset.camera = view.id;
          button.setAttribute('aria-controls', video.id);
          button.setAttribute('aria-pressed', String(view.id === selectedView));
          button.addEventListener('click', () => {
            if (view.id === selectedView && !video.error) return;
            const state = pendingSwitch || { time: video.currentTime, playing: !video.paused && !video.ended };
            video.pause();
            selectedView = view.id;
            buttons.forEach(other => other.setAttribute('aria-pressed', String(other.dataset.camera === selectedView)));
            video.dataset.view = selectedView;
            video.setAttribute('aria-label', `${title} — ${view.label || view.id} view`);
            video.hidden = false;
            frame.classList.add('has-media');
            setPoster(video, view.poster);
            video.src = view.src;
            pendingSwitch = { time: state.time, playing: state.playing };
            // Posters are enough until playback begins. Only fetch video data
            // when restoring a playback position or continuing playback.
            if (state.time > 0 || state.playing) {
              video.preload = 'metadata';
              video.load();
            }
          });
          return button;
        });
        cameraControls.append(...buttons);
      }
    }
    const caption = node('div', 'video-caption');
    caption.append(node('h4', '', title));
    if (asset.caption) caption.append(node('p', '', asset.caption));
    card.append(frame);
    if (cameraControls) card.append(cameraControls);
    card.append(caption);
    return card;
  }

  function createGallery(gallery, container) {
    if (!container || !Array.isArray(gallery.videos)) return;
    const section = node('section', 'gallery-row');
    section.id = `gallery-${gallery.id}`;
    section.setAttribute('aria-labelledby', `gallery-title-${gallery.id}`);
    const heading = node('div', 'gallery-heading');
    const headingCopy = node('div', 'gallery-heading-copy');
    const title = node('h3', 'gallery-title', gallery.title);
    title.id = `gallery-title-${gallery.id}`;
    headingCopy.append(title);
    if (gallery.description) headingCopy.append(node('p', 'gallery-description', gallery.description));
    heading.append(headingCopy);
    if (!gallery.videos.length) {
      section.classList.add('gallery-row-empty');
      section.append(heading, node('p', 'gallery-empty-message', gallery.emptyMessage || 'Videos coming soon.'));
      container.append(section);
      return;
    }
    const controls = node('div', 'gallery-controls');
    const previous = node('button', 'gallery-arrow gallery-previous');
    previous.type = 'button';
    previous.setAttribute('aria-label', `Previous video in ${gallery.title}`);
    previous.setAttribute('aria-controls', `gallery-track-${gallery.id}`);
    previous.append(icon('previous'));
    const next = node('button', 'gallery-arrow gallery-next');
    next.type = 'button';
    next.setAttribute('aria-label', `Next video in ${gallery.title}`);
    next.setAttribute('aria-controls', `gallery-track-${gallery.id}`);
    next.append(icon('next'));
    const count = node('span', 'gallery-count');
    count.setAttribute('aria-live', 'polite');
    count.setAttribute('aria-atomic', 'true');
    controls.append(previous, count, next);
    const track = node('div', 'gallery-track');
    track.id = `gallery-track-${gallery.id}`;
    track.tabIndex = 0;
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', `${gallery.title} videos. Use left and right arrow keys to browse.`);
    const cards = gallery.videos.map((asset, index) => createCard(asset, gallery, index));
    track.append(...cards);
    section.append(heading, track, controls);
    container.append(section);

    let pages = [];
    let currentPage = 0;
    let pendingPosition = null;
    let scrollFrame = 0;
    let settleTimer;

    function maxScroll() {
      return Math.max(0, track.scrollWidth - track.clientWidth);
    }

    function cardPosition(index) {
      const first = cards[0].getBoundingClientRect();
      const card = cards[index].getBoundingClientRect();
      return Math.max(0, Math.min(maxScroll(), card.left - first.left));
    }

    function visibleIndices() {
      const bounds = track.getBoundingClientRect();
      const left = bounds.left + track.clientLeft;
      const right = left + track.clientWidth;
      const visible = cards.map((card, index) => {
        const rect = card.getBoundingClientRect();
        const fraction = Math.max(0, Math.min(rect.right, right) - Math.max(rect.left, left)) / rect.width;
        return { index, fraction };
      });
      const majority = visible.filter(card => card.fraction > 0.5);
      return (majority.length ? majority : visible.filter(card => card.fraction > 0)).map(card => card.index);
    }

    function pauseOutsideTrack() {
      const bounds = track.getBoundingClientRect();
      cards.forEach(card => {
        const video = card.querySelector('video');
        if (!video || video.paused) return;
        const rect = card.getBoundingClientRect();
        if (section.closest('[hidden]') || rect.right <= bounds.left || rect.left >= bounds.right) video.pause();
      });
    }

    function sync() {
      if (section.closest('[hidden]') || !track.clientWidth) {
        pauseOutsideTrack();
        return;
      }
      const visible = visibleIndices();
      if (visible.length) {
        const first = visible[0] + 1;
        const last = visible[visible.length - 1] + 1;
        count.textContent = `${first === last ? first : `${first}–${last}`} / ${cards.length}`;
      }
      previous.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft >= maxScroll() - 1;
      currentPage = pages.reduce((best, page, index) =>
        Math.abs(page.left - track.scrollLeft) < Math.abs(pages[best].left - track.scrollLeft) ? index : best, 0);
      pauseOutsideTrack();
    }

    function settle() {
      clearTimeout(settleTimer);
      pendingPosition = null;
      sync();
    }

    function selectPosition(left, instant = false) {
      pendingPosition = Math.max(0, Math.min(maxScroll(), left));
      track.scrollTo({ left: pendingPosition, behavior: instant || reducedMotion.matches ? 'instant' : 'smooth' });
      clearTimeout(settleTimer);
      settleTimer = setTimeout(settle, 180);
      if (instant || reducedMotion.matches) sync();
    }

    function step(direction) {
      const from = pendingPosition === null ? track.scrollLeft : pendingPosition;
      const candidates = pages.filter(page => direction > 0 ? page.left > from + 1 : page.left < from - 1);
      const target = direction > 0 ? candidates[0] : candidates[candidates.length - 1];
      if (target) selectPosition(target.left);
    }

    previous.addEventListener('click', () => step(-1));
    next.addEventListener('click', () => step(1));
    cards.forEach((card, index) => {
      card.addEventListener('click', event => {
        if (!event.target.closest('video, button, a, input, select, textarea')) selectPosition(cardPosition(index));
      });
    });
    track.addEventListener('keydown', event => {
      if (event.target !== track) return;
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'Home') selectPosition(0);
      else if (event.key === 'End') selectPosition(maxScroll());
      else step(event.key === 'ArrowRight' ? 1 : -1);
    });
    // Keep native touch and trackpad scrolling; synchronize the controls afterward.
    track.addEventListener('pointerdown', () => { pendingPosition = null; }, { passive: true });
    track.addEventListener('wheel', () => { pendingPosition = null; }, { passive: true });
    track.addEventListener('scroll', () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(() => {
          scrollFrame = 0;
          sync();
        });
      }
      clearTimeout(settleTimer);
      settleTimer = setTimeout(settle, 180);
    }, { passive: true });
    track.addEventListener('scrollend', settle);

    function resize() {
      if (section.closest('[hidden]') || !track.clientWidth) return;
      const anchor = pages[currentPage] ? pages[currentPage].index : 0;
      const nextPages = [];
      cards.forEach((card, index) => {
        const left = cardPosition(index);
        if (!nextPages.length || Math.abs(left - nextPages[nextPages.length - 1].left) > 1) {
          nextPages.push({ left, index });
        }
      });
      pages = nextPages;
      selectPosition(cardPosition(anchor), true);
    }
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(resize);
      observer.observe(track);
    } else {
      window.addEventListener('resize', resize);
    }
    resize();
    const controller = {
      refresh: resize,
      stopMotion: () => selectPosition(pages[currentPage] ? pages[currentPage].left : 0, true),
      pauseOutsideTrack,
    };
    galleries.push(controller);
    return controller;
  }

  function createExplorer(group, containerId, defaultId, label) {
    const container = document.getElementById(containerId);
    const items = (window.MOTIONFORGE_GALLERIES || []).filter(gallery => gallery.group === group);
    if (!container || !items.length) return;
    container.classList.add('gallery-explorer');
    const tablist = node('div', 'explorer-tabs');
    tablist.setAttribute('role', 'tablist');
    tablist.setAttribute('aria-label', label);
    container.append(tablist);

    const panels = items.map(gallery => {
      const panel = node('div', 'explorer-panel');
      panel.id = `explorer-panel-${gallery.id}`;
      panel.hidden = true;
      panel.tabIndex = 0;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `explorer-tab-${gallery.id}`);
      container.append(panel);
      return panel;
    });
    const controllers = new Map();
    const tabs = items.map((gallery, index) => {
      const button = node('button', 'explorer-tab', group === 'ood' ? gallery.title.replace(/\sOOD$/, '') : gallery.title);
      button.id = `explorer-tab-${gallery.id}`;
      button.type = 'button';
      button.tabIndex = -1;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', 'false');
      button.setAttribute('aria-controls', panels[index].id);
      button.addEventListener('click', () => select(index));
      button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowLeft') next = (index + items.length - 1) % items.length;
        else if (event.key === 'ArrowRight') next = (index + 1) % items.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = items.length - 1;
        else return;
        event.preventDefault();
        select(next);
        tabs[next].focus();
        tabs[next].scrollIntoView({ block: 'nearest', inline: 'nearest' });
      });
      tablist.append(button);
      return button;
    });

    function select(index) {
      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[tabIndex].hidden = !selected;
        if (!selected) panels[tabIndex].querySelectorAll('video').forEach(video => video.pause());
      });
      const gallery = items[index];
      const panel = panels[index];
      if (!controllers.has(gallery.id)) {
        if (gallery.videos.length) {
          controllers.set(gallery.id, createGallery(gallery, panel));
        } else {
          const note = node('div', 'explorer-note');
          note.id = `gallery-${gallery.id}`;
          note.append(node('h3', '', gallery.title), node('p', '', gallery.id === 'joint'
            ? 'Lighting, objects, backgrounds, and motion speed change together in the joint evaluation.'
            : gallery.description || 'This evaluation is included in the results above.'));
          panel.append(note);
          controllers.set(gallery.id, null);
        }
      }
      const controller = controllers.get(gallery.id);
      if (controller) controller.refresh();
      const tabBounds = tabs[index].getBoundingClientRect();
      const listBounds = tablist.getBoundingClientRect();
      if (tabBounds.left < listBounds.left) tablist.scrollLeft += tabBounds.left - listBounds.left;
      else if (tabBounds.right > listBounds.right) tablist.scrollLeft += tabBounds.right - listBounds.right;
    }

    function revealHash() {
      const targetId = window.location.hash.slice(1);
      const index = items.findIndex(gallery => targetId === `gallery-${gallery.id}` || targetId.startsWith(`gallery-${gallery.id}-clip-`));
      if (index < 0) return;
      select(index);
      requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ block: 'start', inline: 'start', behavior: 'instant' });
      });
    }

    const defaultIndex = items.findIndex(gallery => gallery.id === defaultId);
    select(defaultIndex >= 0 ? defaultIndex : 0);
    window.addEventListener('hashchange', revealHash);
    document.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href^="#gallery-"]');
      // Clicking the same fragment again does not fire hashchange.
      if (link && link.getAttribute('href') === window.location.hash) revealHash();
    });
    revealHash();
  }

  createExplorer('scene', 'scene-galleries', 'fc', 'In-distribution scene');
  createExplorer('ood', 'ood-galleries', 'object', 'Out-of-distribution condition');

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (menuButton && nav) {
    function closeMenu() {
      menuButton.setAttribute('aria-expanded', 'false');
      const mark = menuButton.querySelector('span');
      if (mark) mark.textContent = '＋';
      nav.classList.remove('is-open');
    }
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      const mark = menuButton.querySelector('span');
      if (mark) mark.textContent = open ? '−' : '＋';
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    window.matchMedia('(min-width: 581px)').addEventListener('change', event => {
      if (event.matches) closeMenu();
    });
  }

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) galleries.forEach(gallery => gallery.stopMotion());
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach(video => video.pause());
  });
})();
