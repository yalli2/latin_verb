window.CH = {
  n: 9,
  part: { ko: '제3부 · 접속법', en: 'Part III · The Subjunctive' },
  title: { ko: '현재 접속법', en: 'The Present Subjunctive' },
  topics: [{ ko: '“We fear a liar” 기억법', en: '“We fear a liar” mnemonic' }, { ko: '제1활용은 -e-', en: '1st conj. takes -e-' }, { ko: '다른 활용은 -a-', en: 'Others take -a-' }, { ko: '미래와 헷갈리는 형태', en: 'Clashes with the future' }],
  intro: { ko: '접속법에는 현재·미완료·완료·과거완료 네 시제만 있어요. 그중 현재 접속법은 어간 모음을 바꿔 만들어요: 제1활용은 -e-, 나머지는 -a-.', en: 'The subjunctive has only four tenses: present, imperfect, perfect, pluperfect. The present subjunctive swaps the vowel: -e- for the 1st conjugation, -a- for the rest.' },
  sec: [
    {
      h: { ko: '만드는 법', en: 'Formation' },
      b: {
        ko: `<ul><li><b>제1활용</b>: 어간 끝 <span class="la">-ā-</span>를 떼고 <span class="la">-em, -ēs, -et, -ēmus, -ētis, -ent</span> → <span class="la">amem, amēs, amet</span></li>
        <li><b>제2·3·4·혼합</b>: 현재 어간 + <span class="la">-am, -ās, -at, -āmus, -ātis, -ant</span> → <span class="la">moneam, regam, audiam, capiam</span></li>
        <li>수동태는 <span class="la">-er/-ar, -ēris/-āris, -ētur/-ātur…</span></li></ul>
        <div class="box tip"><b>기억법</b>: 제1~4활용 1인칭 단수의 모음을 차례로 읽으면 <b>e – ea – a – ia</b> (am<b>e</b>m, mon<b>ea</b>m, reg<b>a</b>m, aud<b>ia</b>m). 영어권 학생들은 이것을 <i>“w<b>e</b> f<b>ea</b>r <b>a</b> l<b>ia</b>r”</i>로 외워요.</div>
        <div class="box warn">제3·4·혼합활용의 1인칭 단수(<span class="la">regam, audiam, capiam / regar…</span>)는 <b>미래 직설법과 형태가 같아요</b>. 문맥으로 구별!</div>`,
        en: `<ul><li><b>1st</b>: drop the stem’s <span class="la">-ā-</span> and add <span class="la">-em, -ēs, -et, -ēmus, -ētis, -ent</span> → <span class="la">amem, amēs, amet</span></li>
        <li><b>2nd, 3rd, 4th, mixed</b>: present stem + <span class="la">-am, -ās, -at, -āmus, -ātis, -ant</span> → <span class="la">moneam, regam, audiam, capiam</span></li>
        <li>Passive: <span class="la">-er/-ar, -ēris/-āris, -ētur/-ātur…</span></li></ul>
        <div class="box tip"><b>Mnemonic</b>: <i>“we fear a liar”</i> — am<b>e</b>m, mon<b>ea</b>m, reg<b>a</b>m, aud<b>ia</b>m.</div>
        <div class="box warn">The 1st sg. of the 3rd, 4th and mixed conjugations (<span class="la">regam, audiam, capiam / regar…</span>) is <b>identical to the future indicative</b>. Use context!</div>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'subj.act.pres' }, { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'subj.pass.pres' }]
    },
    {
      h: { ko: '맛보기: 현재 접속법이 쓰이는 곳', en: 'A taste of its uses' },
      b: {
        ko: `<p>자세한 용법은 제12·13장에서 배우지만, 현재 접속법은 주로 <b>소원</b>("~하기를!"), <b>권유</b>("~하자"), <b>목적</b>("~하도록") 등을 나타내요.</p>`,
        en: `<p>Full uses come in chapters 12–13, but the present subjunctive commonly expresses a <b>wish</b> (“may …!”), an <b>exhortation</b> (“let us …”) or a <b>purpose</b> (“so that …”).</p>`
      },
      exs: [
        { la: 'Valeās!', ko: '건강하기를! (잘 지내!)', en: 'May you be well! (Farewell!)' },
        { la: 'Gaudeāmus igitur!', ko: '그러니 즐거워하자!', en: 'Let us therefore rejoice!' },
        { la: 'Legō ut discam.', ko: '나는 배우기 위해 읽는다.', en: 'I read in order to learn.' },
        { la: 'Nē dēspērēmus.', ko: '절망하지 말자.', en: 'Let us not despair.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'subj.act.pres.0' },
    { t: 'gen', v: 'amo', k: 'subj.act.pres.2' },
    { t: 'gen', v: 'moneo', k: 'subj.act.pres.1' },
    { t: 'gen', v: 'rego', k: 'subj.act.pres.3' },
    { t: 'gen', v: 'audio', k: 'subj.act.pres.5' },
    { t: 'gen', v: 'capio', k: 'subj.act.pres.4' },
    { t: 'gen', v: 'mitto', k: 'subj.act.pres.1' },
    { t: 'gen', v: 'video', k: 'subj.act.pres.2' },
    { t: 'gen', v: 'amo', k: 'subj.pass.pres.2' },
    { t: 'gen', v: 'rego', k: 'subj.pass.pres.5' },
    { t: 'parse', v: 'amo', k: 'subj.act.pres.3' },
    { t: 'parse', v: 'moneo', k: 'subj.pass.pres.2' },
    { t: 'parse', v: 'audio', k: 'subj.act.pres.2' },
    { t: 'mc', q: { ko: 'amet은 무엇인가요?', en: 'What is amet?' }, o: [{ ko: '현재 접속법 3인칭 단수', en: 'present subjunctive 3rd sg.' }, { ko: '미래 직설법 3인칭 단수', en: 'future indicative 3rd sg.' }, { ko: '현재 직설법 3인칭 단수', en: 'present indicative 3rd sg.' }, { ko: '명령법', en: 'imperative' }], a: 0 },
    { t: 'mc', q: { ko: 'monet와 moneat의 차이는?', en: 'What distinguishes monet from moneat?' }, o: [{ ko: '직설법 현재 / 접속법 현재', en: 'present indicative / present subjunctive' }, { ko: '단수 / 복수', en: 'singular / plural' }, { ko: '능동 / 수동', en: 'active / passive' }, { ko: '현재 / 미래', en: 'present / future' }], a: 0 },
    { t: 'mc', q: { ko: 'regam이 두 가지로 해석될 수 있는 이유는?', en: 'Why can regam be read two ways?' }, o: [{ ko: '미래 직설법 1인칭 단수와 현재 접속법 1인칭 단수가 같아서', en: 'future indicative 1st sg. = present subjunctive 1st sg.' }, { ko: '능동과 수동이 같아서', en: 'active = passive' }, { ko: '단수와 복수가 같아서', en: 'singular = plural' }, { ko: '명령법과 같아서', en: 'it equals the imperative' }], a: 0 },
    { t: 'mc', q: { ko: '접속법에 없는 시제는?', en: 'Which tense does the subjunctive lack?' }, o: [{ ko: '미래', en: 'future' }, { ko: '현재', en: 'present' }, { ko: '미완료', en: 'imperfect' }, { ko: '과거완료', en: 'pluperfect' }], a: 0 }
  ]
};
