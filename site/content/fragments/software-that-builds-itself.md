---
title: "Software That Builds Itself"
date: 2026-03-18T00:00:00Z
author: Prashish
description: "future of software"
article_kind: Perspective
---

For the last decade and a half I have been building software, and the way it works has not changed much at its core. A team writes code, ships a release, and the software does exactly what that release has. If something needs to change, someone writes more code and ships another release. Any change to the software requires someone _outside_ it to write it.

Software in the future will be built differently at its foundation. Every application will ship with a local AI model that understands its own codebase, architecture, and structure well enough to __modify it directly__. You ask it to add a feature, change an interface, or fix a workflow, and it does it inside the software itself. For heavier tasks that need more compute, the software will route that work to an external compute farm and bring the result back.

Right now I do a primitive version of this with OpenClaw. I connect it directly to Claude Code, command it to add or modify features, and it writes the code and pushes the changes directly to the repo, which auto-deploys to the server. This works because OpenClaw has full documentation of its own workflow and codebase, so the model understands what it is working with.

Compute is getting cheap enough that this is no longer a far-fetched idea, and the software that come next will be built with this capability from the start.

<div class="image-wrapper" style="margin: 12px auto;"><img src="/img/software-v1.jpg"></div>
