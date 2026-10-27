---
title: 'Immersion Experience - Build Your 90-day AI Plan'
outline: 2
task:
  title: Immersion Experience - Build Your 90-day AI Plan
---

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute, withBase } from 'vitepress'

const route = useRoute()

function expandStepForHash(hash) {
  const step = document.getElementById(hash.slice(1))?.closest('details.workshop-step')
  if (step) step.open = true
}

function handleStepLink(event) {
  if (!(event.target instanceof Element) || event.button !== 0 ||
      event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return

  const link = event.target.closest('a[href^="#"]')
  if (link) expandStepForHash(link.getAttribute('href'))
}

onMounted(() => {
  expandStepForHash(route.hash)
  document.addEventListener('click', handleStepLink)
})

onUnmounted(() => document.removeEventListener('click', handleStepLink))
watch(() => route.hash, expandStepForHash)
</script>

<style scoped>
.workshop-meta,
.step-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.workshop-meta {
  flex-wrap: wrap;
  margin: 20px 0 28px;
}

.workshop-meta span,
.step-time,
.step-optional {
  padding: 3px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
}

.section-caption {
  margin-top: -8px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.workshop-step {
  --workshop-accent-text: var(--vp-c-brand-2);
  margin: 12px 0;
  padding: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: border-color 0.16s;
}

:global(.dark) .workshop-step {
  --workshop-accent-text: var(--vp-c-brand-1);
}

.workshop-step:hover,
.workshop-step[open] {
  border-color: var(--vp-c-brand-1);
}

.workshop-step > summary {
  margin: 0;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;
  list-style: none;
}

.workshop-step > summary::-webkit-details-marker {
  display: none;
}

.workshop-step > summary:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
}

.workshop-step[open] > summary {
  border-bottom: 1px solid var(--vp-c-divider);
  border-radius: 12px 12px 0 0;
}

.workshop-step > summary h2 {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) auto 16px;
  align-items: center;
  gap: 4px 12px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
}

.step-number {
  grid-column: 1;
  grid-row: 1 / 3;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--vp-c-brand-soft);
  color: var(--workshop-accent-text);
  font-size: 14px;
  font-weight: 700;
}

.step-title {
  grid-column: 2;
  grid-row: 1;
}

.step-description {
  grid-column: 2;
  grid-row: 2;
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 400;
}

.step-meta {
  grid-column: 3;
  grid-row: 1 / 3;
}

.step-chevron {
  grid-column: 4;
  grid-row: 1 / 3;
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--vp-c-text-2);
  border-bottom: 2px solid var(--vp-c-text-2);
  transform: rotate(45deg);
  transition: transform 0.16s;
}

.workshop-step[open] .step-chevron {
  transform: rotate(225deg);
}

.step-body {
  padding: 0 20px 20px;
}

.coach-panel {
  margin: 20px 0;
  padding: 16px;
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 10px;
  background: var(--vp-c-brand-soft);
}

.coach-panel h3 {
  margin-top: 0;
  color: var(--workshop-accent-text);
  font-size: 16px;
}

.coach-panel a {
  color: var(--workshop-accent-text);
}

.coach-panel > p:last-child {
  margin-bottom: 0;
}

.coach-panel + h3 {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 16px;
}

.skill-download-card {
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: 16px 0;
  padding: 16px;
}

.skill-download {
  flex-shrink: 0;
  padding: 9px 14px;
  border-radius: 10px;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.skill-download:hover {
  background: var(--vp-button-brand-hover-bg);
  color: var(--vp-button-brand-hover-text);
}

.setup-screenshots {
  margin: 20px 0;
}

.setup-screenshots > summary {
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.completion-callout {
  margin: 24px 0;
  padding: 16px 20px;
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 0 10px 10px 0;
  background: var(--vp-c-bg-soft);
}

.completion-callout h2 {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 16px;
}

.completion-callout p {
  margin: 8px 0 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .workshop-step > summary {
    padding: 14px;
  }

  .workshop-step > summary h2 {
    grid-template-columns: 32px minmax(0, 1fr) 12px;
    gap: 6px 10px;
    font-size: 16px;
  }

  .step-meta {
    grid-column: 2;
    grid-row: 3;
    margin-top: 2px;
  }

  .step-chevron {
    grid-column: 3;
    grid-row: 1 / 4;
  }

  .step-body {
    padding: 0 14px 16px;
  }

  .skill-download-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .workshop-step,
  .step-chevron {
    transition: none;
  }
}
</style>

# Build Your 90-day AI Plan

Define a clear **12-month AI aspiration** and turn one initiative into a focused **90-day plan**.

<div class="workshop-meta" aria-label="Workshop at a glance">
<span>35-minute core</span>
<span>5 core steps</span>
<span>2 optional extras</span>
</div>

## Choose how to work

Copilot is your thinking partner. You choose the problem, confirm the decisions, and own the final plan.

| Approach | What you do |
| --- | --- |
| **Option A - Use the coach skill** | Send the short request shown first in each step. The coach drafts with you, asks focused questions, and carries your confirmed decisions forward. |
| **Option B - Use the sample prompts** | Lead the process yourself, using the prompts and guidance to develop and record your decisions. |

**Choose one approach per step. You don't need to do both.** You can switch approaches at any time.

Select a step title to expand its instructions. You can keep multiple steps open.

## Before you begin

1. Open [Microsoft Copilot](https://m365.cloud.microsoft/chat/) and select **Cowork**.

1. Use **one Cowork task for the workshop** so your earlier answers stay in the conversation. If you use the sample prompts, also keep your chosen outputs together in Word, OneNote, Copilot Pages, or another tool of your choice.

### Set up the coach (only if you plan to use it)

If you will use only the sample prompts, skip this setup and [start Step 1](#step-1-name-the-problem).

<div class="callout-bubble skill-download-card">
<p><strong>Workshop coach skill</strong><br>Download, then upload the file to add the interactive coach to Cowork.</p>
<a class="skill-download" :href="withBase('/downloads/90-day-plan/SKILL.md')" download="SKILL.md">Download SKILL.md</a>
</div>

1. Download the skill file using the link above.

1. In the left navigation, select **plugins**, and then select the **Cowork** tab.

    ![Plugins page with the Cowork tab highlighted and the Add menu visible](./Media/cowork-skills.png)

1. Select **Add**, and then select **Upload**. Drag the downloaded **SKILL.md** file into the upload area, or select **Choose file** to browse to it.

1. Return to your workshop task and [start Step 1](#step-1-name-the-problem). Use the request shown in **Option A** to ask the coach for help.

**Joining the coach at a later step?** Start with that step's request. If your earlier decisions aren't already in the task, share your notes when the coach asks. You don't need to repeat completed steps.

<details class="setup-screenshots">
<summary>Show where to find Cowork</summary>

**Open Copilot and select Cowork.**

![Microsoft Copilot showing Cowork highlighted in a white box](../Prompts/Media/cowork-select-cowork.png)

</details>

## Build your plan

<p class="section-caption">Steps 1–5 · About 35 minutes</p>

<details class="workshop-step">
<summary>

## <span class="step-number ignore-header">1</span><span class="step-title">Name the Problem</span><span class="step-meta ignore-header"><span class="step-time">5 min</span></span><span class="step-chevron ignore-header" aria-hidden="true"></span><span class="step-description ignore-header">Define the business bottleneck you want to address.</span> {#step-1-name-the-problem}

</summary>

<div class="step-body">

**Finish this step with:** a short business problem, the area you lead, and the systems or tools where this work runs today.

Focus on a **business-level** problem in the area you lead, not personal productivity, a tool rollout, or a company-wide transformation.

<div class="coach-panel">

### Option A - Use the coach skill

Send this request in your workshop task:

```text
Help me brainstorm a problem
```

Tell the coach what you lead. Confirm the problem and where the work lives today, then [continue to Step 2](#step-2-define-your-ai-aspiration-12-month). **Skip Option B.**

</div>

### Option B - Use the sample prompts

Fill in the brackets and send this prompt. Rough answers are fine.

```text
I lead [business unit or function].
The business bottleneck is [what is not moving and who is affected].
It matters because [business impact].
This work runs in [systems or tools, or "not sure"].

Help me sharpen this into a 1–2 sentence business problem.
Focus on a problem in the area I lead, not personal productivity,
a tool rollout, or a company-wide transformation.
```

Record the problem you want to tackle and the systems or tools involved. If you don't know the systems yet, write "Not specified."

<details>
<summary>Need inspiration? Explore the four AI value areas</summary>

| Value area | Example, not your answer |
| --- | --- |
| Enrich employee experiences | Field and frontline teams cannot get the current procedure, or an expert, while the job is in progress. First-time resolution stays low, and the same work gets redone. |
| Reinvent customer engagement | Customer requests sit until someone manually routes them. Response time and the answer depend on who happens to be free. |
| Reshape business processes | Replenishment or production decisions are made from yesterday's report. Stockouts, downtime, or excess show up before anyone can act. |
| Bend the curve on innovation | New designs wait on a small group of specialists to draft and revise them. The launch cycle is longer than the demand shift you are trying to meet. |

Use these patterns for inspiration. Your problem should reflect your own area, not copy an example.

</details>

</div>

</details>

<details class="workshop-step">
<summary>

## <span class="step-number ignore-header">2</span><span class="step-title">Define Your 12-month AI Aspiration</span><span class="step-meta ignore-header"><span class="step-time">5 min</span></span><span class="step-chevron ignore-header" aria-hidden="true"></span><span class="step-description ignore-header">Choose a business outcome and one success metric.</span> {#step-2-define-your-ai-aspiration-12-month}

</summary>

<div class="step-body">

**Finish this step with:** a 12-month AI aspiration, one primary success metric, and the AI value area it supports.

Focus on a business outcome. Use real baselines and targets where known; otherwise, use placeholders rather than invented numbers.

<div class="coach-panel">

### Option A - Use the coach skill

```text
Help me define my 12-month aspiration
```

Confirm the aspiration and choose a metric you could stand behind. Share its baseline if known, then [continue to Step 3](#step-3-identify-your-ai-initiatives). **Skip Option B.**

</div>

### Option B - Use the sample prompts

Use your Step 1 decisions in this prompt:

```text
For my [business unit or function], I want to address:
[paste your business problem]

This work runs in [systems or tools, or "not specified"].

Suggest a clear 12-month AI aspiration focused on business impact,
not a tool rollout or personal productivity.

Include a short title, why it matters, and the AI value area it supports.
Suggest two candidate success metrics I could measure.
For each, show [baseline] -> [target], using placeholders for unknown values.
```

Choose **one primary metric**. Record your aspiration, value area, metric, and any known baseline or target.

</div>

</details>

<details class="workshop-step">
<summary>

## <span class="step-number ignore-header">3</span><span class="step-title">Identify Your AI Initiatives</span><span class="step-meta ignore-header"><span class="step-time">5 min</span></span><span class="step-chevron ignore-header" aria-hidden="true"></span><span class="step-description ignore-header">Identify one existing effort and one new opportunity.</span> {#step-3-identify-your-ai-initiatives}

</summary>

<div class="step-body">

**Finish this step with:** one existing initiative contributing to your aspiration and one new opportunity that could accelerate it.

Keep each initiative practical and tied to the systems where the work already happens.

<div class="coach-panel">

### Option A - Use the coach skill

```text
Help me identify initiatives
```

Confirm one existing initiative and one new opportunity, then [continue to Step 4](#step-4-prioritize-your-focus). **Skip Option B.**

</div>

### Option B - Use the sample prompts

```text
Based on this AI aspiration:
[paste your aspiration]

The work runs in [systems or tools].
An effort already in motion is [existing effort, if known].

Suggest 2–3 practical AI initiatives that could help achieve this outcome.
Use Microsoft AI capabilities that fit these systems without replacing them.
Distinguish between building on an existing effort and a new opportunity.
If the existing effort is unknown, label any assumption for me to confirm.
```

Choose one existing initiative and one new opportunity. Record a name and one-sentence description for each.

</div>

</details>

<details class="workshop-step">
<summary>

## <span class="step-number ignore-header">4</span><span class="step-title">Prioritize Your Focus</span><span class="step-meta ignore-header"><span class="step-time">5 min</span></span><span class="step-chevron ignore-header" aria-hidden="true"></span><span class="step-description ignore-header">Choose a 90-day focus and set its boundaries.</span> {#step-4-prioritize-your-focus}

</summary>

<div class="step-body">

**Finish this step with:** one 90-day initiative, the biggest risk and a mitigation, and a clear out-of-scope line.

Choose the initiative most likely to deliver measurable value in 90 days, not the largest possible transformation.

<div class="coach-panel">

### Option A - Use the coach skill

```text
Help me prioritize focus
```

Confirm your chosen initiative and what you will leave out of scope, then [continue to Step 5](#step-5-design-your-90-day-plan). **Skip Option B.**

</div>

### Option B - Use the sample prompts

```text
Given my aspiration, primary metric, and two initiatives:
[paste your confirmed notes]

Identify the biggest gap or risk and one way to mitigate it.
Recommend the initiative most likely to deliver measurable value
in the next 90 days, and explain why.
Suggest a clear out-of-scope line to keep the pilot small.
```

Make the final choice yourself. Record your chosen initiative, main risk, mitigation, and what you will not tackle in the first 90 days.

</div>

</details>

<details class="workshop-step">
<summary>

## <span class="step-number ignore-header">5</span><span class="step-title">Design Your 90-day Plan</span><span class="step-meta ignore-header"><span class="step-time">15 min</span></span><span class="step-chevron ignore-header" aria-hidden="true"></span><span class="step-description ignore-header">Turn your decisions into a saved, actionable plan.</span> {#step-5-design-your-90-day-plan}

</summary>

<div class="step-body">

**Finish this step with:** a saved five-section 90-day plan and 30/60/90 milestones.

Keep the pilot small. Both approaches should identify one primary KPI, an accountable owner, and where a person reviews or decides before AI output reaches customers, production, or a final decision.

<div class="coach-panel">

### Option A - Use the coach skill

```text
Help me draft the 90-day plan
```

Review the draft and download the **Word document the coach creates**. Check the accountable owner, pilot scope, and any placeholders.

Then go to [Your core workshop is complete](#your-core-workshop-is-complete). **Skip Option B.**

</div>

### Option B - Use the sample prompts

Use your confirmed decisions to draft the plan:

```text
Here are my confirmed workshop decisions:
[paste your problem, current systems, aspiration, primary metric,
two initiatives, chosen 90-day focus, main risk and mitigation,
and out-of-scope line]

Draft a focused 90-day plan with five sections:
Strategic Intent, Value Hypothesis, Proof of Value, Actions, and Storytelling.

Use Microsoft AI capabilities that fit my current systems.
Write the Value Hypothesis as "If we ..., then we will ..., because ...".
Include one primary KPI, the smallest viable pilot, what is out of scope,
a human judgment point, an accountable owner, and the first 1–2 actions
for the first 30 days.
In Storytelling, explain repeatability and choose the Frontier pattern:
human with assistant, human-agent teams, or human-led, agent-operated.
Add one milestone each for days 30, 60, and 90.
Use placeholders for unknown facts, baselines, targets, or owners.
```

Check the draft against this framework, then save your plan in Word, OneNote, Copilot Pages, or your chosen tool.

| Section | What to include |
| --- | --- |
| **Strategic Intent - Why this, why now?** | The business problem and why it matters now. |
| **Value Hypothesis - Where can AI move the needle?** | "If we [specific action], then we will [measurable change], because [core assumption]." |
| **Proof of Value - How will we validate success?** | One primary KPI, `[baseline]` → `[target]`, the smallest viable pilot, what is out of scope, and the human judgment point. |
| **Actions - Who leads and what comes first?** | An accountable business owner and 1–2 concrete actions for the first 30 days. |
| **Storytelling - How does this scale?** | What makes the approach repeatable across teams, regions, or business units, and which Frontier pattern it moves you toward. |

For the Frontier pattern, choose **human with assistant**, **human-agent teams**, or **human-led, agent-operated**. Make clear where human judgment stays.

Include a short **30 / 60 / 90 milestone line**: set up and baseline → pilot running → measure and decide.

<details>
<summary>Optional reference: View the plan template and a completed example</summary>

![AI 90-day plan Template](../Prompts/Media/lighthouse-template.png)

Use the example for structure, not as your answer. Your plan should reflect your own priorities, constraints, and business context.

![Sample AI 90-day Plan](../Prompts/Media/lighthouse-sample.png)

</details>

</div>

</details>

<div class="completion-callout" role="note" aria-labelledby="your-core-workshop-is-complete">

## Your core workshop is complete

**After completing Step 5, you can stop here.** Download the coach's Word document or save the plan in your chosen tool before leaving.

If you have time, continue with the optional review and executive pitch below.

</div>

## Optional: Strengthen your plan

<p class="section-caption">Steps 6–7 · About 5 minutes each</p>

<details class="workshop-step">
<summary>

## <span class="step-number ignore-header">6</span><span class="step-title">Review Your Draft</span><span class="step-meta ignore-header"><span class="step-optional">Optional</span><span class="step-time">5 min</span></span><span class="step-chevron ignore-header" aria-hidden="true"></span><span class="step-description ignore-header">Pressure-test assumptions, scope, and ownership.</span> {#step-6-review-your-draft-with-copilot}

</summary>

<div class="step-body">

**Finish this step with:** a stronger plan with clearer assumptions, scope, metrics, and ownership.

<div class="coach-panel">

### Option A - Use the coach skill

```text
Review my draft plan
```

If your draft isn't already in the task, share it when the coach asks. Choose which suggested edits to accept. If the coach created your Word plan, it will update that document; download the latest version.

Then [continue to Step 7](#step-7-create-a-1-minute-executive-pitch) if you have time, or [finish the workshop](#outcome-of-this-exercise). **Skip Option B.**

</div>

### Option B - Use the sample prompts

Paste your draft into this prompt:

```text
Here is my draft 90-day plan:
[paste your draft]

Review it as a skeptical executive sponsor. Give me three focused critiques:
1. The riskiest assumption in the value hypothesis.
2. Whether the scope and one primary metric demonstrate business impact.
3. Whether ownership and the first 30-day actions are clear and practical.

Suggest exact tighter wording for the weakest 1–2 lines.
Do not invent supporting facts or numbers.
```

If your draft is only available as an image, attach a screenshot instead of pasting the text:

- **Windows:** Press **Windows + Shift + S**.
- **Mac:** Press **Command + Shift + 4**.

Choose the edits you agree with and update your saved plan yourself.

</div>

</details>

<details class="workshop-step">
<summary>

## <span class="step-number ignore-header">7</span><span class="step-title">Create Your 1-Minute Pitch</span><span class="step-meta ignore-header"><span class="step-optional">Optional</span><span class="step-time">5 min</span></span><span class="step-chevron ignore-header" aria-hidden="true"></span><span class="step-description ignore-header">Shape a clear ask for your executive stakeholder.</span> {#step-7-create-a-1-minute-executive-pitch}

</summary>

<div class="step-body">

**Finish this step with:** a concise pitch for the stakeholder whose backing you need.

<div class="coach-panel">

### Option A - Use the coach skill

```text
Help me build the 1-minute pitch
```

Tell the coach who your stakeholder is and refine the pitch so it sounds like you. If the coach created your Word plan, it will add the pitch to that document; download the final version.

Then [finish the workshop](#outcome-of-this-exercise). **Skip Option B.**

</div>

### Option B - Use the sample prompts

```text
Based on my 90-day plan:
[paste your revised 90-day plan or summary here]

Write a 1-minute pitch, about 130–160 words, for:
[describe your stakeholder, such as the Chief Operating Officer]

Include the business problem, the 90-day approach, expected business impact,
how success will be measured, and the ask or first step with its owner.
Make it clear, compelling, and suitable for this stakeholder.
Use only facts and metrics from my plan.
```

Refine the pitch so it sounds like you, then add it to your saved plan.

</div>

</details>

## Outcome of This Exercise

Take your saved plan with you. It should capture:

- Your **business problem and 12-month AI aspiration**
- Two initiatives (**current + new**)
- One **prioritized 90-day initiative**
- A **five-section plan**, one primary success metric, and **30/60/90 milestones**

If you completed the extras, also save your accepted review edits and **1-minute executive pitch**. Validate all metrics and baselines before sharing the plan.