const OFFICIAL_SITE = 'https://hijo790401.github.io/shen-yao-portal/';

const i18n = {
  zh: {
    nav: { overview: '總覽', modules: '模組展示', structure: '結構展示', architecture: '架構部署', official: '官方網站' },
    overview: {
      eyebrow: 'SCBKR × WIF 決策資格審計引擎展示站',
      title: 'SCBKR × WIF 決策資格審計引擎演示',
      subtitle: '將網站、影像、金融三類輸入物件編譯為責任鏈結構，並在進入人類決策鏈前完成資格審計。',
      statement: '這不是黑名單，也不是分類器，而是前置治理展示層。',
      ctaModules: '查看模組展示', ctaStructure: '查看結構展示', ctaArchitecture: '查看架構部署', ctaOfficial: '官方網站',
      notBlacklistTitle: '為什麼這不是黑名單',
      notBlacklistCards: [
        { title: '黑名單', desc: '只做已知標記主體的名單記錄。' },
        { title: '偵測器', desc: '只做可疑訊號估計，無法提供完整治理責任鏈。' },
        { title: '本引擎', desc: '把輸入編譯為責任鏈物件，並審計是否具備驅動決策的資格。' }
      ]
    },
    modules: {
      title: '三模組展示',
      subtitle: '以預設案例展示網站、影像、金融輸入如何進入逐層治理審計流程。',
      note: '本頁僅提供展示模式，不提供自由輸入。',
      selector: '案例切換區', pipeline: '流程展示區', result: '結果面板',
      objectSummary: '物件摘要', objectType: '物件類型', sampleName: '案例名稱', shortDescription: '簡短說明',
      calResult: 'CAL 結果', comment: '評論向度', authority: '權威向度', liability: '承擔向度', misCode: '錯位代碼',
      scbkr: 'SCBKR 摘要', riskType: '風險類型', missingProof: '缺失證明', requiredVerification: '必要驗證',
      actionGate: '行動閘門', replaySummary: '回放摘要'
    },
    structure: {
      title: '結構與公式展示',
      subtitle: '展示網站、影像、金融輸入如何編譯為責任鏈物件，再進入 CAL、SCBKR、R-Lock、VOID。',
      notBlacklist: '為什麼這不是黑名單',
      compare: [
        { title: '黑名單', desc: '記錄名單。' },
        { title: '偵測器', desc: '估計可疑。' },
        { title: '本引擎', desc: '編譯責任鏈並審計決策資格。' }
      ],
      mappingTitle: 'W / I / F 物件映射',
      mapping: [
        { title: '網站', items: ['網域 / 路徑 / 標識', '權威借用訊號', '責任窗口'] },
        { title: '影像', items: ['文字辨識 / 標誌 / 行動號召', '視覺權威訊號', '回撥缺口'] },
        { title: '金融', items: ['付款方 / 收款方 / 授權', '急迫標記', '回滾路徑'] }
      ],
      stackTitle: '治理堆疊',
      stack: [
        { title: 'CAL', desc: '檢視評論、權威、承擔是否對齊。' },
        { title: 'SCBKR', desc: '檢視 S、C、B、K、R 的治理一致性。' },
        { title: 'R-Lock', desc: '依風險與責任缺口決定升級或阻擋。' },
        { title: 'VOID', desc: '隔離不合格物件，避免驅動高成本決策。' }
      ],
      formulaTitle: '概念公式卡',
      formulas: {
        網站: 'Decision_Eligible(w) := TYPE_COMPILE[W(w)] ∧ CAL_PASS(w) ∧ VALIDATE[SCBKR(w)] ∧ RLOCK_OK(w) ∧ VOID_FINAL(w)',
        影像: 'Decision_Eligible(i) := TYPE_COMPILE[I(i)] ∧ CAL_PASS(i) ∧ VALIDATE[SCBKR(i)] ∧ RLOCK_OK(i) ∧ VOID_FINAL(i)',
        金融: 'Decision_Eligible(f) := TYPE_COMPILE[F(f)] ∧ CAL_PASS(f) ∧ VALIDATE[SCBKR(f)] ∧ RLOCK_OK(f) ∧ VOID_FINAL(f)'
      },
      boundaryTitle: '邊界說明',
      boundaryBody: '本頁只展示概念結構與示意公式，不等於完整生產演算法。穩定裁決仍依賴私有治理核心。'
    },
    architecture: {
      title: '架構與部署',
      subtitle: '公開展示層 → 私有治理核心 → 企業整合層的部署路徑。',
      layersTitle: '系統分層',
      layers: ['公開展示前端', '閘道層', '私有治理核心', '企業整合層（選配）'],
      showcaseTitle: '本展示站呈現內容',
      showcase: ['結構映射', '案例推理', '風險說明', '必要驗證', '行動閘門', '回放輸出'],
      privateTitle: '仍屬私有的部分',
      privateList: ['穩定生產校準', '私有權重層', '完整安全治理邏輯', '最終責任收斂'],
      integrationTitle: '企業導入說明',
      integration: ['可作為前置治理層接在既有偵測、風險、審核流程之前。', '可輸出結構化必要驗證、行動閘門與回放摘要。', '可作為跨部門風險共識介面。'],
      rollbackTitle: '回滾與驗證思維',
      rollback: ['先驗證官方回撥窗口，再執行高成本操作。', '未建立責任窗口前，行動閘門不得放行。', '保留回滾路徑與責任收斂紀錄。'],
      shellTitle: '公開展示層', shell: ['展示結構與案例', '展示必要驗證與行動閘門', '不外放主核演算法'],
      coreTitle: '私有治理核心', core: ['穩定校準與權重層', '完整安全治理邏輯', '最終生產級裁決'],
      authorTitle: '作者與聯絡資訊',
      author: ['許文耀／沈耀888π', '沉靜流派工作室負責人', '語意防火牆創辦人', '台灣台中', 'ken0963521@gmail.com', '官方網站']
    },
    footer: {
      tagline: '企業級決策資格審計展示層（公開展示殼）',
      navTitle: '導覽',
      author: ['許文耀／沈耀888π', '沉靜流派工作室負責人', '語意防火牆創辦人', '台灣台中', 'ken0963521@gmail.com', '官方網站']
    }
  },
  en: {
    nav: { overview: 'Overview', modules: 'Modules', structure: 'Structure', architecture: 'Architecture', official: 'Official Website' },
    overview: {
      eyebrow: 'SCBKR × WIF Decision Eligibility Audit Engine Showcase',
      title: 'SCBKR × WIF Decision Eligibility Audit Engine Demo',
      subtitle: 'Compiles website, image, and finance input objects into responsibility-chain structures, then audits eligibility before entering human decision flows.',
      statement: 'This is not a blacklist and not a classifier; it is a pre-decision governance showcase layer.',
      ctaModules: 'View Modules', ctaStructure: 'View Structure', ctaArchitecture: 'View Architecture', ctaOfficial: 'Official Website',
      notBlacklistTitle: 'Why This Is Not a Blacklist',
      notBlacklistCards: [
        { title: 'Blacklist', desc: 'Records known flagged entities.' },
        { title: 'Detector', desc: 'Estimates suspiciousness signals only.' },
        { title: 'This Engine', desc: 'Compiles responsibility-chain objects and audits decision eligibility.' }
      ]
    },
    modules: {
      title: 'Module Showcase',
      subtitle: 'Curated cases demonstrate how website, image, and finance inputs move through a layered governance audit process.',
      note: 'This page is showcase-only and does not provide free-form input.',
      selector: 'Sample Selector', pipeline: 'Pipeline View', result: 'Result Panel',
      objectSummary: 'Object Summary', objectType: 'Object Type', sampleName: 'Sample Name', shortDescription: 'Short Description',
      calResult: 'CAL Result', comment: 'Comment Dimension', authority: 'Authority Dimension', liability: 'Liability Dimension', misCode: 'Misalignment Code',
      scbkr: 'SCBKR Summary', riskType: 'Risk Type', missingProof: 'Missing Proof', requiredVerification: 'Required Verification',
      actionGate: 'Action Gate', replaySummary: 'Replay Summary'
    },
    structure: {
      title: 'Structure & Formula Overview',
      subtitle: 'Shows how website, image, and finance objects are compiled into responsibility-chain structures and processed by CAL, SCBKR, R-Lock, and VOID.',
      notBlacklist: 'Why This Is Not a Blacklist',
      compare: [
        { title: 'Blacklist', desc: 'Record list.' },
        { title: 'Detector', desc: 'Suspicion estimate.' },
        { title: 'This Engine', desc: 'Responsibility-chain compilation and eligibility audit.' }
      ],
      mappingTitle: 'W / I / F Object Mapping',
      mapping: [
        { title: 'Website', items: ['domain / path / slug', 'authority borrow signal', 'responsibility window'] },
        { title: 'Image', items: ['OCR / logo / CTA', 'visual authority signal', 'callback gap'] },
        { title: 'Finance', items: ['payer / payee / authorization', 'urgency marker', 'rollback path'] }
      ],
      stackTitle: 'Governance Stack',
      stack: [
        { title: 'CAL', desc: 'Checks alignment among comment, authority, and liability.' },
        { title: 'SCBKR', desc: 'Checks governance consistency across S, C, B, K, and R.' },
        { title: 'R-Lock', desc: 'Applies escalation or blocking based on risk-accountability gaps.' },
        { title: 'VOID', desc: 'Isolates ineligible objects from high-cost decision execution.' }
      ],
      formulaTitle: 'Conceptual Formula Cards',
      formulas: {
        Website: 'Decision_Eligible(w) := TYPE_COMPILE[W(w)] ∧ CAL_PASS(w) ∧ VALIDATE[SCBKR(w)] ∧ RLOCK_OK(w) ∧ VOID_FINAL(w)',
        Image: 'Decision_Eligible(i) := TYPE_COMPILE[I(i)] ∧ CAL_PASS(i) ∧ VALIDATE[SCBKR(i)] ∧ RLOCK_OK(i) ∧ VOID_FINAL(i)',
        Finance: 'Decision_Eligible(f) := TYPE_COMPILE[F(f)] ∧ CAL_PASS(f) ∧ VALIDATE[SCBKR(f)] ∧ RLOCK_OK(f) ∧ VOID_FINAL(f)'
      },
      boundaryTitle: 'Boundary Note',
      boundaryBody: 'This section presents conceptual structure and formulas only, not the full production algorithm. Stable verdicts rely on a private governance core.'
    },
    architecture: {
      title: 'Architecture & Deployment',
      subtitle: 'A deployment path from public showcase shell to private governance core and enterprise integration.',
      layersTitle: 'System Layers',
      layers: ['Public Showcase Frontend', 'Gateway Layer', 'Private Governance Core', 'Enterprise Integration Layer (Optional)'],
      showcaseTitle: 'What This Showcase Demonstrates',
      showcase: ['structure mapping', 'sample reasoning', 'risk explanation', 'required verification', 'action gate', 'replay output'],
      privateTitle: 'What Remains Private',
      privateList: ['stable production calibration', 'private weight layers', 'full secure governance logic', 'final responsibility convergence'],
      integrationTitle: 'Enterprise Integration Notes',
      integration: ['Can run as a pre-decision governance layer before existing detection, risk, and review flows.', 'Can output structured required verification, action gate, and replay summaries.', 'Can serve as a cross-team governance coordination interface.'],
      rollbackTitle: 'Rollback and Verification Thinking',
      rollback: ['Verify official callback channels before high-cost actions.', 'Do not pass the action gate before a verified responsibility window exists.', 'Maintain rollback paths and responsibility convergence records.'],
      shellTitle: 'Public Showcase Shell', shell: ['Shows structure and curated cases', 'Shows required verification and action gate', 'Does not expose core algorithm'],
      coreTitle: 'Private Governance Core', core: ['stable calibration and weight layers', 'full secure governance logic', 'final production-grade verdict'],
      authorTitle: 'Author and Contact',
      author: ['Wen-Yao Hsu / Shen-Yao 888π', 'Director, Silent School Studio', 'Founder of Semantic Firewall', 'Taichung, Taiwan', 'ken0963521@gmail.com', 'Official Website']
    },
    footer: {
      tagline: 'Enterprise decision-eligibility governance showcase layer (public showcase shell).',
      navTitle: 'Navigation',
      author: ['Wen-Yao Hsu / Shen-Yao 888π', 'Director, Silent School Studio', 'Founder of Semantic Firewall', 'Taichung, Taiwan', 'ken0963521@gmail.com', 'Official Website']
    }
  }
};

const moduleData = {
  website: {
    title: { zh: '網站', en: 'Website' },
    intro: { zh: '審計網站內容是否具備可追責責任鏈。', en: 'Audits whether website content provides accountable responsibility chains.' },
    samples: [
      createSample('商業媒體文章', 'Business Media Article', 'authority-heavy media object', 'comment + authority, weak liability', 'S pass / C pass / B pass / K partial / R weak', 'WARN', ['權威借用與承擔缺口'], ['缺少具名責任窗口'], ['改走官方網站二次確認'], '權威敘事強，但承擔不足。', 'Authority framing is strong, but accountability is weak.'),
      createSample('官方感活動頁面', 'Official-Looking Campaign Page', 'official-looking campaign object', 'boundary blur, contact weak', 'S pass / C partial / B partial / K weak / R weak', 'WARN', ['視覺權威但責任未驗證'], ['缺少官方回撥窗口', '缺少回滾路徑'], ['要求案件編號與具名窗口'], '頁面看似正式，但責任窗口不完整。', 'The page appears official, but accountability windows are incomplete.'),
      createSample('多重導轉未知頁面', 'Redirect-Heavy Unknown Page', 'redirect-heavy uncertain object', 'source unstable, liability undefined', 'S weak / C partial / B weak / K weak / R fail', 'BLOCK', ['邊界與責任薄弱'], ['來源追責鏈未建立'], ['停止採用並改由官方來源重取'], '來源與邊界不穩定，應直接阻擋。', 'Source and boundary are unstable; it should be blocked.')
    ]
  },
  image: {
    title: { zh: '影像', en: 'Image' },
    intro: { zh: '審計影像公告是否有可信責任窗口。', en: 'Audits whether image notices provide trustworthy responsibility windows.' },
    samples: [
      createSample('官方感公告影像', 'Official-Looking Notice', 'visual authority notice object', 'authority high, callback weak', 'S pass / C partial / B pass / K weak / R weak', 'WARN', ['視覺權威但責任未驗證'], ['缺少官方回撥窗口'], ['改用官方電話或官方網站確認'], '影像權威感強，但回撥鏈不足。', 'Visual authority is strong, but callback evidence is weak.'),
      createSample('急迫型 QR 海報', 'QR Poster With Urgency', 'urgency-driven visual CTA object', 'urgency high, accountability low', 'S weak / C pass / B partial / K weak / R fail', 'BLOCK', ['高成本行動缺少正式驗證'], ['缺少官方二次驗證鏈'], ['停止掃碼流程並改用官方應用程式'], '高催促與高成本行動並存，需阻擋。', 'Urgency and high-cost action coexist without verification, so it must be blocked.'),
      createSample('仿冒介面截圖', 'Fake UI Screenshot', 'interface-mimic sensitive object', 'authority mimic + verification gap', 'S weak / C partial / B weak / K weak / R fail', 'BLOCK', ['視覺權威仿冒'], ['缺少回滾路徑', '缺少來源責任鏈'], ['停止輸入敏感資訊並回到官方應用程式'], '仿冒介面要求敏感操作，不得放行。', 'A mimic interface requesting sensitive action must not pass.')
    ]
  },
  finance: {
    title: { zh: '金融', en: 'Finance' },
    intro: { zh: '審計交易授權要求是否具備正式驗證與回滾能力。', en: 'Audits whether transaction authorization requests include formal verification and rollback readiness.' },
    samples: [
      createSample('緊急轉帳要求', 'Urgent Transfer Request', 'sensitive transaction object', 'authority borrow + liability gap', 'S weak / C partial / B partial / K weak / R fail', 'BLOCK', ['權威借用與承擔缺口'], ['缺少具名主責', '缺少回滾路徑'], ['先透過官方電話確認'], '高成本轉帳要求但責任不明。', 'A high-cost transfer is requested without clear accountability.'),
      createSample('OTP／登入驗證要求', 'OTP / Login Verification Request', 'credential-sensitive authorization object', 'authority high, verification chain absent', 'S weak / C partial / B weak / K weak / R fail', 'BLOCK', ['敏感操作缺少正式驗證'], ['缺少官方二次驗證鏈'], ['改走官方應用程式安全中心'], '敏感驗證要求未建立正式驗證鏈。', 'Sensitive verification is requested without an official chain.'),
      createSample('主管式授權要求', 'Executive-Style Authorization Request', 'hierarchical authority authorization object', 'authority borrow, owner trace incomplete', 'S pass / C partial / B partial / K weak / R weak', 'WARN', ['責任窗口薄弱'], ['缺少具名授權窗口'], ['要求正式授權文件與回滾方案'], '可升級審核，但不可直接執行。', 'Escalated review is possible, but direct execution is not allowed.')
    ]
  }
};

function createSample(nameZh, nameEn, compiler, cal, scbkr, gate, risks, missing, required, replayZh, replayEn) {
  return {
    name: { zh: nameZh, en: nameEn },
    objectType: { zh: '審計輸入物件', en: 'Audited input object' },
    summary: { zh: replayZh, en: replayEn },
    pipeline: [
      { node: 'INPUT OBJECT', result: 'sample object' },
      { node: 'W / I / F Compiler', result: compiler },
      { node: 'CAL', result: cal },
      { node: 'SCBKR', result: scbkr },
      { node: 'R-Lock', result: gate === 'BLOCK' ? 'triggered' : 'escalation required' },
      { node: 'VOID', result: gate === 'BLOCK' ? 'ineligible for decision trust' : 'pending stricter verification' },
      { node: 'Verdict', result: gate }
    ],
    cal: { comment: cal, authority: 'context-dependent', liability: 'context-dependent', code: 'CAL-SHOWCASE' },
    scbkr: scbkr.split(' / ').map((x) => x.trim()),
    riskType: risks,
    missingProof: missing,
    required,
    gate,
    replay: { zh: replayZh, en: replayEn }
  };
}

let lang = 'zh';
let activeModule = 'website';
const activeSample = { website: 0, image: 0, finance: 0 };

const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

function renderStaticText() {
  qsa('[data-i18n]').forEach((el) => {
    const path = el.dataset.i18n.split('.');
    let obj = i18n[lang];
    path.forEach((k) => (obj = obj[k]));
    el.textContent = obj;
  });
}

function renderOverview() {
  qs('#notBlacklistCards').innerHTML = i18n[lang].overview.notBlacklistCards
    .map((x) => `<article class="card"><h3>${x.title}</h3><p>${x.desc}</p></article>`)
    .join('');
}

function renderModules() {
  const text = i18n[lang].modules;
  const module = moduleData[activeModule];
  const sample = module.samples[activeSample[activeModule]];

  qs('#moduleTabs').innerHTML = ['website', 'image', 'finance']
    .map((key) => `<button class="${key === activeModule ? 'active' : ''}" data-module="${key}">${moduleData[key].title[lang]}</button>`)
    .join('');

  qs('#moduleIntro').innerHTML = `<h3>${module.title[lang]}</h3><p>${module.intro[lang]}</p>`;
  qs('#sampleButtons').innerHTML = module.samples
    .map((s, i) => `<button class="sample-btn ${i === activeSample[activeModule] ? 'active' : ''}" data-index="${i}"><strong>${s.name[lang]}</strong><span>${s.summary[lang]}</span></button>`)
    .join('');
  qs('#pipelineSteps').innerHTML = sample.pipeline.map((p) => `<article class="pipe-step"><b>${p.node}</b><p>${p.result}</p></article>`).join('');

  qs('#objectSummary').innerHTML = `<h4>${text.objectSummary}</h4><div class="dl"><div><b>${text.objectType}</b><span>${sample.objectType[lang]}</span></div><div><b>${text.sampleName}</b><span>${sample.name[lang]}</span></div><div><b>${text.shortDescription}</b><span>${sample.summary[lang]}</span></div></div>`;
  qs('#calResult').innerHTML = `<h4>${text.calResult}</h4><div class="dl"><div><b>${text.comment}</b><span>${sample.cal.comment}</span></div><div><b>${text.authority}</b><span>${sample.cal.authority}</span></div><div><b>${text.liability}</b><span>${sample.cal.liability}</span></div><div><b>${text.misCode}</b><span>${sample.cal.code}</span></div></div>`;
  qs('#scbkrSummary').innerHTML = `<h4>${text.scbkr}</h4><div class="scbkr-tags">${sample.scbkr.map((item) => `<span class="tag">${item}</span>`).join('')}</div>`;
  qs('#riskType').innerHTML = `<h4>${text.riskType}</h4><ul>${sample.riskType.map((item) => `<li>${item}</li>`).join('')}</ul>`;
  qs('#missingProof').innerHTML = `<h4>${text.missingProof}</h4><ul>${sample.missingProof.map((item) => `<li>${item}</li>`).join('')}</ul>`;
  qs('#requiredVerification').innerHTML = `<h4>${text.requiredVerification}</h4><ul>${sample.required.map((item) => `<li>${item}</li>`).join('')}</ul>`;
  qs('#actionGate').innerHTML = `<h4>${text.actionGate}</h4><span class="gate gate-${sample.gate}">${sample.gate}</span>`;
  qs('#replaySummary').innerHTML = `<h4>${text.replaySummary}</h4><p>${sample.replay[lang]}</p>`;

  qsa('#moduleTabs button').forEach((btn) => btn.addEventListener('click', () => {
    activeModule = btn.dataset.module;
    renderModules();
  }));
  qsa('#sampleButtons button').forEach((btn) => btn.addEventListener('click', () => {
    activeSample[activeModule] = Number(btn.dataset.index);
    renderModules();
  }));
}

function renderStructure() {
  const s = i18n[lang].structure;
  qs('#structureCompare').innerHTML = s.compare.map((x) => `<article class="card"><h4>${x.title}</h4><p>${x.desc}</p></article>`).join('');
  qs('#structureMapping').innerHTML = s.mapping.map((x) => `<article class="card"><h4>${x.title}</h4><ul>${x.items.map((i) => `<li>${i}</li>`).join('')}</ul></article>`).join('');
  qs('#governanceStack').innerHTML = s.stack.map((x) => `<article class="card"><h4>${x.title}</h4><p>${x.desc}</p></article>`).join('');
  qs('#formulaCards').innerHTML = Object.entries(s.formulas).map(([k,v]) => `<article class="card"><h4>${k}</h4><code>${v}</code></article>`).join('');
}

function renderArchitecture() {
  const a = i18n[lang].architecture;
  qs('#layerFlow').innerHTML = a.layers.map((x) => `<div class="layer">${x}</div>`).join('');
  qs('#showcaseList').innerHTML = a.showcase.map((x) => `<li>${x}</li>`).join('');
  qs('#privateList').innerHTML = a.privateList.map((x) => `<li>${x}</li>`).join('');
  qs('#integrationList').innerHTML = a.integration.map((x) => `<li>${x}</li>`).join('');
  qs('#rollbackList').innerHTML = a.rollback.map((x) => `<li>${x}</li>`).join('');
  qs('#shellList').innerHTML = a.shell.map((x) => `<li>${x}</li>`).join('');
  qs('#coreList').innerHTML = a.core.map((x) => `<li>${x}</li>`).join('');
  qs('#authorBlock').innerHTML = `<h3>${a.authorTitle}</h3><p>${a.author[0]}</p><p>${a.author[1]}</p><p>${a.author[2]}</p><p>${a.author[3]}</p><p><a href="mailto:${a.author[4]}">${a.author[4]}</a></p><p><a href="${OFFICIAL_SITE}" target="_blank" rel="noreferrer">${a.author[5]}</a></p><small>𓂀𒀭𐘀ꙮΩ888π</small>`;
}

function renderFooterAuthor() {
  const a = i18n[lang].footer.author;
  qs('#footerAuthor').innerHTML = `<h4>${a[0]}</h4><p>${a[1]}</p><p>${a[2]}</p><p>${a[3]}</p><p><a href="mailto:${a[4]}">${a[4]}</a></p><p><a href="${OFFICIAL_SITE}" target="_blank" rel="noreferrer">${a[5]}</a></p><small>𓂀𒀭𐘀ꙮΩ888π</small>`;
}

function renderAll() {
  renderStaticText();
  renderOverview();
  renderModules();
  renderStructure();
  renderArchitecture();
  renderFooterAuthor();
}

function setLang(next) {
  lang = next;
  qs('#langZh').classList.toggle('active', next === 'zh');
  qs('#langEn').classList.toggle('active', next === 'en');
  document.documentElement.lang = next === 'zh' ? 'zh-Hant' : 'en';
  renderAll();
}

function setupEvents() {
  qs('#langZh').addEventListener('click', () => setLang('zh'));
  qs('#langEn').addEventListener('click', () => setLang('en'));
  qs('#menuBtn').addEventListener('click', () => qs('#mainNav').classList.toggle('open'));
  qsa('#mainNav a').forEach((a) => a.addEventListener('click', () => qs('#mainNav').classList.remove('open')));
}

setupEvents();
renderAll();
