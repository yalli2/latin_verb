/* VERBA — Latin conjugation engine
   Generates full paradigms (with macrons) for regular, deponent and irregular verbs.
   Person order everywhere: 1sg, 2sg, 3sg, 1pl, 2pl, 3pl. */
(function (root) {
  const LONG = { 'ā': 'a', 'ē': 'e', 'ī': 'i', 'ō': 'o', 'ū': 'u' };
  const sh = s => (LONG[s.slice(-1)] ? s.slice(0, -1) + LONG[s.slice(-1)] : s);
  const E = (b, ends) => ends.map(e => b + e);
  const SUM = {
    pres: ['sum', 'es', 'est', 'sumus', 'estis', 'sunt'],
    impf: ['eram', 'erās', 'erat', 'erāmus', 'erātis', 'erant'],
    fut: ['erō', 'eris', 'erit', 'erimus', 'eritis', 'erunt'],
    spres: ['sim', 'sīs', 'sit', 'sīmus', 'sītis', 'sint'],
    simpf: ['essem', 'essēs', 'esset', 'essēmus', 'essētis', 'essent']
  };
  const PERF_END = {
    perf: ['ī', 'istī', 'it', 'imus', 'istis', 'ērunt'],
    plup: ['eram', 'erās', 'erat', 'erāmus', 'erātis', 'erant'],
    futp: ['erō', 'eris', 'erit', 'erimus', 'eritis', 'erint'],
    sperf: ['erim', 'erīs', 'erit', 'erīmus', 'erītis', 'erint'],
    splup: ['issem', 'issēs', 'isset', 'issēmus', 'issētis', 'issent']
  };
  const compound = (ppp, aux) => {
    if (!ppp) return null;
    const pl = ppp.slice(0, -2) + 'ī';
    return aux.map((a, i) => (i < 3 ? ppp : pl) + ' ' + a);
  };

  /* present stem S */
  function stemOf(v) {
    if (v.stem) return v.stem;
    const c = v.conj;
    if (v.dep) {
      if (c === 'M') return v.lemma.slice(0, -2);              // patior → pati
      if (c === '3') return v.inf.slice(0, -1);                // sequī → sequ
      return v.inf.slice(0, -2);                               // hortārī → hortā
    }
    if (c === 'M') return v.lemma.slice(0, -1);                // capiō → capi
    if (c === '3') return v.inf.slice(0, -3);                  // regere → reg
    return v.inf.slice(0, -2);                                 // amāre → amā
  }

  function presentSystem(v) {
    const c = v.conj, S = stemOf(v), s = sh(S);
    const L = v.lemma.endsWith('or') ? v.lemma : v.lemma;      // 1sg as listed
    const act1 = v.dep ? v.lemma.slice(0, -2) + 'ō' : v.lemma; // notional active 1sg
    const pass1 = act1.slice(0, -1) + 'or';
    const actInf = v.dep ? (c === '3' ? S + 'ere' : c === 'M' ? S.slice(0, -1) + 'ere' : S + 're') : v.inf;
    const I0 = actInf.slice(0, -1);
    const P = {};
    // present indicative
    if (c === '1' || c === '2') {
      P.presA = [act1, S + 's', s + 't', S + 'mus', S + 'tis', s + 'nt'];
      P.presP = [pass1, S + 'ris', S + 'tur', S + 'mur', S + 'minī', s + 'ntur'];
    } else if (c === '4') {
      P.presA = [act1, S + 's', s + 't', S + 'mus', S + 'tis', s + 'unt'];
      P.presP = [pass1, S + 'ris', S + 'tur', S + 'mur', S + 'minī', s + 'untur'];
    } else if (c === '3') {
      P.presA = [act1, S + 'is', S + 'it', S + 'imus', S + 'itis', S + 'unt'];
      P.presP = [pass1, S + 'eris', S + 'itur', S + 'imur', S + 'iminī', S + 'untur'];
    } else { // mixed
      P.presA = [act1, S + 's', S + 't', S + 'mus', S + 'tis', S + 'unt'];
      P.presP = [pass1, S.slice(0, -1) + 'eris', S + 'tur', S + 'mur', S + 'minī', S + 'untur'];
    }
    // imperfect
    const ib = (c === '1' || c === '2') ? S + 'b' : (c === '4' ? s : S) + 'ēb';
    P.impfA = E(ib, ['am', 'ās', 'at', 'āmus', 'ātis', 'ant']);
    P.impfP = E(ib, ['ar', 'āris', 'ātur', 'āmur', 'āminī', 'antur']);
    // future
    if (c === '1' || c === '2') {
      P.futA = E(S + 'b', ['ō', 'is', 'it', 'imus', 'itis', 'unt']);
      P.futP = E(S + 'b', ['or', 'eris', 'itur', 'imur', 'iminī', 'untur']);
    } else {
      const fb = c === '4' ? s : S;
      P.futA = E(fb, ['am', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
      P.futP = E(fb, ['ar', 'ēris', 'ētur', 'ēmur', 'ēminī', 'entur']);
    }
    // present subjunctive
    if (c === '1') {
      const b = S.slice(0, -1);
      P.spresA = E(b, ['em', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
      P.spresP = E(b, ['er', 'ēris', 'ētur', 'ēmur', 'ēminī', 'entur']);
    } else {
      const b = (c === '2' || c === '4') ? s : S;
      P.spresA = E(b, ['am', 'ās', 'at', 'āmus', 'ātis', 'ant']);
      P.spresP = E(b, ['ar', 'āris', 'ātur', 'āmur', 'āminī', 'antur']);
    }
    // imperfect subjunctive (built on the present active infinitive)
    P.simpfA = E(I0, ['em', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
    P.simpfP = E(I0, ['er', 'ēris', 'ētur', 'ēmur', 'ēminī', 'entur']);
    // imperatives
    const i2 = (c === '3') ? S + 'e' : (c === 'M') ? S.slice(0, -1) + 'e' : S;
    const tv = (c === '3') ? S + 'i' : S;                       // stem before -te / -tō
    const fut3pl = (c === '1' || c === '2') ? s + 'ntō' : S === s && c !== '4' ? S + 'untō' : s + 'untō';
    P.impA = [i2, tv + 'te'];
    P.impFA = [tv + 'tō', tv + 'tō', tv + 'tōte', fut3pl];
    P.impP = [(c === '3') ? S + 'ere' : (c === 'M') ? S.slice(0, -1) + 'ere' : S + 're', P.presP[4]];
    P.impFP = [tv + 'tor', tv + 'tor', fut3pl.slice(0, -1) + 'or'];
    // infinitives, participles, gerund
    P.infA = actInf;
    P.infP = (c === '3') ? S + 'ī' : (c === 'M') ? S.slice(0, -1) + 'ī' : S + 'rī';
    P.partPres = (c === '1' || c === '2') ? S + 'ns' : ((c === '4' ? s : S) + 'ēns');
    P.gerund = ((c === '1' || c === '2') ? s + 'nd' : (c === '4' ? s : S) + 'end') + 'um';
    return P;
  }

  /* Build a paradigm object */
  function build(v) {
    const p = {
      ind: { act: {}, pass: {} }, subj: { act: {}, pass: {} },
      imp: { act: {}, pass: {} }, inf: { act: {}, pass: {} }, part: {}, gerund: null, supine: null
    };
    const ppp = v.sup ? v.sup.slice(0, -2) + 'us' : (v.ppp || null);
    const fap = v.fap || (v.sup ? v.sup.slice(0, -2) + 'ūrus' : null);
    if (v.conj) {
      const P = presentSystem(v);
      const passPres = { pres: P.presP, impf: P.impfP, fut: P.futP };
      if (v.dep) {
        Object.assign(p.ind.pass, passPres);
        p.subj.pass.pres = P.spresP; p.subj.pass.impf = P.simpfP;
        p.imp.pass.pres = P.impP; p.imp.pass.fut = P.impFP;
        p.inf.pass.pres = P.infP;
      } else {
        p.ind.act = { pres: P.presA, impf: P.impfA, fut: P.futA };
        p.subj.act = { pres: P.spresA, impf: P.simpfA };
        p.imp.act = { pres: P.impA, fut: P.impFA };
        p.inf.act.pres = P.infA;
        if (!v.noPass) {
          Object.assign(p.ind.pass, passPres);
          p.subj.pass.pres = P.spresP; p.subj.pass.impf = P.simpfP;
          p.imp.pass.pres = P.impP; p.imp.pass.fut = P.impFP;
          p.inf.pass.pres = P.infP;
        }
      }
      p.part.pres = P.partPres;
      p.gerund = P.gerund;
      if (!v.noPass || v.dep) p.part.gerundive = P.gerund.slice(0, -2) + 'us';
    }
    // perfect system (active)
    if (v.perf && !v.dep) {
      const PS = v.perf.slice(0, -1);
      p.ind.act.perf = E(PS, PERF_END.perf);
      p.ind.act.plup = E(PS, PERF_END.plup);
      p.ind.act.futp = E(PS, PERF_END.futp);
      p.subj.act.perf = E(PS, PERF_END.sperf);
      p.subj.act.plup = E(PS, PERF_END.splup);
      p.inf.act.perf = PS + 'isse';
    }
    // perfect system (passive / deponent)
    const pv = v.dep ? 'pass' : 'pass';
    if (ppp && (!v.noPass || v.dep)) {
      p.ind[pv].perf = compound(ppp, SUM.pres);
      p.ind[pv].plup = compound(ppp, SUM.impf);
      p.ind[pv].futp = compound(ppp, SUM.fut);
      p.subj[pv].perf = compound(ppp, SUM.spres);
      p.subj[pv].plup = compound(ppp, SUM.simpf);
      p.inf[pv].perf = ppp + ' esse';
      p.part.perf = ppp;
    }
    if (fap) {
      p.part.fut = fap;
      (v.dep ? p.inf.pass : p.inf.act).fut = fap + ' esse';
    }
    if (v.sup) {
      p.supine = v.sup + ' / ' + v.sup.slice(0, -1).replace(/u$/, 'ū');
      if (!v.noPass && !v.dep) p.inf.pass.fut = v.sup + ' īrī';
    }
    if (v.fix) v.fix(p, v);
    return p;
  }

  /* ---------------- irregular helpers ---------------- */
  const setPres = (p, voice, o) => { Object.assign(p.ind[voice], o.ind || {}); Object.assign(p.subj[voice], o.subj || {}); };
  function feroFix(pre) {
    return p => {
      p.ind.act.pres = [pre + 'ferō', pre + 'fers', pre + 'fert', pre + 'ferimus', pre + 'fertis', pre + 'ferunt'];
      if (p.ind.pass.pres) p.ind.pass.pres = [pre + 'feror', pre + 'ferris', pre + 'fertur', pre + 'ferimur', pre + 'feriminī', pre + 'feruntur'];
      if (p.inf.pass.pres) p.inf.pass.pres = pre + 'ferrī';
      p.imp.act.pres = [pre + 'fer', pre + 'ferte'];
      p.imp.act.fut = [pre + 'fertō', pre + 'fertō', pre + 'fertōte', pre + 'feruntō'];
      if (p.imp.pass.pres) { p.imp.pass.pres = [pre + 'ferre', pre + 'feriminī']; p.imp.pass.fut = [pre + 'fertor', pre + 'fertor', pre + 'feruntor']; }
    };
  }
  function eoForms(pre, withPass) {
    return p => {
      const P = s => pre + s;
      p.ind.act = {
        pres: ['eō', 'īs', 'it', 'īmus', 'ītis', 'eunt'].map(P),
        impf: ['ībam', 'ībās', 'ībat', 'ībāmus', 'ībātis', 'ībant'].map(P),
        fut: ['ībō', 'ībis', 'ībit', 'ībimus', 'ībitis', 'ībunt'].map(P),
        perf: ['iī', 'īstī', 'iit', 'iimus', 'īstis', 'iērunt'].map(P),
        plup: ['ieram', 'ierās', 'ierat', 'ierāmus', 'ierātis', 'ierant'].map(P),
        futp: ['ierō', 'ieris', 'ierit', 'ierimus', 'ieritis', 'ierint'].map(P)
      };
      p.subj.act = {
        pres: ['eam', 'eās', 'eat', 'eāmus', 'eātis', 'eant'].map(P),
        impf: ['īrem', 'īrēs', 'īret', 'īrēmus', 'īrētis', 'īrent'].map(P),
        perf: ['ierim', 'ierīs', 'ierit', 'ierīmus', 'ierītis', 'ierint'].map(P),
        plup: ['īssem', 'īssēs', 'īsset', 'īssēmus', 'īssētis', 'īssent'].map(P)
      };
      p.imp.act = { pres: ['ī', 'īte'].map(P), fut: ['ītō', 'ītō', 'ītōte', 'euntō'].map(P) };
      p.inf.act = { pres: P('īre'), perf: P('īsse'), fut: P('itūrus esse') };
      p.part = { pres: P('iēns'), fut: P('itūrus') };
      p.gerund = P('eundum'); p.supine = P('itum / ') + P('itū');
      if (withPass) {
        p.ind.pass.pres = ['eor', 'īris', 'ītur', 'īmur', 'īminī', 'euntur'].map(P);
        p.ind.pass.impf = ['ībar', 'ībāris', 'ībātur', 'ībāmur', 'ībāminī', 'ībantur'].map(P);
        p.ind.pass.fut = ['ībor', 'īberis', 'ībitur', 'ībimur', 'ībiminī', 'ībuntur'].map(P);
        p.subj.pass.pres = ['ear', 'eāris', 'eātur', 'eāmur', 'eāminī', 'eantur'].map(P);
        p.subj.pass.impf = ['īrer', 'īrēris', 'īrētur', 'īrēmur', 'īrēminī', 'īrentur'].map(P);
        p.inf.pass.pres = P('īrī'); p.inf.pass.fut = P('itum īrī');
        p.part.perf = P('itus'); p.part.gerundive = P('eundus');
        p.imp.pass = {};
      } else { p.ind.pass = {}; p.subj.pass = {}; p.inf.pass = {}; p.imp.pass = {}; }
    };
  }

  /* ---------------- verb list ---------------- */
  // c = conjugation ('1','2','3','4','M'); t: tags
  const V = [
    // five model verbs
    { id: 'amo', lemma: 'amō', inf: 'amāre', perf: 'amāvī', sup: 'amātum', conj: '1', ko: '사랑하다', en: 'love', grp: 'model' },
    { id: 'moneo', lemma: 'moneō', inf: 'monēre', perf: 'monuī', sup: 'monitum', conj: '2', ko: '경고하다, 조언하다', en: 'warn, advise', grp: 'model' },
    { id: 'rego', lemma: 'regō', inf: 'regere', perf: 'rēxī', sup: 'rēctum', conj: '3', ko: '다스리다', en: 'rule', grp: 'model' },
    { id: 'audio', lemma: 'audiō', inf: 'audīre', perf: 'audīvī', sup: 'audītum', conj: '4', ko: '듣다', en: 'hear', grp: 'model' },
    { id: 'capio', lemma: 'capiō', inf: 'capere', perf: 'cēpī', sup: 'captum', conj: 'M', ko: '잡다, 취하다', en: 'take, seize', grp: 'model top' },
    // top 40 (book list) — capiō above
    { id: 'ago', lemma: 'agō', inf: 'agere', perf: 'ēgī', sup: 'āctum', conj: '3', ko: '몰다, 하다, 이끌다', en: 'drive, do, lead', grp: 'top' },
    { id: 'cado', lemma: 'cadō', inf: 'cadere', perf: 'cecidī', fap: 'cāsūrus', conj: '3', noPass: true, ko: '떨어지다, 쓰러지다', en: 'fall', grp: 'top' },
    { id: 'cedo', lemma: 'cēdō', inf: 'cēdere', perf: 'cessī', sup: 'cessum', conj: '3', noPass: true, ko: '가다, 물러나다, 양보하다', en: 'go, withdraw, yield', grp: 'top' },
    { id: 'colo', lemma: 'colō', inf: 'colere', perf: 'coluī', sup: 'cultum', conj: '3', ko: '경작하다, 돌보다, 섬기다', en: 'cultivate, tend, worship', grp: 'top' },
    { id: 'confero', lemma: 'conferō', inf: 'conferre', perf: 'contulī', sup: 'collātum', conj: '3', stem: 'confer', fix: feroFix('con'), ko: '모으다, 비교하다', en: 'bring together, compare', grp: 'top irr' },
    { id: 'conficio', lemma: 'cōnficiō', inf: 'cōnficere', perf: 'cōnfēcī', sup: 'cōnfectum', conj: 'M', ko: '완성하다, 끝내다', en: 'accomplish, finish', grp: 'top' },
    { id: 'consisto', lemma: 'cōnsistō', inf: 'cōnsistere', perf: 'cōnstitī', conj: '3', noPass: true, ko: '멈추어 서다, 머무르다', en: 'stop, stand still', grp: 'top' },
    { id: 'do', lemma: 'dō', inf: 'dare', perf: 'dedī', sup: 'datum', conj: '1', stem: 'da', ko: '주다, 놓다', en: 'give, put', grp: 'top irr',
      fix: p => { p.ind.act.pres[1] = 'dās'; p.imp.act.pres[0] = 'dā'; p.part.pres = 'dāns'; } },
    { id: 'duco', lemma: 'dūcō', inf: 'dūcere', perf: 'dūxī', sup: 'ductum', conj: '3', ko: '이끌다, 끌다', en: 'lead, draw', grp: 'top',
      fix: p => { p.imp.act.pres[0] = 'dūc'; } },
    { id: 'edo2', lemma: 'ēdō', inf: 'ēdere', perf: 'ēdidī', sup: 'ēditum', conj: '3', ko: '내놓다, 출판하다', en: 'put forth, publish', grp: 'top' },
    { id: 'facio', lemma: 'faciō', inf: 'facere', perf: 'fēcī', sup: 'factum', conj: 'M', ko: '만들다, 하다', en: 'make, do', grp: 'top irr',
      fix: p => {
        p.imp.act.pres[0] = 'fac';
        p.ind.pass.pres = ['fīō', 'fīs', 'fit', 'fīmus', 'fītis', 'fīunt'];
        p.ind.pass.impf = ['fīēbam', 'fīēbās', 'fīēbat', 'fīēbāmus', 'fīēbātis', 'fīēbant'];
        p.ind.pass.fut = ['fīam', 'fīēs', 'fīet', 'fīēmus', 'fīētis', 'fīent'];
        p.subj.pass.pres = ['fīam', 'fīās', 'fīat', 'fīāmus', 'fīātis', 'fīant'];
        p.subj.pass.impf = ['fierem', 'fierēs', 'fieret', 'fierēmus', 'fierētis', 'fierent'];
        p.inf.pass.pres = 'fierī'; p.imp.pass = {};
      } },
    { id: 'fallo', lemma: 'fallō', inf: 'fallere', perf: 'fefellī', sup: 'falsum', conj: '3', ko: '속이다', en: 'deceive', grp: 'top' },
    { id: 'fero', lemma: 'ferō', inf: 'ferre', perf: 'tulī', sup: 'lātum', conj: '3', stem: 'fer', fix: feroFix(''), ko: '나르다, 견디다', en: 'carry, bear, endure', grp: 'top irr' },
    { id: 'fingo', lemma: 'fingō', inf: 'fingere', perf: 'fīnxī', sup: 'fictum', conj: '3', ko: '빚다, 꾸며내다', en: 'shape, invent', grp: 'top' },
    { id: 'gero', lemma: 'gerō', inf: 'gerere', perf: 'gessī', sup: 'gestum', conj: '3', ko: '나르다, 수행하다', en: 'carry, wage, manage', grp: 'top' },
    { id: 'habeo', lemma: 'habeō', inf: 'habēre', perf: 'habuī', sup: 'habitum', conj: '2', ko: '가지다, 여기다', en: 'have, hold, consider', grp: 'top' },
    { id: 'iaceo', lemma: 'iaceō', inf: 'iacēre', perf: 'iacuī', fap: 'iacitūrus', conj: '2', noPass: true, ko: '누워 있다', en: 'lie (be lying down)', grp: 'top' },
    { id: 'infero', lemma: 'īnferō', inf: 'īnferre', perf: 'intulī', sup: 'illātum', conj: '3', stem: 'īnfer', fix: feroFix('īn'), ko: '안으로 나르다, 가하다', en: 'carry into, inflict', grp: 'top irr' },
    { id: 'mitto', lemma: 'mittō', inf: 'mittere', perf: 'mīsī', sup: 'missum', conj: '3', ko: '보내다', en: 'send', grp: 'top' },
    { id: 'moveo', lemma: 'moveō', inf: 'movēre', perf: 'mōvī', sup: 'mōtum', conj: '2', ko: '움직이다', en: 'move', grp: 'top' },
    { id: 'offero', lemma: 'offerō', inf: 'offerre', perf: 'obtulī', sup: 'oblātum', conj: '3', stem: 'offer', fix: feroFix('of'), ko: '내밀다, 제공하다', en: 'offer, present', grp: 'top irr' },
    { id: 'peto', lemma: 'petō', inf: 'petere', perf: 'petīvī', sup: 'petītum', conj: '3', ko: '구하다, 향하다, 공격하다', en: 'seek, head for, attack', grp: 'top' },
    { id: 'pono', lemma: 'pōnō', inf: 'pōnere', perf: 'posuī', sup: 'positum', conj: '3', ko: '놓다, 두다', en: 'put, place', grp: 'top' },
    { id: 'praesto', lemma: 'praestō', inf: 'praestāre', perf: 'praestitī', sup: 'praestitum', conj: '1', ko: '앞에 서다, 뛰어나다, 보여주다', en: 'excel, show, provide', grp: 'top' },
    { id: 'premo', lemma: 'premō', inf: 'premere', perf: 'pressī', sup: 'pressum', conj: '3', ko: '누르다', en: 'press', grp: 'top' },
    { id: 'rapio', lemma: 'rapiō', inf: 'rapere', perf: 'rapuī', sup: 'raptum', conj: 'M', ko: '낚아채다', en: 'seize, snatch', grp: 'top' },
    { id: 'recipio', lemma: 'recipiō', inf: 'recipere', perf: 'recēpī', sup: 'receptum', conj: 'M', ko: '되찾다, 받아들이다', en: 'take back, accept', grp: 'top' },
    { id: 'reddo', lemma: 'reddō', inf: 'reddere', perf: 'reddidī', sup: 'redditum', conj: '3', ko: '돌려주다', en: 'give back, render', grp: 'top' },
    { id: 'refero', lemma: 'referō', inf: 'referre', perf: 'rettulī', sup: 'relātum', conj: '3', stem: 'refer', fix: feroFix('re'), ko: '도로 가져오다, 보고하다', en: 'bring back, report', grp: 'top irr' },
    { id: 'solvo', lemma: 'solvō', inf: 'solvere', perf: 'solvī', sup: 'solūtum', conj: '3', ko: '풀다, 갚다', en: 'loosen, pay', grp: 'top' },
    { id: 'statuo', lemma: 'statuō', inf: 'statuere', perf: 'statuī', sup: 'statūtum', conj: '3', ko: '세우다, 결정하다', en: 'set up, decide', grp: 'top' },
    { id: 'sto', lemma: 'stō', inf: 'stāre', perf: 'stetī', fap: 'statūrus', conj: '1', noPass: true, ko: '서 있다', en: 'stand', grp: 'top' },
    { id: 'subeo', lemma: 'subeō', inf: 'subīre', perf: 'subiī', sup: 'subitum', fix: eoForms('sub', true), ko: '밑으로 가다, 떠맡다', en: 'go under, undergo', grp: 'top irr' },
    { id: 'sumo', lemma: 'sūmō', inf: 'sūmere', perf: 'sūmpsī', sup: 'sūmptum', conj: '3', ko: '집어 들다, 취하다', en: 'take up', grp: 'top' },
    { id: 'teneo', lemma: 'teneō', inf: 'tenēre', perf: 'tenuī', sup: 'tentum', conj: '2', ko: '붙잡다, 유지하다', en: 'hold, keep', grp: 'top' },
    { id: 'tollo', lemma: 'tollō', inf: 'tollere', perf: 'sustulī', sup: 'sublātum', conj: '3', ko: '들어올리다, 없애다', en: 'raise, remove', grp: 'top' },
    { id: 'traho', lemma: 'trahō', inf: 'trahere', perf: 'trāxī', sup: 'tractum', conj: '3', ko: '끌다', en: 'drag, draw', grp: 'top' },
    { id: 'verto', lemma: 'vertō', inf: 'vertere', perf: 'vertī', sup: 'versum', conj: '3', ko: '돌리다, 바꾸다', en: 'turn, change', grp: 'top' },
    { id: 'video', lemma: 'videō', inf: 'vidēre', perf: 'vīdī', sup: 'vīsum', conj: '2', ko: '보다', en: 'see', grp: 'top' },
    // deponents
    { id: 'conor', lemma: 'cōnor', inf: 'cōnārī', sup: 'cōnātum', conj: '1', dep: true, ko: '시도하다', en: 'try', grp: 'dep' },
    { id: 'hortor', lemma: 'hortor', inf: 'hortārī', sup: 'hortātum', conj: '1', dep: true, ko: '격려하다, 권하다', en: 'encourage, urge', grp: 'dep' },
    { id: 'vereor', lemma: 'vereor', inf: 'verērī', sup: 'veritum', conj: '2', dep: true, ko: '두려워하다, 존경하다', en: 'fear, respect', grp: 'dep' },
    { id: 'utor', lemma: 'ūtor', inf: 'ūtī', sup: 'ūsum', conj: '3', dep: true, ko: '사용하다 (+탈격)', en: 'use (+abl.)', grp: 'dep' },
    { id: 'sequor', lemma: 'sequor', inf: 'sequī', sup: 'secūtum', conj: '3', dep: true, ko: '따르다', en: 'follow', grp: 'dep' },
    { id: 'mentior', lemma: 'mentior', inf: 'mentīrī', sup: 'mentītum', conj: '4', dep: true, ko: '거짓말하다', en: 'lie, tell a lie', grp: 'dep' },
    { id: 'patior', lemma: 'patior', inf: 'patī', sup: 'passum', conj: 'M', dep: true, ko: '겪다, 참다', en: 'suffer, allow', grp: 'dep' },
    // irregular
    { id: 'sum', lemma: 'sum', inf: 'esse', perf: 'fuī', fap: 'futūrus', ko: '~이다, 있다', en: 'be', grp: 'irr',
      fix: p => {
        p.ind.act.pres = SUM.pres; p.ind.act.impf = SUM.impf; p.ind.act.fut = SUM.fut;
        p.subj.act.pres = SUM.spres; p.subj.act.impf = SUM.simpf;
        p.imp.act = { pres: ['es', 'este'], fut: ['estō', 'estō', 'estōte', 'suntō'] };
        p.inf.act.pres = 'esse'; p.inf.act.fut = 'futūrus esse / fore';
      } },
    { id: 'possum', lemma: 'possum', inf: 'posse', perf: 'potuī', ko: '~할 수 있다', en: 'be able, can', grp: 'irr',
      fix: p => {
        p.ind.act.pres = ['possum', 'potes', 'potest', 'possumus', 'potestis', 'possunt'];
        p.ind.act.impf = SUM.impf.map(x => 'pot' + x); p.ind.act.fut = SUM.fut.map(x => 'pot' + x);
        p.subj.act.pres = ['possim', 'possīs', 'possit', 'possīmus', 'possītis', 'possint'];
        p.subj.act.impf = ['possem', 'possēs', 'posset', 'possēmus', 'possētis', 'possent'];
        p.inf.act.pres = 'posse'; p.part.pres = 'potēns';
      } },
    { id: 'eo', lemma: 'eō', inf: 'īre', perf: 'iī', fix: eoForms('', false), ko: '가다', en: 'go', grp: 'irr' },
    { id: 'volo', lemma: 'volō', inf: 'velle', perf: 'voluī', ko: '원하다', en: 'want, wish', grp: 'irr',
      fix: p => {
        p.ind.act.pres = ['volō', 'vīs', 'vult', 'volumus', 'vultis', 'volunt'];
        p.ind.act.impf = E('volēb', ['am', 'ās', 'at', 'āmus', 'ātis', 'ant']);
        p.ind.act.fut = E('vol', ['am', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
        p.subj.act.pres = E('vel', ['im', 'īs', 'it', 'īmus', 'ītis', 'int']);
        p.subj.act.impf = E('vell', ['em', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
        p.inf.act.pres = 'velle'; p.part.pres = 'volēns';
      } },
    { id: 'nolo', lemma: 'nōlō', inf: 'nōlle', perf: 'nōluī', ko: '원하지 않다', en: 'not want, be unwilling', grp: 'irr',
      fix: p => {
        p.ind.act.pres = ['nōlō', 'nōn vīs', 'nōn vult', 'nōlumus', 'nōn vultis', 'nōlunt'];
        p.ind.act.impf = E('nōlēb', ['am', 'ās', 'at', 'āmus', 'ātis', 'ant']);
        p.ind.act.fut = E('nōl', ['am', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
        p.subj.act.pres = E('nōl', ['im', 'īs', 'it', 'īmus', 'ītis', 'int']);
        p.subj.act.impf = E('nōll', ['em', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
        p.imp.act = { pres: ['nōlī', 'nōlīte'], fut: ['nōlītō', 'nōlītō', 'nōlītōte', 'nōluntō'] };
        p.inf.act.pres = 'nōlle'; p.part.pres = 'nōlēns';
      } },
    { id: 'malo', lemma: 'mālō', inf: 'mālle', perf: 'māluī', ko: '오히려 ~을 원하다', en: 'prefer', grp: 'irr',
      fix: p => {
        p.ind.act.pres = ['mālō', 'māvīs', 'māvult', 'mālumus', 'māvultis', 'mālunt'];
        p.ind.act.impf = E('mālēb', ['am', 'ās', 'at', 'āmus', 'ātis', 'ant']);
        p.ind.act.fut = E('māl', ['am', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
        p.subj.act.pres = E('māl', ['im', 'īs', 'it', 'īmus', 'ītis', 'int']);
        p.subj.act.impf = E('māll', ['em', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
        p.inf.act.pres = 'mālle';
      } },
    { id: 'fio', lemma: 'fīō', inf: 'fierī', ko: '되다, 일어나다', en: 'become, happen', grp: 'irr',
      fix: p => {
        p.ind.act = {
          pres: ['fīō', 'fīs', 'fit', 'fīmus', 'fītis', 'fīunt'],
          impf: E('fīēb', ['am', 'ās', 'at', 'āmus', 'ātis', 'ant']),
          fut: E('fī', ['am', 'ēs', 'et', 'ēmus', 'ētis', 'ent']),
          perf: compound('factus', SUM.pres), plup: compound('factus', SUM.impf), futp: compound('factus', SUM.fut)
        };
        p.subj.act = { pres: E('fī', ['am', 'ās', 'at', 'āmus', 'ātis', 'ant']), impf: E('fier', ['em', 'ēs', 'et', 'ēmus', 'ētis', 'ent']), perf: compound('factus', SUM.spres), plup: compound('factus', SUM.simpf) };
        p.imp.act = { pres: ['fī', 'fīte'] };
        p.inf.act = { pres: 'fierī', perf: 'factus esse', fut: 'factum īrī / futūrus esse' };
        p.part = { perf: 'factus', gerundive: 'faciendus' };
      } },
    { id: 'edo', lemma: 'edō', inf: 'ēsse', perf: 'ēdī', sup: 'ēsum', conj: '3', stem: 'ed', ko: '먹다', en: 'eat', grp: 'irr',
      fix: p => {
        p.ind.act.pres = ['edō', 'ēs', 'ēst', 'edimus', 'ēstis', 'edunt'];
        p.subj.act.impf = E('ēss', ['em', 'ēs', 'et', 'ēmus', 'ētis', 'ent']);
        p.subj.pass.impf = E('ēss', ['er', 'ēris', 'ētur', 'ēmur', 'ēminī', 'entur']);
        p.imp.act.pres = ['ēs', 'ēste']; p.imp.act.fut = ['ēstō', 'ēstō', 'ēstōte', 'eduntō'];
        p.ind.pass.pres = ['edor', 'ederis', 'ēstur', 'edimur', 'ediminī', 'eduntur']; p.inf.pass.pres = 'edī';
      } }
  ];
  const BY = Object.fromEntries(V.map(v => [v.id, v]));
  const cache = {};
  const paradigm = id => cache[id] || (cache[id] = build(BY[id]));

  /* --- addressing forms ---  key: mood.voice.tense.idx  e.g. ind.act.pres.1 */
  function form(id, key) {
    const [m, vo, te, i] = key.split('.');
    const p = paradigm(id);
    const arr = p[m] && p[m][vo] && p[m][vo][te];
    if (arr == null) return null;
    if (i == null) return arr;
    return Array.isArray(arr) ? arr[+i] ?? null : null;
  }
  const normalize = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\(.*?\)/g, ' ').replace(/j/g, 'i').replace(/v/g, 'u').replace(/[^a-z /]/g, ' ').replace(/\s+/g, ' ').trim();
  const matches = (input, answer) => {
    const a = normalize(input); if (!a) return false;
    const alts = String(answer).split(/\s*\/\s*/).map(normalize);
    return alts.includes(a) || normalize(answer) === a ||
      // accept agreeing participle variants: amāta est / amātum est
      alts.some(x => x.split(' ').length === 2 && a.split(' ').length === 2 && a.split(' ')[1] === x.split(' ')[1] &&
        a.split(' ')[0].replace(/(us|a|um|i|ae)$/, '') === x.split(' ')[0].replace(/(us|a|um|i|ae)$/, ''));
  };

  const LABELS = {
    mood: { ind: ['직설법', 'indicative'], subj: ['접속법', 'subjunctive'], imp: ['명령법', 'imperative'] },
    voice: { act: ['능동태', 'active'], pass: ['수동태', 'passive'] },
    tense: { pres: ['현재', 'present'], impf: ['미완료', 'imperfect'], fut: ['미래', 'future'], perf: ['완료', 'perfect'], plup: ['과거완료', 'pluperfect'], futp: ['미래완료', 'future perfect'] },
    person: [['1인칭 단수', '1st sg.'], ['2인칭 단수', '2nd sg.'], ['3인칭 단수', '3rd sg.'], ['1인칭 복수', '1st pl.'], ['2인칭 복수', '2nd pl.'], ['3인칭 복수', '3rd pl.']],
    conj: { '1': ['제1활용', '1st conj.'], '2': ['제2활용', '2nd conj.'], '3': ['제3활용', '3rd conj.'], '4': ['제4활용', '4th conj.'], 'M': ['혼합활용(3·4)', 'mixed conj.'] }
  };
  function describe(key, lang, dep) {
    const L = lang === 'ko' ? 0 : 1;
    const [m, vo, te, i] = key.split('.');
    if (m === 'imp') {
      const persons = te === 'pres' ? [LABELS.person[1], LABELS.person[4]] : vo === 'act' ? [LABELS.person[1], LABELS.person[2], LABELS.person[4], LABELS.person[5]] : [LABELS.person[1], LABELS.person[2], LABELS.person[5]];
      const tn = te === 'pres' ? (L ? '1st (present)' : '제1(현재)') : (L ? '2nd (future)' : '제2(미래)');
      return `${tn} ${LABELS.mood.imp[L]} ${dep ? '' : LABELS.voice[vo][L]} ${persons[+i][L]}`.replace(/\s+/g, ' ');
    }
    return `${LABELS.tense[te][L]} ${LABELS.mood[m][L]} ${dep ? '' : LABELS.voice[vo][L]} ${LABELS.person[+i][L]}`.replace(/\s+/g, ' ');
  }
  const pp = v => [v.lemma, v.inf, v.dep ? (v.sup ? v.sup.slice(0, -2) + 'us sum' : '—') : (v.perf || '—'), v.dep ? '' : (v.sup || v.fap || '—')].filter(Boolean).join(', ');

  root.LV = { VERBS: V, BY, paradigm, form, normalize, matches, describe, LABELS, principalParts: pp, SUM };
})(typeof window !== 'undefined' ? window : globalThis);
