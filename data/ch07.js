window.CH = {
  n: 7,
  part: { ko: '제2부 · 직설법', en: 'Part II · The Indicative' },
  title: { ko: '과거완료 직설법', en: 'The Pluperfect Indicative' },
  topics: [{ ko: '-eram, -erās, -erat', en: '-eram, -erās, -erat' }, { ko: '분사 + eram', en: 'Participle + eram' }, { ko: '“두 단계 전”의 과거', en: 'Two steps back in the past' }, { ko: 'dīxerat (시의 용법)', en: 'dīxerat in poetry' }],
  intro: { ko: '과거완료는 과거의 어느 시점보다 "더 앞서" 일어난 일을 말해요. 어미는 sum의 미완료(eram…)와 똑같아요.', en: 'The pluperfect describes something that happened before another past event. Its endings are exactly the imperfect of sum (eram…).' },
  sec: [
    {
      h: { ko: '만드는 법', en: 'Formation' },
      b: {
        ko: `<ul><li><b>능동</b>: 완료 어간 + <span class="la">-eram, -erās, -erat, -erāmus, -erātis, -erant</span> (모든 활용 공통)</li>
        <li><b>수동</b>: 완료 수동 분사 + <span class="la">eram, erās, erat…</span> (sum의 미완료)</li>
        <li>과거완료에는 분사나 부정사가 없어요. 축약형: <span class="la">amāram = amāveram</span>, <span class="la">nōram = nōveram</span>.</li></ul>`,
        en: `<ul><li><b>Active</b>: perfect stem + <span class="la">-eram, -erās, -erat, -erāmus, -erātis, -erant</span> (all conjugations)</li>
        <li><b>Passive</b>: perfect passive participle + <span class="la">eram, erās, erat…</span> (imperfect of sum)</li>
        <li>No participles or infinitives. Shortened forms: <span class="la">amāram = amāveram</span>, <span class="la">nōram = nōveram</span>.</li></ul>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'ind.act.plup' }, { v: ['amo', 'audio', 'capio'], k: 'ind.pass.plup' }]
    },
    {
      h: { ko: '쓰임', en: 'Uses' },
      b: {
        ko: `<p>"내가 갈리아에 갔을 때 카이사르는 이미 라인강을 <b>건넜었다</b>" — 기준이 되는 과거(갔을 때)보다 한 단계 더 앞선 일이에요.</p>
        <p>시에서는 과거완료가 단순 과거처럼 쓰이기도 해요. 특히 서사시에서 연설이 끝난 뒤 <span class="la">dīxerat</span>(그가 말했다)는 단순 과거로 옮겨요.</p>`,
        en: `<p>“When I reached Gaul, Caesar <b>had</b> already <b>crossed</b> the Rhine” — one step further back than the reference point in the past.</p>
        <p>In poetry the pluperfect may simply mean a past event; in epic, <span class="la">dīxerat</span> after a speech is best translated “he spoke”.</p>`
      },
      exs: [
        { la: 'Hostēs iam fīnēs nostrōs intrāverant et agrōs vāstābant.', ko: '적들은 이미 우리 영토에 들어와 있었고, 들판을 황폐하게 하고 있었다.', en: 'The enemy had already entered our territory and were laying waste the fields.' },
        { la: 'Cum advēnī, nūntius discesserat.', ko: '내가 도착했을 때 전령은 떠나고 없었다.', en: 'When I arrived, the messenger had left.' },
        { la: 'Puer, quod pecūniam āmīserat, flēbat.', ko: '소년은 돈을 잃어버렸기 때문에 울고 있었다.', en: 'The boy was crying because he had lost the money.' },
        { la: 'Epistula ā Cicerōne scrīpta erat.', ko: '그 편지는 키케로가 써 둔 것이었다.', en: 'The letter had been written by Cicero.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'ind.act.plup.0' },
    { t: 'gen', v: 'moneo', k: 'ind.act.plup.2' },
    { t: 'gen', v: 'rego', k: 'ind.act.plup.4' },
    { t: 'gen', v: 'audio', k: 'ind.act.plup.5' },
    { t: 'gen', v: 'capio', k: 'ind.act.plup.1' },
    { t: 'gen', v: 'pono', k: 'ind.act.plup.3' },
    { t: 'gen', v: 'do', k: 'ind.act.plup.2' },
    { t: 'gen', v: 'rego', k: 'ind.pass.plup.2' },
    { t: 'gen', v: 'moneo', k: 'ind.pass.plup.5' },
    { t: 'parse', v: 'video', k: 'ind.act.plup.3' },
    { t: 'parse', v: 'mitto', k: 'ind.pass.plup.1' },
    { t: 'parse', v: 'capio', k: 'ind.act.plup.5' },
    { t: 'fill', q: { ko: 'amāveram의 축약형을 쓰세요.', en: 'Write the shortened form of amāveram.' }, a: ['amāram'] },
    { t: 'mc', q: { ko: '과거완료 능동 어미는 어떤 형태와 똑같나요?', en: 'The pluperfect active endings are identical to…' }, o: [{ ko: 'sum의 미완료 (eram…)', en: 'the imperfect of sum (eram…)' }, { ko: 'sum의 미래 (erō…)', en: 'the future of sum (erō…)' }, { ko: 'sum의 현재 (sum…)', en: 'the present of sum (sum…)' }, { ko: '미완료 접속법', en: 'the imperfect subjunctive' }], a: 0 },
    { t: 'mc', q: { ko: '“Cum advēnī, nūntius discesserat.”에서 discesserat의 시점은?', en: 'In “Cum advēnī, nūntius discesserat”, when did the leaving happen?' }, o: [{ ko: '내가 도착하기 전에', en: 'before I arrived' }, { ko: '내가 도착한 후에', en: 'after I arrived' }, { ko: '내가 도착하는 동시에', en: 'at the same moment' }, { ko: '미래에', en: 'in the future' }], a: 0 },
    { t: 'mc', q: { ko: '서사시에서 연설 뒤에 나오는 dīxerat는 보통 어떻게 옮기나요?', en: 'How is dīxerat after a speech in epic usually translated?' }, o: [{ ko: '“그가 말했다” (단순 과거)', en: '“he spoke” (simple past)' }, { ko: '“그가 말할 것이다”', en: '“he will speak”' }, { ko: '“그가 말하고 있다”', en: '“he is speaking”' }, { ko: '“말하라!”', en: '“speak!”' }], a: 0 }
  ]
};
