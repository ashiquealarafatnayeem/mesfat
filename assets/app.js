
/* ======================= DATA ======================= */
const interests = [
  {n:"Legal Awareness", c:"linear-gradient(135deg,#6C3CE0,#C026D3)"},
  {n:"Public Speaking", c:"linear-gradient(135deg,#F0B84B,#F472B6)"},
  {n:"Debate", c:"linear-gradient(135deg,#C026D3,#6C3CE0)"},
  {n:"Leadership", c:"linear-gradient(135deg,#22308f,#6C3CE0)"},
  {n:"Youth Development", c:"linear-gradient(135deg,#F472B6,#C026D3)"},
  {n:"Mentoring", c:"linear-gradient(135deg,#F0B84B,#6C3CE0)"},
  {n:"Event Management", c:"linear-gradient(135deg,#22308f,#F472B6)"},
  {n:"Creative Writing", c:"linear-gradient(135deg,#C026D3,#F0B84B)"},
  {n:"Hosting", c:"linear-gradient(135deg,#6C3CE0,#F472B6)"}
];

const education = [
  {inst:"Bangladesh University of Professionals (BUP)", deg:"Bachelor of Laws – LLB", period:"March 2025 – Present", extra:"Current CGPA: 3.98"},
  {inst:"Viqarunnisa Noon School and College", deg:"Higher Secondary Certificate, Science", period:"2023", extra:"GPA: 5.00"},
  {inst:"Bogura Cantonment Public School & College", deg:"Secondary School Certificate, Science", period:"2021", extra:"GPA: 5.00"}
];

const catColors = {
  "Public Speaking":"linear-gradient(120deg,#F0B84B,#F472B6)",
  "Debate":"linear-gradient(120deg,#6C3CE0,#C026D3)",
  "MUN":"linear-gradient(120deg,#22308f,#6C3CE0)",
  "Olympiad & Quiz":"linear-gradient(120deg,#C026D3,#22308f)",
  "Hosting":"linear-gradient(120deg,#F472B6,#6C3CE0)",
  "Organizing":"linear-gradient(120deg,#F0B84B,#6C3CE0)",
  "Writing":"linear-gradient(120deg,#C026D3,#F0B84B)"
};

const achievements = [
  {cat:"Public Speaking", r:"Champion", e:"Independence Golden Jubilee National Baroyari Debate Competition"},
  {cat:"Public Speaking", r:"Runner-up", e:"6th NDF BD National Women's Baroyari Debate Festival"},
  {cat:"Public Speaking", r:"2nd Runner-up", e:"GTC-DC Bangabandhu Memorial National Public Speaking Competition 2021"},
  {cat:"Public Speaking", r:"2nd Runner-up", e:"BAF Shaheen College Science Festival Debate Competition"},
  {cat:"Public Speaking", r:"Runner-up", e:"Women's Day Inter-Baroyari Debate Competition"},
  {cat:"Public Speaking", r:"2nd Runner-up", e:"4th KZSDC National Debate Competition 2021"},
  {cat:"Public Speaking", r:"Champion", e:"Independence Day Science Carnival"},
  {cat:"Public Speaking", r:"Runner-up", e:"Creatonova Aspire National Event"},
  {cat:"Public Speaking", r:"4th Place", e:'Juktir Dake National Event "Bakya Bageesh"'},
  {cat:"Public Speaking", r:"Judge & Workshop Trainer", e:"Sansriti's \"New Year, New Start\""},
  {cat:"Public Speaking", r:"Top 5 Performer", e:"HSTU DS National Baroyari Debate Competition"},
  {cat:"Public Speaking", r:"Top 10 Performer", e:"6th Ahmed Fazlur Rahman Memorial National Debate Festival"},
  {cat:"Public Speaking", r:"Top 10 Performer", e:"DASK Baroyari Debate Competition"},

  {cat:"MUN", r:"Honorable Mention", e:"CUMUN '26"},
  {cat:"MUN", r:"Best Delegation", e:"Gantabaya MUN 2022, Nepal"},
  {cat:"MUN", r:"Verbal Mention", e:"BUPIMUN 2025"},
  {cat:"MUN", r:"Honourable Mention", e:"PUDMUN 2020"},

  {cat:"Debate", r:"Top Adjudicator Break", e:"BSMRSTUDS Fundraise Open Debate Tournament"},
  {cat:"Debate", r:"1st Break", e:"1st BUBTDC National Debate Competition 2026"},
  {cat:"Debate", r:"Champion", e:"NDF BD Rajshahi Zone 1st Virtual Debate Championship"},
  {cat:"Debate", r:"Runner-up", e:"Inter-Cantonment Public School & College Parliamentary Debate Competition 2019"},
  {cat:"Debate", r:"Semifinalist, 6th Best Debater", e:"6th Fazlur Rahman Memorial Debate Festival"},
  {cat:"Debate", r:"Runner-up", e:"Khulna Divisional Debate Competition"},
  {cat:"Debate", r:"Runner-up", e:"Juktir Poshora Online National Debate Festival"},
  {cat:"Debate", r:"Semifinalist", e:"4th Rokeya Hall Debate Festival 2021"},
  {cat:"Debate", r:"Tournament Best Debater", e:"KDS Traditional Debate Battle"},
  {cat:"Debate", r:"Tournament Best Debater", e:"Protiti Inter-Parliamentary Debate Competition"},
  {cat:"Debate", r:"Semifinalist, 6th Best Debater", e:"Scientific Debate Competition"},

  {cat:"Olympiad & Quiz", r:"Regional Winner", e:"Bangladesh Junior Science Olympiad 2020"},
  {cat:"Olympiad & Quiz", r:"Regional Winner", e:"Bangladesh Math Olympiad 2020 & 2021"},
  {cat:"Olympiad & Quiz", r:"Regional Winner", e:"Bangladesh Physics Olympiad 2020"},
  {cat:"Olympiad & Quiz", r:"Champion", e:"Sheikh Russell Memorial National Quiz Competition 2020"},
  {cat:"Olympiad & Quiz", r:"Champion", e:"Victory Day National Quiz Competition 2020"},
  {cat:"Olympiad & Quiz", r:"3rd Place", e:"Criminal Identification Quiz"},
  {cat:"Olympiad & Quiz", r:"2nd Runner-up", e:"Physics Olympiad"},

  {cat:"Hosting", r:"Host", e:'"Gourover July 2026" Programme — PTI Auditorium, Joydebpur, Gazipur'},
  {cat:"Hosting", r:"Host", e:"General Meeting — National Debate Federation Bangladesh"},
  {cat:"Hosting", r:"Host", e:"MasterMind Podcast — MasterMind University Admission Programme"},
  {cat:"Hosting", r:"Host", e:"Annual Cultural Evening 2019 — Bogura Cantonment Public School & College"},
  {cat:"Hosting", r:"Host", e:"Annual Cultural Evening 2020 — Bogura Cantonment Public School & College"},
  {cat:"Hosting", r:"Host", e:"International Mother Language Day Programme — Viqarunnisa Noon College"},
  {cat:"Hosting", r:"Lead Host", e:'"Juktir Dake" — 2 Seasons'},
  {cat:"Hosting", r:"Former Lead Host", e:"The Brainiacs Club"},
  {cat:"Hosting", r:"Former Lead Host", e:"Tesla Lab Science Club"},
  {cat:"Hosting", r:"Former Lead Host", e:"With Scienceloger"},

  {cat:"Organizing", r:"Organizing Committee Member", e:"Bangladesh Betar Debate Competition 2026"},
  {cat:"Organizing", r:"Youth Guest", e:"National Advocacy Event on Digital Democracy"},
  {cat:"Organizing", r:"Volunteer", e:"Abul Khair Group Presents BUP IV 2026"},
  {cat:"Organizing", r:"Programme Manager", e:"Shwapno Youth Development Organization"},

  {cat:"Writing", r:"1st Place", e:"Essay Competition, Upazila Level"},
  {cat:"Writing", r:"1st Place", e:"Story Writing, Maun Pathagar's Short Story and Poetry Competition Season 1"},
  {cat:"Writing", r:"Runner-up", e:"Story Writing, The 10-Day Lit Camp of Ononnô Proyash"}
];

const hostItems = [
  {t:'Host — "Gourover July 2026" Programme', s:"PTI Auditorium, Joydebpur, Gazipur"},
  {t:"Host — General Meeting", s:"National Debate Federation Bangladesh"},
  {t:"Host — MasterMind Podcast", s:"MasterMind University Admission Programme"},
  {t:"Host — Annual Cultural Evening 2019", s:"Bogura Cantonment Public School & College"},
  {t:"Host — Annual Cultural Evening 2020", s:"Bogura Cantonment Public School & College"},
  {t:"Host — International Mother Language Day Programme", s:"Viqarunnisa Noon College"},
  {t:'Lead Host — "Juktir Dake"', s:"2 Seasons"},
  {t:"Former Lead Host", s:"The Brainiacs Club"},
  {t:"Former Lead Host", s:"Tesla Lab Science Club"},
  {t:"Former Lead Host", s:"With Scienceloger"}
];

const tvItems = [
  {k:"Talk Show", h:"Nexus Television — Kantho Charo Jore", p:"2023"},
  {k:"Talk Show", h:"Nexus Television — Kantho Charo Jore", p:"2022"},
  {k:"Debate", h:"Bangladesh Television", p:"2020"}
];

const orgItems = [
  {t:"Organizing Committee Member", s:"Bangladesh Betar Debate Competition 2026"},
  {t:"Youth Guest", s:"National Advocacy Event on Digital Democracy"},
  {t:"Volunteer", s:"Abul Khair Group Presents BUP IV 2026"},
  {t:"Programme Manager", s:"Shwapno Youth Development Organization"}
];

const clubItems = [
  {r:"Executive Member", n:"National Debate Federation (NDF)"},
  {r:"President", n:"With Scienceloger"},
  {r:"General Member", n:"BUP Debating Club"},
  {r:"Former Executive Member", n:"VNCDC"},
  {r:"Co-Ordinator", n:"Bangladesh IQ Olympiad 2020"},
  {r:"Deputy Chief, HRM Department", n:"Tesla Lab"},
  {r:"Former General Secretary", n:"The Brainiacs Club"},
  {r:"Executive Member, HRM Department", n:"Amitrakkhar"},
  {r:"Former Moderator", n:"North Bengal Youth Development Hub"},
  {r:"Administration Head", n:"Rhythm of Reasoning (RoR)"},
  {r:"Former General Secretary", n:"Onnô Proyash Sahitya Sangha"},
  {r:"Publicity Secretary", n:"Protiti Debating Society"},
  {r:"Member", n:"National Debate Federation, Bangladesh"}
];

const mentorItems = [
  {tag:"Instructor", t:"MasterMind University Admission Programme"},
  {tag:"Mentor — Debate", t:"Al Helal Islami Academy & College, Naogaon"},
  {tag:"Mentor — Public Speaking", t:"Simanto Public School & College, Naogaon"},
  {tag:"Mentor — Public Speaking", t:"Rangdia School and College, Bagerhat"},
  {tag:"Mentor — Public Speaking", t:"Gaibandha Govt. Girls' High School"},
  {tag:"Mentor — Hosting", t:"Bogura Cantonment Public School & College"},
  {tag:"Mentor — Hosting", t:'"Juktir Dake" organisation, Jamalpur'}
];

const publications = [
  {name:"Daily Sun", date:"3 June 2025", url:"https://epaper.daily-sun.com/view/7/73931/2025-06-01"},
  {name:"Daily Sun", date:"15 June 2025", url:"https://epaper.daily-sun.com/view/7/75053/2025-06-15"},
  {name:"The Asian Age", date:"18 May 2026", url:"https://dailyasianage.com/news/352310"},
  {name:"Daily Sun", date:"7 June 2026", url:"https://epaper.daily-sun.com/detail/5/115715/2026-06-07"},
  {name:"Daily Sun", date:"28 June 2026", url:"https://epaper.daily-sun.com/detail/5/118188/2026-06-28"},
  {name:"Daily Sun", date:"19 July 2026", url:"https://epaper.daily-sun.com/detail/5/120496/2026-07-19"}
];

const writingItems = [
  {r:"1st Place", t:"Essay Competition", s:"Upazila Level"},
  {r:"1st Place", t:"Story Writing", s:"Maun Pathagar's Short Story and Poetry Competition Season 1"},
  {r:"Runner-up", t:"Story Writing", s:"The 10-Day Lit Camp of Ononnô Proyash"}
];

const skills = ["MS Word","MS PowerPoint","MS Excel","Adobe Photoshop","Canva","CapCut"];

/* ======================= RENDER ======================= */
function el(tag, cls, html){ const e=document.createElement(tag); if(cls) e.className=cls; if(html!==undefined) e.innerHTML=html; return e; }

// About interests
const interestGrid = document.getElementById('interest-grid');
interests.forEach((it,i)=>{
  const c = el('div','interest-card reveal-scale');
  c.style.setProperty('--i', i);
  c.innerHTML = `<div class="ic-dot" style="background:${it.c}"></div><h4>${it.n}</h4>`;
  interestGrid.appendChild(c);
});

// Timeline
const timeline = document.getElementById('timeline');
education.forEach((ed,i)=>{
  const item = el('div','tl-item reveal');
  item.innerHTML = `
    <div class="tl-dot"></div>
    <div class="tl-card">
      <span class="tl-period mono">${ed.period}</span>
      <h4>${ed.inst}</h4>
      <div class="sub">${ed.deg}</div>
      <span class="gpa mono">${ed.extra}</span>
    </div>`;
  timeline.appendChild(item);
});

// Achievements filters with a compact initial All view.
const cats = ["All","Public Speaking","Debate","MUN","Olympiad & Quiz","Hosting","Organizing","Writing"];
const filterRow = document.getElementById('filter-row');
cats.forEach(c=>{
  const b = el('button','filter-btn'+(c==='All'?' active':''), c);
  b.dataset.cat = c;
  b.type = 'button';
  filterRow.appendChild(b);
});
const achGrid = document.getElementById('ach-grid');
const moreWrap = document.getElementById('achievements-more-wrap');
const moreBtn = document.getElementById('achievements-more-btn');
let achievementsExpanded = false;

achievements.forEach((a,i)=>{
  const card = el('div','ach-card reveal-scale');
  card.dataset.cat = a.cat;
  card.dataset.index = i;
  card.style.setProperty('--i', i%9);
  card.innerHTML = `<span class="ach-cat" style="background:${catColors[a.cat]}">${a.cat}</span><h4>${a.r}</h4><p>${a.e}</p>`;
  achGrid.appendChild(card);
});

function filterAchievements(){
  const active = filterRow.querySelector('.filter-btn.active')?.dataset.cat || 'All';
  const cards = [...achGrid.querySelectorAll('.ach-card')];
  cards.forEach(card=>{
    const matchesCategory = active === 'All' || card.dataset.cat === active;
    const withinInitialSix = Number(card.dataset.index) < 6;
    const visible = matchesCategory && (active !== 'All' || achievementsExpanded || withinInitialSix);
    card.classList.toggle('ach-hide', !visible);
    card.setAttribute('aria-hidden', visible ? 'false' : 'true');
  });
  const hasMoreThanSix = achievements.length > 6;
  const showMoreButton = active === 'All' && hasMoreThanSix;
  moreWrap.hidden = !showMoreButton;
  if(showMoreButton){
    moreBtn.textContent = achievementsExpanded ? 'Show Less' : 'See All Achievements';
    moreBtn.setAttribute('aria-expanded', achievementsExpanded ? 'true' : 'false');
  }
}
filterRow.addEventListener('click', e=>{
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  filterRow.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if(btn.dataset.cat === 'All') achievementsExpanded = false;
  filterAchievements();
});
moreBtn.addEventListener('click', ()=>{
  achievementsExpanded = !achievementsExpanded;
  filterAchievements();
  if(!achievementsExpanded){
    document.getElementById('achievements')?.scrollIntoView({behavior:'smooth',block:'start'});
  }
});
filterAchievements();

// Hosting
const hostGrid = document.getElementById('host-grid');
hostItems.forEach(h=>{
  const c = el('div','host-card reveal');
  c.innerHTML = `<div class="host-icon">🎤</div><div><h4>${h.t}</h4><p>${h.s}</p></div>`;
  hostGrid.appendChild(c);
});
const tvStrip = document.getElementById('tv-strip');
tvItems.forEach(t=>{
  const c = el('div','tv-chip reveal-scale');
  c.innerHTML = `<span class="k mono">${t.k}</span><h5>${t.h}</h5><p>${t.p}</p>`;
  tvStrip.appendChild(c);
});

// Organizing
const orgGrid = document.getElementById('org-grid');
orgItems.forEach(o=>{
  const c = el('div','lead-card reveal');
  c.innerHTML = `<div class="lead-icon">◈</div><div><h4>${o.t}</h4><p>${o.s}</p></div>`;
  orgGrid.appendChild(c);
});

// Clubbing
const clubGrid = document.getElementById('club-grid');
clubItems.forEach((c,i)=>{
  const card = el('div','club-card reveal-scale');
  card.style.setProperty('--i', i%6);
  card.innerHTML = `<span class="club-role mono">${c.r}</span><h4>${c.n}</h4>`;
  clubGrid.appendChild(card);
});

// Mentorship
const mentorList = document.getElementById('mentor-list');
mentorItems.forEach(m=>{
  const c = el('div','mentor-item reveal');
  c.innerHTML = `<span class="mentor-tag mono">${m.tag}</span><div><h4>${m.t}</h4></div>`;
  mentorList.appendChild(c);
});

// Publications
const pubGrid = document.getElementById('pub-grid');
publications.forEach((p,i)=>{
  const c = el('div','pub-card reveal-scale');
  c.innerHTML = `<span class="pub-num mono">${String(i+1).padStart(2,'0')}</span><div class="pub-name">${p.name}</div><span class="pub-date mono">${p.date}</span><a class="pub-btn" href="${p.url}" target="_blank" rel="noopener noreferrer">Read Article →</a>`;
  pubGrid.appendChild(c);
});


// Writing
const writeGrid = document.getElementById('write-grid');
writingItems.forEach((w,i)=>{
  const c = el('div','write-card reveal-scale');
  c.innerHTML = `<div class="write-rank mono">${i+1}</div><h4>${w.r} — ${w.t}</h4><p>${w.s}</p>`;
  writeGrid.appendChild(c);
});

// Skills
const skillList = document.getElementById('skill-list');
const skillIcons = {
  'MS Word': '<span class="skill-app-icon skill-word" aria-hidden="true">W</span>',
  'MS PowerPoint': '<span class="skill-app-icon skill-powerpoint" aria-hidden="true">P</span>',
  'MS Excel': '<span class="skill-app-icon skill-excel" aria-hidden="true">X</span>',
  'Adobe Photoshop': '<span class="skill-app-icon skill-photoshop" aria-hidden="true">Ps</span>',
  'Canva': '<span class="skill-app-icon skill-canva" aria-hidden="true">C</span>',
  'CapCut': '<span class="skill-app-icon skill-capcut" aria-label="CapCut logo" role="img"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 8.2h15.4c2.1 0 3.1 2.7 1.2 3.8L7 20.4c-2 1.2-1.1 4.2 1.3 4.2H27M5 23.8h15.4c2.1 0 3.1-2.7 1.2-3.8L7 11.6c-2-1.2-1.1-4.2 1.3-4.2H27" fill="none" stroke="currentColor" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'
};
const skillLevels = {
  'MS Word': 100,
  'MS PowerPoint': 100,
  'MS Excel': 100,
  'Adobe Photoshop': 100,
  'Canva': 100,
  'CapCut': 100
};
skills.forEach(s=>{
  const row = el('div','skill-row reveal');
  const icon = skillIcons[s] || '<span class="skill-app-icon" aria-hidden="true">•</span>';
  const level = skillLevels[s] || 95;
  row.innerHTML = `<div class="skill-row-inner"><div class="skill-topline"><span class="skill-name">${icon}<span class="skill-label">${s}</span></span><span class="skill-percent">${level}%</span></div><div class="skill-bar" role="progressbar" aria-label="${s}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${level}"><div class="skill-fill" data-level="${level}" style="width:${level}%"></div></div></div>`;
  skillList.appendChild(row);
});

/* ======================= LOADER ======================= */
window.addEventListener('load', ()=>{
  setTimeout(()=> document.getElementById('loader').classList.add('hide'), 500);
});

/* ======================= NAVBAR SCROLL ======================= */
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', ()=>{
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  scrollTopBtn.classList.toggle('show', window.scrollY > 700);
});
scrollTopBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

/* ======================= MOBILE NAV ======================= */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-close');
function setMobileMenu(open){
  if(!mobileNav) return;
  if(hamburger) hamburger.classList.toggle('open', open);
  mobileNav.classList.toggle('open', open);
  if(hamburger) hamburger.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('mobile-menu-open', open);
  document.documentElement.classList.toggle('mobile-menu-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  document.documentElement.style.overflow = open ? 'hidden' : '';
}
window.closeMobileMenu = function(){ setMobileMenu(false); };
window.openMobileMenu = function(){ setMobileMenu(true); };
hamburger?.addEventListener('click', (e)=> { e.preventDefault(); e.stopPropagation(); setMobileMenu(!mobileNav.classList.contains('open')); });
mobileClose?.addEventListener('pointerup', (e)=> { e.preventDefault(); e.stopPropagation(); setMobileMenu(false); });
mobileClose?.addEventListener('touchend', (e)=> { e.preventDefault(); e.stopPropagation(); setMobileMenu(false); }, {passive:false});
mobileClose?.addEventListener('click', (e)=> { e.preventDefault(); e.stopPropagation(); setMobileMenu(false); });
document.addEventListener('pointerup', (e)=> {
  const close = e.target.closest?.('#mobile-close');
  if(close){ e.preventDefault(); e.stopPropagation(); setMobileMenu(false); }
});
document.querySelectorAll('#mobile-nav a').forEach(a=> a.addEventListener('click', ()=> setMobileMenu(false)));
mobileNav?.addEventListener('click', (e)=> { if(e.target === mobileNav) setMobileMenu(false); });
document.addEventListener('keydown', (e)=> { if(e.key === 'Escape') setMobileMenu(false); });
window.addEventListener('resize', ()=> { if(window.innerWidth > 768) setMobileMenu(false); });

/* ======================= ACTIVE NAV INDICATOR ======================= */
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('a[data-nav]');
const navObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navAnchors.forEach(a=>{
        a.classList.toggle('active', a.getAttribute('href') === '#'+entry.target.id);
      });
    }
  });
}, {rootMargin:'-45% 0px -50% 0px'});
sections.forEach(s=> navObserver.observe(s));

/* ======================= TYPED TEXT ======================= */
const words = (window.mesfatPortfolio && Array.isArray(window.mesfatPortfolio.typedWords) && window.mesfatPortfolio.typedWords.length) ? window.mesfatPortfolio.typedWords : ["Law Student","Public Speaker","Debater","Host","Youth Leader","Mentor"];
const typedEl = document.getElementById('typed');
let wi=0, ci=0, deleting=false;
function typeLoop(){
  const word = words[wi];
  if(!deleting){
    ci++;
    typedEl.textContent = word.slice(0,ci);
    if(ci === word.length){ deleting = true; setTimeout(typeLoop, 1300); return; }
  } else {
    ci--;
    typedEl.textContent = word.slice(0,ci);
    if(ci === 0){ deleting=false; wi=(wi+1)%words.length; }
  }
  setTimeout(typeLoop, deleting ? 45 : 85);
}
typeLoop();

/* ======================= PARTICLES ======================= */
const particleWrap = document.getElementById('particles');
for(let i=0;i<26;i++){
  const p = el('div','particle');
  p.style.left = Math.random()*100+'%';
  p.style.bottom = (Math.random()*20)+'%';
  p.style.animationDuration = (8+Math.random()*10)+'s';
  p.style.animationDelay = (Math.random()*10)+'s';
  p.style.opacity = 0.3+Math.random()*0.5;
  particleWrap.appendChild(p);
}

/* ======================= SCROLL REVEAL ======================= */
const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-scale');
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      if(entry.target.classList.contains('tl-item')) entry.target.querySelector('.tl-dot')?.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.15});
revealEls.forEach(e=> revealObserver.observe(e));

/* ======================= COUNTERS ======================= */
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const target = parseFloat(entry.target.dataset.count);
      const decimals = parseInt(entry.target.dataset.decimals || '0');
      const suffix = entry.target.dataset.suffix || '';
      let cur = 0;
      const dur = 1600, start = performance.now();
      function step(now){
        const p = Math.min((now-start)/dur, 1);
        const eased = 1 - Math.pow(1-p, 3);
        cur = target*eased;
        entry.target.textContent = cur.toFixed(decimals) + suffix;
        if(p < 1) requestAnimationFrame(step);
        else entry.target.textContent = target.toFixed(decimals) + suffix;
      }
      requestAnimationFrame(step);
      counterObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.5});
counters.forEach(c=> counterObserver.observe(c));

/* ======================= SKILL BARS (no invented %; fill to a shared, honest level) ======================= */
const skillObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.querySelectorAll('[data-skill]').forEach(bar=> bar.style.width = '100%');
      skillObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.3});
document.querySelectorAll('#skill-list').forEach(l=> skillObserver.observe(l));

/* ======================= CUSTOM CURSOR ======================= */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
window.addEventListener('mousemove', e=>{
  mx=e.clientX; my=e.clientY;
  dot.style.left=mx+'px'; dot.style.top=my+'px';
});
function ringLoop(){
  rx += (mx-rx)*0.18; ry += (my-ry)*0.18;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(ringLoop);
}
ringLoop();
document.querySelectorAll('a,button').forEach(elm=>{
  elm.addEventListener('mouseenter', ()=> ring.classList.add('active'));
  elm.addEventListener('mouseleave', ()=> ring.classList.remove('active'));
});

/* ======================= TOAST ======================= */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2800);
}


  /* ======================= MEDIA LIBRARY UI ======================= */
  function switchMediaTab(name){
    const mediaTabs = document.querySelectorAll('[data-media-tab]');
    mediaTabs.forEach(t=>t.classList.toggle('active', t.dataset.mediaTab===name));
    document.querySelectorAll('.media-panel').forEach(p=>p.classList.remove('active'));
    const panel=document.getElementById('media-panel-'+name);
    if(panel) panel.classList.add('active');
    const mediaSection=document.getElementById('media-library');
    if(mediaSection && window.innerWidth<=768) mediaSection.scrollIntoView({behavior:'smooth',block:'start'});
  }
  window.switchMediaTab=switchMediaTab;
  document.querySelectorAll('[data-social-empty="1"]').forEach(a=>a.addEventListener('click',(e)=>{e.preventDefault();}));
  document.addEventListener('click',(e)=>{
    const tab=e.target.closest?.('[data-media-tab]');
    if(tab){ e.preventDefault(); switchMediaTab(tab.dataset.mediaTab); }
  });
  const galleryFilters=document.querySelectorAll('[data-gallery-filter]');
  galleryFilters.forEach(btn=>btn.addEventListener('click',()=>{
    galleryFilters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    const filter=btn.dataset.galleryFilter;
    document.querySelectorAll('.gallery-item').forEach(item=>{
      item.style.display=(filter==='all'||(item.dataset.galleryCategories||'').split(' ').includes(filter))?'block':'none';
    });
  }));

/* ======================= IMAGE FALLBACK ======================= */
// Each image first tries its local copy in /images. If that file is missing,
// it falls back to the copy on the Reach Rider server (data-fallback).
function showProfileInitials(img){
  const wrap = img.parentElement;
  img.style.display='none';
  wrap.style.display='flex'; wrap.style.alignItems='center'; wrap.style.justifyContent='center';
  wrap.innerHTML = '<span style="font-family:Fraunces,serif; font-size:56px; color:#fff;">MA</span>';
}
function handleImageError(img){
  const fb = img.dataset.fallback;
  if(fb && img.getAttribute('src') !== fb){ img.src = fb; return; }
  if(img.id === 'profile-photo') showProfileInitials(img);
}
document.querySelectorAll('img').forEach(img=>{
  img.addEventListener('error', ()=> handleImageError(img));
  if(img.complete && img.naturalWidth === 0 && img.getAttribute('src')) handleImageError(img);
});

/* ======================= FOOTER YEAR ======================= */
const yearEl = document.getElementById('footer-year');
if(yearEl) yearEl.textContent = new Date().getFullYear();
