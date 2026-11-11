window.CH = {
  n: 13,
  part: { ko: '제3부 · 접속법', en: 'Part III · The Subjunctive' },
  title: { ko: '접속법의 쓰임 ② 종속절과 시제 일치', en: 'Uses of the Subjunctive ② Subordinate Clauses & Sequence of Tenses' },
  topics: [{ ko: '목적·결과절 (ut, nē)', en: 'Purpose & result (ut, nē)' }, { ko: '간접의문', en: 'Indirect questions' }, { ko: 'cum 절, 두려움의 절', en: 'cum clauses, fearing' }, { ko: '시제 일치', en: 'Sequence of tenses' }],
  intro: { ko: '종속절의 접속법은 라틴어 독해의 핵심이에요. 어떤 종류의 절에서 접속법을 쓰는지, 그리고 주절의 시제에 따라 종속절의 시제가 어떻게 정해지는지(시제 일치) 배워요.', en: 'Subjunctive subordinate clauses are central to reading Latin. Learn which clauses take the subjunctive and how the main verb fixes its tense (sequence of tenses).' },
  sec: [
    {
      h: { ko: '접속법을 쓰는 종속절', en: 'Clauses that take the subjunctive' },
      b: {
        ko: `<table class="mini-t"><tr><th>종류</th><th>접속사</th><th>예</th></tr>
        <tr><td><b>목적</b> (~하기 위해)</td><td>ut / nē</td><td><span class="la">Ut amēris, amābilis estō.</span> 사랑받으려면 사랑스러워라.</td></tr>
        <tr><td><b>결과</b> (너무 ~해서 ~하다)</td><td>ut / ut nōn</td><td><span class="la">Tam fessus erat ut dormīret.</span> 너무 피곤해서 잠들었다.</td></tr>
        <tr><td><b>간접의문</b></td><td>quis, quid, cūr, num…</td><td><span class="la">Rogō quid faciās.</span> 네가 무엇을 하는지 묻는다.</td></tr>
        <tr><td><b>cum</b> (~했을 때/~이므로/~이지만)</td><td>cum</td><td><span class="la">Cum vēnisset, cēnāvimus.</span> 그가 온 뒤 우리는 식사했다.</td></tr>
        <tr><td><b>두려움</b> (~할까 봐)</td><td>nē (~할까) / ut, nē nōn (~하지 않을까)</td><td><span class="la">Timeō nē pluat.</span> 비가 올까 걱정이다.</td></tr>
        <tr><td><b>방해·금지</b></td><td>nē, quōminus, quīn</td><td><span class="la">Eum impediō nē abeat.</span> 그가 떠나지 못하게 막는다.</td></tr>
        <tr><td><b>명사적 결과절</b> (일어나다)</td><td>ut</td><td><span class="la">Accidit ut abesset.</span> 마침 그가 없었다.</td></tr></table>
        <p>관계절도 <b>목적·성격(일반적 부류)·결과·이유·양보</b>를 나타낼 때는 접속법을 써요: <span class="la">Lēgātōs mīsit quī pācem peterent.</span> 그는 평화를 청할 사절들을 보냈다. / <span class="la">Sunt quī dīcant…</span> ~라고 말하는 사람들이 있다.</p>
        <div class="box warn">두려움의 절은 우리말과 반대로 보여요: <span class="la">timeō nē</span> = "~할까 봐 두렵다", <span class="la">timeō ut</span> = "~하지 않을까 봐 두렵다".</div>`,
        en: `<table class="mini-t"><tr><th>Type</th><th>Introduced by</th><th>Example</th></tr>
        <tr><td><b>Purpose</b></td><td>ut / nē</td><td><span class="la">Ut amēris, amābilis estō.</span> To be loved, be lovable.</td></tr>
        <tr><td><b>Result</b></td><td>ut / ut nōn</td><td><span class="la">Tam fessus erat ut dormīret.</span> He was so tired that he fell asleep.</td></tr>
        <tr><td><b>Indirect question</b></td><td>quis, quid, cūr, num…</td><td><span class="la">Rogō quid faciās.</span> I ask what you are doing.</td></tr>
        <tr><td><b>cum</b> (when/since/although)</td><td>cum</td><td><span class="la">Cum vēnisset, cēnāvimus.</span> When he had come, we dined.</td></tr>
        <tr><td><b>Fearing</b></td><td>nē (that) / ut, nē nōn (that not)</td><td><span class="la">Timeō nē pluat.</span> I fear it may rain.</td></tr>
        <tr><td><b>Hindering, preventing</b></td><td>nē, quōminus, quīn</td><td><span class="la">Eum impediō nē abeat.</span> I prevent him from leaving.</td></tr>
        <tr><td><b>Noun clause of result</b></td><td>ut</td><td><span class="la">Accidit ut abesset.</span> It happened that he was away.</td></tr></table>
        <p>Relative clauses take the subjunctive when they express <b>purpose, characteristic, result, cause or concession</b>: <span class="la">Lēgātōs mīsit quī pācem peterent.</span> He sent envoys to ask for peace. / <span class="la">Sunt quī dīcant…</span> There are people who say…</p>
        <div class="box warn">Fearing clauses look “backwards”: <span class="la">timeō nē</span> = I fear that…, <span class="la">timeō ut</span> = I fear that … not.</div>`
      }
    },
    {
      h: { ko: '시제 일치 (sequence of tenses)', en: 'Sequence of tenses' },
      b: {
        ko: `<p>주절 동사가 <b>주요 시제</b>인지 <b>역사 시제</b>인지에 따라 종속절 접속법의 시제가 정해져요.</p>
        <table class="mini-t"><tr><th></th><th>주절</th><th>동시 / 이후</th><th>이전</th></tr>
        <tr><td><b>주요 계열</b></td><td>현재, 미래, 미래완료, 진짜 완료(have)</td><td>현재 접속법</td><td>완료 접속법</td></tr>
        <tr><td><b>역사 계열</b></td><td>미완료, 단순 과거 완료, 과거완료</td><td>미완료 접속법</td><td>과거완료 접속법</td></tr></table>
        <p>간접의문에서 <b>미래</b>의 일은 미래분사 + <span class="la">sim</span>/<span class="la">essem</span>(복합 미래 접속법)으로 나타내요.</p>
        <table class="mini-t"><tr><th>원래 질문</th><th>주요 계열 (Rogō…)</th><th>역사 계열 (Rogāvī…)</th></tr>
        <tr><td><span class="la">Quid facis?</span></td><td><span class="la">quid faciās</span></td><td><span class="la">quid facerēs</span></td></tr>
        <tr><td><span class="la">Quid fēcistī?</span></td><td><span class="la">quid fēcerīs</span></td><td><span class="la">quid fēcissēs</span></td></tr>
        <tr><td><span class="la">Quid factūrus es?</span></td><td><span class="la">quid factūrus sīs</span></td><td><span class="la">quid factūrus essēs</span></td></tr></table>`,
        en: `<p>Whether the main verb is <b>primary</b> or <b>secondary (historic)</b> decides the tense of a subordinate subjunctive.</p>
        <table class="mini-t"><tr><th></th><th>Main verb</th><th>Same time / later</th><th>Earlier</th></tr>
        <tr><td><b>Primary</b></td><td>present, future, future perfect, true perfect (“have”)</td><td>present subj.</td><td>perfect subj.</td></tr>
        <tr><td><b>Secondary</b></td><td>imperfect, simple-past perfect, pluperfect</td><td>imperfect subj.</td><td>pluperfect subj.</td></tr></table>
        <p>In indirect questions a <b>future</b> idea uses the future participle + <span class="la">sim</span>/<span class="la">essem</span> (composite future subjunctive).</p>
        <table class="mini-t"><tr><th>Direct</th><th>Primary (Rogō…)</th><th>Secondary (Rogāvī…)</th></tr>
        <tr><td><span class="la">Quid facis?</span></td><td><span class="la">quid faciās</span></td><td><span class="la">quid facerēs</span></td></tr>
        <tr><td><span class="la">Quid fēcistī?</span></td><td><span class="la">quid fēcerīs</span></td><td><span class="la">quid fēcissēs</span></td></tr>
        <tr><td><span class="la">Quid factūrus es?</span></td><td><span class="la">quid factūrus sīs</span></td><td><span class="la">quid factūrus essēs</span></td></tr></table>`
      },
      exs: [
        { la: 'Veniō ut tē videam.', ko: '나는 너를 보러 온다. (주요 → 현재 접속법)', en: 'I come to see you. (primary → present subj.)' },
        { la: 'Vēnī ut tē vidērem.', ko: '나는 너를 보러 왔다. (역사 → 미완료 접속법)', en: 'I came to see you. (secondary → imperfect subj.)' },
        { la: 'Nescīmus cūr abierit.', ko: '우리는 그가 왜 떠났는지 모른다.', en: 'We do not know why he left.' },
        { la: 'Rogābat quandō reditūrus essem.', ko: '그는 내가 언제 돌아올지 묻곤 했다.', en: 'He kept asking when I would return.' }
      ]
    }
  ],
  ex: [
    { t: 'mc', q: { ko: '“Veniō ut tē ___.” (videō) — 빈칸에 알맞은 형태는?', en: '“Veniō ut tē ___.” (videō) — which form?' }, o: ['videam', 'vidērem', 'vīderim', 'vīdissem'], a: 0, x: { ko: '주요 시제(현재) + 동시/이후 → 현재 접속법', en: 'primary + same time/later → present subjunctive' } },
    { t: 'mc', q: { ko: '“Vēnī ut tē ___.” (videō) — 빈칸에 알맞은 형태는?', en: '“Vēnī ut tē ___.” (videō) — which form?' }, o: ['vidērem', 'videam', 'vīderim', 'videō'], a: 0 },
    { t: 'mc', q: { ko: '“Rogāvī quid ___.” (그가 무엇을 했는지 물었다, faciō)', en: '“Rogāvī quid ___.” (I asked what he had done, faciō)' }, o: ['fēcisset', 'fēcerit', 'faceret', 'faciat'], a: 0, x: { ko: '역사 계열 + 이전 → 과거완료 접속법', en: 'secondary + earlier → pluperfect subjunctive' } },
    { t: 'mc', q: { ko: '“Rogō quid ___.” (그가 무엇을 했는지 묻는다, faciō)', en: '“Rogō quid ___.” (I ask what he did, faciō)' }, o: ['fēcerit', 'fēcisset', 'faceret', 'faciet'], a: 0 },
    { t: 'mc', q: { ko: '“Timeō nē pluat.”의 뜻은?', en: 'What does “Timeō nē pluat” mean?' }, o: [{ ko: '비가 올까 봐 걱정이다', en: 'I fear it may rain' }, { ko: '비가 오지 않을까 봐 걱정이다', en: 'I fear it may not rain' }, { ko: '비가 오지 않도록 한다', en: 'I prevent the rain' }, { ko: '비가 와서 두렵다', en: 'I am afraid because it rains' }], a: 0 },
    { t: 'mc', q: { ko: '“Tam fessus erat ut dormīret.”의 ut 절은?', en: 'The ut-clause in “Tam fessus erat ut dormīret” is…' }, o: [{ ko: '결과절', en: 'result' }, { ko: '목적절', en: 'purpose' }, { ko: '간접의문', en: 'indirect question' }, { ko: '두려움의 절', en: 'fearing' }], a: 0, x: { ko: 'tam(그렇게)이 결과절의 신호예요.', en: 'tam (so) signals a result clause.' } },
    { t: 'mc', q: { ko: '부정의 목적절(~하지 않도록)을 이끄는 말은?', en: 'A negative purpose clause is introduced by…' }, o: ['nē', 'ut nōn', 'nōn', 'quīn'], a: 0 },
    { t: 'mc', q: { ko: '부정의 결과절(그래서 ~하지 않았다)을 이끄는 말은?', en: 'A negative result clause is introduced by…' }, o: ['ut nōn', 'nē', 'nōlī', 'nēve'], a: 0 },
    { t: 'mc', q: { ko: '다음 중 “역사(secondary) 시제”는?', en: 'Which is a secondary (historic) tense?' }, o: [{ ko: '미완료', en: 'imperfect' }, { ko: '현재', en: 'present' }, { ko: '미래', en: 'future' }, { ko: '미래완료', en: 'future perfect' }], a: 0 },
    { t: 'mc', q: { ko: '“Lēgātōs mīsit quī pācem peterent.”의 관계절은?', en: 'The relative clause in “Lēgātōs mīsit quī pācem peterent” expresses…' }, o: [{ ko: '목적 (평화를 청하도록)', en: 'purpose (to ask for peace)' }, { ko: '결과', en: 'result' }, { ko: '양보', en: 'concession' }, { ko: '단순한 사실', en: 'plain fact' }], a: 0 },
    { t: 'mc', q: { ko: '“Rogāvī quid factūrus ___.” — 미래의 일을 묻는 간접의문 (역사 계열)', en: '“Rogāvī quid factūrus ___.” — future idea, secondary sequence' }, o: ['essēs', 'sīs', 'eris', 'fuistī'], a: 0 },
    { t: 'gen', v: 'video', k: 'subj.act.impf.0' },
    { t: 'gen', v: 'facio', k: 'subj.act.perf.2' },
    { t: 'gen', v: 'facio', k: 'subj.act.plup.2' },
    { t: 'fill', q: { ko: '“그가 왜 우는지 모르겠다.” Nesciō cūr ___. (fleō, 현재 접속법 3인칭 단수)', en: '“I don’t know why he is crying.” Nesciō cūr ___. (fleō, present subj. 3rd sg.)' }, a: ['fleat'] }
  ]
};
