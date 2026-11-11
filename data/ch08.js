window.CH = {
  n: 8,
  part: { ko: '제2부 · 직설법', en: 'Part II · The Indicative' },
  title: { ko: '미래완료 직설법', en: 'The Future Perfect Indicative' },
  topics: [{ ko: '-erō, -eris, -erit … -erint', en: '-erō … -erint' }, { ko: '분사 + erō', en: 'Participle + erō' }, { ko: '“~하고 나면” 절', en: '“When I have …” clauses' }, { ko: '미래 vs 미래완료', en: 'Future vs future perfect' }],
  intro: { ko: '미래완료는 미래의 어떤 일보다 "먼저 끝나 있을" 일을 말해요. 영어는 대충 현재형으로 말하지만, 라틴어는 시간 순서를 엄격히 따져요.', en: 'The future perfect describes something that will be finished before another future event. English is loose here; Latin is strict.' },
  sec: [
    {
      h: { ko: '만드는 법', en: 'Formation' },
      b: {
        ko: `<ul><li><b>능동</b>: 완료 어간 + <span class="la">-erō, -eris, -erit, -erimus, -eritis, -erint</span> — sum의 미래와 같되 <b>3인칭 복수만 -erint</b> (✗ -erunt).</li>
        <li><b>수동</b>: 완료 수동 분사 + <span class="la">erō, eris, erit, erimus, eritis, erunt</span> (sum의 미래 그대로).</li>
        <li>분사·부정사는 없어요. 희극 작가 플라우투스·테렌티우스는 <span class="la">faxō (= fēcerō)</span> 같은 옛 형태를 썼어요.</li></ul>`,
        en: `<ul><li><b>Active</b>: perfect stem + <span class="la">-erō, -eris, -erit, -erimus, -eritis, -erint</span> — like the future of sum except the <b>3rd pl. -erint</b> (not -erunt).</li>
        <li><b>Passive</b>: perfect passive participle + <span class="la">erō, eris, erit, erimus, eritis, erunt</span>.</li>
        <li>No participles or infinitives. Plautus and Terence use old forms such as <span class="la">faxō (= fēcerō)</span>.</li></ul>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'ind.act.futp' }, { v: ['amo', 'audio', 'capio'], k: 'ind.pass.futp' }]
    },
    {
      h: { ko: '쓰임: 미래 속의 “먼저”', en: 'Use: “earlier” within the future' },
      b: {
        ko: `<p>"원고를 <b>끝내면</b> 폼페이로 휴가를 갈 것이다." 두 일 모두 미래지만 원고 완성이 먼저죠. 라틴어는 이 "먼저" 일을 <b>미래완료</b>로 써요 — 문자 그대로 "끝내 놓았을 때".</p>
        <p>두 일이 <b>동시에</b> 진행되면 둘 다 <b>미래</b>를 써요: <span class="la">Ut volēs, ita erō.</span> "네가 원하는 대로 나는 그렇게 될 것이다."</p>
        <div class="box tip"><span class="la">sī</span>(만약), <span class="la">cum</span>(~할 때), <span class="la">ubi</span>, <span class="la">quī</span> 절에서 특히 자주 보여요.</div>`,
        en: `<p>“When I <b>finish</b> the manuscript, I will go on holiday.” Both are future, but finishing comes first, so Latin uses the <b>future perfect</b> — literally “when I will have finished”.</p>
        <p>If the two actions are <b>simultaneous</b>, both are <b>future</b>: <span class="la">Ut volēs, ita erō.</span> “I will be as you want.”</p>
        <div class="box tip">Common after <span class="la">sī</span> (if), <span class="la">cum</span> (when), <span class="la">ubi</span>, and in relative clauses.</div>`
      },
      exs: [
        { la: 'Cum prīmum ōtium nactus erō, plūra scrībam.', ko: '여유가 생기는 대로 더 많이 쓰겠다. (직역: 여유를 얻게 되었을 때)', en: 'As soon as I get some leisure, I will write more. (lit. will have got)' },
        { la: 'Quī prīmus ad mētam pervēnerit, praemium accipiet.', ko: '먼저 결승점에 도착하는 사람이 상을 받을 것이다.', en: 'Whoever reaches the finish first will receive the prize.' },
        { la: 'Sī hoc fēceris, poenās dabis.', ko: '이것을 하면 너는 벌을 받을 것이다.', en: 'If you do this, you will be punished.' },
        { la: 'Ut volēs, ita erō.', ko: '네가 원하는 대로 나는 그렇게 될 것이다. (동시 → 미래)', en: 'I will be as you wish. (simultaneous → future)' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'ind.act.futp.0' },
    { t: 'gen', v: 'moneo', k: 'ind.act.futp.5' },
    { t: 'gen', v: 'rego', k: 'ind.act.futp.1' },
    { t: 'gen', v: 'audio', k: 'ind.act.futp.2' },
    { t: 'gen', v: 'capio', k: 'ind.act.futp.3' },
    { t: 'gen', v: 'facio', k: 'ind.act.futp.1' },
    { t: 'gen', v: 'pono', k: 'ind.act.futp.4' },
    { t: 'gen', v: 'amo', k: 'ind.pass.futp.0' },
    { t: 'gen', v: 'rego', k: 'ind.pass.futp.5' },
    { t: 'parse', v: 'moneo', k: 'ind.act.futp.4' },
    { t: 'parse', v: 'audio', k: 'ind.act.futp.5' },
    { t: 'parse', v: 'capio', k: 'ind.pass.futp.2' },
    { t: 'mc', q: { ko: '미래완료 능동 3인칭 복수 어미는?', en: 'The 3rd pl. future perfect active ending is…' }, o: ['-erint', '-erunt', '-ērunt', '-erant'], a: 0 },
    { t: 'mc', q: { ko: '“네가 그것을 만지면 큰 화를 입을 것이다.” — “만지면”에 알맞은 형태는?', en: '“If you touch it, you’ll be in trouble.” — the best form for “touch”?' }, o: [{ ko: 'tetigeris (미래완료)', en: 'tetigeris (future perfect)' }, { ko: 'tangis (현재)', en: 'tangis (present)' }, { ko: 'tangēbās (미완료)', en: 'tangēbās (imperfect)' }, { ko: 'tetigerās (과거완료)', en: 'tetigerās (pluperfect)' }], a: 0 },
    { t: 'mc', q: { ko: '두 미래의 일이 동시에 일어날 때 종속절에 쓰는 시제는?', en: 'If two future actions are simultaneous, the subordinate clause uses…' }, o: [{ ko: '미래', en: 'the future' }, { ko: '미래완료', en: 'the future perfect' }, { ko: '현재', en: 'the present' }, { ko: '완료', en: 'the perfect' }], a: 0 },
    { t: 'mc', q: { ko: 'faxō는 어떤 형태의 옛 형태인가요?', en: 'faxō is an old form of…' }, o: ['fēcerō', 'faciō', 'fēcī', 'faciam'], a: 0 }
  ]
};
