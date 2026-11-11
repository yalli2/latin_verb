window.CH = {
  n: 1,
  part: { ko: '제1부 · 동사의 기초', en: 'Part I · Foundations' },
  title: { ko: '활용의 기초: 인칭·수·시제·법·태', en: 'Basics of Conjugation: Person, Number, Tense, Mood, Voice' },
  topics: [{ ko: '한정형과 비한정형', en: 'Finite vs non-finite' }, { ko: '인칭과 수', en: 'Person & number' }, { ko: '시제·법·태', en: 'Tense, mood, voice' }, { ko: '장음과 발음', en: 'Vowel length' }],
  intro: { ko: '동사를 "활용(conjugate)"한다는 것은 한 동사가 가질 수 있는 모든 형태를 나열하는 일이에요. 라틴어 동사 하나는 100개가 넘는 형태를 가지지만, 그 뒤에는 다섯 가지 범주가 질서 있게 숨어 있어요.', en: 'To conjugate a verb is to list all the forms it can take. A single Latin verb has well over a hundred forms, but they are organised by just five categories.' },
  sec: [
    {
      h: { ko: '다섯 가지 활용 유형', en: 'Five conjugation patterns' },
      b: {
        ko: `<p>거의 모든 라틴어 동사는 다섯 가지 유형 중 하나로 변해요: <b>제1·제2·제3·제4활용</b>과 3·4활용의 성격을 섞은 <b>혼합활용</b>입니다. 이 사이트에서는 다섯 개의 모델 동사로 각 유형을 익혀요.</p>
        <table class="mini-t"><tr><th>활용</th><th>모델 동사</th><th>뜻</th></tr>
        <tr><td>제1활용</td><td><span class="la">amō</span></td><td>사랑하다</td></tr>
        <tr><td>제2활용</td><td><span class="la">moneō</span></td><td>경고하다</td></tr>
        <tr><td>제3활용</td><td><span class="la">regō</span></td><td>다스리다</td></tr>
        <tr><td>제4활용</td><td><span class="la">audiō</span></td><td>듣다</td></tr>
        <tr><td>혼합활용</td><td><span class="la">capiō</span></td><td>잡다</td></tr></table>`,
        en: `<p>Almost every Latin verb follows one of five patterns: the <b>first, second, third and fourth conjugations</b>, plus a <b>mixed conjugation</b> that combines features of the third and fourth. On this site each pattern is learned through one model verb.</p>
        <table class="mini-t"><tr><th>Conjugation</th><th>Model</th><th>Meaning</th></tr>
        <tr><td>1st</td><td><span class="la">amō</span></td><td>love</td></tr>
        <tr><td>2nd</td><td><span class="la">moneō</span></td><td>warn</td></tr>
        <tr><td>3rd</td><td><span class="la">regō</span></td><td>rule</td></tr>
        <tr><td>4th</td><td><span class="la">audiō</span></td><td>hear</td></tr>
        <tr><td>Mixed</td><td><span class="la">capiō</span></td><td>take</td></tr></table>`
      }
    },
    {
      h: { ko: '한정형과 비한정형', en: 'Finite and non-finite forms' },
      b: {
        ko: `<p><b>한정형(finite)</b>은 혼자서 절(문장)을 이룰 수 있는 형태예요. 영어 <i>I wrote a letter</i>의 <i>wrote</i>처럼요. <b>비한정형(non-finite)</b>은 혼자서는 절을 만들지 못해요. <i>I writing a letter</i>는 문장이 아니죠.</p>
        <p>라틴어의 비한정형은 다섯 가지예요: <b>부정사(infinitive), 분사(participle), 동형용사(gerundive), 동명사(gerund), 목적분사(supine)</b>. 나머지는 모두 한정형이에요.</p>
        <div class="box tip">한정형만 <b>인칭</b>을 가져요. 부정사·분사 등에는 "1인칭"이 없어요.</div>`,
        en: `<p>A <b>finite</b> form can make a clause on its own, like <i>wrote</i> in <i>I wrote a letter</i>. A <b>non-finite</b> form cannot: <i>I writing a letter</i> is not a sentence.</p>
        <p>Latin has five non-finite forms: the <b>infinitive, participle, gerundive, gerund and supine</b>. Everything else is finite.</p>
        <div class="box tip">Only finite forms have <b>person</b>. There is no “first person” of an infinitive or participle.</div>`
      }
    },
    {
      h: { ko: '인칭과 수', en: 'Person and number' },
      b: {
        ko: `<p>라틴어 동사는 <b>단수/복수</b>, 그리고 <b>1·2·3인칭</b>을 어미로 표시해요. 그래서 주어 대명사를 따로 쓰지 않아도 돼요: <span class="la">amō</span> = "나는 사랑한다".</p>
        <p>한국어·영어와 다른 점: 라틴어는 2인칭에도 <b>단수(한 사람에게)</b>와 <b>복수(여러 사람에게)</b>가 따로 있어요. 반면 존댓말(높임 형태)은 없어서, 노예와 주인도 서로 2인칭 단수로 말했어요.</p>
        <div class="box">동사는 반드시 주어와 <b>인칭·수가 일치</b>해야 해요. 주어가 "우리"면 동사도 1인칭 복수!</div>`,
        en: `<p>Latin endings show <b>singular/plural</b> and <b>1st, 2nd, 3rd person</b>, so subject pronouns are usually unnecessary: <span class="la">amō</span> = “I love”.</p>
        <p>Unlike modern English, Latin has separate <b>singular</b> and <b>plural</b> forms of “you”. It has no polite form, though — a master and a slave both used the 2nd singular.</p>
        <div class="box">A finite verb must <b>agree</b> with its subject in person and number.</div>`
      },
      para: [{ v: ['amo', 'sum'], k: 'ind.act.pres', cap: { ko: '인칭·수 어미 보기 (현재)', en: 'Person/number endings (present)' } }]
    },
    {
      h: { ko: '시제 (tense) — 여섯 가지', en: 'Tense — six of them' },
      b: {
        ko: `<p>라틴어에는 <b>현재·미완료·미래·완료·과거완료·미래완료</b>의 여섯 시제가 있어요. 앞의 셋은 <b>현재 어간</b>, 뒤의 셋은 <b>완료 어간</b>에서 만들어요.</p>
        <table class="mini-t"><tr><th>시제</th><th>예 (vincō 이기다)</th><th>뜻</th></tr>
        <tr><td>현재</td><td><span class="la">vincō</span></td><td>나는 이긴다</td></tr>
        <tr><td>미완료</td><td><span class="la">vincēbam</span></td><td>나는 이기고 있었다</td></tr>
        <tr><td>미래</td><td><span class="la">vincam</span></td><td>나는 이길 것이다</td></tr>
        <tr><td>완료</td><td><span class="la">vīcī</span></td><td>나는 이겼다</td></tr>
        <tr><td>과거완료</td><td><span class="la">vīceram</span></td><td>나는 (그전에) 이겼었다</td></tr>
        <tr><td>미래완료</td><td><span class="la">vīcerō</span></td><td>나는 이겨 있을 것이다</td></tr></table>`,
        en: `<p>Latin has six tenses: <b>present, imperfect, future, perfect, pluperfect, future perfect</b>. The first three are built on the <b>present stem</b>, the last three on the <b>perfect stem</b>.</p>
        <table class="mini-t"><tr><th>Tense</th><th>vincō (conquer)</th><th>Meaning</th></tr>
        <tr><td>Present</td><td><span class="la">vincō</span></td><td>I conquer</td></tr>
        <tr><td>Imperfect</td><td><span class="la">vincēbam</span></td><td>I was conquering</td></tr>
        <tr><td>Future</td><td><span class="la">vincam</span></td><td>I will conquer</td></tr>
        <tr><td>Perfect</td><td><span class="la">vīcī</span></td><td>I conquered / have conquered</td></tr>
        <tr><td>Pluperfect</td><td><span class="la">vīceram</span></td><td>I had conquered</td></tr>
        <tr><td>Future perfect</td><td><span class="la">vīcerō</span></td><td>I will have conquered</td></tr></table>`
      }
    },
    {
      h: { ko: '법 (mood)과 태 (voice)', en: 'Mood and voice' },
      b: {
        ko: `<p><b>법(mood)</b>은 말하는 사람의 태도를 나타내요.</p>
        <ul><li><b>직설법(indicative)</b> — 사실을 말함: "카이사르가 강을 건넜다."</li>
        <li><b>접속법(subjunctive)</b> — 가능성·소원·가정 등: "그가 건넌다면…", "건너기를!"</li>
        <li><b>명령법(imperative)</b> — 명령: "건너라!"</li></ul>
        <p><b>태(voice)</b>는 주어가 행동을 하는지 받는지를 보여 줘요.</p>
        <ul><li><b>능동태</b>: <span class="la">Marcus Iūliam videt.</span> 마르쿠스가 율리아를 본다.</li>
        <li><b>수동태</b>: <span class="la">Iūlia ā Marcō vidētur.</span> 율리아가 마르쿠스에게 보인다.</li></ul>`,
        en: `<p><b>Mood</b> shows the speaker’s attitude.</p>
        <ul><li><b>Indicative</b> — states a fact: “Caesar crossed the river.”</li>
        <li><b>Subjunctive</b> — possibility, wish, supposition: “if he were to cross…”, “may he cross!”</li>
        <li><b>Imperative</b> — gives an order: “Cross!”</li></ul>
        <p><b>Voice</b> shows whether the subject acts or is acted upon.</p>
        <ul><li><b>Active</b>: <span class="la">Marcus Iūliam videt.</span> Marcus sees Julia.</li>
        <li><b>Passive</b>: <span class="la">Iūlia ā Marcō vidētur.</span> Julia is seen by Marcus.</li></ul>`
      },
      exs: [
        { la: 'Mīles flūmen trānsit.', ko: '병사가 강을 건넌다. (직설법·능동)', en: 'The soldier crosses the river. (indicative active)' },
        { la: 'Utinam mīles flūmen trānseat!', ko: '병사가 강을 건너기를! (접속법)', en: 'May the soldier cross the river! (subjunctive)' },
        { la: 'Trānsī flūmen, mīles!', ko: '병사여, 강을 건너라! (명령법)', en: 'Cross the river, soldier! (imperative)' },
        { la: 'Urbs ā mīlitibus capitur.', ko: '도시가 병사들에 의해 점령된다. (수동태)', en: 'The city is captured by the soldiers. (passive)' }
      ]
    },
    {
      h: { ko: '장음 표시와 발음 요령', en: 'Vowel length and pronunciation' },
      b: {
        ko: `<p>라틴어 모음에는 <b>장모음</b>과 <b>단모음</b>이 있어요. 이 사이트에서는 장모음 위에 <b>장음 부호(macron)</b>를 붙여요: <span class="la">vēnī</span>(나는 왔다) vs <span class="la">venit</span>(그는 온다). 장단이 형태를 구별하기도 해요: <span class="la">venit</span>(현재) / <span class="la">vēnit</span>(완료).</p>
        <ul><li>모음 사이의 <b>i</b>는 겹자음처럼 읽어요: <span class="la">maior</span> → "마이요르".</li>
        <li><span class="la">iaciō</span>(던지다)의 합성동사는 <span class="la">-iciō</span>로 써요: <span class="la">abiciō</span>(내던지다), <span class="la">dēiciō</span>(던져 내리다).</li>
        <li>고전 발음에서 <b>c, g</b>는 늘 딱딱하게(ㅋ, ㄱ), <b>v</b>는 영어 w처럼, <b>ae</b>는 "아이"로 읽어요.</li></ul>
        <div class="box tip">연습문제에서 라틴어를 쓸 때 장음 부호는 생략해도 정답으로 인정돼요. 입력창 아래 ā ē ī ō ū 버튼으로 넣을 수도 있어요.</div>`,
        en: `<p>Latin vowels are either <b>long</b> or <b>short</b>. Long vowels carry a <b>macron</b> here: <span class="la">vēnī</span> (I came) vs <span class="la">venit</span> (he comes). Length can distinguish forms: <span class="la">venit</span> (present) / <span class="la">vēnit</span> (perfect).</p>
        <ul><li><b>i</b> between vowels sounds double: <span class="la">maior</span> → “may-yor”.</li>
        <li>Compounds of <span class="la">iaciō</span> (throw) are written <span class="la">-iciō</span>: <span class="la">abiciō</span>, <span class="la">dēiciō</span>.</li>
        <li>In Classical pronunciation <b>c, g</b> are always hard, <b>v</b> sounds like English w, <b>ae</b> like “eye”.</li></ul>
        <div class="box tip">Macrons are optional when you type answers. You can also insert them with the ā ē ī ō ū buttons.</div>`
      },
      exs: [
        { la: 'venit — vēnit', ko: '그는 온다 — 그는 왔다', en: 'he comes — he came' },
        { la: 'Vēnī, vīdī, vīcī.', ko: '왔노라, 보았노라, 이겼노라.', en: 'I came, I saw, I conquered.' }
      ]
    }
  ],
  ex: [
    { t: 'mc', q: { ko: '라틴어 동사의 활용 유형은 모두 몇 가지인가요?', en: 'How many conjugation patterns does Latin have?' }, o: [{ ko: '다섯 (제1~4 + 혼합)', en: 'five (1st–4th + mixed)' }, { ko: '셋', en: 'three' }, { ko: '넷', en: 'four' }, { ko: '여섯', en: 'six' }], a: 0 },
    { t: 'mc', q: { ko: '다음 중 비한정형이 <u>아닌</u> 것은?', en: 'Which of these is <u>not</u> a non-finite form?' }, o: [{ ko: '직설법', en: 'indicative' }, { ko: '부정사', en: 'infinitive' }, { ko: '동명사', en: 'gerund' }, { ko: '목적분사', en: 'supine' }], a: 0 },
    { t: 'mc', q: { ko: '라틴어 시제는 모두 몇 개인가요?', en: 'How many tenses does Latin have?' }, o: [{ ko: '6개', en: '6' }, { ko: '3개', en: '3' }, { ko: '4개', en: '4' }, { ko: '8개', en: '8' }], a: 0 },
    { t: 'mc', q: { ko: '완료 어간에서 만드는 시제끼리 묶인 것은?', en: 'Which tenses are formed from the perfect stem?' }, o: [{ ko: '완료·과거완료·미래완료', en: 'perfect, pluperfect, future perfect' }, { ko: '현재·미완료·미래', en: 'present, imperfect, future' }, { ko: '현재·완료·미래', en: 'present, perfect, future' }, { ko: '미완료·과거완료·미래', en: 'imperfect, pluperfect, future' }], a: 0 },
    { t: 'mc', q: { ko: '“병사여, 와라!”처럼 명령을 나타내는 법은?', en: 'Which mood gives an order, as in “Come, soldier!”?' }, o: [{ ko: '명령법', en: 'imperative' }, { ko: '직설법', en: 'indicative' }, { ko: '접속법', en: 'subjunctive' }, { ko: '부정사', en: 'infinitive' }], a: 0 },
    { t: 'mc', q: { ko: '가능성·소원·가정을 나타내는 법은?', en: 'Which mood expresses possibility, wish or supposition?' }, o: [{ ko: '접속법', en: 'subjunctive' }, { ko: '직설법', en: 'indicative' }, { ko: '명령법', en: 'imperative' }, { ko: '수동태', en: 'passive' }], a: 0 },
    { t: 'mc', q: { ko: '다음 문장의 동사는 어느 태(voice)인가요?', en: 'What voice is the verb in this sentence?' }, la: 'Urbs ā Rōmānīs capitur.', o: [{ ko: '수동태', en: 'passive' }, { ko: '능동태', en: 'active' }, { ko: '명령법', en: 'imperative' }, { ko: '비한정형', en: 'non-finite' }], a: 0, x: { ko: '도시가 "점령된다" — 주어가 행동을 받으므로 수동태.', en: 'The city “is captured” — the subject receives the action.' } },
    { t: 'mc', q: { ko: 'amō 한 단어의 뜻으로 알맞은 것은?', en: 'What does the single word amō mean?' }, o: [{ ko: '나는 사랑한다', en: 'I love' }, { ko: '사랑하다 (부정사)', en: 'to love' }, { ko: '그는 사랑한다', en: 'he loves' }, { ko: '사랑하라!', en: 'love!' }], a: 0, x: { ko: '어미 -ō가 1인칭 단수를 나타내므로 주어 대명사가 필요 없어요.', en: 'The ending -ō marks 1st person singular, so no pronoun is needed.' } },
    { t: 'mc', q: { ko: '라틴어의 2인칭에 대한 설명으로 옳은 것은?', en: 'Which statement about the Latin 2nd person is true?' }, o: [{ ko: '단수와 복수가 따로 있고 높임 형태는 없다', en: 'It has separate singular and plural, but no polite form' }, { ko: '단수와 복수의 형태가 같다', en: 'Singular and plural are identical' }, { ko: '높임 형태가 따로 있다', en: 'It has a special polite form' }, { ko: '2인칭은 명령법에만 있다', en: 'It exists only in the imperative' }], a: 0 },
    { t: 'mc', q: { ko: 'venit와 vēnit의 차이는?', en: 'What is the difference between venit and vēnit?' }, o: [{ ko: '현재(그는 온다) / 완료(그는 왔다)', en: 'present (he comes) / perfect (he came)' }, { ko: '단수 / 복수', en: 'singular / plural' }, { ko: '능동 / 수동', en: 'active / passive' }, { ko: '차이 없음', en: 'no difference' }], a: 0 },
    { t: 'mc', q: { ko: '고전 발음에서 Cicerō의 첫 c는 어떻게 읽나요?', en: 'In Classical pronunciation, how is the c in Cicerō pronounced?' }, o: [{ ko: '“ㅋ” (키케로)', en: 'hard k (KI-ke-ro)' }, { ko: '“ㅊ” (치체로)', en: 'ch (CHI-che-ro)' }, { ko: '“ㅅ” (시세로)', en: 's (SI-se-ro)' }, { ko: '묵음', en: 'silent' }], a: 0 },
    { t: 'fill', q: { ko: '“나는 이겼다(vincō의 완료 1인칭 단수)”를 라틴어로 쓰세요.', en: 'Write “I conquered” (perfect 1st sg. of vincō).' }, a: ['vīcī'] },
    { t: 'fill', q: { ko: '이 사이트의 제3활용 모델 동사(“다스리다”)의 1인칭 단수 현재형을 쓰세요.', en: 'Write the 1st sg. present of the 3rd-conjugation model verb (“rule”).' }, a: ['regō'] },
    { t: 'fill', q: { ko: '혼합활용의 모델 동사(“잡다”)의 1인칭 단수 현재형을 쓰세요.', en: 'Write the 1st sg. present of the mixed-conjugation model verb (“take”).' }, a: ['capiō'] }
  ]
};
