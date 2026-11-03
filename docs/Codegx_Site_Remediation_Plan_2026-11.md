# Codegx Technologies — Site Remediation Plan

**Version:** 1.0
**Date:** 3 November 2026
**Prepared for:** Peter Oduor Oluoch, Founder
**Inputs:** Full route inventory from `Codegx-Technology/codegx-portfolio` source tree, live page review of every real route, and supervisor response `WEBSITE_REPRESENTATION_DISCOVERY_001`
**Status:** Proposal — no change authorised until the founder decision log in §6 is closed

---

## 1. Why this plan exists

The supervisor returned four rulings that override any marketing judgement:

| Question | Supervisor ruling | Site consequence |
|---|---|---|
| C1 — client engagements | `INSUFFICIENT_EVIDENCE`, confidence 0.99 | No named client may appear anywhere |
| C2 — certifications | `INSUFFICIENT_EVIDENCE`, confidence 0.99 | No compliance or certification claim may appear |
| J2 — platform maturity | Unestablished per platform | Every platform must carry a maturity stage |
| P1 — publication status | Six titles exist; status must be distinguished | Bibliography must separate released from unreleased |

This plan sequences the site against those rulings. It is ordered by risk, not by effort.

---

## 2. Route inventory

45 routes exist in source. They fall into three classes.

### 2.1 Real public pages (24)

| Route | Status | Notes |
|---|---|---|
| `/` | Live | Hero, value cards, mission |
| `/about` | Live | Company description |
| `/services` | Live | Six governed service lines |
| `/services/[slug]` ×6 | Live | Contains the defective copy |
| `/case-studies` | Live | No named client |
| `/case-studies/[slug]` ×5 | Live | NDII, TendaNow, CodeCrusher, BizGen, Wakala |
| `/blog` | Live | 7 articles, 2023–2026 |
| `/blog/[slug]` ×7 | Live | Quality is high |
| `/publications` | Live | **Indexes only 4 of 6 titles** |
| `/publications/[slug]` ×6 | Live | All six pages exist and render |
| `/team` | Live | Two named people |
| `/contact` | Live | Uses legacy vocabulary |
| `/pricing` | Live | **Contradicts the business model** |
| `/why-wakala` | Live | Duplicates `/agency` |
| `/agency` | Live | Wakala practice page |
| `/docs` | Live | Delivery notes hub, thin |
| `/privacy` | Live | Reviewed 10 Jul 2026 |
| `/terms` | Live | Reviewed 10 Jul 2026 |
| `/cookies` | Live | Reviewed 10 Jul 2026 |
| `/quote`, `/quote-builder`, `/simple-quote` | Live | AI-agency framing |

### 2.2 Demo and development routes — live in production (18)

Confirmed reachable: `/ui-kit`, `/modern-home`.
Present in build and presumed reachable: `/enhanced-home`, `/professional-home`, `/test-home`, `/main-home`, `/home`, `/enhanced-agency`, `/enhanced-services`, `/augment-demo`, `/enhanced-navbar-demo`, `/enterprise-components-demo`, `/enterprise-layout-demo`, `/executive-navbar-demo`, `/footer-demo`, `/quiz`, `/codegx`.

### 2.3 Broken

| Route | Defect |
|---|---|
| `/portfolio` | Page exists in source; serves 404 |
| `/solutions/trusted-ai-operations` | Renders `/services` |
| `/solutions/operational-intelligence` | Renders `/services` |
| `/solutions/enterprise-software-engineering` | Renders `/services` |
| `/research` | 404 — no page exists despite a named Research & Documentation practice |
| `/sitemap.xml`, `/robots.txt` | Absent |

---

## 3. Findings ledger

Ordered by severity. Severity is commercial risk, not code effort.

### F1 — CRITICAL — Fabricated social proof is publicly reachable

`/modern-home` publishes, on the live domain:

- `250+` Enterprise Clients
- `98%` Client Satisfaction
- `40%` Average Efficiency Increase
- "Trusted by industry leaders" above three `via.placeholder.com` grey boxes
- Three testimonials attributed to Elena Park (Innovex Solutions), Michael Chen (Global Logistics Inc.), Sarah Johnson (TechVision Enterprises), illustrated with `randomuser.me` stock portraits
- Links to `/case-studies/supply-chain`, `/smart-city`, `/blockchain-finance` — none of which exist

`/ui-kit` publishes a fourth testimonial — "helped us increase efficiency by 40%" — attributed to Sarah Johnson, CTO, TechVision Inc., linked to `linkedin.com/` (the bare domain), with the same random-portrait pattern.

**This is not a copy defect.** It is a false-advertising and misrepresentation exposure in every jurisdiction Codegx sells into, including the Kenyan Consumer Protection Act and EU unfair commercial practices rules. It is also indexed and reachable by any buyer who guesses a URL or follows a stale link.

**Action:** remove both routes from the production build in week one. Do not rewrite them — delete them.

### F2 — CRITICAL — `/pricing` sells a different company

The page offers: Starter `$5,000–$15,000`, Growth `$15,000–$50,000` "Most Popular", Enterprise `$50,000+`, with "24/7 priority support", "unlimited revision rounds", and a monthly/annual "Save 20%" toggle.

Three problems:

1. **Buyer mismatch.** Every other page sells governed systems to institutions; this page sells AI implementation packages to "Startups and Scaleups".
2. **Price disclosure without capacity evidence.** Publishing price bands invites scrutiny of delivery capacity, which C2 and C1 say cannot be evidenced.
3. **"24/7 priority support"** conflicts directly with the human-in-the-loop positioning, and is a commitment the team page cannot staff.

**Action:** withdraw the page, or replace it with engagement-model language (fixed-scope assessment → pilot → platform), with no published bands. Decision required — see D1.

### F3 — HIGH — The publication index hides the two most valuable titles

`/publications` renders four cards. Six detail pages exist, including the cover art for all six in `client/public/assets/publications/`.

Missing from the index:
- `Enterprise AI Governance` — maps NIST AI RMF, ISO/IEC 42001, ISO/IEC 23894, EU AI Act
- `The Unwritten Life`

There is no `publications.json`; the list is hardcoded in `publications.tsx`, which is why the two routes exist but never surface. `Enterprise AI Governance` is the strongest asset on the site and no visitor can reach it.

**Action:** move the publication list into `client/public/data/publications.json` with all six entries, then render from data.

### F4 — HIGH — Marketing copy contradicts the governance thesis

Six metrics (`$45M`, `45%`, `99.2%`, `85%`, `32%`, `3-4x`), the HIPAA claim, "recognize faces", and "24/7 customer support without human intervention" all survive on service pages, against supervisor rulings C1/C2.

The books already contain the correct language. `Enterprise AI Governance` states the position exactly: *"Determinism can be certified. Probability has to be governed."* The service pages say the opposite in spirit by promising certainty.

**Action:** delete the metrics and the three risk claims; replace with the framework vocabulary already published in the books.

### F5 — HIGH — Case Studies claim a client roster that does not exist

Five case studies, zero named clients, every byline "Codegx Technologies 2026", introduced as "how we've helped organizations across various industries". C1 confirms nothing is verifiable.

**Action:** relabel the section **Platforms**; describe each as a system with a maturity stage (per J2), not an outcome delivered to a client. Decision required — see D2.

### F6 — MEDIUM — Founder's credentialing facts are absent

Present nowhere on the site:

| Fact | Source | Why it matters |
|---|---|---|
| MSc Artificial Intelligence, University of Colorado Boulder — in progress | J1, J3 | The only externally verifiable credential; currently invisible |
| RPEK — Python framework published on PyPI | R3 | The only publicly inspectable code artefact |
| Technology and computational-thinking education for young people in Kibera | J1, J3 | The strongest differentiator in the entire estate, and the least replicable |
| Five ranked research interests | R1 | Research page does not exist |

The site leads with six unverifiable platforms and omits four verifiable facts. That inversion is the core representation failure.

**Action:** founder section on `/about`, `/research` page, RPEK entry with PyPI link.

### F7 — MEDIUM — Naming and vocabulary fragmentation

- `Wakala`, `Wakala Agency`, `Wakala OS` used across `/agency`, `/why-wakala`, `/team` with no stated relationship
- `/contact` lists "AI Integration & Solutions / Enterprise Automation / Digital Transformation" — the only page using the retired vocabulary
- `/why-wakala` duplicates `/agency` almost entirely; both are indexed
- Author byline inconsistency: `Peter Oduor Oluoch` (publications pages) vs `Peter O. Oluoch` (blog, team). This is not a defect — Oduor is the middle name. Rule: full name in publication bylines, short form in interface chrome.

**Action:** one naming ruling, applied sitewide. Decision required — see D3.

### F8 — MEDIUM — Legal pages are not procurement-ready

`/privacy`, `/terms`, `/cookies` exist and are current. But:

- `/terms` names no legal entity and no registration number — C3 confirms the entity is unestablished
- No data-protection registration reference (Kenya DPA 2019) and no EU representative statement
- Governing law: Kenya, with no arbitration or jurisdiction clause for cross-border work

A European procurement reviewer opens `/terms` first. It currently answers none of their questions.

**Action:** hold until C3 resolves; add entity name, registration, DPA reference, and jurisdiction clause.

### F9 — LOW — Discoverability

- `/publications`, `/blog`, `/team` absent from primary navigation
- No `sitemap.xml`, no `robots.txt`
- `/solutions/*` all render `/services`
- `/portfolio` 404s while `portfolio.tsx` exists

---

## 4. Phase plan

### P0 — Containment (week 1, no dependencies)

Objective: remove live legal exposure. Nothing here needs a founder decision.

| # | Change | Route | Acceptance |
|---|---|---|---|
| P0.1 | Delete demo routes from build | `/modern-home`, `/ui-kit`, `/enhanced-home`, `/professional-home`, `/test-home`, `/main-home`, `/home`, `/enhanced-agency`, `/enhanced-services`, `/augment-demo`, `/enhanced-navbar-demo`, `/enterprise-components-demo`, `/executive-navbar-demo`, `/footer-demo`, `/quiz`, `/codegx` | Each returns 404; `grep` of build output contains no `randomuser.me`, no `via.placeholder.com`, no `250+` |
| P0.2 | Withdraw testimonial components | `Testimonials.tsx`, `testimonial-carousel.tsx`, `sections/Testimonials.tsx` | No fabricated attribution remains in bundle |
| P0.3 | Add `robots.txt` disallowing the demo paths permanently | `/robots.txt` | File served, correct syntax |
| P0.4 | Add `sitemap.xml` from the real route list only | `/sitemap.xml` | 24 URLs, no demo paths |
| P0.5 | Fix `/portfolio` 404 | `/portfolio` | Page renders or route is removed from source |

### P1 — Evidence compliance (week 2)

Objective: bring every published claim inside supervisor rulings C1 and C2.

| # | Change | Where | Acceptance |
|---|---|---|---|
| P1.1 | Delete the six performance metrics | 6 service pages, homepage, `/agency` | `0`, `32%`, `45%`, `85%`, `99.2%`, `$45M`, `3-4x`, `65%` absent from rendered text |
| P1.2 | Remove HIPAA claim and reference | `/services/ai-chatbots` | String absent |
| P1.3 | Remove facial recognition use case | `/services/computer-vision` | "face" absent from use-case list |
| P1.4 | Rewrite "no human intervention" | `/services/ai-chatbots` | Copy states escalation to a named owner |
| P1.5 | Replace `/pricing` with engagement-model page | `/pricing` | No price bands; three engagement shapes |
| P1.6 | Unpublish testimonials entirely | sitewide | No testimonial section anywhere |

### P2 — Representation (weeks 3–4)

Objective: publish the four verifiable facts. This is the highest-value work in the plan.

| # | Change | Where | Source |
|---|---|---|---|
| P2.1 | Founder block: MSc CU Boulder (in progress), RPEK on PyPI, Kibera education work, four published titles | `/about` | J1, J3, R3 |
| P2.2 | Publication index from data file — all six titles | `/publications` | F3 |
| P2.3 | Mark `Enterprise AI Governance` as forthcoming, with licensing enquiry CTA | `/publications/enterprise-ai-governance` | P1 ruling |
| P2.4 | New `/research` page: five ranked interests, active work, framework status | `/research` (new) | R1, R2, R3 |
| P2.5 | Framework status table: SBP v1.3.7, GP, execution-governance standard — marked internal, versioned, not yet public | `/research` | R3 + local repo evidence |
| P2.6 | Platform maturity table replacing case-study framing | `/case-studies` → `/platforms` | J2, D2 |

### P3 — Positioning (weeks 5–6)

| # | Change | Where |
|---|---|---|
| P3.1 | Homepage rebuilt on the Enterprise AI Governance thesis | `/` |
| P3.2 | Replace S1 sentence — the supervisor's own draft uses "digital transformation", which its S2 names as a disqualifier | `/` |
| P3.3 | Adopt the three disqualifiers from S2 as explicit "what we are not" copy | `/about` |
| P3.4 | Unify Wakala naming across `/agency`, `/why-wakala`, `/team`; retire the duplicate | 3 routes |
| P3.5 | Align `/contact` to the six governed service lines | `/contact` |
| P3.6 | Add Publications, Blog, Research to primary navigation | nav component |

### P4 — Market pages (blocked on D4)

Cannot start until the founder names one primary market, one buyer role, and one first offer. Supervisor ruling M2 is `STRATEGIC_DECISION_REQUIRED`. Any market page written before that decision is wasted work.

### P5 — Procurement readiness (after C3 resolves)

| # | Change | Where |
|---|---|---|
| P5.1 | Legal entity name and registration in `/terms` | `/terms` |
| P5.2 | Kenya DPA 2019 registration reference; EU representative statement | `/privacy` |
| P5.3 | Jurisdiction and arbitration clause for cross-border engagements | `/terms` |
| P5.4 | Certification roadmap statement — explicitly "none held, path defined" | `/about` |

---

## 5. Proposed homepage structure

Replacing the current hero, benefits, mission, values sequence:

1. **Hero** — the book's own argument, used as the positioning claim
2. **Founder** — MSc CU Boulder, RPEK on PyPI, Kibera work, four published titles
3. **The estate** — six platforms with maturity stages, not outcomes
4. **Published work** — `Enterprise AI Governance` featured as the flagship
5. **Research** — five ranked interests
6. **Engagement model** — diagnose, design control layer, build, operate
7. **Contact**

No testimonial, no metric, no client logo, no certification badge anywhere on the page.

---

## 6. Founder decision log

Four decisions block parts of the plan. None can be resolved by evidence.

| ID | Decision | Blocks | Options |
|---|---|---|---|
| D1 | Is Codegx a productised tier business or an engagement business? | P1.5 | (a) withdraw pricing entirely (b) rewrite as engagement model (c) keep bands and defend them |
| D2 | Do the case studies become Platforms, or stay and acquire named clients? | P2.6 | (a) relabel to Platforms (b) hold until clients consent (c) delete |
| D3 | Official product name | P3.4 | `Wakala OS` is the platform, `Codegx` is the firm, agency framing internal |
| D4 | Primary market for twelve months | P4 | Kenya / Europe / Russia — one only |

---

## 7. Out of scope

- Design, layout, and component changes
- Backend, form handling, and API work
- Repository commits, deployment, or publication — none authorised by this plan
- Content beyond the routes listed in §2.1

---

## 8. What this plan deliberately does not do

It does not add a single new marketing sentence about capability. Every phase either deletes an unsupportable claim or publishes an already-existing fact. The book, the research interests, the Kibera work, and the PyPI package are already true. The site's job is to stop contradicting them.
