---
title: "The First Step to Restructuring Your Company Around AI Agents"
date: 2026-04-05T00:00:00Z
author: Prashish
tags:
  - ai
  - agents
description: "ai, ai+human and human"
article_kind: Perspective
---

<style>
.il-widget{
  --font-sans:Verdana,Geneva,Tahoma,sans-serif;
  --color-background-primary:var(--bg-color);
  --color-background-secondary:rgba(0,0,0,0.04);
  --color-text-primary:var(--text-color);
  --color-text-secondary:var(--text-color-muted);
  --color-text-tertiary:var(--text-color-light);
  --color-border-secondary:var(--border-color);
  --color-border-tertiary:var(--border-color-light);
  --border-radius-lg:10px;
}
[data-theme="dark"] .il-widget{
  --color-background-secondary:rgba(255,255,255,0.06);
}
.il-widget *{box-sizing:border-box;margin:0;padding:0}
.il-widget .il-wrap{font-family:var(--font-sans);padding:.5rem 0}
.il-widget .top-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:1.5rem;flex-wrap:wrap}
.il-widget .select-wrap{position:relative}
.il-widget .select-wrap select{appearance:none;font-family:var(--font-sans);font-size:14px;font-weight:500;padding:9px 36px 9px 14px;border-radius:10px;border:.5px solid var(--color-border-secondary);background:var(--color-background-primary);color:var(--color-text-primary);cursor:pointer;outline:none}
.il-widget .select-wrap::after{content:"";position:absolute;right:14px;top:50%;transform:translateY(-50%);border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid var(--color-text-secondary);pointer-events:none}
.il-widget .sw-track{display:flex;align-items:center;position:relative;background:var(--color-background-secondary);border-radius:99px;padding:3px;cursor:pointer;user-select:none}
.il-widget .sw-opt{padding:8px 20px;font-size:13px;font-weight:500;border-radius:99px;color:var(--color-text-secondary);transition:color .3s;position:relative;z-index:1;white-space:nowrap}
.il-widget .sw-opt.active{color:#fff}
.il-widget .sw-pill{position:absolute;top:3px;height:calc(100% - 6px);border-radius:99px;transition:left .35s cubic-bezier(.4,0,.2,1),width .35s cubic-bezier(.4,0,.2,1),background .35s;z-index:0}
.il-widget .sw-pill.p-before{background:#D85A30}.il-widget .sw-pill.p-after{background:#1D9E75}
.il-widget .section-label{font-size:11px;font-weight:500;color:var(--color-text-tertiary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px}
.il-widget .roles-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}
@media(max-width:600px){.il-widget .roles-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
.il-widget .role-col{border-radius:10px;overflow:hidden;border:.5px solid var(--color-border-tertiary)}
.il-widget .role-title{font-size:11.5px;font-weight:500;padding:10px 8px 8px;text-align:center;background:var(--color-text-primary);color:var(--color-background-primary)}
.il-widget .task-cell{padding:7px 9px;font-size:11px;line-height:1.35;border-top:.5px solid var(--color-border-tertiary);transition:background .45s,border-left-color .3s;min-height:50px;display:flex;flex-direction:column;justify-content:center;border-left:3px solid transparent}
.il-widget .task-name{font-weight:500;color:var(--color-text-primary)}.il-widget .task-who{margin-top:2px;font-size:10px;transition:color .3s,opacity .3s}
.il-widget .s-before .task-cell{background:rgba(216,90,48,.09);border-left-color:#D85A30}
.il-widget .s-before .task-who{color:#993C1D;opacity:.8}
[data-theme="dark"] .il-widget .s-before .task-cell{background:rgba(216,90,48,.14)}
[data-theme="dark"] .il-widget .s-before .task-who{color:#F0997B}
.il-widget .s-after .auto{background:rgba(29,158,117,.13);border-left-color:#1D9E75}
.il-widget .s-after .review{background:rgba(186,117,23,.11);border-left-color:#BA7517}
.il-widget .s-after .human{background:rgba(83,74,183,.11);border-left-color:#534AB7}
.il-widget .s-after .auto .task-who{color:#0F6E56;opacity:1}.il-widget .s-after .review .task-who{color:#854F0B;opacity:1}.il-widget .s-after .human .task-who{color:#3C3489;opacity:1}
[data-theme="dark"] .il-widget .s-after .auto{background:rgba(29,158,117,.18)}
[data-theme="dark"] .il-widget .s-after .review{background:rgba(186,117,23,.16)}
[data-theme="dark"] .il-widget .s-after .human{background:rgba(83,74,183,.18)}
[data-theme="dark"] .il-widget .s-after .auto .task-who{color:#5DCAA5}
[data-theme="dark"] .il-widget .s-after .review .task-who{color:#FAC775}
[data-theme="dark"] .il-widget .s-after .human .task-who{color:#CEC8F6}
.il-widget .legend{display:flex;gap:12px;margin-top:1rem;flex-wrap:wrap;justify-content:center}
.il-widget .legend-item{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--color-text-secondary)}
.il-widget .ldot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.il-widget .metrics-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:1.5rem}
@media(max-width:500px){.il-widget .metrics-row{grid-template-columns:1fr}}
.il-widget .metric-card{padding:14px 16px;border-radius:var(--border-radius-lg);background:var(--color-background-secondary)}
.il-widget .metric-label{font-size:10px;color:var(--color-text-tertiary);text-transform:uppercase;letter-spacing:.3px;margin-bottom:4px}
.il-widget .metric-val{font-size:22px;font-weight:500;transition:color .4s}
.il-widget .metric-desc{font-size:11px;color:var(--color-text-tertiary);margin-top:2px;line-height:1.3}
.il-widget .handoff-section{margin-top:1.5rem;padding:16px;background:var(--color-background-secondary);border-radius:var(--border-radius-lg)}
.il-widget .handoff-flow{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;gap:0}
.il-widget .hf-node{padding:7px 12px;border-radius:8px;font-size:11px;font-weight:500;text-align:center;border:.5px solid var(--color-border-tertiary);background:var(--color-background-primary);color:var(--color-text-primary);min-width:72px}
.il-widget .hf-arrow{display:flex;flex-direction:column;align-items:center;padding:0 3px;min-width:54px}
.il-widget .hf-arrow-line{font-size:13px;color:var(--color-text-tertiary);letter-spacing:-1px;transition:color .3s}
.il-widget .hf-arrow-label{font-size:9px;color:var(--color-text-tertiary);text-align:center;margin-top:1px;transition:color .3s;line-height:1.2;min-height:20px}
.il-widget .hf-active .hf-arrow-line{color:#1D9E75}.il-widget .hf-active .hf-arrow-label{color:#0F6E56;font-weight:500}
[data-theme="dark"] .il-widget .hf-active .hf-arrow-label{color:#5DCAA5}
.il-widget .org-section{margin-top:1.5rem}
.il-widget .org-panel{transition:opacity .4s,max-height .5s;overflow:hidden}
.il-widget .org-panel.hidden{opacity:0;max-height:0;pointer-events:none}.il-widget .org-panel.visible{opacity:1;max-height:600px}
.il-widget .old-org-grid{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
.il-widget .old-silo{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;min-width:100px;max-width:130px}
.il-widget .old-silo-head{font-size:10px;font-weight:500;color:var(--color-text-tertiary);text-transform:uppercase;letter-spacing:.3px;margin-bottom:2px}
.il-widget .old-silo-box{width:100%;padding:6px 8px;border-radius:6px;font-size:10px;text-align:center;background:rgba(216,90,48,.08);border:.5px solid rgba(216,90,48,.2);color:#993C1D}
[data-theme="dark"] .il-widget .old-silo-box{background:rgba(216,90,48,.14);color:#F0997B}
.il-widget .new-org-layers{display:flex;flex-direction:column;gap:16px}
.il-widget .new-layer-label{font-size:10px;font-weight:500;color:var(--color-text-tertiary);text-transform:uppercase;letter-spacing:.3px;margin-bottom:6px;text-align:center}
.il-widget .new-nodes{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
.il-widget .nn{display:flex;flex-direction:column;align-items:center;gap:4px}
.il-widget .nn-core{padding:8px 14px;border-radius:8px;font-size:11px;font-weight:500;text-align:center;border:.5px solid}
.il-widget .nn-core.leader{background:rgba(29,158,117,.1);border-color:rgba(29,158,117,.3);color:#0F6E56}
.il-widget .nn-core.owner{background:rgba(186,117,23,.1);border-color:rgba(186,117,23,.25);color:#854F0B}
.il-widget .nn-core.specialist{background:rgba(83,74,183,.1);border-color:rgba(83,74,183,.25);color:#3C3489}
[data-theme="dark"] .il-widget .nn-core.leader{background:rgba(29,158,117,.18);color:#5DCAA5}
[data-theme="dark"] .il-widget .nn-core.owner{background:rgba(186,117,23,.15);color:#FAC775}
[data-theme="dark"] .il-widget .nn-core.specialist{background:rgba(83,74,183,.18);color:#CEC8F6}
.il-widget .nn-dots{display:flex;gap:2px;justify-content:center}
.il-widget .nn-dot{width:5px;height:5px;border-radius:50%;background:#1D9E75;opacity:.55}
.il-widget .nn-sub{font-size:9px;color:var(--color-text-tertiary);text-align:center;line-height:1.2;max-width:100px}
.il-widget .orch-tag{display:inline-block;padding:4px 12px;border-radius:99px;font-size:10px;font-weight:500;background:rgba(29,158,117,.12);color:#0F6E56;margin-top:10px}
[data-theme="dark"] .il-widget .orch-tag{background:rgba(29,158,117,.2);color:#5DCAA5}
.il-widget .org-compare{display:flex;justify-content:center;margin-top:12px}
.il-widget .org-compare-card{padding:12px 24px;border-radius:var(--border-radius-lg);background:var(--color-background-secondary);text-align:center}
.il-widget .org-compare-val{font-size:20px;font-weight:500;color:var(--color-text-primary)}
.il-widget .org-compare-label{font-size:10px;color:var(--color-text-tertiary);margin-top:2px}
.il-widget .il-divider{height:1px;background:var(--color-border-tertiary);margin:1.5rem 0}
</style>

<div class="il-widget">
<div class="il-wrap">
<div class="top-row">
<div class="select-wrap"><select id="org-sel" onchange="changeOrg(this.value)">
<option value="software">Software company</option>
<option value="marketing">Marketing agency</option>
<option value="devagency">Development agency</option>
<option value="ecommerce">E-commerce</option>
<option value="media">Media / Content studio</option>
</select></div>
<div class="sw-track" onclick="ilTog()">
<div class="sw-pill p-before" id="il-pill"></div>
<div class="sw-opt active" id="il-oB">People</div>
<div class="sw-opt" id="il-oA">With agents</div>
</div></div>
<div class="section-label">Tasks by role</div>
<div class="roles-grid s-before" id="il-grid"></div>
<div class="legend" id="il-legend"></div>
<div class="metrics-row" id="il-metrics"></div>
<div class="handoff-section">
<div class="section-label" style="margin-bottom:10px">Handoffs between roles</div>
<div class="handoff-flow" id="il-hf"></div>
</div>
<div class="il-divider"></div>
<div class="org-section">
<div class="section-label">Organization structure</div>
<div class="org-panel visible" id="il-old-org"></div>
<div class="org-panel hidden" id="il-new-org"></div>
</div>
</div>
</div>

<script>
(function(){
const O={
software:{roles:[
{role:"Developer",tasks:[{name:"Write features",level:"review",b:"Human writes code",a:"Agent writes, human reviews"},{name:"Code review",level:"review",b:"Human reviews PRs",a:"Agent reviews, human approves"},{name:"Debug and fix",level:"review",b:"Human debugs",a:"Agent diagnoses, human verifies"},{name:"Write tests",level:"auto",b:"Human writes tests",a:"Agent handles end to end"},{name:"Documentation",level:"auto",b:"Human writes docs",a:"Agent handles end to end"}]},
{role:"Product",tasks:[{name:"Write PRDs",level:"review",b:"Human writes specs",a:"Agent drafts, human refines"},{name:"Prioritize backlog",level:"human",b:"Human prioritizes",a:"Human decides, agent surfaces data"},{name:"Status updates",level:"auto",b:"Human writes updates",a:"Agent handles end to end"},{name:"Research",level:"review",b:"Human researches",a:"Agent researches, human synthesizes"},{name:"Feedback analysis",level:"auto",b:"Human reads feedback",a:"Agent handles end to end"}]},
{role:"Designer",tasks:[{name:"Create mockups",level:"review",b:"Human designs",a:"Agent generates, human directs"},{name:"Design system",level:"review",b:"Human maintains",a:"Agent updates, human reviews"},{name:"User research",level:"review",b:"Human synthesizes",a:"Agent analyzes, human interprets"},{name:"Produce assets",level:"auto",b:"Human exports",a:"Agent handles end to end"},{name:"Prototyping",level:"review",b:"Human prototypes",a:"Agent builds, human evaluates"}]},
{role:"QA",tasks:[{name:"Test cases",level:"auto",b:"Human writes cases",a:"Agent handles end to end"},{name:"Regression",level:"auto",b:"Human runs tests",a:"Agent handles end to end"},{name:"Bug triage",level:"review",b:"Human triages",a:"Agent detects, human prioritizes"},{name:"Perf testing",level:"auto",b:"Human benchmarks",a:"Agent handles end to end"},{name:"Exploratory",level:"human",b:"Human explores",a:"Human leads, agent assists"}]},
{role:"Content",tasks:[{name:"Blog posts",level:"review",b:"Human writes",a:"Agent drafts, human edits"},{name:"Social media",level:"auto",b:"Human posts",a:"Agent handles end to end"},{name:"SEO",level:"auto",b:"Human optimizes",a:"Agent handles end to end"},{name:"Email campaigns",level:"review",b:"Human creates",a:"Agent creates, human approves"},{name:"Analytics",level:"auto",b:"Human reports",a:"Agent handles end to end"}]}],
handoffs:[{from:"Product",to:"Designer",b:"Specs handed off manually",a:"Agent translates specs to briefs"},{from:"Designer",to:"Developer",b:"Mockups handed off",a:"Agent converts designs to code"},{from:"Developer",to:"QA",b:"Build handed off",a:"Agent generates tests from code"}],
oldOrg:{silos:[{name:"Engineering",roles:["Eng manager","Sr. developer","Developer","Jr. developer","QA"]},{name:"Product",roles:["Sr. PM","PM","Analyst"]},{name:"Design",roles:["Design lead","UX designer","UI designer"]},{name:"Marketing",roles:["Content lead","Copywriter","SEO","Social"]}],layers:4},
newOrg:{leaders:[{name:"CEO",agents:3,sub:"Strategy, market intel"}],owners:[{name:"Product owner",agents:4,sub:"Specs, research, backlog"},{name:"Growth owner",agents:4,sub:"Content, SEO, campaigns"}],specialists:[{name:"Engineer",agents:5,sub:"Code, test, deploy"},{name:"Designer",agents:4,sub:"Mockup, assets, prototype"},{name:"Writer",agents:3,sub:"Draft, edit, distribute"},{name:"Analyst",agents:3,sub:"Data, forecast, report"}],layers:2}},
marketing:{roles:[
{role:"Strategist",tasks:[{name:"Campaign planning",level:"review",b:"Human plans",a:"Agent drafts strategy, human refines"},{name:"Market research",level:"auto",b:"Human researches",a:"Agent handles end to end"},{name:"Brand positioning",level:"human",b:"Human positions",a:"Human decides, agent provides data"},{name:"Competitive analysis",level:"auto",b:"Human analyzes",a:"Agent handles end to end"},{name:"Budget allocation",level:"review",b:"Human allocates",a:"Agent recommends, human approves"}]},
{role:"Copywriter",tasks:[{name:"Ad copy",level:"review",b:"Human writes",a:"Agent drafts, human refines"},{name:"Landing pages",level:"review",b:"Human writes",a:"Agent writes, human edits"},{name:"Email sequences",level:"auto",b:"Human writes",a:"Agent handles end to end"},{name:"Social captions",level:"auto",b:"Human writes",a:"Agent handles end to end"},{name:"Blog content",level:"review",b:"Human writes",a:"Agent drafts, human edits"}]},
{role:"Media buyer",tasks:[{name:"Ad placement",level:"review",b:"Human places ads",a:"Agent places, human monitors"},{name:"Bid optimization",level:"auto",b:"Human adjusts bids",a:"Agent handles end to end"},{name:"Audience targeting",level:"review",b:"Human segments",a:"Agent suggests, human validates"},{name:"Budget pacing",level:"auto",b:"Human tracks spend",a:"Agent handles end to end"},{name:"Perf reporting",level:"auto",b:"Human builds reports",a:"Agent handles end to end"}]},
{role:"SEO",tasks:[{name:"Keyword research",level:"auto",b:"Human researches",a:"Agent handles end to end"},{name:"Technical audits",level:"auto",b:"Human audits",a:"Agent handles end to end"},{name:"Content opt.",level:"review",b:"Human optimizes",a:"Agent optimizes, human reviews"},{name:"Link building",level:"review",b:"Human does outreach",a:"Agent finds, human contacts"},{name:"Rank tracking",level:"auto",b:"Human tracks",a:"Agent handles end to end"}]},
{role:"Account mgr",tasks:[{name:"Client reporting",level:"auto",b:"Human builds reports",a:"Agent handles end to end"},{name:"Campaign updates",level:"auto",b:"Human writes updates",a:"Agent handles end to end"},{name:"Brief creation",level:"review",b:"Human writes briefs",a:"Agent drafts, human refines"},{name:"Feedback coord.",level:"human",b:"Human coordinates",a:"Human leads, agent organizes"},{name:"Timeline mgmt",level:"review",b:"Human manages",a:"Agent tracks, human adjusts"}]}],
handoffs:[{from:"Strategist",to:"Copywriter",b:"Brief handed off manually",a:"Agent turns strategy into copy brief"},{from:"Copywriter",to:"Media buyer",b:"Assets handed off",a:"Agent formats and distributes"},{from:"Media buyer",to:"Account mgr",b:"Results compiled manually",a:"Agent generates client reports"}],
oldOrg:{silos:[{name:"Strategy",roles:["Director","Sr. strategist","Strategist"]},{name:"Creative",roles:["Creative dir.","Sr. copy","Copywriter"]},{name:"Media",roles:["Media dir.","Sr. buyer","Buyer"]},{name:"SEO",roles:["SEO lead","Specialist","Analyst"]},{name:"Accounts",roles:["Account dir.","Sr. AM","AM"]}],layers:4},
newOrg:{leaders:[{name:"Agency lead",agents:3,sub:"Strategy, ops, pipeline"}],owners:[{name:"Client owner",agents:4,sub:"Comms, reporting, briefs"},{name:"Campaign owner",agents:4,sub:"Copy, media, analytics"}],specialists:[{name:"Strategist",agents:3,sub:"Research, positioning"},{name:"Creative",agents:4,sub:"Copy, design, content"},{name:"Media buyer",agents:4,sub:"Bidding, targeting, pacing"},{name:"SEO",agents:3,sub:"Audit, optimize, track"}],layers:2}},
devagency:{roles:[
{role:"Project mgr",tasks:[{name:"Scope estimation",level:"review",b:"Human estimates",a:"Agent estimates, human validates"},{name:"Sprint planning",level:"review",b:"Human plans sprints",a:"Agent drafts plan, human adjusts"},{name:"Client updates",level:"auto",b:"Human writes updates",a:"Agent handles end to end"},{name:"Resource alloc.",level:"human",b:"Human allocates",a:"Human decides, agent suggests"},{name:"Timeline tracking",level:"auto",b:"Human tracks",a:"Agent handles end to end"}]},
{role:"Frontend",tasks:[{name:"UI implementation",level:"review",b:"Human codes UI",a:"Agent builds, human reviews"},{name:"Responsive",level:"review",b:"Human adjusts",a:"Agent implements, human checks"},{name:"Components",level:"review",b:"Human builds",a:"Agent scaffolds, human refines"},{name:"Browser testing",level:"auto",b:"Human tests",a:"Agent handles end to end"},{name:"Perf opt.",level:"review",b:"Human optimizes",a:"Agent profiles, human decides"}]},
{role:"Backend",tasks:[{name:"API development",level:"review",b:"Human builds APIs",a:"Agent writes, human reviews"},{name:"Database design",level:"review",b:"Human designs schema",a:"Agent drafts, human validates"},{name:"Server config",level:"auto",b:"Human configures",a:"Agent handles end to end"},{name:"Integrations",level:"review",b:"Human integrates",a:"Agent builds, human tests"},{name:"Security",level:"review",b:"Human secures",a:"Agent scans, human remediates"}]},
{role:"DevOps",tasks:[{name:"CI/CD",level:"auto",b:"Human sets up",a:"Agent handles end to end"},{name:"Infrastructure",level:"review",b:"Human provisions",a:"Agent provisions, human reviews"},{name:"Monitoring",level:"auto",b:"Human monitors",a:"Agent handles end to end"},{name:"Deploy",level:"auto",b:"Human deploys",a:"Agent handles end to end"},{name:"Env mgmt",level:"auto",b:"Human manages",a:"Agent handles end to end"}]},
{role:"QA",tasks:[{name:"Test planning",level:"review",b:"Human plans",a:"Agent drafts, human reviews"},{name:"Manual testing",level:"review",b:"Human tests",a:"Agent tests, human verifies"},{name:"Automation",level:"auto",b:"Human writes scripts",a:"Agent handles end to end"},{name:"Bug docs",level:"auto",b:"Human documents",a:"Agent handles end to end"},{name:"Release validation",level:"review",b:"Human validates",a:"Agent checks, human signs off"}]}],
handoffs:[{from:"Project mgr",to:"Frontend",b:"Specs handed off manually",a:"Agent breaks specs into tasks"},{from:"Frontend",to:"Backend",b:"API contracts negotiated",a:"Agent generates API contracts"},{from:"Backend",to:"DevOps",b:"Deploy requests filed",a:"Agent triggers pipeline"}],
oldOrg:{silos:[{name:"Management",roles:["Project dir.","Sr. PM","PM"]},{name:"Frontend",roles:["Lead","Sr. dev","Developer"]},{name:"Backend",roles:["Lead","Sr. dev","Developer"]},{name:"DevOps",roles:["Lead","Engineer"]},{name:"QA",roles:["Lead","QA engineer","Tester"]}],layers:4},
newOrg:{leaders:[{name:"Agency lead",agents:3,sub:"Pipeline, ops, clients"}],owners:[{name:"Project owner",agents:4,sub:"Scope, sprints, updates"},{name:"Client owner",agents:3,sub:"Comms, demos, feedback"}],specialists:[{name:"Engineer",agents:5,sub:"Frontend + backend"},{name:"Infra",agents:4,sub:"CI/CD, deploy, monitor"},{name:"QA",agents:4,sub:"Test, validate, report"}],layers:2}},
ecommerce:{roles:[
{role:"Store mgr",tasks:[{name:"Inventory",level:"review",b:"Human manages stock",a:"Agent tracks, human approves"},{name:"Pricing",level:"human",b:"Human sets prices",a:"Human decides, agent models"},{name:"Vendors",level:"human",b:"Human coordinates",a:"Human negotiates, agent tracks"},{name:"Fulfillment",level:"auto",b:"Human processes",a:"Agent handles end to end"},{name:"Returns",level:"review",b:"Human processes",a:"Agent processes, human handles exceptions"}]},
{role:"Marketing",tasks:[{name:"Product copy",level:"auto",b:"Human writes",a:"Agent handles end to end"},{name:"Email campaigns",level:"review",b:"Human creates",a:"Agent creates, human approves"},{name:"Social media",level:"auto",b:"Human posts",a:"Agent handles end to end"},{name:"Promotions",level:"review",b:"Human plans promos",a:"Agent suggests, human selects"},{name:"Review mgmt",level:"auto",b:"Human responds",a:"Agent handles end to end"}]},
{role:"Support",tasks:[{name:"Tickets",level:"auto",b:"Human replies",a:"Agent handles end to end"},{name:"Refunds",level:"review",b:"Human processes",a:"Agent processes, human approves"},{name:"FAQ updates",level:"auto",b:"Human updates",a:"Agent handles end to end"},{name:"Live chat",level:"review",b:"Human chats",a:"Agent chats, human escalates"},{name:"Escalations",level:"human",b:"Human resolves",a:"Human resolves, agent provides context"}]},
{role:"Analyst",tasks:[{name:"Sales reporting",level:"auto",b:"Human builds reports",a:"Agent handles end to end"},{name:"Traffic analysis",level:"auto",b:"Human analyzes",a:"Agent handles end to end"},{name:"Conversion opt.",level:"review",b:"Human optimizes",a:"Agent suggests, human implements"},{name:"Forecasting",level:"auto",b:"Human forecasts",a:"Agent handles end to end"},{name:"Competitor pricing",level:"auto",b:"Human monitors",a:"Agent handles end to end"}]},
{role:"Content",tasks:[{name:"Product photos",level:"review",b:"Human shoots",a:"Agent edits, human directs"},{name:"Category pages",level:"auto",b:"Human writes",a:"Agent handles end to end"},{name:"Blog content",level:"review",b:"Human writes",a:"Agent drafts, human edits"},{name:"Seasonal",level:"review",b:"Human plans",a:"Agent creates, human curates"},{name:"Brand story",level:"human",b:"Human crafts",a:"Human leads, agent supports"}]}],
handoffs:[{from:"Store mgr",to:"Marketing",b:"Promos communicated manually",a:"Agent syncs inventory to campaigns"},{from:"Marketing",to:"Support",b:"Promo details shared manually",a:"Agent updates support with offers"},{from:"Support",to:"Analyst",b:"Feedback compiled manually",a:"Agent pipes data to dashboards"}],
oldOrg:{silos:[{name:"Operations",roles:["Ops manager","Store mgr","Fulfillment"]},{name:"Marketing",roles:["Mktg manager","Content","Social"]},{name:"Support",roles:["Support lead","Agent","Agent"]},{name:"Analytics",roles:["Analytics lead","Analyst"]},{name:"Content",roles:["Content lead","Photographer","Copywriter"]}],layers:3},
newOrg:{leaders:[{name:"Founder",agents:3,sub:"Strategy, P&L, vendors"}],owners:[{name:"Store owner",agents:4,sub:"Inventory, pricing, fulfillment"},{name:"Growth owner",agents:4,sub:"Campaigns, SEO, social"}],specialists:[{name:"Support",agents:4,sub:"Tickets, chat, escalations"},{name:"Analyst",agents:3,sub:"Sales, traffic, forecast"},{name:"Creative",agents:3,sub:"Photos, copy, brand"}],layers:2}},
media:{roles:[
{role:"Editor",tasks:[{name:"Content review",level:"review",b:"Human edits",a:"Agent edits, human approves"},{name:"Editorial calendar",level:"auto",b:"Human plans",a:"Agent handles end to end"},{name:"Story assignment",level:"human",b:"Human assigns",a:"Human decides, agent suggests"},{name:"Fact checking",level:"auto",b:"Human verifies",a:"Agent handles end to end"},{name:"Publishing",level:"auto",b:"Human publishes",a:"Agent handles end to end"}]},
{role:"Writer",tasks:[{name:"Articles",level:"review",b:"Human writes",a:"Agent drafts, human rewrites"},{name:"Scripts",level:"review",b:"Human drafts",a:"Agent drafts, human refines"},{name:"Interview prep",level:"auto",b:"Human researches",a:"Agent handles end to end"},{name:"Research",level:"auto",b:"Human researches",a:"Agent handles end to end"},{name:"Repurposing",level:"auto",b:"Human adapts",a:"Agent handles end to end"}]},
{role:"Social",tasks:[{name:"Scheduling",level:"auto",b:"Human schedules",a:"Agent handles end to end"},{name:"Community",level:"review",b:"Human engages",a:"Agent responds, human moderates"},{name:"Trends",level:"auto",b:"Human monitors",a:"Agent handles end to end"},{name:"Analytics",level:"auto",b:"Human analyzes",a:"Agent handles end to end"},{name:"Outreach",level:"review",b:"Human reaches out",a:"Agent drafts, human sends"}]},
{role:"Video",tasks:[{name:"Scripts",level:"review",b:"Human writes",a:"Agent drafts, human refines"},{name:"Edit briefs",level:"auto",b:"Human writes briefs",a:"Agent handles end to end"},{name:"Thumbnails",level:"review",b:"Human designs",a:"Agent generates, human picks"},{name:"Captions",level:"auto",b:"Human writes",a:"Agent handles end to end"},{name:"Distribution",level:"auto",b:"Human uploads",a:"Agent handles end to end"}]},
{role:"Growth",tasks:[{name:"Newsletter",level:"review",b:"Human writes",a:"Agent drafts, human edits"},{name:"SEO content",level:"review",b:"Human optimizes",a:"Agent optimizes, human reviews"},{name:"Partnerships",level:"review",b:"Human reaches out",a:"Agent drafts, human sends"},{name:"Audience research",level:"auto",b:"Human researches",a:"Agent handles end to end"},{name:"Monetization",level:"human",b:"Human strategizes",a:"Human decides, agent models"}]}],
handoffs:[{from:"Editor",to:"Writer",b:"Briefs handed off manually",a:"Agent generates research pack"},{from:"Writer",to:"Social",b:"Content shared manually",a:"Agent repurposes into posts"},{from:"Social",to:"Growth",b:"Metrics compiled manually",a:"Agent feeds data to strategy"}],
oldOrg:{silos:[{name:"Editorial",roles:["Editor in chief","Sr. editor","Editor"]},{name:"Writing",roles:["Lead writer","Sr. writer","Writer"]},{name:"Social",roles:["Social lead","Coordinator"]},{name:"Video",roles:["Video lead","Editor","Producer"]},{name:"Growth",roles:["Growth lead","SEO","Newsletter"]}],layers:3},
newOrg:{leaders:[{name:"Editor in chief",agents:3,sub:"Vision, assignments, standards"}],owners:[{name:"Content owner",agents:4,sub:"Editorial, publishing"},{name:"Audience owner",agents:4,sub:"Growth, community, revenue"}],specialists:[{name:"Writer",agents:4,sub:"Draft, research, repurpose"},{name:"Video",agents:4,sub:"Script, edit, distribute"},{name:"Analyst",agents:3,sub:"SEO, metrics, audience"}],layers:2}}
};
const grid=document.getElementById("il-grid");let st="before",cur="software";
function stats(k){const a=O[k].roles.flatMap(r=>r.tasks);const t=a.length;return{total:t,auto:a.filter(x=>x.level==="auto").length,review:a.filter(x=>x.level==="review").length,human:a.filter(x=>x.level==="human").length}}
function renderGrid(){const roles=O[cur].roles;grid.innerHTML="";roles.forEach(r=>{const c=document.createElement("div");c.className="role-col";c.innerHTML='<div class="role-title">'+r.role+'</div>'+r.tasks.map(t=>'<div class="task-cell '+t.level+'" data-b="'+t.b+'" data-a="'+t.a+'"><div class="task-name">'+t.name+'</div><div class="task-who">'+(st==="before"?t.b:t.a)+'</div></div>').join("");grid.appendChild(c)});grid.className="roles-grid s-"+st}
function renderLegend(){const l=document.getElementById("il-legend");if(st==="before")l.innerHTML='<div class="legend-item"><div class="ldot" style="background:#D85A30"></div>Human-driven</div>';
else l.innerHTML='<div class="legend-item"><div class="ldot" style="background:#1D9E75"></div>Fully automated</div><div class="legend-item"><div class="ldot" style="background:#BA7517"></div>Agent + human</div><div class="legend-item"><div class="ldot" style="background:#534AB7"></div>Human-led</div>'}
function renderMetrics(){const s=stats(cur);const el=document.getElementById("il-metrics");if(st==="before"){el.innerHTML='<div class="metric-card"><div class="metric-label">Agent handled tasks</div><div class="metric-val" style="color:#D85A30">0<span style="font-size:14px;color:var(--color-text-tertiary)"> / '+s.total+'</span></div><div class="metric-desc">All tasks performed by humans</div></div><div class="metric-card"><div class="metric-label">Human\'s week</div><div class="metric-val" style="color:#D85A30">100%</div><div class="metric-desc">Spent executing tasks</div></div><div class="metric-card"><div class="metric-label">Human\'s role</div><div class="metric-val" style="font-size:16px;color:var(--color-text-primary)">Executor</div><div class="metric-desc">Doing the work themselves</div></div>';return}
const agented=s.auto+s.review;
el.innerHTML='<div class="metric-card"><div class="metric-label">Agent handled tasks</div><div class="metric-val" style="color:#1D9E75"><span id="il-ctr">0</span><span style="font-size:14px;color:var(--color-text-tertiary)"> / '+s.total+'</span></div><div class="metric-desc">'+s.auto+' fully automated, '+s.review+' agent + human</div></div><div class="metric-card"><div class="metric-label">Human\'s week</div><div class="metric-val" style="color:#1D9E75">'+(100-Math.round(s.human/s.total*100))+'%</div><div class="metric-desc">Reviewing and directing agents</div></div><div class="metric-card"><div class="metric-label">Human\'s role</div><div class="metric-val" style="font-size:16px;color:#1D9E75">Orchestrator</div><div class="metric-desc">Directing agents, reviewing output, owning outcomes</div></div>';
let c=0;const target=agented;const start=performance.now();
function tick(now){const p=Math.min((now-start)/700,1);const ease=1-Math.pow(1-p,3);const v=Math.round(ease*target);if(v!==c){c=v;const el=document.getElementById("il-ctr");if(el)el.textContent=c}if(p<1)requestAnimationFrame(tick)}
requestAnimationFrame(tick)}
function renderHandoffs(){const h=O[cur].handoffs;const fl=document.getElementById("il-hf");const cls=st==="after"?"hf-active":"";
fl.innerHTML=h.map(function(x,i){const nd='<div class="hf-node">'+(i===0?x.from:"")+'</div>';const ar='<div class="hf-arrow '+cls+'"><div class="hf-arrow-line">\u27f6</div><div class="hf-arrow-label">'+(st==="before"?x.b:x.a)+'</div></div>';const to='<div class="hf-node">'+x.to+'</div>';return i===0?nd+ar+to:ar+to}).join("")}
function renderOrg(){const old=document.getElementById("il-old-org");const nw=document.getElementById("il-new-org");const d=O[cur];
if(st==="before"){old.className="org-panel visible";nw.className="org-panel hidden";
old.innerHTML='<div class="old-org-grid">'+d.oldOrg.silos.map(function(s){return'<div class="old-silo"><div class="old-silo-head">'+s.name+'</div>'+s.roles.map(function(r){return'<div class="old-silo-box">'+r+'</div>'}).join("")+'</div>'}).join("")+'</div><div class="org-compare"><div class="org-compare-card"><div class="org-compare-val" style="color:#D85A30">'+d.oldOrg.layers+'</div><div class="org-compare-label">layers of hierarchy</div></div></div>';
}else{old.className="org-panel hidden";nw.className="org-panel visible";
var dots=function(n){return Array(n).fill('<div class="nn-dot"></div>').join("")};
nw.innerHTML='<div class="new-org-layers"><div><div class="new-layer-label">Leaders, vision and resources</div><div class="new-nodes">'+d.newOrg.leaders.map(function(n){return'<div class="nn"><div class="nn-core leader">'+n.name+'</div><div class="nn-dots">'+dots(n.agents)+'</div><div class="nn-sub">'+n.sub+'</div></div>'}).join("")+'</div></div><div><div class="new-layer-label">Owners of projects, customers, outcomes</div><div class="new-nodes">'+d.newOrg.owners.map(function(n){return'<div class="nn"><div class="nn-core owner">'+n.name+'</div><div class="nn-dots">'+dots(n.agents)+'</div><div class="nn-sub">'+n.sub+'</div></div>'}).join("")+'</div></div><div><div class="new-layer-label">Specialists with deep skill and agent fleet</div><div class="new-nodes">'+d.newOrg.specialists.map(function(n){return'<div class="nn"><div class="nn-core specialist">'+n.name+'</div><div class="nn-dots">'+dots(n.agents)+'</div><div class="nn-sub">'+n.sub+'</div></div>'}).join("")+'</div></div></div><div style="text-align:center;margin-top:14px"><div class="orch-tag">Everyone is an orchestrator</div></div><div class="org-compare"><div class="org-compare-card"><div class="org-compare-val" style="color:#1D9E75">'+d.newOrg.layers+'</div><div class="org-compare-label">layers</div></div></div>'}}
function renderAll(){renderGrid();renderLegend();renderMetrics();renderHandoffs();renderOrg()}
window.changeOrg=function(v){cur=v;renderAll()};
window.ilTog=function(){st=st==="before"?"after":"before";
document.getElementById("il-oB").classList.toggle("active",st==="before");
document.getElementById("il-oA").classList.toggle("active",st==="after");
var pill=document.getElementById("il-pill"),oB=document.getElementById("il-oB"),oA=document.getElementById("il-oA");
if(st==="after"){pill.style.left=oA.offsetLeft+"px";pill.style.width=oA.offsetWidth+"px";pill.className="sw-pill p-after"}
else{pill.style.left=oB.offsetLeft+"px";pill.style.width=oB.offsetWidth+"px";pill.className="sw-pill p-before"}
document.querySelectorAll(".il-widget .task-cell").forEach(function(c){c.querySelector(".task-who").textContent=st==="before"?c.dataset.b:c.dataset.a});
grid.className="roles-grid s-"+st;renderLegend();renderMetrics();renderHandoffs();renderOrg()};
renderAll();
requestAnimationFrame(function(){var o=document.getElementById("il-oB"),p=document.getElementById("il-pill");p.style.left=o.offsetLeft+"px";p.style.width=o.offsetWidth+"px"});
})();
</script>

<p style="text-align:center;font-size:13px;color:var(--text-color-muted);margin:1.5rem 0 0.5rem;font-style:italic;">Pick an industry and toggle People → With agents to see how the same work gets redistributed.</p>



<br />

Companies have always been organized around **roles**, but a role is actually a bundle of **tasks** that cycle through each week.

The interesting thing about AI agents today is that they operate at the **task level**. An AI agent does not replace a role, but it can take over specific tasks within it. And this is how we should be thinking about AI in our companies. Instead of asking *"which roles can AI replace"*, the better question is *"which tasks inside each role can an agent take over today"*. 

Every task ends up in one of three buckets:

**Fully automated:** Tasks an agent can run from start to finish, like writing tests, posting on social, building reports, monitoring servers. The human sets it up once and the agent does the rest.

**Agent and human:** Tasks where the agent does most of the work and a human signs off before it goes out, like drafting a PRD, writing a blog post, reviewing code, preparing a campaign brief.

**Human-led:** Tasks where the judgment stays with the human and the agent supports it, like strategy, prioritization, brand decisions, escalations. The agent does most of the grunt work.

Here is the exercise for you: pick any role on your team and write down the five or six tasks for that role, then put each one into one of the three buckets. When you do this for every role, you end up with a draft of what your company looks like in the age of AI, and **that map is the first step to restructuring**.
