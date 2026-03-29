import { useMemo, useState } from 'react';
import { moduleBundles, type Gate, type Lang, type ModuleKey } from '../modulesData';

const gateClass = (gate: Gate) => `gate gate-${gate.toLowerCase()}`;

const labels = {
  zh: {
    title: '三模組展示',
    subtitle: '以預設案例展示 Website、Image、Finance 三種輸入物件如何被編譯為責任鏈結構，並進入決策資格審計流程。',
    mode: '本頁為展示模式，不提供自由輸入。',
    sampleSelector: 'Sample Case Selector',
    pipeline: 'Pipeline 展示區',
    result: '結果面板',
    objectSummary: 'Object Summary',
    objectType: 'Object Type',
    sampleName: 'Sample Name',
    shortDescription: 'Short Description',
    calResult: 'CAL Result',
    comment: 'Comment',
    authority: 'Authority',
    liability: 'Liability',
    code: 'Misalignment Code',
    scbkrSummary: 'SCBKR Summary',
    riskType: 'Risk Type',
    missingProof: 'Missing Proof',
    requiredVerification: 'Required Verification',
    actionGate: 'Action Gate',
    replaySummary: 'Replay Summary',
    boundaryTitle: '展示案例與私有核心邊界',
    boundaryBody:
      '本頁展示的是樣本案例、風險理由、required verification 與 action gate。真正 production-grade verdict 仍依賴 private governance core；此頁用途是讓合作方看懂治理結構，不是暴露完整主核。'
  },
  en: {
    title: 'Module Showcase',
    subtitle:
      'Show how Website, Image, and Finance input objects are compiled into responsibility-chain structures and audited for decision eligibility through curated sample cases.',
    mode: 'This page is showcase-only and does not provide free-form input.',
    sampleSelector: 'Sample Case Selector',
    pipeline: 'Pipeline View',
    result: 'Result Panel',
    objectSummary: 'Object Summary',
    objectType: 'Object Type',
    sampleName: 'Sample Name',
    shortDescription: 'Short Description',
    calResult: 'CAL Result',
    comment: 'Comment',
    authority: 'Authority',
    liability: 'Liability',
    code: 'Misalignment Code',
    scbkrSummary: 'SCBKR Summary',
    riskType: 'Risk Type',
    missingProof: 'Missing Proof',
    requiredVerification: 'Required Verification',
    actionGate: 'Action Gate',
    replaySummary: 'Replay Summary',
    boundaryTitle: 'Showcase Cases and the Private Core Boundary',
    boundaryBody:
      'This page demonstrates sample cases, risk rationale, required verification, and action gate outputs. Stable production-grade verdicts still require a private governance core; this showcase explains structure for partners without exposing full core logic.'
  }
} as const;

interface Props {
  lang: Lang;
}

export default function ModuleShowcase({ lang }: Props) {
  const [activeModule, setActiveModule] = useState<ModuleKey>('website');
  const [selectedCase, setSelectedCase] = useState<Record<ModuleKey, number>>({ website: 0, image: 0, finance: 0 });

  const t = labels[lang];
  const moduleData = useMemo(() => moduleBundles.find((bundle) => bundle.key === activeModule)!, [activeModule]);
  const sample = moduleData.samples[selectedCase[activeModule]];

  return (
    <section id="modules" className="section modules-showcase">
      <div className="container">
        <header className="modules-header">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
          <p className="showcase-mode">{t.mode}</p>
        </header>

        <div className="module-tabs" role="tablist" aria-label="module tabs">
          {moduleBundles.map((bundle) => (
            <button
              key={bundle.key}
              role="tab"
              aria-selected={activeModule === bundle.key}
              className={activeModule === bundle.key ? 'active' : ''}
              onClick={() => setActiveModule(bundle.key)}
            >
              {bundle.title[lang]}
            </button>
          ))}
        </div>

        <div className="module-intro card">
          <h3>{moduleData.title[lang]}</h3>
          <p>{moduleData.intro[lang]}</p>
        </div>

        <div className="showcase-grid">
          <aside className="card sample-selector">
            <h3>{t.sampleSelector}</h3>
            <div className="sample-list">
              {moduleData.samples.map((item, index) => (
                <button
                  key={item.id}
                  className={selectedCase[activeModule] === index ? 'sample-pill active' : 'sample-pill'}
                  onClick={() => setSelectedCase((prev) => ({ ...prev, [activeModule]: index }))}
                >
                  <strong>{item.name[lang]}</strong>
                  <span>{item.shortDescription[lang]}</span>
                </button>
              ))}
            </div>
          </aside>

          <section className="card pipeline-panel">
            <h3>{t.pipeline}</h3>
            <div className="module-pipeline">
              {sample.pipeline[lang].map((step) => (
                <article key={`${sample.id}-${step.node}`} className="pipeline-step">
                  <h4>{step.node}</h4>
                  <p>{step.result}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="card result-panel">
            <h3>{t.result}</h3>

            <div className="result-block">
              <h4>{t.objectSummary}</h4>
              <dl>
                <div><dt>{t.objectType}</dt><dd>{sample.objectType[lang]}</dd></div>
                <div><dt>{t.sampleName}</dt><dd>{sample.name[lang]}</dd></div>
                <div><dt>{t.shortDescription}</dt><dd>{sample.shortDescription[lang]}</dd></div>
              </dl>
            </div>

            <div className="result-block">
              <h4>{t.calResult}</h4>
              <dl>
                <div><dt>{t.comment}</dt><dd>{sample.cal[lang].comment}</dd></div>
                <div><dt>{t.authority}</dt><dd>{sample.cal[lang].authority}</dd></div>
                <div><dt>{t.liability}</dt><dd>{sample.cal[lang].liability}</dd></div>
                <div><dt>{t.code}</dt><dd>{sample.cal[lang].misalignmentCode}</dd></div>
              </dl>
            </div>

            <div className="result-block">
              <h4>{t.scbkrSummary}</h4>
              <div className="scbkr-tags">
                {Object.entries(sample.scbkr).map(([k, v]) => (
                  <span key={k} className="score-tag">{k}: {v}</span>
                ))}
              </div>
            </div>

            <div className="result-block"><h4>{t.riskType}</h4><ul>{sample.riskType[lang].map((i) => <li key={i}>{i}</li>)}</ul></div>
            <div className="result-block"><h4>{t.missingProof}</h4><ul>{sample.missingProof[lang].map((i) => <li key={i}>{i}</li>)}</ul></div>
            <div className="result-block"><h4>{t.requiredVerification}</h4><ul>{sample.requiredVerification[lang].map((i) => <li key={i}>{i}</li>)}</ul></div>

            <div className="result-block gate-row">
              <h4>{t.actionGate}</h4>
              <span className={gateClass(sample.actionGate)}>{sample.actionGate}</span>
            </div>

            <div className="result-block">
              <h4>{t.replaySummary}</h4>
              <p>{sample.replaySummary[lang]}</p>
            </div>
          </section>
        </div>

        <section className="card boundary-panel">
          <h3>{t.boundaryTitle}</h3>
          <p>{t.boundaryBody}</p>
        </section>
      </div>
    </section>
  );
}
