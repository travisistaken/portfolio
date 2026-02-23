/* portfolio.travisteo.com — main.js */

function onPageReady() {
  initTerminal('term-out', [
    {type:'cmd', text:'whoami'},
    {type:'out', text:'travis_teo', cls:'t-dim'},
    {type:'blank'},
    {type:'cmd', text:'cat profile.json'},
    {type:'out', text:'{', cls:'t-dim'},
    {type:'kv',  key:'"status"',   val:'"ICT Student @ Nanyang Polytechnic"'},
    {type:'kv',  key:'"role"',     val:'"Aspiring Cybersecurity Analyst"'},
    {type:'kv',  key:'"exp"',      val:'"Info Security Intern @ ST Engineering"'},
    {type:'kv',  key:'"labs"',     val:'["HackTheBox","TryHackMe","OverTheWire"]'},
    {type:'kv',  key:'"location"', val:'"Singapore"', last:true},
    {type:'out', text:'}', cls:'t-dim'},
    {type:'blank'},
    {type:'cursor'},
  ], 500);

  initProjects();
  initWriteups();
  initEventsList();
  initCalendar();
  initAddEvent();
}

/* ── PROJECTS ── */
function initProjects() {
  const list    = document.getElementById('proj-list');
  const pag     = document.getElementById('proj-pag');
  const filters = document.querySelectorAll('[data-pf]');
  if (!list) return;
  let active = 'all', page = 1;
  const PER_PAGE = 2;

  function filtered() {
    return active === 'all' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(active));
  }
  function render() {
    const data  = filtered();
    const total = Math.ceil(data.length / PER_PAGE);
    page = Math.min(page, total || 1);
    list.innerHTML = '';
    data.slice((page-1)*PER_PAGE, page*PER_PAGE).forEach(p => {
      const d = document.createElement('div');
      d.className = 'proj-card';
      const imgHtml = p.img ? `<img src="${p.img}" alt="${escHtml(p.title)}" class="expandable" style="width:100%;height:160px;object-fit:cover;margin-bottom:14px;border:1px solid var(--border);">
      <div class="expand-hint">click image to expand</div>` : '';
      d.innerHTML = `
        ${imgHtml}
        <div class="proj-num">${p.num}</div>
        <div class="proj-title">${p.title}</div>
        <div class="proj-sub">${p.sub}</div>
        <p class="proj-body">${p.body}</p>
        <div class="tag-row">${p.chips.map(c=>`<span class="tag">${escHtml(c)}</span>`).join('')}</div>
        <button class="proj-btn" style="margin-top:12px;">Read More ↗</button>
      `;
      d.querySelector('.proj-btn').addEventListener('click', () => {
        window._openModal && window._openModal(p.detail + `<div class="tag-row" style="margin-top:18px">${p.chips.map(c=>`<span class="tag">${escHtml(c)}</span>`).join('')}</div>`);
      });
      // re-init lightbox for dynamically added images
      if (p.img) {
        const img = d.querySelector('.expandable');
        const lb  = document.getElementById('lightbox');
        const lbImg = document.getElementById('lb-img');
        if (lb && lbImg && img) {
          img.addEventListener('click', () => {
            lbImg.src = p.img;
            lbImg.alt = p.title;
            lb.classList.add('on');
            document.body.style.overflow = 'hidden';
          });
        }
      }
      list.appendChild(d);
    });
    if (pag) {
      pag.innerHTML = '';
      for (let i=1; i<=total; i++) {
        const b = document.createElement('button');
        b.className = 'page-btn' + (i===page?' active':'');
        b.textContent = i;
        b.addEventListener('click', ()=>{page=i; render();});
        pag.appendChild(b);
      }
    }
  }
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    active = btn.dataset.pf; page = 1; render();
  }));
  render();
}

/* ── WRITEUPS ── */
function initWriteups() {
  const grid    = document.getElementById('wu-grid');
  const pag     = document.getElementById('wu-pag');
  const filters = document.querySelectorAll('[data-wf]');
  if (!grid) return;
  let active = 'all', page = 1;
  const PER_PAGE = 4;

  function filtered() {
    return [...WRITEUPS].sort((a,b)=>b.date.localeCompare(a.date))
      .filter(w => active === 'all' || w.type === active);
  }
  function render() {
    const data  = filtered();
    const total = Math.ceil(data.length / PER_PAGE);
    page = Math.min(page, total||1);
    grid.innerHTML = '';
    data.slice((page-1)*PER_PAGE, page*PER_PAGE).forEach(w => {
      const d = document.createElement('div');
      d.className = 'wu-card';
      d.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
          <span class="tag" style="text-transform:uppercase;letter-spacing:0.8px;">${escHtml(w.platform)}</span>
          <span class="tag">${escHtml(w.diff)}</span>
          <span style="font-family:var(--mono);font-size:10px;color:var(--muted);margin-left:auto;">${escHtml(w.date)}</span>
        </div>
        <div style="font-size:15px;font-weight:700;margin-bottom:8px;color:var(--text);">${w.title}</div>
        <p style="font-size:13px;color:var(--text2);line-height:1.7;margin-bottom:12px;">${w.body}</p>
        <div class="tag-row">${w.tags.map(t=>`<span class="tag">${escHtml(t)}</span>`).join('')}</div>
        <button class="proj-btn" style="margin-top:10px;">Read more ↗</button>
      `;
      d.querySelector('.proj-btn').addEventListener('click', () => {
        window._openModal && window._openModal(w.detail + `<div class="tag-row" style="margin-top:18px">${w.tags.map(t=>`<span class="tag">${escHtml(t)}</span>`).join('')}</div>`);
      });
      grid.appendChild(d);
    });
    if (pag) {
      pag.innerHTML = '';
      for (let i=1; i<=total; i++) {
        const b = document.createElement('button');
        b.className = 'page-btn' + (i===page?' active':'');
        b.textContent = i;
        b.addEventListener('click', ()=>{page=i; render();});
        pag.appendChild(b);
      }
    }
  }
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    active = btn.dataset.wf; page = 1; render();
  }));
  render();
}

/* ── EVENTS ── */
let _customEvts = {};

function initEventsList() {
  const list    = document.getElementById('events-list');
  const pag     = document.getElementById('evt-pag');
  const filters = document.querySelectorAll('[data-ef]');
  if (!list) return;

  // Use in-memory storage only (no localStorage for security)
  let active = 'all', page = 1;
  const PER_PAGE = 2;

  function allEvts() {
    return [...EVENTS_DATA, ...Object.values(_customEvts).map(e=>({...e,isCustom:true}))]
      .sort((a,b)=>b.date.localeCompare(a.date));
  }
  function filtered() {
    const data = allEvts();
    return active==='all' ? data : data.filter(e=>e.type===active||e.status===active);
  }
  function render() {
    const data  = filtered();
    const total = Math.ceil(data.length/PER_PAGE);
    page = Math.min(page, total||1);
    list.innerHTML = '';
    data.slice((page-1)*PER_PAGE, page*PER_PAGE).forEach(evt => {
      const d = document.createElement('div');
      d.className = 'event-card';
      const badge = evt.status==='attended'
        ? '<span class="event-badge badge-attended">✓ Attended</span>'
        : '<span class="event-badge badge-upcoming">📅 Registered</span>';
      const tagsRow = evt.tags ? `<div class="tag-row">${evt.tags.map(t=>`<span class="tag">${escHtml(t)}</span>`).join('')}</div>` : '';
      const detailBtn = evt.detail ? `<button class="proj-btn" style="margin-top:10px;">Details ↗</button>` : '';
      const delBtn = evt.isCustom ? `<button class="proj-btn" style="margin-top:10px;margin-left:8px;border-color:var(--red);color:var(--red);">Remove</button>` : '';
      d.innerHTML = `${badge}
        <div class="event-date">${escHtml(evt.dateLabel||evt.date)}</div>
        <div class="event-title">${escHtml(evt.title)}</div>
        <div class="event-org">${escHtml(evt.org||'')}</div>
        <p class="event-desc">${escHtml(evt.desc||'')}</p>
        ${tagsRow}
        <div style="display:flex;gap:6px;flex-wrap:wrap;">${detailBtn}${delBtn}</div>`;
      const btns = d.querySelectorAll('.proj-btn');
      if (evt.detail && btns[0]) {
        btns[0].addEventListener('click', () => {
          window._openModal && window._openModal(evt.detail + (evt.tags ? `<div class="tag-row" style="margin-top:18px">${evt.tags.map(t=>`<span class="tag">${escHtml(t)}</span>`).join('')}</div>` : ''));
        });
      }
      if (evt.isCustom && btns[btns.length-1]) {
        btns[btns.length-1].addEventListener('click', () => {
          delete _customEvts[evt.id];
          if (evt.status==='attended') _ATTENDED.delete(evt.date);
          else _UPCOMING.delete(evt.date);
          window._calRender && window._calRender();
          render();
        });
      }
      list.appendChild(d);
    });
    if (pag) {
      pag.innerHTML='';
      for (let i=1;i<=total;i++){
        const b=document.createElement('button');
        b.className='page-btn'+(i===page?' active':'');
        b.textContent=i;
        b.addEventListener('click',()=>{page=i;render();});
        pag.appendChild(b);
      }
    }
  }
  filters.forEach(btn=>btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    active=btn.dataset.ef; page=1; render();
  }));
  render();
  window._renderEvts = render;
}

/* ── CALENDAR ── */
let _ATTENDED = new Set(['2025-06-14']);
let _UPCOMING = new Set(['2026-02-26']);

function initCalendar() {
  const grid  = document.getElementById('cal-grid');
  const label = document.getElementById('cal-label');
  const prev  = document.getElementById('cal-prev');
  const next  = document.getElementById('cal-next');
  if (!grid) return;
  const today = new Date();
  let calDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const pad = n => String(n).padStart(2,'0');
  const ds  = (y,m,d) => `${y}-${pad(m+1)}-${pad(d)}`;
  const todayStr = ds(today.getFullYear(), today.getMonth(), today.getDate());

  function renderCalendar() {
    const y=calDate.getFullYear(), m=calDate.getMonth();
    label.textContent = `${MONTHS[m]} ${y}`;
    const first = new Date(y,m,1).getDay(), days = new Date(y,m+1,0).getDate();
    grid.innerHTML='';
    ['Su','Mo','Tu','We','Th','Fr','Sa'].forEach(day=>{
      const h=document.createElement('div');h.className='cal-hdr';h.textContent=day;grid.appendChild(h);
    });
    for(let i=0;i<first;i++){const e=document.createElement('div');e.className='cal-cell';grid.appendChild(e);}
    for(let d=1;d<=days;d++){
      const s=ds(y,m,d);
      const c=document.createElement('div');c.className='cal-cell';c.textContent=d;
      if(s===todayStr)c.classList.add('today');
      if(_ATTENDED.has(s))c.classList.add('attended');
      else if(_UPCOMING.has(s))c.classList.add('upcoming');
      grid.appendChild(c);
    }
  }
  prev.addEventListener('click',()=>{calDate=new Date(calDate.getFullYear(),calDate.getMonth()-1,1);renderCalendar();});
  next.addEventListener('click',()=>{calDate=new Date(calDate.getFullYear(),calDate.getMonth()+1,1);renderCalendar();});
  renderCalendar();
  window._calRender = renderCalendar;
}

function initAddEvent() {
  const btn = document.getElementById('evt-add');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const title  = document.getElementById('evt-title').value.trim();
    const org    = document.getElementById('evt-org').value.trim();
    const date   = document.getElementById('evt-date').value;
    const type   = document.getElementById('evt-type').value;
    const status = document.getElementById('evt-status').value;
    if (!title||!date){alert('Please enter a name and date.');return;}
    // Input validation
    if (title.length > 200 || org.length > 200) { alert('Input too long.'); return; }
    const id = 'evt_' + Date.now();
    _customEvts[id]={id,title,org,date,dateLabel:date,status,type,desc:'',tags:[],isCustom:true};
    if(status==='attended')_ATTENDED.add(date); else _UPCOMING.add(date);
    window._calRender && window._calRender();
    window._renderEvts && window._renderEvts();
    document.getElementById('evt-title').value='';
    document.getElementById('evt-org').value='';
    document.getElementById('evt-date').value='';
  });
}
