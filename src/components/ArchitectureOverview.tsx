import type { Lang } from '../modulesData';

const OFFICIAL_SITE = 'https://hijo790401.github.io/shen-yao-portal/';

const text = {
  zh: {
    title: '架構與部署',
    subtitle: '面向企業合作方的展示層架構：public frontend shell 與 private governance core 清楚分層。',
    layers: 'System Layers',
    showcase: 'What This Showcase Demonstrates',
    privatePart: 'What Remains Private',
    integration: 'Enterprise Integration Notes',
    shellVsCore: 'Public Shell vs Private Core',
    leftTitle: 'Public Shell',
    leftItems: ['結構映射展示', 'sample reasoning', 'risk explanation', 'required verification / action gate / replay output'],
    rightTitle: 'Private Core',
    rightItems: ['stable production calibration', 'private weight layers', 'full secure governance logic', 'final responsibility convergence'],
    integrationItems: [
      '可作為前置治理層部署於既有流程之前。',
      '可接入既有 detection / risk / review flow。',
      '可輸出 structured required verification / action gate / replay。'
    ],
    authorTitle: '作者與聯絡資訊',
    name: '許文耀／沈耀888π',
    role1: '沉靜流派工作室負責人',
    role2: '語意防火牆創辦人',
    location: '台灣台中',
    official: '官方網站'
  },
  en: {
    title: 'Architecture & Deployment',
    subtitle: 'Enterprise-facing layered architecture that cleanly separates the public frontend shell from the private governance core.',
    layers: 'System Layers',
    showcase: 'What This Showcase Demonstrates',
    privatePart: 'What Remains Private',
    integration: 'Enterprise Integration Notes',
    shellVsCore: 'Public Shell vs Private Core',
    leftTitle: 'Public Shell',
    leftItems: ['structure mapping', 'sample reasoning', 'risk explanation', 'required verification / action gate / replay output'],
    rightTitle: 'Private Core',
    rightItems: ['stable production calibration', 'private weight layers', 'full secure governance logic', 'final responsibility convergence'],
    integrationItems: [
      'Can operate as a pre-decision governance layer before existing workflows.',
      'Can integrate with current detection / risk / review stacks.',
      'Can output structured required verification / action gate / replay artifacts.'
    ],
    authorTitle: 'Author & Contact',
    name: 'Wen-Yao Hsu / Shen-Yao 888π',
    role1: 'Director, Silent School Studio',
    role2: 'Founder of Semantic Firewall',
    location: 'Taichung, Taiwan',
    official: 'Official Website'
  }
} as const;

export default function ArchitectureOverview({ lang }: { lang: Lang }) {
  const t = text[lang];

  return (
    <section id="architecture" className="section architecture-overview">
      <div className="container">
        <header className="section-head">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </header>

        <h3>{t.layers}</h3>
        <div className="layer-flow">
          {['Public Frontend Showcase', 'API Gateway', 'Private Governance Core', 'Optional Enterprise Integration Layer'].map((layer) => (
            <div key={layer} className="layer-node">{layer}</div>
          ))}
        </div>

        <div className="grid two">
          <article className="card">
            <h3>{t.showcase}</h3>
            <ul>{t.leftItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <h3>{t.privatePart}</h3>
            <ul>{t.rightItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>

        <article className="card integration-card">
          <h3>{t.integration}</h3>
          <ul>{t.integrationItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>

        <h3>{t.shellVsCore}</h3>
        <div className="grid two shell-vs-core">
          <article className="card">
            <h4>{t.leftTitle}</h4>
            <ul>{t.leftItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <h4>{t.rightTitle}</h4>
            <ul>{t.rightItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>

        <article className="card architecture-author">
          <h3>{t.authorTitle}</h3>
          <p>{t.name}</p>
          <p>{t.role1}</p>
          <p>{t.role2}</p>
          <p>{t.location}</p>
          <p><a href="mailto:ken0963521@gmail.com">ken0963521@gmail.com</a></p>
          <p><a href={OFFICIAL_SITE} target="_blank" rel="noreferrer">{t.official}</a></p>
          <small>𓂀𒀭𐘀ꙮΩ888π</small>
        </article>
      </div>
    </section>
  );
}
