---
title: "Every Company Will Need an Intelligence Layer"
date: 2026-05-06T00:00:00Z
author: Prashish
tags:
  - ai
  - agents
  - mcp
description: "give your ai the full picture"
article_kind: Perspective
---

<style>
.tooltip-term{position:relative;border-bottom:1px dotted #9ca3af;cursor:help}
.tooltip-text{visibility:hidden;opacity:0;position:absolute;bottom:125%;left:50%;transform:translateX(-50%);background-color:#1f2937;color:#f9fafb;font-size:.8rem;line-height:1.4;padding:.4rem .7rem;border-radius:6px;width:max-content;max-width:260px;z-index:50;transition:opacity .15s ease;pointer-events:none}
.tooltip-text::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border-width:5px;border-style:solid;border-color:#1f2937 transparent transparent transparent}
.tooltip-term:hover .tooltip-text,.tooltip-term:focus .tooltip-text{visibility:visible;opacity:1}
</style>

Every business that takes AI seriously will start needing an **intelligence layer**. It is a single layer that pulls knowledge from *wherever* it already lives in your company and makes it available to both **humans** and **agents** through a common interface.

<svg width="100%" viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Intelligence layer architecture</title>
<desc>Diagram showing knowledge sources from departments feeding into a shared intelligence layer, which serves both humans and agents</desc>
<style>
  text { font-family: system-ui, -apple-system, sans-serif; }
  .th { font-size: 14px; font-weight: 500; }
  .ts { font-size: 12px; font-weight: 400; }
  .dept-box { fill: #FAECE7; stroke: #993C1D; }
  .dept-th { fill: #712B13; }
  .dept-ts { fill: #993C1D; }
  .layer-box { fill: #E1F5EE; stroke: #0F6E56; }
  .layer-th { fill: #085041; }
  .layer-ts { fill: #0F6E56; }
  .consumer-box { fill: #EEEDFE; stroke: #534AB7; }
  .consumer-th { fill: #26215C; }
  .consumer-ts { fill: #534AB7; }
  .arr-line { stroke: #888780; }
  .arr-head { fill: none; stroke: #888780; }
  .label-text { fill: #5F5E5A; }
  .agent-arr { stroke: #534AB7; }
  .agent-head { fill: none; stroke: #534AB7; }
  .source-arr { stroke: #888780; }
  [data-theme="dark"] .dept-box { fill: rgba(216,90,48,0.18); stroke: #F0997B; }
  [data-theme="dark"] .dept-th { fill: #F0997B; }
  [data-theme="dark"] .dept-ts { fill: #F5C4B3; }
  [data-theme="dark"] .layer-box { fill: rgba(29,158,117,0.18); stroke: #5DCAA5; }
  [data-theme="dark"] .layer-th { fill: #5DCAA5; }
  [data-theme="dark"] .layer-ts { fill: #9FE1CB; }
  [data-theme="dark"] .consumer-box { fill: rgba(83,74,183,0.18); stroke: #AFA9EC; }
  [data-theme="dark"] .consumer-th { fill: #AFA9EC; }
  [data-theme="dark"] .consumer-ts { fill: #CECBF6; }
  [data-theme="dark"] .arr-line { stroke: #B4B2A9; }
  [data-theme="dark"] .arr-head { fill: none; stroke: #B4B2A9; }
  [data-theme="dark"] .label-text { fill: #B4B2A9; }
  [data-theme="dark"] .agent-arr { stroke: #AFA9EC; }
  [data-theme="dark"] .agent-head { fill: none; stroke: #AFA9EC; }
  [data-theme="dark"] .source-arr { stroke: #B4B2A9; }
</style>
<defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" class="arr-head" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
  <marker id="arrow-agent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" class="agent-head" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
</defs>
<text class="ts label-text" x="110" y="30" text-anchor="middle">Where knowledge lives</text>
<rect class="dept-box" x="40" y="44" width="140" height="34" rx="6" stroke-width="0.5"/>
<text class="ts dept-th" x="110" y="65" text-anchor="middle" dominant-baseline="central">Confluence / Notion</text>
<rect class="dept-box" x="40" y="84" width="140" height="34" rx="6" stroke-width="0.5"/>
<text class="ts dept-th" x="110" y="105" text-anchor="middle" dominant-baseline="central">Google Drive</text>
<rect class="dept-box" x="40" y="124" width="140" height="34" rx="6" stroke-width="0.5"/>
<text class="ts dept-th" x="110" y="145" text-anchor="middle" dominant-baseline="central">GitHub / Bitbucket</text>
<rect class="dept-box" x="40" y="164" width="140" height="34" rx="6" stroke-width="0.5"/>
<text class="ts dept-th" x="110" y="185" text-anchor="middle" dominant-baseline="central">Jira / Linear</text>
<rect class="dept-box" x="40" y="204" width="140" height="34" rx="6" stroke-width="0.5"/>
<text class="ts dept-th" x="110" y="225" text-anchor="middle" dominant-baseline="central">Slack / Teams</text>
<rect class="dept-box" x="40" y="244" width="140" height="34" rx="6" stroke-width="0.5"/>
<text class="ts dept-th" x="110" y="265" text-anchor="middle" dominant-baseline="central">Analytics / CRM</text>
<rect class="dept-box" x="40" y="284" width="140" height="26" rx="6" stroke-width="0.5" stroke-dasharray="3,3" style="fill:none"/>
<text class="ts dept-ts" x="110" y="297" text-anchor="middle" dominant-baseline="central">and many more</text>
<line class="source-arr" x1="180" y1="61" x2="250" y2="155" stroke-width="0.5" marker-end="url(#arrow)"/>
<line class="source-arr" x1="180" y1="101" x2="250" y2="155" stroke-width="0.5" marker-end="url(#arrow)"/>
<line class="source-arr" x1="180" y1="141" x2="250" y2="160" stroke-width="0.5" marker-end="url(#arrow)"/>
<line class="source-arr" x1="180" y1="181" x2="250" y2="170" stroke-width="0.5" marker-end="url(#arrow)"/>
<line class="source-arr" x1="180" y1="221" x2="250" y2="175" stroke-width="0.5" marker-end="url(#arrow)"/>
<line class="source-arr" x1="180" y1="261" x2="250" y2="180" stroke-width="0.5" marker-end="url(#arrow)"/>
<rect class="layer-box" x="254" y="128" width="172" height="76" rx="12" stroke-width="0.5"/>
<text class="th layer-th" x="340" y="160" text-anchor="middle" dominant-baseline="central">Intelligence layer</text>
<text class="ts layer-ts" x="340" y="180" text-anchor="middle" dominant-baseline="central">RAG + MCP</text>
<text class="ts label-text" x="567" y="30" text-anchor="middle">Who queries it</text>
<line class="agent-arr" x1="426" y1="150" x2="490" y2="100" stroke-width="0.5" marker-end="url(#arrow-agent)"/>
<line class="agent-arr" x1="426" y1="180" x2="490" y2="220" stroke-width="0.5" marker-end="url(#arrow-agent)"/>
<rect class="consumer-box" x="494" y="72" width="146" height="56" rx="8" stroke-width="0.5"/>
<text class="th consumer-th" x="567" y="94" text-anchor="middle" dominant-baseline="central">Humans</text>
<text class="ts consumer-ts" x="567" y="112" text-anchor="middle" dominant-baseline="central">Chat with citations</text>
<rect class="consumer-box" x="494" y="196" width="146" height="56" rx="8" stroke-width="0.5"/>
<text class="th consumer-th" x="567" y="218" text-anchor="middle" dominant-baseline="central">Agents</text>
<text class="ts consumer-ts" x="567" y="236" text-anchor="middle" dominant-baseline="central">MCP tool surface</text>
</svg>

## What the Intelligence Layer Is

In most companies today, the knowledge sits in too many different places at once. Some of it is in Drive, some in Confluence, some in Jira tickets, some buried in old chat threads, some only in someone's head. Finding an answer means first knowing which place to open, then digging through it yourself, and often repeating that across two or three more places to piece things together. The shared intelligence layer brings all of this together into one searchable place, so anyone working on a task can pull context from across the whole company without jumping between tools, whether they are a person or an agent.

It has three characteristics.

- **It pulls in changes on its own:** <span class="tooltip-term" tabindex="0">Connectors<span class="tooltip-text">Small programs that read data from a tool through its API.</span></span> sit in front of your existing tools and pull data from them on a schedule. So when you update a doc in Drive or close a ticket in Jira, the change shows up in the layer on its own, without anyone having to copy files into a new system or maintain a duplicate version somewhere else.

- **Humans and agents query the same data:** Humans use a chat interface that feels similar to Claude or ChatGPT, except the data behind it is your company's. Agents reach the same data through <span class="tooltip-term" tabindex="0">MCP<span class="tooltip-text">Model Context Protocol, a standard way for AI assistants to talk to tools.</span></span>. So the answer your teammate sees in chat is the same answer Claude Code is working from when it writes code in the background.

- **Agents can write back as well as read:** An agent that ships a code fix can update the related ticket and leave a short note in the wiki about what changed and why, so the next person who picks up that area starts with more context.

## Why Now

Companies are already giving tasks to AI for writing code, drafting content, handling support, and running analysis. These assistants only see what you paste into the chat. Everything else, the roadmap, the past decisions, customer feedback, the team conventions, lives in other systems that the AI cannot reach on its own.

Three things have changed recently.

- **<span class="tooltip-term" tabindex="0">Embeddings<span class="tooltip-text">Numerical representations of text that let AI search documents by meaning instead of exact keywords.</span></span> are cheap:** Indexing the full knowledge base of a company used to require a real budget. Today the same job costs almost nothing upfront, and keeping the index fresh as new documents come in runs in single digits a month.

- **Open source <span class="tooltip-term" tabindex="0">RAG<span class="tooltip-text">Retrieval Augmented Generation, the technique of letting AI search and use your documents to answer questions.</span></span> tooling has matured:** Systems like [Onyx](https://www.onyx.app/), [RAGFlow](https://ragflow.io/), and [Quivr](https://www.quivr.com/) come with connectors for the common SaaS apps built in, so you no longer have to write custom code for every source you want to plug in.

- **MCP standardized how AI talks to data:** Plug a source in once and any assistant that speaks MCP can use it, instead of building a separate integration for every combination of agent and source.

## What It Looks Like in Practice

In my own setup I run [Onyx](https://www.onyx.app/) for retrieval and indexing, Outline as the team wiki, and Cloudflare Tunnel for access. The whole thing runs on a <span class="tooltip-term" tabindex="0">VPS<span class="tooltip-text">Virtual Private Server, a small rented machine in the cloud.</span></span> for $15/m on Contabo and connects to Trello, Notion, Google Drive, GitHub, Gmail, and Slack, all separated from my personal data. Onyx polls each connector on its own schedule, so when I edit a page in Outline or someone uploads a product brief to Drive, the layer picks the change up on the next poll, usually within about ten minutes.

Whether I run Claude Code, Codex, Cursor, or any other coding agent on top of this setup, the agent sees more than just the README and the codebase. It can search across all of the connected sources, so when it writes code or reviews a PR, it can reference past decisions, related tickets, and the team discussions that explain why a feature was built that way. It works with the whole project, not just the files in the repo.

## Three Things to Watch

**Stale documents:** The layer indexes whatever you give it, so a roadmap from six months ago can keep surfacing as the top answer long after the team has abandoned it. Archive old documents at the source, or mark what should be ignored.

**Access control:** Slack, Drive, and email hold things people did not mean to share broadly. The layer has to enforce the same permissions as the source, or anyone can ask a normal question and get back a private thread. Most systems support permission syncing, but you have to configure it before you turn the team loose.

**Input quality:** What you index matters as much as how much. A folder of raw meeting transcripts pulls the layer toward long, noisy answers. Indexing a short summary instead changes what comes back.

The work is to iterate on what you index, run evals to check the answers, remove sources that hurt more than they help, and summarize long content before it goes in.

## What You Can Do Right Now

Here is a small exercise you can run today:

- List every place your company's knowledge lives, like the wiki, the shared drive, team chat, the issue tracker, the codebase, the CRM, and the inbox.
- List the AI assistants your team is using or is about to start using.
- For each assistant, count how many of those knowledge sources it can actually reach.

If most of your assistants are only reaching a small fraction of your knowledge, that's the gap a shared intelligence layer fixes.
