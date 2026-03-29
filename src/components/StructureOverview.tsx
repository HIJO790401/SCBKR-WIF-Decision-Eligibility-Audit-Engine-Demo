import type { Lang } from '../modulesData';

const copy = {
  zh: {
    title: '結構與公式展示',
    subtitle: '展示 Website / Image / Finance 三種輸入如何被編譯為責任鏈結構，再進入 CAL / SCBKR / R-Lock / VOID 治理核心。',
    notBlacklist: 'Why This Is Not a Blacklist',
    compare: [
      { title: 'Blacklist', desc: 'record：記錄已知被標記主體。' },
      { title: 'Detector', desc: 'estimate：估計可疑訊號。' },
      { title: 'This Engine', desc: 'compile + audit eligibility：將輸入編譯為責任鏈物件並審計決策資格。' }
    ],
    mapping: 'W / I / F Object Mapping',
    mappingCards: [
      {
        title: 'Website',
        items: ['domain / path / slug', 'authority borrow signal', 'responsibility window']
      },
      {
        title: 'Image',
        items: ['OCR / logo / CTA', 'visual authority signal', 'callback gap']
      },
      {
        title: 'Finance',
        items: ['payer / payee / authorization', 'urgency marker', 'rollback path']
      }
    ],
    stack: 'Governance Stack',
    stackCards: [
      { title: 'CAL', desc: '檢視 comment / authority / liability 是否對齊。' },
      { title: 'SCBKR', desc: '驗證 S / C / B / K / R 治理一致性。' },
      { title: 'R-Lock', desc: '根據風險與責任缺口決定升級或阻擋。' },
      { title: 'VOID', desc: '隔離不合格物件，避免其驅動人類決策。' }
    ],
    formula: 'Conceptual Formula Cards',
    boundaryTitle: 'Boundary Note',
    boundaryBody: '本頁展示的是概念結構與示意公式，不等於完整 production 演算法。真正穩定裁決依賴 private governance core。'
  },
  en: {
    title: 'Structure & Formula Overview',
    subtitle:
      'Shows how Website / Image / Finance inputs are compiled into responsibility-chain structures before entering CAL / SCBKR / R-Lock / VOID governance stages.',
    notBlacklist: 'Why This Is Not a Blacklist',
    compare: [
      { title: 'Blacklist', desc: 'record: stores known flagged entities.' },
      { title: 'Detector', desc: 'estimate: predicts suspiciousness signals.' },
      { title: 'This Engine', desc: 'compile + audit eligibility: compiles input objects and audits decision eligibility.' }
    ],
    mapping: 'W / I / F Object Mapping',
    mappingCards: [
      {
        title: 'Website',
        items: ['domain / path / slug', 'authority borrow signal', 'responsibility window']
      },
      {
        title: 'Image',
        items: ['OCR / logo / CTA', 'visual authority signal', 'callback gap']
      },
      {
        title: 'Finance',
        items: ['payer / payee / authorization', 'urgency marker', 'rollback path']
      }
    ],
    stack: 'Governance Stack',
    stackCards: [
      { title: 'CAL', desc: 'Checks alignment of comment, authority, and liability.' },
      { title: 'SCBKR', desc: 'Validates S / C / B / K / R governance consistency.' },
      { title: 'R-Lock', desc: 'Applies escalation/block gating based on risk-accountability gaps.' },
      { title: 'VOID', desc: 'Isolates ineligible objects from human decision execution.' }
    ],
    formula: 'Conceptual Formula Cards',
    boundaryTitle: 'Boundary Note',
    boundaryBody:
      'This page presents conceptual structure and formula cards only, not the full production algorithm. Stable verdicts depend on the private governance core.'
  }
} as const;

const formulas = {
  website: 'Decision_Eligible(w) := TYPE_COMPILE[W(w)] ∧ CAL_PASS(w) ∧ VALIDATE[SCBKR(w)] ∧ RLOCK_OK(w) ∧ VOID_FINAL(w)',
  image: 'Decision_Eligible(i) := TYPE_COMPILE[I(i)] ∧ CAL_PASS(i) ∧ VALIDATE[SCBKR(i)] ∧ RLOCK_OK(i) ∧ VOID_FINAL(i)',
  finance: 'Decision_Eligible(f) := TYPE_COMPILE[F(f)] ∧ CAL_PASS(f) ∧ VALIDATE[SCBKR(f)] ∧ RLOCK_OK(f) ∧ VOID_FINAL(f)'
} as const;

export default function StructureOverview({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section id="structure" className="section light structure-overview">
      <div className="container">
        <header className="section-head">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </header>

        <h3>{t.notBlacklist}</h3>
        <div className="grid three">
          {t.compare.map((item) => (
            <article key={item.title} className="card">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <h3>{t.mapping}</h3>
        <div className="grid three">
          {t.mappingCards.map((card) => (
            <article key={card.title} className="card">
              <h4>{card.title}</h4>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3>{t.stack}</h3>
        <div className="grid four governance-stack">
          {t.stackCards.map((card) => (
            <article key={card.title} className="card">
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>

        <h3>{t.formula}</h3>
        <div className="grid three formula-cards">
          <article className="card"><h4>Website</h4><code>{formulas.website}</code></article>
          <article className="card"><h4>Image</h4><code>{formulas.image}</code></article>
          <article className="card"><h4>Finance</h4><code>{formulas.finance}</code></article>
        </div>

        <section className="card boundary-panel">
          <h4>{t.boundaryTitle}</h4>
          <p>{t.boundaryBody}</p>
        </section>
      </div>
    </section>
  );
}
