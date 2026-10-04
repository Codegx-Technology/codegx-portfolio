# Codegx Technologies Corporate Platform

## Overview
Codegx Technologies is an enterprise-grade corporate platform focused on high-performance digital solutions and AI-driven automation. This repository contains the modern, mobile-first frontend architecture and unified automation stack.

## Mission
To provide a premier digital experience with zero "AI-fluff," pure English grammar, and professional FAANG-grade engineering standards.

## Architecture
- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS + Radix UI (shadcn/ui)
- **State & Routing:** Wouter + React Query
- **Automation Stack:** Wakala OS Integration
- **Database:** PostgreSQL via Drizzle ORM
- **Deployment:** Netlify (Automated CI/CD)

## Project Structure
- `client/`: React/Vite frontend application
- `server/`: Express backend API and automation logic
- `shared/`: Shared TypeScript types and database schemas
- `docs/`: Architectural assessments, transformation advisories, and roadmaps
- **[`docs/ROADMAP.md`](docs/ROADMAP.md)**: platform defect register, the order fixes land in, and the mandatory change gate

## Roadmap & Change Gate

All pending platform work lives in **[`docs/ROADMAP.md`](docs/ROADMAP.md)** — the defect
register (`D-01`…`D-10`), the fix sequence (`R-0`…`R-7`), and the evidence each item must
demonstrate before it closes.

**Before you open a PR: never commit or push to `main` until the change has been verified
as _effected_ and checked for _collateral damage_ to unrelated features, files and code.**
Push-then-verify is forbidden. The full gate, the evidence a PR must carry, and the
governance rules it binds to (`GP-VER-001`…`GP-VER-004`, `governance/gp/principles/`) are
in §2 of the roadmap. Read it before your first change.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Governance
This project follows a strict governance framework to maintain enterprise standards. Refer to `docs/CodegxTechnologies_TransformationAdvisory.md` for detailed guidelines on:
- Zero "AI-fluff" aesthetics
- Mobile-first design patterns
- Pure English grammar requirements
- Prohibited use of emojis in corporate content

## License
© 2026 Codegx Technologies. All rights reserved.
