window.CH = {
  n: 16,
  part: { ko: '제4부 · 명령법과 비한정형', en: 'Part IV · Imperative & Non-finite Forms' },
  title: { ko: '부정사', en: 'Infinitives' },
  topics: [{ ko: '부정사 여섯 가지', en: 'The six infinitives' }, { ko: '간접화법 (대격 + 부정사)', en: 'Indirect statement (acc. + inf.)' }, { ko: '역사적 부정사', en: 'Historic infinitive' }, { ko: '감탄의 부정사', en: 'Exclamatory infinitive' }],
  intro: { ko: '라틴어 부정사는 시제(현재·완료·미래)와 태(능동·수동)에 따라 여섯 가지예요. 특히 "~라고 말한다/생각한다" 뒤의 간접화법에서 핵심 역할을 해요.', en: 'Latin infinitives come in three tenses and two voices — six in all. They are the backbone of indirect statement (“he says that…”).' },
  sec: [
    {
      h: { ko: '부정사 여섯 가지', en: 'The six infinitives' },
      b: {
        ko: `<table class="mini-t"><tr><th></th><th>능동</th><th>수동</th></tr>
        <tr><td><b>현재</b></td><td><span class="la">amāre</span> 사랑하다</td><td><span class="la">amārī</span> 사랑받다</td></tr>
        <tr><td><b>완료</b></td><td><span class="la">amāvisse</span> 사랑했다</td><td><span class="la">amātus esse</span> 사랑받았다</td></tr>
        <tr><td><b>미래</b></td><td><span class="la">amātūrus esse</span> 사랑할 것이다</td><td><span class="la">amātum īrī</span> 사랑받을 것이다</td></tr></table>
        <p>부정사는 영어 <i>to</i>에 해당하는 말 없이 혼자 쓰여요. 분사가 들어간 부정사(<span class="la">amātūrus esse, amātus esse</span>)는 주어와 성·수·격을 맞춰요.</p>`,
        en: `<table class="mini-t"><tr><th></th><th>Active</th><th>Passive</th></tr>
        <tr><td><b>Present</b></td><td><span class="la">amāre</span> to love</td><td><span class="la">amārī</span> to be loved</td></tr>
        <tr><td><b>Perfect</b></td><td><span class="la">amāvisse</span> to have loved</td><td><span class="la">amātus esse</span> to have been loved</td></tr>
        <tr><td><b>Future</b></td><td><span class="la">amātūrus esse</span> to be going to love</td><td><span class="la">amātum īrī</span> to be going to be loved</td></tr></table>
        <p>Latin has no word for English “to”. Infinitives containing a participle (<span class="la">amātūrus esse, amātus esse</span>) agree with their subject.</p>`
      },
      nf: { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: ['inf.act.pres', 'inf.act.perf', 'inf.act.fut', 'inf.pass.pres', 'inf.pass.perf', 'inf.pass.fut'] }
    },
    {
      h: { ko: '간접화법: 대격 + 부정사', en: 'Indirect statement: accusative + infinitive' },
      b: {
        ko: `<p>"말하다, 생각하다, 알다, 듣다, 보다" 같은 동사 뒤에서 "~라고"의 내용은 <b>주어를 대격</b>, <b>동사를 부정사</b>로 써요.</p>
        <p>부정사의 시제는 주절 동사와의 <b>상대적 시간</b>을 나타내요: 현재 = 동시, 완료 = 이전, 미래 = 이후.</p>
        <table class="mini-t"><tr><th>라틴어</th><th>뜻</th></tr>
        <tr><td><span class="la">Dīcit Mārcum venīre.</span></td><td>그는 마르쿠스가 온다고 말한다.</td></tr>
        <tr><td><span class="la">Dīcit Mārcum vēnisse.</span></td><td>그는 마르쿠스가 왔다고 말한다.</td></tr>
        <tr><td><span class="la">Dīcit Mārcum ventūrum esse.</span></td><td>그는 마르쿠스가 올 것이라고 말한다.</td></tr>
        <tr><td><span class="la">Dīxit Mārcum venīre.</span></td><td>그는 마르쿠스가 온다고(오고 있다고) 말했다.</td></tr></table>
        <div class="box">주절의 주어와 같은 사람이면 재귀대명사 <span class="la">sē</span>를 써요: <span class="la">Dīcit sē fessum esse.</span> 그는 (자기가) 피곤하다고 말한다.</div>`,
        en: `<p>After verbs of saying, thinking, knowing and perceiving, the reported statement has its <b>subject in the accusative</b> and its <b>verb in the infinitive</b>.</p>
        <p>The infinitive’s tense is <b>relative</b> to the main verb: present = same time, perfect = earlier, future = later.</p>
        <table class="mini-t"><tr><th>Latin</th><th>Meaning</th></tr>
        <tr><td><span class="la">Dīcit Mārcum venīre.</span></td><td>He says that Marcus is coming.</td></tr>
        <tr><td><span class="la">Dīcit Mārcum vēnisse.</span></td><td>He says that Marcus came.</td></tr>
        <tr><td><span class="la">Dīcit Mārcum ventūrum esse.</span></td><td>He says that Marcus will come.</td></tr>
        <tr><td><span class="la">Dīxit Mārcum venīre.</span></td><td>He said that Marcus was coming.</td></tr></table>
        <div class="box">If the subject is the same as the main subject, use reflexive <span class="la">sē</span>: <span class="la">Dīcit sē fessum esse.</span> He says that he (himself) is tired.</div>`
      }
    },
    {
      h: { ko: '특별한 부정사 용법', en: 'Special uses' },
      b: {
        ko: `<ul><li><b>역사적 부정사</b>: 이야기 속에서 주격 주어 + 현재 부정사가 과거 동작(특히 연속 동작)을 생생하게 나타내요. 미완료처럼 옮겨요.</li>
        <li><b>감탄의 부정사</b>: 대격 주어 + 부정사로 놀람·분노. <span class="la">Mē miserum hoc patī!</span> 불쌍한 나, 이런 일을 겪다니!</li>
        <li>부정사는 중성 명사처럼 주어·목적어가 되기도 해요: <span class="la">Errāre hūmānum est.</span> 실수하는 것은 인간적이다.</li></ul>`,
        en: `<ul><li><b>Historic infinitive</b>: in narrative, a nominative subject + present infinitive vividly describes (often rapid) past action; translate like an imperfect.</li>
        <li><b>Exclamatory infinitive</b>: accusative + infinitive expressing surprise or indignation. <span class="la">Mē miserum hoc patī!</span> Poor me, to suffer this!</li>
        <li>The infinitive can act as a neuter noun: <span class="la">Errāre hūmānum est.</span> To err is human.</li></ul>`
      },
      exs: [
        { la: 'Hostēs clāmāre, currere, tēla iacere.', ko: '적들은 소리치고, 달리고, 창을 던졌다. (역사적 부정사)', en: 'The enemy shouted, ran, hurled spears. (historic infinitive)' },
        { la: 'Errāre hūmānum est.', ko: '실수하는 것은 인간적이다.', en: 'To err is human.' },
        { la: 'Putō eam vēnisse.', ko: '나는 그녀가 왔다고 생각한다.', en: 'I think that she has come.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'inf.act.perf' },
    { t: 'gen', v: 'moneo', k: 'inf.pass.pres' },
    { t: 'gen', v: 'rego', k: 'inf.pass.pres' },
    { t: 'gen', v: 'audio', k: 'inf.act.fut' },
    { t: 'gen', v: 'capio', k: 'inf.pass.perf' },
    { t: 'gen', v: 'mitto', k: 'inf.act.perf' },
    { t: 'gen', v: 'video', k: 'inf.pass.fut' },
    { t: 'gen', v: 'facio', k: 'inf.pass.pres' },
    { t: 'mc', q: { ko: '“Dīcit Mārcum vēnisse.”의 뜻은?', en: 'What does “Dīcit Mārcum vēnisse” mean?' }, o: [{ ko: '그는 마르쿠스가 왔다고 말한다', en: 'He says that Marcus came' }, { ko: '그는 마르쿠스가 온다고 말한다', en: 'He says that Marcus is coming' }, { ko: '그는 마르쿠스가 올 것이라 말한다', en: 'He says that Marcus will come' }, { ko: '마르쿠스는 와서 말한다', en: 'Marcus comes and speaks' }], a: 0 },
    { t: 'mc', q: { ko: '“Dīxit Mārcum venīre.”의 뜻은?', en: 'What does “Dīxit Mārcum venīre” mean?' }, o: [{ ko: '그는 마르쿠스가 오고 있다고 말했다', en: 'He said that Marcus was coming' }, { ko: '그는 마르쿠스가 왔었다고 말했다', en: 'He said that Marcus had come' }, { ko: '그는 마르쿠스가 올 거라고 말한다', en: 'He says that Marcus will come' }, { ko: '마르쿠스가 오라고 말했다', en: 'Marcus told him to come' }], a: 0, x: { ko: '현재 부정사 = 주절과 동시', en: 'present infinitive = same time as main verb' } },
    { t: 'mc', q: { ko: '간접화법에서 부정사의 주어는 어떤 격인가요?', en: 'In indirect statement the subject of the infinitive is in the…' }, o: [{ ko: '대격', en: 'accusative' }, { ko: '주격', en: 'nominative' }, { ko: '여격', en: 'dative' }, { ko: '탈격', en: 'ablative' }], a: 0 },
    { t: 'mc', q: { ko: '“그는 (자기가) 이길 것이라고 생각한다”에 알맞은 것은?', en: '“He thinks that he (himself) will win” is…' }, o: ['Putat sē victūrum esse.', 'Putat eum vincere.', 'Putat sē vīcisse.', 'Putat eum victūrum esse.'], a: 0 },
    { t: 'mc', q: { ko: '“Hostēs clāmāre, currere.”의 부정사 용법은?', en: 'The infinitives in “Hostēs clāmāre, currere” are…' }, o: [{ ko: '역사적 부정사', en: 'historic infinitives' }, { ko: '간접화법', en: 'indirect statement' }, { ko: '감탄의 부정사', en: 'exclamatory' }, { ko: '목적', en: 'purpose' }], a: 0 },
    { t: 'fill', q: { ko: '“나는 그녀가 왔다고 생각한다.” Putō eam ___. (veniō, 완료 부정사)', en: '“I think she has come.” Putō eam ___. (veniō, perfect infinitive)' }, a: ['vēnisse'] },
    { t: 'fill', q: { ko: '“실수하는 것은 인간적이다.” ___ hūmānum est. (errō, 현재 부정사)', en: '“To err is human.” ___ hūmānum est. (errō, present infinitive)' }, a: ['errāre'] }
  ]
};
