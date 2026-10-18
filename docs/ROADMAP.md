# Engineering Roadmap — Platform Hardening

**Status:** active · **Owner:** engineering · **Last updated:** 2026-10-04

This is the single authoritative list of known platform defects and the order they get
fixed in. If you are about to change a page, a component, or the build, read §2 first.

Related documents (do not duplicate their content here):

- [`governance/gp/principles/`](../governance/gp/principles/) — the Governing Principles
  (GP) this roadmap is bound by. See §2.
- [`docs/BRANCH_STRATEGY.md`](BRANCH_STRATEGY.md) — branching conventions.
- [`MOBILE_FIRST_STRATEGY.md`](../MOBILE_FIRST_STRATEGY.md) — mobile design intent.
- [`README.md`](../README.md) — architecture and local setup.

---

## 1. How to use this roadmap

Every item has an **ID**, an **evidence** line, and **acceptance criteria**. An item is
only closed when its acceptance criteria are demonstrated with measurement — not with a
screenshot and not with "it looks right". Findings that have not been measured are
labelled **UNVERIFIED** and must never be actioned as though they were facts.

---

## 2. The change gate — mandatory, no exceptions

**Never commit or push to `main` until the change has been verified as *effected* and
checked for *collateral damage* to unrelated features, files and code.** Push-then-verify
is forbidden.

This is already encoded in the repo's own governance and this roadmap simply binds to it:

| Rule | Requirement |
|---|---|
| `GP-VER-001` Pre-Execution Verification | Pass all prescribed checks before executing |
| `GP-VER-002` Post-Execution Verification | Verify outcome against acceptance criteria; regression test; evidence of no unintended side effects |
| `GP-VER-003` Measurable Acceptance Criteria | Completion claims without verification evidence are rejected |
| `GP-VER-004` Equivalence Required for Change | Baseline, benchmark, equivalence proof, rollback path |

The gate, in order:

1. Change scoped as narrowly as possible — one concern per branch.
2. `cd client && npx tsc --noEmit` and `npm run build` — both must exit 0.
3. Publish to a **non-main branch**. Do not touch `main`.
4. **Measure on the branch build** (see §3.3 for how, given this repo's deploy topology):
   - the change actually took effect — measured, not inferred
   - no regression on every page and file the change touches
   - no overflow, contrast, layout or font change on unrelated pages
5. Only then merge to `main`.

**Evidence requirement.** Every PR states: the measured before/after values, the exact
pages and viewports measured, the blast radius (every consumer of any shared file
touched), and the rollback (`git revert <sha>`).

### 2.1 Why this is written down

Two commits (`c211d0e`, `e736203`) were pushed to `main` before verification on
2026-10-04. Both happened to pass when measured afterwards, but the process was wrong.
Do not repeat it.

---

## 3. Deployment topology — read before changing the build

### 3.1 What is verified

- `.github/workflows/deploy.yml` deploys to **GitHub Pages** on push to `main`, and runs
  `tsc --noEmit` then `npm run build` in CI.
- **That workflow passes server secrets into the client build environment:**

  ```yaml
  env:
    RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}
    FOUNDER_INBOX: ${{ secrets.FOUNDER_INBOX }}
  ```

- Separately, the **live bundle carried `VERCEL_*` build variables**, so a second build
  system is also building this repository.

### 3.2 Finding D-01 — secrets reached the public bundle (FIXED, cause only half-closed)

The client build previously ran `loadEnv(mode, cwd, '')` and spread the result into
`define['process.env']`, inlining **every** build variable into the browser bundle. Because
`client/src/utils/env.ts` (a *server* schema) is imported by client pages, a live Resend
API key and a Vercel OIDC token were publicly downloadable from
`/assets/index-*.js`.

Fixed by allowlisting the define (`bd1fb66`). **The workflow half is still open — see R-1.**
The exposure is not remediated until the credentials themselves are rotated, which is
outside the codebase.

### 3.3 Consequence for the gate

GitHub Pages workflows do **not** create per-branch preview deployments, so step 4 of the
gate cannot assume a preview URL exists. Choose one of:

- **(a) Preferred, self-contained:** add a CI job that serves the built output
  (`vite preview`) and runs the Playwright + axe suite against it (R-2), attaching the
  report to the PR. Works with the current GitHub Pages topology and needs no new host.
- **(b) Preview host:** enable branch preview deployments on whichever platform owns the
  custom domain, and run the same suite against the preview URL.

---

## 4. Findings register

Confidence key: **V** = measured on a live browser. **S** = static signal only, not yet
measured, must not be actioned as fact.

| ID | Finding | Confidence | Status |
|---|---|---|---|
| **D-01** | Server secrets inlined into the public bundle; workflow still passes them to the client build | V | vite fix shipped (`bd1fb66`); workflow open → R-1 |
| **D-02** | `ai-for-young-thinkers` unreadable in light mode — 10 `text-white` + 11 `text-slate-300` with no `dark:` pair; h1 measured `rgb(255,255,255)` on `rgb(248,250,252)` | V | **Fixed** `8d9ad55` |
| **D-03** | `/` and `/pricing` hero h1 identical defect, contrast **1.05** | V | **Fixed** `c211d0e`; now **19.28** |
| **D-04** | Mobile h1 scale inconsistent: 24px on six pages, 30px on seven, 36px on `/quote` | V | Measured set **fixed** `c211d0e`+`e736203`; ~14 more files open → R-6 |
| **D-05** | `/case-studies` badges at **1.84** contrast in the *default dark theme* — affects every visitor | V | Open → R-4 |
| **D-06** | `/` renders 8 text elements at **11px**; traces to shared `ExecutiveNavbar`, `Footer`, `CurrentProjects`, `professional-home` | S | Open → R-4 |
| **D-07** | `/solutions/:slug` resolves to `services.tsx` (the Services *index*), so `Footer.tsx:67-69` "Enterprise Solutions / Digital Transformation / Custom Development" all land on the services list. `:slug` is a wildcard with no 404 → unbounded duplicate URLs | V | Open → R-5 |
| **D-08** | `/` hero image is a remote third-party URL that failed once and loaded on retry | V | Open → R-7 |
| **D-09** | Light-mode readability unmeasured on ~10 further pages containing hardcoded light-on-dark utilities | S | Open → R-3 |
| **D-10** | `professional-home.tsx` h1 carried `md:text-5xl lg:text-4xl`, shrinking the heading at the larger breakpoint | V | **Fixed** `c211d0e` |

---

## 5. Roadmap

Ordered by (blast radius × severity) ÷ effort. **R-0 and R-2 come first: build the
harness, then fix.** Every later item is cheaper and safer once the harness exists.

### R-0 — Branch protection and the PR gate
*Blocks nothing, enables everything.*
- Protect `main`: no direct pushes, PR required, CI must pass.
- Add a PR template with the evidence fields from §2.
- **Acceptance:** a direct push to `main` is rejected; a PR cannot merge with failing CI.

### R-2 — Automated verification harness
*Do this before R-3…R-7 so each fix is proven automatically.*
- Playwright + axe-core over all routes at **375 / 768 / 1440**, in **both themes**.
- Assertions: no horizontal overflow; text contrast ≥ 4.5 (≥ 3.0 large); exactly one
  `<h1>`; no computed font-size < 12px; no `img` with `naturalWidth === 0`.
- **No-secrets assertion:** after build, fail if the output contains any known env key
  name or a secret-shaped string. D-01 was found by hand; CI must catch it.
- Wire into the gate via §3.3(a).
- **Acceptance:** a deliberately reverted fix makes the suite fail; the report attaches to
  the PR.

### R-1 — Secret handling in the build
- Remove `RESEND_API_KEY` / `FOUNDER_INBOX` from the client build step in
  `.github/workflows/deploy.yml`. Server secrets belong to the function's runtime, never
  to a client build.
- Move the server schema out of the client graph: `client/src/utils/env.ts` is imported by
  `quote.ts` and `simple-quote.ts`; point those at `import.meta.env.VITE_*`.
- Delete `client/src/pages/api/contact.ts` — a Next.js API route inside a Vite app, and a
  leak vector.
- **Acceptance:** `npm run build` output contains no secret-shaped value (enforced by R-2);
  `tsc` clean; quote pages still render.
- **Blocked by:** credential rotation is an operator action, not a code change.

### R-3 — Light-mode sweep (D-09, D-03 class of bug)
- Measure every route in real light mode; record which elements fail.
- Fix **only** where the element's background is theme-driven. `text-white` on a
  genuinely hardcoded-dark hero is *correct* — `/services` measured 16.43 and must not be
  "fixed". This is why the sweep is measured, never swept.
- Then prevent recurrence: ESLint rule banning raw colour utilities without a `dark:` pair,
  with an explicit allowlist for the hardcoded-dark cases.
- **Acceptance:** R-2 contrast assertions pass on every route in both themes; the lint rule
  fails a deliberately reintroduced violation.

### R-4 — Accessibility defects (D-05, D-06)
- `/case-studies` badges: 1.84 in dark mode. Identify the element via the browser (its
  background is a composite, so grep cannot find it), then raise contrast.
- Sub-12px text: raise to ≥ 12px in the shared components, then re-measure every consumer.
- **Acceptance:** R-2 assertions pass; consumers of changed shared components re-measured.

### R-5 — Routing and canonical URLs (D-07)
- One service registry as the single source of truth; `/solutions/*` redirects to the
  canonical `/services/*`; add a 404 for unknown slugs.
- Repoint `Footer.tsx:67-69` and `professional-home.tsx:827,871`.
- **Requires a decision** — see §6.
- **Acceptance:** no duplicate-content route; footer links resolve to the intended page;
  unknown slug 404s.

### R-6 — Typography system (D-04)
- Introduce one `<Heading level>` component (or a single token scale) and route every h1
  through it. **Do not hand-edit 14 files first — you would do the work twice.**
- ~14 files still off-scale: `thank-you`, `projects`, `codegx`, `quiz`, `simple-quote`,
  `simple-quote2`, `simple-thank-you`, `simple-thank-you2`, `main-home`, `not-found`,
  three `[slug].tsx`, and `AgencyIntro` (shared by `/agency`).
- **Acceptance:** one mobile h1 size site-wide, enforced by an R-2 assertion.

### R-7 — Asset independence (D-08)
- Self-host the landing hero image in `client/public/`.
- **Requires a decision** — see §6.
- **Acceptance:** `/` renders with no third-party image request.

---

## 6. Open decisions (need an owner)

| # | Decision | Needed by |
|---|---|---|
| 1 | Footer labels ("Enterprise Solutions", "Digital Transformation", "Custom Development") do not map to the six real service slugs. Redirect them to `/services`, or write real pages? | R-5 |
| 2 | Self-hosting the hero image changes its hosting/licensing story — approve? | R-7 |
| 3 | Which platform owns the custom domain — the GitHub Pages workflow, or the one carrying `VERCEL_*` variables? Two build paths for one repo is a standing risk. | R-1, R-2 |

---

## 7. Closed — do not regress

| Commit | Change |
|---|---|
| `bd1fb66` | Stop inlining build secrets into the client bundle |
| `8d9ad55` | `ai-for-young-thinkers` light-mode contrast; author line unified across six pages; two section labels unified |
| `c211d0e` | Mobile h1 → 30px on services/pricing/why-wakala/quote; `/` and `/pricing` light-mode headings; breakpoint regression in `professional-home` |
| `e736203` | Shared `PageHeader` onto the 30px scale (fixes `/quote`) |

Measured state after `e736203`: `/`, `/pricing`, `/services`, `/why-wakala`, `/quote` all
h1 30px; `/` and `/pricing` contrast 1.05 → 19.28; no horizontal overflow on any measured
page; `/services` confirmed *correctly* white on a dark hero at 16.43.

---

## 8. Change log

- **2026-10-04** — created. Consolidated the mobile/theme audit into D-01…D-10 and the
  R-0…R-7 sequence. Retro-recorded the change gate (§2) after two premature pushes.
