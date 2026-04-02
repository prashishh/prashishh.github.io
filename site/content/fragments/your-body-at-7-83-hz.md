---
title: "Your Body at 7.83 Hz"
subtitle: "what meditation actually does"
date: 2026-04-02T00:00:00Z
author: Prashish
description: "what meditation actually does"
tags: ["meditation", "frequency"]
categories: ["Spiritual", "Perspective"]
article_kind:
  - Spiritual
  - Perspective
---

Pseudocode to sync the _body_ with the _earth_, via the _mind_.

```python
body.frequency = scattered

settle()

if body.frequency ≈ earth.frequency:
    sync(body, earth) // individual consciousness & universal consciousness
```

<div style="margin: 24px 0;">
<div style="padding: 0;">
<div style="display: flex; gap: 0; margin-bottom: 0;" id="mode-tabs">
  <button id="btn-sub" onclick="setMode('sub')" style="padding: 6px 16px; font-size: 11px; letter-spacing: 0.5px; border: 0.5px solid #3D3960; background: #1A1830; color: #CECBF6; border-radius: 6px 0 0 6px; cursor: pointer; font-family: inherit;">SUBJECTIVE</button>
  <button id="btn-obj" onclick="setMode('obj')" style="padding: 6px 16px; font-size: 11px; letter-spacing: 0.5px; border: 0.5px solid #3D3960; background: transparent; color: #5A5680; border-radius: 0 6px 6px 0; cursor: pointer; font-family: inherit;">OBJECTIVE</button>
</div>
<div style="position: relative; width: 100%; height: 560px; margin-top: -1px;">
<canvas id="med" style="width: 100%; height: 100%; border-radius: 0 8px 8px 8px;"></canvas>
<div style="position: absolute; bottom: 16px; left: 20px; right: 20px; z-index: 2;">
  <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
    <span style="font-size: 10px; color: #5A5680; letter-spacing: 0.5px;">OUTWARD</span>
    <span style="font-size: 10px; color: #4A8A72; letter-spacing: 0.5px;">7.83 HZ</span>
    <span style="font-size: 10px; color: #5A5680; letter-spacing: 0.5px;">INWARD</span>
  </div>
  <input type="range" min="0" max="100" value="0" step="1" id="depth" style="width: 100%; accent-color: #7F77DD;">
</div>
<div style="position: absolute; top: 16px; left: 16px; z-index: 2;">
  <div style="font-size: 22px; font-weight: 500; letter-spacing: -0.5px;" id="hz-label">14.0 Hz</div>
  <div style="font-size: 11px; color: #5A5680; margin-top: 2px;" id="zone-label"></div>
</div>
<div style="position: absolute; top: 16px; right: 16px; text-align: right; z-index: 2;">
  <div style="font-size: 12px; font-weight: 500; letter-spacing: 0.5px;" id="state-label"></div>
  <div style="font-size: 10px; color: #5A5680; margin-top: 2px;" id="state-sub"></div>
</div>
</div>
<div style="padding: 16px 4px 8px; min-height: 60px;">
  <div style="font-size: 13px; color: rgba(210,210,210,0.95); line-height: 1.65;" id="info-text"></div>
</div>
</div>
</div>

<script>
const c = document.getElementById('med');
const DPR = window.devicePixelRatio || 1;
const slider = document.getElementById('depth');
let t = 0, sv = 0, particles = [], mode = 'sub';

const OBJ = {
  states: [
    { label: 'BETA', sub: '12 – 30 Hz', zone: 'Fast wave activity', info: 'Beta waves show up during active thinking and reacting to things around you. The brain fires well above the Earth\u2019s 7.83 Hz, and the two rhythms are completely out of step, producing interference instead of sync.' },
    { label: 'ALPHA', sub: '8 – 12 Hz', zone: 'Relaxed wakefulness', info: 'Alpha waves appear when the eyes close and the mind quiets down, bringing the heart rate lower and deepening the breath. The brain\u2019s frequency drops toward 7.83 Hz and the two halves start working more in sync.' },
    { label: 'ALPHA–THETA', sub: '~7.83 Hz', zone: 'The resonant frequency', info: 'At 7.83 Hz the body\u2019s rhythm matches the Earth\u2019s. The two waves lock into phase and form a single standing wave, with the body vibrating in sync with the planet instead of producing its own signal.' },
    { label: 'THETA', sub: '4 – 7 Hz', zone: 'Deep meditation and dreams', info: 'Theta waves show up in deep meditation, the moments before sleep, and during dreams. The body\u2019s rhythm drops below 7.83 Hz. Brain scans of experienced meditators show sustained theta with very little response to external input.' },
    { label: 'DELTA', sub: '0.5 – 4 Hz', zone: 'Dreamless deep sleep', info: 'Delta waves take over in dreamless sleep and the deepest absorption. Brainwave patterns flatten toward a single slow oscillation, and the brain stops distinguishing between self and surroundings in any measurable way.' }
  ]
};
const SUB = {
  states: [
    { label: 'VIKSHEPA', sub: 'Distraction, outward pull', zone: 'The chattering mind', info: 'The mind scatters outward into objects, plans, and reactions, and every thought feels urgent enough to pull attention toward itself. The body vibrates fast and out of step with the Earth beneath it, like a radio tuned between stations producing only static.' },
    { label: 'PRATYAHARA', sub: 'Senses turning inward', zone: 'Withdrawal begins', info: 'Sounds continue but they no longer pull you toward them, like a turtle drawing its limbs inward. The body slows down, the breath gets quieter, and the distance between you and your thoughts widens just enough to notice.' },
    { label: 'SAMYAMA', sub: 'Body and Earth as one', zone: 'The threshold', info: 'You stop trying to concentrate because concentration is already happening on its own. The body\u2019s pulse matches the Earth\u2019s hum at 7.83 Hz, the line between inside and outside dissolves, and the body becomes an antenna tuned to the planet.' },
    { label: 'PRAJNA', sub: 'Awareness without object', zone: 'The causal body', info: 'Images and thoughts fade out along with the sense of being someone who is meditating. The mind stays aware but there is nothing in particular to be aware of, something like sleep except awareness itself remains. This is where dreams and waking life both come from, though you would never know it while you are in it.' },
    { label: 'TURIYA', sub: 'The witness, always present', zone: 'The fourth', info: 'Everything else quiets down enough for you to notice what was always there. It was present during every other state, the way a screen is present behind every image projected onto it.' }
  ]
};

function setMode(m) {
  mode = m;
  document.getElementById('btn-sub').style.background = m === 'sub' ? '#1A1830' : 'transparent';
  document.getElementById('btn-sub').style.color = m === 'sub' ? '#CECBF6' : '#5A5680';
  document.getElementById('btn-obj').style.background = m === 'obj' ? '#1A1830' : 'transparent';
  document.getElementById('btn-obj').style.color = m === 'obj' ? '#CECBF6' : '#5A5680';
}
setMode('sub');

function resize() {
  const r = c.getBoundingClientRect();
  c.width = r.width * DPR;
  c.height = r.height * DPR;
}
resize();
window.addEventListener('resize', resize);
slider.addEventListener('input', function(e) { sv = parseInt(e.target.value) / 100; });

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function getBodyHz(s) { return s <= 0.5 ? lerp(14, 7.83, s / 0.5) : lerp(7.83, 1.5, (s - 0.5) / 0.5); }
function lerpColor(c1, c2, t) {
  return [Math.round(c1[0]+(c2[0]-c1[0])*t), Math.round(c1[1]+(c2[1]-c1[1])*t), Math.round(c1[2]+(c2[2]-c1[2])*t)];
}

var COL_SCATTERED = [216, 90, 48];
var COL_SETTLING = [218, 165, 80];
var COL_ENTRAINED = [93, 202, 165];
var COL_DEEP = [140, 120, 210];
var COL_TURIYA = [220, 210, 240];

function getAuraColor(bodyHz) {
  if (bodyHz > 10) return lerpColor(COL_SETTLING, COL_SCATTERED, clamp((bodyHz-10)/4,0,1));
  if (bodyHz > 7.83) return lerpColor(COL_ENTRAINED, COL_SETTLING, clamp((bodyHz-7.83)/2.17,0,1));
  if (bodyHz > 4) return lerpColor(COL_DEEP, COL_ENTRAINED, clamp((bodyHz-4)/3.83,0,1));
  return lerpColor(COL_TURIYA, COL_DEEP, clamp((bodyHz-1.5)/2.5,0,1));
}

function getStateIdx(bodyHz) {
  if (bodyHz > 10) return 0;
  if (bodyHz > 8.3) return 1;
  if (bodyHz > 7.33) return 2;
  if (bodyHz > 4) return 3;
  return 4;
}

function drawFigure(ctx, cx, by, sc, breath) {
  ctx.save();
  ctx.translate(cx, by);
  var bs = 1 + Math.sin(breath) * 0.006;
  ctx.scale(sc * bs, sc * bs);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  var S = '#3A3660', F = '#1C1A32';
  ctx.strokeStyle = S; ctx.fillStyle = F; ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.arc(0, -132, 12, 0, Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-4,-120); ctx.lineTo(-5,-114);
  ctx.bezierCurveTo(-7,-106,-9,-96,-10,-86);
  ctx.lineTo(10,-86);
  ctx.bezierCurveTo(9,-96,7,-106,5,-114);
  ctx.lineTo(4,-120); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-10,-86); ctx.bezierCurveTo(-14,-82,-18,-76,-20,-68);
  ctx.bezierCurveTo(-22,-58,-22,-46,-20,-36);
  ctx.bezierCurveTo(-18,-26,-16,-18,-14,-10);
  ctx.lineTo(14,-10); ctx.bezierCurveTo(16,-18,18,-26,20,-36);
  ctx.bezierCurveTo(22,-46,22,-58,20,-68);
  ctx.bezierCurveTo(18,-76,14,-82,10,-86);
  ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.moveTo(-18,-76);
  ctx.bezierCurveTo(-26,-72,-34,-62,-40,-48);
  ctx.bezierCurveTo(-44,-38,-44,-28,-40,-22);
  ctx.bezierCurveTo(-36,-16,-30,-14,-26,-12); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(18,-76);
  ctx.bezierCurveTo(26,-72,34,-62,40,-48);
  ctx.bezierCurveTo(44,-38,44,-28,40,-22);
  ctx.bezierCurveTo(36,-16,30,-14,26,-12); ctx.stroke();
  ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.arc(-28,-10,4.5,0,Math.PI*2); ctx.fillStyle=F; ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(28,-10,4.5,0,Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = F;
  ctx.beginPath(); ctx.moveTo(-14,-10);
  ctx.bezierCurveTo(-20,-2,-30,4,-44,8);
  ctx.bezierCurveTo(-52,10,-58,8,-56,4);
  ctx.bezierCurveTo(-54,0,-46,-4,-36,-2);
  ctx.bezierCurveTo(-28,-1,-20,2,-14,-2);
  ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(14,-10);
  ctx.bezierCurveTo(20,-2,30,4,44,8);
  ctx.bezierCurveTo(52,10,58,8,56,4);
  ctx.bezierCurveTo(54,0,46,-4,36,-2);
  ctx.bezierCurveTo(28,-1,20,2,14,-2);
  ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-44,8);
  ctx.bezierCurveTo(-38,22,-20,30,0,30);
  ctx.bezierCurveTo(20,30,38,22,44,8);
  ctx.bezierCurveTo(30,16,16,22,0,22);
  ctx.bezierCurveTo(-16,22,-30,16,-44,8);
  ctx.fill(); ctx.stroke();
  ctx.restore();
  return { headX: cx, headY: by+(-132)*sc*bs, headR: 12*sc*bs };
}

function loop() {
  var ctx = c.getContext('2d');
  var w = c.width/DPR, h = c.height/DPR;
  ctx.setTransform(DPR,0,0,DPR,0,0);
  t += 0.014;
  var bodyHz = getBodyHz(sv);
  var earthHz = 7.83;
  var diff = Math.abs(bodyHz - earthHz);
  var entrained = diff < 0.5;
  var below = bodyHz < earthHz - 0.5;
  var alignment = clamp(1 - diff/3, 0, 1);
  var dissolve = below ? clamp((earthHz-0.5-bodyHz)/5, 0, 1) : 0;
  var auraCol = getAuraColor(bodyHz);
  var stIdx = getStateIdx(bodyHz);
  var d = mode === 'obj' ? OBJ : SUB;
  var st = d.states[stIdx];

  document.getElementById('hz-label').textContent = bodyHz.toFixed(1)+' Hz';
  document.getElementById('hz-label').style.color = 'rgb('+auraCol[0]+','+auraCol[1]+','+auraCol[2]+')';
  document.getElementById('state-label').textContent = st.label;
  document.getElementById('state-label').style.color = 'rgb('+auraCol[0]+','+auraCol[1]+','+auraCol[2]+')';
  document.getElementById('state-sub').textContent = st.sub;
  document.getElementById('zone-label').textContent = st.zone;
  document.getElementById('info-text').textContent = st.info;

  ctx.fillStyle = '#0C0B18';
  ctx.fillRect(0,0,w,h);

  var nebA = 0.02 + alignment*0.03 + dissolve*0.05;
  for (var i=4;i>=0;i--) {
    var r = 80+i*50+dissolve*50;
    ctx.beginPath(); ctx.arc(w*0.5,h*0.42,r,0,Math.PI*2);
    ctx.fillStyle = 'rgba('+auraCol[0]+','+auraCol[1]+','+auraCol[2]+','+nebA*(1-i*0.18)+')';
    ctx.fill();
  }

  for (var i=0;i<70;i++) {
    var sx=((i*137.508+17)%w), sy=((i*97.31+33)%(h*0.6));
    var fl = 0.3+0.7*Math.abs(Math.sin(t*0.35+i*2.71));
    ctx.globalAlpha = fl*(0.12+dissolve*0.4+alignment*0.12);
    ctx.fillStyle = dissolve>0.3 ? 'rgb('+COL_TURIYA[0]+','+COL_TURIYA[1]+','+COL_TURIYA[2]+')' : '#4A4670';
    ctx.beginPath(); ctx.arc(sx,sy,0.8+(dissolve>0.3?0.7:0),0,Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha = 1;

  if (entrained) { ctx.globalAlpha=0.035; ctx.fillStyle='rgb('+COL_ENTRAINED[0]+','+COL_ENTRAINED[1]+','+COL_ENTRAINED[2]+')'; ctx.fillRect(0,0,w,h); ctx.globalAlpha=1; }
  if (dissolve>0) { ctx.globalAlpha=dissolve*0.05; ctx.fillStyle='rgb('+COL_DEEP[0]+','+COL_DEEP[1]+','+COL_DEEP[2]+')'; ctx.fillRect(0,0,w,h); ctx.globalAlpha=1; }

  var pcx=w/2, pby=h*0.64;
  var figAlpha = Math.max(0.1, 1-dissolve*0.88);
  ctx.globalAlpha = figAlpha;
  var head = drawFigure(ctx, pcx, pby, 1.3, t*1.2);
  ctx.globalAlpha = 1;

  var glow = entrained ? 1 : (alignment>0.35 ? (alignment-0.35)/0.65 : 0);
  var totalGlow = clamp(glow+dissolve*0.9, 0, 1);

  if (totalGlow > 0.02) {
    var maxR = 28+totalGlow*90;
    for (var i=8;i>=0;i--) {
      var r = head.headR+3+(i/8)*maxR;
      var a = totalGlow*(0.08-i*0.009);
      if (a<=0) continue;
      ctx.beginPath(); ctx.arc(head.headX,head.headY,r,0,Math.PI*2);
      ctx.fillStyle = 'rgba('+auraCol[0]+','+auraCol[1]+','+auraCol[2]+','+a+')'; ctx.fill();
    }
    ctx.beginPath(); ctx.arc(head.headX,head.headY,head.headR+3,0,Math.PI*2);
    ctx.fillStyle = 'rgba(255,255,255,'+totalGlow*0.15+')'; ctx.fill();
    if (totalGlow>0.3) {
      ctx.beginPath(); ctx.arc(head.headX,head.headY,2.5,0,Math.PI*2);
      ctx.fillStyle = 'rgba(255,255,255,'+totalGlow*0.5+')'; ctx.fill();
    }
  }

  if (entrained || totalGlow>0.6) {
    var rA = entrained ? alignment*0.1 : dissolve*0.07;
    for (var i=0;i<3;i++) {
      var baseR=55+i*42, pulse=Math.sin(t*0.55-i*0.8)*6;
      ctx.beginPath(); ctx.arc(pcx,pby-55*1.3,baseR+pulse+dissolve*35,0,Math.PI*2);
      ctx.strokeStyle = 'rgba('+auraCol[0]+','+auraCol[1]+','+auraCol[2]+','+rA*(1-i*0.3)+')';
      ctx.lineWidth=0.5; ctx.stroke();
    }
  }

  if (totalGlow>0.5) {
    var cA=(totalGlow-0.5)*0.35;
    for (var i=0;i<14;i++) {
      var angle=(i/14)*Math.PI*2+t*0.13;
      var dist=42+Math.sin(t*1.1+i*1.3)*18+dissolve*45;
      ctx.strokeStyle='rgba('+auraCol[0]+','+auraCol[1]+','+auraCol[2]+','+cA*0.25+')';
      ctx.lineWidth=0.5; ctx.beginPath(); ctx.moveTo(head.headX,head.headY);
      var ex=head.headX+Math.cos(angle)*dist, ey=head.headY+Math.sin(angle)*dist;
      ctx.quadraticCurveTo(head.headX+Math.cos(angle+0.3)*dist*0.6,head.headY+Math.sin(angle+0.3)*dist*0.6,ex,ey);
      ctx.stroke();
      ctx.beginPath(); ctx.arc(ex,ey,1,0,Math.PI*2);
      ctx.fillStyle='rgba('+auraCol[0]+','+auraCol[1]+','+auraCol[2]+','+cA*0.4+')'; ctx.fill();
    }
  }

  if (dissolve>0.15) {
    var dA=(dissolve-0.15)/0.85, bCy=pby-55*1.3;
    for (var i=6;i>=0;i--) {
      var r=25+i*26*(1+dA), a=dA*(0.035-i*0.004);
      if (a<=0) continue;
      ctx.beginPath(); ctx.arc(pcx,bCy,r,0,Math.PI*2);
      ctx.fillStyle='rgba('+auraCol[0]+','+auraCol[1]+','+auraCol[2]+','+Math.max(0,a)+')'; ctx.fill();
    }
  }

  var waveC = h*0.87;
  var waveSpread = entrained ? 0 : clamp(diff/6, 0, 1) * 14;
  var bodyCol = below ? COL_DEEP : (entrained ? COL_ENTRAINED : COL_SCATTERED);
  var bodyA = below ? Math.max(0.2, 1-dissolve*0.5)*0.4 : (entrained ? 0.45 : 0.45);
  var earthA = entrained ? 0.45 : 0.3;

  ctx.lineWidth = entrained ? 1.6 : 1.2; ctx.beginPath();
  for (var x=0;x<w;x++) { var px=x/w, env=Math.sin(px*Math.PI); var y=waveC-waveSpread+14*env*Math.sin(px*bodyHz*3*Math.PI+t*bodyHz*0.5); x===0?ctx.moveTo(x,y):ctx.lineTo(x,y); }
  ctx.strokeStyle='rgba('+bodyCol[0]+','+bodyCol[1]+','+bodyCol[2]+','+bodyA+')'; ctx.stroke();

  ctx.lineWidth = entrained ? 1.6 : 1; ctx.beginPath();
  for (var x=0;x<w;x++) { var px=x/w, env=Math.sin(px*Math.PI); var y=waveC+waveSpread+12*env*Math.sin(px*earthHz*3*Math.PI+t*earthHz*0.6); x===0?ctx.moveTo(x,y):ctx.lineTo(x,y); }
  ctx.strokeStyle='rgba('+COL_ENTRAINED[0]+','+COL_ENTRAINED[1]+','+COL_ENTRAINED[2]+','+earthA+')'; ctx.stroke();

  if (totalGlow>0.35 && Math.random()<totalGlow*0.18) {
    var angle=Math.random()*Math.PI*2, sp=0.12+Math.random()*0.3, spread=dissolve>0?35:18;
    particles.push({x:head.headX+Math.cos(angle)*spread,y:head.headY+Math.sin(angle)*spread,vx:Math.cos(angle)*sp*(1+dissolve*0.7),vy:Math.sin(angle)*sp*(1+dissolve*0.7)-0.08,life:1,decay:0.003+Math.random()*0.006});
  }
  for (var i=particles.length-1;i>=0;i--) {
    var p=particles[i]; p.x+=p.vx; p.y+=p.vy; p.life-=p.decay;
    if (p.life<=0){particles.splice(i,1);continue;}
    ctx.beginPath(); ctx.arc(p.x,p.y,1.1*p.life,0,Math.PI*2);
    ctx.fillStyle='rgba('+auraCol[0]+','+auraCol[1]+','+auraCol[2]+','+p.life*0.35+')'; ctx.fill();
  }
  if (particles.length>100) particles.splice(0,particles.length-100);

  if (!entrained && !below && diff>1.5) {
    var ch=clamp((diff-1.5)/4,0,1);
    for (var i=0;i<Math.floor(ch*4);i++) {
      var nx=w*0.15+Math.random()*w*0.7, ny=h*0.08+Math.random()*h*0.4;
      ctx.beginPath(); ctx.moveTo(nx,ny);
      ctx.lineTo(nx+(Math.random()-0.5)*ch*10,ny+(Math.random()-0.5)*ch*10);
      ctx.strokeStyle='rgba('+COL_SCATTERED[0]+','+COL_SCATTERED[1]+','+COL_SCATTERED[2]+','+0.05*ch+')';
      ctx.lineWidth=0.4; ctx.stroke();
    }
  }

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
</script>

**Note:** This visualization is symbolic and exploratory, not a medical or scientific claim about how meditation works or how brainwaves synchronize with Earth's frequency.

---

_The Schumann Resonance is Earth's electromagnetic frequency at 7.83 Hz. The meditation states come from Patanjali's Yoga Sutras and the Mandukya Upanishad._
