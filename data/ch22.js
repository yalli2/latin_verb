window.CH = {
  n: 22,
  part: { ko: '제6부 · 부록: 명사·형용사·대명사', en: 'Part VI · Appendix: Nouns, Adjectives, Pronouns' },
  title: { ko: '대명사', en: 'Pronouns' },
  topics: [{ ko: '인칭·재귀 대명사', en: 'Personal & reflexive' }, { ko: '지시 대명사 hic · ille · is', en: 'Demonstratives hic · ille · is' }, { ko: '관계·의문 대명사 quī · quis', en: 'Relative & interrogative' }, { ko: 'ipse, īdem', en: 'ipse, īdem' }],
  intro: { ko: '동사는 주어를 품고 있어서 대명사를 자주 생략하지만, 간접화법의 sē, 관계절의 quī처럼 동사 구문에서 꼭 필요한 대명사들이 있어요.', en: 'Latin verbs contain their subject, so pronouns are often omitted — but some, like sē in indirect statement and quī in relative clauses, are vital to verb constructions.' },
  sec: [
    {
      h: { ko: '인칭·재귀 대명사', en: 'Personal and reflexive pronouns' },
      b: { ko: `<p>3인칭 인칭대명사 대신 <span class="la">is, ea, id</span>를 써요. 재귀대명사 <span class="la">sē</span>(자기 자신)는 주어를 가리키며 주격이 없어요.</p>`, en: `<p>For the 3rd person, <span class="la">is, ea, id</span> is used. The reflexive <span class="la">sē</span> refers back to the subject and has no nominative.</p>` },
      tables: [{
        head: ['', 'ego', 'tū', 'nōs', 'vōs', { ko: '재귀 (단·복)', en: 'reflexive (sg./pl.)' }],
        rows: [[{ ko: '주격', en: 'Nom.' }, 'ego', 'tū', 'nōs', 'vōs', '—'], [{ ko: '대격', en: 'Acc.' }, 'mē', 'tē', 'nōs', 'vōs', 'sē (sēsē)'], [{ ko: '속격', en: 'Gen.' }, 'meī', 'tuī', 'nostrum / nostrī', 'vestrum / vestrī', 'suī'], [{ ko: '여격', en: 'Dat.' }, 'mihi', 'tibi', 'nōbīs', 'vōbīs', 'sibi'], [{ ko: '탈격', en: 'Abl.' }, 'mē', 'tē', 'nōbīs', 'vōbīs', 'sē (sēsē)']]
      }]
    },
    {
      h: { ko: '지시 대명사', en: 'Demonstrative pronouns' },
      b: { ko: `<p><span class="la">hic</span> 이것(가까운), <span class="la">ille</span> 저것(먼, 유명한), <span class="la">is</span> 그것(앞서 말한), <span class="la">iste</span> 그것(너의, 경멸), <span class="la">ipse</span> 바로 그 자신, <span class="la">īdem</span> 같은.</p>`, en: `<p><span class="la">hic</span> this (near), <span class="la">ille</span> that (far, famous), <span class="la">is</span> that (just mentioned), <span class="la">iste</span> that of yours (often scornful), <span class="la">ipse</span> himself, <span class="la">īdem</span> the same.</p>` },
      tables: [{
        cap: 'hic · ille · is (m., f., n.)',
        head: ['', 'hic, haec, hoc', 'ille, illa, illud', 'is, ea, id'],
        rows: [[{ ko: '단수 주격', en: 'Nom. sg.' }, 'hic, haec, hoc', 'ille, illa, illud', 'is, ea, id'], [{ ko: '대격', en: 'Acc.' }, 'hunc, hanc, hoc', 'illum, illam, illud', 'eum, eam, id'], [{ ko: '속격', en: 'Gen.' }, 'huius', 'illīus', 'eius'], [{ ko: '여격', en: 'Dat.' }, 'huic', 'illī', 'eī'], [{ ko: '탈격', en: 'Abl.' }, 'hōc, hāc, hōc', 'illō, illā, illō', 'eō, eā, eō'],
          [{ ko: '복수 주격', en: 'Nom. pl.' }, 'hī, hae, haec', 'illī, illae, illa', 'eī (iī), eae, ea'], [{ ko: '대격', en: 'Acc.' }, 'hōs, hās, haec', 'illōs, illās, illa', 'eōs, eās, ea'], [{ ko: '속격', en: 'Gen.' }, 'hōrum, hārum, hōrum', 'illōrum, illārum, illōrum', 'eōrum, eārum, eōrum'], [{ ko: '여격·탈격', en: 'Dat./Abl.' }, 'hīs', 'illīs', 'eīs (iīs)']]
      }]
    },
    {
      h: { ko: '관계·의문 대명사', en: 'Relative and interrogative pronouns' },
      b: { ko: `<p>관계대명사 <span class="la">quī, quae, quod</span>는 선행사와 <b>성·수</b>를 맞추고, <b>격</b>은 관계절 안의 역할에 따라요. 의문대명사 <span class="la">quis, quid</span>(누구, 무엇)는 단수 주격·대격만 다르고 나머지는 같아요. 관계절이 목적·결과 등을 나타내면 동사는 접속법(제13장).</p>`, en: `<p>The relative <span class="la">quī, quae, quod</span> agrees with its antecedent in <b>gender and number</b>; its <b>case</b> depends on its role in its own clause. The interrogative <span class="la">quis, quid</span> differs only in the nom./acc. singular. Relative clauses of purpose, result etc. take the subjunctive (ch. 13).</p>` },
      tables: [{
        cap: 'quī, quae, quod',
        head: ['', { ko: '남성', en: 'm.' }, { ko: '여성', en: 'f.' }, { ko: '중성', en: 'n.' }],
        rows: [[{ ko: '단수 주격', en: 'Nom. sg.' }, 'quī', 'quae', 'quod'], [{ ko: '대격', en: 'Acc.' }, 'quem', 'quam', 'quod'], [{ ko: '속격', en: 'Gen.' }, 'cuius', 'cuius', 'cuius'], [{ ko: '여격', en: 'Dat.' }, 'cui', 'cui', 'cui'], [{ ko: '탈격', en: 'Abl.' }, 'quō', 'quā', 'quō'],
          [{ ko: '복수 주격', en: 'Nom. pl.' }, 'quī', 'quae', 'quae'], [{ ko: '대격', en: 'Acc.' }, 'quōs', 'quās', 'quae'], [{ ko: '속격', en: 'Gen.' }, 'quōrum', 'quārum', 'quōrum'], [{ ko: '여격·탈격', en: 'Dat./Abl.' }, 'quibus', 'quibus', 'quibus']]
      }],
      exs: [{ la: 'Puella quam vīdistī soror mea est.', ko: '네가 본 소녀는 내 여동생이다.', en: 'The girl whom you saw is my sister.' }, { la: 'Quis es? Quid vīs?', ko: '너는 누구냐? 무엇을 원하느냐?', en: 'Who are you? What do you want?' }, { la: 'Ipse dīxit.', ko: '그가 직접 말했다.', en: 'He himself said it.' }]
    }
  ],
  ex: [
    { t: 'fill', q: { ko: '“나에게” — ego의 여격', en: '“to me” — dative of ego' }, a: ['mihi'] },
    { t: 'fill', q: { ko: '“너를” — tū의 대격', en: '“you” (acc.) — accusative of tū' }, a: ['tē'] },
    { t: 'fill', q: { ko: '“자기 자신에게” — 재귀대명사 여격', en: '“to himself” — reflexive dative' }, a: ['sibi'] },
    { t: 'fill', q: { ko: '“이 남자를” — hic의 남성 대격 단수', en: '“this man” (acc.) — hic masc. acc. sg.' }, a: ['hunc'] },
    { t: 'fill', q: { ko: '“그의 (앞서 말한 사람의)” — is의 속격 단수', en: '“his” (of the one mentioned) — is gen. sg.' }, a: ['eius'] },
    { t: 'fill', q: { ko: '“Puella ___ vīdī” — 내가 본 소녀 (quī, 여성 대격 단수)', en: '“Puella ___ vīdī” — the girl whom I saw (quī, fem. acc. sg.)' }, a: ['quam'] },
    { t: 'fill', q: { ko: '“Virī ___ vēnērunt” — 온 남자들 (quī, 남성 주격 복수)', en: '“Virī ___ vēnērunt” — the men who came (quī, masc. nom. pl.)' }, a: ['quī'] },
    { t: 'mc', q: { ko: '“Dīcit sē fessum esse.”의 sē는 누구를 가리키나요?', en: 'In “Dīcit sē fessum esse”, sē refers to…' }, o: [{ ko: '말하는 주어 자신', en: 'the subject who speaks' }, { ko: '다른 사람', en: 'someone else' }, { ko: '듣는 사람', en: 'the listener' }, { ko: '사물', en: 'a thing' }], a: 0 },
    { t: 'mc', q: { ko: '관계대명사의 격은 무엇에 따라 정해지나요?', en: 'What decides the case of a relative pronoun?' }, o: [{ ko: '관계절 안에서의 역할', en: 'its role within the relative clause' }, { ko: '선행사의 격', en: 'the antecedent’s case' }, { ko: '주절 동사', en: 'the main verb' }, { ko: '항상 주격', en: 'always nominative' }], a: 0 },
    { t: 'mc', q: { ko: '재귀대명사 sē에 없는 격은?', en: 'Which case does reflexive sē lack?' }, o: [{ ko: '주격', en: 'nominative' }, { ko: '대격', en: 'accusative' }, { ko: '여격', en: 'dative' }, { ko: '탈격', en: 'ablative' }], a: 0 },
    { t: 'mc', q: { ko: '“저것, 저 유명한”의 뜻을 가진 지시대명사는?', en: 'Which demonstrative means “that (far off / famous)”?' }, o: ['ille', 'hic', 'is', 'īdem'], a: 0 },
    { t: 'mc', q: { ko: '“Ipse dīxit.”의 ipse의 뜻은?', en: 'In “Ipse dīxit”, ipse means…' }, o: [{ ko: '그 자신이 (직접)', en: 'he himself' }, { ko: '같은 사람이', en: 'the same man' }, { ko: '이 사람이', en: 'this man' }, { ko: '누가?', en: 'who?' }], a: 0 }
  ]
};
