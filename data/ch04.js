window.CH = {
  n: 4,
  part: { ko: '제2부 · 직설법', en: 'Part II · The Indicative' },
  title: { ko: '미완료 직설법', en: 'The Imperfect Indicative' },
  topics: [{ ko: '-bam / -ēbam', en: '-bam / -ēbam' }, { ko: '계속·반복 동작', en: 'Continuous & habitual' }, { ko: '시작·시도의 미완료', en: 'Inceptive & conative' }, { ko: '편지 쓰기 시제', en: 'Epistolary tenses' }],
  intro: { ko: '미완료는 과거에 "계속되던" 또는 "되풀이되던" 일을 그려요. 사진이 아니라 영상처럼 과거를 보여 주는 시제예요.', en: 'The imperfect pictures past action as ongoing or repeated — more like a film clip than a snapshot.' },
  sec: [
    {
      h: { ko: '만드는 법', en: 'Formation' },
      b: {
        ko: `<ul><li><b>제1·2활용</b>: 현재 어간 모음을 길게 + <span class="la">-bam, -bās, -bat, -bāmus, -bātis, -bant</span> → <span class="la">amābam, monēbam</span></li>
        <li><b>제3·4·혼합활용</b>: 현재 어간 + <span class="la">-ēbam, -ēbās, -ēbat…</span> → <span class="la">regēbam, audiēbam, capiēbam</span></li>
        <li>수동태는 <span class="la">-bar, -bāris (-bāre), -bātur, -bāmur, -bāminī, -bantur</span>.</li>
        <li>미완료 <b>부정사나 분사는 없어요</b>.</li></ul>
        <div class="box tip">기억법: 미완료의 표지는 <b>-ba-</b>! (<span class="la">eram</span>만 예외)</div>`,
        en: `<ul><li><b>1st & 2nd</b>: lengthened stem vowel + <span class="la">-bam, -bās, -bat, -bāmus, -bātis, -bant</span> → <span class="la">amābam, monēbam</span></li>
        <li><b>3rd, 4th, mixed</b>: present stem + <span class="la">-ēbam, -ēbās, -ēbat…</span> → <span class="la">regēbam, audiēbam, capiēbam</span></li>
        <li>Passive: <span class="la">-bar, -bāris (-bāre), -bātur, -bāmur, -bāminī, -bantur</span>.</li>
        <li>There is <b>no</b> imperfect infinitive or participle.</li></ul>
        <div class="box tip">Memory hook: the imperfect sign is <b>-ba-</b> (except <span class="la">eram</span>).</div>`
      },
      para: [{ v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'ind.act.impf' }, { v: ['amo', 'moneo', 'rego', 'audio', 'capio'], k: 'ind.pass.impf' }]
    },
    {
      h: { ko: '쓰임', en: 'Uses' },
      b: {
        ko: `<ul><li><b>계속된 동작</b>: "~하고 있었다" — <span class="la">Oculī eius ārdēbant.</span> 그의 눈이 이글거리고 있었다.</li>
        <li><b>습관·반복</b>: "~하곤 했다" — 영어 <i>used to</i>.</li>
        <li><b>시작의 미완료(inceptive)</b>: "~하기 시작했다" (끝나지 않음).</li>
        <li><b>시도의 미완료(conative)</b>: "~하려고 했다" (이루지 못함). 시작의 미완료와 구별이 어려울 때가 많아요.</li>
        <li><b>iam + 미완료</b>: 과거의 어느 시점까지 계속되던 일 — 영어 과거완료(<i>had been …ing</i>)로 옮겨요.</li>
        <li><b>편지의 시제</b>: 로마인은 편지를 <b>받는 사람</b>의 시점에서 써서, 쓰는 지금의 일을 미완료나 완료로 표현하기도 했어요: <span class="la">haec scrībēbam</span> = "나는 지금 이것을 쓰고 있다".</li></ul>`,
        en: `<ul><li><b>Continuous action</b>: “was …ing” — <span class="la">Oculī eius ārdēbant.</span> His eyes were blazing.</li>
        <li><b>Habitual action</b>: “used to …”.</li>
        <li><b>Inceptive</b>: “began to …” (not completed).</li>
        <li><b>Conative</b>: “tried to …” (not achieved) — often hard to tell from the inceptive.</li>
        <li><b>iam + imperfect</b>: something that had been going on up to a past moment — English pluperfect (“had been …ing”).</li>
        <li><b>Epistolary</b>: Romans wrote letters from the <b>reader’s</b> point of view, so “I am writing this” could be <span class="la">haec scrībēbam</span>.</li></ul>`
      },
      exs: [
        { la: 'Nocte in forō ambulābat, quod dormīre nōn poterat.', ko: '그는 잠을 잘 수 없어서 밤마다 광장을 걷곤 했다. (습관)', en: 'He used to walk in the forum at night because he could not sleep. (habitual)' },
        { la: 'Senātor cūriam relinquēbat, cum amīcī eum retinuērunt.', ko: '원로원 의원이 회의장을 떠나려 하는데 친구들이 그를 붙잡았다. (시작)', en: 'The senator was starting to leave the senate house when his friends held him back. (inceptive)' },
        { la: 'In prōvinciam veniēbātis, sed prohibitī estis.', ko: '너희는 속주에 들어가려 했지만 저지당했다. (시도)', en: 'You tried to enter the province, but you were stopped. (conative)' },
        { la: 'Iam diū tibi resistēbam.', ko: '나는 이미 오랫동안 너에게 맞서 오고 있었다.', en: 'I had already been resisting you for a long time.' }
      ]
    }
  ],
  ex: [
    { t: 'gen', v: 'amo', k: 'ind.act.impf.0' },
    { t: 'gen', v: 'moneo', k: 'ind.act.impf.5' },
    { t: 'gen', v: 'rego', k: 'ind.act.impf.1' },
    { t: 'gen', v: 'audio', k: 'ind.act.impf.3' },
    { t: 'gen', v: 'capio', k: 'ind.act.impf.2' },
    { t: 'gen', v: 'duco', k: 'ind.act.impf.4' },
    { t: 'gen', v: 'amo', k: 'ind.pass.impf.2' },
    { t: 'gen', v: 'video', k: 'ind.pass.impf.5' },
    { t: 'gen', v: 'rego', k: 'ind.pass.impf.3' },
    { t: 'gen', v: 'audio', k: 'ind.pass.impf.1' },
    { t: 'parse', v: 'capio', k: 'ind.act.impf.4' },
    { t: 'parse', v: 'moneo', k: 'ind.pass.impf.0' },
    { t: 'parse', v: 'mitto', k: 'ind.act.impf.5' },
    { t: 'mc', q: { ko: '“그는 매일 아침 일찍 일어나곤 했다”에 알맞은 시제는?', en: 'Which tense fits “He used to get up early every morning”?' }, o: [{ ko: '미완료', en: 'imperfect' }, { ko: '완료', en: 'perfect' }, { ko: '과거완료', en: 'pluperfect' }, { ko: '미래완료', en: 'future perfect' }], a: 0 },
    { t: 'mc', q: { ko: '“~하려고 했지만 이루지 못했다”를 나타내는 미완료의 이름은?', en: 'What is the imperfect of “tried to (but didn’t)” called?' }, o: [{ ko: '시도의 미완료 (conative)', en: 'conative imperfect' }, { ko: '역사적 현재', en: 'historic present' }, { ko: '격언적 완료', en: 'gnomic perfect' }, { ko: '편지의 미래', en: 'epistolary future' }], a: 0 },
    { t: 'mc', q: { ko: '미완료 시제에 대해 옳은 것은?', en: 'Which is true of the imperfect?' }, o: [{ ko: '미완료 부정사와 분사는 없다', en: 'it has no infinitive or participle' }, { ko: '완료 어간으로 만든다', en: 'it is built on the perfect stem' }, { ko: '어미가 -erō이다', en: 'its ending is -erō' }, { ko: '수동태가 두 단어로 이뤄진다', en: 'its passive is two words' }], a: 0 },
    { t: 'mc', q: { ko: '로마인이 편지에 “haec scrībēbam”이라고 썼다면 뜻은?', en: 'A Roman writes “haec scrībēbam” in a letter. Meaning?' }, o: [{ ko: '(지금) 이것을 쓰고 있다', en: 'I am (now) writing this' }, { ko: '이것을 쓸 것이다', en: 'I will write this' }, { ko: '이것을 쓰지 않았다', en: 'I did not write this' }, { ko: '이것을 쓰라!', en: 'Write this!' }], a: 0, x: { ko: '받는 사람의 시점에서는 이미 과거의 일이므로 미완료를 써요.', en: 'From the reader’s viewpoint the writing is already past.' } }
  ]
};
