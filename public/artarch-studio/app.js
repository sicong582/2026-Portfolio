const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const els = {
  shell: $('.app-shell'),
  workspace: $('#workspace'),
  viewport: $('#canvasViewport'),
  world: $('#canvasWorld'),
  prompt: $('#promptCard'),
  promptInput: $('#promptInput'),
  generator: $('#generatorNode'),
  result: $('#resultNode'),
  resultCard: $('#resultCard'),
  resultStatus: $('#resultStatus'),
  renderPhase: $('#renderPhase'),
  run: $('#runButton'),
  nodeStatus: $('#nodeStatusText'),
  referenceRow: $('#referenceRow'),
  play: $('#playButton'),
  model: $('#modelSelect'),
  resolution: $('#resolutionSelect'),
  ratio: $('#ratioSelect'),
  zoomValue: $('#zoomValue'),
  zoomTop: $('#zoomTop'),
  connections: $('#connections'),
  inspectorTitle: $('#inspectorTitle'),
  inspectorPreview: $('#inspectorPreview'),
  propX: $('#propX'),
  propY: $('#propY'),
  propW: $('#propW'),
  propH: $('#propH'),
  toast: $('#toast')
};

const state = {
  zoom: .68,
  panX: 12,
  panY: 42,
  mode: 'video',
  generating: false,
  progress: 0,
  generationTimer: null,
  selected: $('#sourceNode'),
  drag: null,
  pan: null,
  spaceDown: false,
  nodeCount: 0,
  toastTimer: null
};

const modeCopy = {
  image: {
    title: 'Text to image',
    result: 'Generated image',
    credits: 8,
    model: 'Gemini Image Pro',
    phases: ['Reading prompt', 'Building composition', 'Refining details', 'Upscaling image']
  },
  video: {
    title: 'Image to video',
    result: 'Generated video',
    credits: 24,
    model: 'Gemini Omni Flash',
    phases: ['Reading references', 'Planning motion', 'Rendering frames', 'Finishing video']
  }
};

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('visible');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => els.toast.classList.remove('visible'), 1800);
}

function applyViewport() {
  els.world.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
  els.viewport.style.setProperty('--grid-x', `${state.panX}px`);
  els.viewport.style.setProperty('--grid-y', `${state.panY}px`);
  els.viewport.style.backgroundSize = `${20 * state.zoom}px ${20 * state.zoom}px`;
  const label = `${Math.round(state.zoom * 100)}%`;
  els.zoomValue.textContent = label;
  els.zoomTop.textContent = label;
}

function updateConnections() {
  $$('.connection-line').forEach(path => {
    const from = document.getElementById(path.dataset.from);
    const to = document.getElementById(path.dataset.to);
    if (!from || !to || from.hidden || to.hidden) {
      path.style.display = 'none';
      return;
    }
    path.style.display = '';
    const x1 = from.offsetLeft + from.offsetWidth;
    const y1 = from.offsetTop + from.offsetHeight / 2;
    const x2 = to.offsetLeft;
    const y2 = to.offsetTop + to.offsetHeight / 2;
    const bend = Math.max(60, Math.abs(x2 - x1) * .45);
    path.setAttribute('d', `M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`);
  });
}

function nodeImage(node) {
  return node.querySelector('.source-image-wrap img, .result-image, .asset-node-image');
}

function selectNode(node) {
  if (!node) return;
  $$('.canvas-node').forEach(item => item.classList.remove('selected'));
  node.classList.add('selected');
  state.selected = node;
  const title = node.dataset.nodeTitle || node.querySelector('.node-header strong')?.textContent || 'Canvas node';
  els.inspectorTitle.textContent = title;
  const preview = nodeImage(node);
  els.inspectorPreview.src = preview?.src || './assets/figma-preview.jpeg';
  els.inspectorPreview.style.opacity = preview ? '.86' : '.18';
  els.propX.value = Math.round(node.offsetLeft);
  els.propY.value = Math.round(node.offsetTop);
  els.propW.value = Math.round(node.offsetWidth);
  els.propH.value = Math.round(node.offsetHeight);
}

function makeNodeDraggable(node) {
  const handle = node.querySelector('.drag-handle');
  if (!handle) return;
  handle.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('button')) return;
    selectNode(node);
    state.drag = {
      node,
      startX: event.clientX,
      startY: event.clientY,
      left: node.offsetLeft,
      top: node.offsetTop
    };
    handle.setPointerCapture(event.pointerId);
  });
  handle.addEventListener('pointermove', event => {
    if (!state.drag || state.drag.node !== node) return;
    const dx = (event.clientX - state.drag.startX) / state.zoom;
    const dy = (event.clientY - state.drag.startY) / state.zoom;
    node.style.left = `${Math.max(20, state.drag.left + dx)}px`;
    node.style.top = `${Math.max(20, state.drag.top + dy)}px`;
    updateConnections();
    els.propX.value = Math.round(node.offsetLeft);
    els.propY.value = Math.round(node.offsetTop);
  });
  handle.addEventListener('pointerup', () => { state.drag = null; });
  node.addEventListener('pointerdown', event => {
    if (!event.target.closest('button, textarea, select, input, [contenteditable]')) selectNode(node);
  });
}

function setZoom(nextZoom, anchorX = els.viewport.clientWidth / 2, anchorY = els.viewport.clientHeight / 2) {
  const oldZoom = state.zoom;
  const clamped = Math.min(1.35, Math.max(.35, nextZoom));
  const worldX = (anchorX - state.panX) / oldZoom;
  const worldY = (anchorY - state.panY) / oldZoom;
  state.zoom = clamped;
  state.panX = anchorX - worldX * clamped;
  state.panY = anchorY - worldY * clamped;
  applyViewport();
}

function fitCanvas() {
  const bounds = { left: 75, top: 85, right: 1580, bottom: 690 };
  const availableW = els.viewport.clientWidth - 50;
  const availableH = els.viewport.clientHeight - 90;
  state.zoom = Math.min(.9, availableW / (bounds.right - bounds.left), availableH / (bounds.bottom - bounds.top));
  state.zoom = Math.max(els.viewport.clientWidth < 700 ? .3 : .42, state.zoom);
  state.panX = (els.viewport.clientWidth - (bounds.right - bounds.left) * state.zoom) / 2 - bounds.left * state.zoom;
  state.panY = (els.viewport.clientHeight - (bounds.bottom - bounds.top) * state.zoom) / 2 - bounds.top * state.zoom;
  applyViewport();
}

function generationPhase(progress) {
  const phases = modeCopy[state.mode].phases;
  if (progress < 24) return phases[0];
  if (progress < 51) return phases[1];
  if (progress < 83) return phases[2];
  return phases[3];
}

function updateGeneration() {
  state.progress = Math.min(96, state.progress + Math.max(1, Math.round((99 - state.progress) * .07)));
  const phase = generationPhase(state.progress);
  els.resultStatus.textContent = `Generating ${state.mode} · ${state.progress}%`;
  els.renderPhase.textContent = phase;
  els.nodeStatus.textContent = `${phase} · ${state.progress}%`;
}

function completeGeneration() {
  clearInterval(state.generationTimer);
  state.generating = false;
  state.progress = 100;
  els.prompt.classList.remove('generating');
  els.generator.classList.remove('generating');
  els.generator.classList.add('complete');
  els.result.classList.remove('generating');
  els.result.classList.add('complete');
  els.result.dataset.nodeTitle = modeCopy[state.mode].result;
  $('#resultTitle').textContent = modeCopy[state.mode].result;
  $('#resultMeta').textContent = `${state.mode === 'video' ? 'Video' : 'Image'} · ${els.resolution.value} · ${els.ratio.value}`;
  els.nodeStatus.textContent = `${state.mode === 'video' ? 'Video' : 'Image'} ready · added as V2`;
  els.promptInput.readOnly = false;
  els.run.disabled = false;
  $('.active-line').classList.remove('active-line');
  showToast(`${modeCopy[state.mode].result} is ready`);
  selectNode(els.result);
}

function generate(event) {
  event?.preventDefault();
  if (state.generating) return;
  if (!els.promptInput.value.trim()) {
    els.promptInput.focus();
    showToast('Write a prompt to start generating');
    return;
  }
  state.generating = true;
  state.progress = 3;
  els.prompt.classList.add('generating');
  els.generator.classList.add('generating');
  els.generator.classList.remove('complete');
  els.result.hidden = false;
  els.result.classList.add('generating');
  els.result.classList.remove('complete', 'playing');
  els.resultStatus.textContent = `Generating ${state.mode} · 3%`;
  els.renderPhase.textContent = generationPhase(3);
  els.nodeStatus.textContent = `${generationPhase(3)} · 3%`;
  els.promptInput.readOnly = true;
  els.run.disabled = true;
  $('.connection-line[data-to="resultNode"]').classList.add('active-line');
  const credits = Number($('#workspaceCredits').textContent.replace(',', '')) - modeCopy[state.mode].credits;
  $('#workspaceCredits').textContent = credits.toLocaleString();
  clearInterval(state.generationTimer);
  state.generationTimer = setInterval(updateGeneration, 140);
  setTimeout(completeGeneration, state.mode === 'video' ? 5600 : 4200);
  updateConnections();
  selectNode(els.generator);
}

function setMode(mode) {
  if (state.generating) return;
  state.mode = mode;
  const copy = modeCopy[mode];
  $('#generatorTitle').textContent = copy.title;
  els.generator.dataset.nodeTitle = copy.title;
  $('#resultTitle').textContent = copy.result;
  els.result.dataset.nodeTitle = copy.result;
  $('#creditCopy').textContent = `${copy.credits} Credits`;
  els.run.setAttribute('aria-label', `Generate ${mode}`);
  els.play.style.display = mode === 'video' ? '' : 'none';
  els.model.options[0].textContent = copy.model;
  els.nodeStatus.textContent = `Ready to generate ${mode}`;
  showToast(`${mode === 'video' ? 'Video' : 'Image'} generator added`);
  selectNode(els.generator);
}

function addReference() {
  if (els.referenceRow.querySelectorAll('.reference-thumb').length >= 4) {
    showToast('Maximum 4 references');
    return;
  }
  const index = els.referenceRow.querySelectorAll('.reference-thumb').length;
  const source = index % 2 ? './assets/figma-reference-2.jpeg' : './assets/figma-reference-1.jpeg';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'reference-thumb';
  button.setAttribute('aria-label', 'Remove reference');
  button.innerHTML = `<img src="${source}" alt="Dog reference"><img class="replace-icon" src="./assets/reference-replace.svg" alt="">`;
  button.addEventListener('click', () => button.remove());
  els.referenceRow.insertBefore(button, $('#referenceAdd'));
}

function addCanvasNode(type = 'image') {
  if (type === 'image' || type === 'video') {
    setMode(type);
    return;
  }
  state.nodeCount += 1;
  const node = document.createElement('section');
  node.className = 'canvas-node note-node';
  node.dataset.nodeTitle = 'New note';
  node.style.cssText = `left:${440 + state.nodeCount * 28}px;top:${570 + state.nodeCount * 20}px;width:240px;`;
  node.innerHTML = `<header class="node-header drag-handle"><div><span class="note-mark">T</span><strong>New note</strong></div><button class="node-menu" aria-label="Node menu">•••</button></header><p contenteditable="true">Add a direction, shot idea, or reminder…</p><div class="note-author"><span>SC</span><small>Created just now</small></div>`;
  els.world.appendChild(node);
  makeNodeDraggable(node);
  selectNode(node);
  showToast('Note added to canvas');
}

function togglePlayback() {
  if (state.generating || state.mode !== 'video') return;
  const playing = els.result.classList.toggle('playing');
  els.play.setAttribute('aria-label', playing ? 'Pause generated video' : 'Play generated video');
}

$$('.canvas-node').forEach(makeNodeDraggable);
$$('.reference-thumb').forEach(button => button.addEventListener('click', () => button.remove()));
$('#referenceAdd').addEventListener('click', addReference);
els.prompt.addEventListener('submit', generate);
els.play.addEventListener('click', togglePlayback);

els.viewport.addEventListener('pointerdown', event => {
  if (event.target.closest('.canvas-node, button, input, textarea, select')) return;
  if (event.button !== 0 && event.button !== 1) return;
  state.pan = { x: event.clientX, y: event.clientY, panX: state.panX, panY: state.panY };
  els.viewport.classList.add('panning');
  els.viewport.setPointerCapture(event.pointerId);
  $$('.canvas-node').forEach(node => node.classList.remove('selected'));
});
els.viewport.addEventListener('pointermove', event => {
  if (!state.pan) return;
  state.panX = state.pan.panX + event.clientX - state.pan.x;
  state.panY = state.pan.panY + event.clientY - state.pan.y;
  applyViewport();
});
els.viewport.addEventListener('pointerup', () => {
  state.pan = null;
  els.viewport.classList.remove('panning');
});
els.viewport.addEventListener('wheel', event => {
  event.preventDefault();
  if (event.ctrlKey || event.metaKey) {
    const rect = els.viewport.getBoundingClientRect();
    setZoom(state.zoom * (event.deltaY > 0 ? .92 : 1.08), event.clientX - rect.left, event.clientY - rect.top);
  } else {
    state.panX -= event.deltaX;
    state.panY -= event.deltaY;
    applyViewport();
  }
}, { passive: false });

$('#zoomIn').addEventListener('click', () => setZoom(state.zoom + .1));
$('#zoomOut').addEventListener('click', () => setZoom(state.zoom - .1));
$('#zoomValue').addEventListener('click', fitCanvas);
$('#zoomTop').addEventListener('click', fitCanvas);
$('#fitButton').addEventListener('click', fitCanvas);

$('#collapseLibrary').addEventListener('click', () => els.shell.classList.add('library-collapsed'));
$('#showLibrary').addEventListener('click', () => els.shell.classList.remove('library-collapsed'));
$('#collapseInspector').addEventListener('click', () => els.shell.classList.add('inspector-collapsed'));
$('#showInspector').addEventListener('click', () => els.shell.classList.remove('inspector-collapsed'));

$$('[data-panel-tab]').forEach(button => button.addEventListener('click', () => {
  $$('[data-panel-tab]').forEach(tab => tab.classList.toggle('active', tab === button));
  const history = button.dataset.panelTab === 'history';
  $('#historyContent').hidden = !history;
  $('#libraryContent').hidden = history;
}));

$$('[data-add-generator]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.addGenerator)));
$$('.rail-button').forEach(button => button.addEventListener('click', () => {
  $$('.rail-button').forEach(item => item.classList.toggle('active', item === button));
  const tool = button.dataset.tool;
  if (tool === 'image' || tool === 'video' || tool === 'text') addCanvasNode(tool);
  if (tool === 'add') showToast('Choose Image, Video, or Text from the toolbar');
  if (tool === 'upload') showToast('Drop image and video files anywhere on the canvas');
  if (tool === 'help') showToast('Drag nodes to arrange · scroll to pan · ⌘ scroll to zoom');
}));

$('#deleteNode').addEventListener('click', () => {
  if (!state.selected) return;
  if ([els.generator, els.result, $('#sourceNode')].includes(state.selected)) {
    showToast('Core workflow nodes are locked in this prototype');
    return;
  }
  state.selected.remove();
  state.selected = null;
  showToast('Node removed');
});

$('#exportButton').addEventListener('click', () => showToast('Export panel opened · MP4 selected'));
$('#undoButton').addEventListener('click', () => showToast('Nothing to undo'));
$('#redoButton').addEventListener('click', () => showToast('Nothing to redo'));

[els.propX, els.propY].forEach(input => input.addEventListener('change', () => {
  if (!state.selected) return;
  state.selected.style.left = `${Number(els.propX.value) || 0}px`;
  state.selected.style.top = `${Number(els.propY.value) || 0}px`;
  updateConnections();
}));
els.model.addEventListener('change', () => $('#propertyModel').textContent = els.model.value);

document.addEventListener('keydown', event => {
  if (event.code === 'Space' && !event.target.matches('textarea, input, [contenteditable]')) {
    state.spaceDown = true;
    els.viewport.style.cursor = 'grab';
    event.preventDefault();
  }
  if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') generate(event);
  if (event.key === '0' && (event.metaKey || event.ctrlKey)) { event.preventDefault(); fitCanvas(); }
});
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    state.spaceDown = false;
    els.viewport.style.cursor = '';
  }
});

window.addEventListener('resize', updateConnections);
if (window.innerWidth >= 1020) els.shell.classList.remove('library-collapsed');
if (window.innerWidth >= 1220) els.shell.classList.remove('inspector-collapsed');
applyViewport();
updateConnections();
selectNode($('#sourceNode'));
setTimeout(fitCanvas, window.innerWidth < 900 ? 60 : 320);
setTimeout(() => $('#shortcutToast').style.opacity = '.35', 4500);
