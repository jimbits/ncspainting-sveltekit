# Writing styles for AI CLI coding assistants

These styles are designed for tools like Claude Code, Gemini CLI, Codex CLI-style agents, or any assistant that can **plan, read files, run commands, and edit code**.

> Tip: For best results, keep **constraints + success criteria** near the top, and put **examples** and **edge cases** at the bottom.

---

## 1) Planning style

### Best-practice instruction patterns

- **State the goal in one sentence** (what “done” looks like).
- **Define success criteria** as a checklist (tests pass, endpoints respond, bundle size, etc.).
- **List constraints** (tech stack, versions, no new deps, performance budget).
- **Ask for a plan first** with numbered steps, then execution after approval (or say “execute immediately”).
- **Surface risks/unknowns** explicitly (API changes, migrations, breaking changes).
- **Prefer “smallest viable increment”**: deliver in slices, each shippable.

### Document structure (recommended)

- **Goal**
- **Context**
- **Constraints**
- **Plan (numbered)**
- **Risks / Unknowns**
- **Acceptance criteria**
- **Out of scope**

### File naming conventions (for planning artifacts)

- `plan.<topic>.md` (e.g., `plan.auth-refresh.md`)
- `adr.<topic>.md` for decisions (Architecture Decision Records)
- `todo.<topic>.md` if it’s an execution checklist

### Folder structure (for planning artifacts)

```
/docs
  /plans
  /adr
  /roadmaps
```

### Example prompt (Planning style)

```text
Goal: Add email/password auth to the SvelteKit app with session cookies.

Context:
- SvelteKit 2 + Svelte 5
- Backend: Node runtime, Postgres
- Current state: no auth, public pages only

Constraints:
- Do not add a new auth provider
- Keep existing DB schema naming conventions
- Must include unit tests for auth utilities

Task:
1) Propose a step-by-step plan (8–12 steps).
2) For each step, list files you expect to touch.
3) Identify risks/unknowns and how you’d validate them.
Do NOT edit files yet.
```

---

## 2) Performing tasks style (execution)

### Best-practice instruction patterns

- **Provide an explicit start point** (branch name, folder, entry file).
- **Define the scope boundary** (“only touch these folders unless required”).
- **Require incremental commits** (or logical checkpoints) if the tool supports it.
- **Demand verification**: run tests, lint, typecheck, build, and show results.
- **Ask for a change summary** with a file-by-file diff outline.
- **Specify “don’t break” guarantees** (no API signature changes, keep routes stable).

### Document structure (recommended)

- **Objective**
- **Inputs**
- **Steps to perform (ordered)**
- **Verification commands**
- **Expected output**
- **Rollback plan**

### File naming conventions (for task outputs)

- PR/changes summary: `changes.<topic>.md`
- Migration: `YYYYMMDDHHMM_<topic>.sql` (or your tool’s convention)
- Scripts: `scripts/<verb>-<noun>.ts` or `.sh`

### Folder structure (for task execution)

```
/scripts
/docs
/src
/tests
```

### Example prompt (Performing tasks style)

```text
Objective: Add a “Request a Quote” form submission endpoint and persist submissions.

Rules:
- Only edit: src/, tests/, docs/
- No new dependencies
- Keep existing formatting/lint rules

Steps:
1) Implement POST /api/quote (validate input, return 201 with id)
2) Add DB insert (use existing DB util)
3) Add unit tests for validation + integration test for endpoint
4) Update docs: docs/api.quote.md

Verification:
- Run: bun test
- Run: bun lint
- Run: bun typecheck
Report command output and list all changed files.
```

---

## 3) Research style (topics + options)

### Best-practice instruction patterns

- **Define the research question** and what decision it supports.
- **Specify evaluation criteria** (DX, performance, maintenance, cost, security).
- **Request multiple options** (2–5) with pros/cons and a recommendation.
- **Ask for “unknowns to validate”** (what to spike/prototype).
- **Prefer “decision-ready” outputs**: a short conclusion plus a longer appendix.

### Document structure (recommended)

- **Question**
- **Context**
- **Criteria**
- **Options (A/B/C)**
- **Recommendation**
- **Follow-up experiments**
- **References** (links if applicable)

### File naming conventions (for research notes)

- `research.<topic>.md` (e.g., `research.sveltekit-auth.md`)
- `compare.<a>-vs-<b>.md`
- `decision.<topic>.md` when final

### Folder structure (for research)

```
/docs
  /research
  /decisions
  /spikes
```

### Example prompt (Research style)

```text
Research question: What’s the best way to do server-side form validation in SvelteKit 2 with TypeScript?

Context:
- App uses Svelte 5 runes
- Prefers minimal dependencies

Criteria:
- Type safety
- Error messaging UX
- Works with SSR
- Testability

Deliverable:
- Compare 3 approaches (native + 2 libraries if relevant)
- Provide pros/cons, risks, and a recommendation
- Include a small example snippet for each approach
Do not change code yet.
```

---

## 4) Explain concepts style (teach + verify)

### Best-practice instruction patterns

- **State the concept** and why it matters.
- **Use a tiny example first**, then scale up.
- **Ask the assistant to check understanding** (short quiz or “explain back”).
- **Separate “mental model” from “API details.”**
- **Include pitfalls + debugging cues** (common errors and what they mean).

### Document structure (recommended)

- **Concept**
- **Mental model**
- **Minimal example**
- **Common pitfalls**
- **Practice tasks**
- **Next steps**

### File naming conventions (for learning docs)

- `guide.<topic>.md`
- `howto.<topic>.md`
- `glossary.md` (if building a set)

### Folder structure (for concepts/learning)

```
/docs
  /guides
  /how-to
  /reference
```

### Example prompt (Explain concepts style)

```text
Teach me how SvelteKit server actions work.

Constraints:
- Use a minimal example first (single +page.svelte and +page.server.ts)
- Explain the mental model before APIs
- Then show a diagram of the request/response flow
- End with 3 practice tasks I can try
```

---

## 5) Documentation style (reference + onboarding)

### Best-practice instruction patterns

- **Write for a new teammate**: assume zero local context.
- **Prioritize “how to run”** and “how to test” near the top.
- **Use exact commands** and expected outputs (or what success looks like).
- **Document configuration**: env vars, secrets, ports, required tools.
- **Include troubleshooting** and FAQ with common errors.
- **Keep it skimmable** with headings, bullets, and code blocks.

### Document structure (recommended)

- **Overview**
- **Quickstart**
- **Architecture (high-level)**
- **Key workflows** (build/test/deploy)
- **Configuration**
- **Troubleshooting**
- **FAQ**
- **Appendix** (glossary, deeper details)

### File naming conventions (for documentation)

- `README.md` (root)
- `CONTRIBUTING.md`
- `docs/<topic>.md` (e.g., `docs/deploy.md`, `docs/testing.md`)
- `CHANGELOG.md` (if maintained)

### Folder structure (for documentation)

```
/docs
  /api
  /architecture
  /development
  /deploy
```

### Example prompt (Documentation style)

```text
Create a docs/development.md for this repo.

Include:
- Quickstart (install, env vars, run dev)
- Test commands
- Lint/format commands
- Common issues (port conflicts, missing env vars)
- How to add a new route/page

Rules:
- Use headings and short paragraphs
- Include exact commands in code blocks
- Do not invent env vars; read from existing config files if present
```

---

## 6) Debugging style (triage → isolate → fix)

### Best-practice instruction patterns

- **Provide symptoms + reproduction steps** and exact error output.
- **Require hypotheses** (2–4 likely causes) before code changes.
- **Ask for minimal reproduction** and “binary search” narrowing steps.
- **Demand logging/instrumentation plan** when needed.
- **Request a fix + a regression test** to prevent reoccurrence.

### Document structure (recommended)

- **Symptom**
- **Repro steps**
- **Observed vs expected**
- **Hypotheses**
- **Diagnostics performed**
- **Fix**
- **Regression test**
- **Postmortem notes** (optional)

### File naming conventions

- `debug.<issue>.md`
- `postmortem.<issue>.md`

### Folder structure

```
/docs
  /debug
/tests
```

### Example prompt (Debugging style)

```text
Bug: Form submit returns 500 in production but not locally.

Repro:
1) Open /quote
2) Submit valid fields
3) See 500

Error log snippet:
<PASTE HERE>

Task:
- Propose 3–5 hypotheses
- List diagnostic steps and what each would confirm/deny
- Implement the fix with a regression test
- Provide a short postmortem summary
```

---

## 7) Refactor style (behavior-preserving improvements)

### Best-practice instruction patterns

- **Declare invariants**: “no behavior changes,” API stays the same.
- **Define motivation** (readability, performance, maintainability).
- **Set boundaries** (which modules can change).
- **Require before/after verification** (tests, typecheck).
- **Ask for a “diff narrative”**: what moved where and why.

### Document structure (recommended)

- **Why refactor**
- **Invariants**
- **Target areas**
- **Steps**
- **Verification**
- **Follow-ups**

### File naming conventions

- `refactor.<topic>.md`
- `notes.refactor.<topic>.md`

### Folder structure

```
/docs
  /refactors
/src
/tests
```

### Example prompt (Refactor style)

```text
Refactor objective: Simplify the quote form components to reduce duplication.

Invariants:
- No UI behavior changes
- No route changes
- No new deps

Scope:
- Only src/lib/components/forms/**

Do:
- Extract shared field components where it makes sense
- Keep Tailwind classes consistent
- Ensure bun test + typecheck passes

Output:
- List changed files and the refactor rationale
```

---

## 8) Code review style (feedback + actionable fixes)

### Best-practice instruction patterns

- **Set review goals** (security, performance, readability, correctness).
- **Ask for categorized feedback** (Must fix / Should fix / Nice to have).
- **Require examples** for each issue (line references or file names).
- **Request a patch** only for “Must fix” items (optional).
- **Ask for tests** if changes are non-trivial.

### Document structure (recommended)

- **Summary**
- **Must fix**
- **Should fix**
- **Nice to have**
- **Questions**
- **Suggested tests**

### File naming conventions

- `review.<pr-or-topic>.md`

### Folder structure

```
/docs
  /reviews
```

### Example prompt (Code review style)

```text
Review these files for correctness and maintainability:
- src/routes/api/quote/+server.ts
- src/lib/validation/quote.ts

Focus:
- Input validation edge cases
- Error handling consistency
- Type safety

Output:
- Must fix / Should fix / Nice to have
- For Must fix items, propose exact code changes
```

---

## 9) Test-writing style (coverage with intent)

### Best-practice instruction patterns

- **Specify test level** (unit/integration/e2e) and what to avoid.
- **Define important behaviors** (happy path + key edge cases).
- **Set determinism rules** (no network, stable time, seeded randomness).
- **Require clear naming** (given/when/then or behavior-based).
- **Ask for minimal fixtures** and reusable helpers.

### Document structure (recommended)

- **Scope**
- **Behaviors**
- **Test cases list**
- **Fixtures/mocks**
- **How to run**
- **Coverage notes**

### File naming conventions

- `*.test.ts` / `*.spec.ts` following repo convention
- `test-utils.ts` for shared helpers (carefully)

### Folder structure

```
/tests
  /unit
  /integration
  /helpers
```

### Example prompt (Test-writing style)

```text
Write integration tests for POST /api/quote.

Behaviors:
- 201 on valid payload, returns id
- 400 with field-level errors on invalid input
- 500 only on unexpected failures (and should be logged)

Rules:
- No network calls
- Use existing DB test utilities
- Keep tests deterministic

Output:
- Add/modify tests only, plus small helper utilities if needed
```

---

## 10) Specification style (requirements → acceptance)

### Best-practice instruction patterns

- **Write requirements as “shall” statements** (clear, testable).
- **Include non-functional requirements** (performance, accessibility, i18n).
- **Add acceptance tests** (user stories + scenarios).
- **Define out-of-scope** explicitly.
- **Use a glossary** if domain terms exist.

### Document structure (recommended)

- **Overview**
- **User stories**
- **Functional requirements**
- **Non-functional requirements**
- **Acceptance criteria**
- **Out of scope**
- **Glossary**

### File naming conventions

- `spec.<feature>.md`
- `requirements.<feature>.md`

### Folder structure

```
/docs
  /specs
  /requirements
```

### Example prompt (Specification style)

```text
Write a feature spec for “Quote Requests Inbox” in the admin dashboard.

Include:
- User stories (admin views, filters, status changes)
- Functional + non-functional requirements
- Acceptance criteria scenarios (Given/When/Then)
- Out of scope

Keep it implementation-agnostic (no code yet).
```
