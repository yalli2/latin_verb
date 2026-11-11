window.CH = {
  n: 21,
  part: { ko: '제6부 · 부록: 명사·형용사·대명사', en: 'Part VI · Appendix: Nouns, Adjectives, Pronouns' },
  title: { ko: '명사와 형용사의 격변화', en: 'Declension of Nouns and Adjectives' },
  topics: [{ ko: '제1·2변화', en: '1st & 2nd declension' }, { ko: '제3변화 (자음·i-어간)', en: '3rd declension (consonant & i-stems)' }, { ko: '제4·5변화', en: '4th & 5th declension' }, { ko: '형용사 bonus · fortis · ingēns', en: 'Adjectives bonus · fortis · ingēns' }],
  intro: { ko: '분사·동명사·동형용사는 모두 형용사나 명사처럼 격변화해요. 동사를 제대로 쓰려면 이 표들을 함께 알아 두는 것이 좋아요.', en: 'Participles, gerunds and gerundives all decline like nouns or adjectives, so these tables are part of using verbs well.' },
  sec: [
    {
      h: { ko: '제1·2변화 명사', en: '1st and 2nd declension nouns' },
      b: { ko: `<p>제1변화는 주로 여성(-a), 제2변화는 남성(-us, -er)과 중성(-um).</p>`, en: `<p>The 1st declension is mostly feminine (-a); the 2nd is masculine (-us, -er) and neuter (-um).</p>` },
      tables: [{
        cap: { ko: '제1·2변화', en: '1st & 2nd declension' },
        head: ['', 'puella (f.) 소녀', 'dominus (m.) 주인', 'puer (m.) 소년', 'bellum (n.) 전쟁'],
        rows: [
          [{ ko: '단수 주격', en: 'Nom. sg.' }, 'puella', 'dominus', 'puer', 'bellum'], [{ ko: '호격', en: 'Voc.' }, 'puella', 'domine', 'puer', 'bellum'],
          [{ ko: '대격', en: 'Acc.' }, 'puellam', 'dominum', 'puerum', 'bellum'], [{ ko: '속격', en: 'Gen.' }, 'puellae', 'dominī', 'puerī', 'bellī'],
          [{ ko: '여격', en: 'Dat.' }, 'puellae', 'dominō', 'puerō', 'bellō'], [{ ko: '탈격', en: 'Abl.' }, 'puellā', 'dominō', 'puerō', 'bellō'],
          [{ ko: '복수 주격·호격', en: 'Nom./Voc. pl.' }, 'puellae', 'dominī', 'puerī', 'bella'], [{ ko: '대격', en: 'Acc.' }, 'puellās', 'dominōs', 'puerōs', 'bella'],
          [{ ko: '속격', en: 'Gen.' }, 'puellārum', 'dominōrum', 'puerōrum', 'bellōrum'], [{ ko: '여격·탈격', en: 'Dat./Abl.' }, 'puellīs', 'dominīs', 'puerīs', 'bellīs']
        ]
      }]
    },
    {
      h: { ko: '제3변화 명사', en: '3rd declension nouns' },
      b: {
        ko: `<p><b>자음 어간</b>(속격 복수 -um)과 <b>i-어간</b>(속격 복수 -ium)이 있어요. 중성 i-어간(-e, -al, -ar)은 탈격 단수 -ī, 주·대격 복수 -ia.</p>`,
        en: `<p><b>Consonant stems</b> (gen. pl. -um) and <b>i-stems</b> (gen. pl. -ium). Neuter i-stems (-e, -al, -ar) have abl. sg. -ī and nom./acc. pl. -ia.</p>`
      },
      tables: [{
        cap: { ko: '제3변화', en: '3rd declension' },
        head: ['', 'rēx (m.) 왕', 'corpus (n.) 몸', 'cīvis (m.) 시민', 'mare (n.) 바다'],
        rows: [
          [{ ko: '단수 주격', en: 'Nom. sg.' }, 'rēx', 'corpus', 'cīvis', 'mare'], [{ ko: '대격', en: 'Acc.' }, 'rēgem', 'corpus', 'cīvem', 'mare'],
          [{ ko: '속격', en: 'Gen.' }, 'rēgis', 'corporis', 'cīvis', 'maris'], [{ ko: '여격', en: 'Dat.' }, 'rēgī', 'corporī', 'cīvī', 'marī'],
          [{ ko: '탈격', en: 'Abl.' }, 'rēge', 'corpore', 'cīve', 'marī'],
          [{ ko: '복수 주격', en: 'Nom. pl.' }, 'rēgēs', 'corpora', 'cīvēs', 'maria'], [{ ko: '대격', en: 'Acc.' }, 'rēgēs', 'corpora', 'cīvēs (-īs)', 'maria'],
          [{ ko: '속격', en: 'Gen.' }, 'rēgum', 'corporum', 'cīvium', 'marium'], [{ ko: '여격·탈격', en: 'Dat./Abl.' }, 'rēgibus', 'corporibus', 'cīvibus', 'maribus']
        ]
      }]
    },
    {
      h: { ko: '제4·5변화 명사', en: '4th and 5th declension nouns' },
      b: { ko: `<p>제4변화는 -us(대부분 남성)와 -ū(중성), 제5변화는 -ēs(대부분 여성). 목적분사 <span class="la">-um/-ū</span>는 제4변화의 대격·탈격이에요!</p>`, en: `<p>4th: -us (mostly masc.) and -ū (neut.); 5th: -ēs (mostly fem.). The supine in <span class="la">-um/-ū</span> is in fact a 4th-declension accusative/ablative!</p>` },
      tables: [{
        cap: { ko: '제4·5변화', en: '4th & 5th declension' },
        head: ['', 'manus (f.) 손', 'cornū (n.) 뿔', 'rēs (f.) 일, 사물'],
        rows: [
          [{ ko: '단수 주격', en: 'Nom. sg.' }, 'manus', 'cornū', 'rēs'], [{ ko: '대격', en: 'Acc.' }, 'manum', 'cornū', 'rem'],
          [{ ko: '속격', en: 'Gen.' }, 'manūs', 'cornūs', 'reī'], [{ ko: '여격', en: 'Dat.' }, 'manuī', 'cornū', 'reī'], [{ ko: '탈격', en: 'Abl.' }, 'manū', 'cornū', 'rē'],
          [{ ko: '복수 주격·대격', en: 'Nom./Acc. pl.' }, 'manūs', 'cornua', 'rēs'], [{ ko: '속격', en: 'Gen.' }, 'manuum', 'cornuum', 'rērum'], [{ ko: '여격·탈격', en: 'Dat./Abl.' }, 'manibus', 'cornibus', 'rēbus']
        ]
      }]
    },
    {
      h: { ko: '형용사', en: 'Adjectives' },
      b: {
        ko: `<p><b>제1·2변화 형용사</b> <span class="la">bonus, bona, bonum</span> — 완료분사(<span class="la">amātus</span>), 미래분사(<span class="la">amātūrus</span>), 동형용사(<span class="la">amandus</span>)가 이렇게 변해요.</p>
        <p><b>제3변화 형용사</b>(i-어간) <span class="la">fortis, forte</span>; 한 어미 형용사 <span class="la">ingēns, ingentis</span> — <b>현재분사</b>(<span class="la">amāns, amantis</span>)가 이렇게 변해요 (단, 분사로 쓸 때 탈격 단수는 보통 <span class="la">-e</span>).</p>`,
        en: `<p><b>1st/2nd declension</b> <span class="la">bonus, bona, bonum</span> — the model for perfect participles (<span class="la">amātus</span>), future participles (<span class="la">amātūrus</span>) and gerundives (<span class="la">amandus</span>).</p>
        <p><b>3rd declension</b> (i-stem) <span class="la">fortis, forte</span>; one-termination <span class="la">ingēns, ingentis</span> — the model for <b>present participles</b> (<span class="la">amāns, amantis</span>; as participles their abl. sg. is usually <span class="la">-e</span>).</p>`
      },
      tables: [{
        cap: 'bonus, -a, -um',
        head: ['', { ko: '남성', en: 'm.' }, { ko: '여성', en: 'f.' }, { ko: '중성', en: 'n.' }],
        rows: [[{ ko: '단수 주격', en: 'Nom. sg.' }, 'bonus', 'bona', 'bonum'], [{ ko: '대격', en: 'Acc.' }, 'bonum', 'bonam', 'bonum'], [{ ko: '속격', en: 'Gen.' }, 'bonī', 'bonae', 'bonī'], [{ ko: '여격', en: 'Dat.' }, 'bonō', 'bonae', 'bonō'], [{ ko: '탈격', en: 'Abl.' }, 'bonō', 'bonā', 'bonō'],
          [{ ko: '복수 주격', en: 'Nom. pl.' }, 'bonī', 'bonae', 'bona'], [{ ko: '대격', en: 'Acc.' }, 'bonōs', 'bonās', 'bona'], [{ ko: '속격', en: 'Gen.' }, 'bonōrum', 'bonārum', 'bonōrum'], [{ ko: '여격·탈격', en: 'Dat./Abl.' }, 'bonīs', 'bonīs', 'bonīs']]
      }, {
        cap: 'fortis, forte · ingēns',
        head: ['', 'fortis (m./f.)', 'forte (n.)', 'ingēns (m./f.)', 'ingēns (n.)'],
        rows: [[{ ko: '단수 주격', en: 'Nom. sg.' }, 'fortis', 'forte', 'ingēns', 'ingēns'], [{ ko: '대격', en: 'Acc.' }, 'fortem', 'forte', 'ingentem', 'ingēns'], [{ ko: '속격', en: 'Gen.' }, 'fortis', 'fortis', 'ingentis', 'ingentis'], [{ ko: '여격', en: 'Dat.' }, 'fortī', 'fortī', 'ingentī', 'ingentī'], [{ ko: '탈격', en: 'Abl.' }, 'fortī', 'fortī', 'ingentī', 'ingentī'],
          [{ ko: '복수 주격', en: 'Nom. pl.' }, 'fortēs', 'fortia', 'ingentēs', 'ingentia'], [{ ko: '대격', en: 'Acc.' }, 'fortēs (-īs)', 'fortia', 'ingentēs (-īs)', 'ingentia'], [{ ko: '속격', en: 'Gen.' }, 'fortium', 'fortium', 'ingentium', 'ingentium'], [{ ko: '여격·탈격', en: 'Dat./Abl.' }, 'fortibus', 'fortibus', 'ingentibus', 'ingentibus']]
      }]
    }
  ],
  ex: [
    { t: 'fill', q: { ko: 'puella의 대격 단수를 쓰세요.', en: 'Write the accusative singular of puella.' }, a: ['puellam'] },
    { t: 'fill', q: { ko: 'dominus의 속격 복수를 쓰세요.', en: 'Write the genitive plural of dominus.' }, a: ['dominōrum'] },
    { t: 'fill', q: { ko: 'bellum의 주격 복수를 쓰세요.', en: 'Write the nominative plural of bellum.' }, a: ['bella'] },
    { t: 'fill', q: { ko: 'rēx의 대격 단수를 쓰세요.', en: 'Write the accusative singular of rēx.' }, a: ['rēgem'] },
    { t: 'fill', q: { ko: 'corpus의 속격 단수를 쓰세요.', en: 'Write the genitive singular of corpus.' }, a: ['corporis'] },
    { t: 'fill', q: { ko: 'cīvis의 속격 복수를 쓰세요. (i-어간)', en: 'Write the genitive plural of cīvis (i-stem).' }, a: ['cīvium'] },
    { t: 'fill', q: { ko: 'rēs의 탈격 복수를 쓰세요.', en: 'Write the ablative plural of rēs.' }, a: ['rēbus'] },
    { t: 'fill', q: { ko: 'manus의 탈격 단수를 쓰세요.', en: 'Write the ablative singular of manus.' }, a: ['manū'] },
    { t: 'fill', q: { ko: 'amāns(사랑하는)의 속격 단수를 쓰세요.', en: 'Write the genitive singular of amāns.' }, a: ['amantis'] },
    { t: 'fill', q: { ko: '“용감한 소녀들을” fortēs ___ (puella, 대격 복수)', en: '“the brave girls (acc.)” fortēs ___ (puella, acc. pl.)' }, a: ['puellās'] },
    { t: 'mc', q: { ko: '완료 수동 분사(captus)는 어떤 형용사처럼 변하나요?', en: 'The perfect passive participle (captus) declines like…' }, o: ['bonus, -a, -um', 'fortis, forte', 'ingēns, ingentis', 'rēs, reī'], a: 0 },
    { t: 'mc', q: { ko: '현재분사(capiēns)는 어떤 형용사처럼 변하나요?', en: 'The present participle (capiēns) declines like…' }, o: ['ingēns, ingentis', 'bonus, -a, -um', 'puella', 'dominus'], a: 0 },
    { t: 'mc', q: { ko: '목적분사 -um / -ū는 어느 변화의 격 형태인가요?', en: 'The supine in -um / -ū comes from which declension?' }, o: [{ ko: '제4변화', en: '4th' }, { ko: '제1변화', en: '1st' }, { ko: '제3변화', en: '3rd' }, { ko: '제5변화', en: '5th' }], a: 0 },
    { t: 'mc', q: { ko: 'mare의 탈격 단수는?', en: 'The ablative singular of mare is…' }, o: ['marī', 'mare', 'maribus', 'maris'], a: 0, x: { ko: '중성 i-어간은 탈격 단수가 -ī', en: 'Neuter i-stems have abl. sg. -ī' } }
  ]
};
