window.CH = {
  n: 14,
  part: { ko: '제4부 · 명령법과 비한정형', en: 'Part IV · Imperative & Non-finite Forms' },
  title: { ko: '명령법', en: 'The Imperative' },
  topics: [{ ko: '제1명령법 (현재)', en: 'First (present) imperative' }, { ko: '제2명령법 (-tō)', en: 'Second imperative (-tō)' }, { ko: 'dīc, dūc, fac, fer', en: 'dīc, dūc, fac, fer' }, { ko: '부정 명령 nōlī + 부정사', en: 'Negative: nōlī + infinitive' }],
  intro: { ko: '라틴어 명령법은 두 가지예요. 일상적인 "~해!"는 제1명령법, 법률·규정처럼 "~할지어다"는 제2명령법(-tō).', en: 'Latin has two imperatives: the everyday first imperative (“do!”) and the second imperative in -tō, typical of laws and rules (“thou shalt…”).' },
  sec: [
    {
      h: { ko: '제1명령법 (현재 명령법)', en: 'First (present) imperative' },
      b: {
        ko: `<ul><li><b>능동 2인칭 단수</b> = 현재 어간: <span class="la">amā, monē, rege, audī, cape</span> (제3·혼합은 -e)</li>
        <li><b>능동 2인칭 복수</b> = 어간 + <span class="la">-te</span>: <span class="la">amāte, monēte, regite, audīte, capite</span></li>
        <li><b>수동</b> 2인칭 단수는 현재 능동 부정사와 같은 모양(<span class="la">amāre</span> "사랑받아라"), 복수는 직설법 2인칭 복수와 같아요(<span class="la">amāminī</span>).</li></ul>
        <div class="box warn">2인칭 단수가 짧아지는 4개: <span class="la">dīc</span>(말해라), <span class="la">dūc</span>(이끌어라), <span class="la">fac</span>(해라), <span class="la">fer</span>(날라라). <span class="la">ferō</span>는 복수도 <span class="la">ferte</span>.</div>`,
        en: `<ul><li><b>Active 2nd sg.</b> = present stem: <span class="la">amā, monē, rege, audī, cape</span> (3rd/mixed in -e)</li>
        <li><b>Active 2nd pl.</b> = stem + <span class="la">-te</span>: <span class="la">amāte, monēte, regite, audīte, capite</span></li>
        <li><b>Passive</b> 2nd sg. looks like the present active infinitive (<span class="la">amāre</span> “be loved”); the plural equals the indicative 2nd pl. (<span class="la">amāminī</span>).</li></ul>
        <div class="box warn">Four short 2nd sg. forms: <span class="la">dīc</span> (say), <span class="la">dūc</span> (lead), <span class="la">fac</span> (do), <span class="la">fer</span> (carry). <span class="la">ferō</span> also has plural <span class="la">ferte</span>.</div>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'imp.act.pres' }, { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'imp.pass.pres' }]
    },
    {
      h: { ko: '제2명령법 (미래 명령법)', en: 'Second (future) imperative' },
      b: {
        ko: `<p>능동: <span class="la">-tō</span>(2·3인칭 단수), <span class="la">-tōte</span>(2인칭 복수), <span class="la">-ntō</span>(3인칭 복수). 수동: <span class="la">-tor, -tor, -ntor</span>. 법률, 계약, 규정, 격언 같은 "엄숙한" 명령에 쓰고, 시에서도 보여요. 몇몇 동사는 이 형태만 써요: <span class="la">estō</span>(~이어라), <span class="la">mementō</span>(기억하라), <span class="la">scītō</span>(알아라).</p>`,
        en: `<p>Active: <span class="la">-tō</span> (2nd & 3rd sg.), <span class="la">-tōte</span> (2nd pl.), <span class="la">-ntō</span> (3rd pl.). Passive: <span class="la">-tor, -tor, -ntor</span>. Used in laws, contracts, rules and maxims, and in poetry. Some verbs prefer it: <span class="la">estō</span> (be), <span class="la">mementō</span> (remember), <span class="la">scītō</span> (know).</p>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'imp.act.fut' }],
      exs: [{ la: 'Vīcīnīs bonus estō.', ko: '이웃에게 선하게 대하라.', en: 'Be good to your neighbours.' }, { la: 'Mōribus antīquīs vīvuntō.', ko: '그들은 옛 관습대로 살지어다.', en: 'Let them live by the old customs.' }]
    },
    {
      h: { ko: '명령법의 쓰임과 부정 명령', en: 'Uses and negative commands' },
      b: {
        ko: `<p>긍정 명령과 신에게 드리는 기도에 써요. <b>부정 명령</b>("~하지 마라")은 세 가지 방법:</p>
        <ol><li><span class="la">nōlī / nōlīte</span> + 부정사 (가장 흔함): <span class="la">Nōlī timēre!</span> 두려워하지 마!</li>
        <li><span class="la">nē</span> + 완료 접속법: <span class="la">Nē timueris!</span> 두려워하지 마라!</li>
        <li><span class="la">cavē (nē)</span> + 현재 접속법: <span class="la">Cavē cadās!</span> 넘어지지 않게 조심해!</li></ol>
        <p>시에서는 <span class="la">nē</span> + 명령법도 보여요.</p>`,
        en: `<p>Used for positive commands and prayers to gods. <b>Negative commands</b> (“don’t…”) use:</p>
        <ol><li><span class="la">nōlī / nōlīte</span> + infinitive (most common): <span class="la">Nōlī timēre!</span> Don’t be afraid!</li>
        <li><span class="la">nē</span> + perfect subjunctive: <span class="la">Nē timueris!</span> Do not fear!</li>
        <li><span class="la">cavē (nē)</span> + present subjunctive: <span class="la">Cavē cadās!</span> Mind you don’t fall!</li></ol>
        <p>Poets also use <span class="la">nē</span> + imperative.</p>`
      },
      exs: [
        { la: 'Carpe diem.', ko: '오늘을 붙잡아라.', en: 'Seize the day.' },
        { la: 'Fēstīnā lentē.', ko: '천천히 서둘러라.', en: 'Make haste slowly.' },
        { la: 'Dīc mihi vērum.', ko: '나에게 진실을 말해 줘.', en: 'Tell me the truth.' },
        { la: 'Nōlīte hoc facere!', ko: '(너희) 이것을 하지 마라!', en: 'Don’t do this (all of you)!' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'imp.act.pres.0' },
    { t: 'gen', v: 'moneo', k: 'imp.act.pres.1' },
    { t: 'gen', v: 'rego', k: 'imp.act.pres.0' },
    { t: 'gen', v: 'rego', k: 'imp.act.pres.1' },
    { t: 'gen', v: 'audio', k: 'imp.act.pres.1' },
    { t: 'gen', v: 'capio', k: 'imp.act.pres.0' },
    { t: 'gen', v: 'duco', k: 'imp.act.pres.0' },
    { t: 'gen', v: 'facio', k: 'imp.act.pres.0' },
    { t: 'gen', v: 'fero', k: 'imp.act.pres.1' },
    { t: 'gen', v: 'mitto', k: 'imp.act.pres.1' },
    { t: 'gen', v: 'amo', k: 'imp.act.fut.3' },
    { t: 'gen', v: 'sum', k: 'imp.act.fut.0' },
    { t: 'fill', q: { ko: '“말해라!” (dīcō의 명령법 2인칭 단수)', en: '“Say!” (dīcō, imperative 2nd sg.)' }, a: ['dīc'] },
    { t: 'fill', q: { ko: '“두려워하지 마라!” (한 사람에게) — ___ timēre!', en: '“Don’t be afraid!” (to one person) — ___ timēre!' }, a: ['nōlī'] },
    { t: 'fill', q: { ko: '“울지 마라!” (여러 사람에게) — ___ flēre!', en: '“Don’t cry!” (to several people) — ___ flēre!' }, a: ['nōlīte'] },
    { t: 'mc', q: { ko: '법률 문구처럼 엄숙한 명령에 주로 쓰는 형태는?', en: 'Which form is typical of solemn commands such as laws?' }, o: [{ ko: '제2명령법 (-tō)', en: 'second imperative (-tō)' }, { ko: '제1명령법', en: 'first imperative' }, { ko: '현재 접속법', en: 'present subjunctive' }, { ko: '미래완료', en: 'future perfect' }], a: 0 },
    { t: 'mc', q: { ko: '“Nē timueris!”의 timueris는?', en: 'In “Nē timueris!”, timueris is…' }, o: [{ ko: '완료 접속법', en: 'perfect subjunctive' }, { ko: '미래완료 직설법', en: 'future perfect indicative' }, { ko: '현재 명령법', en: 'present imperative' }, { ko: '과거완료 접속법', en: 'pluperfect subjunctive' }], a: 0 },
    { t: 'mc', q: { ko: '수동 명령법 2인칭 단수 amāre는 어떤 형태와 모양이 같나요?', en: 'The passive imperative amāre looks like…' }, o: [{ ko: '현재 능동 부정사', en: 'the present active infinitive' }, { ko: '현재 접속법', en: 'the present subjunctive' }, { ko: '목적분사', en: 'the supine' }, { ko: '미래 직설법', en: 'the future indicative' }], a: 0 }
  ]
};
