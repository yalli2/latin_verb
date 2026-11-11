window.CH = {
  n: 23,
  part: { ko: '제6부 · 부록: 명사·형용사·대명사', en: 'Part VI · Appendix: Nouns, Adjectives, Pronouns' },
  title: { ko: '형용사·부사의 비교', en: 'Comparison of Adjectives and Adverbs' },
  topics: [{ ko: '비교급 -ior', en: 'Comparative -ior' }, { ko: '최상급 -issimus', en: 'Superlative -issimus' }, { ko: '불규칙 비교', en: 'Irregular comparison' }, { ko: '부사 -ē, -ter', en: 'Adverbs -ē, -ter' }],
  intro: { ko: '"더 ~한", "가장 ~한"을 만드는 방법이에요. 비교급은 제3변화(자음 어간), 최상급은 bonus처럼 변해요.', en: 'How to say “more …” and “most …”. Comparatives decline like 3rd-declension consonant stems, superlatives like bonus.' },
  sec: [
    {
      h: { ko: '형용사의 비교', en: 'Comparison of adjectives' },
      b: {
        ko: `<ul><li><b>비교급</b>: 어간 + <span class="la">-ior</span>(남·여), <span class="la">-ius</span>(중): <span class="la">longus → longior, longius</span> 더 긴</li>
        <li><b>최상급</b>: 어간 + <span class="la">-issimus, -a, -um</span>: <span class="la">longissimus</span> 가장 긴, 아주 긴</li>
        <li><span class="la">-er</span>로 끝나면 <span class="la">-errimus</span>: <span class="la">ācer → ācerrimus, pulcher → pulcherrimus</span></li>
        <li>일부 <span class="la">-lis</span> 형용사는 <span class="la">-illimus</span>: <span class="la">facilis → facillimus, similis → simillimus</span></li></ul>`,
        en: `<ul><li><b>Comparative</b>: stem + <span class="la">-ior</span> (m./f.), <span class="la">-ius</span> (n.): <span class="la">longus → longior, longius</span> longer</li>
        <li><b>Superlative</b>: stem + <span class="la">-issimus, -a, -um</span>: <span class="la">longissimus</span> longest, very long</li>
        <li>Adjectives in <span class="la">-er</span> take <span class="la">-errimus</span>: <span class="la">ācer → ācerrimus, pulcher → pulcherrimus</span></li>
        <li>Some in <span class="la">-lis</span> take <span class="la">-illimus</span>: <span class="la">facilis → facillimus, similis → simillimus</span></li></ul>`
      },
      tables: [{
        cap: { ko: '불규칙 비교', en: 'Irregular comparison' },
        head: [{ ko: '원급', en: 'Positive' }, { ko: '비교급', en: 'Comparative' }, { ko: '최상급', en: 'Superlative' }],
        rows: [['bonus (좋은 good)', 'melior', 'optimus'], ['malus (나쁜 bad)', 'peior', 'pessimus'], ['magnus (큰 big)', 'maior', 'maximus'], ['parvus (작은 small)', 'minor', 'minimus'], ['multus (많은 much)', 'plūs', 'plūrimus']].map(r => r)
      }]
    },
    {
      h: { ko: '부사의 비교', en: 'Comparison of adverbs' },
      b: {
        ko: `<ul><li>원급: 제1·2변화 형용사 → <span class="la">-ē</span> (<span class="la">longē</span>), 제3변화 → <span class="la">-iter / -ter</span> (<span class="la">fortiter, prūdenter</span>)</li>
        <li>비교급: 형용사 비교급 중성과 같음 <span class="la">-ius</span> (<span class="la">longius, fortius</span>)</li>
        <li>최상급: <span class="la">-issimē</span> (<span class="la">longissimē, fortissimē</span>)</li>
        <li>불규칙: <span class="la">bene – melius – optimē</span>, <span class="la">male – peius – pessimē</span>, <span class="la">magnopere – magis – maximē</span>, <span class="la">multum – plūs – plūrimum</span></li></ul>`,
        en: `<ul><li>Positive: 1st/2nd-decl. adjectives → <span class="la">-ē</span> (<span class="la">longē</span>); 3rd → <span class="la">-iter / -ter</span> (<span class="la">fortiter, prūdenter</span>)</li>
        <li>Comparative: same as the neuter comparative adjective, <span class="la">-ius</span> (<span class="la">longius, fortius</span>)</li>
        <li>Superlative: <span class="la">-issimē</span> (<span class="la">longissimē, fortissimē</span>)</li>
        <li>Irregular: <span class="la">bene – melius – optimē</span>, <span class="la">male – peius – pessimē</span>, <span class="la">magnopere – magis – maximē</span>, <span class="la">multum – plūs – plūrimum</span></li></ul>`
      },
      exs: [{ la: 'Citius, altius, fortius.', ko: '더 빠르게, 더 높이, 더 힘차게.', en: 'Faster, higher, stronger.' }, { la: 'Melius est praevenīre quam sānāre.', ko: '치료하는 것보다 예방하는 것이 더 낫다.', en: 'Prevention is better than cure.' }, { la: 'Optimē fēcistī.', ko: '너는 아주 잘했다.', en: 'You did very well.' }]
    }
  ],
  ex: [
    { t: 'fill', q: { ko: 'longus(긴)의 비교급 남성 주격을 쓰세요.', en: 'Comparative (masc. nom.) of longus.' }, a: ['longior'] },
    { t: 'fill', q: { ko: 'longus의 최상급 남성 주격을 쓰세요.', en: 'Superlative (masc. nom.) of longus.' }, a: ['longissimus'] },
    { t: 'fill', q: { ko: 'pulcher(아름다운)의 최상급 남성 주격을 쓰세요.', en: 'Superlative (masc. nom.) of pulcher.' }, a: ['pulcherrimus'] },
    { t: 'fill', q: { ko: 'facilis(쉬운)의 최상급 남성 주격을 쓰세요.', en: 'Superlative (masc. nom.) of facilis.' }, a: ['facillimus'] },
    { t: 'fill', q: { ko: 'bonus의 비교급 남성 주격을 쓰세요.', en: 'Comparative (masc. nom.) of bonus.' }, a: ['melior'] },
    { t: 'fill', q: { ko: 'magnus의 최상급 남성 주격을 쓰세요.', en: 'Superlative (masc. nom.) of magnus.' }, a: ['maximus'] },
    { t: 'fill', q: { ko: 'malus의 최상급 남성 주격을 쓰세요.', en: 'Superlative (masc. nom.) of malus.' }, a: ['pessimus'] },
    { t: 'fill', q: { ko: 'fortis(용감한)에서 만든 부사 원급을 쓰세요.', en: 'Positive adverb from fortis.' }, a: ['fortiter'] },
    { t: 'fill', q: { ko: 'bene(잘)의 비교급 부사를 쓰세요.', en: 'Comparative of the adverb bene.' }, a: ['melius'] },
    { t: 'mc', q: { ko: '“Citius, altius, fortius”의 단어들은?', en: 'The words in “Citius, altius, fortius” are…' }, o: [{ ko: '비교급 부사', en: 'comparative adverbs' }, { ko: '최상급 형용사', en: 'superlative adjectives' }, { ko: '동명사', en: 'gerunds' }, { ko: '명령법', en: 'imperatives' }], a: 0 },
    { t: 'mc', q: { ko: 'parvus(작은)의 비교급은?', en: 'The comparative of parvus is…' }, o: ['minor', 'parvior', 'minimus', 'peior'], a: 0 },
    { t: 'mc', q: { ko: '최상급 -issimus는 어떤 형용사처럼 변하나요?', en: 'Superlatives in -issimus decline like…' }, o: ['bonus, -a, -um', 'fortis, forte', 'ingēns', 'rēx'], a: 0 }
  ]
};
