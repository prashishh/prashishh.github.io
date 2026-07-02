---
title: "Not What AI Can Do, But Who Can Use It"
date: 2026-07-02T00:00:00Z
author: Prashish
tags:
  - ai
  - access
  - pricing
description: "the widening gap in who can use it"
article_kind: Perspective
---

There are three distinct classes of AI use right now, and each one lets you do different work.

<svg width="100%" viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" role="img">
<title>The AI access ladder</title>
<desc>A bar chart of four tiers of AI access with capability rising exponentially: Free is a sliver, twenty dollars a month is small, two hundred dollars a month towers over both, and a dashed god tier for the internal lab models runs clean off the top of the chart. A dashed curve through the tops shows the exponential shape and exits the top of the frame.</desc>
<style>
  text { font-family: system-ui, -apple-system, sans-serif; }
  .tier { font-size: 19px; font-weight: 600; }
  .cap { font-size: 12px; font-weight: 400; }
  .axis { font-size: 11px; font-weight: 400; letter-spacing: .04em; }
  .free-box { fill: #FAECE7; stroke: #993C1D; }
  .free-th { fill: #712B13; }
  .free-ts { fill: #993C1D; }
  .plus-box { fill: #E1F5EE; stroke: #0F6E56; }
  .plus-th { fill: #085041; }
  .plus-ts { fill: #0F6E56; }
  .max-box { fill: #EEEDFE; stroke: #534AB7; }
  .max-th { fill: #26215C; }
  .max-ts { fill: #534AB7; }
  .lab-box { fill: none; stroke: #BA7517; }
  .lab-th { fill: #8A560F; }
  .lab-ts { fill: #BA7517; }
  .curve { fill: none; stroke: #B0AEA6; }
  .curve-head { fill: none; stroke: #B0AEA6; }
  .base-line { stroke: #C9C7C0; }
  .axis-text { fill: #8A8880; }
  [data-theme="dark"] .free-box { fill: rgba(216,90,48,0.18); stroke: #F0997B; }
  [data-theme="dark"] .free-th { fill: #F0997B; }
  [data-theme="dark"] .free-ts { fill: #F5C4B3; }
  [data-theme="dark"] .plus-box { fill: rgba(29,158,117,0.18); stroke: #5DCAA5; }
  [data-theme="dark"] .plus-th { fill: #5DCAA5; }
  [data-theme="dark"] .plus-ts { fill: #9FE1CB; }
  [data-theme="dark"] .max-box { fill: rgba(83,74,183,0.18); stroke: #AFA9EC; }
  [data-theme="dark"] .max-th { fill: #AFA9EC; }
  [data-theme="dark"] .max-ts { fill: #CECBF6; }
  [data-theme="dark"] .lab-box { stroke: #EFB752; }
  [data-theme="dark"] .lab-th { fill: #EFB752; }
  [data-theme="dark"] .lab-ts { fill: #F2CB84; }
  [data-theme="dark"] .curve { stroke: #6E6C64; }
  [data-theme="dark"] .curve-head { stroke: #6E6C64; }
  [data-theme="dark"] .base-line { stroke: #4A4842; }
  [data-theme="dark"] .axis-text { fill: #96938B; }
</style>
<defs>
  <marker id="curve-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" class="curve-head" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
</defs>
<text class="axis axis-text" x="38" y="44" transform="rotate(-90 38 44)" text-anchor="end">capability</text>
<line class="base-line" x1="52" y1="8" x2="52" y2="380" stroke-width="1" stroke-dasharray="2,4"/>
<line class="base-line" x1="52" y1="380" x2="648" y2="380" stroke-width="1"/>
<rect class="free-box" x="70" y="366" width="128" height="14" rx="4" stroke-width="1"/>
<text class="tier free-th" x="134" y="356" text-anchor="middle">$0</text>
<text class="cap free-ts" x="134" y="402" text-anchor="middle">quick questions</text>
<rect class="plus-box" x="222" y="316" width="128" height="64" rx="6" stroke-width="1"/>
<text class="tier plus-th" x="286" y="306" text-anchor="middle">$20</text>
<text class="cap plus-ts" x="286" y="402" text-anchor="middle">real projects</text>
<rect class="max-box" x="374" y="120" width="128" height="260" rx="7" stroke-width="1"/>
<text class="tier max-th" x="438" y="110" text-anchor="middle">$200+</text>
<text class="cap max-ts" x="438" y="402" text-anchor="middle">agentic operation</text>
<rect class="lab-box" x="526" y="-30" width="128" height="410" rx="7" stroke-width="1.4" stroke-dasharray="3,5"/>
<text class="tier lab-th" x="590" y="150" text-anchor="middle">?</text>
<text class="cap lab-ts" x="590" y="402" text-anchor="middle">god tier</text>
<path class="curve" d="M134 366 C 210 362, 248 344, 286 316 C 356 264, 402 190, 438 120 C 500 30, 552 12, 600 6" stroke-width="1.4" stroke-dasharray="4,4" marker-end="url(#curve-arrow)"/>
</svg>

- **Free:** You get older, capped models, already replaced by two or three newer versions, and only a handful of messages before it cuts you off for the day. It is enough for quick questions or a rough first draft, but it was never built for real work.

- **$20 a month:** This moves you onto the current frontier model. You can build a working spreadsheet, put together a presentation, generate graphics, write and debug real code for a website. The ceiling shows up on longer tasks, once you run out of context partway through a project or hit your daily limit before you are done.

- **$100 to $200 a month, sometimes far more:** At this level the model can call tools, reason through complex multi-step problems, and stay on a single task for hours at a stretch, building, testing, and refining as it goes. It still works under your direction, but the depth and length of what it can operate on is far beyond the lower tiers. Someone paying here has moved into an entirely different category of work, running the model as infrastructure rather than asking it questions one at a time.

The top tier is still small today, but it is growing fast, and **every new release widens the gap.** At first the difference is just speed, someone running the model as infrastructure finishing in a day what a $20 user would spend weeks piecing together. Someone with top-tier access starts reaching for larger and more ambitious tasks, while someone a tier below never sees those tasks as options in the first place, and two people with the same skills slowly end up doing very different kinds of work, purely because of which version of the tool they can afford to run.

This is a strange foundation to build an economy on, and it is getting less attention than it deserves. The conversation about AI mostly asks what the technology can do. The more urgent question is who gets to use the version that can actually do it.

*Above all of this sits a tier the public never touches. The frontier labs keep their most powerful models, the god tier, entirely in-house, using them internally to accelerate their own research and engineering. We have no access to these systems and no real way of knowing what they can actually do.*
