window.CH = {
  n: 15,
  part: { ko: '제4부 · 명령법과 비한정형', en: 'Part IV · Imperative & Non-finite Forms' },
  title: { ko: '동명사·동형용사·목적분사', en: 'Gerund, Gerundive and Supine' },
  topics: [{ ko: '동명사 = 동사적 명사', en: 'Gerund = verbal noun' }, { ko: '동형용사 = 의무·필요', en: 'Gerundive = obligation' }, { ko: '목적분사 -um / -ū', en: 'Supine in -um / -ū' }, { ko: '수동 우언법 + 행위자 여격', en: 'Passive periphrastic + dative of agent' }],
  intro: { ko: '세 형태 모두 "-nd-" 또는 목적분사 어간에서 나와요. 동명사는 "~하는 것", 동형용사는 "~되어야 할", 목적분사는 "~하러 / ~하기에".', en: 'All three come from “-nd-” or the supine stem: gerund “(the act of) …ing”, gerundive “to be …ed”, supine “in order to … / to …”.' },
  sec: [
    {
      h: { ko: '만드는 법', en: 'Formation' },
      b: {
        ko: `<ul><li><b>동명사</b>: 현재 어간 + <span class="la">-ndum</span> (제3·4·혼합은 <span class="la">-endum</span>). 제2변화 중성 명사처럼 <b>속격·여격·대격·탈격 단수</b>만 있어요: <span class="la">amandī, amandō, amandum, amandō</span>. 주격 "~하는 것"은 <b>부정사</b>가 대신해요.</li>
        <li><b>동형용사</b>: 같은 어간 + <span class="la">-ndus, -nda, -ndum</span> (제1·2변화 형용사).</li>
        <li><b>목적분사</b>: 넷째 주요 부분 <span class="la">-um</span>(대격)과 <span class="la">-ū</span>(탈격) 두 형태뿐.</li></ul>`,
        en: `<ul><li><b>Gerund</b>: present stem + <span class="la">-ndum</span> (3rd/4th/mixed <span class="la">-endum</span>). Like a 2nd-declension neuter noun, only <b>gen., dat., acc., abl. singular</b>: <span class="la">amandī, amandō, amandum, amandō</span>. The nominative is supplied by the <b>infinitive</b>.</li>
        <li><b>Gerundive</b>: same stem + <span class="la">-ndus, -nda, -ndum</span> (1st/2nd-declension adjective).</li>
        <li><b>Supine</b>: the 4th principal part in <span class="la">-um</span> (accusative) and <span class="la">-ū</span> (ablative) only.</li></ul>`
      },
      nf: { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: ['gerund', 'part.gerundive', 'supine'] }
    },
    {
      h: { ko: '동명사의 쓰임', en: 'Uses of the gerund' },
      b: {
        ko: `<ul><li><b>대격</b>: 주로 <span class="la">ad</span>(~하러), <span class="la">inter</span>와 함께. <span class="la">ad discendum</span> 배우러.</li>
        <li><b>속격</b>: 명사·형용사에 딸려서. <span class="la">ars scrībendī</span> 글쓰기의 기술 / <span class="la">cupidus audiendī</span> 듣고 싶어 하는.</li>
        <li><b>여격</b>: 드묾. "~에 적합한" 형용사와.</li>
        <li><b>탈격</b>: 수단·방법. <span class="la">Discimus legendō.</span> 우리는 읽음으로써 배운다.</li></ul>`,
        en: `<ul><li><b>Accusative</b>: mainly with <span class="la">ad</span> (for the purpose of), <span class="la">inter</span>. <span class="la">ad discendum</span> for learning.</li>
        <li><b>Genitive</b>: with nouns and adjectives. <span class="la">ars scrībendī</span> the art of writing / <span class="la">cupidus audiendī</span> eager to hear.</li>
        <li><b>Dative</b>: rare, with adjectives of fitness.</li>
        <li><b>Ablative</b>: means. <span class="la">Discimus legendō.</span> We learn by reading.</li></ul>`
      },
      exs: [{ la: 'Equitandī perītissimus erat.', ko: '그는 말타기에 아주 능숙했다.', en: 'He was very skilled in riding.' }, { la: 'Docendō discimus.', ko: '우리는 가르치면서 배운다.', en: 'We learn by teaching.' }]
    },
    {
      h: { ko: '동형용사의 쓰임', en: 'Uses of the gerundive' },
      b: {
        ko: `<p><b>① 의무·필요 (수동 우언법)</b>: 동형용사 + <span class="la">sum</span> = "~되어야 한다". 행위자는 <b>여격</b>(행위자 여격)으로!</p>
        <ul><li><span class="la">Carthāgō dēlenda est.</span> 카르타고는 파괴되어야 한다.</li>
        <li><span class="la">Haec epistula tibi scrībenda est.</span> 이 편지는 네가 써야 한다.</li>
        <li>자동사는 비인칭 중성: <span class="la">Nōbīs eundum est.</span> 우리는 가야 한다.</li></ul>
        <p><b>② 동명사 대용 (명사 + 동형용사)</b>: 목적어가 있는 동명사는 보통 동형용사 구문으로 바꿔요. <span class="la">cupiditās bellī gerendī</span> (✓) = 전쟁을 수행하려는 욕망 (≈ <span class="la">bellum gerendī</span>). <span class="la">ad pācem petendam</span> 평화를 구하러.</p>
        <p><b>③ 목적의 대격</b>: <span class="la">cūrāre, dare, trādere</span> 등 + 대격 + 동형용사. <span class="la">Pontem faciendum cūrāvit.</span> 그는 다리를 놓게 했다.</p>`,
        en: `<p><b>① Obligation (passive periphrastic)</b>: gerundive + <span class="la">sum</span> = “must be …ed”. The agent goes in the <b>dative</b> (dative of agent)!</p>
        <ul><li><span class="la">Carthāgō dēlenda est.</span> Carthage must be destroyed.</li>
        <li><span class="la">Haec epistula tibi scrībenda est.</span> You must write this letter.</li>
        <li>Intransitive verbs go impersonal neuter: <span class="la">Nōbīs eundum est.</span> We must go.</li></ul>
        <p><b>② Instead of a gerund with an object</b>: noun + gerundive. <span class="la">cupiditās bellī gerendī</span> the desire to wage war. <span class="la">ad pācem petendam</span> to seek peace.</p>
        <p><b>③ Purpose with verbs like <span class="la">cūrāre, dare, trādere</span></b>: <span class="la">Pontem faciendum cūrāvit.</span> He had a bridge built.</p>`
      },
      exs: [{ la: 'Arma virō fortī facienda sunt.', ko: '용감한 사람을 위해 무기를 만들어야 한다.', en: 'Weapons must be made for a brave man.' }, { la: 'Platōnis audiendī studiōsus erat.', ko: '그는 플라톤의 강의를 듣는 데 열심이었다.', en: 'He was eager to hear Plato.' }]
    },
    {
      h: { ko: '목적분사의 쓰임', en: 'Uses of the supine' },
      b: {
        ko: `<ul><li><b>-um (대격)</b>: 이동 동사와 함께 <b>목적</b>. <span class="la">Lūsum it Maecēnās.</span> 마이케나스는 놀러 간다. / 미래 수동 부정사 <span class="la">amātum īrī</span>.</li>
        <li><b>-ū (탈격)</b>: 몇몇 형용사·명사와 "~하기에". <span class="la">mīrābile dictū</span> 말하기에 놀라운 / <span class="la">facile factū</span> 하기 쉬운.</li></ul>`,
        en: `<ul><li><b>-um (accusative)</b>: with verbs of motion to show <b>purpose</b>. <span class="la">Lūsum it Maecēnās.</span> Maecenas goes off to play. Also in the future passive infinitive <span class="la">amātum īrī</span>.</li>
        <li><b>-ū (ablative)</b>: with some adjectives/nouns, “to …”. <span class="la">mīrābile dictū</span> wonderful to say / <span class="la">facile factū</span> easy to do.</li></ul>`
      },
      exs: [{ la: 'Mīrābile vīsū!', ko: '보기에 놀랍다!', en: 'Wonderful to see!' }, { la: 'Lēgātī pācem petītum vēnērunt.', ko: '사절들이 평화를 청하러 왔다.', en: 'Envoys came to ask for peace.' }]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'gerund' },
    { t: 'gen', v: 'rego', k: 'gerund' },
    { t: 'gen', v: 'audio', k: 'gerund' },
    { t: 'gen', v: 'capio', k: 'part.gerundive' },
    { t: 'gen', v: 'moneo', k: 'part.gerundive' },
    { t: 'gen', v: 'video', k: 'supine' },
    { t: 'fill', q: { ko: '“카르타고는 파괴되어야 한다.” Carthāgō ___ est. (dēleō, 동형용사 여성 단수)', en: '“Carthage must be destroyed.” Carthāgō ___ est. (dēleō, gerundive fem. sg.)' }, a: ['dēlenda'] },
    { t: 'fill', q: { ko: '“우리는 읽음으로써 배운다.” Discimus ___. (legō, 동명사 탈격)', en: '“We learn by reading.” Discimus ___. (legō, gerund ablative)' }, a: ['legendō'] },
    { t: 'fill', q: { ko: '“글쓰기의 기술” ars ___ (scrībō, 동명사 속격)', en: '“the art of writing” ars ___ (scrībō, gerund genitive)' }, a: ['scrībendī'] },
    { t: 'fill', q: { ko: '“말하기에 놀라운!” mīrābile ___! (dīcō, 목적분사 -ū)', en: '“Wonderful to tell!” mīrābile ___! (dīcō, supine in -ū)' }, a: ['dictū'] },
    { t: 'mc', q: { ko: '“Haec tibi facienda sunt.”에서 tibi의 역할은?', en: 'In “Haec tibi facienda sunt”, tibi is…' }, o: [{ ko: '행위자 여격 (네가 해야 한다)', en: 'dative of agent (you must do these)' }, { ko: '간접목적어 (너에게 주다)', en: 'indirect object' }, { ko: '탈격', en: 'ablative' }, { ko: '주어', en: 'subject' }], a: 0 },
    { t: 'mc', q: { ko: '동명사에 없는 격은?', en: 'Which case does the gerund lack?' }, o: [{ ko: '주격', en: 'nominative' }, { ko: '속격', en: 'genitive' }, { ko: '대격', en: 'accusative' }, { ko: '탈격', en: 'ablative' }], a: 0, x: { ko: '주격 "~하는 것"은 부정사가 맡아요.', en: 'The infinitive serves as the nominative.' } },
    { t: 'mc', q: { ko: '“Nōbīs eundum est.”의 뜻은?', en: 'What does “Nōbīs eundum est” mean?' }, o: [{ ko: '우리는 가야 한다', en: 'we must go' }, { ko: '우리는 갔다', en: 'we went' }, { ko: '우리에게 길이 있다', en: 'we have a road' }, { ko: '가는 것은 우리에게 좋다', en: 'going is good for us' }], a: 0 },
    { t: 'mc', q: { ko: '“Lūsum it.”의 lūsum은?', en: 'In “Lūsum it”, lūsum is…' }, o: [{ ko: '목적분사 -um: 놀러 (간다)', en: 'supine in -um: (goes) to play' }, { ko: '완료 분사', en: 'perfect participle' }, { ko: '동명사', en: 'gerund' }, { ko: '명사 “놀이”의 주격', en: 'nominative noun “game”' }], a: 0 },
    { t: 'mc', q: { ko: '“전쟁을 수행하려는 욕망”에 가장 고전적인 표현은?', en: 'The most classical way to say “the desire to wage war”?' }, o: ['cupiditās bellī gerendī', 'cupiditās bellum gerere', 'cupiditās gerēns bellum', 'cupiditās bellō gestō'], a: 0 }
  ]
};
