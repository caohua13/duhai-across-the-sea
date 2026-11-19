/* ============================================================
   渡海 · 海那边 —— 交互逻辑
   纯前端、无后端；观众回答只保存在本机 localStorage。
   ============================================================ */
import { subs, scenes } from './data/subs.js';
import { immortals, timeline } from './data/immortals.js';
import { langs, labLines } from './data/langs.js';
import {
  horizonQuestion, ports, objects, voices, registerNote,
  captionSculpture, workbench, roles, social, method, storyCurve
} from './data/depth.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const pad = (n) => String(Math.floor(n)).padStart(2, '0');
const clock = (s) => `${pad(s / 60)}:${pad(s % 60)}`;
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const toast = (() => {
  const el = $('#toast');
  let t = 0;
  return (msg) => {
    el.textContent = msg;
    el.classList.add('on');
    clearTimeout(t);
    t = setTimeout(() => el.classList.remove('on'), 2200);
  };
})();

/* ---------- 场次补充信息：每场"替观众问什么"、前后连接 ---------- */
const sceneMeta = {
  S01: { ask: '它先问：海那边有什么？', link: '下一场把这个问句交给一群人。' },
  S02: { ask: '它替观众问：去远方，非要坐同一条船吗？', link: '上一场是一句问话；下一场用行动回答。' },
  S03: { ask: '它替观众问：不一样的人，能一起走吗？', link: '上一场提出“各凭本事”；下一场让默契停下来回头。' },
  S04: { ask: '它替观众问：想象之外，还有谁在海的另一边？', link: '上一场是同行；这一场从神话望向历史的帆。' },
  S05: { ask: '它替观众问：真实的远航，运走了什么？', link: '上一场是帆与暮色；这一场是港口与货物。' },
  S06: { ask: '它替观众问：语言不一样，怎么开始？', link: '上一场运的是货；这一场运的是词。' },
  S07: { ask: '它替观众问：相遇之后，留下了什么？', link: '上一场学会了一个词；这一场带着它出海。' },
  S08: { ask: '它替观众问：今天还有这样的事吗？', link: '上一场的帆化作今天的船首。' },
  S09: { ask: '它替观众问：我能不能也讲讲自己的海？', link: '上一场是新的港口；这一场是新的相遇。' },
  S10: { ask: '它回答了开头那个问题。', link: '全片的问句，在最后一分钟被收回。' }
};

const timelineExtra = {
  0: { look: '浪花—海岸—片名', cue: '先闻海声，再见辽阔。' },
  10: { look: '修网的手—岸边八人', cue: '生活细节先于神话奇观。' },
  22: { look: '葫芦落水、长大、浮稳', cue: '“不坐船，咱各凭本事，过海去！”' },
  27: { look: '蒲扇、花篮、玉板、白驴、莲花、剑、云', cue: '不同的本领，先后落在同一片海上。' },
  47: { look: '暮色礁石，远处一抹帆', cue: '“去相见，才会知道。”' },
  62: { look: '木箱沿码头转运', cue: '“传说之外，人们早已扬帆远行。”' },
  76: { look: '桌上瓷碗与香料盒', cue: '“瓷器。”——第一次，也说了一次不是母语的字。' },
  98: { look: '绢布落桌、碗与盒子并排', cue: '“跨过海的不只是货物。”' },
  116: { look: '古船船首—现代货轮船首', cue: '相同方向、相近占比的直接匹配。' },
  130: { look: '展厅里摊开的八仙册页', cue: '“八位仙人，八种渡海方式？”' },
  153: { look: '手机里的家乡海湾—日落航迹', cue: '“渡海，是走向远方，也是走近彼此。”' }
};

/* ---------- 界面语言 / 无障碍模式 ---------- */
$$('.lang-switch button').forEach((b) => b.addEventListener('click', () => {
  $$('.lang-switch button').forEach((x) => x.classList.remove('on'));
  b.classList.add('on');
  document.documentElement.setAttribute('data-ui', b.dataset.ui);
}));
const themeBtn = $('#themeToggle');
themeBtn.addEventListener('click', () => {
  const on = document.body.getAttribute('data-theme') === 'a11y';
  document.body.setAttribute('data-theme', on ? 'sea' : 'a11y');
  themeBtn.setAttribute('aria-pressed', String(!on));
  themeBtn.textContent = on ? '◐ 无障碍' : '◑ 退出无障碍';
});

/* ---------- 导航高亮 ---------- */
const navLinks = $$('.nav a');
const navObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navLinks.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
navLinks.map((a) => $(a.getAttribute('href'))).filter(Boolean).forEach((s) => navObs.observe(s));

/* ============================================================
   01 · 方法论
   ============================================================ */
$('#methodList').innerHTML = method.map((m) => `
  <li data-n="${esc(m.n)}"><div class="mt">${esc(m.t)}</div><div class="md">${esc(m.d)}</div></li>`).join('');

/* ============================================================
   02 · 成片 + 陪看
   ============================================================ */
const player = $('#player');
const cuesEl = $('#cues');
const cueItems = scenes.map((s) => {
  const li = document.createElement('li');
  li.innerHTML = `<span class="t">${clock(s.t)}</span><span><b>${esc(s.zh)}</b><br><span class="scene-en" style="margin:0">${esc(s.en)}</span></span>`;
  li.addEventListener('click', () => {
    player.currentTime = Math.max(0, s.t - 0.3);
    player.play().catch(() => {});
    player.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  cuesEl.appendChild(li);
  return li;
});
let rafId = 0;
const tick = () => {
  if (!player.paused) {
    const abs = player.currentTime + 5;
    const active = scenes.findIndex((s, i) => { const n = scenes[i + 1]; return abs >= s.t && (!n || abs < n.t); });
    cueItems.forEach((li, i) => li.classList.toggle('on', i === active));
    rafId = requestAnimationFrame(tick);
  }
};
player.addEventListener('play', () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(tick); });
player.addEventListener('pause', () => cancelAnimationFrame(rafId));

/* ============================================================
   03 · 海那边：片中五答 + 观众接力墙
   ============================================================ */
$('#horizonFlow').innerHTML = horizonQuestion.askedBy.map((a) => `
  <li><span class="at">${esc(a.at)}</span><div class="who">${esc(a.who)}</div>
  <div class="say" lang="en">“${esc(a.en)}”</div><div class="nt">${esc(a.note)}</div></li>`).join('');

/* ---------- 留言墙：共享模式（ntfy.sh）＋ 本机回退 ---------- */
const WALL = (() => {
  const cfg = { endpoint: 'https://ntfy.sh', topic: 'duhai-wall-2026-7k3m9q', ttlHours: 12 };
  // 可用 ?wall=主题名 换一面墙（不同班级/活动互不干扰）；?wallApi= 指向自建后端
  try {
    const qs = new URLSearchParams(location.search);
    const t = (qs.get('wall') || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 48);
    if (t) cfg.topic = t;
    const a = (qs.get('wallApi') || '').replace(/\/+$/, '');
    if (a) cfg.endpoint = a;
  } catch { /* 老浏览器忽略 */ }

  const LS_LOCAL = 'duhai.wall.v2.local';
  const LS_HIDE = 'duhai.wall.v2.hide';
  const lsRead = (k, def) => { try { return JSON.parse(localStorage.getItem(k) || def); } catch { return JSON.parse(def); } };
  const lsWrite = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* 隐私模式 */ } };

  const el = {
    form: $('#wallForm'), text: $('#wallText'), name: $('#wallName'),
    cards: $('#wallCards'), count: $('#wallCount'), mode: $('#wallMode'),
    copy: $('#wallCopy'), clear: $('#wallClear'), refresh: $('#wallRefresh')
  };
  if (!el.form) return null;

  let items = [];           // 远端 + 本机合并后的条目
  let mode = 'connecting';
  let lastPost = 0;
  let timer = 0;

  const hidden = () => new Set(lsRead(LS_HIDE, '[]'));
  const localList = () => lsRead(LS_LOCAL, '[]');

  const when = (ts) => {
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  };
  const ago = (ts) => {
    const s = Math.max(0, (Date.now() - ts) / 1000);
    if (s < 90) return '刚刚';
    if (s < 3600) return `${Math.round(s / 60)} 分钟前`;
    if (s < 86400) return `${Math.round(s / 3600)} 小时前`;
    return `${Math.round(s / 86400)} 天前`;
  };

  const parse = (raw) => {
    try {
      const o = JSON.parse(raw);
      if (!o || typeof o.t !== 'string' || !o.t.trim()) return null;
      return {
        id: String(o.id || '').slice(0, 40) || ('x' + Math.random().toString(36).slice(2)),
        text: String(o.t).slice(0, 90),
        name: String(o.n || '').slice(0, 14),
        ts: Number(o.ts) || Date.now(),
        mine: false
      };
    } catch { return null; }
  };

  const setMode = (m) => {
    mode = m;
    if (!el.mode) return;
    const map = {
      shared: ['共享中', 'badge-ok'],
      local: ['离线 · 仅本机', 'badge-off'],
      connecting: ['连接中…', 'badge-wait'],
      error: ['共享暂不可用 · 仅本机', 'badge-off']
    };
    const [txt, cls] = map[m] || map.local;
    el.mode.textContent = txt;
    el.mode.className = 'wall-mode ' + cls;
  };

  const render = () => {
    const hide = hidden();
    const list = items
      .filter((x) => !hide.has(x.id))
      .sort((a, b) => b.ts - a.ts)
      .slice(0, 60);
    const total = list.length;
    if (el.count) {
      el.count.textContent = total ? `${total} 条回答 · 共 ${items.length} 条记录` : '还没有回答';
    }
    if (!total) {
      el.cards.innerHTML = '<p class="tiny" style="grid-column:1/-1">按"海那边，会有什么？"写一句，你的回答会挂在这里——所有人打开这个页面都能看见。</p>';
      return;
    }
    el.cards.innerHTML = list.map((w) => `
      <div class="wall-card${w.mine ? ' mine' : ''}">
        <div class="txt">${esc(w.text)}</div>
        <div class="sig">
          <span>${esc(w.name || '匿名')} · ${esc(when(w.ts))} · ${esc(ago(w.ts))}</span>
          ${w.mine ? `<button type="button" class="del" data-id="${esc(w.id)}" aria-label="从我的墙上移除">移除</button>` : ''}
        </div>
      </div>`).join('');
    $$('#wallCards .del').forEach((b) => b.addEventListener('click', () => {
      const h = hidden();
      h.add(b.dataset.id);
      lsWrite(LS_HIDE, [...h].slice(-200));
      render();
      toast('已从你的界面移除（不影响其他人）');
    }));
  };

  const oldest = () => items.reduce((m, x) => (m && m.ts < x.ts ? m : x), null);
  const tideLine = () => {
    const o = oldest();
    if (!o) return '';
    const left = Math.max(0, o.ts + cfg.ttlHours * 3600e3 - Date.now());
    const h = Math.floor(left / 3600e3);
    const m = Math.round((left % 3600e3) / 60e3);
    return `潮水每 ${cfg.ttlHours} 小时退一次：最早的一条将在 ${h} 小时 ${m} 分后随潮离开。`;
  };

  const merge = (remote) => {
    const map = new Map();
    [...remote, ...localList()].forEach((x) => { if (x && x.id) map.set(x.id, x); });
    items = [...map.values()];
  };

  const refresh = async (silent) => {
    if (mode === 'connecting' && !silent) setMode('connecting');
    try {
      const url = `${cfg.endpoint}/${cfg.topic}/json?poll=1&since=all`;
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 8000);
      const r = await fetch(url, { signal: ctl.signal, headers: { Accept: 'application/x-ndjson' }, cache: 'no-store' });
      clearTimeout(t);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const text = await r.text();
      const remote = [];
      text.trim().split('\n').filter(Boolean).forEach((line) => {
        try {
          const ev = JSON.parse(line);
          if (ev.event !== 'message' || !ev.message) return;
          const p = parse(ev.message);
          if (p) remote.push(p);
        } catch { /* 忽略坏行 */ }
      });
      merge(remote);
      setMode('shared');
    } catch (err) {
      merge([]);
      setMode(localList().length ? 'local' : 'error');
    }
    render();
    const tip = $('#wallTide');
    if (tip) tip.textContent = mode === 'shared' ? tideLine() : '当前离线：你的留言只保存在这台设备上。';
  };

  const post = async (text, name) => {
    const now = Date.now();
    if (now - lastPost < 8000) { toast('慢一点，等浪过去再写下一句'); return; }
    lastPost = now;
    const payload = { id: 'w' + now.toString(36) + Math.random().toString(36).slice(2, 6), t: text.slice(0, 90), n: name.slice(0, 14), ts: now };
    const mine = { ...payload, text: payload.t, mine: true };

    if (mode === 'shared' || mode === 'connecting') {
      try {
        const r = await fetch(`${cfg.endpoint}/${cfg.topic}`, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          body: JSON.stringify(payload)
        });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        merge([mine]);
        setMode('shared');
        render();
        toast('已挂上墙，所有人都能看见了');
        return;
      } catch {
        setMode('error');
      }
    }
    // 离线回退：存本机
    const l = localList();
    l.unshift(mine);
    lsWrite(LS_LOCAL, l.slice(0, 40));
    merge([]);
    render();
    toast('当前离线，已存在本机（联网后刷新仍会显示）');
  };

  el.form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const text = el.text.value.trim();
    if (!text) return;
    el.text.value = '';
    post(text, el.name.value.trim());
  });

  if (el.copy) el.copy.addEventListener('click', async () => {
    const h = hidden();
    const list = items.filter((x) => !h.has(x.id)).sort((a, b) => b.ts - a.ts);
    if (!list.length) return toast('墙上还没有回答');
    const txt = ['海那边，会有什么？', `（${new Date().toLocaleString('zh-CN', { hour12: false })}）`, '',
      ...list.map((w, i) => `${i + 1}. ${w.text}${w.name ? ' —— ' + w.name : ''}`)].join('\n');
    try { await navigator.clipboard.writeText(txt); toast('已复制全部回答'); }
    catch { toast('复制失败：请手动选择文本'); }
  });

  if (el.clear) el.clear.addEventListener('click', () => {
    if (!confirm('只清空你本机保存的留言（共享墙上的内容不会受影响）？')) return;
    lsWrite(LS_LOCAL, '[]');
    merge([]);
    render();
    toast('已清空本机记录');
  });

  if (el.refresh) el.refresh.addEventListener('click', () => { refresh(true); toast('正在刷新'); });

  // 首次加载 + 定时刷新 + 回到页面时刷新
  setMode('connecting');
  refresh();
  timer = setInterval(() => { if (!document.hidden) refresh(true); }, 20000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(true); });
  window.addEventListener('beforeunload', () => clearInterval(timer));
  return { refresh, render };
})();

/* ============================================================
   04 · 故事卡（悬停播放 3 秒循环，点开看连接）
   ============================================================ */
const sceneGrid = $('#scenes');
scenes.forEach((s) => {
  const meta = sceneMeta[s.id] || {};
  const el = document.createElement('article');
  el.className = 'scene';
  const line = (subs.find((x) => x.who && x.start >= s.t - 0.2 && x.start < s.t + s.dur) || {}).zh;
  el.innerHTML = `
    <div class="scene-media">
      <img src="assets/img/${s.img}" alt="${esc(s.zh)} 剧照" loading="lazy">
      <video src="assets/media/cards/${s.id.toLowerCase()}.mp4" muted loop playsinline preload="none" aria-hidden="true"></video>
    </div>
    <div class="scene-body">
      <div class="scene-id">${s.id}</div>
      <div class="scene-title">${esc(s.zh)}</div>
      <div class="scene-en">${esc(s.en)}</div>
      <p class="scene-sum" style="margin:0">${esc(s.summary)}</p>
      <div class="scene-ask">${esc(meta.ask || '')}</div>
      <div class="scene-foot"><span class="t">${clock(s.t)} – ${clock(s.t + s.dur)}</span>
        <span class="tiny">点击展开 ↧</span></div>
    </div>
    <div class="scene-detail">
      <div class="row"><b>前后</b><span>${esc(meta.link || '')}</span></div>
      <div class="row"><b>台词</b><span class="q">${esc(line || '（本场以画面与旁白为主）')}</span></div>
      <div class="row"><b>片长</b><span>${s.dur} 秒 · 第 ${scenes.indexOf(s) + 1} / ${scenes.length} 场</span></div>
      <div class="row"><b>去看</b><span><button type="button" class="btn" style="padding:4px 10px;font-size:12px" data-jump="${s.t}">定位时间轴</button></span></div>
    </div>`;
  const video = el.querySelector('video');
  el.addEventListener('mouseenter', () => { video.play().catch(() => {}); });
  el.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  el.addEventListener('click', (ev) => {
    if (ev.target.closest('[data-jump]')) {
      $('#tlRange').value = s.t;
      $('#tlRange').dispatchEvent(new Event('input'));
      $('#timeline').scrollIntoView({ behavior: 'smooth' });
      return;
    }
    el.classList.toggle('open');
  });
  sceneGrid.appendChild(el);
});

/* ============================================================
   05 · 时间轴
   ============================================================ */
const tlRange = $('#tlRange');
const tlMarks = $('#tlMarks');
const tlDetail = $('#tlDetail');
timeline.forEach((m) => {
  const [mm, ss] = m.t.split(':').map(Number);
  const sec = mm * 60 + ss;
  const li = document.createElement('li');
  li.style.left = (sec / 180) * 100 + '%';
  li.textContent = m.label;
  li.title = `${m.t} ${m.text}`;
  li.addEventListener('click', () => { tlRange.value = sec; tlRange.dispatchEvent(new Event('input')); });
  tlMarks.appendChild(li);
});
const renderTl = (sec) => {
  const idx = scenes.findIndex((s, i) => { const n = scenes[i + 1]; return sec >= s.t && (!n || sec < n.t); });
  const scene = scenes[Math.max(0, idx)];
  const extra = timelineExtra[scene.t] || {};
  $('#tlLabel').textContent = `${clock(sec)} · ${scene.zh}`;
  tlDetail.innerHTML = `
    <figure style="margin:0"><img src="assets/img/${scene.img}" alt="${esc(scene.zh)} 剧照"></figure>
    <div>
      <div class="tt">${esc(scene.zh)}</div>
      <div class="te">${esc(scene.en)} · ${scene.id} · ${clock(scene.t)}–${clock(scene.t + scene.dur)}</div>
      <div class="td">${esc(scene.summary)}</div>
      ${extra.look ? `<div class="td"><b style="color:var(--seafoam);font-weight:500">画面：</b>${esc(extra.look)}</div>` : ''}
      ${scene.quote ? `<div class="dl">“${esc(scene.quote)}”</div>` : ''}
      ${extra.cue ? `<div class="td" style="margin-top:10px;color:var(--seafoam)">${esc(extra.cue)}</div>` : ''}
    </div>`;
};
tlRange.addEventListener('input', () => renderTl(Number(tlRange.value)));
renderTl(0);

/* ---------- 情绪曲线（SVG，可点） ---------- */
(() => {
  const host = $('#curve');
  if (!host) return;
  const noteEl = $('#curveNote');
  if (noteEl) noteEl.textContent = storyCurve.note;
  const W = 1000, H = 300;
  const PAD = { l: 46, r: 24, t: 28, b: 44 };
  const X = (t) => PAD.l + (t / 180) * (W - PAD.l - PAD.r);
  const Y = (v) => PAD.t + (1 - (v - 1) / 9) * (H - PAD.t - PAD.b);
  const pts = storyCurve.beats.map((b) => ({ ...b, x: X(b.t), y: Y(b.v) }));

  const smooth = (p) => {
    let d = `M ${p[0].x.toFixed(1)} ${p[0].y.toFixed(1)}`;
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
      const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }
    return d;
  };
  const line = smooth(pts);
  const area = `${line} L ${pts[pts.length - 1].x.toFixed(1)} ${Y(1)} L ${pts[0].x.toFixed(1)} ${Y(1)} Z`;

  const gridLines = [2, 4, 6, 8].map((v) => `<line class="grid" x1="${PAD.l}" y1="${Y(v)}" x2="${W - PAD.r}" y2="${Y(v)}"/>`).join('');
  const yLabels = [2, 4, 6, 8, 10].map((v) => `<text class="lbl" x="${PAD.l - 10}" y="${Y(v) + 3}" text-anchor="end">${v}</text>`).join('');
  const xLabels = [0, 30, 60, 90, 120, 150, 180].map((t) => `<text class="lbl" x="${X(t)}" y="${H - 14}" text-anchor="middle">${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}</text>`).join('');
  const dots = pts.map((p, i) => `
    <g class="pt" data-i="${i}" tabindex="0" role="button" aria-label="${esc(p.id)} ${esc(p.mood)}">
      <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="6"></circle>
      <text x="${p.x.toFixed(1)}" y="${(p.y - 13).toFixed(1)}" text-anchor="middle">${esc(p.mood)}</text>
    </g>`).join('');

  host.innerHTML = `
    <svg class="curve-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="十个场次的情绪曲线">
      <defs>
        <linearGradient id="curveStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#7fd1c0"/><stop offset="55%" stop-color="#f0c46a"/><stop offset="100%" stop-color="#f08a6a"/>
        </linearGradient>
        <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0c46a" stop-opacity=".35"/><stop offset="100%" stop-color="#7fd1c0" stop-opacity=".02"/>
        </linearGradient>
      </defs>
      ${gridLines}${yLabels}${xLabels}
      <line class="axis" x1="${PAD.l}" y1="${Y(1)}" x2="${W - PAD.r}" y2="${Y(1)}"/>
      <path class="area" d="${area}"/>
      <path class="line" d="${line}"/>
      ${dots}
    </svg>`;

  const tip = $('#curveTip');
  const show = (i) => {
    const p = pts[i];
    const sc = scenes.find((s) => s.id === p.id) || {};
    host.querySelectorAll('.pt').forEach((g) => g.classList.remove('on'));
    const g = host.querySelector(`.pt[data-i="${i}"]`);
    if (g) g.classList.add('on');
    if (tip) {
      tip.innerHTML = `<div class="ct">${esc(p.id)} · ${esc(sc.zh || '')} · 情绪 ${p.v}｜${esc(p.mood)}</div>
        <div>${esc(p.text)}</div><div class="cq">“${esc(p.q)}”</div>`;
    }
  };
  host.querySelectorAll('.pt').forEach((g) => {
    const i = Number(g.dataset.i);
    g.addEventListener('mouseenter', () => show(i));
    g.addEventListener('focus', () => show(i));
    g.addEventListener('click', () => show(i));
    g.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); show(i); } });
  });
  show(0);
})();

/* ============================================================
   06 · 八仙（加"现在"一层）
   ============================================================ */
const nowMap = {
  tieguaili: '葫芦里装的药，在今天可以由一个“社区急救包”接住。',
  hanzhongli: '蒲扇带来的风，是今天港口候船厅里那台风扇。',
  zhangguolao: '倒骑的方向感，是地图上“我怎么来、怎么回去”。',
  lanxiehe: '花篮是走一路带一路的伴手礼：明信片、邮票、纪念品。',
  lvdonbin: '宝剑是“先问一句”：好奇心在今天的样子，是一个问题。',
  hexiangu: '莲花是“不急着上岸”：先看完、听清楚，再回答。',
  hanxiangzi: '玉笛是背景音乐：旋律能把“听不懂”变成“还想听”。',
  caoguoj: '玉板是稳定的节奏：保证一次交流有开头、有收尾。'
};
const imGrid = $('#immortals');
const imDetail = $('#imDetail');
const renderIm = (p) => {
  imDetail.innerHTML = `
    <h3>${esc(p.name)} <span class="scene-en" style="margin-left:8px">${esc(p.en)}</span></h3>
    <div class="it">法宝：${esc(p.item)} · ${esc(p.itemEn)}</div>
    <div class="fields">
      <div><b>传说背景</b>${esc(p.from)}</div>
      <div><b>在《渡海》里</b>${esc(p.inFilm)}</div>
      <div><b>这件法宝</b>${esc(p.gifts)}</div>
      <div class="now"><span class="now-tag">本片创意</span>${esc(nowMap[p.id] || '')}</div>
    </div>
    <p class="tiny">说明：八仙传说版本较多，以上造型与法宝为《渡海》的艺术化设定，不作为民间传说的标准定本。</p>`;
};
immortals.forEach((p, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'im' + (i === 0 ? ' on' : '');
  b.innerHTML = `<span class="dot" style="background:${p.hue}"></span><div class="nm">${esc(p.name)}</div><div class="en">${esc(p.en)}</div><div class="it">${esc(p.item)}</div>`;
  b.addEventListener('click', () => { $$('.im').forEach((x) => x.classList.remove('on')); b.classList.add('on'); renderIm(p); });
  imGrid.appendChild(b);
});
renderIm(immortals[0]);

/* ============================================================
   07 · 多声部（带逐句语音与波形）
   ============================================================ */
const voiceFiles = {
  '00:22': 'assets/media/voices/s02_07.m4a',
  '02:16': 'assets/media/voices/s09_23.m4a',
  '02:31': 'assets/media/voices/s09_25.m4a',
  '02:38': 'assets/media/voices/s10_26.m4a'
};
const voiceWave = {
  '00:22': 'assets/media/rails/s02_07.png',
  '02:16': 'assets/media/rails/s09_23.png',
  '02:31': 'assets/media/rails/s09_25.png',
  '02:38': 'assets/media/rails/s10_26.png'
};
$('#voiceGrid').innerHTML = voices.map((v) => `
  <article class="vs">
    <div class="vs-head"><span class="vs-lang">${esc(v.lang)}</span><span class="vs-at">${esc(v.t)}</span></div>
    <div class="vs-say">${esc(v.say)}</div>
    <div class="vs-en" lang="en">${esc(v.en)}</div>
    <div class="vs-frame">${esc(v.frame)}</div>
    <div class="vs-value">${esc(v.value)}</div>
    ${voiceFiles[v.t] ? `<img class="vs-wave" src="${voiceWave[v.t]}" alt="语音波形">
    <audio controls preload="none" src="${voiceFiles[v.t]}" aria-label="${esc(v.name)} 原声"></audio>` : '<p class="tiny" style="padding:0 16px 14px">（此句为情景句，未单独截取原声）</p>'}
  </article>`).join('');

$('#regTitle').textContent = registerNote.title;
$('#regNote').textContent = registerNote.note;
$('#regTable').innerHTML = `<thead><tr><th>语言</th><th>台词</th><th>语域</th></tr></thead><tbody>${
  registerNote.rows.map((r) => `<tr><td>${esc(r.lang)}</td><td>${esc(r.form)}</td><td>${esc(r.register)}</td></tr>`).join('')}</tbody>`;

$('#langCards').innerHTML = langs.map((l) => `
  <article class="lc"><div class="flag">${l.flag}</div><div class="nm">${esc(l.name)}</div><div class="ln">${esc(l.ln)}</div>
  <div class="say">${esc(l.say)}<span class="orig">${esc(l.orig)}</span></div>
  <p class="use">${esc(l.use)}</p><div class="who">${esc(l.who)}</div></article>`).join('');

/* ============================================================
   08 · 无障碍：字幕十秒 + 盲文点阵
   ============================================================ */
const sculpt = captionSculpture;
$('#brailleNote').textContent = sculpt.braille.note;
$('#braille').innerHTML = sculpt.braille.chars.map((c) => `
  <div class="ch">${c.cells.map((onCells) => `<div class="cells">${
    [1, 4, 2, 5, 3, 6].map((dot) => `<div class="cell"><i class="${onCells.includes(dot) ? 'on' : ''}"></i></div>`).join('')
  }</div>`).join('')}<span class="lbl">${esc(c.zh)}</span></div>`).join('');
$('#captionStandards').innerHTML = sculpt.standards.map((s) => `<li><b>${esc(s.k)}</b>${esc(s.v)}</li>`).join('');

const sculptEl = $('#sculpt');
sculptEl.innerHTML = `
  <img class="bg" src="assets/img/frame_13.jpg" alt="片中展厅画面">
  <div class="step" id="scStep">0s</div>
  <div class="cap"><div class="zh" id="scZh"></div><div class="en" id="scEn" lang="en"></div></div>
  <div class="step-note" id="scNote"></div>`;
const scStep = $('#scStep'); const scZh = $('#scZh'); const scEn = $('#scEn'); const scNote = $('#scNote');
const scRange = $('#sculptRange');
scRange.max = String(sculpt.steps.length - 1);
const renderSculpt = (i) => {
  const st = sculpt.steps[i];
  scStep.textContent = st.t;
  scNote.textContent = st.note;
  const zhText = i === 0 || i === 6 ? '' : '在我的家乡，大海也诉说着故事。';
  const enText = i >= 3 && i !== 6 ? (i === 3 ? 'Chez moi aussi, la mer raconte des histoires.' : 'Back home, the sea tells stories too.') : '';
  scZh.textContent = zhText;
  scEn.textContent = enText;
  scZh.classList.toggle('on', !!zhText);
  scEn.classList.toggle('on', !!enText);
  scRange.value = String(i);
};
$('#sculptPrev').addEventListener('click', (e) => { e.stopPropagation(); renderSculpt(Math.max(0, Number(scRange.value) - 1)); });
$('#sculptNext').addEventListener('click', (e) => { e.stopPropagation(); renderSculpt(Math.min(sculpt.steps.length - 1, Number(scRange.value) + 1)); });
scRange.addEventListener('input', () => renderSculpt(Number(scRange.value)));
let scTimer = 0;
$('#sculptPlay').addEventListener('click', () => {
  clearInterval(scTimer);
  let i = 0;
  renderSculpt(0);
  scTimer = setInterval(() => {
    i++;
    if (i >= sculpt.steps.length) { clearInterval(scTimer); return; }
    renderSculpt(i);
  }, 1400);
});
renderSculpt(0);

/* ============================================================
   09 · 声音地图：逐句听
   ============================================================ */
const soundTurns = [
  { t: '00:02', zh: '海那边，会有什么？', en: 'What lies beyond the sea?', who: '吕洞宾（画外）', file: 's01_01' },
  { t: '00:22', zh: '不坐船，咱各凭本事，过海去！', en: "No boats. Let's cross the sea, each in our own way!", who: '铁拐李', file: 's02_07' },
  { t: '00:25', zh: '好！看谁先到！', en: "All right! Let's see who gets there first!", who: '汉钟离', file: 's02_08' },
  { t: '00:45', zh: '海那边，也有人这样望着我们吗？', en: 'Beyond the sea, is someone looking this way too?', who: '吕洞宾', file: 's04_11' },
  { t: '00:50', zh: '去相见，才会知道。', en: "We'll only know when we meet.", who: '何仙姑', file: 's04_12' },
  { t: '01:25', zh: '瓷器', en: 'Porcelain.', who: '中国客商', file: 's06_18' },
  { t: '01:39', zh: '呃……瓷器', en: 'Porcelain.', who: '海外客商', file: 's06_19' },
  { t: '02:16', zh: '八位仙人，八种渡海方式？', en: 'Eight immortals, eight ways across?', who: '英语青年', file: 's09_23' },
  { t: '02:31', zh: '在我的家乡，大海也诉说着故事。', en: 'Back home, the sea tells stories too.', who: '法语青年', file: 's09_25' },
  { t: '02:42', zh: '大海让不同的故事有机会彼此听见。', en: 'The sea brings different stories within reach of one another.', who: '旁白', file: 's10_26' }
];
const soundMap = $('#soundMap');
soundMap.innerHTML = '<img class="sm-wave" style="width:100%;height:110px;object-fit:fill;opacity:.75;margin-bottom:4px" src="assets/media/rails/all.png" alt="全片 3 分钟声音波形">'
  + soundTurns.map((s, i) => `
  <div class="sm-row" data-i="${i}">
    <div class="sm-t">${esc(s.t)}</div>
    <div><div class="sm-zh">${esc(s.zh)}</div><div class="sm-en" lang="en">${esc(s.en)}</div></div>
    <div class="sm-right">
      <img class="sm-wave" src="assets/media/rails/${s.file}.png" alt="波形">
      <button type="button" class="sm-play" data-i="${i}" aria-label="播放${esc(s.who)}这句">▶</button>
    </div>
    <div class="sm-who">${esc(s.who)}</div>
  </div>`).join('');

const audioCache = new Map();
function getAudio(i) {
  if (audioCache.has(i)) return audioCache.get(i);
  const row = $$('.sm-row')[i];
  const audio = new Audio(`assets/media/voices/${soundTurns[i].file}.m4a`);
  audio.preload = 'auto';
  const btn = row.querySelector('.sm-play');
  audio.addEventListener('play', () => {
    $$('.sm-row').forEach((r) => { r.classList.remove('playing'); const b = r.querySelector('.sm-play'); if (b) b.textContent = '▶'; });
    row.classList.add('playing');
    btn.textContent = '⏸';
  });
  audio.addEventListener('ended', () => { row.classList.remove('playing'); btn.textContent = '▶'; });
  audio.addEventListener('pause', () => { if (audio.currentTime === 0 || audio.ended) { row.classList.remove('playing'); btn.textContent = '▶'; } });
  row.appendChild(audio);
  audioCache.set(i, audio);
  return audio;
}
$$('.sm-play').forEach((btn) => btn.addEventListener('click', () => {
  const idx = Number(btn.dataset.i);
  audioCache.forEach((a) => { if (!a.paused) a.pause(); });
  const a = getAudio(idx);
  if (!a.paused) { a.pause(); a.currentTime = 0; return; }
  a.currentTime = 0;
  a.play().catch(() => toast('浏览器阻止了播放：再点一次即可'));
}));

/* ============================================================
   10 · 工坊：译写台 / 双语卡 / 港口卡 / 十二物
   ============================================================ */
const wbPick = $('#wbPick');
workbench.forEach((w, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = w.zh; wbPick.appendChild(o); });
const wbMachine = $('#wbMachine'); const wbHuman = $('#wbHuman'); const wbOut = $('#wbOut');
const showWb = () => {
  const w = workbench[Number(wbPick.value)];
  wbMachine.textContent = w.literal;
  wbHuman.textContent = w.human;
  wbOut.innerHTML = '';
};
wbPick.addEventListener('change', showWb); showWb();
const tokensOf = (s) => new Set(s.toLowerCase().replace(/[.,!?;:'"“”‘’—–-]/g, '').split(/\s+/).filter((w) => w.length > 1));
$('#wbGo').addEventListener('click', () => {
  const w = workbench[Number(wbPick.value)];
  const typed = $('#wbTyped').value.trim();
  if (!typed) { wbOut.innerHTML = '<span class="why">先写一版英文，再点“对照”。</span>'; return; }
  const a = tokensOf(typed), b = tokensOf(w.human);
  const hit = [...a].filter((t) => b.has(t)).length;
  const ratio = a.size ? hit / a.size : 0;
  let msg;
  if (ratio >= 0.7) msg = '很近：和片中版本用词重合度高，语气也接得住。';
  else if (ratio >= 0.35) msg = '方向对：意思到位的部分超过一半，注意句子是不是“说得出口”。';
  else msg = '差别较大：检查有没有漏掉关键信息，或者语气是不是太书面。';
  wbOut.innerHTML = `<div class="rate">${esc(msg)}</div><div class="why">你的写法：<i>${esc(typed)}</i></div>`;
  toast('对照完成');
});
$('#wbWhy').addEventListener('click', () => {
  const w = workbench[Number(wbPick.value)];
  wbOut.innerHTML = `<div class="why">${esc(w.why)}</div>`;
});

const cbWho = $('#cbWho');
immortals.forEach((p, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = `${p.name} · ${p.item}`; cbWho.appendChild(o); });
const cbOut = $('#cbOut');
cbOut.innerHTML = '<div class="empty-hint">选一位仙人、写一句话，生成双语卡片。</div>';
$('#cbGo').addEventListener('click', () => {
  const p = immortals[Number(cbWho.value)];
  const line = $('#cbLine').value.trim() || '各有本领，也能并肩同行。';
  const ref = labLines.find((l) => l.zh === line) || labLines.find((l) => l.zh.includes(line.slice(0, 4)));
  const en = ref ? ref.ref : 'Different gifts, one sea.';
  cbOut.innerHTML = `<div class="card-own" style="background:linear-gradient(135deg,${p.hue},#0b2530 88%)">
    <div class="tag">渡海 · ACROSS THE SEA</div>
    <div><div class="cn">${esc(line)}</div><div class="en" lang="en">${esc(en)}</div></div>
    <div class="en" style="font-size:11.5px">${esc(p.name)} · ${esc(p.item)}</div></div>`;
});

const portPick = $('#portPick');
ports.forEach((p, i) => { const o = document.createElement('option'); o.value = String(i); o.textContent = `${p.flag} ${p.name}`; portPick.appendChild(o); });
const portOut = $('#portOut');
const renderPort = () => {
  const p = ports[Number(portPick.value)];
  portOut.innerHTML = `<div class="pn">${p.flag} ${esc(p.name)} <span class="tiny">${esc(p.en)}</span></div>
    <div class="pq">“${esc(p.q)}”</div><div class="pnote">${esc(p.note)}</div>`;
};
portPick.addEventListener('change', renderPort); renderPort();

const objectGrid = $('#objectGrid');
const objectDetail = $('#objectDetail');
objects.forEach((o, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'obj' + (i === 0 ? ' on' : '');
  b.innerHTML = `<div class="n">${esc(o.name)}</div><div class="e">${esc(o.en)}</div>${o.t ? `<div class="t">${esc(o.t)}</div>` : ''}`;
  b.addEventListener('click', () => {
    $$('.obj').forEach((x) => x.classList.remove('on'));
    b.classList.add('on');
    objectDetail.innerHTML = `<div class="ln">“${esc(o.line)}”</div><div class="fr">${esc(o.from)} · ${esc(o.en)}</div>`;
  });
  objectGrid.appendChild(b);
});
objectDetail.innerHTML = `<div class="ln">“${esc(objects[0].line)}”</div><div class="fr">${esc(objects[0].from)} · ${esc(objects[0].en)}</div>`;

/* ============================================================
   11 · 社会价值 + 五种角色
   ============================================================ */
$('#valueGrid').innerHTML = social.map((s) => `<div class="vg"><div class="k">${esc(s.k)}</div><div class="v">${esc(s.v)}</div></div>`).join('');
$('#roles').innerHTML = roles.map((r) => `<div class="role"><div class="rn">${esc(r.name)}</div><div class="rd">${esc(r.duty)}</div><div class="ro">产出：${esc(r.output)}</div></div>`).join('');

/* ============================================================
   13 · 十幕读片模式（全屏，一幕一幕读完整片）
   ============================================================ */
(() => {
  const el = $('#reader');
  const openBtn = $('#openReader');
  if (!el || !openBtn) return;
  const bg = $('#readerBg'), zhEl = $('#readerZh'), enEl = $('#readerEn');
  const lineEl = $('#readerLine'), askEl = $('#readerAsk');
  const timeEl = $('#readerTime'), cntEl = $('#readerCount'), dots = $('#readerDots');
  const prevBtn = $('#readerPrev'), nextBtn = $('#readerNext');
  let idx = 0;

  const lineOf = (s) => {
    const found = subs.filter((x) => x.type !== 'silent' && x.type !== 'note' && x.start >= s.t - 0.3 && x.start < s.t + s.dur);
    if (found.length) return found.map((x) => x.zh).join('　');
    return s.quote || '';
  };

  dots.innerHTML = scenes.map((s, i) => `<button type="button" data-i="${i}" aria-label="第 ${i + 1} 幕：${esc(s.zh)}"></button>`).join('');

  const render = (i) => {
    idx = Math.max(0, Math.min(scenes.length - 1, i));
    const s = scenes[idx];
    const meta = sceneMeta[s.id] || {};
    bg.style.backgroundImage = `url("assets/img/${s.img}")`;
    timeEl.textContent = `${clock(s.t)} – ${clock(s.t + s.dur)} · ${s.id}`;
    zhEl.textContent = s.zh;
    enEl.textContent = s.en;
    const ln = lineOf(s);
    lineEl.textContent = ln ? `“${ln}”` : '';
    lineEl.style.display = ln ? '' : 'none';
    askEl.textContent = meta.ask || '';
    cntEl.textContent = `${idx + 1} / ${scenes.length}`;
    [...dots.children].forEach((b, k) => b.classList.toggle('on', k === idx));
    prevBtn.disabled = idx === 0;
    nextBtn.textContent = idx === scenes.length - 1 ? '回到第一幕 ↺' : '下一幕 ›';
  };
  const open = () => {
    el.classList.add('on');
    el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('reader-open');
    render(0);
    $('#readerClose').focus();
  };
  const close = () => {
    el.classList.remove('on');
    el.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('reader-open');
    openBtn.focus();
  };
  const next = () => render(idx >= scenes.length - 1 ? 0 : idx + 1);
  const prev = () => render(idx <= 0 ? 0 : idx - 1);

  openBtn.addEventListener('click', open);
  $('#readerClose').addEventListener('click', close);
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  dots.addEventListener('click', (ev) => {
    const b = ev.target.closest('button[data-i]');
    if (b) render(Number(b.dataset.i));
  });
  $('#readerWall').addEventListener('click', () => {
    close();
    $('#beyond').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { const t = $('#wallText'); if (t) t.focus(); }, 700);
  });
  document.addEventListener('keydown', (ev) => {
    if (!el.classList.contains('on')) return;
    if (ev.key === 'Escape') { ev.preventDefault(); close(); }
    else if (ev.key === 'ArrowRight' || ev.key === 'Enter') { ev.preventDefault(); next(); }
    else if (ev.key === 'ArrowLeft') { ev.preventDefault(); prev(); }
    else if (ev.key === 'Tab') {
      const focusables = el.querySelectorAll('button:not([disabled])');
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
  });
})();
