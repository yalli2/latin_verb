window.CH = {
  n: 6,
  part: { ko: '제2부 · 직설법', en: 'Part II · The Indicative' },
  title: { ko: '완료 직설법', en: 'The Perfect Indicative' },
  topics: [{ ko: '모든 활용 공통 어미', en: 'Endings shared by all conjugations' }, { ko: '두 단어짜리 수동태', en: 'Two-word passive' }, { ko: '축약형 (amāstī, audiī)', en: 'Shortened forms' }, { ko: '진짜 완료 vs 단순 과거', en: 'True perfect vs simple past' }],
  intro: { ko: '완료 시제는 완료 어간(셋째 주요 부분)에 모든 활용이 똑같은 어미를 붙여 만들어요. 수동태는 "완료 수동 분사 + sum"의 두 단어예요.', en: 'The perfect adds the same endings in every conjugation to the perfect stem (3rd principal part). The passive is two words: perfect passive participle + sum.' },
  sec: [
    {
      h: { ko: '능동태: 어미는 하나뿐', en: 'Active: one set of endings' },
      b: {
        ko: `<p>완료 어간 + <span class="la">-ī, -istī, -it, -imus, -istis, -ērunt (-ēre)</span>. 완료 능동 부정사는 <span class="la">-isse</span>.</p>
        <p>3인칭 복수의 <span class="la">-ēre</span>(<span class="la">fēcēre = fēcērunt</span>)는 시인들이 즐겨 썼고, 리비우스·타키투스 같은 산문가도 사용했어요.</p>
        <p>완료 <b>능동</b> 분사는 없어요.</p>`,
        en: `<p>Perfect stem + <span class="la">-ī, -istī, -it, -imus, -istis, -ērunt (-ēre)</span>. Perfect active infinitive: <span class="la">-isse</span>.</p>
        <p>The 3rd pl. in <span class="la">-ēre</span> (<span class="la">fēcēre = fēcērunt</span>) is common in poets and in prose writers such as Livy and Tacitus.</p>
        <p>There is no perfect <b>active</b> participle.</p>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'ind.act.perf' }]
    },
    {
      h: { ko: '수동태: 분사 + sum', en: 'Passive: participle + sum' },
      b: {
        ko: `<p>완료 수동 분사(<span class="la">amātus, -a, -um</span>) + <span class="la">sum</span>의 현재형. 분사는 주어와 <b>성·수</b>를 맞춰요.</p>
        <ul><li><span class="la">servus monitus est</span> 노예가 경고받았다</li><li><span class="la">puellae audītae sunt</span> 소녀들이 (그 말을) 들었다 → 들려졌다</li><li><span class="la">bellum gestum est</span> 전쟁이 수행되었다 (중성)</li></ul>
        <p>완료 수동 부정사: 분사 + <span class="la">esse</span> (<span class="la">amātus esse</span>).</p>`,
        en: `<p>Perfect passive participle (<span class="la">amātus, -a, -um</span>) + present of <span class="la">sum</span>. The participle agrees with the subject in <b>gender and number</b>.</p>
        <ul><li><span class="la">servus monitus est</span> the slave was warned</li><li><span class="la">puellae audītae sunt</span> the girls were heard</li><li><span class="la">bellum gestum est</span> the war was waged (neuter)</li></ul>
        <p>Perfect passive infinitive: participle + <span class="la">esse</span> (<span class="la">amātus esse</span>).</p>`
      },
      para: [{ v: ['amo', 'rego', 'capio'], k: 'ind.pass.perf' }],
      nf: { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: ['inf.act.perf', 'part.perf', 'inf.pass.perf'] }
    },
    {
      h: { ko: '축약형', en: 'Shortened forms' },
      b: {
        ko: `<p>완료 어간이 <b>-v-</b>로 끝나는 동사(제1·4활용 대부분 등)는 <span class="la">-vi-, -vē-, -ve-</span>가 빠진 짧은 형태를 자주 써요.</p>
        <table class="mini-t"><tr><th>정식형</th><th>축약형</th></tr>
        <tr><td><span class="la">amāvistī</span></td><td><span class="la">amāstī</span></td></tr>
        <tr><td><span class="la">amāvērunt</span></td><td><span class="la">amārunt</span></td></tr>
        <tr><td><span class="la">amāveram</span></td><td><span class="la">amāram</span></td></tr>
        <tr><td><span class="la">amāvissem</span></td><td><span class="la">amāssem</span></td></tr>
        <tr><td><span class="la">nōvistī</span></td><td><span class="la">nōstī</span></td></tr>
        <tr><td><span class="la">audīvistī</span></td><td><span class="la">audīstī</span></td></tr></table>
        <p>제4활용은 <b>-v- 없는 완료 어간</b>도 써요: <span class="la">audiī = audīvī, audiit = audīvit</span>. <span class="la">-iī</span>가 다시 <span class="la">-ī</span>로 줄기도 해서 <span class="la">petiit → petīt</span>은 현재 <span class="la">petit</span>과 철자가 같아져요 (장음 표시가 없는 원문에서는 문맥으로 판단!).</p>`,
        en: `<p>Verbs with a perfect stem in <b>-v-</b> (most 1st and 4th conjugation verbs, etc.) often drop <span class="la">-vi-, -vē-, -ve-</span>.</p>
        <table class="mini-t"><tr><th>Full</th><th>Short</th></tr>
        <tr><td><span class="la">amāvistī</span></td><td><span class="la">amāstī</span></td></tr>
        <tr><td><span class="la">amāvērunt</span></td><td><span class="la">amārunt</span></td></tr>
        <tr><td><span class="la">amāveram</span></td><td><span class="la">amāram</span></td></tr>
        <tr><td><span class="la">amāvissem</span></td><td><span class="la">amāssem</span></td></tr>
        <tr><td><span class="la">nōvistī</span></td><td><span class="la">nōstī</span></td></tr>
        <tr><td><span class="la">audīvistī</span></td><td><span class="la">audīstī</span></td></tr></table>
        <p>4th-conjugation verbs also have a <b>v-less perfect</b>: <span class="la">audiī = audīvī, audiit = audīvit</span>. <span class="la">-iī</span> may contract further, so <span class="la">petiit → petīt</span> is spelled like present <span class="la">petit</span> — context decides.</p>`
      }
    },
    {
      h: { ko: '쓰임', en: 'Uses' },
      b: {
        ko: `<ul><li>라틴어 완료는 두 가지 뜻: <b>단순 과거</b>("~했다", 한 번의 사건)와 <b>진짜 완료</b>("~해 놓았다/~한 적이 있다", 현재까지 이어지는 결과). 문맥으로 구별해요. 진짜 완료는 <b>주요 시제</b>, 단순 과거는 <b>역사 시제</b>로 취급돼요(제13장 시제 일치).</li>
        <li><span class="la">postquam, ubi, ut, simul ac</span>(~한 후에/~하자마자) 뒤에서는 과거보다 앞선 일도 과거완료가 아니라 <b>완료</b>를 써요.</li>
        <li>반면 <span class="la">quod, quia, sī</span> 등은 앞선 일에 과거완료를 써요.</li>
        <li><b>격언적 완료</b>: 속담에서 일반적 진리를 완료로 표현해요.</li>
        <li>시에서는 완료 부정사가 현재의 뜻으로 쓰이기도 해요.</li></ul>`,
        en: `<ul><li>The Latin perfect means either a <b>simple past</b> (“I did”, one event) or a <b>true perfect</b> (“I have done”, a present result). The true perfect counts as a <b>primary</b> tense, the simple past as <b>secondary</b> (see ch. 13).</li>
        <li>After <span class="la">postquam, ubi, ut, simul ac</span> (after/as soon as), Latin uses the <b>perfect</b> where English might use the pluperfect.</li>
        <li><span class="la">quod, quia, sī</span> etc. use the pluperfect for the earlier event.</li>
        <li><b>Gnomic perfect</b>: proverbs state general truths in the perfect.</li>
        <li>Poets sometimes use the perfect infinitive with present meaning.</li></ul>`
      },
      exs: [
        { la: 'Portam clausī.', ko: '나는 문을 닫았다 / 닫아 두었다.', en: 'I closed the door / I have closed the door.' },
        { la: 'Postquam Caesar eō pervēnit, obsidēs poposcit.', ko: '카이사르는 그곳에 도착한 후 인질을 요구했다.', en: 'After Caesar (had) arrived there, he demanded hostages.' },
        { la: 'Fortūna fortēs semper adiūvit.', ko: '운명은 늘 용감한 자를 도왔다(돕는 법이다). (격언적 완료)', en: 'Fortune has always helped the brave. (gnomic perfect)' },
        { la: 'Urbs ab hostibus capta est.', ko: '도시가 적에게 점령되었다.', en: 'The city was captured by the enemy.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'ind.act.perf.1' },
    { t: 'gen', v: 'moneo', k: 'ind.act.perf.2' },
    { t: 'gen', v: 'rego', k: 'ind.act.perf.5' },
    { t: 'gen', v: 'audio', k: 'ind.act.perf.3' },
    { t: 'gen', v: 'capio', k: 'ind.act.perf.4' },
    { t: 'gen', v: 'video', k: 'ind.act.perf.0' },
    { t: 'gen', v: 'mitto', k: 'ind.act.perf.2' },
    { t: 'gen', v: 'facio', k: 'ind.act.perf.5' },
    { t: 'gen', v: 'amo', k: 'ind.pass.perf.2' },
    { t: 'gen', v: 'capio', k: 'ind.pass.perf.5' },
    { t: 'gen', v: 'rego', k: 'inf.act.perf' },
    { t: 'parse', v: 'duco', k: 'ind.act.perf.4' },
    { t: 'parse', v: 'audio', k: 'ind.pass.perf.0' },
    { t: 'fill', q: { ko: 'amāvērunt의 축약형을 쓰세요.', en: 'Write the shortened form of amāvērunt.' }, a: ['amārunt'] },
    { t: 'fill', q: { ko: 'audīvistī의 축약형을 쓰세요.', en: 'Write the shortened form of audīvistī.' }, a: ['audīstī'] },
    { t: 'fill', q: { ko: '“소녀들이 보였다(보여졌다)” — puellae ___ sunt (videō의 완료 수동 분사, 여성 복수)', en: '“The girls were seen” — puellae ___ sunt (perfect passive participle of videō, fem. pl.)' }, a: ['vīsae'] },
    { t: 'mc', q: { ko: 'fēcēre는 어떤 형태와 같은가요?', en: 'fēcēre is equivalent to…' }, o: ['fēcērunt', 'facere', 'fēcisse', 'facerē'], a: 0, x: { ko: '3인칭 복수 완료의 다른 어미 -ēre', en: 'alternative 3rd pl. perfect ending -ēre' } },
    { t: 'mc', q: { ko: 'postquam이 이끄는 과거의 앞선 일에는 주로 어떤 시제를 쓰나요?', en: 'After postquam in past narrative, Latin normally uses…' }, o: [{ ko: '완료 직설법', en: 'the perfect indicative' }, { ko: '과거완료 접속법', en: 'the pluperfect subjunctive' }, { ko: '미래완료', en: 'the future perfect' }, { ko: '현재 접속법', en: 'the present subjunctive' }], a: 0 }
  ]
};
