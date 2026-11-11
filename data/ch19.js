window.CH = {
  n: 19,
  part: { ko: '제5부 · 특별한 동사들', en: 'Part V · Atypical Verbs' },
  title: { ko: '불규칙 동사: sum, possum, eō, ferō, volō, nōlō, mālō, fīō, edō', en: 'Irregular Verbs: sum, possum, eō, ferō, volō, nōlō, mālō, fīō, edō' },
  topics: [{ ko: 'sum과 possum', en: 'sum & possum' }, { ko: 'eō와 합성어', en: 'eō and compounds' }, { ko: 'ferō (fers, fert, ferre)', en: 'ferō (fers, fert, ferre)' }, { ko: 'volō · nōlō · mālō · fīō', en: 'volō · nōlō · mālō · fīō' }],
  intro: { ko: '가장 자주 쓰이는 동사들이 가장 불규칙해요. 하지만 불규칙한 곳은 주로 현재 계열뿐이고, 완료 계열은 대부분 규칙적이에요.', en: 'The most common verbs are the most irregular — but the irregularity is mostly in the present system; the perfect system is largely regular.' },
  sec: [
    {
      h: { ko: 'sum (~이다)과 possum (~할 수 있다)', en: 'sum (be) and possum (be able)' },
      b: {
        ko: `<p><span class="la">sum, esse, fuī, futūrus</span>. 완료 계열은 <span class="la">fu-</span>에서 규칙적으로: <span class="la">fuī, fueram, fuerō, fuerim, fuissem</span>. 미래 부정사 <span class="la">futūrus esse = fore</span>, 미완료 접속법에는 <span class="la">forem</span>이라는 다른 형태도 있어요.</p>
        <p><span class="la">possum, posse, potuī</span> = <span class="la">pot-</span>(할 수 있는) + <span class="la">sum</span>. s 앞에서는 <span class="la">pos-</span>, 모음 앞에서는 <span class="la">pot-</span>: <span class="la">pos-sum, pot-es, pot-est, pos-sumus, pot-estis, pos-sunt</span>. 명령법·미래분사는 없어요.</p>`,
        en: `<p><span class="la">sum, esse, fuī, futūrus</span>. The perfect system is regular from <span class="la">fu-</span>: <span class="la">fuī, fueram, fuerō, fuerim, fuissem</span>. Future infinitive <span class="la">futūrus esse = fore</span>; imperfect subjunctive also <span class="la">forem</span>.</p>
        <p><span class="la">possum, posse, potuī</span> = <span class="la">pot-</span> (able) + <span class="la">sum</span>: <span class="la">pos-</span> before s, <span class="la">pot-</span> before a vowel: <span class="la">pos-sum, pot-es, pot-est, pos-sumus, pot-estis, pos-sunt</span>. No imperative or future participle.</p>`
      },
      para: [{ v: ['sum', 'possum'], k: 'ind.act.pres' }, { v: ['sum', 'possum'], k: 'ind.act.impf' }, { v: ['sum', 'possum'], k: 'ind.act.fut' }, { v: ['sum', 'possum'], k: 'subj.act.pres' }]
    },
    {
      h: { ko: 'eō (가다)', en: 'eō (go)' },
      b: {
        ko: `<p><span class="la">eō, īre, iī (īvī), itum</span>. 어간 <span class="la">ī-</span>가 a, o, u 앞에서는 <span class="la">e-</span>로 바뀌어요: <span class="la">eō, eunt, eam, euntem</span>. 미래는 제1·2활용처럼 <span class="la">ībō, ībis</span>!</p>
        <p>완료 <span class="la">iī</span>의 <span class="la">ii</span>는 s 앞에서 <span class="la">ī</span>로 줄어요: <span class="la">īstī, īstis, īsse, īssem</span>. 합성어도 같아요: <span class="la">abeō</span>(떠나다), <span class="la">redeō</span>(돌아오다), <span class="la">subeō</span>(떠맡다), <span class="la">pereō</span>(죽다). 타동사 합성어(<span class="la">subeō</span>)는 수동태도 있어요.</p>`,
        en: `<p><span class="la">eō, īre, iī (īvī), itum</span>. The stem <span class="la">ī-</span> becomes <span class="la">e-</span> before a, o, u: <span class="la">eō, eunt, eam, euntem</span>. The future goes like the 1st/2nd conj.: <span class="la">ībō, ībis</span>!</p>
        <p>In the perfect <span class="la">ii</span> contracts to <span class="la">ī</span> before s: <span class="la">īstī, īstis, īsse, īssem</span>. Compounds behave alike: <span class="la">abeō</span> (go away), <span class="la">redeō</span> (return), <span class="la">subeō</span> (undergo), <span class="la">pereō</span> (perish). Transitive compounds like <span class="la">subeō</span> have a passive.</p>`
      },
      para: [{ v: ['eo', 'subeo'], k: 'ind.act.pres' }, { v: ['eo', 'subeo'], k: 'ind.act.fut' }, { v: ['eo', 'subeo'], k: 'ind.act.perf' }]
    },
    {
      h: { ko: 'ferō (나르다)', en: 'ferō (carry)' },
      b: {
        ko: `<p><span class="la">ferō, ferre, tulī, lātum</span> — 주요 부분 자체가 완전히 달라요! 현재 계열은 제3활용과 같지만 연결 모음이 빠지는 곳이 있어요: <span class="la">fers, fert, fertis; ferris, fertur; ferre, ferrī; fer, ferte</span>. 미완료 접속법 <span class="la">ferrem</span>.</p>
        <p>합성어는 접두사가 바뀌어요: <span class="la">conferō, conferre, contulī, collātum</span> / <span class="la">īnferō, intulī, illātum</span> / <span class="la">offerō, obtulī, oblātum</span> / <span class="la">referō, rettulī, relātum</span> / <span class="la">auferō, abstulī, ablātum</span>.</p>`,
        en: `<p><span class="la">ferō, ferre, tulī, lātum</span> — wildly different principal parts! The present system is 3rd-conjugation but drops the linking vowel in places: <span class="la">fers, fert, fertis; ferris, fertur; ferre, ferrī; fer, ferte</span>. Imperfect subjunctive <span class="la">ferrem</span>.</p>
        <p>Compounds change their prefix: <span class="la">conferō, conferre, contulī, collātum</span> / <span class="la">īnferō, intulī, illātum</span> / <span class="la">offerō, obtulī, oblātum</span> / <span class="la">referō, rettulī, relātum</span> / <span class="la">auferō, abstulī, ablātum</span>.</p>`
      },
      para: [{ v: ['fero', 'rego'], k: 'ind.act.pres' }, { v: ['fero', 'rego'], k: 'ind.pass.pres' }]
    },
    {
      h: { ko: 'volō · nōlō · mālō, fīō, edō', en: 'volō · nōlō · mālō, fīō, edō' },
      b: {
        ko: `<ul><li><span class="la">volō, velle, voluī</span> 원하다 — <span class="la">vīs, vult, vultis</span>; 접속법 <span class="la">velim, vellem</span>.</li>
        <li><span class="la">nōlō, nōlle, nōluī</span> 원치 않다 = <span class="la">nē + volō</span> — <span class="la">nōn vīs, nōn vult</span>. 명령법 <span class="la">nōlī, nōlīte</span>는 부정 명령에 써요!</li>
        <li><span class="la">mālō, mālle, māluī</span> 더 원하다 = <span class="la">magis + volō</span> — <span class="la">māvīs, māvult</span>.</li>
        <li><span class="la">fīō, fierī, factus sum</span> 되다, 일어나다 — <span class="la">faciō</span>의 현재 계열 수동을 대신해요: <span class="la">fit</span> "만들어진다, 일어난다".</li>
        <li><span class="la">edō, ēsse, ēdī, ēsum</span> 먹다 — <span class="la">sum</span>과 비슷한 형태가 있어 장음으로 구별: <span class="la">ēst</span>(그는 먹는다) vs <span class="la">est</span>(그는 ~이다).</li></ul>`,
        en: `<ul><li><span class="la">volō, velle, voluī</span> want — <span class="la">vīs, vult, vultis</span>; subjunctive <span class="la">velim, vellem</span>.</li>
        <li><span class="la">nōlō, nōlle, nōluī</span> not want = <span class="la">nē + volō</span> — <span class="la">nōn vīs, nōn vult</span>. Imperative <span class="la">nōlī, nōlīte</span> makes negative commands!</li>
        <li><span class="la">mālō, mālle, māluī</span> prefer = <span class="la">magis + volō</span> — <span class="la">māvīs, māvult</span>.</li>
        <li><span class="la">fīō, fierī, factus sum</span> become, happen — serves as the present-system passive of <span class="la">faciō</span>: <span class="la">fit</span> “is made, happens”.</li>
        <li><span class="la">edō, ēsse, ēdī, ēsum</span> eat — some forms resemble <span class="la">sum</span>, distinguished by length: <span class="la">ēst</span> (he eats) vs <span class="la">est</span> (he is).</li></ul>`
      },
      para: [{ v: ['volo', 'nolo', 'malo', 'fio', 'edo'], k: 'ind.act.pres' }, { v: ['volo', 'nolo', 'malo', 'fio'], k: 'subj.act.pres' }],
      exs: [
        { la: 'Quod vīs, id possum.', ko: '네가 원하는 것을 나는 할 수 있다.', en: 'What you want, I can do.' },
        { la: 'Mālō esse quam vidērī.', ko: '나는 그렇게 보이기보다 그렇게 존재하고 싶다.', en: 'I prefer to be rather than to seem.' },
        { la: 'Fīat lūx.', ko: '빛이 있으라.', en: 'Let there be light.' },
        { la: 'Ēst ut vīvat, nōn vīvit ut edat.', ko: '그는 살기 위해 먹지, 먹기 위해 살지 않는다.', en: 'He eats to live; he does not live to eat.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'sum', k: 'ind.act.impf.3' },
    { t: 'gen', v: 'sum', k: 'ind.act.fut.5' },
    { t: 'gen', v: 'sum', k: 'ind.act.perf.1' },
    { t: 'gen', v: 'possum', k: 'ind.act.pres.1' },
    { t: 'gen', v: 'possum', k: 'ind.act.pres.3' },
    { t: 'gen', v: 'possum', k: 'ind.act.impf.2' },
    { t: 'gen', v: 'eo', k: 'ind.act.pres.5' },
    { t: 'gen', v: 'eo', k: 'ind.act.fut.0' },
    { t: 'gen', v: 'eo', k: 'subj.act.pres.2' },
    { t: 'gen', v: 'fero', k: 'ind.act.pres.2' },
    { t: 'gen', v: 'fero', k: 'ind.pass.pres.1' },
    { t: 'gen', v: 'volo', k: 'ind.act.pres.2' },
    { t: 'gen', v: 'nolo', k: 'ind.act.pres.3' },
    { t: 'gen', v: 'malo', k: 'ind.act.pres.1' },
    { t: 'gen', v: 'fio', k: 'ind.act.pres.2' },
    { t: 'parse', v: 'volo', k: 'subj.act.pres.0' },
    { t: 'mc', q: { ko: '“ēst”(장음 ē)는 무슨 뜻인가요?', en: 'What does ēst (long ē) mean?' }, o: [{ ko: '그는 먹는다', en: 'he eats' }, { ko: '그는 ~이다', en: 'he is' }, { ko: '그는 간다', en: 'he goes' }, { ko: '그는 원한다', en: 'he wants' }], a: 0 },
    { t: 'mc', q: { ko: 'ferō의 완료형은?', en: 'The perfect of ferō is…' }, o: ['tulī', 'ferī', 'fērī', 'lātī'], a: 0 },
    { t: 'mc', q: { ko: 'referō의 완료형은?', en: 'The perfect of referō is…' }, o: ['rettulī', 'retulī', 'referī', 'relātī'], a: 0 },
    { t: 'mc', q: { ko: '“Fīat lūx.”의 fīat는?', en: 'In “Fīat lūx”, fīat is…' }, o: [{ ko: 'fīō의 현재 접속법 3인칭 단수 (권유)', en: 'present subjunctive 3rd sg. of fīō (jussive)' }, { ko: 'faciō의 현재 직설법', en: 'present indicative of faciō' }, { ko: 'fīō의 미래', en: 'future of fīō' }, { ko: '명령법', en: 'imperative' }], a: 0 }
  ]
};
