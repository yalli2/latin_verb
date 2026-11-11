/* VERBA LATINA — shared UI: home, chapter and verb-lab pages */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const ROMAN = n => { let r = ''; for (const [v, s] of [[40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]) { while (n >= v) { r += s; n -= v; } } return r; };

  /* ---------------- i18n ---------------- */
  const T = {
    ko: {
      siteSub: '라틴어 동사 변화 인터랙티브 학습', heroText: '라틴어 동사의 모든 시제·법·태를 단계별로 익히고, 바로 연습문제를 풀어 점수를 확인해 보세요. 모든 라틴어는 클릭하면 소리로 들을 수 있어요.',
      start: '1장부터 시작하기', cont: '이어서 학습', lab: '동사 변화 실험실', labSub: '대표 동사 40개 + 모델·이태·불규칙 동사의 전체 변화표와 랜덤 드릴',
      top40: '핵심 동사 40', top40Sub: '자주 쓰이는 40개 동사의 기본 뜻과 주요 부분 익히기',
      overall: '전체 진도', avg: '평균 점수', chDone: '완료한 장', search: '장 제목·주제 검색 (예: 접속법, gerund)',
      chapter: '제', chapterSuf: '장', lesson: '학습', exercises: '연습문제', results: '결과', home: '메인', prev: '이전 장', next: '다음 장',
      grade: '채점하기', retry: '다시 풀기', score: '점수', best: '최고 점수', notStarted: '시작 전', items: '문항', examples: '예문',
      correct: '맞았어요', wrong: '틀렸어요', answer: '정답', yourAns: '내 답', typeAns: '라틴어로 입력 (장음 부호는 생략해도 돼요)',
      unanswered: '아직 풀지 않은 문항이 있어요. 그래도 채점할까요?', graded: '채점 완료!', resultsTitle: '학습 결과',
      noResult: '아직 채점한 기록이 없어요. 연습문제를 풀고 「채점하기」를 눌러 보세요.', goEx: '연습문제 풀러 가기',
      pron: '발음', audioSettings: '음성 설정', voice: '음성', speed: '속도', classical: '고전 발음 (복원식)', ecclesiastical: '교회 발음 (이탈리아식)', pronStyle: '발음 방식',
      noVoice: '이 기기에서 사용할 음성을 찾지 못했어요. Chrome이나 Edge를 사용해 보세요.',
      voiceNote: '라틴어는 오늘날 모국어 화자가 없습니다. 기기에서 가장 자연스러운 라틴어/이탈리아어(신경망) 음성을 골라 라틴어 발음 규칙에 맞게 다듬어 읽어 줍니다. Chrome·Edge의 "Google italiano", "Microsoft Elsa/Isabella Online (Natural)" 음성이 가장 자연스러워요.',
      pronTitle: '라틴어 발음 들어보기', pronText: '단어를 눌러 들어 보세요. 상단 🔊 버튼에서 고전식/교회식 발음, 음성, 속도를 바꿀 수 있어요.',
      mc: '선택', fill: '쓰기', gen: '변화형 쓰기', parse: '형태 분석', listen: '듣기',
      writeForm: '다음 형태를 쓰세요', whichForm: '이 형태는 무엇일까요?', ppHead: '주요 부분', conj: '활용', meaning: '뜻',
      tables: '변화표', drill: '드릴 (10문제)', newDrill: '새 드릴', allTop: '핵심 40 랜덤 드릴',
      indAct: '직설법 능동태', indPass: '직설법 수동태', subjAct: '접속법 능동태', subjPass: '접속법 수동태', imper: '명령법', nonfinite: '비한정형 (부정사·분사·동명사·목적분사)',
      depNote: '이태동사: 형태는 수동, 뜻은 능동', noPassNote: '자동사 — 수동태는 비인칭 3인칭 단수로만 쓰여요', irrNote: '불규칙 변화가 있는 동사',
      grpModel: '다섯 가지 모델 동사', grpTop: '핵심 동사 40', grpDep: '이태동사 (deponent)', grpIrr: '불규칙 동사',
      first: '제1(현재)', second: '제2(미래)', copyright: '교재 「The Big Book of Latin Verbs」의 체계를 참고해 설명과 예문을 새로 쓰고 다듬은 학습 자료입니다.',
      footer: 'VERBA LATINA · 국제학교 라틴어 동사 변화 수업 · 다인원격평생교육직업학원'
    },
    en: {
      siteSub: 'Interactive Latin Verb Conjugation', heroText: 'Master every tense, mood and voice of the Latin verb step by step, then practise right away and see your score. Click any Latin word to hear it.',
      start: 'Start with Chapter 1', cont: 'Continue', lab: 'Verb Lab', labSub: 'Full tables and random drills for the Top 40 plus model, deponent and irregular verbs',
      top40: 'Top 40 Verbs', top40Sub: 'Meanings and principal parts of the 40 most useful verbs',
      overall: 'Overall progress', avg: 'Average score', chDone: 'Chapters done', search: 'Search chapters (e.g. subjunctive, gerund)',
      chapter: 'Chapter', chapterSuf: '', lesson: 'Lesson', exercises: 'Exercises', results: 'Results', home: 'Home', prev: 'Previous', next: 'Next',
      grade: 'Check answers', retry: 'Try again', score: 'Score', best: 'Best', notStarted: 'Not started', items: 'items', examples: 'Examples',
      correct: 'Correct', wrong: 'Wrong', answer: 'Answer', yourAns: 'Your answer', typeAns: 'Type in Latin (macrons optional)',
      unanswered: 'Some questions are still unanswered. Check anyway?', graded: 'Checked!', resultsTitle: 'Your results',
      noResult: 'No results yet. Do the exercises and press “Check answers”.', goEx: 'Go to exercises',
      pron: 'Pronunciation', audioSettings: 'Audio settings', voice: 'Voice', speed: 'Speed', classical: 'Classical (restored)', ecclesiastical: 'Ecclesiastical (Church)', pronStyle: 'Pronunciation',
      noVoice: 'No suitable voice found on this device. Try Chrome or Edge.',
      voiceNote: 'Latin has no native speakers today. The audio picks the most natural Latin or Italian (neural) voice on your device and adapts it to Latin pronunciation rules. “Google italiano” or “Microsoft Elsa/Isabella Online (Natural)” in Chrome/Edge sound best.',
      pronTitle: 'Hear Latin', pronText: 'Tap a word to hear it. Use the 🔊 button at the top to switch Classical/Ecclesiastical pronunciation, voice and speed.',
      mc: 'choice', fill: 'write', gen: 'form', parse: 'parse', listen: 'Listen',
      writeForm: 'Write the form', whichForm: 'Identify this form', ppHead: 'Principal parts', conj: 'Conjugation', meaning: 'Meaning',
      tables: 'Tables', drill: 'Drill (10 questions)', newDrill: 'New drill', allTop: 'Random Top-40 drill',
      indAct: 'Indicative active', indPass: 'Indicative passive', subjAct: 'Subjunctive active', subjPass: 'Subjunctive passive', imper: 'Imperative', nonfinite: 'Non-finite forms (infinitives, participles, gerund, supine)',
      depNote: 'Deponent: passive in form, active in meaning', noPassNote: 'Intransitive — passive only as impersonal 3rd sg.', irrNote: 'Verb with irregular forms',
      grpModel: 'Five model verbs', grpTop: 'Top 40 verbs', grpDep: 'Deponent verbs', grpIrr: 'Irregular verbs',
      first: '1st (present)', second: '2nd (future)', copyright: 'Explanations and examples are newly written learning materials, organised after the structure of “The Big Book of Latin Verbs”.',
      footer: 'VERBA LATINA · Latin verb class · 다인원격평생교육직업학원'
    }
  };
  let lang = store.get('lv_lang', null) || ((navigator.language || 'ko').startsWith('ko') ? 'ko' : 'en');
  const t = k => T[lang][k] ?? T.en[k] ?? k;
  const tx = o => (o == null ? '' : typeof o === 'string' ? o : (o[lang] ?? o.en ?? o.ko ?? ''));
  const chName = n => lang === 'ko' ? `제${n}장` : `Chapter ${n}`;

  /* ---------------- top bar & audio ---------------- */
  const LOGO = `<svg class="laurel" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#1d3557" stroke="#e9d29a" stroke-width="3"/><circle cx="32" cy="32" r="23" fill="none" stroke="#e9d29a" stroke-width="1" stroke-dasharray="2 3"/><text x="32" y="42" text-anchor="middle" font-family="Cinzel,Georgia,serif" font-size="27" font-weight="700" fill="#e9d29a">V</text></svg>`;
  function buildTopbar(crumb) {
    $('#topbar').innerHTML = `<div class="wrap">
      <a class="brand" href="index.html">${LOGO}<span>VERBA LATINA</span></a>
      <span class="crumbs">${crumb || ''}</span><span class="spacer"></span>
      <a class="tb-btn" href="lab.html" style="text-decoration:none">⚗️ <span class="lbl">${t('lab')}</span></a>
      <div class="dropdown"><button class="tb-btn" id="audioBtn" title="${t('audioSettings')}">🔊 <span class="lbl">${t('pron')}</span></button><div class="menu audio-panel" id="audioMenu"></div></div>
      <button class="tb-btn" id="langBtn" title="한국어 / English">🌐 <span class="lbl">${lang === 'ko' ? '한국어 → EN' : 'English → 한국어'}</span><span class="sh">${lang === 'ko' ? 'KO' : 'EN'}</span></button>
    </div>`;
    const am = $('#audioMenu');
    $('#audioBtn').onclick = e => { e.stopPropagation(); renderAudio(); am.classList.toggle('open'); };
    am.onclick = e => e.stopPropagation();
    document.addEventListener('click', () => am.classList.remove('open'));
    $('#langBtn').onclick = () => { lang = lang === 'ko' ? 'en' : 'ko'; store.set('lv_lang', lang); document.documentElement.lang = lang; render(); };
  }
  function renderAudio() {
    const am = $('#audioMenu');
    if (!TTS.supported || !TTS.voices.length) { am.innerHTML = `<div class="note">${t('noVoice')}</div><div class="note">${t('voiceNote')}</div>`; return; }
    am.innerHTML = `<label>${t('pronStyle')}</label>
      <div class="seg"><button data-s="classical" class="${TTS.style === 'classical' ? 'on' : ''}">${t('classical')}</button><button data-s="ecclesiastical" class="${TTS.style === 'ecclesiastical' ? 'on' : ''}">${t('ecclesiastical')}</button></div>
      <label>${t('voice')}</label><select id="voiceSel">${TTS.voices.map(v => `<option ${TTS.voice && v.name === TTS.voice.name ? 'selected' : ''}>${esc(v.name)} (${v.lang})</option>`).join('')}</select>
      <label>${t('speed')} <b id="rateV">${TTS.rate.toFixed(2)}×</b></label><input type="range" id="rate" min="0.5" max="1.3" step="0.05" value="${TTS.rate}">
      <div class="wrow"><button class="btn btn-red btn-sm" id="testV">▶ Amō, amās, amat…</button></div>
      <div class="note">${t('voiceNote')}</div>`;
    $$('.seg button', am).forEach(b => b.onclick = () => { TTS.setStyle(b.dataset.s); renderAudio(); });
    $('#voiceSel').onchange = e => TTS.setVoice(TTS.voices[e.target.selectedIndex].name);
    $('#rate').oninput = e => { TTS.setRate(parseFloat(e.target.value)); $('#rateV').textContent = TTS.rate.toFixed(2) + '×'; };
    $('#testV').onclick = () => TTS.speak('Amō, amās, amat, amāmus, amātis, amant. Vēnī, vīdī, vīcī.');
  }
  TTS.listeners.push(() => { const am = $('#audioMenu'); if (am && am.classList.contains('open')) renderAudio(); });
  const say = (text, slow) => TTS.speak(String(text).replace(/\(.*?\)/g, '').replace(/[—–]/g, ' ').replace(/\s*\/\s*/g, ', '), { slow });
  function toast(msg) {
    let el = $('.toast'); if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), 2200);
  }
  const footer = extra => `<footer class="footer"><div class="wrap">${t('footer')}${extra ? ' · ' + extra : ''}<br><small>${t('copyright')}</small></div></footer>`;

  /* ---------------- engine helpers ---------------- */
  const getPath = (id, key) => {
    const p = LV.paradigm(id); let o = p;
    for (const s of key.split('.')) { if (o == null) return null; o = o[s]; }
    return o == null ? null : o;
  };
  const NF = {
    'inf.act.pres': ['현재 능동 부정사', 'present active infinitive'], 'inf.act.perf': ['완료 능동 부정사', 'perfect active infinitive'], 'inf.act.fut': ['미래 능동 부정사', 'future active infinitive'],
    'inf.pass.pres': ['현재 수동 부정사', 'present passive infinitive'], 'inf.pass.perf': ['완료 수동 부정사', 'perfect passive infinitive'], 'inf.pass.fut': ['미래 수동 부정사', 'future passive infinitive'],
    'part.pres': ['현재 분사', 'present participle'], 'part.fut': ['미래 분사', 'future participle'], 'part.perf': ['완료 (수동) 분사', 'perfect (passive) participle'],
    'part.gerundive': ['동형용사 (gerundive)', 'gerundive'], 'gerund': ['동명사 (gerund, 대격)', 'gerund (accusative)'], 'supine': ['목적분사 (supine)', 'supine']
  };
  const describeKey = (key, v) => {
    if (v && v.dep && key.startsWith('inf.pass')) {
      const te = key.split('.')[2];
      return lang === 'ko' ? { pres: '현재 부정사', perf: '완료 부정사', fut: '미래 부정사' }[te] : { pres: 'present infinitive', perf: 'perfect infinitive', fut: 'future infinitive' }[te];
    }
    if (v && v.dep && key === 'part.perf') return lang === 'ko' ? '완료 분사 (능동 뜻)' : 'perfect participle (active meaning)';
    if (NF[key]) return NF[key][lang === 'ko' ? 0 : 1];
    return LV.describe(key, lang, v && v.dep);
  };
  const conjLabel = v => v.conj ? LV.LABELS.conj[v.conj][lang === 'ko' ? 0 : 1] : (lang === 'ko' ? '불규칙' : 'irregular');
  const verbMeaning = v => lang === 'ko' ? v.ko : v.en;

  /* seeded random */
  function rng(seed) { let h = 2166136261; for (const c of String(seed)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }; }
  function shuffle(a, seed) { const r = rng(seed), b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1));[b[i], b[j]] = [b[j], b[i]]; } return b; }
  function finiteKeys(id) {
    const p = LV.paradigm(id), out = [];
    for (const m of ['ind', 'subj']) for (const vo of ['act', 'pass']) for (const te of ['pres', 'impf', 'fut', 'perf', 'plup', 'futp']) {
      const a = p[m][vo] && p[m][vo][te]; if (Array.isArray(a)) a.forEach((f, i) => f && out.push(`${m}.${vo}.${te}.${i}`));
    }
    return out;
  }

  /* ---------------- Latin markup ---------------- */
  const latinWords = s => esc(s).replace(/([A-Za-zĀāĒēĪīŌōŪūȲȳëÆæŒœ]+)/g, '<span class="w">$1</span>');
  function wireLatin(root) {
    $$('.w', root).forEach(w => w.onclick = e => { e.stopPropagation(); say(w.textContent, true); });
    $$('.gbody .la, .qitem .qla, .box .la', root).forEach(w => w.onclick = e => { e.stopPropagation(); say(w.textContent, true); });
    $$('[data-say]', root).forEach(b => b.onclick = e => { e.stopPropagation(); say(b.dataset.say, !!b.dataset.slow); });
    $$('td.sp', root).forEach(td => td.onclick = () => say(td.textContent, true));
  }

  /* ---------------- tables ---------------- */
  const PERS = () => LV.LABELS.person.map(p => p[lang === 'ko' ? 0 : 1]);
  function paraTable(spec) {
    // spec: {v:[ids], k:'ind.act.pres', cap}
    const ids = spec.v, key = spec.k;
    const [m, , te] = key.split('.');
    let rows;
    if (m === 'imp') {
      const n = Math.max(...ids.map(id => (getPath(id, key) || []).length));
      const labs = te === 'pres' ? [PERS()[1], PERS()[4]] : n === 4 ? [PERS()[1] + ' / ' + PERS()[2], PERS()[2], PERS()[4], PERS()[5]] : [PERS()[1] + ' / ' + PERS()[2], PERS()[2], PERS()[5]];
      rows = labs.map((l, i) => [l, ...ids.map(id => (getPath(id, key) || [])[i] || '—')]);
    } else if (NF[key] || key.split('.').length < 3) {
      rows = null;
    } else rows = PERS().map((l, i) => [l, ...ids.map(id => (getPath(id, key) || [])[i] || '—')]);
    const cap = spec.cap ? tx(spec.cap) : (m === 'imp' ? `${te === 'pres' ? t('first') : t('second')} ${lang === 'ko' ? '명령법' : 'imperative'} · ${key.includes('pass') ? (lang === 'ko' ? '수동' : 'passive') : (lang === 'ko' ? '능동' : 'active')}` : LV.describe(key + '.0', lang).replace(/ ?(1인칭 단수|1st sg\.)/, ''));
    return `<div class="tablewrap"><table class="para"><caption>${esc(cap)}</caption><thead><tr><th></th>${ids.map(id => `<th class="vh">${esc(LV.BY[id].lemma)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<td>${esc(c)}</td>` : `<td class="sp">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  function nfTable(spec) {
    const ids = spec.v;
    return `<div class="tablewrap"><table class="para">${spec.cap ? `<caption>${esc(tx(spec.cap))}</caption>` : ''}<thead><tr><th></th>${ids.map(id => `<th class="vh">${esc(LV.BY[id].lemma)}</th>`).join('')}</tr></thead>
      <tbody>${spec.k.map(k => `<tr><td>${esc(describeKey(k, LV.BY[ids[0]]))}</td>${ids.map(id => `<td class="sp">${esc(getPath(id, k) || '—')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  function staticTable(tb) {
    return `<div class="tablewrap"><table class="para">${tb.cap ? `<caption>${esc(tx(tb.cap))}</caption>` : ''}
      <thead><tr>${tb.head.map(h => `<th>${esc(tx(h))}</th>`).join('')}</tr></thead>
      <tbody>${tb.rows.map(r => `<tr>${r.map((c, i) => i === 0 || tb.plain || (tb.plainCols || []).includes(i) || typeof c === 'object' ? `<td>${esc(tx(c))}</td>` : `<td class="sp">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  /* =================================================================
     HOME
     ================================================================= */
  function progressSummary() {
    const idx = window.CHAPTERS || [], res = store.get('lv_res', {});
    const done = idx.filter(c => res[c.n]);
    const avg = done.length ? Math.round(done.reduce((a, c) => a + res[c.n].best, 0) / done.length) : 0;
    return { idx, res, done, avg };
  }
  function renderHome() {
    document.title = 'VERBA LATINA — ' + t('siteSub');
    buildTopbar('');
    const { idx, res, done, avg } = progressSummary();
    const last = store.get('lv_last', null);
    const parts = [...new Set(idx.map(c => c.part.ko))];
    $('#app').innerHTML = `
    <section class="hero"><div class="wrap">
      <h1>VERBA LATINA</h1>
      <div class="sub">${t('siteSub')}</div>
      <div class="pp" data-say="amō, amāre, amāvī, amātum" style="cursor:pointer">amō · amāre · amāvī · amātum 🔊</div>
      <p>${t('heroText')}</p>
      <div class="hero-cta">
        <a class="btn btn-gold" href="chapter.html?c=${last || 1}">${last ? t('cont') + ' · ' + chName(last) : t('start')} →</a>
        <a class="btn btn-ghost" href="lab.html">⚗️ ${t('lab')}</a>
      </div>
      <div class="motto">VERBUM SAPIENTI SAT EST</div>
    </div></section>
    <div class="wrap">
      <div class="stats">
        <div class="stat"><div class="k">${t('chDone')}</div><div class="v">${done.length} / ${idx.length}</div><div class="bar"><i style="width:${100 * done.length / Math.max(1, idx.length)}%"></i></div></div>
        <div class="stat"><div class="k">${t('avg')}</div><div class="v">${avg}%</div><div class="bar"><i style="width:${avg}%"></i></div></div>
        <div class="stat"><div class="k">${lang === 'ko' ? '전체 연습문제' : 'Total exercises'}</div><div class="v">${idx.reduce((a, c) => a + c.nEx, 0)}</div><div class="bar"><i style="width:${100 * done.length / Math.max(1, idx.length)}%"></i></div></div>
      </div>
      <div class="lab-cta">
        <a href="lab.html"><h3>⚗️ ${t('lab')}</h3><p>${t('labSub')}</p></a>
        <a class="alt" href="chapter.html?c=${idx.length}"><h3>🏛️ ${t('top40')}</h3><p>${t('top40Sub')}</p></a>
      </div>
      <div class="toolbar"><input class="search" id="q" placeholder="🔍 ${t('search')}"></div>
      <div id="list"></div>
      <section class="pronbox"><h2>🔊 ${t('pronTitle')}</h2><div class="instr">${t('pronText')}</div>
        <div class="chips">${['sum, es, est, sumus, estis, sunt', 'amō, amās, amat', 'vēnī, vīdī, vīcī', 'ālea iacta est', 'carpe diem', 'cōgitō, ergō sum', 'errāre hūmānum est', 'fēstīnā lentē', 'dum spīrō, spērō', 'nōlī mē tangere', 'mēns sāna in corpore sānō', 'ōrā et labōrā', 'dīvide et imperā', 'dōnec eris fēlīx']
          .map(w => `<button class="chip" data-say="${esc(w)}">${esc(w)}</button>`).join('')}</div></section>
    </div>${footer()}`;
    const list = () => {
      const q = LV.normalize($('#q').value);
      $('#list').innerHTML = parts.map(pk => {
        const cs = idx.filter(c => c.part.ko === pk).filter(c => !q || LV.normalize([c.n, c.title.ko, c.title.en, ...(c.topics || []).map(x => x.ko + ' ' + x.en)].join(' ')).includes(q) || [c.title.ko, ...(c.topics || []).map(x => x.ko)].join(' ').includes($('#q').value.trim()));
        if (!cs.length) return '';
        return `<div class="part"><h2>${esc(tx(cs[0].part))}</h2></div><div class="grid">${cs.map(c => {
          const r = res[c.n];
          return `<a class="ucard" href="chapter.html?c=${c.n}"><span class="roman">${ROMAN(c.n)}</span>
            <span class="num">${lang === 'ko' ? 'CAPUT ' + ROMAN(c.n) + ' · 제' + c.n + '장' : 'CHAPTER ' + c.n}</span><h3>${esc(tx(c.title))}</h3>
            <div class="topics">${(c.topics || []).map(x => esc(tx(x))).join(' · ')}</div>
            <div class="meta"><span>✍️ ${c.nEx} ${t('items')}</span><div class="bar"><i style="width:${r ? r.best : 0}%"></i></div>
            ${r ? `<span class="pill ${r.best >= 80 ? 'done' : ''}">${t('best')} ${r.best}%</span>` : `<span class="pill">${t('notStarted')}</span>`}</div></a>`;
        }).join('')}</div>`;
      }).join('');
    };
    $('#q').oninput = list; list();
    wireLatin($('#app'));
  }

  /* =================================================================
     CHAPTER
     ================================================================= */
  const cNo = parseInt(new URLSearchParams(location.search).get('c') || '1', 10);
  let C = null, tab = 'lesson';
  let answers = {};          // current answers
  let graded = null;         // {res: {i: bool}, score}
  function loadChapter(cb) {
    if (C) return cb();
    const s = document.createElement('script');
    s.src = `data/ch${String(cNo).padStart(2, '0')}.js`;
    s.onload = () => { C = window.CH; prepItems(); answers = store.get('lv_ans_' + cNo, {}); const g = store.get('lv_graded_' + cNo, null); graded = g; cb(); };
    s.onerror = () => { $('#app').innerHTML = `<div class="wrap"><div class="card" style="margin-top:30px">Chapter ${cNo} not found. <a href="index.html">← ${t('home')}</a></div></div>`; };
    document.head.appendChild(s);
  }
  /* turn compact items into fully-specified questions */
  function prepItems() {
    C.items = [];
    (C.ex || []).forEach((it, i) => {
      const q = Object.assign({}, it, { i });
      if (it.t === 'gen') {
        const f = getPath(it.v, it.k);
        q.ans = Array.isArray(f) ? f.join(', ') : f;
        if (q.ans == null) console.warn('missing form', it);
      } else if (it.t === 'parse') {
        const target = getPath(it.v, it.k), tn = LV.normalize(target);
        let pool = finiteKeys(it.v).filter(k => k !== it.k && LV.normalize(getPath(it.v, k)) !== tn);
        const [m, vo, te, pi] = it.k.split('.');
        const score = k => { const [m2, v2, t2, p2] = k.split('.'); return (m2 === m) + (v2 === vo) + (t2 === te) * 1.2 + (p2 === pi) * 1.1; };
        pool = shuffle(pool, 'p' + cNo + i).sort((a, b) => score(b) - score(a)).slice(0, 8);
        const opts = [it.k, ...shuffle(pool, 'q' + cNo + i).slice(0, 3)];
        q.form = target; q.opts = shuffle(opts, 'o' + cNo + i); q.a = q.opts.indexOf(it.k);
      } else if (it.t === 'mc') {
        const order = shuffle(it.o.map((_, k) => k), 'm' + cNo + i);
        q.opts = order; q.a = order.indexOf(it.a ?? 0);
      }
      C.items.push(q);
    });
  }
  function itemCorrect(q, val) {
    if (val == null || val === '') return false;
    if (q.t === 'mc' || q.t === 'parse') return +val === q.a;
    const ans = q.t === 'gen' ? [q.ans] : q.a;
    return ans.some(a => LV.matches(val, a));
  }
  function renderChapter() {
    loadChapter(() => {
      store.set('lv_last', cNo);
      const total = (window.CHAPTERS || []).length || 24;
      document.title = `${chName(cNo)} · ${tx(C.title)} — VERBA LATINA`;
      buildTopbar(`${chName(cNo)} · ${esc(tx(C.title))}`);
      const h = location.hash.slice(1); if (['lesson', 'exercises', 'results'].includes(h)) tab = h;
      const tabs = [['lesson', '📖 ' + t('lesson'), C.sec.length], ['exercises', '✍️ ' + t('exercises'), C.items.length], ['results', '🏆 ' + t('results'), '']];
      $('#app').innerHTML = `
      <section class="uhead"><div class="wrap">
        <div class="num">CAPUT ${ROMAN(cNo)} · ${cNo} / ${total}</div>
        <h1>${esc(tx(C.title))}</h1><p>${tx(C.intro)}</p>
        <nav class="tabs">${tabs.map(([k, l, c]) => `<button data-t="${k}" class="${k === tab ? 'on' : ''}">${l}${c !== '' ? `<span class="cnt">${c}</span>` : ''}</button>`).join('')}</nav>
      </div></section>
      <div class="wrap"><div class="layout"><aside class="toc" id="toc"></aside><main id="main"></main></div>
        <div class="unav">${cNo > 1 ? `<a class="btn btn-line" href="chapter.html?c=${cNo - 1}">← ${t('prev')}</a>` : '<span></span>'}
        <a class="btn btn-line" href="index.html">🏛 ${t('home')}</a>
        ${cNo < total ? `<a class="btn btn-red" href="chapter.html?c=${cNo + 1}">${t('next')} →</a>` : '<span></span>'}</div></div>
      ${footer(`${chName(cNo)}`)}`;
      $$('.tabs button').forEach(b => b.onclick = () => setTab(b.dataset.t));
      renderTab();
    });
  }
  function setTab(k) {
    tab = k; history.replaceState(null, '', '#' + tab);
    $$('.tabs button').forEach(x => x.classList.toggle('on', x.dataset.t === k));
    renderTab(); window.scrollTo({ top: $('.uhead').offsetHeight - 10, behavior: 'smooth' });
  }
  function renderTab() {
    const main = $('#main'), toc = $('#toc');
    if (tab === 'lesson') renderLesson(main, toc);
    else if (tab === 'exercises') renderExercises(main, toc);
    else renderResults(main, toc);
    wireLatin(main);
  }
  function renderLesson(main, toc) {
    toc.innerHTML = `<div class="h">${t('lesson')}</div>` + C.sec.map((s, i) => `<a href="#s${i}">${i + 1}. ${esc(tx(s.h))}</a>`).join('') + `<a href="#" id="toEx">✍️ ${t('exercises')} (${C.items.length})</a>`;
    main.innerHTML = C.sec.map((s, i) => {
      let html = `<section class="card" id="s${i}"><h2><span class="n">${ROMAN(i + 1)}</span>${esc(tx(s.h))}</h2><div class="gbody">${tx(s.b)}</div>`;
      if (s.para) html += `<div class="paragrid${s.para.some(p => p.v.length > 3) ? ' wide' : ''}">${s.para.map(paraTable).join('')}</div>`;
      if (s.nf) html += nfTable(s.nf);
      if (s.tables) html += s.tables.map(staticTable).join('');
      if (s.b2) html += `<div class="gbody">${tx(s.b2)}</div>`;
      if (s.verbs) html += verbCards(s.verbs);
      if (s.exs && s.exs.length) html += `<h3>${t('examples')}</h3><ul class="examples">${s.exs.map(e => `<li><button class="spk" data-say="${esc(e.la)}" title="${t('listen')}">🔊</button><div><div class="ltxt">${latinWords(e.la)}</div><div class="tr">${esc(tx(e))}</div></div></li>`).join('')}</ul>`;
      return html + '</section>';
    }).join('') + `<div style="text-align:center;margin:10px 0 30px"><button class="btn btn-red" id="goEx">✍️ ${t('goEx')} →</button></div>`;
    $('#goEx').onclick = () => setTab('exercises');
    $('#toEx').onclick = e => { e.preventDefault(); setTab('exercises'); };
  }
  function verbCards(ids) {
    const list = ids === 'top' ? LV.VERBS.filter(v => /top/.test(v.grp)) : ids.map(id => LV.BY[id]);
    return `<div class="vlist" style="margin-top:12px">${list.map(v => `<div class="vitem"><button class="spk" data-say="${esc(LV.principalParts(v))}">🔊</button><div><div class="lw"><a href="lab.html?v=${v.id}">${esc(LV.principalParts(v))}</a></div><div class="m">${esc(verbMeaning(v))} · ${esc(conjLabel(v))}</div></div></div>`).join('')}</div>`;
  }

  /* ---------------- exercises ---------------- */
  const MACRONS = ['ā', 'ē', 'ī', 'ō', 'ū'];
  function qHTML(q, n) {
    const val = answers[q.i];
    const g = graded ? graded.res[q.i] : undefined;
    const cls = g === true ? 'ok' : g === false ? 'no' : '';
    const v = q.v ? LV.BY[q.v] : null;
    let head = '', body = '', sol = '';
    if (q.t === 'gen') {
      head = `<div class="qq">${t('writeForm')} <span class="typebadge">${t('gen')}</span></div>
        <div class="qla" data-say="${esc(v.lemma)}">${esc(LV.principalParts(v))} <small style="font-family:var(--sans);font-style:normal;font-size:13px;color:var(--muted)">(${esc(verbMeaning(v))})</small></div>
        <div style="margin-top:4px;font-weight:600;color:var(--ink2)">→ ${esc(describeKey(q.k, v))}</div>`;
      body = inputHTML(q, val);
      sol = `${t('answer')}: <span class="la">${esc(q.ans)}</span> <button class="spk" data-say="${esc(q.ans)}">🔊</button>`;
    } else if (q.t === 'parse') {
      head = `<div class="qq">${t('whichForm')} <span class="typebadge">${t('parse')}</span> <small style="color:var(--muted);font-weight:400">(${esc(v.lemma)} · ${esc(verbMeaning(v))})</small></div>
        <div class="qla" data-say="${esc(q.form)}">${esc(q.form)} 🔊</div>`;
      body = optsHTML(q, val, q.opts.map(k => describeKey(k, v)));
      sol = `${t('answer')}: ${esc(describeKey(q.k, v))}`;
    } else if (q.t === 'mc') {
      head = `<div class="qq">${tx(q.q)} <span class="typebadge">${t('mc')}</span></div>${q.la ? `<div class="qla">${esc(q.la)}</div>` : ''}`;
      body = optsHTML(q, val, q.opts.map(k => tx(q.o[k])));
      sol = `${t('answer')}: ${esc(tx(q.o[q.opts[q.a]]))}`;
    } else { // fill
      head = `<div class="qq">${tx(q.q)} <span class="typebadge">${t('fill')}</span></div>${q.la ? `<div class="qla">${esc(q.la)}</div>` : ''}`;
      body = inputHTML(q, val);
      sol = `${t('answer')}: <span class="la">${esc(q.a[0])}</span>${q.a.length > 1 ? ` <small>(${esc(q.a.slice(1).join(' / '))})</small>` : ''} <button class="spk" data-say="${esc(q.a[0])}">🔊</button>`;
    }
    const expl = q.x ? `<div style="margin-top:4px">💡 ${tx(q.x)}</div>` : '';
    return `<div class="qitem ${cls}" id="q${q.i}"><div class="qh"><span class="qn">${n}</span><div style="flex:1">${head}</div></div>${body}
      ${graded ? `<div class="sol">${g ? '✓ ' + t('correct') : '✗ ' + t('wrong')} · ${sol}${expl}</div>` : ''}</div>`;
  }
  function optsHTML(q, val, labels) {
    return `<div class="opts">${labels.map((l, k) => {
      let c = '';
      if (graded) { if (k === q.a) c = 'right'; else if (+val === k && val !== undefined) c = 'wrong'; }
      else if (val !== undefined && +val === k) c = 'sel';
      return `<button class="opt ${c}" data-q="${q.i}" data-k="${k}" ${graded ? 'disabled' : ''}><span class="l">${'ABCDEF'[k]}</span><span>${esc(l)}</span></button>`;
    }).join('')}</div>`;
  }
  function inputHTML(q, val) {
    return `<input class="fill-in" data-q="${q.i}" placeholder="${t('typeAns')}" value="${esc(val || '')}" ${graded ? 'disabled' : ''} autocomplete="off" autocapitalize="off" spellcheck="false">
      ${graded ? '' : `<div class="macron-bar">${MACRONS.map(m => `<button data-m="${m}" data-for="${q.i}" tabindex="-1">${m}</button>`).join('')}</div>`}`;
  }
  function renderExercises(main, toc) {
    toc.innerHTML = `<div class="h">${t('exercises')}</div>` + C.items.map((q, n) => {
      const g = graded ? graded.res[q.i] : undefined;
      return `<a href="#q${q.i}">${g === true ? '✅' : g === false ? '❌' : answers[q.i] !== undefined && answers[q.i] !== '' ? '●' : '○'} ${n + 1}. ${q.t === 'gen' ? t('gen') : q.t === 'parse' ? t('parse') : q.t === 'mc' ? t('mc') : t('fill')}</a>`;
    }).join('');
    const res = store.get('lv_res', {})[cNo];
    main.innerHTML = `${graded ? `<div class="result-banner"><div>${t('score')}</div><div class="s">${graded.score} / ${C.items.length}</div><div>${Math.round(100 * graded.score / C.items.length)}% ${res ? '· ' + t('best') + ' ' + res.best + '%' : ''}</div></div>` : ''}
      <section class="card"><div class="ex-head"><h2>✍️ ${t('exercises')} <span class="pill">${C.items.length} ${t('items')}</span></h2></div>
      <p class="instr">${lang === 'ko' ? '모든 문항을 풀고 아래의 「채점하기」를 누르면 점수와 정답·해설을 확인할 수 있어요. 라틴어 입력 시 장음 부호(ā)는 생략해도 정답으로 인정돼요.' : 'Answer every question, then press “Check answers” below to see your score, the answers and explanations. Macrons are optional when typing.'}</p>
      ${C.items.map((q, n) => qHTML(q, n + 1)).join('')}</section>
      <div class="scorebar"><div class="in"><span>${graded ? `<span class="big">${graded.score} / ${C.items.length}</span>` : `<b id="answered">${Object.values(answers).filter(x => x !== '' && x != null).length}</b> / ${C.items.length} ${lang === 'ko' ? '문항 답함' : 'answered'}`}</span>
        <span>${graded ? `<button class="btn btn-red" id="retry">↺ ${t('retry')}</button>` : `<button class="btn btn-red" id="gradeBtn">✓ ${t('grade')}</button>`}</span></div></div>`;
    $$('.opt[data-q]', main).forEach(b => b.onclick = () => { answers[b.dataset.q] = +b.dataset.k; saveAns(); $$(`.opt[data-q="${b.dataset.q}"]`, main).forEach(x => x.classList.toggle('sel', x === b)); updCount(); });
    $$('input.fill-in', main).forEach(inp => {
      inp.oninput = () => { answers[inp.dataset.q] = inp.value; saveAns(); updCount(); };
      inp.onkeydown = e => { if (e.key === 'Enter') { const all = $$('input.fill-in', main), k = all.indexOf(inp); if (all[k + 1]) all[k + 1].focus(); } };
    });
    $$('.macron-bar button', main).forEach(b => { b.onmousedown = e => e.preventDefault(); b.onclick = () => { const inp = $(`input.fill-in[data-q="${b.dataset.for}"]`, main); const s = inp.selectionStart ?? inp.value.length; inp.value = inp.value.slice(0, s) + b.dataset.m + inp.value.slice(inp.selectionEnd ?? s); inp.focus(); inp.setSelectionRange(s + 1, s + 1); inp.oninput(); }; });
    const gb = $('#gradeBtn'); if (gb) gb.onclick = grade;
    const rb = $('#retry'); if (rb) rb.onclick = () => { graded = null; answers = {}; store.set('lv_graded_' + cNo, null); saveAns(); renderTab(); window.scrollTo({ top: $('.uhead').offsetHeight - 10 }); };
  }
  const saveAns = () => store.set('lv_ans_' + cNo, answers);
  const updCount = () => { const el = $('#answered'); if (el) el.textContent = Object.values(answers).filter(x => x !== '' && x != null).length; };
  function grade() {
    const un = C.items.filter(q => answers[q.i] === undefined || answers[q.i] === '').length;
    if (un && !confirm(t('unanswered'))) return;
    const res = {}; let score = 0;
    C.items.forEach(q => { res[q.i] = itemCorrect(q, answers[q.i]); if (res[q.i]) score++; });
    graded = { res, score, at: Date.now() };
    store.set('lv_graded_' + cNo, graded);
    const pct = Math.round(100 * score / C.items.length);
    const all = store.get('lv_res', {}); const prev = all[cNo];
    all[cNo] = { best: Math.max(pct, prev ? prev.best : 0), last: pct, tries: (prev ? prev.tries : 0) + 1, at: Date.now() };
    store.set('lv_res', all);
    toast(`${t('graded')} ${score} / ${C.items.length} (${pct}%)`);
    renderTab(); window.scrollTo({ top: $('.uhead').offsetHeight - 10, behavior: 'smooth' });
  }
  function renderResults(main, toc) {
    toc.innerHTML = '';
    const r = store.get('lv_res', {})[cNo];
    if (!graded && !r) { main.innerHTML = `<section class="card"><p>${t('noResult')}</p><button class="btn btn-red" id="ge">✍️ ${t('goEx')}</button></section>`; $('#ge').onclick = () => setTab('exercises'); return; }
    const types = {};
    C.items.forEach(q => { const k = q.t; types[k] = types[k] || { n: 0, ok: 0 }; types[k].n++; if (graded && graded.res[q.i]) types[k].ok++; });
    const pct = graded ? Math.round(100 * graded.score / C.items.length) : r.last;
    main.innerHTML = `<section class="card"><h2>🏆 ${t('resultsTitle')}</h2>
      <div class="ring" style="--p:${pct}"><div>${pct}%</div></div>
      <table class="rtable"><tbody>
        ${graded ? Object.entries(types).map(([k, s]) => `<tr><td>${t(k)}</td><td class="num">${s.ok} / ${s.n}</td></tr>`).join('') : ''}
        <tr><td><b>${t('score')}</b></td><td class="num"><b>${graded ? graded.score + ' / ' + C.items.length : r.last + '%'}</b></td></tr>
        ${r ? `<tr><td>${t('best')}</td><td class="num">${r.best}%</td></tr><tr><td>${lang === 'ko' ? '시도 횟수' : 'Attempts'}</td><td class="num">${r.tries}</td></tr>` : ''}
      </tbody></table>
      <div class="wrow" style="margin-top:14px"><button class="btn btn-red" id="ge">✍️ ${t('exercises')}</button><button class="btn btn-line" onclick="window.print()">🖨 Print</button></div></section>`;
    $('#ge').onclick = () => setTab('exercises');
  }

  /* =================================================================
     VERB LAB
     ================================================================= */
  let labV = new URLSearchParams(location.search).get('v') || 'amo', labMode = 'tables', drill = null;
  function renderLab() {
    document.title = `${t('lab')} — VERBA LATINA`;
    buildTopbar(t('lab'));
    if (!LV.BY[labV]) labV = 'amo';
    const groups = [['model', t('grpModel')], ['top', t('grpTop')], ['dep', t('grpDep')], ['irr', t('grpIrr')]];
    $('#app').innerHTML = `<div class="wrap"><div class="lab-top">
      <aside class="vlist2"><input class="search" id="vq" placeholder="🔍 amō, take, 보다…" style="width:100%;margin-bottom:6px">
        <div id="vl">${groups.map(([g, l]) => `<div class="g">${l}</div>` + LV.VERBS.filter(v => v.grp.split(' ')[0] === g || (g === 'top' && v.id === 'capio')).map(v => `<a href="#" data-v="${v.id}" class="${v.id === labV ? 'on' : ''}" data-s="${esc(LV.normalize(v.lemma + ' ' + v.en) + ' ' + v.ko)}"><b>${esc(v.lemma)}</b><span>${esc(verbMeaning(v))}</span></a>`).join('')).join('')}</div>
      </aside><main id="labMain"></main></div></div>${footer()}`;
    $$('#vl a').forEach(a => a.onclick = e => { e.preventDefault(); labV = a.dataset.v; drill = null; history.replaceState(null, '', '?v=' + labV); $$('#vl a').forEach(x => x.classList.toggle('on', x === a)); renderLabMain(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    $('#vq').oninput = e => { const q = e.target.value.trim(), nq = LV.normalize(q); $$('#vl a').forEach(a => a.style.display = !q || a.dataset.s.includes(nq) || a.dataset.s.includes(q) ? '' : 'none'); };
    renderLabMain();
  }
  function tenseBlock(id, m, vo, title) {
    const p = LV.paradigm(id), o = p[m][vo] || {};
    const tens = ['pres', 'impf', 'fut', 'perf', 'plup', 'futp'].filter(k => o[k]);
    if (!tens.length) return '';
    return `<div class="tblock"><h4>${title}</h4><div class="tablewrap"><table class="ptable"><thead><tr><th></th>${tens.map(k => `<th>${esc(LV.LABELS.tense[k][lang === 'ko' ? 0 : 1])}</th>`).join('')}</tr></thead><tbody>
      ${PERS().map((pl, i) => `<tr><td class="p">${pl}</td>${tens.map(k => o[k][i] ? `<td>${esc(o[k][i])}</td>` : '<td class="na">—</td>').join('')}</tr>`).join('')}</tbody></table></div></div>`;
  }
  function renderLabMain() {
    const v = LV.BY[labV], p = LV.paradigm(labV), main = $('#labMain');
    const notes = [v.dep ? t('depNote') : '', v.noPass ? t('noPassNote') : '', /irr/.test(v.grp) ? t('irrNote') : ''].filter(Boolean);
    let html = `<section class="card"><div class="vhead"><div><div class="num" style="font-family:var(--cap);color:var(--gold);letter-spacing:.12em;font-size:13px">${esc(conjLabel(v))}</div>
      <div class="pp">${esc(LV.principalParts(v))} <button class="spk" data-say="${esc(LV.principalParts(v))}">🔊</button></div>
      <div class="meta">${t('meaning')}: <b>${esc(verbMeaning(v))}</b>${notes.length ? ' · ' + notes.map(esc).join(' · ') : ''}</div></div></div>
      <div class="modes"><button class="mini ${labMode === 'tables' ? 'on' : ''}" data-m="tables">📋 ${t('tables')}</button><button class="mini ${labMode === 'drill' ? 'on' : ''}" data-m="drill">🎯 ${t('drill')}</button><button class="mini" data-m="top">🎲 ${t('allTop')}</button></div></section>`;
    if (labMode === 'tables') {
      const vo1 = v.dep ? 'pass' : 'act';
      html += `<section class="card">
        ${tenseBlock(labV, 'ind', vo1, v.dep ? (lang === 'ko' ? '직설법 (이태동사)' : 'Indicative (deponent)') : t('indAct'))}
        ${v.dep ? '' : tenseBlock(labV, 'ind', 'pass', t('indPass'))}
        ${tenseBlock(labV, 'subj', vo1, v.dep ? (lang === 'ko' ? '접속법 (이태동사)' : 'Subjunctive (deponent)') : t('subjAct'))}
        ${v.dep ? '' : tenseBlock(labV, 'subj', 'pass', t('subjPass'))}
        ${impBlock(labV)}
        ${nfBlock(labV)}</section>`;
    } else {
      if (!drill || drill.v !== (labMode === 'top' ? '*' : labV)) newDrill(labMode === 'top' ? '*' : labV);
      html += drillHTML();
    }
    main.innerHTML = html;
    $$('.ptable td:not(.p):not(.na)', main).forEach(td => td.onclick = () => say(td.textContent, true));
    $$('.modes .mini', main).forEach(b => b.onclick = () => { labMode = b.dataset.m === 'top' ? 'top' : b.dataset.m; drill = null; renderLabMain(); });
    wireLatin(main); wireDrill(main);
  }
  function impBlock(id) {
    const p = LV.paradigm(id), rows = [];
    for (const vo of ['act', 'pass']) for (const te of ['pres', 'fut']) {
      const a = p.imp[vo] && p.imp[vo][te]; if (!a) continue;
      const labs = te === 'pres' ? [PERS()[1], PERS()[4]] : a.length === 4 ? [PERS()[1], PERS()[2], PERS()[4], PERS()[5]] : [PERS()[1], PERS()[2], PERS()[5]];
      rows.push(`<tr><td class="p">${te === 'pres' ? t('first') : t('second')}${LV.BY[id].dep ? '' : ' · ' + (vo === 'act' ? (lang === 'ko' ? '능동' : 'act.') : (lang === 'ko' ? '수동' : 'pass.'))}</td>${a.map((f, i) => `<td title="${esc(labs[i])}">${esc(f)}<br><small style="font-family:var(--sans);font-size:11px;color:var(--muted)">${esc(labs[i])}</small></td>`).join('')}</tr>`);
    }
    if (!rows.length) return '';
    return `<div class="tblock"><h4>${t('imper')}</h4><div class="tablewrap"><table class="ptable"><tbody>${rows.join('')}</tbody></table></div></div>`;
  }
  function nfBlock(id) {
    const keys = Object.keys(NF).filter(k => getPath(id, k));
    return `<div class="tblock"><h4>${t('nonfinite')}</h4><div class="tablewrap"><table class="ptable"><tbody>${keys.map(k => `<tr><td class="p" style="width:auto">${esc(describeKey(k, LV.BY[id]))}</td><td>${esc(getPath(id, k))}</td></tr>`).join('')}</tbody></table></div></div>`;
  }
  function newDrill(which) {
    const seed = Date.now() + Math.random();
    const r = rng(seed), qs = [];
    const pool = which === '*' ? LV.VERBS.filter(v => /top/.test(v.grp)).map(v => v.id) : [which];
    for (let n = 0; n < 10; n++) {
      const id = pool[Math.floor(r() * pool.length)], keys = finiteKeys(id).concat(Object.keys(NF).filter(k => getPath(id, k) && !/supine/.test(k)));
      const k = keys[Math.floor(r() * keys.length)];
      qs.push({ id, k, ans: getPath(id, k), val: '', ok: null });
    }
    drill = { v: which, qs, done: false };
  }
  function drillHTML() {
    const d = drill, sc = d.qs.filter(q => q.ok).length;
    return `<section class="card drill-card">${d.done ? `<div class="result-banner"><div>${t('score')}</div><div class="s">${sc} / 10</div></div>` : ''}
      <p class="instr">${lang === 'ko' ? '빈칸에 알맞은 형태를 쓰고 「채점하기」를 누르세요. (장음 부호는 생략 가능, 분사의 성·수는 남성형으로)' : 'Write each form, then press “Check answers”. (Macrons optional; use masculine for participles.)'}</p>
      ${d.qs.map((q, i) => { const v = LV.BY[q.id]; return `<div class="qitem ${q.ok === true ? 'ok' : q.ok === false ? 'no' : ''}"><div class="qh"><span class="qn">${i + 1}</span><div style="flex:1">
        <div class="qla" data-say="${esc(v.lemma)}">${esc(v.lemma)} <small style="font-family:var(--sans);font-style:normal;font-size:13px;color:var(--muted)">(${esc(verbMeaning(v))})</small></div>
        <div style="font-weight:600;color:var(--ink2)">→ ${esc(describeKey(q.k, v))}</div></div></div>
        <input class="fill-in dr" data-i="${i}" value="${esc(q.val)}" placeholder="${t('typeAns')}" ${d.done ? 'disabled' : ''} autocomplete="off" spellcheck="false">
        ${d.done ? `<div class="sol">${q.ok ? '✓' : '✗'} ${t('answer')}: <span class="la">${esc(q.ans)}</span> <button class="spk" data-say="${esc(q.ans)}">🔊</button></div>` : `<div class="macron-bar">${MACRONS.map(m => `<button data-m="${m}" data-for="${i}" tabindex="-1">${m}</button>`).join('')}</div>`}</div>`; }).join('')}
      <div class="wrow" style="justify-content:center;margin-top:14px">${d.done ? `<button class="btn btn-red" id="dnew">🎲 ${t('newDrill')}</button>` : `<button class="btn btn-red" id="dgrade">✓ ${t('grade')}</button>`}</div></section>`;
  }
  function wireDrill(main) {
    if (!drill) return;
    $$('input.dr', main).forEach(inp => { inp.oninput = () => { drill.qs[+inp.dataset.i].val = inp.value; }; inp.onkeydown = e => { if (e.key === 'Enter') { const all = $$('input.dr', main), k = all.indexOf(inp); all[k + 1] ? all[k + 1].focus() : $('#dgrade') && $('#dgrade').click(); } }; });
    $$('.macron-bar button', main).forEach(b => { b.onmousedown = e => e.preventDefault(); b.onclick = () => { const inp = $(`input.dr[data-i="${b.dataset.for}"]`, main); const s = inp.selectionStart ?? inp.value.length; inp.value = inp.value.slice(0, s) + b.dataset.m + inp.value.slice(inp.selectionEnd ?? s); inp.setSelectionRange(s + 1, s + 1); inp.focus(); inp.oninput(); }; });
    const g = $('#dgrade', main); if (g) g.onclick = () => { drill.qs.forEach(q => q.ok = LV.matches(q.val, q.ans)); drill.done = true; renderLabMain(); toast(`${drill.qs.filter(q => q.ok).length} / 10`); };
    const n = $('#dnew', main); if (n) n.onclick = () => { newDrill(drill.v); renderLabMain(); };
  }

  /* ---------------- router ---------------- */
  function render() {
    document.documentElement.lang = lang;
    const pg = document.body.dataset.page;
    if (pg === 'chapter') renderChapter(); else if (pg === 'lab') renderLab(); else renderHome();
  }
  window.VERBA = { render };
  render();
})();
