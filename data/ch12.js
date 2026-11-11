window.CH = {
  n: 12,
  part: { ko: '제3부 · 접속법', en: 'Part III · The Subjunctive' },
  title: { ko: '접속법의 쓰임 ① 주절', en: 'Uses of the Subjunctive ① Main Clauses' },
  topics: [{ ko: '소원 (utinam)', en: 'Optative (utinam)' }, { ko: '가능·조건', en: 'Potential & conditions' }, { ko: '권유·명령 (let us…)', en: 'Jussive (let us…)' }, { ko: '숙고·양보', en: 'Deliberative & concessive' }],
  intro: { ko: '주절에 쓰인 접속법은 "원하는 것, 바라는 것, 가능하다고 여기는 것"을 나타내요. 다섯 가지 용법과 각각의 부정어(nē / nōn)를 정리해 봐요.', en: 'In a main clause the subjunctive expresses what is willed, wished or thought possible. Learn the five uses and their negatives (nē / nōn).' },
  sec: [
    {
      h: { ko: '① 소원의 접속법 (optative) — 부정: nē', en: '① Optative (wish) — negative nē' },
      b: {
        ko: `<p>흔히 <span class="la">utinam</span>(드물게 <span class="la">ō sī</span>)과 함께 써요. 시제가 시간을 정해요.</p>
        <table class="mini-t"><tr><th>시제</th><th>소원의 시간</th><th>예</th></tr>
        <tr><td>현재</td><td>미래에 대한 소원 (이뤄질 수 있음)</td><td><span class="la">Utinam veniat!</span> 그가 오기를!</td></tr>
        <tr><td>미완료</td><td>현재 이룰 수 없는 소원</td><td><span class="la">Utinam adesset!</span> 그가 (지금) 여기 있다면!</td></tr>
        <tr><td>과거완료</td><td>과거 이룰 수 없었던 소원</td><td><span class="la">Utinam nē discessisset!</span> 그가 떠나지 않았더라면!</td></tr></table>`,
        en: `<p>Often with <span class="la">utinam</span> (rarely <span class="la">ō sī</span>). The tense sets the time.</p>
        <table class="mini-t"><tr><th>Tense</th><th>Wish for</th><th>Example</th></tr>
        <tr><td>Present</td><td>the future (possible)</td><td><span class="la">Utinam veniat!</span> May he come!</td></tr>
        <tr><td>Imperfect</td><td>the present (unfulfilled)</td><td><span class="la">Utinam adesset!</span> If only he were here!</td></tr>
        <tr><td>Pluperfect</td><td>the past (unfulfilled)</td><td><span class="la">Utinam nē discessisset!</span> If only he had not left!</td></tr></table>`
      },
      exs: [{ la: 'Haec urbs semper flōreat!', ko: '이 도시가 영원히 번영하기를!', en: 'May this city flourish for ever!' }]
    },
    {
      h: { ko: '② 가능의 접속법 (potential) — 부정: nōn', en: '② Potential — negative nōn' },
      b: {
        ko: `<p>"~할 텐데, ~할 수도 있을 텐데" (영어 <i>would/could/should</i>). 특히 <b>조건문</b>에서 주절·조건절 모두 접속법을 써요.</p>
        <table class="mini-t"><tr><th>조건문의 시제</th><th>가리키는 때</th><th>예</th></tr>
        <tr><td>현재 + 현재</td><td>미래 (만약 ~한다면 ~할 텐데)</td><td><span class="la">Sī hoc negem, mentiar.</span> 내가 이것을 부정한다면 거짓말이 될 것이다.</td></tr>
        <tr><td>미완료 + 미완료</td><td>현재 사실의 반대</td><td><span class="la">Sī adessēs, gaudērem.</span> 네가 여기 있다면 기쁠 텐데.</td></tr>
        <tr><td>과거완료 + 과거완료</td><td>과거 사실의 반대</td><td><span class="la">Sī vēnissēs, vīdissēs.</span> 네가 왔다면 보았을 텐데.</td></tr></table>
        <p>조건절이 <b>없을 때</b>는 시간 관계가 달라져요: 현재·완료 접속법 → 현재/미래 (<span class="la">Hoc nōn crēdiderim.</span> 나는 이걸 믿지 않을 거야), 미완료 접속법 → 과거 (<span class="la">Quis hoc crēderet?</span> 누가 이것을 믿었겠는가?).</p>`,
        en: `<p>“would / could / should”. Especially in <b>conditional sentences</b>, where both clauses are subjunctive.</p>
        <table class="mini-t"><tr><th>Tenses</th><th>Refers to</th><th>Example</th></tr>
        <tr><td>present + present</td><td>future (“if … were to …, … would …”)</td><td><span class="la">Sī hoc negem, mentiar.</span> If I were to deny this, I would be lying.</td></tr>
        <tr><td>imperfect + imperfect</td><td>present, contrary to fact</td><td><span class="la">Sī adessēs, gaudērem.</span> If you were here, I would be glad.</td></tr>
        <tr><td>pluperfect + pluperfect</td><td>past, contrary to fact</td><td><span class="la">Sī vēnissēs, vīdissēs.</span> If you had come, you would have seen.</td></tr></table>
        <p><b>Without</b> an if-clause the time shifts: present/perfect subjunctive → present/future (<span class="la">Hoc nōn crēdiderim.</span> I wouldn’t believe this); imperfect → past (<span class="la">Quis hoc crēderet?</span> Who would have believed this?).</p>`
      }
    },
    {
      h: { ko: '③ 권유·명령의 접속법 (jussive) — 부정: nē', en: '③ Jussive — negative nē' },
      b: {
        ko: `<ul><li><b>1인칭 복수</b>: "~하자" (권유) — <span class="la">Pāreāmus lēgibus.</span> 법에 복종하자.</li>
        <li><b>3인칭</b>: "~하게 하라, ~해야 한다" — <span class="la">Suum quisque officium faciat.</span> 각자 자기 의무를 다하라.</li>
        <li><b>2인칭</b>: 구어체(희극)에 많고, 고전 산문에서는 <b>일반적인 "너(누구나)"</b>에게: "~해야 한다".</li></ul>`,
        en: `<ul><li><b>1st pl.</b>: “let us …” — <span class="la">Pāreāmus lēgibus.</span> Let us obey the laws.</li>
        <li><b>3rd person</b>: “let him/them …, he/they should …” — <span class="la">Suum quisque officium faciat.</span> Let each do his own duty.</li>
        <li><b>2nd person</b>: colloquial (comedy); in classical prose for a general “you/one should”.</li></ul>`
      },
      exs: [{ la: 'Nē difficilia optēmus.', ko: '이룰 수 없는 것을 바라지 말자.', en: 'Let us not wish for the impossible.' }, { la: 'Hodiē apud nōs cēnēs.', ko: '오늘 우리 집에서 저녁 먹어. (구어)', en: 'Dine with us today. (colloquial)' }]
    },
    {
      h: { ko: '④ 숙고 (deliberative, 부정 nōn) · ⑤ 양보 (concessive, 부정 nē)', en: '④ Deliberative (neg. nōn) · ⑤ Concessive (neg. nē)' },
      b: {
        ko: `<p><b>숙고의 접속법</b>: 무엇을 해야 할지 망설이는 질문. <span class="la">Quid faciam?</span> 나는 무엇을 해야 하나? / <span class="la">Nōnne poētārum vōce moveāmur?</span> 우리가 시인들의 목소리에 감동받지 말아야 하는가?</p>
        <p><b>양보의 접속법</b>: "~라고 치자, ~라고 인정하자". <span class="la">Sit fūr; at est bonus imperātor.</span> 그가 도둑이라 치자, 그래도 그는 훌륭한 장군이다.</p>
        <table class="mini-t"><tr><th>용법</th><th>부정어</th></tr><tr><td>소원</td><td>nē</td></tr><tr><td>가능</td><td>nōn</td></tr><tr><td>권유·명령</td><td>nē</td></tr><tr><td>숙고</td><td>nōn</td></tr><tr><td>양보</td><td>nē</td></tr></table>`,
        en: `<p><b>Deliberative</b>: questions of doubt about what to do. <span class="la">Quid faciam?</span> What am I to do? / <span class="la">Nōnne poētārum vōce moveāmur?</span> Are we not to be moved by the voice of poets?</p>
        <p><b>Concessive</b>: “granted that…”. <span class="la">Sit fūr; at est bonus imperātor.</span> Granted he is a thief; still he is a good general.</p>
        <table class="mini-t"><tr><th>Use</th><th>Negative</th></tr><tr><td>Optative</td><td>nē</td></tr><tr><td>Potential</td><td>nōn</td></tr><tr><td>Jussive</td><td>nē</td></tr><tr><td>Deliberative</td><td>nōn</td></tr><tr><td>Concessive</td><td>nē</td></tr></table>`
      }
    }
  ],
  ex: [
    { t: 'mc', q: { ko: '“Utinam adesset!”의 뜻은?', en: 'What does “Utinam adesset!” mean?' }, o: [{ ko: '그가 (지금) 여기 있다면 좋을 텐데!', en: 'If only he were here (now)!' }, { ko: '그가 오기를! (미래)', en: 'May he come! (future)' }, { ko: '그가 여기 있었더라면!', en: 'If only he had been here!' }, { ko: '그는 여기 있다.', en: 'He is here.' }], a: 0, x: { ko: '미완료 접속법 소원 = 현재의 이룰 수 없는 소원', en: 'imperfect optative = unfulfilled present wish' } },
    { t: 'mc', q: { ko: '과거에 이룰 수 없었던 소원에 쓰는 시제는?', en: 'An unfulfilled wish about the past uses…' }, o: [{ ko: '과거완료 접속법', en: 'pluperfect subjunctive' }, { ko: '현재 접속법', en: 'present subjunctive' }, { ko: '미완료 접속법', en: 'imperfect subjunctive' }, { ko: '완료 직설법', en: 'perfect indicative' }], a: 0 },
    { t: 'mc', q: { ko: '소원의 접속법을 부정할 때 쓰는 말은?', en: 'The optative subjunctive is negated by…' }, o: ['nē', 'nōn', 'neque', 'haud'], a: 0 },
    { t: 'mc', q: { ko: '가능의 접속법을 부정할 때 쓰는 말은?', en: 'The potential subjunctive is negated by…' }, o: ['nōn', 'nē', 'nōlī', 'nēve'], a: 0 },
    { t: 'mc', q: { ko: '“Sī adessēs, gaudērem.”은 어떤 조건문인가요?', en: 'What kind of condition is “Sī adessēs, gaudērem”?' }, o: [{ ko: '현재 사실의 반대', en: 'present contrary-to-fact' }, { ko: '과거 사실의 반대', en: 'past contrary-to-fact' }, { ko: '미래의 가능성', en: 'future possibility' }, { ko: '단순한 사실', en: 'simple fact' }], a: 0 },
    { t: 'mc', q: { ko: '“네가 왔다면 보았을 텐데”에 알맞은 시제 조합은?', en: '“If you had come, you would have seen” uses…' }, o: [{ ko: '과거완료 + 과거완료 접속법', en: 'pluperfect + pluperfect subjunctive' }, { ko: '현재 + 현재 접속법', en: 'present + present subjunctive' }, { ko: '미완료 + 미완료 접속법', en: 'imperfect + imperfect subjunctive' }, { ko: '완료 + 미래 직설법', en: 'perfect + future indicative' }], a: 0 },
    { t: 'mc', q: { ko: '“Pāreāmus lēgibus.”의 용법은?', en: 'What use is “Pāreāmus lēgibus”?' }, o: [{ ko: '권유 (jussive): 법에 복종하자', en: 'jussive: let us obey the laws' }, { ko: '숙고: 법에 복종해야 할까?', en: 'deliberative' }, { ko: '양보', en: 'concessive' }, { ko: '소원', en: 'optative' }], a: 0 },
    { t: 'mc', q: { ko: '“Quid faciam?”의 용법은?', en: 'What use is “Quid faciam?”' }, o: [{ ko: '숙고의 접속법 (나는 무엇을 해야 하나?)', en: 'deliberative (What am I to do?)' }, { ko: '명령법', en: 'imperative' }, { ko: '미래 직설법 (나는 무엇을 할 것이다)', en: 'future indicative' }, { ko: '양보', en: 'concessive' }], a: 0, x: { ko: 'faciam은 미래 직설법과 형태가 같지만, 의문문에서 망설임을 나타내면 숙고의 접속법이에요.', en: 'faciam looks like a future, but in a question of doubt it is deliberative.' } },
    { t: 'mc', q: { ko: '“Sit dīves; nōn tamen fēlīx est.”의 Sit은?', en: 'In “Sit dīves; nōn tamen fēlīx est”, Sit is…' }, o: [{ ko: '양보: 그가 부자라 치자', en: 'concessive: granted he is rich' }, { ko: '소원: 그가 부자이기를', en: 'optative' }, { ko: '숙고', en: 'deliberative' }, { ko: '명령법', en: 'imperative' }], a: 0 },
    { t: 'gen', v: 'amo', k: 'subj.act.pres.3' },
    { t: 'gen', v: 'facio', k: 'subj.act.pres.2' },
    { t: 'gen', v: 'sum', k: 'subj.act.pres.2' },
    { t: 'fill', q: { ko: '“그가 오기를!” — Utinam ___! (veniō, 현재 접속법 3인칭 단수)', en: '“May he come!” — Utinam ___! (veniō, present subj. 3rd sg.)' }, a: ['veniat'] },
    { t: 'fill', q: { ko: '“가자!” — ___! (eō, 현재 접속법 1인칭 복수)', en: '“Let’s go!” — ___! (eō, present subj. 1st pl.)' }, a: ['eāmus'] },
    { t: 'fill', q: { ko: '“내가 부자라면!” — Utinam dīves ___! (sum, 미완료 접속법 1인칭 단수)', en: '“If only I were rich!” — Utinam dīves ___! (sum, imperfect subj. 1st sg.)' }, a: ['essem'] }
  ]
};
