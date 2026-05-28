---
title: The Fourth
date: 2026-05-27T00:00:00Z
author: Prashish
description: "flatland, shadows & turiya"
article_kind: Spiritual
aliases:
  - /fragments/the-fourth/
---

There might be a fourth dimension to reality, one we have no way of seeing. The idea makes more sense once we are clear about what a dimension actually is.

A dimension is just a direction you can move in. On a flat road, your only options are forward and backward, which makes the road one-dimensional, or 1D. An open field lets you move sideways too, so it has two directions and is 2D. The room you are sitting in lets you also move up and down, giving you the three dimensions, 3D, of the world we live in.

<style>
.bld-container{padding:.5rem 0}
.bld-title{font-size:16px;font-weight:500;margin:0 0 4px}
.bld-subtitle{font-size:13px;color:var(--text-color-light);margin:0 0 14px;line-height:1.55}
.bld-scene{width:100%;height:440px;display:block;background:rgba(127,127,127,0.08);border-radius:10px}
.bld-stage-label{font-size:20px;font-weight:500;fill:var(--text-color);font-family:Georgia,serif;letter-spacing:.5px}
.bld-stage-desc{font-size:13px;fill:var(--text-color-light)}
.bld-line{stroke:#1D9E75;stroke-width:2;stroke-linecap:round;fill:none}
.bld-face{fill:#1D9E75;fill-opacity:.14;stroke:#1D9E75;stroke-width:1.7;stroke-linejoin:round}
.bld-edge-back{stroke:#1D9E75;stroke-width:1.2;stroke-opacity:.55;fill:none;stroke-dasharray:3 3}
.bld-conn{stroke:#1D9E75;stroke-width:1.5;stroke-opacity:.75;fill:none}
.bld-point{fill:#C23B5C;stroke:#1D9E75;stroke-width:1.5}
.bld-arrow{stroke:#C23B5C;stroke-width:1;stroke-opacity:.6;fill:none;stroke-dasharray:2 3}
@media (prefers-color-scheme: dark){
.bld-line,.bld-face,.bld-edge-back,.bld-conn{stroke:#5DCAA5}
.bld-face{fill:#5DCAA5}
.bld-point{fill:#E07090;stroke:#5DCAA5}
.bld-arrow{stroke:#E07090}
}
.bld-summary{margin-top:1.25rem;padding-top:1rem;border-top:.5px solid var(--text-color-muted);font-size:12px;color:var(--text-color-muted);line-height:1.6;text-align:center;max-width:520px;margin-left:auto;margin-right:auto}
</style>

<div class="bld-container">
  <svg class="bld-scene" viewBox="0 0 680 440" id="bld-svg" role="img" aria-label="point becoming line becoming square becoming cube"></svg>
</div>

<script>
(function(){
const NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('bld-svg');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CX = 240, CY = 340;
const S = 150;
const OFFX = 70, OFFY = -58;

const labelEl = document.createElementNS(NS, 'text');
labelEl.setAttribute('class','bld-stage-label');
labelEl.setAttribute('x','340'); labelEl.setAttribute('y','56');
labelEl.setAttribute('text-anchor','middle');
svg.appendChild(labelEl);

const descEl = document.createElementNS(NS, 'text');
descEl.setAttribute('class','bld-stage-desc');
descEl.setAttribute('x','340'); descEl.setAttribute('y','82');
descEl.setAttribute('text-anchor','middle');
svg.appendChild(descEl);

const backFaceEl = document.createElementNS(NS, 'polygon');
backFaceEl.setAttribute('class','bld-edge-back');
backFaceEl.setAttribute('fill','none');
svg.appendChild(backFaceEl);

const conns = [];
for (let i = 0; i < 4; i++){
  const c = document.createElementNS(NS, 'line');
  c.setAttribute('class','bld-conn');
  svg.appendChild(c);
  conns.push(c);
}

const squareEl = document.createElementNS(NS, 'polygon');
squareEl.setAttribute('class','bld-face');
svg.appendChild(squareEl);

const lineEl = document.createElementNS(NS, 'line');
lineEl.setAttribute('class','bld-line');
svg.appendChild(lineEl);

const pointEl = document.createElementNS(NS, 'circle');
pointEl.setAttribute('class','bld-point');
pointEl.setAttribute('r','6');
pointEl.setAttribute('cx', CX);
pointEl.setAttribute('cy', CY);
svg.appendChild(pointEl);

function easeInOut(t){ return t<0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2; }
function clamp(v,lo,hi){ return Math.max(lo, Math.min(hi, v)); }

const CYCLE = 10;

function render(t){
  const linePhase = easeInOut(clamp((t - 1.2) / 1.5, 0, 1));
  const squarePhase = easeInOut(clamp((t - 2.9) / 1.5, 0, 1));
  const cubePhase = easeInOut(clamp((t - 4.6) / 1.5, 0, 1));
  const decay = 1 - easeInOut(clamp((t - 9.0) / 0.8, 0, 1));

  const fbl = [CX, CY];
  const fbr = [CX + S * linePhase, CY];
  const ftr = [CX + S * linePhase, CY - S * squarePhase];
  const ftl = [CX, CY - S * squarePhase];

  const d = [OFFX * cubePhase, OFFY * cubePhase];
  const bbl = [fbl[0]+d[0], fbl[1]+d[1]];
  const bbr = [fbr[0]+d[0], fbr[1]+d[1]];
  const btr = [ftr[0]+d[0], ftr[1]+d[1]];
  const btl = [ftl[0]+d[0], ftl[1]+d[1]];

  lineEl.setAttribute('x1', fbl[0].toFixed(1));
  lineEl.setAttribute('y1', fbl[1].toFixed(1));
  lineEl.setAttribute('x2', fbr[0].toFixed(1));
  lineEl.setAttribute('y2', fbr[1].toFixed(1));
  lineEl.setAttribute('opacity', decay.toFixed(2));

  squareEl.setAttribute('points', `${fbl[0].toFixed(1)},${fbl[1].toFixed(1)} ${fbr[0].toFixed(1)},${fbr[1].toFixed(1)} ${ftr[0].toFixed(1)},${ftr[1].toFixed(1)} ${ftl[0].toFixed(1)},${ftl[1].toFixed(1)}`);
  squareEl.setAttribute('opacity', decay.toFixed(2));

  backFaceEl.setAttribute('points', `${bbl[0].toFixed(1)},${bbl[1].toFixed(1)} ${bbr[0].toFixed(1)},${bbr[1].toFixed(1)} ${btr[0].toFixed(1)},${btr[1].toFixed(1)} ${btl[0].toFixed(1)},${btl[1].toFixed(1)}`);
  backFaceEl.setAttribute('opacity', decay.toFixed(2));

  const pairs = [[fbl,bbl],[fbr,bbr],[ftr,btr],[ftl,btl]];
  pairs.forEach((p, i) => {
    conns[i].setAttribute('x1', p[0][0].toFixed(1));
    conns[i].setAttribute('y1', p[0][1].toFixed(1));
    conns[i].setAttribute('x2', p[1][0].toFixed(1));
    conns[i].setAttribute('y2', p[1][1].toFixed(1));
    conns[i].setAttribute('opacity', decay.toFixed(2));
  });

  let label, desc;
  if (t < 1.2)      { label = '0D'; desc = 'a single point'; }
  else if (t < 2.9) { label = '1D'; desc = 'the point stretched into a line'; }
  else if (t < 4.6) { label = '2D'; desc = 'the line stretched into a plane'; }
  else              { label = '3D'; desc = 'the plane stretched into a cube'; }
  labelEl.textContent = label;
  descEl.textContent = desc;
}

if (reducedMotion){ render(7.5); return; }
function tick(){ render((Date.now()/1000) % CYCLE); requestAnimationFrame(tick); }
tick();
})();
</script>

The animation above shows the same idea visually. A point on its own has no directions at all. Pull that point in one direction and you get a line, pull the line sideways and you get a flat square, and pull the square in a new direction and you get a cube. Each new shape is built by adding one more direction to the one before it.

Mathematicians have worked with four-dimensional shapes for over a hundred years, and on paper they are perfectly well-defined. **The catch is not the math though, it is us.** Our senses were built for three dimensions and so was our imagination, so we cannot see, touch, or even picture a fourth dimension, no matter how clearly it might be described on paper.

To get a feel for what this is like, it helps to imagine _beings_ living in fewer dimensions than we do.

A creature on a single line cannot see anything off that line. If a two-dimensional circle passed through their line, they would not see the circle, only a tiny point of brightness appearing and disappearing.

A flatlander on a flat surface cannot see anything off that surface. If a three-dimensional sphere passed through their world, they would see only a flat circle that suddenly appears, grows, and shrinks back to a point.

We are in the same situation one level up. If a four-dimensional shape passed through our world, we would see only a moving three-dimensional slice of it. The shape itself would stay completely out of sight.

<style>
.dim-container{padding:.5rem 0}
.dim-row{margin-bottom:1.5rem}
.dim-row:last-child{margin-bottom:0}
.dim-title{font-size:16px;font-weight:500;margin:0 0 4px}
.dim-subtitle{font-size:13px;color:var(--text-color-light);margin:0 0 12px;line-height:1.5}
.dim-panels-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.dim-panel{background:rgba(127,127,127,0.08);border-radius:10px;padding:12px}
.dim-label{font-size:11px;color:var(--text-color-muted);text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px;font-weight:500}
.dim-scene{width:100%;height:130px;display:block}
.dim-no-view{height:130px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;padding:0 8px}
.dim-glyph{font-size:28px;color:var(--text-color-muted);font-family:Georgia,serif;line-height:1}
.dim-no-text{font-size:11px;color:var(--text-color-muted);text-align:center;line-height:1.45}
.dim-meta{fill:var(--text-color-muted);font-size:11px}
.dim-obj{fill:#1D9E75;fill-opacity:.28;stroke:#1D9E75;stroke-width:1;stroke-opacity:.65}
.dim-int{fill:#1D9E75;fill-opacity:.78}
.dim-glow{stroke:#1D9E75;stroke-width:4;stroke-linecap:round}
.dim-frame{fill:none;stroke:var(--text-color-muted);stroke-width:1}
.dim-frame-dash{fill:none;stroke:var(--text-color-muted);stroke-width:.5;stroke-dasharray:2 2}
.dim-frame-light{fill:none;stroke:var(--text-color-muted);stroke-width:.7;stroke-opacity:.85}
.dim-dot{fill:#1D9E75;stroke:#1D9E75;stroke-width:1;stroke-opacity:.4}
.dim-sphere-3d{fill:#1D9E75;fill-opacity:.35;stroke:#1D9E75;stroke-width:1}
.dim-sphere-line{fill:none;stroke:#1D9E75;stroke-width:.7;stroke-opacity:.65}
.dim-summary{margin-top:1.25rem;padding-top:1rem;border-top:.5px solid var(--text-color-muted);font-size:12px;color:var(--text-color-muted);line-height:1.6;text-align:center;max-width:580px;margin-left:auto;margin-right:auto}
@media (prefers-color-scheme: dark){
.dim-obj{fill:#5DCAA5;stroke:#5DCAA5}
.dim-int{fill:#5DCAA5}
.dim-glow{stroke:#5DCAA5}
.dim-dot{fill:#5DCAA5;stroke:#5DCAA5}
.dim-sphere-3d{fill:#5DCAA5;stroke:#5DCAA5}
.dim-sphere-line{stroke:#5DCAA5}
}
</style>

<div class="dim-container">

  <div class="dim-row">
    <h3 class="dim-title">lineland</h3>
    <div class="dim-panels-3">
      <div class="dim-panel">
        <div class="dim-label">outside</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a 2d disc descending through a 1d line"><line class="dim-frame" x1="20" y1="65" x2="180" y2="65"/><circle id="r1-disc" class="dim-obj" cx="100" cy="29" r="24"/><line id="r1-seg" class="dim-glow" x1="100" y1="65" x2="100" y2="65"/></svg>
      </div>
      <div class="dim-panel">
        <div class="dim-label">their 1d world</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a 1d segment glowing on the line"><line class="dim-frame" x1="20" y1="65" x2="180" y2="65"/><line id="r1-glow" class="dim-glow" x1="100" y1="65" x2="100" y2="65"/></svg>
      </div>
      <div class="dim-panel">
        <div class="dim-label">what they see</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a single point of brightness fading"><text x="100" y="34" text-anchor="middle" class="dim-meta">a single point</text><circle id="r1-eye" class="dim-dot" cx="100" cy="82" r="9" fill-opacity="0"/></svg>
      </div>
    </div>
  </div>

  <div class="dim-row">
    <h3 class="dim-title">flatland</h3>
    <div class="dim-panels-3">
      <div class="dim-panel">
        <div class="dim-label">outside</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a 3d sphere descending through a 2d plane"><ellipse class="dim-frame" cx="100" cy="65" rx="80" ry="14"/><ellipse id="r2-int" class="dim-int" cx="100" cy="65" rx="0" ry="0"/><circle id="r2-sphere" class="dim-obj" cx="100" cy="33" r="26"/></svg>
      </div>
      <div class="dim-panel">
        <div class="dim-label">their 2d world</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a 2d disc growing on the plane"><rect class="dim-frame" x="40" y="22" width="120" height="86" rx="3"/><circle id="r2-disc" class="dim-int" cx="100" cy="65" r="0"/></svg>
      </div>
      <div class="dim-panel">
        <div class="dim-label">what they see</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a horizontal line stretching and contracting"><text x="100" y="34" text-anchor="middle" class="dim-meta">a stretching line</text><line id="r2-strip" class="dim-glow" x1="100" y1="82" x2="100" y2="82" stroke-opacity="0"/></svg>
      </div>
    </div>
  </div>

  <div class="dim-row">
    <h3 class="dim-title">our world</h3>
    <div class="dim-panels-3">
      <div class="dim-panel">
        <div class="dim-label">outside</div>
        <div class="dim-no-view"><div class="dim-glyph">?</div><div class="dim-no-text">no eye for the fourth direction</div></div>
      </div>
      <div class="dim-panel">
        <div class="dim-label">our 3d world</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a 3d sphere appearing inside a wireframe cube"><g class="dim-frame"><rect x="55" y="15" width="100" height="70"/><rect x="30" y="35" width="100" height="70"/><line x1="30" y1="35" x2="55" y2="15"/><line x1="130" y1="35" x2="155" y2="15"/><line x1="130" y1="105" x2="155" y2="85"/><line x1="30" y1="105" x2="55" y2="85"/></g><circle id="r3-sphere" class="dim-int" cx="92" cy="60" r="0"/></svg>
      </div>
      <div class="dim-panel">
        <div class="dim-label">what we see</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a flat 2d image of a circle, like a photograph"><text x="100" y="24" text-anchor="middle" class="dim-meta">a flat image</text><rect x="40" y="35" width="120" height="80" rx="3" class="dim-frame-dash"/><circle id="r3-eye-circle" class="dim-int" cx="100" cy="75" r="0"/></svg>
      </div>
    </div>
  </div>

  <div class="dim-row">
    <h3 class="dim-title">beyond</h3>
    <div class="dim-panels-3">
      <div class="dim-panel">
        <div class="dim-label">outside</div>
        <div class="dim-no-view"><div class="dim-glyph">?</div><div class="dim-no-text">no eye for the fifth direction</div></div>
      </div>
      <div class="dim-panel">
        <div class="dim-label">their 4d world</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a tesseract with a 4d cross-section appearing inside">
          <g class="dim-frame-light">
            <rect x="43" y="32" width="90" height="68"/>
            <rect x="68" y="18" width="90" height="68"/>
            <line x1="43" y1="32" x2="68" y2="18"/>
            <line x1="133" y1="32" x2="158" y2="18"/>
            <line x1="133" y1="100" x2="158" y2="86"/>
            <line x1="43" y1="100" x2="68" y2="86"/>
            <rect x="80" y="52" width="36" height="28"/>
            <rect x="90" y="46" width="36" height="28"/>
            <line x1="80" y1="52" x2="90" y2="46"/>
            <line x1="116" y1="52" x2="126" y2="46"/>
            <line x1="116" y1="80" x2="126" y2="74"/>
            <line x1="80" y1="80" x2="90" y2="74"/>
            <line x1="43" y1="32" x2="80" y2="52"/>
            <line x1="133" y1="32" x2="116" y2="52"/>
            <line x1="133" y1="100" x2="116" y2="80"/>
            <line x1="43" y1="100" x2="80" y2="80"/>
            <line x1="68" y1="18" x2="90" y2="46"/>
            <line x1="158" y1="18" x2="126" y2="46"/>
            <line x1="158" y1="86" x2="126" y2="74"/>
            <line x1="68" y1="86" x2="90" y2="74"/>
          </g>
          <circle id="r4-cross" class="dim-int" cx="103" cy="63" r="0"/>
        </svg>
      </div>
      <div class="dim-panel">
        <div class="dim-label">what they see</div>
        <svg class="dim-scene" viewBox="0 0 200 130" role="img" aria-label="a 3d sphere with depth lines, our 2d approximation of a 3d volume perceived all at once"><text x="100" y="24" text-anchor="middle" class="dim-meta">a whole 3d volume</text><rect x="40" y="35" width="120" height="80" rx="3" class="dim-frame-dash"/><circle id="r4-eye-sphere" class="dim-sphere-3d" cx="100" cy="75" r="0"/><ellipse id="r4-eye-eq" class="dim-sphere-line" cx="100" cy="75" rx="0" ry="0"/><ellipse id="r4-eye-mer" class="dim-sphere-line" cx="100" cy="75" rx="0" ry="0"/></svg>
      </div>
    </div>
  </div>


</div>

<script>
(function(){
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const R1 = 24, R2 = 26, CENTER_Y = 65;

function render(t){
  const phase = -Math.cos(2 * Math.PI * t);

  const y1 = CENTER_Y + 36 * phase;
  document.getElementById('r1-disc').setAttribute('cy', y1.toFixed(2));
  const dy1 = Math.abs(y1 - CENTER_Y);
  const half1 = dy1 < R1 ? Math.sqrt(R1*R1 - dy1*dy1) : 0;
  document.getElementById('r1-seg').setAttribute('x1', (100 - half1).toFixed(2));
  document.getElementById('r1-seg').setAttribute('x2', (100 + half1).toFixed(2));
  document.getElementById('r1-glow').setAttribute('x1', (100 - half1).toFixed(2));
  document.getElementById('r1-glow').setAttribute('x2', (100 + half1).toFixed(2));
  document.getElementById('r1-eye').setAttribute('fill-opacity', (half1 / R1).toFixed(3));

  const y2 = CENTER_Y + 32 * phase;
  document.getElementById('r2-sphere').setAttribute('cy', y2.toFixed(2));
  const dy2 = Math.abs(y2 - CENTER_Y);
  const r2 = dy2 < R2 ? Math.sqrt(R2*R2 - dy2*dy2) : 0;
  document.getElementById('r2-int').setAttribute('rx', r2.toFixed(2));
  document.getElementById('r2-int').setAttribute('ry', (r2 * 0.17).toFixed(2));
  document.getElementById('r2-disc').setAttribute('r', r2.toFixed(2));
  const stripHalf = (r2 / R2) * 55;
  document.getElementById('r2-strip').setAttribute('x1', (100 - stripHalf).toFixed(2));
  document.getElementById('r2-strip').setAttribute('x2', (100 + stripHalf).toFixed(2));
  document.getElementById('r2-strip').setAttribute('stroke-opacity', (r2 / R2).toFixed(3));

  document.getElementById('r3-sphere').setAttribute('r', r2.toFixed(2));
  document.getElementById('r3-eye-circle').setAttribute('r', r2.toFixed(2));

  const r4cross = r2 * 0.5;
  document.getElementById('r4-cross').setAttribute('r', r4cross.toFixed(2));
  const r4eye = r2;
  document.getElementById('r4-eye-sphere').setAttribute('r', r4eye.toFixed(2));
  document.getElementById('r4-eye-eq').setAttribute('rx', r4eye.toFixed(2));
  document.getElementById('r4-eye-eq').setAttribute('ry', (r4eye * 0.25).toFixed(2));
  document.getElementById('r4-eye-mer').setAttribute('rx', (r4eye * 0.25).toFixed(2));
  document.getElementById('r4-eye-mer').setAttribute('ry', r4eye.toFixed(2));
}

if (reducedMotion){
  render(0.5);
  return;
}
function tick(){
  const t = (Date.now() / 6000) % 1;
  render(t);
  requestAnimationFrame(tick);
}
tick();
})();
</script>

There is one way around this, though. Higher dimensions always cast shadows into the dimensions below them, and those shadows carry information.

Hold a cube above a flat surface and look at the shadow it casts there. The shadow is flat, two-dimensional. As you rotate the cube, the shadow keeps changing. When one of the cube's faces is parallel to the surface, the shadow is a square. Tilt the cube a little and the shadow becomes a rectangle. Balance the cube on one of its corners and the shadow becomes a hexagon. 

A flatlander watching only this shifting shadow would not see the cube itself, but they would have enough information from the way the shadow keeps changing to work out, in theory, what the cube must look like. They could never picture the cube in their head, because **the third dimension is outside the only world they have ever known**.

<style>
.shadow-container{padding:.5rem 0}
.shadow-row{margin-bottom:1.5rem}
.shadow-row:last-child{margin-bottom:0}
.shadow-title{font-size:16px;font-weight:500;margin:0 0 4px}
.shadow-subtitle{font-size:13px;color:var(--text-color-light);margin:0 0 12px;line-height:1.5}
.shadow-scene{width:100%;height:240px;display:block;background:rgba(127,127,127,0.08);border-radius:10px}
.edge-line{stroke:#1D9E75;stroke-width:1.4;fill:none;stroke-opacity:.9}
.shadow-poly{fill:#1D9E75;fill-opacity:.45;stroke:#1D9E75;stroke-width:.8;stroke-opacity:.7}
.floor-ind{fill:none;stroke:var(--text-color-muted);stroke-width:.7;stroke-dasharray:3 3}
@media (prefers-color-scheme: dark){
.edge-line{stroke:#5DCAA5}
.shadow-poly{fill:#5DCAA5;stroke:#5DCAA5}
}
</style>

<div class="shadow-container">
  <div class="shadow-row">
    <h3 class="shadow-title">Cube and its shadow</h3>
    <p class="shadow-subtitle">The flat shadow keeps shifting as the cube rotates above the surface.</p>
    <svg class="shadow-scene" viewBox="0 0 680 240" id="cube-svg" role="img" aria-label="a rotating 3d cube with its 2d shadow morphing on the floor below"></svg>
  </div>
</div>

The same idea carries up one more level. A four-dimensional cube, called a **hypercube**, would cast a three-dimensional shadow into our world as it turned. The shadow would shift through different solid shapes the way the cube's shadow shifted through flat ones. 

By studying how this kind of shadow moves, mathematicians have mapped out what a hypercube must look like, even though no one has ever seen one in our three-dimensional reality.

<div class="shadow-container">
  <div class="shadow-row">
    <h3 class="shadow-title">Hypercube and its shadow</h3>
    <p class="shadow-subtitle">The three-dimensional shadow keeps shifting as the hypercube rotates in four dimensions.</p>
    <svg class="shadow-scene" viewBox="0 0 680 240" id="tess-svg" role="img" aria-label="a tesseract rotating in 4d, showing the cube-inside-cube morphing pattern of a 4d hypercube's 3d shadow"></svg>
  </div>
</div>

<script>
(function(){
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const NS = 'http://www.w3.org/2000/svg';

function cross(O, A, B){return (A[0]-O[0])*(B[1]-O[1]) - (A[1]-O[1])*(B[0]-O[0]);}
function convexHull(pts){
  if (pts.length < 3) return pts;
  const sorted = pts.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  const lo = [];
  for (const p of sorted){
    while (lo.length >= 2 && cross(lo[lo.length-2], lo[lo.length-1], p) <= 0) lo.pop();
    lo.push(p);
  }
  const up = [];
  for (let i = sorted.length-1; i >= 0; i--){
    const p = sorted[i];
    while (up.length >= 2 && cross(up[up.length-2], up[up.length-1], p) <= 0) up.pop();
    up.push(p);
  }
  return lo.slice(0,-1).concat(up.slice(0,-1));
}

function rotY(p,t){const c=Math.cos(t),s=Math.sin(t);return [p[0]*c+p[2]*s, p[1], -p[0]*s+p[2]*c];}
function rotX(p,t){const c=Math.cos(t),s=Math.sin(t);return [p[0], p[1]*c-p[2]*s, p[1]*s+p[2]*c];}
function rotXW(p,t){const c=Math.cos(t),s=Math.sin(t);return [p[0]*c-p[3]*s, p[1], p[2], p[0]*s+p[3]*c];}
function rotYW(p,t){const c=Math.cos(t),s=Math.sin(t);return [p[0], p[1]*c-p[3]*s, p[2], p[1]*s+p[3]*c];}
function proj4to3(p,d){const w=d-p[3];return [p[0]*d/w, p[1]*d/w, p[2]*d/w];}

const cubeVerts = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
const cubeEdges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];

const tessVerts = [];
for (let w = -1; w <= 1; w += 2)
  for (let z = -1; z <= 1; z += 2)
    for (let y = -1; y <= 1; y += 2)
      for (let x = -1; x <= 1; x += 2)
        tessVerts.push([x,y,z,w]);
const tessEdges = [];
for (let i = 0; i < 16; i++)
  for (let j = i+1; j < 16; j++){
    let diff = 0;
    for (let k = 0; k < 4; k++) if (tessVerts[i][k] !== tessVerts[j][k]) diff++;
    if (diff === 1) tessEdges.push([i,j]);
  }

const cubeSvg = document.getElementById('cube-svg');
const floor = document.createElementNS(NS,'ellipse');
floor.setAttribute('cx','340'); floor.setAttribute('cy','198');
floor.setAttribute('rx','170'); floor.setAttribute('ry','18');
floor.setAttribute('class','floor-ind');
cubeSvg.appendChild(floor);
const shadow = document.createElementNS(NS,'polygon');
shadow.setAttribute('class','shadow-poly');
cubeSvg.appendChild(shadow);
const cubeEls = cubeEdges.map(()=>{
  const ln = document.createElementNS(NS,'line');
  ln.setAttribute('class','edge-line');
  cubeSvg.appendChild(ln);
  return ln;
});

const tessSvg = document.getElementById('tess-svg');
const tessEls = tessEdges.map(()=>{
  const ln = document.createElementNS(NS,'line');
  ln.setAttribute('class','edge-line');
  tessSvg.appendChild(ln);
  return ln;
});

function projCube(p){const s=48;return [340+p[0]*s+p[2]*s*0.22, 105-p[1]*s+p[2]*s*0.12];}
function projTess(p){const s=58;return [340+p[0]*s+p[2]*s*0.2, 120-p[1]*s+p[2]*s*0.13];}

function render(time){
  const ct = time / 1000;
  const theta = ct * 0.42, phi = ct * 0.27;
  const rotated = cubeVerts.map(p => rotX(rotY(p, theta), phi));
  const screen = rotated.map(projCube);
  cubeEdges.forEach((e,i)=>{
    cubeEls[i].setAttribute('x1', screen[e[0]][0].toFixed(1));
    cubeEls[i].setAttribute('y1', screen[e[0]][1].toFixed(1));
    cubeEls[i].setAttribute('x2', screen[e[1]][0].toFixed(1));
    cubeEls[i].setAttribute('y2', screen[e[1]][1].toFixed(1));
  });
  const floorY = -1.95;
  const sh = rotated.map(p => [p[0], floorY, p[2]]).map(projCube);
  const hull = convexHull(sh);
  shadow.setAttribute('points', hull.map(p => p[0].toFixed(1)+','+p[1].toFixed(1)).join(' '));

  const tt = ct * 0.36, tp = ct * 0.19, t3 = ct * 0.08;
  const t4 = tessVerts.map(p => rotYW(rotXW(p, tt), tp));
  const t3d = t4.map(p => proj4to3(p, 3.5));
  const t3r = t3d.map(p => rotY(p, t3));
  const ts = t3r.map(projTess);
  tessEdges.forEach((e,i)=>{
    tessEls[i].setAttribute('x1', ts[e[0]][0].toFixed(1));
    tessEls[i].setAttribute('y1', ts[e[0]][1].toFixed(1));
    tessEls[i].setAttribute('x2', ts[e[1]][0].toFixed(1));
    tessEls[i].setAttribute('y2', ts[e[1]][1].toFixed(1));
  });
}

if (reducedMotion){ render(0); return; }
function tick(){ render(Date.now()); requestAnimationFrame(tick); }
tick();
})();
</script>

<br />

---

<br />

This same pattern shows up far away from geometry, in places that have nothing to do with mathematics at all. The ancient texts describe a fourth state of being called _Turiya_, sitting beyond our usual three states of waking, dream, and deep sleep. Turiya is hidden from direct experience, the same way the fourth dimension is hidden from our eyes. The only way we know it is there is from the trace it leaves on the three states we do experience.

<style>
.me-container{padding:.5rem 0}
.me-title{font-size:16px;font-weight:500;margin:0 0 4px}
.me-subtitle{font-size:13px;color:var(--text-color-light);margin:0 0 14px;line-height:1.55}
.me-scene{width:100%;height:560px;display:block;background:rgba(127,127,127,0.08);border-radius:10px}
.me-up{fill:#1D9E75;fill-opacity:.18;stroke:#1D9E75;stroke-width:1.3;stroke-opacity:.94}
.me-up-side{fill:#1D9E75;fill-opacity:.09;stroke:#1D9E75;stroke-width:.7;stroke-opacity:.6}
.me-up-bot{fill:none;stroke:#1D9E75;stroke-width:.5;stroke-opacity:.38}
.me-down{fill:#C23B5C;fill-opacity:.18;stroke:#C23B5C;stroke-width:1.3;stroke-opacity:.94}
.me-down-side{fill:#C23B5C;fill-opacity:.09;stroke:#C23B5C;stroke-width:.7;stroke-opacity:.6}
.me-down-bot{fill:none;stroke:#C23B5C;stroke-width:.5;stroke-opacity:.38}
.me-fp-up{fill:none;stroke:#1D9E75;stroke-width:.55;stroke-opacity:.28;stroke-dasharray:2 2.5}
.me-fp-down{fill:none;stroke:#C23B5C;stroke-width:.55;stroke-opacity:.28;stroke-dasharray:2 2.5}
.me-bhup{fill:none;stroke:var(--text-color-muted);stroke-width:.75;stroke-opacity:.5}
.me-axis{stroke:var(--text-color-muted);stroke-width:.5;stroke-dasharray:2 3;stroke-opacity:.28;fill:none}
.me-env{stroke:var(--text-color-muted);stroke-width:.5;stroke-opacity:.22;fill:none}
.me-bindu{fill:#C23B5C;stroke:#1D9E75;stroke-width:1.5}
@media (prefers-color-scheme: dark){
.me-up,.me-up-side{fill:#5DCAA5;stroke:#5DCAA5}
.me-up-bot,.me-fp-up{stroke:#5DCAA5}
.me-down,.me-down-side{fill:#E07090;stroke:#E07090}
.me-down-bot,.me-fp-down{stroke:#E07090}
.me-bindu{fill:#E07090;stroke:#5DCAA5}
}
</style>

<div class="me-container">
  <svg class="me-scene" viewBox="0 0 680 560" id="me-svg" role="img" aria-label="rotating 3d meru yantra with thick triangular terraces and śrī yantra footprint on bhūpura"></svg>
</div>

<script>
(function(){
const NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('me-svg');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CX = 340, CY = 360, SCALE = 128;
const DEPTH_Y = -0.45;
const THICKNESS = 0.07;

const levels = [
  {type:'up',   y:0.22, verts:[[0, 0.95], [-0.88, -0.55], [0.88, -0.55]]},
  {type:'down', y:0.36, verts:[[0,-0.95], [-0.88,  0.55], [0.88,  0.55]]},
  {type:'up',   y:0.52, verts:[[0, 0.78], [-0.66, -0.42], [0.66, -0.42]]},
  {type:'down', y:0.66, verts:[[0,-0.75], [-0.62,  0.40], [0.62,  0.40]]},
  {type:'up',   y:0.82, verts:[[0, 0.55], [-0.46, -0.25], [0.46, -0.25]]},
  {type:'down', y:0.96, verts:[[0,-0.55], [-0.45,  0.28], [0.45,  0.28]]},
  {type:'up',   y:1.12, verts:[[0, 0.32], [-0.28, -0.12], [0.28, -0.12]]},
  {type:'down', y:1.26, verts:[[0,-0.35], [-0.30,  0.18], [0.30,  0.18]]},
  {type:'down', y:1.42, verts:[[0,-0.18], [-0.18,  0.10], [0.18,  0.10]]},
];

const BINDU_Y = 1.58;
const BHUPURA_SQUARES = [1.05, 0.97, 0.89];
const envelopeCorners = [[-1.0, 0, -1.0], [1.0, 0, -1.0], [1.0, 0, 1.0], [-1.0, 0, 1.0]];

function project(p, theta){
  const c = Math.cos(theta), s = Math.sin(theta);
  const xr = p[0]*c + p[2]*s;
  const zr = -p[0]*s + p[2]*c;
  return [
    xr * SCALE + CX,
    -p[1] * SCALE + DEPTH_Y * zr * SCALE + CY,
    zr
  ];
}
const ptsStr = ps => ps.map(p => p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ');

const footprintEls = levels.map(level => {
  const el = document.createElementNS(NS, 'polygon');
  el.setAttribute('class', level.type === 'up' ? 'me-fp-up' : 'me-fp-down');
  svg.appendChild(el);
  return el;
});

const bhupSqEls = BHUPURA_SQUARES.map(() => {
  const el = document.createElementNS(NS, 'polygon');
  el.setAttribute('class', 'me-bhup');
  svg.appendChild(el);
  return el;
});

const envEls = envelopeCorners.map(() => {
  const el = document.createElementNS(NS, 'line');
  el.setAttribute('class', 'me-env');
  svg.appendChild(el);
  return el;
});

const axisEl = document.createElementNS(NS, 'line');
axisEl.setAttribute('class', 'me-axis');
svg.appendChild(axisEl);

const slabEls = levels.map(level => {
  const topClass = level.type === 'up' ? 'me-up' : 'me-down';
  const sideClass = level.type === 'up' ? 'me-up-side' : 'me-down-side';
  const botClass = level.type === 'up' ? 'me-up-bot' : 'me-down-bot';
  const bot = document.createElementNS(NS, 'polygon');
  bot.setAttribute('class', botClass);
  svg.appendChild(bot);
  const sides = [];
  for (let i = 0; i < 3; i++) {
    const s = document.createElementNS(NS, 'polygon');
    s.setAttribute('class', sideClass);
    svg.appendChild(s);
    sides.push(s);
  }
  const top = document.createElementNS(NS, 'polygon');
  top.setAttribute('class', topClass);
  svg.appendChild(top);
  return { bot, sides, top };
});

const binduEl = document.createElementNS(NS, 'circle');
binduEl.setAttribute('class', 'me-bindu');
binduEl.setAttribute('r', '5');
svg.appendChild(binduEl);

function render(theta){
  levels.forEach((level, i) => {
    const projected = level.verts.map(v => project([v[0], 0, v[1]], theta));
    footprintEls[i].setAttribute('points', ptsStr(projected));
  });
  BHUPURA_SQUARES.forEach((s, i) => {
    const proj = [[-s,0,-s],[s,0,-s],[s,0,s],[-s,0,s]].map(v => project(v, theta));
    bhupSqEls[i].setAttribute('points', ptsStr(proj));
  });
  envelopeCorners.forEach((v, i) => {
    const from = project(v, theta);
    const to = project([0, BINDU_Y, 0], theta);
    envEls[i].setAttribute('x1', from[0].toFixed(1)); envEls[i].setAttribute('y1', from[1].toFixed(1));
    envEls[i].setAttribute('x2', to[0].toFixed(1));   envEls[i].setAttribute('y2', to[1].toFixed(1));
  });
  const ab = project([0, 0, 0], theta);
  const at = project([0, BINDU_Y, 0], theta);
  axisEl.setAttribute('x1', ab[0].toFixed(1)); axisEl.setAttribute('y1', ab[1].toFixed(1));
  axisEl.setAttribute('x2', at[0].toFixed(1)); axisEl.setAttribute('y2', at[1].toFixed(1));
  levels.forEach((level, i) => {
    const yBot = level.y - THICKNESS/2;
    const yTop = level.y + THICKNESS/2;
    const bot3 = level.verts.map(v => project([v[0], yBot, v[1]], theta));
    const top3 = level.verts.map(v => project([v[0], yTop, v[1]], theta));
    slabEls[i].bot.setAttribute('points', ptsStr(bot3));
    for (let j = 0; j < 3; j++) {
      const k = (j+1) % 3;
      slabEls[i].sides[j].setAttribute('points', ptsStr([bot3[j], bot3[k], top3[k], top3[j]]));
    }
    slabEls[i].top.setAttribute('points', ptsStr(top3));
  });
  const bp = project([0, BINDU_Y, 0], theta);
  binduEl.setAttribute('cx', bp[0].toFixed(1));
  binduEl.setAttribute('cy', bp[1].toFixed(1));
}

if (reducedMotion){ render(0.5); return; }
function tick(){ render(Date.now()/1000 * 0.24); requestAnimationFrame(tick); }
tick();
})();
</script>

<p style="margin: 3rem 0; text-align: center; font-style: italic;">The flat is the footprint of the solid.</p>
