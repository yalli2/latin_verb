window.CH = {
  n: 11,
  part: { ko: '제3부 · 접속법', en: 'Part III · The Subjunctive' },
  title: { ko: '완료·과거완료 접속법', en: 'The Perfect & Pluperfect Subjunctive' },
  topics: [{ ko: '-erim vs -erō', en: '-erim vs -erō' }, { ko: '완료 부정사 + -m', en: 'Perfect infinitive + -m' }, { ko: '수동: 분사 + sim / essem', en: 'Passive: participle + sim / essem' }],
  intro: { ko: '완료 어간으로 만드는 두 접속법 시제예요. 핵심은 미래완료(-erō)와 완료 접속법(-erim)을 구별하는 것!', en: 'The two subjunctive tenses built on the perfect stem. The key skill: telling the perfect subjunctive (-erim) from the future perfect (-erō).' },
  sec: [
    {
      h: { ko: '완료 접속법', en: 'Perfect subjunctive' },
      b: {
        ko: `<p><b>능동</b>: 완료 어간 + <span class="la">-erim, -erīs, -erit, -erīmus, -erītis, -erint</span>.</p>
        <p>미래완료와 거의 같지만 ① 1인칭 단수가 <span class="la">-erim</span>(✗ -erō), ② 2인칭 단수·1·2인칭 복수에서 i가 <b>길어요</b>(<span class="la">-erīs, -erīmus, -erītis</span>). 이 사이트의 변화표는 구별을 위해 긴 ī 형태를 써요. (시인들은 짧은 i를 쓰기도 했어요.)</p>
        <div class="box tip">접속법 능동 1인칭 단수는 <b>모두 -m</b>으로 끝나요: <span class="la">amem, amārem, amāverim, amāvissem</span>. 그래서 <span class="la">amāverim</span>(접속법)과 <span class="la">amāverō</span>(미래완료)를 쉽게 구별할 수 있어요.</div>
        <p><b>수동</b>: 완료 수동 분사 + <span class="la">sim, sīs, sit, sīmus, sītis, sint</span>. 옛 형태: <span class="la">faxim = fēcerim</span>.</p>`,
        en: `<p><b>Active</b>: perfect stem + <span class="la">-erim, -erīs, -erit, -erīmus, -erītis, -erint</span>.</p>
        <p>Almost the same as the future perfect, except ① the 1st sg. <span class="la">-erim</span> (not -erō), ② a <b>long</b> ī in <span class="la">-erīs, -erīmus, -erītis</span>. The tables here use the long-ī forms to keep the tenses apart (poets sometimes used short i).</p>
        <div class="box tip">Every active subjunctive 1st sg. ends in <b>-m</b>: <span class="la">amem, amārem, amāverim, amāvissem</span> — so <span class="la">amāverim</span> (subjunctive) ≠ <span class="la">amāverō</span> (future perfect).</div>
        <p><b>Passive</b>: perfect passive participle + <span class="la">sim, sīs, sit, sīmus, sītis, sint</span>. Old form: <span class="la">faxim = fēcerim</span>.</p>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'subj.act.perf' }, { v: ['amo', 'rego', 'capio'], k: 'subj.pass.perf' }]
    },
    {
      h: { ko: '과거완료 접속법', en: 'Pluperfect subjunctive' },
      b: {
        ko: `<p><b>능동</b>: <b>완료 능동 부정사</b>(<span class="la">amāvisse</span>) + <span class="la">-m, -s, -t…</span> → <span class="la">amāvissem, amāvissēs, amāvisset…</span> (미완료 접속법과 같은 원리!)</p>
        <p><b>수동</b>: 완료 수동 분사 + <span class="la">essem, essēs, esset…</span>(sum의 미완료 접속법).</p>
        <p>축약형: <span class="la">amāssem = amāvissem, audīssem = audīvissem, nōssem = nōvissem</span>.</p>`,
        en: `<p><b>Active</b>: <b>perfect active infinitive</b> (<span class="la">amāvisse</span>) + <span class="la">-m, -s, -t…</span> → <span class="la">amāvissem, amāvissēs, amāvisset…</span> — the same trick as the imperfect subjunctive.</p>
        <p><b>Passive</b>: perfect passive participle + <span class="la">essem, essēs, esset…</span> (imperfect subjunctive of sum).</p>
        <p>Shortened: <span class="la">amāssem = amāvissem, audīssem = audīvissem, nōssem = nōvissem</span>.</p>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'subj.act.plup' }, { v: ['amo', 'rego', 'capio'], k: 'subj.pass.plup' }],
      exs: [
        { la: 'Utinam nē id fēcissem!', ko: '내가 그것을 하지 않았더라면!', en: 'If only I had not done it!' },
        { la: 'Sī tē ibi esse scīvissem, ad tē vēnissem.', ko: '네가 거기 있는 줄 알았더라면 너에게 갔을 텐데.', en: 'If I had known you were there, I would have come to you.' },
        { la: 'Quaerō quid fēceris.', ko: '나는 네가 무엇을 했는지 묻는다. (간접의문)', en: 'I ask what you did. (indirect question)' },
        { la: 'Cum epistulam lēgisset, lacrimāvit.', ko: '그는 편지를 읽고 나서 울었다.', en: 'When he had read the letter, he wept.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'subj.act.perf.0' },
    { t: 'gen', v: 'moneo', k: 'subj.act.perf.2' },
    { t: 'gen', v: 'rego', k: 'subj.act.perf.5' },
    { t: 'gen', v: 'capio', k: 'subj.act.perf.1' },
    { t: 'gen', v: 'amo', k: 'subj.act.plup.2' },
    { t: 'gen', v: 'audio', k: 'subj.act.plup.0' },
    { t: 'gen', v: 'rego', k: 'subj.act.plup.5' },
    { t: 'gen', v: 'facio', k: 'subj.act.plup.0' },
    { t: 'gen', v: 'amo', k: 'subj.pass.perf.2' },
    { t: 'gen', v: 'capio', k: 'subj.pass.plup.5' },
    { t: 'parse', v: 'amo', k: 'subj.act.perf.0' },
    { t: 'parse', v: 'moneo', k: 'subj.act.plup.3' },
    { t: 'parse', v: 'rego', k: 'subj.pass.plup.2' },
    { t: 'mc', q: { ko: 'amāverim과 amāverō의 차이는?', en: 'Difference between amāverim and amāverō?' }, o: [{ ko: '완료 접속법 / 미래완료 직설법', en: 'perfect subjunctive / future perfect indicative' }, { ko: '능동 / 수동', en: 'active / passive' }, { ko: '단수 / 복수', en: 'singular / plural' }, { ko: '같은 형태', en: 'they are the same' }], a: 0 },
    { t: 'mc', q: { ko: '과거완료 접속법 능동은 무엇에 인칭 어미를 붙여 만드나요?', en: 'The pluperfect subjunctive active adds endings to…' }, o: [{ ko: '완료 능동 부정사', en: 'the perfect active infinitive' }, { ko: '현재 능동 부정사', en: 'the present active infinitive' }, { ko: '목적분사', en: 'the supine' }, { ko: '현재 어간', en: 'the present stem' }], a: 0 },
    { t: 'fill', q: { ko: 'audīvissem의 축약형을 쓰세요.', en: 'Write the shortened form of audīvissem.' }, a: ['audīssem'] },
    { t: 'mc', q: { ko: '접속법 능동 1인칭 단수의 공통 끝소리는?', en: 'All active subjunctive 1st sg. forms end in…' }, o: ['-m', '-ō', '-ī', '-r'], a: 0 }
  ]
};
