---
title: The Mind on Autopilot
date: 2026-04-27T00:00:00Z
author: Prashish
description: "the cycle of thought, action, and the seeds underneath"
article_kind: Spiritual
aliases:
  - /fragments/the-mind-on-autopilot/
  - /seeking/how-desires-are-born/
  - /fragments/how-desires-are-born/
---

<style>
.dab * { box-sizing: border-box; margin: 0; }
.dab { padding: 1rem 0; font-family: Verdana, Geneva, Tahoma, sans-serif; }
.dab .mode-toggle { display: flex; justify-content: center; gap: 4px; margin-bottom: 1.5rem; border: 0.5px solid var(--border-color-light); border-radius: 999px; padding: 4px; width: fit-content; margin-left: auto; margin-right: auto; }
.dab .mode-btn { font-size: 13px; padding: 6px 16px; border: none; background: transparent; color: var(--text-color-muted); cursor: pointer; border-radius: 999px; font-family: Verdana, Geneva, Tahoma, sans-serif; transition: all 0.35s ease; letter-spacing: 0.2px; }
.dab .mode-btn:hover { color: var(--text-color); }
.dab .mode-btn.active { background: #BA7517; color: #fff; box-shadow: 0 0 12px rgba(186,117,23,0.25); }
.dab .mode-btn.active:hover { color: #fff; }
.dab .scene { margin-bottom: 1rem; }
.dab .svg-wrap { background: #2a2a2a; border-radius: 10px; padding: 8px 0; margin-bottom: 16px; }
[data-theme="dark"] .dab .svg-wrap { background: transparent; padding: 0; margin-bottom: 0; }
.dab .insight { padding: 16px 20px; border-left: 2px solid #BA7517; margin: 0; }
.dab .insight-label { font-size: 11px; color: #BA7517; letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 6px; transition: color 0.4s; }
.dab .insight-text { font-size: 15px; color: var(--text-color); line-height: 1.65; }
.dab.aware .insight-label { color: #0F6E56; }
.dab.aware .insight { border-left-color: #0F6E56; }
.dab .svg-wrap { --svg-text: #e0e0e0; --svg-text-muted: rgba(255,255,255,0.6); }
.dab svg text.th { font-size: 13px; fill: var(--svg-text); font-family: Verdana, Geneva, Tahoma, sans-serif; }
.dab svg text.ts { font-size: 12px; fill: var(--svg-text-muted); font-family: Verdana, Geneva, Tahoma, sans-serif; }
.dab svg .smooth { transition: fill 0.5s ease, stroke 0.5s ease, opacity 0.5s ease; }
@media (prefers-reduced-motion: reduce) { .dab * { animation: none !important; transition: none !important; } }
</style>

<div class="dab" id="dab-root">
<div class="mode-toggle">
<button class="mode-btn active" id="dab-btn-auto" onclick="dabSetMode('auto')">Default Mode</button>
<button class="mode-btn" id="dab-btn-aware" onclick="dabSetMode('aware')">With Awareness</button>
</div>
<div class="scene">
<div class="svg-wrap"><svg width="100%" viewBox="0 0 680 540" id="dab-main-svg" role="img">
<title>The cycle of how desires form and reinforce themselves</title>
<desc>Animated diagram showing tendencies rising from the subconscious into thoughts and actions</desc>
<defs>
<marker id="dab-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
<radialGradient id="dab-sg"><stop offset="0%" stop-color="#534AB7" stop-opacity="0.55"/><stop offset="100%" stop-color="#534AB7" stop-opacity="0"/></radialGradient>
<radialGradient id="dab-tg"><stop offset="0%" stop-color="#BA7517" stop-opacity="0.45"/><stop offset="100%" stop-color="#BA7517" stop-opacity="0"/></radialGradient>
<radialGradient id="dab-gg"><stop offset="0%" stop-color="#0F6E56" stop-opacity="0.45"/><stop offset="100%" stop-color="#0F6E56" stop-opacity="0"/></radialGradient>
</defs>
<rect x="40" y="370" width="600" height="150" rx="14" fill="#534AB7" opacity="0.10"/>
<rect x="40" y="400" width="600" height="120" rx="14" fill="#534AB7" opacity="0.09"/>
<circle cx="340" cy="460" r="40" fill="url(#dab-sg)"><animate attributeName="r" values="38;50;38" dur="4.2s" repeatCount="indefinite"/></circle>
<circle cx="340" cy="460" r="6" fill="#534AB7" opacity="0.85"><animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/></circle>
<text class="th" x="340" y="508" text-anchor="middle" fill="#534AB7" opacity="0.85">Deep tendencies</text>
<text class="ts" x="340" y="524" text-anchor="middle" opacity="0.5">Built up from your past</text>
<line x1="100" y1="360" x2="580" y2="360" stroke="var(--border-color-light)" stroke-width="0.5" stroke-dasharray="4 4" opacity="0.35"/>
<text class="ts" x="580" y="354" text-anchor="end" opacity="0.4">Surface of the mind</text>
<g id="dab-auto-labels" class="smooth">
<text class="th" x="340" y="178" text-anchor="middle" opacity="0.75">Conscious thought</text>
<text class="ts" x="340" y="192" text-anchor="middle" opacity="0.45">It is pulling you in</text>
</g>
<g id="dab-aware-top-label" opacity="0" class="smooth">
<text class="th" x="340" y="178" text-anchor="middle" fill="#0F6E56" opacity="0.85">Conscious choice</text>
<text class="ts" x="340" y="192" text-anchor="middle" fill="#0F6E56" opacity="0.55">You choose what to do with it</text>
</g>
<rect class="smooth" x="130" y="50" width="130" height="42" rx="8" fill="#993C1D" opacity="0.12" stroke="#993C1D" stroke-width="0.6" stroke-opacity="0.45" id="dab-box-speak"/>
<text class="th smooth" x="195" y="75" text-anchor="middle" dominant-baseline="central" fill="#993C1D" opacity="0.9" id="dab-txt-speak">You speak</text>
<rect class="smooth" x="420" y="50" width="130" height="42" rx="8" fill="#993C1D" opacity="0.12" stroke="#993C1D" stroke-width="0.6" stroke-opacity="0.45" id="dab-box-act"/>
<text class="th smooth" x="485" y="75" text-anchor="middle" dominant-baseline="central" fill="#993C1D" opacity="0.9" id="dab-txt-act">You act</text>
<path d="M195 92 C130 90,70 180,50 360 C50 430,140 470,288 462" fill="none" stroke="#993C1D" stroke-width="0.8" opacity="0.2" stroke-dasharray="5 5" marker-end="url(#dab-arrow)" class="dab-return-path smooth"/>
<path d="M485 92 C550 90,610 180,630 360 C630 430,540 470,392 462" fill="none" stroke="#993C1D" stroke-width="0.8" opacity="0.2" stroke-dasharray="5 5" marker-end="url(#dab-arrow)" class="dab-return-path smooth"/>
<text class="ts dab-return-label smooth" x="38" y="270" fill="#993C1D" opacity="0.55" transform="rotate(-90,38,270)">Makes the tendencies stronger</text>
<text class="ts dab-return-label smooth" x="642" y="270" fill="#993C1D" opacity="0.55" transform="rotate(90,642,270)">Makes the tendencies stronger</text>
<path d="M195 92 C130 90,70 180,50 360 C50 430,140 470,288 462" fill="none" stroke="#0F6E56" stroke-width="0.8" opacity="0" stroke-dasharray="5 5" marker-end="url(#dab-arrow)" class="dab-green-return smooth"/>
<path d="M485 92 C550 90,610 180,630 360 C630 430,540 470,392 462" fill="none" stroke="#0F6E56" stroke-width="0.8" opacity="0" stroke-dasharray="5 5" marker-end="url(#dab-arrow)" class="dab-green-return smooth"/>
<text class="ts dab-green-label smooth" x="38" y="270" fill="#0F6E56" opacity="0" transform="rotate(-90,38,270)">Grows a new tendency</text>
<text class="ts dab-green-label smooth" x="642" y="270" fill="#0F6E56" opacity="0" transform="rotate(90,642,270)">Grows a new tendency</text>
<g id="dab-aware-notice" opacity="0" class="smooth">
<text class="ts" x="340" y="378" text-anchor="middle" fill="#0F6E56" opacity="0.75">You notice it here</text>
<circle cx="340" cy="395" r="4" fill="none" stroke="#0F6E56" stroke-width="0.6" stroke-dasharray="3 3" opacity="0.55"><animate attributeName="r" values="4;6;4" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.55;0.9;0.55" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="340" cy="395" r="9" fill="none" stroke="#0F6E56" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.35"><animate attributeName="r" values="8;12;8" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.35;0.6;0.35" dur="3.2s" repeatCount="indefinite"/></circle>
<circle cx="340" cy="395" r="14" fill="none" stroke="#0F6E56" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.2"><animate attributeName="r" values="13;17;13" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.18;0.32;0.18" dur="4s" repeatCount="indefinite"/></circle>
</g>
<g id="dab-aware-letgo" opacity="0" class="smooth">
<path d="M348 400 C375 415,380 430,355 442 C348 452,344 458,341 462" fill="none" stroke="#0F6E56" stroke-width="0.8" opacity="0.3" stroke-dasharray="5 5"/>
<text class="ts" x="395" y="430" fill="#0F6E56" opacity="0.55">Some you simply let go</text>
</g>
<g id="dab-plyr"></g>
</svg></div>
</div>
<div class="insight">
<div class="insight-label" id="dab-il">The default mode</div>
<div class="insight-text" id="dab-it"></div>
</div>
</div>

<script>
(function(){
var mode='auto';
var NS='http://www.w3.org/2000/svg';
var plyr=document.getElementById('dab-plyr');
var root=document.getElementById('dab-root');
var svg=document.getElementById('dab-main-svg');
function mkC(){var c=document.createElementNS(NS,'circle');c.setAttribute('r','0');c.setAttribute('opacity','0');plyr.appendChild(c);return c;}
function bz(ax,ay,bx,by,cx,cy,dx,dy,t){var u=1-t;return{x:u*u*u*ax+3*u*u*t*bx+3*u*t*t*cx+t*t*t*dx,y:u*u*u*ay+3*u*u*t*by+3*u*t*t*cy+t*t*t*dy};}
function ease(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;}

var PH={
rise:{dur:2200,fn:function(t){var p=bz(340,458,340,400,340,350,340,200,t);p.x+=Math.sin(t*Math.PI*2.5)*12*(1-t);return p;}},
pause:{dur:300,fn:function(t){return{x:340,y:200};}},
toL:{dur:700,fn:function(t){return bz(340,200,290,150,230,105,195,92,t);}},
toR:{dur:700,fn:function(t){return bz(340,200,390,150,450,105,485,92,t);}},
rL1:{dur:1700,fn:function(t){return bz(195,92,130,90,70,180,50,360,t);}},
rL2:{dur:900,fn:function(t){return bz(50,360,50,430,140,470,288,462,t);}},
rR1:{dur:1700,fn:function(t){return bz(485,92,550,90,610,180,630,360,t);}},
rR2:{dur:900,fn:function(t){return bz(630,360,630,430,540,470,392,462,t);}},
aRise:{dur:1500,fn:function(t){var p=bz(340,458,340,440,340,420,340,395,t);p.x+=Math.sin(t*Math.PI*2)*8*(1-t);return p;}},
aTransform:{dur:1800,fn:function(t){return bz(340,395,340,330,340,260,340,200,t);}},
aToL:{dur:700,fn:function(t){return bz(340,200,290,150,230,110,195,92,t);}},
aToR:{dur:700,fn:function(t){return bz(340,200,390,150,450,110,485,92,t);}},
aRetL1:{dur:1500,fn:function(t){return bz(195,92,130,90,70,180,50,360,t);}},
aRetL2:{dur:800,fn:function(t){return bz(50,360,50,430,140,470,288,462,t);}},
aRetR1:{dur:1500,fn:function(t){return bz(485,92,550,90,610,180,630,360,t);}},
aRetR2:{dur:800,fn:function(t){return bz(630,360,630,430,540,470,392,462,t);}},
letGoArc:{dur:2200,fn:function(t){return bz(340,395,365,408,378,425,355,442,t);}},
letGoEnd:{dur:1000,fn:function(t){return bz(355,442,350,452,345,458,340,462,t);}}
};

function pickSide(){return Math.random()<0.5?'left':'right';}
function pickType(){return Math.random()<0.5?'letgo':'choice';}
function Dot(delay,hasGlow){
this.el=mkC();
this.glow=hasGlow?mkC():null;
if(this.glow)this.glow.setAttribute('fill','url(#dab-tg)');
this.delay=delay;this.side=pickSide();this.type=pickType();
this.time=-delay;this.phase='';this.pt=0;
this.resetPhase();
}
Dot.prototype.seq=function(){
if(mode==='auto'){
return this.side==='left'?['rise','pause','toL','rL1','rL2']:['rise','pause','toR','rR1','rR2'];
}
if(this.type==='letgo')return['aRise','letGoArc','letGoEnd'];
return this.side==='left'?['aRise','aTransform','aToL','aRetL1','aRetL2']:['aRise','aTransform','aToR','aRetR1','aRetR2'];
};
Dot.prototype.resetPhase=function(){this.phase=this.seq()[0];this.pt=0;};
Dot.prototype.reset=function(){this.side=pickSide();this.type=pickType();this.resetPhase();this.time=-this.delay;};
Dot.prototype.update=function(dt){
this.time+=dt;
if(this.time<0){this.el.setAttribute('opacity','0');if(this.glow)this.glow.setAttribute('opacity','0');return;}
var s=this.seq();
var ph=PH[this.phase];
if(!ph){this.reset();return;}
this.pt+=dt;
var t=Math.min(this.pt/ph.dur,1);
var et=ease(t);
var pos=ph.fn(et);
var r=4,color='#534AB7',op=0.65;
if(this.phase==='rise'){r=2.5+t*5;op=0.3+t*0.55;color=t>0.7?'#BA7517':'#534AB7';}
else if(this.phase==='aRise'){r=2.5+t*4.5;op=0.3+t*0.55;color=this.type==='letgo'?(t>0.5?'#0F6E56':'#534AB7'):(t>0.4?'#0F6E56':'#534AB7');}
else if(this.phase==='aTransform'){r=6+t*1.5;op=0.75+t*0.15;color='#0F6E56';}
else if(this.phase==='pause'){r=8;op=0.95;color='#BA7517';}
else if(this.phase==='toL'||this.phase==='toR'){r=7-t*2.5;op=0.85-t*0.2;color='#993C1D';}
else if(this.phase==='aToL'||this.phase==='aToR'){r=7-t*2;op=0.85-t*0.15;color='#0F6E56';}
else if(this.phase.indexOf('rL')===0||this.phase.indexOf('rR')===0){r=4-t*1.5;op=0.45-t*0.2;color='#993C1D';}
else if(this.phase.indexOf('aRet')===0){r=4-t*1.5;op=0.5-t*0.2;color='#0F6E56';}
else if(this.phase==='letGoArc'){r=5-t*2;op=0.6-t*0.25;color='#0F6E56';}
else if(this.phase==='letGoEnd'){r=3-t*1.5;op=0.35-t*0.15;color='#0F6E56';}
this.el.setAttribute('cx',pos.x);
this.el.setAttribute('cy',pos.y);
this.el.setAttribute('r',Math.max(r,0.5));
this.el.setAttribute('fill',color);
this.el.setAttribute('opacity',Math.max(op,0));
if(this.glow){
this.glow.setAttribute('cx',pos.x);
this.glow.setAttribute('cy',pos.y);
var isAutoGlow=(this.phase==='pause')||(this.phase==='rise'&&t>0.85);
var isAwareGlow=(this.phase==='aTransform'&&t>0.4&&t<0.95);
if(isAutoGlow){this.glow.setAttribute('fill','url(#dab-tg)');this.glow.setAttribute('r',28);this.glow.setAttribute('opacity',0.55);}
else if(isAwareGlow){this.glow.setAttribute('fill','url(#dab-gg)');this.glow.setAttribute('r',26);this.glow.setAttribute('opacity',0.5);}
else{this.glow.setAttribute('r',0);this.glow.setAttribute('opacity',0);}
}
if(t>=1){var i=s.indexOf(this.phase);if(i<s.length-1){this.phase=s[i+1];this.pt=0;}else this.reset();}
};

var dots=[
new Dot(0,true),
new Dot(700,false),
new Dot(1400,true),
new Dot(2100,false),
new Dot(2800,false),
new Dot(3500,true),
new Dot(4200,false),
new Dot(4900,false),
new Dot(5600,true),
new Dot(6300,false)
];

var visible=true;
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(entries){visible=entries[0].isIntersecting;},{threshold:0.05});
io.observe(svg);
}

var last=performance.now();
function anim(now){
var dt=Math.min(now-last,50);
last=now;
if(visible&&!document.hidden){dots.forEach(function(d){d.update(dt);});}
requestAnimationFrame(anim);
}
requestAnimationFrame(anim);

var ins={
auto:{
label:'The Default Mode',
text:'A thought comes into your mind, and right away you start saying or doing something because of it. It feels like you chose to think it. But really, this thought came up on its own, from old habits inside you that were built from your past.<br><br>What you say or do then sinks back into those old habits and makes them even stronger. So next time, the same kind of thought will rise up faster and pull you in even more. This is the loop most of us live inside, without ever knowing it is there.'
},
aware:{
label:'With Awareness',
text:'With a lot of meditative practice, you can start to notice a thought as soon as it rises, before it pulls you in. And once you notice it clearly, you do not have to react to it. <strong>You can choose what to do</strong>.<br><br>You can simply observe the thought and let it go. It fades back down without turning into words or actions, and the old habit becomes a little weaker. Or you can choose to act on the thought, and the action is a real choice this time. When the action sinks back down, it plants a new kind of habit. Slowly, the old habits get weaker, and new ones start to grow in their place.'
}
};

window.dabSetMode=function(m){
mode=m;
root.classList.toggle('aware',m==='aware');
document.getElementById('dab-btn-auto').classList.toggle('active',m==='auto');
document.getElementById('dab-btn-aware').classList.toggle('active',m==='aware');
document.getElementById('dab-auto-labels').style.opacity=m==='auto'?'1':'0';
document.getElementById('dab-aware-top-label').style.opacity=m==='aware'?'1':'0';
document.getElementById('dab-aware-notice').style.opacity=m==='aware'?'1':'0';
document.getElementById('dab-aware-letgo').style.opacity=m==='aware'?'1':'0';
document.querySelectorAll('.dab-return-path').forEach(function(p){p.style.opacity=m==='aware'?'0':'0.2';});
document.querySelectorAll('.dab-return-label').forEach(function(p){p.style.opacity=m==='aware'?'0':'0.55';});
document.querySelectorAll('.dab-green-return').forEach(function(p){p.style.opacity=m==='aware'?'0.18':'0';});
document.querySelectorAll('.dab-green-label').forEach(function(p){p.style.opacity=m==='aware'?'0.55':'0';});
var bS=document.getElementById('dab-box-speak'),bA=document.getElementById('dab-box-act');
var tS=document.getElementById('dab-txt-speak'),tA=document.getElementById('dab-txt-act');
if(m==='aware'){
bS.setAttribute('stroke','#0F6E56');bS.setAttribute('fill','#0F6E56');bS.setAttribute('opacity','0.10');bS.setAttribute('stroke-opacity','0.55');
bA.setAttribute('stroke','#0F6E56');bA.setAttribute('fill','#0F6E56');bA.setAttribute('opacity','0.10');bA.setAttribute('stroke-opacity','0.55');
tS.setAttribute('fill','#0F6E56');tA.setAttribute('fill','#0F6E56');
}else{
bS.setAttribute('stroke','#993C1D');bS.setAttribute('fill','#993C1D');bS.setAttribute('opacity','0.12');bS.setAttribute('stroke-opacity','0.45');
bA.setAttribute('stroke','#993C1D');bA.setAttribute('fill','#993C1D');bA.setAttribute('opacity','0.12');bA.setAttribute('stroke-opacity','0.45');
tS.setAttribute('fill','#993C1D');tA.setAttribute('fill','#993C1D');
}
document.getElementById('dab-il').textContent=ins[m].label;
document.getElementById('dab-it').innerHTML=ins[m].text;
dots.forEach(function(d){d.el.setAttribute('opacity','0');if(d.glow)d.glow.setAttribute('opacity','0');d.reset();});
};

dabSetMode('auto');
})();
</script>
