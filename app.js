/* =========================================================================
   Dicsőítő daltár — alkalmazás logika
   (Ezt a fájlt nem kell szerkesztened. Dalokat a songs.js-ben adhatsz hozzá.)
   ========================================================================= */

"use strict";

/* ---- Segéd: ékezetek eltávolítása kereséshez (á->a, ő->o, stb.) ---- */
function fold(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/* ---- Segéd: akkordjelek eltávolítása a kereshető szövegből ---- */
function stripChords(text) {
  return (text || "").replace(/\[[^\]]*\]/g, "");
}

/* ---- Egy dalszöveg-sor feldarabolása akkord+szótag párokra ---- */
function parseLine(line) {
  const tokens = line.split(/(\[[^\]]*\])/);
  const parts = [];
  let currentChord = null;
  for (const tok of tokens) {
    if (tok === "") continue;
    const m = tok.match(/^\[([^\]]*)\]$/);
    if (m) {
      if (currentChord !== null) parts.push({ chord: currentChord, lyric: "" });
      currentChord = m[1];
    } else {
      parts.push({ chord: currentChord || "", lyric: tok });
      currentChord = null;
    }
  }
  if (currentChord !== null) parts.push({ chord: currentChord, lyric: "" });
  return parts;
}

/* ---- Teljes dalszöveg HTML-lé alakítása ---- */
function renderLyrics(text) {
  const lines = (text || "").replace(/\r/g, "").split("\n");
  // Vezető/záró üres sorok levágása
  while (lines.length && lines[0].trim() === "") lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();

  const html = [];
  for (const raw of lines) {
    const line = raw.replace(/\s+$/g, "");
    if (line.trim() === "") {
      html.push('<div class="line blank"></div>');
      continue;
    }
    if (line.trim().startsWith("#")) {
      const title = line.trim().replace(/^#+\s*/, "");
      html.push('<div class="section-title">' + escapeHtml(title) + "</div>");
      continue;
    }
    const parts = parseLine(line);
    let inner = "";
    for (const p of parts) {
      inner +=
        '<span class="seg"><span class="chord">' +
        escapeHtml(p.chord) +
        '</span><span class="lyric">' +
        escapeHtml(p.lyric) +
        "</span></span>";
    }
    html.push('<div class="line">' + inner + "</div>");
  }
  return html.join("");
}

function escapeHtml(s) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* ---- Előfeldolgozás: kereshető index minden dalhoz ---- */
const TEMPO_ORDER = { "lassú": 0, "közepes": 1, "gyors": 2 };

const songs = (typeof SONGS !== "undefined" ? SONGS : []).map((s, i) => ({
  id: i,
  cim: s.cim || "(cím nélkül)",
  tempo: s.tempo || "",
  hangnem: s.hangnem || "",
  szoveg: s.szoveg || "",
  _search: fold(s.cim + " " + stripChords(s.szoveg)),
}));

/* ---- Állapot ---- */
const state = { query: "", tempo: "" };

/* ---- DOM elemek ---- */
const el = {
  search: document.getElementById("search"),
  clear: document.getElementById("clearSearch"),
  tempoFilters: document.getElementById("tempoFilters"),
  count: document.getElementById("resultCount"),
  list: document.getElementById("songList"),
  overlay: document.getElementById("overlay"),
  sheet: document.getElementById("sheet"),
};

/* ---- Szűrő chippek felépítése ---- */
function buildFilters() {
  ["lassú", "közepes", "gyors"].forEach((t) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.textContent = t;
    chip.onclick = () => {
      state.tempo = state.tempo === t ? "" : t;
      render();
      syncChips();
    };
    chip.dataset.tempo = t;
    el.tempoFilters.appendChild(chip);
  });
}

function syncChips() {
  el.tempoFilters.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.tempo === state.tempo);
  });
}

/* ---- Szűrés ---- */
function filtered() {
  const q = fold(state.query.trim());
  return songs
    .filter((s) => {
      if (q && !s._search.includes(q)) return false;
      if (state.tempo && s.tempo !== state.tempo) return false;
      return true;
    })
    .sort((a, b) => a.cim.localeCompare(b.cim, "hu"));
}

/* ---- Lista kirajzolása ---- */
function render() {
  const results = filtered();
  el.clear.classList.toggle("show", state.query.length > 0);

  el.count.textContent =
    results.length === songs.length
      ? songs.length + " dal a tárban"
      : results.length + " találat";

  if (results.length === 0) {
    el.list.innerHTML =
      '<div class="empty">Nincs a keresésnek megfelelő dal.<br>Próbálj más szót vagy szűrőt.</div>';
    return;
  }

  el.list.innerHTML = "";
  for (const s of results) {
    const li = document.createElement("li");
    li.className = "song-card";
    li.onclick = () => openSong(s.id);

    const meta = [];
    if (s.tempo) meta.push('<span class="tag tempo">' + escapeHtml(s.tempo) + "</span>");
    if (s.hangnem) meta.push('<span class="tag key">' + escapeHtml(s.hangnem) + "</span>");

    li.innerHTML =
      '<div class="main"><h3>' +
      escapeHtml(s.cim) +
      '</h3><div class="meta">' +
      meta.join("") +
      '</div></div><div class="go">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>' +
      "</div>";
    el.list.appendChild(li);
  }
}

/* ---- Dal megnyitása ---- */
let currentSong = null;

function openSong(id) {
  const s = songs[id];
  if (!s) return;
  currentSong = s;

  const meta = [];
  if (s.tempo) meta.push('<span class="tag tempo">' + escapeHtml(s.tempo) + "</span>");
  if (s.hangnem) meta.push('<span class="tag key">Hangnem: ' + escapeHtml(s.hangnem) + "</span>");

  el.sheet.innerHTML =
    '<div class="sheet-head">' +
    '<div class="titles"><h2>' +
    escapeHtml(s.cim) +
    '</h2><div class="submeta">' +
    meta.join("") +
    "</div></div>" +
    '<button class="close-btn" aria-label="Bezárás" onclick="closeSong()">×</button>' +
    "</div>" +
    '<div class="sheet-tools">' +
    '<button class="icon-btn" id="toggleChords">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="17" r="3"/><circle cx="17" cy="14" r="3"/><path d="M10 17V5l10-2v11"/></svg>' +
    '<span class="tgl-label">Akkordok elrejtése</span></button>' +
    '<button class="icon-btn primary" onclick="downloadPdf()">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>' +
    "Letöltés PDF-ben</button>" +
    "</div>" +
    '<div class="sheet-body"><div class="lyrics" id="lyricsBox">' +
    renderLyrics(s.szoveg) +
    "</div></div>";

  const toggle = document.getElementById("toggleChords");
  toggle.onclick = () => {
    const box = document.getElementById("lyricsBox");
    const hidden = box.classList.toggle("no-chords");
    toggle.querySelector(".tgl-label").textContent = hidden
      ? "Akkordok megjelenítése"
      : "Akkordok elrejtése";
  };

  el.overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSong() {
  el.overlay.classList.remove("open");
  document.body.style.overflow = "";
  currentSong = null;
}

/* ---- PDF letöltés = nyomtatási párbeszéd (Mentés PDF-ként) ---- */
function downloadPdf() {
  if (!currentSong) return;
  const prevTitle = document.title;
  // A böngésző ezt ajánlja fájlnévnek a PDF mentésekor:
  document.title = currentSong.cim;
  window.print();
  setTimeout(() => (document.title = prevTitle), 500);
}

/* ---- Események ---- */
el.search.addEventListener("input", (e) => {
  state.query = e.target.value;
  render();
});
el.clear.addEventListener("click", () => {
  state.query = "";
  el.search.value = "";
  el.search.focus();
  render();
});
el.overlay.addEventListener("click", (e) => {
  if (e.target === el.overlay) closeSong();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && el.overlay.classList.contains("open")) closeSong();
});

// Globálisan elérhető függvények az inline gomboknak
window.closeSong = closeSong;
window.downloadPdf = downloadPdf;

/* ---- Sötét / világos mód ---- */
const themeToggle = document.getElementById("themeToggle");
function applyTheme(t) {
  // Alap: világos mód. Sötét csak akkor, ha kifejezetten arra vált a felhasználó.
  document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
}
try {
  const saved = localStorage.getItem("daltar-theme");
  applyTheme(saved === "dark" ? "dark" : "light");
} catch (e) {
  applyTheme("light");
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("daltar-theme", next);
    } catch (e) {}
  });
}

/* ---- Indítás ---- */
buildFilters();
render();
