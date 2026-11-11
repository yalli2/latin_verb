window.CH = {
  n: 17,
  part: { ko: '제4부 · 명령법과 비한정형', en: 'Part IV · Imperative & Non-finite Forms' },
  title: { ko: '분사와 복합 동사형', en: 'Participles and Composite Verb Forms' },
  topics: [{ ko: '세 가지 분사', en: 'Three participles' }, { ko: '절 대신 쓰는 분사', en: 'Participles for clauses' }, { ko: '독립 탈격', en: 'Ablative absolute' }, { ko: '능동 우언법 (-ūrus sum)', en: 'Active periphrastic (-ūrus sum)' }],
  intro: { ko: '분사는 "동사의 성질을 가진 형용사"예요. 라틴어는 분사 하나로 영어나 한국어의 절 전체를 대신하는 경우가 아주 많아요.', en: 'Participles are verbal adjectives. Latin often packs a whole English clause into a single participle.' },
  sec: [
    {
      h: { ko: '세 가지 분사', en: 'The three participles' },
      b: {
        ko: `<table class="mini-t"><tr><th>분사</th><th>형태</th><th>태</th><th>시간</th></tr>
        <tr><td>현재분사</td><td><span class="la">amāns, amantis</span> (제3변화)</td><td>능동</td><td>주동사와 동시: ~하면서</td></tr>
        <tr><td>완료분사</td><td><span class="la">amātus, -a, -um</span></td><td>수동</td><td>주동사보다 이전: ~된, ~되고 나서</td></tr>
        <tr><td>미래분사</td><td><span class="la">amātūrus, -a, -um</span></td><td>능동</td><td>이후: ~하려는</td></tr></table>
        <p>라틴어에는 <b>완료 능동 분사</b>("~하고 나서")와 <b>현재 수동 분사</b>("~되면서")가 없어요. 그래서 "편지를 쓰고 나서"는 분사 대신 <span class="la">cum</span> 절이나 독립 탈격을 써요. (단, 이태동사의 완료분사는 능동 뜻 — 제18장)</p>`,
        en: `<table class="mini-t"><tr><th>Participle</th><th>Form</th><th>Voice</th><th>Time</th></tr>
        <tr><td>Present</td><td><span class="la">amāns, amantis</span> (3rd decl.)</td><td>active</td><td>same as main verb: while …ing</td></tr>
        <tr><td>Perfect</td><td><span class="la">amātus, -a, -um</span></td><td>passive</td><td>before main verb: having been …ed</td></tr>
        <tr><td>Future</td><td><span class="la">amātūrus, -a, -um</span></td><td>active</td><td>after: about to …</td></tr></table>
        <p>Latin has no <b>perfect active</b> participle (“having written”) and no <b>present passive</b> one. It uses a <span class="la">cum</span> clause or an ablative absolute instead (but deponent perfect participles are active — ch. 18).</p>`
      },
      nf: { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: ['part.pres', 'part.perf', 'part.fut'] }
    },
    {
      h: { ko: '분사의 쓰임과 독립 탈격', en: 'Uses and the ablative absolute' },
      b: {
        ko: `<p>분사는 수식하는 명사와 성·수·격을 맞추고, 문맥에 따라 "~할 때, ~이므로, ~이지만, ~하는" 등으로 옮겨요.</p>
        <p><b>독립 탈격</b>: 명사 + 분사를 모두 <b>탈격</b>으로 써서 문장의 나머지와 문법적으로 분리된 "배경" 절을 만들어요.</p>
        <ul><li><span class="la">Urbe captā, hostēs discessērunt.</span> 도시가 점령되자 적들은 떠났다.</li>
        <li><span class="la">Caesare duce</span> 카이사르가 지휘관일 때 (분사 없이 명사 둘도 가능)</li></ul>`,
        en: `<p>A participle agrees with its noun and can be translated “when, since, although, who…” as context requires.</p>
        <p><b>Ablative absolute</b>: noun + participle both in the <b>ablative</b>, forming a background clause grammatically detached from the rest.</p>
        <ul><li><span class="la">Urbe captā, hostēs discessērunt.</span> When the city had been captured, the enemy left.</li>
        <li><span class="la">Caesare duce</span> with Caesar as leader (two nouns, no participle)</li></ul>`
      },
      exs: [
        { la: 'Ā cēnā rediēns occīsus est.', ko: '그는 저녁 식사에서 돌아오다가 살해되었다.', en: 'He was killed on his way home from dinner.' },
        { la: 'Mīlitēs, hostēs veritī, fūgērunt.', ko: '병사들은 적을 두려워하여 달아났다.', en: 'The soldiers, fearing the enemy, fled.' },
        { la: 'Signō datō, mīlitēs prōcessērunt.', ko: '신호가 주어지자 병사들이 전진했다.', en: 'When the signal had been given, the soldiers advanced.' },
        { la: 'Moritūrī tē salūtant.', ko: '죽으려는 자들이 당신께 인사드립니다.', en: 'Those about to die salute you.' }
      ]
    },
    {
      h: { ko: '복합 동사형 (능동 우언법)', en: 'Composite verb forms (active periphrastic)' },
      b: {
        ko: `<p><b>미래분사 + sum</b>의 여러 시제로 "~하려 하다, ~할 참이다"를 나타내요.</p>
        <ul><li><b>강조된 미래</b>: <span class="la">Scrīptūrus sum.</span> 나는 (꼭) 쓸 것이다.</li>
        <li><b>의도</b>: <span class="la">Profectūrus eram.</span> 나는 떠나려던 참이었다.</li>
        <li><b>가능성</b>: <span class="la">Ventūrus fuit, nisi…</span> ~하지 않았다면 그는 왔을 것이다.</li>
        <li>간접의문의 "미래"를 나타내는 복합 미래 접속법: <span class="la">factūrus sim / essem</span> (제13장).</li></ul>`,
        en: `<p><b>Future participle + sum</b> in various tenses means “be about to / intend to”.</p>
        <ul><li><b>Emphatic future</b>: <span class="la">Scrīptūrus sum.</span> I am going to write.</li>
        <li><b>Intention</b>: <span class="la">Profectūrus eram.</span> I was about to set out.</li>
        <li><b>Potentiality</b>: <span class="la">Ventūrus fuit, nisi…</span> He would have come, if not…</li>
        <li>Composite future subjunctive in indirect questions: <span class="la">factūrus sim / essem</span> (ch. 13).</li></ul>`
      }
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'part.pres' },
    { t: 'gen', v: 'rego', k: 'part.pres' },
    { t: 'gen', v: 'audio', k: 'part.pres' },
    { t: 'gen', v: 'capio', k: 'part.perf' },
    { t: 'gen', v: 'mitto', k: 'part.perf' },
    { t: 'gen', v: 'duco', k: 'part.fut' },
    { t: 'gen', v: 'do', k: 'part.perf' },
    { t: 'mc', q: { ko: '라틴어에 없는 분사는?', en: 'Which participle does Latin lack?' }, o: [{ ko: '완료 능동 분사', en: 'perfect active' }, { ko: '현재 능동 분사', en: 'present active' }, { ko: '완료 수동 분사', en: 'perfect passive' }, { ko: '미래 능동 분사', en: 'future active' }], a: 0 },
    { t: 'mc', q: { ko: '“Urbe captā, hostēs discessērunt.”의 Urbe captā는?', en: 'In “Urbe captā, hostēs discessērunt”, Urbe captā is…' }, o: [{ ko: '독립 탈격 (도시가 점령되자)', en: 'ablative absolute (when the city had been taken)' }, { ko: '목적어', en: 'direct object' }, { ko: '주어', en: 'subject' }, { ko: '행위자 여격', en: 'dative of agent' }], a: 0 },
    { t: 'mc', q: { ko: '“Moritūrī tē salūtant.”의 moritūrī는?', en: 'In “Moritūrī tē salūtant”, moritūrī is…' }, o: [{ ko: '미래분사 (죽으려는 자들)', en: 'future participle (those about to die)' }, { ko: '완료분사', en: 'perfect participle' }, { ko: '동형용사', en: 'gerundive' }, { ko: '현재분사', en: 'present participle' }], a: 0 },
    { t: 'mc', q: { ko: '“Profectūrus eram.”의 뜻은?', en: 'What does “Profectūrus eram” mean?' }, o: [{ ko: '나는 떠나려던 참이었다', en: 'I was about to set out' }, { ko: '나는 떠났었다', en: 'I had set out' }, { ko: '나는 떠날 것이다', en: 'I will set out' }, { ko: '떠나라!', en: 'Set out!' }], a: 0 },
    { t: 'mc', q: { ko: '현재분사가 나타내는 시간은?', en: 'The present participle shows time…' }, o: [{ ko: '주동사와 같은 때', en: 'the same as the main verb' }, { ko: '주동사보다 이전', en: 'before the main verb' }, { ko: '주동사보다 이후', en: 'after the main verb' }, { ko: '항상 현재', en: 'always the present' }], a: 0 },
    { t: 'fill', q: { ko: '“신호가 주어지자” signō ___ (dō, 완료분사 탈격 중성 단수)', en: '“when the signal had been given” signō ___ (dō, perf. participle abl. neut. sg.)' }, a: ['datō'] },
    { t: 'fill', q: { ko: '“나는 쓰려고 한다” ___ sum (scrībō, 미래분사 남성 단수)', en: '“I am about to write” ___ sum (scrībō, future participle masc. sg.)' }, a: ['scrīptūrus'] }
  ]
};
