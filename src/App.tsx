import { useMemo, useState } from 'react';
import ModuleShowcase from './components/ModuleShowcase';
import StructureOverview from './components/StructureOverview';
import ArchitectureOverview from './components/ArchitectureOverview';

type Lang = 'zh' | 'en';

const OFFICIAL_SITE = 'https://hijo790401.github.io/shen-yao-portal/';

const content = {
  zh: {
    brand: 'SCBKR × WIF 決策資格審計引擎展示站',
    nav: {
      overview: 'Overview',
      modules: 'Modules',
      structure: 'Structure',
      architecture: 'Architecture',
      official: 'Official Website'
    },
    langLabel: '語言',
    hero: {
      title: 'SCBKR × WIF 決策資格審計引擎演示',
      subtitle:
        '將 Website、Image、Finance 三類輸入物件編譯為責任鏈結構，再於進入人的決策鏈前完成資格審計。',
      statement: '不是黑名單。不是分類器。是前置治理展示層。',
      ctas: {
        modules: 'View Modules',
        structure: 'View Structure',
        architecture: 'View Architecture',
        official: 'Official Website'
      }
    },
    notBlacklist: {
      title: 'Why This Is Not a Blacklist',
      cards: [
        {
          title: 'Blacklist',
          desc: '記錄已知被標記主體，通常作為被動比對名單。'
        },
        {
          title: 'Detector',
          desc: '估計可疑程度，提供風險訊號但不負責完整治理責任鏈。'
        },
        {
          title: 'This Engine',
          desc: '把輸入編譯為責任鏈物件，審計其是否具備驅動人類決策動作的資格。'
        }
      ]
    },
    compilers: {
      title: 'Three Input Compilers',
      cards: [
        {
          title: 'Website',
          desc: '審計網站、頁面、文章與媒體內容的責任鏈結構。'
        },
        {
          title: 'Image',
          desc: '審計圖像、截圖、公告、海報與視覺權威物件。'
        },
        {
          title: 'Finance',
          desc: '審計交易、授權與高風險資產流動要求。'
        }
      ]
    },
    pipeline: {
      title: 'Governance Pipeline Preview',
      steps: [
        ['INPUT', '輸入物件來源'],
        ['W / I / F Compiler', '三入口物件編譯'],
        ['CAL', '上下文對齊層'],
        ['SCBKR', '責任鏈核驗'],
        ['R-Lock', '風險鎖定門檻'],
        ['VOID', '失格路徑隔離'],
        ['Verdict', '輸出審計結論']
      ]
    },
    shellCore: {
      title: 'Public Shell / Private Core',
      desc: '此展示站呈現的是結構、流程與概念層；真正穩定的 production 級裁決依賴 private governance core。'
    },
    modulesPreview: {
      title: 'Modules',
      desc: '展示入口僅提供預設案例與模組說明，不提供自由輸入。'
    },
    structurePreview: {
      title: 'Structure',
      bullets: ['W / I / F object compilation', 'CAL / SCBKR / R-Lock / VOID', 'conceptual formula structure']
    },
    architecturePreview: {
      title: 'Architecture',
      bullets: [
        'public frontend shell',
        'private governance core',
        'deployment model',
        'enterprise integration path'
      ]
    },
    author: {
      title: 'Author / Official Website',
      name: '許文耀／沈耀888π',
      role1: '沉靜流派工作室負責人',
      role2: '語意防火牆創辦人',
      location: '台灣台中',
      email: 'ken0963521@gmail.com',
      official: '官方網站'
    },
    footerTagline: '企業級決策資格審計展示層（Public Demo Shell）'
  },
  en: {
    brand: 'SCBKR × WIF Decision Eligibility Audit Engine Showcase',
    nav: {
      overview: 'Overview',
      modules: 'Modules',
      structure: 'Structure',
      architecture: 'Architecture',
      official: 'Official Website'
    },
    langLabel: 'Language',
    hero: {
      title: 'SCBKR × WIF Decision Eligibility Audit Engine Demo',
      subtitle:
        'Compiles Website, Image, and Finance input objects into responsibility-chain structures, then audits decision eligibility before they enter human decision flows.',
      statement: 'Not a blacklist. Not a classifier. A pre-decision governance showcase layer.',
      ctas: {
        modules: 'View Modules',
        structure: 'View Structure',
        architecture: 'View Architecture',
        official: 'Official Website'
      }
    },
    notBlacklist: {
      title: 'Why This Is Not a Blacklist',
      cards: [
        {
          title: 'Blacklist',
          desc: 'Records known flagged entities and supports passive matching workflows.'
        },
        {
          title: 'Detector',
          desc: 'Estimates suspiciousness signals, but does not complete governance responsibility-chain assurance.'
        },
        {
          title: 'This Engine',
          desc: 'Compiles each input into a responsibility-chain object and audits whether it is eligible to drive human action.'
        }
      ]
    },
    compilers: {
      title: 'Three Input Compilers',
      cards: [
        {
          title: 'Website',
          desc: 'Audit the responsibility-chain structure of websites, pages, articles, and media objects.'
        },
        {
          title: 'Image',
          desc: 'Audit images, screenshots, notices, posters, and visual authority objects.'
        },
        {
          title: 'Finance',
          desc: 'Audit transactions, authorizations, and high-risk asset transfer requests.'
        }
      ]
    },
    pipeline: {
      title: 'Governance Pipeline Preview',
      steps: [
        ['INPUT', 'Input object source'],
        ['W / I / F Compiler', 'Three-entry object compilation'],
        ['CAL', 'Context alignment layer'],
        ['SCBKR', 'Responsibility-chain verification'],
        ['R-Lock', 'Risk-lock gating threshold'],
        ['VOID', 'Disqualification path isolation'],
        ['Verdict', 'Audited decision output']
      ]
    },
    shellCore: {
      title: 'Public Shell / Private Core',
      desc: 'This showcase presents structure, flow, and conceptual logic; stable production-grade verdicts require a private governance core.'
    },
    modulesPreview: {
      title: 'Modules',
      desc: 'The showcase surface only presents preset examples and module narratives; no free-form user input is provided.'
    },
    structurePreview: {
      title: 'Structure',
      bullets: ['W / I / F object compilation', 'CAL / SCBKR / R-Lock / VOID', 'conceptual formula structure']
    },
    architecturePreview: {
      title: 'Architecture',
      bullets: [
        'public frontend shell',
        'private governance core',
        'deployment model',
        'enterprise integration path'
      ]
    },
    author: {
      title: 'Author / Official Website',
      name: 'Wen-Yao Hsu / Shen-Yao 888π',
      role1: 'Director, Silent School Studio',
      role2: 'Founder of Semantic Firewall',
      location: 'Taichung, Taiwan',
      email: 'ken0963521@gmail.com',
      official: 'Official Website'
    },
    footerTagline: 'Enterprise decision-eligibility governance showcase layer (Public Demo Shell)'
  }
} as const;

function App() {
  const [lang, setLang] = useState<Lang>('zh');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useMemo(() => content[lang], [lang]);

  const navItems = [
    { href: '#overview', label: t.nav.overview },
    { href: '#modules', label: t.nav.modules },
    { href: '#structure', label: t.nav.structure },
    { href: '#architecture', label: t.nav.architecture }
  ];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">SCBKR × WIF</div>
          <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="toggle menu">
            ☰
          </button>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={OFFICIAL_SITE} target="_blank" rel="noreferrer">
              {t.nav.official}
            </a>
          </nav>
          <div className="lang-toggle" role="group" aria-label={t.langLabel}>
            <button className={lang === 'zh' ? 'active' : ''} onClick={() => setLang('zh')}>
              中文
            </button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
              EN
            </button>
          </div>
        </div>
      </header>

      <section id="overview" className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">{t.brand}</p>
          <h1>{t.hero.title}</h1>
          <p className="subtitle">{t.hero.subtitle}</p>
          <p className="statement">{t.hero.statement}</p>
          <div className="hero-cta">
            <a href="#modules">{t.hero.ctas.modules}</a>
            <a href="#structure">{t.hero.ctas.structure}</a>
            <a href="#architecture">{t.hero.ctas.architecture}</a>
            <a href={OFFICIAL_SITE} target="_blank" rel="noreferrer">
              {t.hero.ctas.official}
            </a>
          </div>
        </div>
      </section>

      <main>
        <section className="section light">
          <div className="container">
            <h2>{t.notBlacklist.title}</h2>
            <div className="grid three">
              {t.notBlacklist.cards.map((card) => (
                <article key={card.title} className="card">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ModuleShowcase lang={lang} />

        <StructureOverview lang={lang} />

        <ArchitectureOverview lang={lang} />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>SCBKR-WIF-Decision-Eligibility-Audit-Engine-Demo</h3>
            <p>{t.footerTagline}</p>
          </div>
          <div>
            <h4>{t.nav.overview}</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href={OFFICIAL_SITE} target="_blank" rel="noreferrer">
                  {t.nav.official}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t.author.name}</h4>
            <p>{t.author.role1}</p>
            <p>{t.author.role2}</p>
            <p>{t.author.location}</p>
            <p>
              <a href={`mailto:${t.author.email}`}>{t.author.email}</a>
            </p>
            <p>
              <a href={OFFICIAL_SITE} target="_blank" rel="noreferrer">
                {t.author.official}
              </a>
            </p>
            <small>𓂀𒀭𐘀ꙮΩ888π</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
