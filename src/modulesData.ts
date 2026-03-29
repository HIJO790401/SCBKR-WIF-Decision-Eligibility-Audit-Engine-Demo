export type Lang = 'zh' | 'en';
export type ModuleKey = 'website' | 'image' | 'finance';
export type Gate = 'ALLOW' | 'WARN' | 'BLOCK';

export interface SampleCase {
  id: string;
  name: Record<Lang, string>;
  shortDescription: Record<Lang, string>;
  objectType: Record<Lang, string>;
  pipeline: Record<Lang, { node: string; result: string }[]>;
  cal: Record<Lang, { comment: string; authority: string; liability: string; misalignmentCode: string }>;
  scbkr: { S: string; C: string; B: string; K: string; R: string };
  riskType: Record<Lang, string[]>;
  missingProof: Record<Lang, string[]>;
  requiredVerification: Record<Lang, string[]>;
  actionGate: Gate;
  replaySummary: Record<Lang, string>;
}

export interface ModuleBundle {
  key: ModuleKey;
  title: Record<Lang, string>;
  intro: Record<Lang, string>;
  samples: SampleCase[];
}

const buildPipeline = (compiler: string, cal: string, scbkr: string, rlock: string, v: string, verdict: string) => ({
  zh: [
    { node: 'INPUT OBJECT', result: '案例輸入物件' },
    { node: 'W / I / F Compiler', result: compiler },
    { node: 'CAL', result: cal },
    { node: 'SCBKR', result: scbkr },
    { node: 'R-Lock', result: rlock },
    { node: 'VOID', result: v },
    { node: 'Verdict', result: verdict }
  ],
  en: [
    { node: 'INPUT OBJECT', result: 'Sample input object' },
    { node: 'W / I / F Compiler', result: compiler },
    { node: 'CAL', result: cal },
    { node: 'SCBKR', result: scbkr },
    { node: 'R-Lock', result: rlock },
    { node: 'VOID', result: v },
    { node: 'Verdict', result: verdict }
  ]
});

export const moduleBundles: ModuleBundle[] = [
  {
    key: 'website',
    title: { zh: 'Website', en: 'Website' },
    intro: {
      zh: '審計網站、頁面、文章與媒體內容如何建立責任鏈與決策承擔關係。',
      en: 'Audit how websites, pages, articles, and media objects establish responsibility-chain integrity before decisions are acted on.'
    },
    samples: [
      {
        id: 'w1',
        name: { zh: 'Business Media Article', en: 'Business Media Article' },
        shortDescription: {
          zh: '借用企業/名人權威與評論 framing，但承擔窗口偏弱。',
          en: 'Authority-heavy business framing with weak named accountability window.'
        },
        objectType: { zh: '網站媒體文章物件', en: 'Website media article object' },
        pipeline: buildPipeline(
          'authority-heavy media object',
          'comment + authority, weak liability',
          'S pass / C pass / B pass / K partial / R weak',
          'medium escalation',
          'not sufficient for decision trust',
          'WARN'
        ),
        cal: {
          zh: { comment: '高評論導向', authority: '高', liability: '弱', misalignmentCode: 'CAL-A3-L2' },
          en: { comment: 'Comment-heavy framing', authority: 'High', liability: 'Weak', misalignmentCode: 'CAL-A3-L2' }
        },
        scbkr: { S: 'pass', C: 'pass', B: 'pass', K: 'partial', R: 'weak' },
        riskType: {
          zh: ['Authority Borrow + Liability Gap', 'Boundary Weak / Responsibility Weak'],
          en: ['Authority Borrow + Liability Gap', 'Boundary Weak / Responsibility Weak']
        },
        missingProof: {
          zh: ['具名責任窗口缺失', '來源追責鏈不足'],
          en: ['Named owner missing', 'Source accountability not established']
        },
        requiredVerification: {
          zh: ['透過官方網站交叉驗證', '要求具名負責窗口'],
          en: ['Cross-verify on official website channels', 'Request named accountability owner']
        },
        actionGate: 'WARN',
        replaySummary: {
          zh: '權威與敘事足以影響決策，但責任承擔不足，應升級驗證後再採用。',
          en: 'Authority and framing can influence action, but accountability is incomplete; escalate verification before adoption.'
        }
      },
      {
        id: 'w2',
        name: { zh: 'Official-Looking Campaign Page', en: 'Official-Looking Campaign Page' },
        shortDescription: {
          zh: '版面看似正式，邊界模糊且缺乏可追責窗口。',
          en: 'Formal-looking campaign page with ambiguous boundary and weak accountability ownership.'
        },
        objectType: { zh: '宣傳型網站頁面物件', en: 'Campaign landing page object' },
        pipeline: buildPipeline(
          'official-looking campaign object',
          'authority signal present, liability contact missing',
          'S pass / C partial / B partial / K weak / R weak',
          'triggered',
          'insufficient evidence for trusted action',
          'WARN'
        ),
        cal: {
          zh: { comment: '主張強、邊界弱', authority: '中高', liability: '弱', misalignmentCode: 'CAL-B2-R3' },
          en: { comment: 'Strong claims, weak boundary', authority: 'Medium-high', liability: 'Weak', misalignmentCode: 'CAL-B2-R3' }
        },
        scbkr: { S: 'pass', C: 'partial', B: 'partial', K: 'weak', R: 'weak' },
        riskType: {
          zh: ['Visual Authority Without Verified Responsibility', 'Boundary Weak / Responsibility Weak'],
          en: ['Visual Authority Without Verified Responsibility', 'Boundary Weak / Responsibility Weak']
        },
        missingProof: {
          zh: ['官方回撥窗口缺失', '具名主責單位缺失', '回滾路徑缺失'],
          en: ['Official callback channel missing', 'Named owner missing', 'Rollback path missing']
        },
        requiredVerification: {
          zh: ['改由官方 APP / 官網二次驗證', '要求案件編號與責任窗口'],
          en: ['Use official app/website for second verification', 'Request case number and named owner']
        },
        actionGate: 'WARN',
        replaySummary: {
          zh: '雖有官方感，但缺乏可回撥與可追責資訊，僅可作為提示不得直接驅動關鍵決策。',
          en: 'Despite official-looking design, callback and accountability evidence is missing; use as a signal only, not as a decision driver.'
        }
      },
      {
        id: 'w3',
        name: { zh: 'Redirect-Heavy Unknown Page', en: 'Redirect-Heavy Unknown Page' },
        shortDescription: {
          zh: '多層 redirect 與來源不穩，責任鏈不連續。',
          en: 'Multi-hop redirects with unstable origin and discontinuous responsibility chain.'
        },
        objectType: { zh: '未知來源導轉頁面物件', en: 'Redirect-heavy unknown source object' },
        pipeline: buildPipeline(
          'redirect-heavy uncertain object',
          'source unstable, liability undefined',
          'S weak / C partial / B weak / K weak / R fail',
          'triggered',
          'object disqualified for decision trust',
          'BLOCK'
        ),
        cal: {
          zh: { comment: '來源漂移明顯', authority: '低', liability: '失敗', misalignmentCode: 'CAL-SRC-FAIL' },
          en: { comment: 'Severe source drift', authority: 'Low', liability: 'Fail', misalignmentCode: 'CAL-SRC-FAIL' }
        },
        scbkr: { S: 'weak', C: 'partial', B: 'weak', K: 'weak', R: 'fail' },
        riskType: {
          zh: ['Boundary Weak / Responsibility Weak', 'Source Traceability Failure'],
          en: ['Boundary Weak / Responsibility Weak', 'Source Traceability Failure']
        },
        missingProof: {
          zh: ['來源責任建立失敗', '官方窗口缺失', '回滾路徑缺失'],
          en: ['Source accountability not established', 'Official callback channel missing', 'Rollback path missing']
        },
        requiredVerification: {
          zh: ['停止採用此來源', '轉由官方管道重新取得資訊'],
          en: ['Stop action on this source', 'Re-acquire information through official channels']
        },
        actionGate: 'BLOCK',
        replaySummary: {
          zh: '來源與責任鏈皆不穩定，無法支撐任何高成本決策，應直接阻擋。',
          en: 'Source and accountability chain are unstable; object cannot support high-cost decisions and should be blocked.'
        }
      }
    ]
  },
  {
    key: 'image',
    title: { zh: 'Image', en: 'Image' },
    intro: {
      zh: '審計圖像、公告與截圖的視覺權威是否對應到可驗證責任窗口。',
      en: 'Audit whether visual authority in notices/screenshots is backed by verifiable responsibility and callback paths.'
    },
    samples: [
      {
        id: 'i1',
        name: { zh: 'Official-Looking Notice', en: 'Official-Looking Notice' },
        shortDescription: {
          zh: '像官方公告，Logo 與權威感強，但無官方回撥窗口。',
          en: 'Official-looking notice with strong logo authority but no verified callback window.'
        },
        objectType: { zh: '視覺公告物件', en: 'Visual notice object' },
        pipeline: buildPipeline(
          'visual authority notice object',
          'authority high, liability contact absent',
          'S pass / C partial / B pass / K weak / R weak',
          'medium escalation',
          'insufficient as stand-alone evidence',
          'WARN'
        ),
        cal: {
          zh: { comment: '視覺權威明顯', authority: '高', liability: '弱', misalignmentCode: 'CAL-IMG-AUTH' },
          en: { comment: 'Strong visual authority', authority: 'High', liability: 'Weak', misalignmentCode: 'CAL-IMG-AUTH' }
        },
        scbkr: { S: 'pass', C: 'partial', B: 'pass', K: 'weak', R: 'weak' },
        riskType: {
          zh: ['Visual Authority Without Verified Responsibility'],
          en: ['Visual Authority Without Verified Responsibility']
        },
        missingProof: {
          zh: ['官方回撥窗口缺失', '具名窗口缺失'],
          en: ['Official callback channel missing', 'Named owner missing']
        },
        requiredVerification: {
          zh: ['以官方電話或官網再次確認', '要求可回覆案件編號'],
          en: ['Verify through official phone/website channel', 'Request traceable case number']
        },
        actionGate: 'WARN',
        replaySummary: {
          zh: '視覺說服力高但承擔鏈不足，需透過正式通道確認後才可採用。',
          en: 'Visual persuasion is high but responsibility chain is incomplete; confirm via official channels before action.'
        }
      },
      {
        id: 'i2',
        name: { zh: 'QR Poster With Urgency', en: 'QR Poster With Urgency' },
        shortDescription: {
          zh: '催促感與 CTA 強，行動成本高，承擔位不足。',
          en: 'Urgent CTA via QR with high action cost and insufficient accountability positioning.'
        },
        objectType: { zh: 'QR 促動海報物件', en: 'QR urgency poster object' },
        pipeline: buildPipeline(
          'urgency-driven visual CTA object',
          'urgency high, accountability low',
          'S weak / C pass / B partial / K weak / R fail',
          'triggered',
          'risk concentration exceeds tolerance',
          'BLOCK'
        ),
        cal: {
          zh: { comment: '高催促 + 高成本行動', authority: '中', liability: '失敗', misalignmentCode: 'CAL-URG-RISK' },
          en: { comment: 'High urgency + high-cost action', authority: 'Medium', liability: 'Fail', misalignmentCode: 'CAL-URG-RISK' }
        },
        scbkr: { S: 'weak', C: 'pass', B: 'partial', K: 'weak', R: 'fail' },
        riskType: {
          zh: ['Sensitive Action Without Official Verification', 'Authority Borrow + Liability Gap'],
          en: ['Sensitive Action Without Official Verification', 'Authority Borrow + Liability Gap']
        },
        missingProof: {
          zh: ['官方二次驗證鏈缺失', '回滾路徑缺失'],
          en: ['Official second-verification chain missing', 'Rollback path missing']
        },
        requiredVerification: {
          zh: ['停止掃碼流程，改走官方 APP', '確認具名負責窗口'],
          en: ['Stop QR flow and switch to official app', 'Confirm named responsibility owner']
        },
        actionGate: 'BLOCK',
        replaySummary: {
          zh: '高催促引導高成本操作且無正式驗證鏈，應直接阻擋。',
          en: 'Urgent visual CTA pushes high-cost action without verified chain; block immediately.'
        }
      },
      {
        id: 'i3',
        name: { zh: 'Fake UI Screenshot', en: 'Fake UI Screenshot' },
        shortDescription: {
          zh: '仿銀行/平台介面並要求登入驗證，缺 callback/rollback。',
          en: 'Bank/platform-like UI screenshot requesting login/verification without callback/rollback safeguards.'
        },
        objectType: { zh: '仿製介面截圖物件', en: 'Imitated UI screenshot object' },
        pipeline: buildPipeline(
          'interface-mimic sensitive object',
          'authority mimic + verification gap',
          'S weak / C partial / B weak / K weak / R fail',
          'triggered',
          'ineligible for decision action',
          'BLOCK'
        ),
        cal: {
          zh: { comment: '權威仿冒與驗證缺口並存', authority: '中高', liability: '失敗', misalignmentCode: 'CAL-MIMIC-FAIL' },
          en: { comment: 'Authority mimic with verification gap', authority: 'Medium-high', liability: 'Fail', misalignmentCode: 'CAL-MIMIC-FAIL' }
        },
        scbkr: { S: 'weak', C: 'partial', B: 'weak', K: 'weak', R: 'fail' },
        riskType: {
          zh: ['Sensitive Action Without Official Verification', 'Visual Authority Without Verified Responsibility'],
          en: ['Sensitive Action Without Official Verification', 'Visual Authority Without Verified Responsibility']
        },
        missingProof: {
          zh: ['官方 callback 缺失', 'rollback 機制缺失', '來源責任鏈缺失'],
          en: ['Official callback missing', 'Rollback mechanism missing', 'Source accountability missing']
        },
        requiredVerification: {
          zh: ['停止輸入登入資訊', '改走官方 app 內驗證流程'],
          en: ['Stop entering credentials', 'Use in-app official verification flow']
        },
        actionGate: 'BLOCK',
        replaySummary: {
          zh: '此類仿製介面不具備可信責任鏈，任何敏感操作都應被阻擋。',
          en: 'This interface-mimic object lacks trusted responsibility chain; sensitive actions must be blocked.'
        }
      }
    ]
  },
  {
    key: 'finance',
    title: { zh: 'Finance', en: 'Finance' },
    intro: {
      zh: '審計交易與授權要求是否具備正式驗證鏈、責任窗口與可回滾能力。',
      en: 'Audit whether transaction/authorization requests have official verification chains, accountability windows, and rollback readiness.'
    },
    samples: [
      {
        id: 'f1',
        name: { zh: 'Urgent Transfer Request', en: 'Urgent Transfer Request' },
        shortDescription: {
          zh: '要求快速匯款，主體與承擔不清楚。',
          en: 'Urgent transfer demand with unclear ownership and accountability.'
        },
        objectType: { zh: '高風險轉帳請求物件', en: 'High-risk transfer request object' },
        pipeline: buildPipeline(
          'sensitive transaction object',
          'authority borrow + liability gap',
          'S weak / C partial / B partial / K weak / R fail',
          'triggered',
          'block eligibility',
          'BLOCK'
        ),
        cal: {
          zh: { comment: '急迫性高、主責不明', authority: '中', liability: '失敗', misalignmentCode: 'CAL-FIN-URG' },
          en: { comment: 'High urgency with unclear owner', authority: 'Medium', liability: 'Fail', misalignmentCode: 'CAL-FIN-URG' }
        },
        scbkr: { S: 'weak', C: 'partial', B: 'partial', K: 'weak', R: 'fail' },
        riskType: {
          zh: ['Sensitive Action Without Official Verification', 'Authority Borrow + Liability Gap'],
          en: ['Sensitive Action Without Official Verification', 'Authority Borrow + Liability Gap']
        },
        missingProof: {
          zh: ['官方回撥窗口缺失', '具名主責缺失', '回滾路徑缺失'],
          en: ['Official callback channel missing', 'Named owner missing', 'Rollback path missing']
        },
        requiredVerification: {
          zh: ['先透過官方電話確認', '要求具名主管與案件編號', '確認回滾流程後再處理'],
          en: ['Verify via official phone line first', 'Request named executive + case number', 'Confirm rollback procedure before processing']
        },
        actionGate: 'BLOCK',
        replaySummary: {
          zh: '此請求會直接觸發高成本資產流動，但責任鏈與回滾能力不足，需阻擋。',
          en: 'This request drives high-cost asset movement while accountability and rollback readiness are insufficient; block it.'
        }
      },
      {
        id: 'f2',
        name: { zh: 'OTP / Login Verification Request', en: 'OTP / Login Verification Request' },
        shortDescription: {
          zh: '要求提供 OTP 或登入驗證，權威感高但無正式驗證鏈。',
          en: 'Requests OTP/login verification with strong authority cues but no official verification chain.'
        },
        objectType: { zh: '敏感驗證授權物件', en: 'Sensitive verification authorization object' },
        pipeline: buildPipeline(
          'credential-sensitive authorization object',
          'authority high, verification chain absent',
          'S weak / C partial / B weak / K weak / R fail',
          'triggered',
          'credential-action disqualified',
          'BLOCK'
        ),
        cal: {
          zh: { comment: '敏感憑證要求', authority: '高', liability: '失敗', misalignmentCode: 'CAL-OTP-FAIL' },
          en: { comment: 'Sensitive credential request', authority: 'High', liability: 'Fail', misalignmentCode: 'CAL-OTP-FAIL' }
        },
        scbkr: { S: 'weak', C: 'partial', B: 'weak', K: 'weak', R: 'fail' },
        riskType: {
          zh: ['Sensitive Action Without Official Verification'],
          en: ['Sensitive Action Without Official Verification']
        },
        missingProof: {
          zh: ['官方二次驗證鏈缺失', '來源責任鏈未建立'],
          en: ['Official second-verification chain missing', 'Source accountability not established']
        },
        requiredVerification: {
          zh: ['改走官方 app 安全中心', '停止在非官方視窗提供 OTP'],
          en: ['Switch to official app security center', 'Stop providing OTP in non-official channels']
        },
        actionGate: 'BLOCK',
        replaySummary: {
          zh: '憑證型操作缺乏官方驗證鏈時，不可授權。',
          en: 'Credential-level operations without official verification chain must not be authorized.'
        }
      },
      {
        id: 'f3',
        name: { zh: 'Executive-Style Authorization Request', en: 'Executive-Style Authorization Request' },
        shortDescription: {
          zh: '借主管權威要求授權，成本落在執行者，追責與回滾不足。',
          en: 'Executive-style authority request shifts cost to operator with weak accountability and rollback guarantees.'
        },
        objectType: { zh: '高層授權請求物件', en: 'Executive-style authorization object' },
        pipeline: buildPipeline(
          'hierarchical authority authorization object',
          'authority borrow, owner trace incomplete',
          'S pass / C partial / B partial / K weak / R weak',
          'high escalation',
          'pending strict verification before action',
          'WARN'
        ),
        cal: {
          zh: { comment: '上位權威借用', authority: '高', liability: '弱', misalignmentCode: 'CAL-EXEC-GAP' },
          en: { comment: 'Borrowed executive authority', authority: 'High', liability: 'Weak', misalignmentCode: 'CAL-EXEC-GAP' }
        },
        scbkr: { S: 'pass', C: 'partial', B: 'partial', K: 'weak', R: 'weak' },
        riskType: {
          zh: ['Authority Borrow + Liability Gap', 'Boundary Weak / Responsibility Weak'],
          en: ['Authority Borrow + Liability Gap', 'Boundary Weak / Responsibility Weak']
        },
        missingProof: {
          zh: ['具名授權主責缺失', '回滾方案不完整'],
          en: ['Named authorization owner missing', 'Rollback plan incomplete']
        },
        requiredVerification: {
          zh: ['要求正式授權文件', '二次確認授權窗口與回滾機制'],
          en: ['Request formal authorization document', 'Double-verify authorization window and rollback mechanism']
        },
        actionGate: 'WARN',
        replaySummary: {
          zh: '可進入升級審核，但在完成責任窗口與回滾驗證前不可直接執行。',
          en: 'Can enter escalated review, but execution must wait until accountability window and rollback checks are completed.'
        }
      }
    ]
  }
];
