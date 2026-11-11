window.CH = {
  n: 2,
  part: { ko: '제1부 · 동사의 기초', en: 'Part I · Foundations' },
  title: { ko: '주요 부분과 세 가지 어간', en: 'Principal Parts and the Three Stems' },
  topics: [{ ko: '네 개의 주요 부분', en: 'Four principal parts' }, { ko: '활용 구별법', en: 'Identifying the conjugation' }, { ko: '현재·완료·목적분사 어간', en: 'Present, perfect, supine stems' }, { ko: '진짜 불규칙 동사 11개', en: 'The 11 truly irregular verbs' }],
  intro: { ko: '사전에서 라틴어 동사를 찾으면 네 개의 형태가 함께 나와요. 이것이 "주요 부분(principal parts)"이고, 이 넷만 알면 거의 모든 형태를 만들 수 있어요.', en: 'A dictionary lists a Latin verb with four forms — its principal parts. Know these four and you can build almost every other form.' },
  sec: [
    {
      h: { ko: '네 개의 주요 부분', en: 'The four principal parts' },
      b: {
        ko: `<ol><li><b>현재 직설법 능동태 1인칭 단수</b> — 사전의 표제어 (<span class="la">amō</span>)</li>
        <li><b>현재 능동 부정사</b> (<span class="la">amāre</span>)</li>
        <li><b>완료 직설법 능동태 1인칭 단수</b> (<span class="la">amāvī</span>)</li>
        <li><b>목적분사(supine)</b> (<span class="la">amātum</span>)</li></ol>
        <p>영어 사전이 부정사(<i>love</i>)로 동사를 싣는 것과 달리, 라틴어 사전은 1인칭 단수(<span class="la">amō</span>)로 실어요.</p>`,
        en: `<ol><li><b>1st sg. present indicative active</b> — the dictionary headword (<span class="la">amō</span>)</li>
        <li><b>present active infinitive</b> (<span class="la">amāre</span>)</li>
        <li><b>1st sg. perfect indicative active</b> (<span class="la">amāvī</span>)</li>
        <li><b>supine</b> (<span class="la">amātum</span>)</li></ol>
        <p>English dictionaries list the infinitive (<i>love</i>); Latin dictionaries list the 1st singular (<span class="la">amō</span>).</p>`
      },
      tables: [{
        cap: { ko: '다섯 모델 동사의 주요 부분', en: 'Principal parts of the five models' },
        head: ['', { ko: '1 (amō)', en: '1 (amō)' }, { ko: '2 (moneō)', en: '2 (moneō)' }, { ko: '3 (regō)', en: '3 (regō)' }, { ko: '4 (audiō)', en: '4 (audiō)' }, { ko: '혼합 (capiō)', en: 'Mixed (capiō)' }],
        rows: [
          [{ ko: '현재 1인칭 단수', en: '1st sg. present' }, 'amō', 'moneō', 'regō', 'audiō', 'capiō'],
          [{ ko: '현재 부정사', en: 'present infinitive' }, 'amāre', 'monēre', 'regere', 'audīre', 'capere'],
          [{ ko: '완료 1인칭 단수', en: '1st sg. perfect' }, 'amāvī', 'monuī', 'rēxī', 'audīvī', 'cēpī'],
          [{ ko: '목적분사', en: 'supine' }, 'amātum', 'monitum', 'rēctum', 'audītum', 'captum']
        ]
      }]
    },
    {
      h: { ko: '활용을 구별하는 법', en: 'How to tell the conjugation' },
      b: {
        ko: `<p>첫 번째와 두 번째 주요 부분의 <b>어미</b>를 함께 보면 활용이 정해져요.</p>
        <table class="mini-t"><tr><th>1인칭 단수</th><th>부정사</th><th>활용</th><th>예</th></tr>
        <tr><td>-ō</td><td>-āre</td><td>제1활용</td><td><span class="la">portō, portāre</span></td></tr>
        <tr><td>-eō</td><td>-ēre</td><td>제2활용</td><td><span class="la">habeō, habēre</span></td></tr>
        <tr><td>-ō</td><td>-ere (짧은 e)</td><td>제3활용</td><td><span class="la">mittō, mittere</span></td></tr>
        <tr><td>-iō</td><td>-īre</td><td>제4활용</td><td><span class="la">veniō, venīre</span></td></tr>
        <tr><td>-iō</td><td>-ere (짧은 e)</td><td>혼합활용</td><td><span class="la">faciō, facere</span></td></tr></table>
        <div class="box warn"><b>주의!</b> -ēre(긴 e)는 제2활용, -ere(짧은 e)는 제3활용이에요. 장음 부호가 결정적인 단서예요.</div>
        <p>혼합활용 동사는 수는 적지만 아주 자주 쓰여요: <span class="la">capiō, cupiō, faciō, fodiō, fugiō, iaciō, pariō, quatiō, rapiō, sapiō</span>와 <span class="la">-spiciō, -liciō, -cutiō</span>로 끝나는 합성동사들.</p>
        <p>제1활용인데 1인칭이 -eō, -iō로 끝나는 동사도 있어요: <span class="la">creō, creāre</span>(창조하다), <span class="la">nūntiō, nūntiāre</span>(알리다). 부정사가 -āre이므로 제1활용이에요.</p>`,
        en: `<p>Look at the endings of the first two principal parts together.</p>
        <table class="mini-t"><tr><th>1st sg.</th><th>infinitive</th><th>conjugation</th><th>example</th></tr>
        <tr><td>-ō</td><td>-āre</td><td>1st</td><td><span class="la">portō, portāre</span></td></tr>
        <tr><td>-eō</td><td>-ēre</td><td>2nd</td><td><span class="la">habeō, habēre</span></td></tr>
        <tr><td>-ō</td><td>-ere (short e)</td><td>3rd</td><td><span class="la">mittō, mittere</span></td></tr>
        <tr><td>-iō</td><td>-īre</td><td>4th</td><td><span class="la">veniō, venīre</span></td></tr>
        <tr><td>-iō</td><td>-ere (short e)</td><td>mixed</td><td><span class="la">faciō, facere</span></td></tr></table>
        <div class="box warn"><b>Careful!</b> -ēre (long e) is 2nd conjugation, -ere (short e) is 3rd. The macron is the key clue.</div>
        <p>Mixed verbs are few but very common: <span class="la">capiō, cupiō, faciō, fodiō, fugiō, iaciō, pariō, quatiō, rapiō, sapiō</span> and compounds in <span class="la">-spiciō, -liciō, -cutiō</span>.</p>
        <p>A few 1st-conjugation verbs end in -eō or -iō: <span class="la">creō, creāre</span> (create), <span class="la">nūntiō, nūntiāre</span> (announce). The infinitive in -āre settles it.</p>`
      }
    },
    {
      h: { ko: '세 가지 어간과 그 쓰임', en: 'The three stems and what they build' },
      b: {
        ko: `<table class="mini-t"><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>혼합</th></tr>
        <tr><td><b>현재 어간</b></td><td>amā-</td><td>monē-</td><td>reg-</td><td>audī-</td><td>capi-</td></tr>
        <tr><td><b>완료 어간</b></td><td>amāv-</td><td>monu-</td><td>rēx-</td><td>audīv-</td><td>cēp-</td></tr>
        <tr><td><b>목적분사 어간</b></td><td>amāt-</td><td>monit-</td><td>rēct-</td><td>audīt-</td><td>capt-</td></tr></table>
        <ul><li><b>현재 어간</b> → 현재·미완료·미래 직설법(능동·수동), 현재·미완료 접속법, 명령법, 현재분사, 동명사, 동형용사</li>
        <li><b>완료 어간</b> → 완료·과거완료·미래완료 직설법 능동, 완료·과거완료 접속법 능동, 완료 능동 부정사</li>
        <li><b>목적분사 어간</b> → 목적분사, 미래분사(<span class="la">amātūrus</span>), 완료 수동 분사(<span class="la">amātus</span>) → 모든 완료 계열 수동태와 미래·완료 부정사</li></ul>`,
        en: `<table class="mini-t"><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>Mixed</th></tr>
        <tr><td><b>Present stem</b></td><td>amā-</td><td>monē-</td><td>reg-</td><td>audī-</td><td>capi-</td></tr>
        <tr><td><b>Perfect stem</b></td><td>amāv-</td><td>monu-</td><td>rēx-</td><td>audīv-</td><td>cēp-</td></tr>
        <tr><td><b>Supine stem</b></td><td>amāt-</td><td>monit-</td><td>rēct-</td><td>audīt-</td><td>capt-</td></tr></table>
        <ul><li><b>Present stem</b> → present, imperfect, future indicative (active & passive), present & imperfect subjunctive, imperatives, present participle, gerund, gerundive</li>
        <li><b>Perfect stem</b> → perfect, pluperfect, future perfect indicative active; perfect & pluperfect subjunctive active; perfect active infinitive</li>
        <li><b>Supine stem</b> → supine, future participle (<span class="la">amātūrus</span>), perfect passive participle (<span class="la">amātus</span>) → all perfect-system passives and the future/perfect infinitives</li></ul>`
      }
    },
    {
      h: { ko: '규칙적인 주요 부분의 패턴', en: 'Regular patterns' },
      b: {
        ko: `<p>제1·2·4활용 동사 대부분은 예측 가능한 주요 부분을 가져요.</p>
        <ul><li><b>제1활용</b>: 현재 어간의 -ā- → 완료 -āv-, 목적분사 -āt- (<span class="la">portō, portāre, portāvī, portātum</span>)</li>
        <li><b>제2활용</b>: -ē- → 완료 -u-, 목적분사 -it- (<span class="la">habeō, habēre, habuī, habitum</span>)</li>
        <li><b>제4활용</b>: -ī- → 완료 -īv-, 목적분사 -īt- (<span class="la">mūniō, mūnīre, mūnīvī, mūnītum</span>)</li></ul>
        <p>제3활용과 혼합활용은 패턴이 제각각이라 <b>주요 부분을 외워야</b> 해요: <span class="la">dūcō, dūcere, dūxī, ductum</span> / <span class="la">capiō, capere, cēpī, captum</span>.</p>
        <p>일부 동사는 주요 부분이 빠져 있어요. 목적분사가 없고 미래분사만 있는 경우 넷째 자리에 미래분사를 써요: <span class="la">fugiō, fugere, fūgī, fugitūrus</span>. 없는 부분은 "—"로 표시해요.</p>`,
        en: `<p>Most 1st, 2nd and 4th conjugation verbs have predictable principal parts.</p>
        <ul><li><b>1st</b>: stem -ā- → perfect -āv-, supine -āt- (<span class="la">portō, portāre, portāvī, portātum</span>)</li>
        <li><b>2nd</b>: -ē- → perfect -u-, supine -it- (<span class="la">habeō, habēre, habuī, habitum</span>)</li>
        <li><b>4th</b>: -ī- → perfect -īv-, supine -īt- (<span class="la">mūniō, mūnīre, mūnīvī, mūnītum</span>)</li></ul>
        <p>For the 3rd and mixed conjugations there is no reliable pattern — <b>learn the principal parts</b>: <span class="la">dūcō, dūcere, dūxī, ductum</span> / <span class="la">capiō, capere, cēpī, captum</span>.</p>
        <p>Some verbs lack a part. If there is no supine but there is a future participle, that participle is given fourth: <span class="la">fugiō, fugere, fūgī, fugitūrus</span>. Missing parts are shown as “—”.</p>`
      },
      exs: [
        { la: 'portō, portāre, portāvī, portātum', ko: '나르다 (규칙 제1활용)', en: 'carry (regular 1st)' },
        { la: 'habeō, habēre, habuī, habitum', ko: '가지다 (규칙 제2활용)', en: 'have (regular 2nd)' },
        { la: 'dūcō, dūcere, dūxī, ductum', ko: '이끌다 (제3활용 — 암기)', en: 'lead (3rd — memorise)' },
        { la: 'fugiō, fugere, fūgī, fugitūrus', ko: '도망치다 (넷째 자리에 미래분사)', en: 'flee (future participle in 4th place)' }
      ]
    },
    {
      h: { ko: '진짜 불규칙 동사 11개', en: 'The eleven truly irregular verbs' },
      b: {
        ko: `<p>주요 부분을 알아도 일부 형태를 만들 수 없는 "진짜" 불규칙 동사는 11개뿐이에요. 제19·20장에서 자세히 배워요.</p>
        <table class="mini-t"><tr><td><span class="la">sum</span> ~이다</td><td><span class="la">possum</span> ~할 수 있다</td><td><span class="la">eō</span> 가다</td><td><span class="la">ferō</span> 나르다</td></tr>
        <tr><td><span class="la">volō</span> 원하다</td><td><span class="la">nōlō</span> 원치 않다</td><td><span class="la">mālō</span> 더 원하다</td><td><span class="la">fīō</span> 되다</td></tr>
        <tr><td><span class="la">edō</span> 먹다</td><td><span class="la">āiō</span> 말하다</td><td><span class="la">inquam</span> 말하다</td><td></td></tr></table>`,
        en: `<p>Only eleven verbs are genuinely irregular — some of their forms cannot be derived from the principal parts. See chapters 19–20.</p>
        <table class="mini-t"><tr><td><span class="la">sum</span> be</td><td><span class="la">possum</span> be able</td><td><span class="la">eō</span> go</td><td><span class="la">ferō</span> carry</td></tr>
        <tr><td><span class="la">volō</span> want</td><td><span class="la">nōlō</span> not want</td><td><span class="la">mālō</span> prefer</td><td><span class="la">fīō</span> become</td></tr>
        <tr><td><span class="la">edō</span> eat</td><td><span class="la">āiō</span> say</td><td><span class="la">inquam</span> say</td><td></td></tr></table>`
      }
    }
  ],
  ex: [
    { t: 'mc', q: { ko: 'monēre는 어느 활용인가요?', en: 'Which conjugation is monēre?' }, o: [{ ko: '제2활용', en: '2nd' }, { ko: '제3활용', en: '3rd' }, { ko: '제1활용', en: '1st' }, { ko: '제4활용', en: '4th' }], a: 0, x: { ko: '-eō / -ēre(긴 e) → 제2활용', en: '-eō / -ēre (long e) → 2nd' } },
    { t: 'mc', q: { ko: 'mittō, mittere는 어느 활용인가요?', en: 'Which conjugation is mittō, mittere?' }, o: [{ ko: '제3활용', en: '3rd' }, { ko: '제2활용', en: '2nd' }, { ko: '혼합활용', en: 'mixed' }, { ko: '제1활용', en: '1st' }], a: 0 },
    { t: 'mc', q: { ko: 'faciō, facere는 어느 활용인가요?', en: 'Which conjugation is faciō, facere?' }, o: [{ ko: '혼합활용', en: 'mixed' }, { ko: '제4활용', en: '4th' }, { ko: '제3활용', en: '3rd' }, { ko: '제2활용', en: '2nd' }], a: 0, x: { ko: '-iō인데 부정사가 짧은 -ere → 혼합활용', en: '-iō with infinitive in short -ere → mixed' } },
    { t: 'mc', q: { ko: 'veniō, venīre는 어느 활용인가요?', en: 'Which conjugation is veniō, venīre?' }, o: [{ ko: '제4활용', en: '4th' }, { ko: '혼합활용', en: 'mixed' }, { ko: '제3활용', en: '3rd' }, { ko: '제1활용', en: '1st' }], a: 0 },
    { t: 'mc', q: { ko: 'nūntiō, nūntiāre는 어느 활용인가요?', en: 'Which conjugation is nūntiō, nūntiāre?' }, o: [{ ko: '제1활용', en: '1st' }, { ko: '제4활용', en: '4th' }, { ko: '혼합활용', en: 'mixed' }, { ko: '제2활용', en: '2nd' }], a: 0, x: { ko: '1인칭이 -iō라도 부정사가 -āre이면 제1활용', en: 'Despite -iō, the infinitive in -āre makes it 1st conjugation.' } },
    { t: 'mc', q: { ko: '완료 수동태(amātus sum)는 어느 어간에서 만드나요?', en: 'Which stem builds the perfect passive (amātus sum)?' }, o: [{ ko: '목적분사 어간', en: 'supine stem' }, { ko: '완료 어간', en: 'perfect stem' }, { ko: '현재 어간', en: 'present stem' }, { ko: '부정사', en: 'infinitive' }], a: 0 },
    { t: 'mc', q: { ko: '미완료 직설법(amābam)은 어느 어간에서 만드나요?', en: 'Which stem builds the imperfect indicative (amābam)?' }, o: [{ ko: '현재 어간', en: 'present stem' }, { ko: '완료 어간', en: 'perfect stem' }, { ko: '목적분사 어간', en: 'supine stem' }, { ko: '미래분사', en: 'future participle' }], a: 0 },
    { t: 'mc', q: { ko: '다음 중 “진짜 불규칙 동사”가 아닌 것은?', en: 'Which is NOT one of the truly irregular verbs?' }, o: [{ ko: 'capiō', en: 'capiō' }, { ko: 'ferō', en: 'ferō' }, { ko: 'volō', en: 'volō' }, { ko: 'fīō', en: 'fīō' }], a: 0 },
    { t: 'fill', q: { ko: '규칙 제1활용 portō, portāre의 완료형(셋째 주요 부분)을 쓰세요.', en: 'Write the perfect (3rd principal part) of regular portō, portāre.' }, a: ['portāvī'] },
    { t: 'fill', q: { ko: '규칙 제1활용 portō, portāre의 목적분사(넷째 주요 부분)를 쓰세요.', en: 'Write the supine of regular portō, portāre.' }, a: ['portātum'] },
    { t: 'fill', q: { ko: '규칙 제2활용 habeō, habēre의 완료형을 쓰세요.', en: 'Write the perfect of regular habeō, habēre.' }, a: ['habuī'] },
    { t: 'fill', q: { ko: '규칙 제4활용 mūniō, mūnīre(요새화하다)의 완료형을 쓰세요.', en: 'Write the perfect of regular mūniō, mūnīre (fortify).' }, a: ['mūnīvī', 'mūniī'] },
    { t: 'fill', q: { ko: 'regō의 완료 어간(어미 -ī를 뗀 형태)을 쓰세요.', en: 'Write the perfect stem of regō (perfect minus -ī).' }, a: ['rēx', 'rēx-'] },
    { t: 'fill', q: { ko: 'capiō의 현재 부정사(둘째 주요 부분)를 쓰세요.', en: 'Write the present infinitive of capiō.' }, a: ['capere'] },
    { t: 'gen', v: 'audio', k: 'inf.act.pres' },
    { t: 'gen', v: 'moneo', k: 'supine' }
  ]
};
