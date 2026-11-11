window.CH = {
  n: 5,
  part: { ko: '제2부 · 직설법', en: 'Part II · The Indicative' },
  title: { ko: '미래 직설법과 미래 부정사', en: 'The Future Indicative & Future Infinitives' },
  topics: [{ ko: '-bō 유형 vs -am 유형', en: '-bō type vs -am type' }, { ko: '미래분사 -ūrus', en: 'Future participle -ūrus' }, { ko: '미래 부정사', en: 'Future infinitives' }, { ko: 'fore ut', en: 'fore ut' }],
  intro: { ko: '미래 시제는 두 가지 방식으로 만들어요. 제1·2활용은 "-bō, -bis, -bit", 제3·4·혼합활용은 "-am, -ēs, -et". 이 차이만 잡으면 끝!', en: 'The future comes in two flavours: “-bō, -bis, -bit” for the 1st and 2nd conjugations and “-am, -ēs, -et” for the 3rd, 4th and mixed.' },
  sec: [
    {
      h: { ko: '능동태와 수동태 만들기', en: 'Active and passive' },
      b: {
        ko: `<ul><li><b>제1·2활용</b>: 긴 어간 모음 + <span class="la">-bō, -bis, -bit, -bimus, -bitis, -bunt</span>; 수동 <span class="la">-bor, -beris, -bitur, -bimur, -biminī, -buntur</span></li>
        <li><b>제3·4·혼합</b>: 현재 어간 + <span class="la">-am, -ēs, -et, -ēmus, -ētis, -ent</span>; 수동 <span class="la">-ar, -ēris, -ētur, -ēmur, -ēminī, -entur</span></li></ul>
        <div class="box warn"><b>헷갈리기 쉬운 것!</b> 제3활용 미래 <span class="la">reget</span>(그는 다스릴 것이다) vs 제2활용 현재 <span class="la">monet</span>(그는 경고한다). 또 <span class="la">regam</span>은 미래 1인칭이면서 현재 접속법 1인칭과 형태가 같아요.</div>`,
        en: `<ul><li><b>1st & 2nd</b>: long stem vowel + <span class="la">-bō, -bis, -bit, -bimus, -bitis, -bunt</span>; passive <span class="la">-bor, -beris, -bitur, -bimur, -biminī, -buntur</span></li>
        <li><b>3rd, 4th, mixed</b>: present stem + <span class="la">-am, -ēs, -et, -ēmus, -ētis, -ent</span>; passive <span class="la">-ar, -ēris, -ētur, -ēmur, -ēminī, -entur</span></li></ul>
        <div class="box warn"><b>Watch out!</b> 3rd-conj. future <span class="la">reget</span> (he will rule) looks like 2nd-conj. present <span class="la">monet</span> (he warns). And <span class="la">regam</span> is both future 1st sg. and present subjunctive 1st sg.</div>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'ind.act.fut' }, { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'ind.pass.fut' }]
    },
    {
      h: { ko: '미래분사와 미래 부정사', en: 'Future participle and infinitives' },
      b: {
        ko: `<ul><li><b>미래 능동 분사</b> = 목적분사 어간 + <span class="la">-ūrus, -ūra, -ūrum</span>: <span class="la">amātūrus</span> "사랑하려는, 사랑할".</li>
        <li><b>미래 능동 부정사</b> = 미래분사 + <span class="la">esse</span>: <span class="la">amātūrus esse</span> "사랑할 것이라는". 분사는 부정사의 주어와 성·수를 맞춰요. <span class="la">esse</span>는 자주 생략돼요.</li>
        <li><b>미래 수동 부정사</b> = 목적분사(-um) + <span class="la">īrī</span>(<span class="la">eō</span>의 현재 수동 부정사): <span class="la">amātum īrī</span> "사랑받게 될 것이라는". 목적분사는 명사라서 주어와 일치하지 <b>않아요</b>. 드물게 쓰여요.</li>
        <li>미래 <b>수동</b> 분사는 없어요.</li>
        <li><span class="la">sum</span>은 미래 부정사가 둘: <span class="la">futūrus esse = fore</span>. <span class="la">fore</span>는 라틴어에서 유일한 한 단어짜리 미래 부정사예요.</li>
        <li>미래 부정사 대신 <span class="la">fore ut / futūrum esse ut</span> + 접속법을 쓰기도 해요 (특히 목적분사가 없는 동사).</li></ul>`,
        en: `<ul><li><b>Future active participle</b> = supine stem + <span class="la">-ūrus, -ūra, -ūrum</span>: <span class="la">amātūrus</span> “about to love”.</li>
        <li><b>Future active infinitive</b> = future participle + <span class="la">esse</span>: <span class="la">amātūrus esse</span>. The participle agrees with the infinitive’s subject; <span class="la">esse</span> is often omitted.</li>
        <li><b>Future passive infinitive</b> = supine in -um + <span class="la">īrī</span> (present passive infinitive of <span class="la">eō</span>): <span class="la">amātum īrī</span>. The supine is a noun, so it does <b>not</b> agree. It is rare.</li>
        <li>There is no future <b>passive</b> participle.</li>
        <li><span class="la">sum</span> has two future infinitives: <span class="la">futūrus esse = fore</span> — the only one-word future infinitive.</li>
        <li><span class="la">fore ut / futūrum esse ut</span> + subjunctive can replace a future infinitive.</li></ul>`
      },
      nf: { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: ['part.fut', 'inf.act.fut', 'inf.pass.fut'] }
    },
    {
      h: { ko: '쓰임', en: 'Uses' },
      b: {
        ko: `<ul><li>앞으로 일어날 일. 영어의 <i>I will go / I will be going</i>의 구별은 없어요.</li>
        <li>가끔 <b>명령</b>의 뜻: "너는 ~하게 될 것이다 = ~해라".</li></ul>`,
        en: `<ul><li>What is expected to happen. Latin does not distinguish <i>I will go</i> and <i>I will be going</i>.</li>
        <li>Occasionally an <b>order</b>: “you will do …”.</li></ul>`
      },
      exs: [
        { la: 'Crās ad vīllam ībimus.', ko: '우리는 내일 별장에 갈 것이다.', en: 'Tomorrow we will go to the villa.' },
        { la: 'Nihil sine cōnsiliō faciēs.', ko: '너는 아무것도 계획 없이 하지 말 것이다. (=하지 마라)', en: 'You will do nothing without a plan. (= do nothing…)' },
        { la: 'Hostēs nostrōs ventūrōs esse putābant.', ko: '적들은 우리 군이 올 것이라고 생각했다.', en: 'The enemy thought that our men would come.' },
        { la: 'Spērō fore ut mox valeās.', ko: '네가 곧 건강해지기를 바란다.', en: 'I hope that you will soon be well.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'ind.act.fut.0' },
    { t: 'gen', v: 'moneo', k: 'ind.act.fut.3' },
    { t: 'gen', v: 'rego', k: 'ind.act.fut.2' },
    { t: 'gen', v: 'audio', k: 'ind.act.fut.1' },
    { t: 'gen', v: 'capio', k: 'ind.act.fut.5' },
    { t: 'gen', v: 'habeo', k: 'ind.act.fut.4' },
    { t: 'gen', v: 'mitto', k: 'ind.act.fut.0' },
    { t: 'gen', v: 'amo', k: 'ind.pass.fut.1' },
    { t: 'gen', v: 'rego', k: 'ind.pass.fut.5' },
    { t: 'gen', v: 'video', k: 'part.fut' },
    { t: 'gen', v: 'duco', k: 'inf.act.fut' },
    { t: 'gen', v: 'capio', k: 'inf.pass.fut' },
    { t: 'parse', v: 'rego', k: 'ind.act.fut.2' },
    { t: 'parse', v: 'audio', k: 'ind.pass.fut.3' },
    { t: 'parse', v: 'moneo', k: 'ind.act.fut.5' },
    { t: 'mc', q: { ko: 'mittet의 뜻은?', en: 'What does mittet mean?' }, o: [{ ko: '그는 보낼 것이다', en: 'he will send' }, { ko: '그는 보낸다', en: 'he sends' }, { ko: '그는 보내고 있었다', en: 'he was sending' }, { ko: '그는 보냈다', en: 'he sent' }], a: 0, x: { ko: 'mittō는 제3활용 → 미래 3인칭 단수 -et', en: 'mittō is 3rd conj. → future 3rd sg. -et' } },
    { t: 'mc', q: { ko: '라틴어에서 유일한 한 단어짜리 미래 부정사는?', en: 'The only one-word future infinitive in Latin is…' }, o: ['fore', 'esse', 'īrī', 'futūrum'], a: 0 },
    { t: 'mc', q: { ko: 'amātum īrī에서 amātum이 주어와 성·수를 맞추지 않는 이유는?', en: 'Why does amātum in amātum īrī not agree with its subject?' }, o: [{ ko: '분사가 아니라 목적분사(명사)이기 때문', en: 'it is a supine (a noun), not a participle' }, { ko: '항상 중성 주어만 오기 때문', en: 'the subject is always neuter' }, { ko: '시적 허용이므로', en: 'poetic licence' }, { ko: '이태동사이기 때문', en: 'it is deponent' }], a: 0 }
  ]
};
