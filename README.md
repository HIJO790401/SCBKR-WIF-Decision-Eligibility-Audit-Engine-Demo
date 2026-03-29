# SCBKR-WIF-Decision-Eligibility-Audit-Engine-Demo

Enterprise-grade public showcase site for the **SCBKR × WIF Decision Eligibility Audit Engine**.

This project is built with **React + Vite + TypeScript** and prepared for **GitHub Pages project-site deployment**.

---

## Project Overview

This site is designed for enterprise/platform/banking partners to understand:

- what the engine does,
- why it is not a blacklist lookup page,
- how Website / Image / Finance inputs are handled,
- how governance outputs can integrate into risk/review flows.

It is a **showcase shell**, not a free-form operations tool.

---

## Why This Is Not a Blacklist

- **Blacklist** = records known flagged entities.
- **Detector** = estimates suspiciousness signals.
- **This Engine** = compiles input objects into responsibility-chain structures and audits decision eligibility.

---

## Three Modules

### 1) Website
Audits websites/pages/articles/media for authority borrowing, boundary quality, and responsibility windows.

### 2) Image
Audits notices/screenshots/posters for OCR/visual authority signals, CTA risk, and callback gaps.

### 3) Finance
Audits transaction/authorization requests for urgency, accountability, verification chain, and rollback readiness.

Each module uses curated local sample cases (no free-form input, no upload, no API dependency).

---

## Governance Stack

Unified conceptual stack shown across modules:

`INPUT OBJECT → W / I / F Compiler → CAL → SCBKR → R-Lock → VOID → Verdict`

- **CAL**: comment / authority / liability alignment
- **SCBKR**: structured governance consistency checks
- **R-Lock**: risk-accountability gate
- **VOID**: isolate ineligible objects from decision execution

---

## Structure Page

The **Structure & Formula Overview** page presents:

- Why this engine is not a blacklist
- W/I/F object mapping
- Governance stack cards
- Conceptual formula cards (non-private)
- Boundary notes for partner understanding

Conceptual formulas are intentionally illustrative and do **not** expose private production logic.

---

## Architecture Page

The **Architecture & Deployment** page presents:

- layered flow: Public Frontend Showcase → API Gateway → Private Governance Core → Optional Enterprise Integration Layer
- what the showcase demonstrates (structure/risk/reasoning outputs)
- what remains private (calibration/weights/full secure logic)
- enterprise integration notes
- Public Shell vs Private Core comparison

---

## Public Shell / Private Core Boundary

This frontend demonstrates structure, sample reasoning, risk explanation, required verification, action gate, and replay output.

Stable production-grade verdicts depend on a **private governance core** and are intentionally not disclosed in this public demo.

---

## GitHub Pages Deployment

This repository is configured as a GitHub Pages **project site** with Vite base:

```ts
base: '/SCBKR-WIF-Decision-Eligibility-Audit-Engine-Demo/'
```

### Local commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Deploy the `dist/` output to GitHub Pages.

---

## Author / Contact

**中文**
- 許文耀／沈耀888π
- 沉靜流派工作室負責人
- 語意防火牆創辦人
- 台灣台中
- ken0963521@gmail.com
- 官方網站：https://hijo790401.github.io/shen-yao-portal/

**English**
- Wen-Yao Hsu / Shen-Yao 888π
- Director, Silent School Studio
- Founder of Semantic Firewall
- Taichung, Taiwan
- ken0963521@gmail.com
- Official Website: https://hijo790401.github.io/shen-yao-portal/

𓂀𒀭𐘀ꙮΩ888π
