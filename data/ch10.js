window.CH = {
  n: 10,
  part: { ko: '제3부 · 접속법', en: 'Part III · The Subjunctive' },
  title: { ko: '미완료 접속법', en: 'The Imperfect Subjunctive' },
  topics: [{ ko: '부정사 + 인칭 어미', en: 'Infinitive + endings' }, { ko: '장음 규칙', en: 'Vowel length rule' }, { ko: '불규칙 동사도 규칙적!', en: 'Even irregulars are regular' }],
  intro: { ko: '가장 만들기 쉬운 형태! 현재 능동 부정사에 인칭 어미 -m, -s, -t…를 그대로 붙이면 돼요.', en: 'The easiest form of all: take the present active infinitive and add -m, -s, -t…' },
  sec: [
    {
      h: { ko: '만드는 법', en: 'Formation' },
      b: {
        ko: `<p><b>현재 능동 부정사</b> + 능동 <span class="la">-m, -s, -t, -mus, -tis, -nt</span> / 수동 <span class="la">-r, -ris, -tur, -mur, -minī, -ntur</span>.</p>
        <p>부정사 끝의 <b>e는 길어져요</b> — 단, 1인칭 단수, 3인칭 복수(능동·수동), 3인칭 단수 능동에서는 짧아요: <span class="la">amārem, amārēs, amāret, amārēmus, amārētis, amārent</span>.</p>
        <div class="box tip">불규칙 동사도 이 규칙을 따라요: <span class="la">esse → essem, posse → possem, īre → īrem, ferre → ferrem, velle → vellem</span>.</div>`,
        en: `<p><b>Present active infinitive</b> + active <span class="la">-m, -s, -t, -mus, -tis, -nt</span> / passive <span class="la">-r, -ris, -tur, -mur, -minī, -ntur</span>.</p>
        <p>The final <b>e is lengthened</b> except in the 1st sg., the 3rd pl. (active and passive) and the 3rd sg. active: <span class="la">amārem, amārēs, amāret, amārēmus, amārētis, amārent</span>.</p>
        <div class="box tip">Irregular verbs follow the rule too: <span class="la">esse → essem, posse → possem, īre → īrem, ferre → ferrem, velle → vellem</span>.</div>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'subj.act.impf' }, { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'subj.pass.impf' }]
    },
    {
      h: { ko: '맛보기: 쓰임', en: 'A taste of its uses' },
      b: {
        ko: `<p>미완료 접속법은 <b>현재 사실의 반대</b>("~라면 좋을 텐데"), <b>과거의 목적·결과</b>("~하도록/그래서 ~했다"), <b>cum 절</b> 등에서 자주 쓰여요.</p>`,
        en: `<p>The imperfect subjunctive is common for <b>present unreal wishes and conditions</b>, <b>past purpose/result</b> clauses and <b>cum</b> clauses.</p>`
      },
      exs: [
        { la: 'Utinam adessēs!', ko: '네가 여기 있다면 좋을 텐데!', en: 'If only you were here!' },
        { la: 'Sī dīves essem, nāvem emerem.', ko: '내가 부자라면 배를 살 텐데.', en: 'If I were rich, I would buy a ship.' },
        { la: 'Venit ut amīcum vidēret.', ko: '그는 친구를 보려고 왔다.', en: 'He came in order to see his friend.' },
        { la: 'Cum Rōmae esset, multōs librōs ēmit.', ko: '그는 로마에 있을 때 많은 책을 샀다.', en: 'When he was in Rome, he bought many books.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'subj.act.impf.0' },
    { t: 'gen', v: 'moneo', k: 'subj.act.impf.1' },
    { t: 'gen', v: 'rego', k: 'subj.act.impf.2' },
    { t: 'gen', v: 'audio', k: 'subj.act.impf.3' },
    { t: 'gen', v: 'capio', k: 'subj.act.impf.5' },
    { t: 'gen', v: 'sum', k: 'subj.act.impf.2' },
    { t: 'gen', v: 'fero', k: 'subj.act.impf.0' },
    { t: 'gen', v: 'volo', k: 'subj.act.impf.4' },
    { t: 'gen', v: 'amo', k: 'subj.pass.impf.2' },
    { t: 'gen', v: 'duco', k: 'subj.pass.impf.5' },
    { t: 'gen', v: 'video', k: 'subj.act.impf.4' },
    { t: 'parse', v: 'rego', k: 'subj.pass.impf.1' },
    { t: 'parse', v: 'audio', k: 'subj.act.impf.5' },
    { t: 'parse', v: 'capio', k: 'subj.act.impf.3' },
    { t: 'mc', q: { ko: '미완료 접속법의 “어간”으로 쓰는 것은?', en: 'What serves as the “stem” of the imperfect subjunctive?' }, o: [{ ko: '현재 능동 부정사', en: 'the present active infinitive' }, { ko: '완료 어간', en: 'the perfect stem' }, { ko: '목적분사', en: 'the supine' }, { ko: '현재 분사', en: 'the present participle' }], a: 0 },
    { t: 'mc', q: { ko: '다음 중 e가 짧은 형태는?', en: 'In which form is the e short?' }, o: ['regeret', 'regerēs', 'regerēmus', 'regerētis'], a: 0, x: { ko: '3인칭 단수 능동(-et)에서는 짧아요.', en: 'Short in the 3rd sg. active (-et).' } },
    { t: 'fill', q: { ko: 'possum(~할 수 있다)의 미완료 접속법 1인칭 단수를 쓰세요.', en: 'Write the imperfect subjunctive 1st sg. of possum.' }, a: ['possem'] },
    { t: 'fill', q: { ko: 'eō(가다)의 미완료 접속법 3인칭 복수를 쓰세요.', en: 'Write the imperfect subjunctive 3rd pl. of eō.' }, a: ['īrent'] }
  ]
};
