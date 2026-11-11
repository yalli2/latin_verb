window.CH = {
  n: 3,
  part: { ko: '제2부 · 직설법', en: 'Part II · The Indicative' },
  title: { ko: '현재 직설법', en: 'The Present Indicative' },
  topics: [{ ko: '능동·수동 어미', en: 'Active & passive endings' }, { ko: '제3활용의 연결 모음', en: '3rd-conj. linking vowels' }, { ko: '역사적 현재', en: 'Historic present' }, { ko: 'iam + 현재, dum + 현재', en: 'iam / dum + present' }],
  intro: { ko: '현재 시제는 현재 어간에 인칭 어미를 붙여 만들어요. 영어의 "I go / I am going / I do go"가 라틴어에서는 모두 하나의 형태예요.', en: 'The present tense adds personal endings to the present stem. English “I go / I am going / I do go” are all one Latin form.' },
  sec: [
    {
      h: { ko: '능동태 만들기', en: 'Active forms' },
      b: {
        ko: `<p>인칭 어미: <span class="la">-ō/-m, -s, -t, -mus, -tis, -nt</span>. 현재 어간(<b>amā-, monē-, reg-, audī-, capi-</b>)에 붙여요.</p>
        <ul><li>제1·2·4활용: 2인칭 단수 등에서 어간 모음이 <b>길게</b> 나타나요 (<span class="la">amās, monēs, audīs</span>). 단, <span class="la">amō</span>는 <span class="la">ama-ō</span>가 줄어든 형태예요.</li>
        <li>제3활용: 어간이 자음으로 끝나 <span class="la">*regs, *regt</span>처럼 발음하기 어려워지므로 짧은 연결 모음 <b>-i-/-u-</b>를 넣어요: <span class="la">regis, regit, regunt</span>.</li>
        <li>제4활용과 혼합활용의 3인칭 복수는 제3활용과 같은 <span class="la">-iunt</span>: <span class="la">audiunt, capiunt</span>.</li></ul>`,
        en: `<p>Personal endings <span class="la">-ō/-m, -s, -t, -mus, -tis, -nt</span> are added to the present stem (<b>amā-, monē-, reg-, audī-, capi-</b>).</p>
        <ul><li>1st, 2nd, 4th: the stem vowel is <b>long</b> in e.g. the 2nd sg. (<span class="la">amās, monēs, audīs</span>). <span class="la">amō</span> is a contraction of <span class="la">ama-ō</span>.</li>
        <li>3rd: the stem ends in a consonant, so a short linking vowel <b>-i-/-u-</b> avoids clusters like <span class="la">*regs</span>: <span class="la">regis, regit, regunt</span>.</li>
        <li>4th and mixed take <span class="la">-iunt</span> in the 3rd plural, like the 3rd: <span class="la">audiunt, capiunt</span>.</li></ul>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'ind.act.pres' }],
      nf: { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: ['inf.act.pres', 'part.pres'], cap: { ko: '현재 능동 부정사와 현재분사', en: 'Present active infinitive & participle' } }
    },
    {
      h: { ko: '수동태 만들기', en: 'Passive forms' },
      b: {
        ko: `<p>수동 어미: <span class="la">-or, -ris (-re), -tur, -mur, -minī, -ntur</span>.</p>
        <ul><li>2인칭 단수에는 <span class="la">-re</span>로 끝나는 다른 형태도 있어요: <span class="la">amāris = amāre</span>.</li>
        <li>제3활용 2인칭 단수는 <span class="la">regeris</span>(짧은 e), 혼합활용도 <span class="la">caperis</span>.</li>
        <li>현재 수동 부정사: 제1·2·4는 <span class="la">-rī</span> (<span class="la">amārī, monērī, audīrī</span>), 제3·혼합은 <span class="la">-ī</span> (<span class="la">regī, capī</span>).</li>
        <li>현재 <b>수동</b> 분사는 없어요. 현재분사(<span class="la">amāns, amantis</span>)는 제3변화 형용사처럼 격변화해요.</li>
        <li>시인들은 옛 수동 부정사 <span class="la">-ier</span>를 쓰기도 했어요: <span class="la">laudārier = laudārī</span>.</li></ul>`,
        en: `<p>Passive endings: <span class="la">-or, -ris (-re), -tur, -mur, -minī, -ntur</span>.</p>
        <ul><li>The 2nd sg. has an alternative in <span class="la">-re</span>: <span class="la">amāris = amāre</span>.</li>
        <li>3rd conj. 2nd sg. is <span class="la">regeris</span> (short e); mixed <span class="la">caperis</span>.</li>
        <li>Present passive infinitive: 1st/2nd/4th <span class="la">-rī</span> (<span class="la">amārī, monērī, audīrī</span>); 3rd/mixed <span class="la">-ī</span> (<span class="la">regī, capī</span>).</li>
        <li>There is <b>no</b> present passive participle. The present participle (<span class="la">amāns, amantis</span>) declines like a 3rd-declension adjective.</li>
        <li>Poets sometimes used an old passive infinitive in <span class="la">-ier</span>: <span class="la">laudārier = laudārī</span>.</li></ul>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'ind.pass.pres' }],
      nf: { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: ['inf.pass.pres'], cap: { ko: '현재 수동 부정사', en: 'Present passive infinitive' } }
    },
    {
      h: { ko: '현재 시제의 쓰임', en: 'Uses of the present' },
      b: {
        ko: `<ul><li><b>지금의 동작·상태</b>: 영어의 단순·진행·강조 현재를 모두 하나로 표현해요. <span class="la">Rōmam eō</span> = "나는 로마에 간다 / 가고 있다 / 정말 간다". 의문문도 같은 형태에 <span class="la">-ne</span> 등을 붙여요.</li>
        <li><b>역사적 현재</b>: 과거 이야기를 생생하게 하려고 현재형을 써요. 한 문장 안에서 과거형과 섞이기도 해요.</li>
        <li><b>iam(이미) + 현재</b>: "지금까지 계속 ~해 오고 있다" — 영어는 현재완료로 옮겨요.</li>
        <li><b>dum(~하는 동안) + 현재</b>: 과거 이야기 속에서도 <span class="la">dum</span>이 "~하는 동안"이면 현재형을 써요.</li></ul>`,
        en: `<ul><li><b>Present action or state</b>: one Latin form covers simple, continuous and emphatic present. <span class="la">Rōmam eō</span> = “I go / am going / do go to Rome”. Questions use the same form (often with <span class="la">-ne</span>).</li>
        <li><b>Historic present</b>: in past narrative, the present makes events vivid, sometimes mixed with past tenses in one sentence.</li>
        <li><b>iam + present</b>: an action that has been going on until now — English uses the perfect.</li>
        <li><b>dum (“while”) + present</b>: even in past narrative, <span class="la">dum</span> meaning “while” takes the present.</li></ul>`
      },
      exs: [
        { la: 'Mārcum vidēs. — Mārcumne vidēs?', ko: '너는 마르쿠스를 본다. — 너는 마르쿠스를 보니?', en: 'You see Marcus. — Do you see Marcus?' },
        { la: 'Caesar castra movet et ad hostēs contendit.', ko: '카이사르는 진영을 옮겨 적에게로 서둘러 간다. (역사적 현재)', en: 'Caesar moves camp and hurries toward the enemy. (historic present)' },
        { la: 'Decem iam annōs in hāc urbe habitō.', ko: '나는 이 도시에 벌써 10년째 살고 있다.', en: 'I have been living in this city for ten years now.' },
        { la: 'Dum hostēs dēlīberant, nostrī oppidum occupāvērunt.', ko: '적들이 논의하는 동안 우리 편이 마을을 점령했다.', en: 'While the enemy were deliberating, our men seized the town.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'ind.act.pres.1' },
    { t: 'gen', v: 'moneo', k: 'ind.act.pres.3' },
    { t: 'gen', v: 'rego', k: 'ind.act.pres.5' },
    { t: 'gen', v: 'audio', k: 'ind.act.pres.5' },
    { t: 'gen', v: 'capio', k: 'ind.act.pres.4' },
    { t: 'gen', v: 'mitto', k: 'ind.act.pres.2' },
    { t: 'gen', v: 'rego', k: 'ind.pass.pres.1' },
    { t: 'gen', v: 'amo', k: 'ind.pass.pres.5' },
    { t: 'gen', v: 'audio', k: 'ind.pass.pres.2' },
    { t: 'gen', v: 'video', k: 'inf.pass.pres' },
    { t: 'gen', v: 'capio', k: 'inf.pass.pres' },
    { t: 'parse', v: 'rego', k: 'ind.act.pres.3' },
    { t: 'parse', v: 'moneo', k: 'ind.pass.pres.4' },
    { t: 'parse', v: 'capio', k: 'ind.pass.pres.1' },
    { t: 'mc', q: { ko: '“Rōmam eō”의 알맞은 번역을 모두 포함한 것은?', en: 'Which covers the possible translations of “Rōmam eō”?' }, o: [{ ko: '간다 / 가고 있다 / 정말 간다 — 모두 가능', en: 'I go / I am going / I do go — all possible' }, { ko: '“가고 있다”만 가능', en: 'only “I am going”' }, { ko: '“갔다”만 가능', en: 'only “I went”' }, { ko: '“갈 것이다”만 가능', en: 'only “I will go”' }], a: 0 },
    { t: 'mc', q: { ko: '다음 문장의 iam + 현재는 어떻게 옮기는 것이 자연스러울까요?', en: 'How is iam + present best translated here?' }, la: 'Trēs iam hōrās tē exspectō.', o: [{ ko: '나는 벌써 세 시간째 너를 기다리고 있다', en: 'I have been waiting for you for three hours' }, { ko: '나는 세 시간 뒤에 너를 기다릴 것이다', en: 'I will wait for you in three hours' }, { ko: '나는 세 시간 전에 너를 기다렸다', en: 'I waited for you three hours ago' }, { ko: '세 시간 동안 나를 기다려라', en: 'Wait for me for three hours' }], a: 0 },
    { t: 'mc', q: { ko: '제3활용 현재에서 regis, regit처럼 짧은 모음 i를 넣는 이유는?', en: 'Why does the 3rd conjugation insert a short i (regis, regit)?' }, o: [{ ko: '자음이 연달아 오는 것을 피하려고', en: 'to avoid two consonants clashing' }, { ko: '장음을 표시하려고', en: 'to mark a long vowel' }, { ko: '수동태를 만들려고', en: 'to form the passive' }, { ko: '복수를 나타내려고', en: 'to mark the plural' }], a: 0 },
    { t: 'mc', q: { ko: '현재 수동 분사에 대한 설명으로 옳은 것은?', en: 'What is true of the present passive participle?' }, o: [{ ko: '라틴어에는 존재하지 않는다', en: 'Latin does not have one' }, { ko: '-ns로 끝난다', en: 'it ends in -ns' }, { ko: '-tus로 끝난다', en: 'it ends in -tus' }, { ko: '-ndus로 끝난다', en: 'it ends in -ndus' }], a: 0 }
  ]
};
