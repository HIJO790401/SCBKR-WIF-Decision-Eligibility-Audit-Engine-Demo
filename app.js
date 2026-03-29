const OFFICIAL_SITE = 'https://hijo790401.github.io/shen-yao-portal/';

const content = {
  zh: {
    nav: { overview: 'Overview', modules: 'Modules', structure: 'Structure', architecture: 'Architecture', official: 'Official Website' },
    overview: {
      eyebrow: 'SCBKR × WIF 決策資格審計引擎展示站',
      title: 'SCBKR × WIF 決策資格審計引擎演示',
      subtitle: '將 Website、Image、Finance 三類輸入物件編譯為責任鏈結構，再於進入人的決策鏈前完成資格審計。',
      statement: '不是黑名單。不是分類器。是前置治理展示層。',
      ctaModules: 'View Modules', ctaStructure: 'View Structure', ctaArchitecture: 'View Architecture', ctaOfficial: 'Official Website',
      notBlacklistTitle: 'Why This Is Not a Blacklist',
      notBlacklistCards: [
        { title: 'Blacklist', desc: 'records：記錄既有被標記主體。' },
        { title: 'Detector', desc: 'estimates：估計可疑程度訊號。' },
        { title: 'This Engine', desc: 'compile + audit：將輸入編譯為責任鏈物件並審計決策資格。' }
      ]
    },
    modules: {
      title: '三模組展示',
      subtitle: '以預設案例展示 Website、Image、Finance 三種輸入物件如何被編譯為責任鏈結構，並進入決策資格審計流程。',
      note: '本頁為展示模式，不提供自由輸入。',
      selector: 'Sample Case Selector', pipeline: 'Pipeline 展示區', result: '結果面板',
      objectSummary: 'Object Summary', objectType: 'Object Type', sampleName: 'Sample Name', shortDescription: 'Short Description',
      calResult: 'CAL Result', comment: 'Comment', authority: 'Authority', liability: 'Liability', misCode: 'Misalignment Code',
      scbkr: 'SCBKR Summary', riskType: 'Risk Type', missingProof: 'Missing Proof', requiredVerification: 'Required Verification',
      actionGate: 'Action Gate', replaySummary: 'Replay Summary'
    },
    structure: {
      title: '結構與公式展示',
      subtitle: 'Website / Image / Finance 三種輸入物件如何被編譯成責任鏈結構，再進入 CAL / SCBKR / R-Lock / VOID 治理核心。',
      notBlacklist: 'Why This Is Not a Blacklist',
      compare: [
        { title: 'Blacklist', desc: 'record：記錄名單。' },
        { title: 'Detector', desc: 'estimate：估計可疑。' },
        { title: 'This engine', desc: 'compile + audit eligibility：審計決策資格。' }
      ],
      mappingTitle: 'W / I / F Object Mapping',
      mapping: [
        { title: 'Website', items: ['domain / path / slug', 'authority borrow', 'responsibility window'] },
        { title: 'Image', items: ['OCR / logo / CTA', 'visual authority', 'callback gap'] },
        { title: 'Finance', items: ['payer / payee / authorization', 'urgency', 'rollback path'] }
      ],
      stackTitle: 'Governance Stack',
      stack: [
        { title: 'CAL', desc: '檢視 comment / authority / liability 對齊。' },
        { title: 'SCBKR', desc: '檢視 S / C / B / K / R 治理一致性。' },
        { title: 'R-Lock', desc: '對高風險缺口執行升級或阻擋。' },
        { title: 'VOID', desc: '隔離不合格物件，避免驅動決策。' }
      ],
      formulaTitle: 'Conceptual Formula Cards',
      formulas: {
        Website: 'Decision_Eligible(w) := TYPE_COMPILE[W(w)] ∧ CAL_PASS(w) ∧ VALIDATE[SCBKR(w)] ∧ RLOCK_OK(w) ∧ VOID_FINAL(w)',
        Image: 'Decision_Eligible(i) := TYPE_COMPILE[I(i)] ∧ CAL_PASS(i) ∧ VALIDATE[SCBKR(i)] ∧ RLOCK_OK(i) ∧ VOID_FINAL(i)',
        Finance: 'Decision_Eligible(f) := TYPE_COMPILE[F(f)] ∧ CAL_PASS(f) ∧ VALIDATE[SCBKR(f)] ∧ RLOCK_OK(f) ∧ VOID_FINAL(f)'
      },
      boundaryTitle: 'Boundary Note',
      boundaryBody: '本頁展示概念結構與公式，不等於完整 production 演算法。真正穩定裁決依賴 private governance core。'
    },
    architecture: {
      title: '架構與部署',
      subtitle: 'Public Showcase Shell → Private Governance Core → Enterprise Integration 的商業部署路徑。',
      layersTitle: 'System Layers',
      layers: ['Public Frontend Showcase', 'API Gateway', 'Private Governance Core', 'Optional Enterprise Integration Layer'],
      showcaseTitle: 'What This Showcase Demonstrates',
      showcase: ['structure mapping', 'sample reasoning', 'risk explanation', 'required verification', 'action gate', 'replay output'],
      privateTitle: 'What Remains Private',
      privateList: ['stable production calibration', 'private weight layers', 'full secure governance logic', 'final responsibility convergence'],
      integrationTitle: 'Enterprise Integration Notes',
      integration: ['可作為前置治理層接在 detection/risk/review 前。', '可輸出 structured required verification / action gate / replay。', '可做為跨部門風險共識介面。'],
      rollbackTitle: 'Rollback / Verification Thinking',
      rollback: ['先驗證官方回撥窗口，再執行高成本操作。', '未建立責任窗口前，action gate 不可放行。', '保留回滾路徑與責任收斂紀錄。'],
      shellTitle: 'Public Showcase Shell', shell: ['展示結構與案例', '展示 required verification / action gate', '不外放主核演算法'],
      coreTitle: 'Private Governance Core', core: ['穩定校準與權重', '完整安全治理邏輯', '最終 production verdict'],
      authorTitle: '作者與聯絡資訊',
      author: ['許文耀／沈耀888π', '沉靜流派工作室負責人', '語意防火牆創辦人', '台灣台中', 'ken0963521@gmail.com', '官方網站']
    },
    footer: {
      tagline: '企業級決策資格審計展示層（Public Showcase Shell）',
      navTitle: 'Navigation',
      author: ['許文耀／沈耀888π', '沉靜流派工作室負責人', '語意防火牆創辦人', '台灣台中', 'ken0963521@gmail.com', '官方網站']
    }
  },
  en: {
    nav: { overview: 'Overview', modules: 'Modules', structure: 'Structure', architecture: 'Architecture', official: 'Official Website' },
    overview: {
      eyebrow: 'SCBKR × WIF Decision Eligibility Audit Engine Showcase',
      title: 'SCBKR × WIF Decision Eligibility Audit Engine Demo',
      subtitle: 'Compiles Website, Image, and Finance input objects into responsibility-chain structures, then audits decision eligibility before they enter human decision flows.',
      statement: 'Not a blacklist. Not a classifier. A pre-decision governance showcase layer.',
      ctaModules: 'View Modules', ctaStructure: 'View Structure', ctaArchitecture: 'View Architecture', ctaOfficial: 'Official Website',
      notBlacklistTitle: 'Why This Is Not a Blacklist',
      notBlacklistCards: [
        { title: 'Blacklist', desc: 'records known flagged entities.' },
        { title: 'Detector', desc: 'estimates suspiciousness signals.' },
        { title: 'This Engine', desc: 'compiles inputs and audits decision eligibility.' }
      ]
    },
    modules: {
      title: 'Module Showcase',
      subtitle: 'Show how Website, Image, and Finance input objects are compiled into responsibility-chain structures and audited through curated sample cases.',
      note: 'This page is showcase-only and does not provide free-form input.',
      selector: 'Sample Case Selector', pipeline: 'Pipeline View', result: 'Result Panel',
      objectSummary: 'Object Summary', objectType: 'Object Type', sampleName: 'Sample Name', shortDescription: 'Short Description',
      calResult: 'CAL Result', comment: 'Comment', authority: 'Authority', liability: 'Liability', misCode: 'Misalignment Code',
      scbkr: 'SCBKR Summary', riskType: 'Risk Type', missingProof: 'Missing Proof', requiredVerification: 'Required Verification',
      actionGate: 'Action Gate', replaySummary: 'Replay Summary'
    },
    structure: {
      title: 'Structure & Formula Overview',
      subtitle: 'How Website / Image / Finance objects are compiled into responsibility-chain structures and processed by CAL / SCBKR / R-Lock / VOID.',
      notBlacklist: 'Why This Is Not a Blacklist',
      compare: [
        { title: 'Blacklist', desc: 'record: stores known lists.' },
        { title: 'Detector', desc: 'estimate: predicts suspicion.' },
        { title: 'This engine', desc: 'compile + audit eligibility for action.' }
      ],
      mappingTitle: 'W / I / F Object Mapping',
      mapping: [
        { title: 'Website', items: ['domain / path / slug', 'authority borrow', 'responsibility window'] },
        { title: 'Image', items: ['OCR / logo / CTA', 'visual authority', 'callback gap'] },
        { title: 'Finance', items: ['payer / payee / authorization', 'urgency', 'rollback path'] }
      ],
      stackTitle: 'Governance Stack',
      stack: [
        { title: 'CAL', desc: 'Checks comment / authority / liability alignment.' },
        { title: 'SCBKR', desc: 'Checks S / C / B / K / R governance consistency.' },
        { title: 'R-Lock', desc: 'Applies escalation or block gates on major gaps.' },
        { title: 'VOID', desc: 'Isolates ineligible objects from action execution.' }
      ],
      formulaTitle: 'Conceptual Formula Cards',
      formulas: {
        Website: 'Decision_Eligible(w) := TYPE_COMPILE[W(w)] ∧ CAL_PASS(w) ∧ VALIDATE[SCBKR(w)] ∧ RLOCK_OK(w) ∧ VOID_FINAL(w)',
        Image: 'Decision_Eligible(i) := TYPE_COMPILE[I(i)] ∧ CAL_PASS(i) ∧ VALIDATE[SCBKR(i)] ∧ RLOCK_OK(i) ∧ VOID_FINAL(i)',
        Finance: 'Decision_Eligible(f) := TYPE_COMPILE[F(f)] ∧ CAL_PASS(f) ∧ VALIDATE[SCBKR(f)] ∧ RLOCK_OK(f) ∧ VOID_FINAL(f)'
      },
      boundaryTitle: 'Boundary Note',
      boundaryBody: 'This page shows conceptual structure and formulas, not the full production algorithm. Stable verdicts depend on the private governance core.'
    },
    architecture: {
      title: 'Architecture & Deployment',
      subtitle: 'A partner-facing route from Public Showcase Shell to Private Governance Core and Enterprise Integration.',
      layersTitle: 'System Layers',
      layers: ['Public Frontend Showcase', 'API Gateway', 'Private Governance Core', 'Optional Enterprise Integration Layer'],
      showcaseTitle: 'What This Showcase Demonstrates',
      showcase: ['structure mapping', 'sample reasoning', 'risk explanation', 'required verification', 'action gate', 'replay output'],
      privateTitle: 'What Remains Private',
      privateList: ['stable production calibration', 'private weight layers', 'full secure governance logic', 'final responsibility convergence'],
      integrationTitle: 'Enterprise Integration Notes',
      integration: ['Can be deployed before existing detection/risk/review flows.', 'Can output structured required verification / action gate / replay.', 'Can support cross-team governance coordination.'],
      rollbackTitle: 'Rollback / Verification Thinking',
      rollback: ['Verify official callback channels before high-cost actions.', 'Do not pass action gate without verified responsibility window.', 'Maintain rollback paths and responsibility convergence records.'],
      shellTitle: 'Public Showcase Shell', shell: ['Shows structure and sample cases', 'Shows required verification / action gate', 'Does not expose core algorithm'],
      coreTitle: 'Private Governance Core', core: ['Stable calibration and weight layers', 'Full secure governance logic', 'Final production verdict'],
      authorTitle: 'Author & Contact',
      author: ['Wen-Yao Hsu / Shen-Yao 888π', 'Director, Silent School Studio', 'Founder of Semantic Firewall', 'Taichung, Taiwan', 'ken0963521@gmail.com', 'Official Website']
    },
    footer: {
      tagline: 'Enterprise decision-eligibility governance showcase layer (Public Showcase Shell)',
      navTitle: 'Navigation',
      author: ['Wen-Yao Hsu / Shen-Yao 888π', 'Director, Silent School Studio', 'Founder of Semantic Firewall', 'Taichung, Taiwan', 'ken0963521@gmail.com', 'Official Website']
    }
  }
};

const modulesData = {
  website: {
    title: { zh: 'Website', en: 'Website' },
    intro: {
      zh: '審計網站、頁面、文章、媒體內容是否具備可追責責任鏈。',
      en: 'Audits whether websites/pages/articles/media carry actionable responsibility-chain integrity.'
    },
    samples: [
      mkSample('Business Media Article', 'authority-heavy media object', 'comment + authority, weak liability', 'S pass / C pass / B pass / K partial / R weak', 'medium escalation', 'not sufficient for decision trust', 'WARN', ['Authority Borrow + Liability Gap'], ['Named owner missing'], ['Verify via official website channels'], '權威敘事強，但承擔不足。', 'High authority narrative with weak accountability.'),
      mkSample('Official-Looking Campaign Page', 'official-looking campaign object', 'boundary blur, contact weak', 'S pass / C partial / B partial / K weak / R weak', 'triggered', 'insufficient trusted action evidence', 'WARN', ['Visual Authority Without Verified Responsibility'], ['Official callback channel missing', 'Rollback path missing'], ['Use official app/website for second verification'], '看似正式，但責任窗口不足。', 'Looks official, but responsibility window is weak.'),
      mkSample('Redirect-Heavy Unknown Page', 'redirect-heavy uncertain object', 'source unstable, liability undefined', 'S weak / C partial / B weak / K weak / R fail', 'triggered', 'object disqualified', 'BLOCK', ['Boundary Weak / Responsibility Weak'], ['Source accountability not established'], ['Stop action and re-acquire from official source'], '來源追責失敗，應阻擋。', 'Source traceability fails and should be blocked.')
    ]
  },
  image: {
    title: { zh: 'Image', en: 'Image' },
    intro: {
      zh: '審計圖像、公告、截圖中的視覺權威與責任窗口是否對齊。',
      en: 'Audits whether visual authority in notices/screenshots aligns with responsibility windows.'
    },
    samples: [
      mkSample('Official-Looking Notice', 'visual authority notice object', 'authority high, callback weak', 'S pass / C partial / B pass / K weak / R weak', 'medium escalation', 'insufficient as stand-alone evidence', 'WARN', ['Visual Authority Without Verified Responsibility'], ['Official callback channel missing'], ['Verify through official phone line'], '視覺權威強，但回撥鏈不足。', 'Strong visual authority but weak callback chain.'),
      mkSample('QR Poster With Urgency', 'urgency-driven visual CTA object', 'urgency high, accountability low', 'S weak / C pass / B partial / K weak / R fail', 'triggered', 'risk concentration exceeds tolerance', 'BLOCK', ['Sensitive Action Without Official Verification'], ['Official second verification missing'], ['Stop QR flow and use official app'], '高催促且高成本，無正式驗證鏈。', 'High urgency and high action cost without official verification.'),
      mkSample('Fake UI Screenshot', 'interface-mimic sensitive object', 'authority mimic + verification gap', 'S weak / C partial / B weak / K weak / R fail', 'triggered', 'credential-action disqualified', 'BLOCK', ['Visual Authority Without Verified Responsibility'], ['Rollback path missing', 'Source accountability missing'], ['Stop credential input and switch to official app'], '仿介面要求敏感操作，需阻擋。', 'Mimic UI requesting sensitive actions should be blocked.')
    ]
  },
  finance: {
    title: { zh: 'Finance', en: 'Finance' },
    intro: {
      zh: '審計交易/授權請求是否具備正式驗證鏈、責任窗口與回滾能力。',
      en: 'Audits whether transaction/authorization requests have verification chains, accountability windows, and rollback readiness.'
    },
    samples: [
      mkSample('Urgent Transfer Request', 'sensitive transaction object', 'authority borrow + liability gap', 'S weak / C partial / B partial / K weak / R fail', 'triggered', 'block eligibility', 'BLOCK', ['Authority Borrow + Liability Gap'], ['Named owner missing', 'Rollback path missing'], ['Verify through official phone line first'], '高成本轉帳要求但責任不明。', 'High-cost transfer request with unclear responsibility.'),
      mkSample('OTP / Login Verification Request', 'credential-sensitive authorization object', 'authority high, verification chain absent', 'S weak / C partial / B weak / K weak / R fail', 'triggered', 'credential-action disqualified', 'BLOCK', ['Sensitive Action Without Official Verification'], ['Official second-verification chain missing'], ['Use official app security center'], '敏感驗證要求無官方鏈路。', 'Sensitive credential request without official verification chain.'),
      mkSample('Executive-Style Authorization Request', 'hierarchical authority authorization object', 'authority borrow, owner trace incomplete', 'S pass / C partial / B partial / K weak / R weak', 'high escalation', 'pending strict verification', 'WARN', ['Boundary Weak / Responsibility Weak'], ['Named authorization owner missing'], ['Request formal authorization document'], '可升級審核，不可直接執行。', 'Escalate for review, do not execute directly.')
    ]
  }
};

function mkSample(name, compiler, calLine, scbkr, rlock, vline, gate, risk, missing, required, zhReplay, enReplay) {
  return {
    name: { zh: name, en: name },
    summary: { zh: zhReplay, en: enReplay },
    objectType: { zh: '審計輸入物件', en: 'Audited input object' },
    pipeline: [
      { node: 'INPUT OBJECT', result: 'sample object' },
      { node: 'W / I / F Compiler', result: compiler },
      { node: 'CAL', result: calLine },
      { node: 'SCBKR', result: scbkr },
      { node: 'R-Lock', result: rlock },
      { node: 'VOID', result: vline },
      { node: 'Verdict', result: gate }
    ],
    cal: { comment: calLine, authority: 'context-dependent', liability: 'context-dependent', code: 'CAL-SHOWCASE' },
    scbkr: scbkr.split(' / ').map((item) => item.trim()),
    riskType: risk,
    missingProof: missing,
    required,
    gate,
    replay: { zh: zhReplay, en: enReplay }
  };
}

let lang = 'zh';
let moduleKey = 'website';
const sampleIndex = { website: 0, image: 0, finance: 0 };

const qs = (s) => document.querySelector(s);
const qsa = (s) => Array.from(document.querySelectorAll(s));

function renderI18n() {
  qsa('[data-i18n]').forEach((el) => {
    const path = el.dataset.i18n.split('.');
    let value = content[lang];
    path.forEach((k) => (value = value[k]));
    el.textContent = value;
  });

  qs('#notBlacklistCards').innerHTML = content[lang].overview.notBlacklistCards
    .map((c) => `<article class="card"><h3>${c.title}</h3><p>${c.desc}</p></article>`)
    .join('');

  renderStructure();
  renderArchitecture();
  renderFooterAuthor();
  renderModule();
}

function renderModule() {
  const t = content[lang].modules;
  const module = modulesData[moduleKey];
  const sample = module.samples[sampleIndex[moduleKey]];

  qs('#moduleTabs').innerHTML = ['website', 'image', 'finance']
    .map((k) => `<button class="${moduleKey === k ? 'active' : ''}" data-tab="${k}">${modulesData[k].title[lang]}</button>`)
    .join('');

  qs('#moduleIntro').innerHTML = `<h3>${module.title[lang]}</h3><p>${module.intro[lang]}</p>`;

  qs('#sampleButtons').innerHTML = module.samples
    .map((s, i) => `<button class="sample-btn ${sampleIndex[moduleKey] === i ? 'active' : ''}" data-sample="${i}"><strong>${s.name[lang]}</strong><span>${s.summary[lang]}</span></button>`)
    .join('');

  qs('#pipelineSteps').innerHTML = sample.pipeline.map((p) => `<article class="pipe-step"><b>${p.node}</b><p>${p.result}</p></article>`).join('');

  qs('#objectSummary').innerHTML = `<h4>${t.objectSummary}</h4><div class="dl"><div><b>${t.objectType}</b><span>${sample.objectType[lang]}</span></div><div><b>${t.sampleName}</b><span>${sample.name[lang]}</span></div><div><b>${t.shortDescription}</b><span>${sample.summary[lang]}</span></div></div>`;
  qs('#calResult').innerHTML = `<h4>${t.calResult}</h4><div class="dl"><div><b>${t.comment}</b><span>${sample.cal.comment}</span></div><div><b>${t.authority}</b><span>${sample.cal.authority}</span></div><div><b>${t.liability}</b><span>${sample.cal.liability}</span></div><div><b>${t.misCode}</b><span>${sample.cal.code}</span></div></div>`;
  qs('#scbkrSummary').innerHTML = `<h4>${t.scbkr}</h4><div class="scbkr-tags">${sample.scbkr.map((x) => `<span class="tag">${x}</span>`).join('')}</div>`;
  qs('#riskType').innerHTML = `<h4>${t.riskType}</h4><ul>${sample.riskType.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  qs('#missingProof').innerHTML = `<h4>${t.missingProof}</h4><ul>${sample.missingProof.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  qs('#requiredVerification').innerHTML = `<h4>${t.requiredVerification}</h4><ul>${sample.required.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  qs('#actionGate').innerHTML = `<h4>${t.actionGate}</h4><span class="gate gate-${sample.gate}">${sample.gate}</span>`;
  qs('#replaySummary').innerHTML = `<h4>${t.replaySummary}</h4><p>${sample.replay[lang]}</p>`;

  qsa('#moduleTabs button').forEach((btn) => btn.addEventListener('click', () => {
    moduleKey = btn.dataset.tab;
    renderModule();
  }));
  qsa('#sampleButtons button').forEach((btn) => btn.addEventListener('click', () => {
    sampleIndex[moduleKey] = Number(btn.dataset.sample);
    renderModule();
  }));
}

function renderStructure() {
  const s = content[lang].structure;
  qs('#structureCompare').innerHTML = s.compare.map((x) => `<article class="card"><h4>${x.title}</h4><p>${x.desc}</p></article>`).join('');
  qs('#structureMapping').innerHTML = s.mapping
    .map((m) => `<article class="card"><h4>${m.title}</h4><ul>${m.items.map((i) => `<li>${i}</li>`).join('')}</ul></article>`)
    .join('');
  qs('#governanceStack').innerHTML = s.stack.map((g) => `<article class="card"><h4>${g.title}</h4><p>${g.desc}</p></article>`).join('');
  qs('#formulaCards').innerHTML = Object.entries(s.formulas)
    .map(([k, v]) => `<article class="card"><h4>${k}</h4><code>${v}</code></article>`)
    .join('');
}

function renderArchitecture() {
  const a = content[lang].architecture;
  qs('#layerFlow').innerHTML = a.layers.map((l) => `<div class="layer">${l}</div>`).join('');
  qs('#showcaseList').innerHTML = a.showcase.map((x) => `<li>${x}</li>`).join('');
  qs('#privateList').innerHTML = a.privateList.map((x) => `<li>${x}</li>`).join('');
  qs('#integrationList').innerHTML = a.integration.map((x) => `<li>${x}</li>`).join('');
  qs('#rollbackList').innerHTML = a.rollback.map((x) => `<li>${x}</li>`).join('');
  qs('#shellList').innerHTML = a.shell.map((x) => `<li>${x}</li>`).join('');
  qs('#coreList').innerHTML = a.core.map((x) => `<li>${x}</li>`).join('');
  qs('#authorBlock').innerHTML = `<h3>${a.authorTitle}</h3><p>${a.author[0]}</p><p>${a.author[1]}</p><p>${a.author[2]}</p><p>${a.author[3]}</p><p><a href="mailto:${a.author[4]}">${a.author[4]}</a></p><p><a href="${OFFICIAL_SITE}" target="_blank" rel="noreferrer">${a.author[5]}</a></p><small>𓂀𒀭𐘀ꙮΩ888π</small>`;
}

function renderFooterAuthor() {
  const a = content[lang].footer.author;
  qs('#footerAuthor').innerHTML = `<h4>${a[0]}</h4><p>${a[1]}</p><p>${a[2]}</p><p>${a[3]}</p><p><a href="mailto:${a[4]}">${a[4]}</a></p><p><a href="${OFFICIAL_SITE}" target="_blank" rel="noreferrer">${a[5]}</a></p><small>𓂀𒀭𐘀ꙮΩ888π</small>`;
}

function setupEvents() {
  qs('#langZh').addEventListener('click', () => setLang('zh'));
  qs('#langEn').addEventListener('click', () => setLang('en'));
  qs('#menuBtn').addEventListener('click', () => qs('#mainNav').classList.toggle('open'));
  qsa('#mainNav a').forEach((a) => a.addEventListener('click', () => qs('#mainNav').classList.remove('open')));
}

function setLang(next) {
  lang = next;
  qs('#langZh').classList.toggle('active', next === 'zh');
  qs('#langEn').classList.toggle('active', next === 'en');
  document.documentElement.lang = next === 'zh' ? 'zh-Hant' : 'en';
  renderI18n();
}

setupEvents();
renderI18n();
