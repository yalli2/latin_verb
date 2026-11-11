window.CH = {
  n: 20,
  part: { ko: '제5부 · 특별한 동사들', en: 'Part V · Atypical Verbs' },
  title: { ko: '특이한 동사들: 격 지배·불규칙 주요 부분·결여·비인칭', en: 'Atypical Verbs: Case, Irregular & Missing Parts, Impersonals' },
  topics: [{ ko: '대격 외의 격을 받는 동사', en: 'Verbs with other cases' }, { ko: '불규칙한 주요 부분', en: 'Irregular principal parts' }, { ko: '비인칭 동사', en: 'Impersonal verbs' }, { ko: '결여 동사 (coepī, meminī, ōdī)', en: 'Defective verbs' }],
  intro: { ko: '규칙 동사의 틀에서 조금씩 벗어나는 동사들을 모았어요. 특히 비인칭 동사와 결여 동사는 독해에서 자주 만나요.', en: 'A gallery of verbs that bend the regular rules. Impersonal and defective verbs are especially common in reading.' },
  sec: [
    {
      h: { ko: '대격 외의 격을 받는 동사', en: 'Verbs governing other cases' },
      b: {
        ko: `<ul><li><b>여격</b>: <span class="la">pāreō</span>(복종하다), <span class="la">faveō</span>(호의를 보이다), <span class="la">noceō</span>(해치다), <span class="la">persuādeō</span>(설득하다), <span class="la">crēdō</span>(믿다), <span class="la">ignōscō</span>(용서하다), <span class="la">imperō</span>(명령하다), <span class="la">parcō</span>(아끼다), <span class="la">placeō</span>(마음에 들다), <span class="la">studeō</span>(열중하다) 등. 이런 동사의 수동태는 <b>비인칭</b>: <span class="la">Mihi persuāsum est.</span> 나는 설득되었다.</li>
        <li><b>탈격</b>: <span class="la">ūtor, fruor, fungor, potior, vescor</span>.</li>
        <li><b>속격</b>: <span class="la">meminī, oblīvīscor</span>(잊다), <span class="la">misereor</span>(불쌍히 여기다).</li></ul>`,
        en: `<ul><li><b>Dative</b>: <span class="la">pāreō</span> (obey), <span class="la">faveō</span> (favour), <span class="la">noceō</span> (harm), <span class="la">persuādeō</span> (persuade), <span class="la">crēdō</span> (believe), <span class="la">ignōscō</span> (pardon), <span class="la">imperō</span> (command), <span class="la">parcō</span> (spare), <span class="la">placeō</span> (please), <span class="la">studeō</span> (be eager for), etc. Their passive is <b>impersonal</b>: <span class="la">Mihi persuāsum est.</span> I was persuaded.</li>
        <li><b>Ablative</b>: <span class="la">ūtor, fruor, fungor, potior, vescor</span>.</li>
        <li><b>Genitive</b>: <span class="la">meminī, oblīvīscor</span> (forget), <span class="la">misereor</span> (pity).</li></ul>`
      },
      exs: [{ la: 'Lēgibus pārēre dēbēmus.', ko: '우리는 법에 복종해야 한다.', en: 'We must obey the laws.' }, { la: 'Mihi ignōsce!', ko: '나를 용서해 줘!', en: 'Forgive me!' }]
    },
    {
      h: { ko: '불규칙한 주요 부분 — 완료를 만드는 방식들', en: 'Irregular principal parts — ways of making the perfect' },
      b: {
        ko: `<table class="mini-t"><tr><th>방식</th><th>예</th></tr>
        <tr><td><b>-s- 완료</b> (자음과 결합: x = cs/gs, ps)</td><td><span class="la">dīcō → dīxī, regō → rēxī, scrībō → scrīpsī, mittō → mīsī</span></td></tr>
        <tr><td><b>-u- 완료</b></td><td><span class="la">moneō → monuī, pōnō → posuī, rapiō → rapuī</span></td></tr>
        <tr><td><b>모음 장음화</b></td><td><span class="la">veniō → vēnī, videō → vīdī, legō → lēgī, agō → ēgī</span></td></tr>
        <tr><td><b>모음 변화</b></td><td><span class="la">capiō → cēpī, faciō → fēcī, iaciō → iēcī</span></td></tr>
        <tr><td><b>중복 (첫 음절 반복)</b></td><td><span class="la">dō → dedī, stō → stetī, cadō → cecidī, fallō → fefellī, currō → cucurrī</span></td></tr>
        <tr><td><b>변화 없음</b></td><td><span class="la">vertō → vertī, solvō → solvī, statuō → statuī</span></td></tr>
        <tr><td><b>다른 어근</b></td><td><span class="la">ferō → tulī, tollō → sustulī</span></td></tr></table>
        <p>합성동사는 중복을 잃는 경우가 많아요: <span class="la">cadō → cecidī</span>이지만 <span class="la">occidō → occidī</span>; <span class="la">stō → stetī</span>이지만 <span class="la">cōnsistō → cōnstitī</span>.</p>`,
        en: `<table class="mini-t"><tr><th>Type</th><th>Examples</th></tr>
        <tr><td><b>-s- perfect</b> (x = cs/gs, ps)</td><td><span class="la">dīcō → dīxī, regō → rēxī, scrībō → scrīpsī, mittō → mīsī</span></td></tr>
        <tr><td><b>-u- perfect</b></td><td><span class="la">moneō → monuī, pōnō → posuī, rapiō → rapuī</span></td></tr>
        <tr><td><b>lengthened vowel</b></td><td><span class="la">veniō → vēnī, videō → vīdī, legō → lēgī, agō → ēgī</span></td></tr>
        <tr><td><b>vowel change</b></td><td><span class="la">capiō → cēpī, faciō → fēcī, iaciō → iēcī</span></td></tr>
        <tr><td><b>reduplication</b></td><td><span class="la">dō → dedī, stō → stetī, cadō → cecidī, fallō → fefellī, currō → cucurrī</span></td></tr>
        <tr><td><b>no change</b></td><td><span class="la">vertō → vertī, solvō → solvī, statuō → statuī</span></td></tr>
        <tr><td><b>different root</b></td><td><span class="la">ferō → tulī, tollō → sustulī</span></td></tr></table>
        <p>Compounds usually lose reduplication: <span class="la">cadō → cecidī</span> but <span class="la">occidō → occidī</span>; <span class="la">stō → stetī</span> but <span class="la">cōnsistō → cōnstitī</span>.</p>`
      }
    },
    {
      h: { ko: '주요 부분이 빠진 동사, 수동이 없는 동사, 다른 형태', en: 'Missing parts, no passive, alternative forms' },
      b: {
        ko: `<ul><li><b>목적분사 없음</b>: <span class="la">timeō, timēre, timuī</span>(두려워하다), <span class="la">discō, discere, didicī</span>(배우다).</li>
        <li><b>완료도 목적분사도 없음</b>: <span class="la">maereō</span>(슬퍼하다), <span class="la">fēriō</span>(치다).</li>
        <li><b>수동이 (거의) 없음</b>: 자동사 <span class="la">veniō, stō, cadō, iaceō</span> 등은 비인칭 수동만: <span class="la">Ventum est.</span> (사람들이) 왔다.</li>
        <li><b>다른 형태</b>: <span class="la">lavō</span>(씻다)는 제1·제3활용 형태를 모두 써요; <span class="la">-ēre</span> = <span class="la">-ērunt</span>.</li></ul>`,
        en: `<ul><li><b>No supine</b>: <span class="la">timeō, timēre, timuī</span> (fear), <span class="la">discō, discere, didicī</span> (learn).</li>
        <li><b>No perfect or supine</b>: <span class="la">maereō</span> (grieve), <span class="la">fēriō</span> (strike).</li>
        <li><b>(Almost) no passive</b>: intransitives like <span class="la">veniō, stō, cadō, iaceō</span> have only an impersonal passive: <span class="la">Ventum est.</span> They came.</li>
        <li><b>Alternative forms</b>: <span class="la">lavō</span> (wash) has both 1st and 3rd conjugation forms; <span class="la">-ēre</span> = <span class="la">-ērunt</span>.</li></ul>`
      }
    },
    {
      h: { ko: '비인칭 동사', en: 'Impersonal verbs' },
      b: {
        ko: `<p>3인칭 단수(와 부정사)로만 쓰여요. 주어 "그것"이 없는 듯 옮겨요.</p>
        <table class="mini-t"><tr><td><span class="la">pluit</span> 비가 온다</td><td><span class="la">ningit</span> 눈이 온다</td></tr>
        <tr><td><span class="la">licet</span> (+여격 +부정사) ~해도 된다</td><td><span class="la">oportet</span> (+대격 +부정사) ~해야 한다</td></tr>
        <tr><td><span class="la">placet</span> ~하기로 결정하다, ~가 마음에 든다</td><td><span class="la">decet</span> ~이 어울린다</td></tr>
        <tr><td><span class="la">pudet, paenitet, piget, taedet, miseret</span> + 대격(느끼는 사람) + 속격(대상)</td><td></td></tr></table>`,
        en: `<p>Used only in the 3rd singular (and infinitive), with no personal subject.</p>
        <table class="mini-t"><tr><td><span class="la">pluit</span> it rains</td><td><span class="la">ningit</span> it snows</td></tr>
        <tr><td><span class="la">licet</span> (+dat. +inf.) it is allowed</td><td><span class="la">oportet</span> (+acc. +inf.) one ought</td></tr>
        <tr><td><span class="la">placet</span> it is decided / pleases</td><td><span class="la">decet</span> it is fitting</td></tr>
        <tr><td><span class="la">pudet, paenitet, piget, taedet, miseret</span> + acc. (person) + gen. (cause)</td><td></td></tr></table>`
      },
      exs: [{ la: 'Tibi īre licet.', ko: '너는 가도 된다.', en: 'You may go.' }, { la: 'Mē stultitiae meae pudet.', ko: '나는 내 어리석음이 부끄럽다.', en: 'I am ashamed of my folly.' }, { la: 'Hodiē pluit.', ko: '오늘 비가 온다.', en: 'It is raining today.' }]
    },
    {
      h: { ko: '결여 동사', en: 'Defective verbs' },
      b: {
        ko: `<ul><li><span class="la">coepī</span> (시작했다) — 완료 계열만. 현재 뜻은 <span class="la">incipiō</span>로.</li>
        <li><span class="la">meminī</span> (기억한다), <span class="la">ōdī</span> (미워한다), <span class="la">nōvī</span> (안다; <span class="la">nōscō</span> 알게 되다의 완료) — 형태는 완료, <b>뜻은 현재</b>! 과거완료는 과거, 미래완료는 미래 뜻: <span class="la">meminī</span> 기억한다 / <span class="la">memineram</span> 기억했다 / <span class="la">meminerō</span> 기억할 것이다. 명령법 <span class="la">mementō</span> 기억하라.</li>
        <li><span class="la">āiō</span> (말하다, 그렇다고 하다): <span class="la">āiō, ais, ait, —, —, āiunt</span>.</li>
        <li><span class="la">inquam</span> (말하다) — 직접 인용문 안에 끼워 넣어요: <span class="la">"Venī," inquit, "mēcum."</span> "나와 함께 가자," 하고 그가 말했다.</li></ul>`,
        en: `<ul><li><span class="la">coepī</span> (I began) — perfect system only; the present is supplied by <span class="la">incipiō</span>.</li>
        <li><span class="la">meminī</span> (I remember), <span class="la">ōdī</span> (I hate), <span class="la">nōvī</span> (I know; perfect of <span class="la">nōscō</span> get to know) — perfect in form, <b>present in meaning</b>! Pluperfect = past, future perfect = future: <span class="la">meminī</span> I remember / <span class="la">memineram</span> I remembered / <span class="la">meminerō</span> I will remember. Imperative <span class="la">mementō</span>.</li>
        <li><span class="la">āiō</span> (say, say yes): <span class="la">āiō, ais, ait, —, —, āiunt</span>.</li>
        <li><span class="la">inquam</span> (say) — inserted into direct quotations: <span class="la">"Venī," inquit, "mēcum."</span> “Come with me,” he says.</li></ul>`
      },
      exs: [{ la: 'Ōdī et amō.', ko: '나는 미워하고 또 사랑한다.', en: 'I hate and I love.' }, { la: 'Mementō morī.', ko: '죽음을 기억하라.', en: 'Remember to die (remember death).' }]
    }
  ],
  ex: [
    { t: 'mc', q: { ko: 'persuādeō(설득하다)의 목적어(사람)는 어떤 격인가요?', en: 'persuādeō takes the person persuaded in the…' }, o: [{ ko: '여격', en: 'dative' }, { ko: '대격', en: 'accusative' }, { ko: '탈격', en: 'ablative' }, { ko: '속격', en: 'genitive' }], a: 0 },
    { t: 'mc', q: { ko: '“Mihi persuāsum est.”의 뜻은?', en: 'What does “Mihi persuāsum est” mean?' }, o: [{ ko: '나는 설득되었다', en: 'I was persuaded' }, { ko: '나는 설득했다', en: 'I persuaded' }, { ko: '나를 설득하라', en: 'Persuade me' }, { ko: '설득은 내 것이다', en: 'Persuasion is mine' }], a: 0 },
    { t: 'mc', q: { ko: '“meminī”의 뜻은?', en: 'What does meminī mean?' }, o: [{ ko: '나는 기억한다 (현재 뜻)', en: 'I remember (present meaning)' }, { ko: '나는 기억했다', en: 'I remembered' }, { ko: '나는 기억할 것이다', en: 'I will remember' }, { ko: '기억하라', en: 'remember!' }], a: 0 },
    { t: 'mc', q: { ko: '“odero”(ōderō)의 뜻은?', en: 'What does ōderō mean?' }, o: [{ ko: '나는 미워할 것이다', en: 'I will hate' }, { ko: '나는 미워했었다', en: 'I had hated' }, { ko: '나는 미워한다', en: 'I hate' }, { ko: '미워하라', en: 'hate!' }], a: 0, x: { ko: '미래완료 형태 = 미래 뜻', en: 'future perfect form = future meaning' } },
    { t: 'mc', q: { ko: '“Tibi īre licet.”의 뜻은?', en: 'What does “Tibi īre licet” mean?' }, o: [{ ko: '너는 가도 된다', en: 'You may go' }, { ko: '너는 가야 한다', en: 'You must go' }, { ko: '너는 가고 싶다', en: 'You want to go' }, { ko: '너는 갔다', en: 'You went' }], a: 0 },
    { t: 'mc', q: { ko: '중복(reduplication)으로 완료를 만든 것은?', en: 'Which perfect is formed by reduplication?' }, o: ['cecidī (cadō)', 'vēnī (veniō)', 'mīsī (mittō)', 'monuī (moneō)'], a: 0 },
    { t: 'mc', q: { ko: '“Ventum est.”의 뜻은?', en: 'What does “Ventum est” mean?' }, o: [{ ko: '(사람들이) 도착했다 — 비인칭 수동', en: 'They arrived — impersonal passive' }, { ko: '바람이 분다', en: 'The wind blows' }, { ko: '그는 팔렸다', en: 'He was sold' }, { ko: '오라!', en: 'Come!' }], a: 0 },
    { t: 'fill', q: { ko: 'dīcō(말하다)의 완료 1인칭 단수를 쓰세요.', en: 'Write the 1st sg. perfect of dīcō.' }, a: ['dīxī'] },
    { t: 'fill', q: { ko: 'veniō(오다)의 완료 1인칭 단수를 쓰세요.', en: 'Write the 1st sg. perfect of veniō.' }, a: ['vēnī'] },
    { t: 'fill', q: { ko: 'currō(달리다)의 완료 1인칭 단수를 쓰세요. (중복형)', en: 'Write the 1st sg. perfect of currō (reduplicated).' }, a: ['cucurrī'] },
    { t: 'fill', q: { ko: '“죽음을 기억하라” ___ morī (meminī의 명령법)', en: '“Remember death” ___ morī (imperative of meminī)' }, a: ['mementō'] },
    { t: 'gen', v: 'sto', k: 'ind.act.perf.2' },
    { t: 'gen', v: 'consisto', k: 'ind.act.perf.0' },
    { t: 'gen', v: 'tollo', k: 'ind.act.perf.0' },
    { t: 'gen', v: 'fallo', k: 'ind.act.perf.2' }
  ]
};
