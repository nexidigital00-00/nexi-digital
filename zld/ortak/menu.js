/* Zeynep Lezzet Durağı: ortak menü verisi ve yardımcılar */
// [ad, açıklama, [[seçenek, fiyat], ...]]
const MENU = [
 {id:"kahvalti", ad:"Kahvaltı", hint:"Her sabah, ev yapımı reçel ve sıcak ekmekle.", items:[
  ["Serpme Kahvaltı","",[["",590]]],
  ["Tabak Kahvaltı","",[["",425]]],
  ["Menemen","",[["",230]]],
  ["Peynirli Omlet","",[["",230]]],
  ["Sucuklu Yumurta","",[["",250]]],
  ["Tavada Sucuk","",[["",180]]],
  ["Tavada Yumurta","",[["",90]]],
  ["Haşlanmış Yumurta","",[["",60]]],
  ["Patates Kızartması","",[["Tek",80],["Duble",120]]],
  ["Peynir Tabağı","",[["Tek",80],["Duble",160]]],
  ["Biberli Sos Tabağı","",[["",120]]],
  ["Zeytin Tabağı","",[["",80]]],
  ["Salatalık ve Domates","",[["",80]]],
  ["Soka","",[["Porsiyon",40],["Paket",100],["Kg",500]]],
  ["Acuka","",[["",50]]],
  ["Bal","",[["",60]]],
  ["Reçel","",[["",70]]],
  ["Nutella","",[["",60]]],
  ["Tereyağı","",[["",70]]],
 ]},
 {id:"gun", ad:"Gün tabakları", hint:"Öğlen için sıcak tabaklar.", items:[
  ["Gün Tabağı Klasik","",[["",590]]],
  ["Çi Börekli Gün Tabağı","",[["",590]]],
  ["Zeytinyağlı Tabağı","",[["",490]]],
  ["Kayseri Mantı","",[["Yarım",220],["Porsiyon",410]]],
  ["İçli Köfte Spesiyal","",[["",300]]],
  ["Çi Börek Tabağı","3 adet",[["",240]]],
  ["İçli Köfte (kızartılmış)","",[["Adet",110]]],
  ["Çi Börek (kızartılmış)","",[["Adet",80]]],
 ]},
 {id:"borek", ad:"Börekler", hint:"El açması. Az porsiyon, kol, kilo ya da bütün tepsi.", items:[
  ["Patatesli El Açma Börek","",[["Az",90],["Porsiyon",150],["Bir kol",270],["Kg",600],["Tepsi (2,3 kg)",1300]]],
  ["Patatesli Kıymalı El Açma Börek","",[["Kg",690],["Tepsi (2,35 kg)",1550]]],
  ["Peynirli El Açma Börek","",[["Az",90],["Porsiyon",150],["Bir kol",300],["Kg",800],["Tepsi (1,8 kg)",1450]]],
  ["Ispanaklı El Açma Börek","",[["Az",90],["Porsiyon",150],["Bir kol",310],["Kg",900],["Tepsi (1,6 kg)",1500]]],
  ["Kıymalı El Açma Börek","",[["Az",90],["Porsiyon",150],["Bir kol",350],["Kg",1050],["Tepsi (1,6 kg)",1650]]],
  ["Su Böreği","",[["Az",90],["Porsiyon",150],["Kg",1050]]],
  ["Boşnak Mantı","",[["Porsiyon",230],["Kg",1250]]],
  ["Patatesli Gül Böreği","Pişmiş",[["Adet",70]]],
  ["Patatesli Kıymalı Gül Böreği","Pişmiş",[["Adet",85]]],
  ["Peynirli Gül Böreği","Pişmiş",[["Adet",80]]],
  ["Ispanaklı Gül Böreği","Pişmiş",[["Adet",80]]],
  ["Kıymalı Gül Böreği","Pişmiş",[["Adet",100]]],
 ]},
 {id:"pogaca", ad:"Poğaça ve kruvasan", hint:"Kruvasanlar tereyağlı.", items:[
  ["Sade Poğaça","",[["Adet",30]]],
  ["Peynirli Poğaça","",[["Adet",35]]],
  ["Dereotlu Peynirli Poğaça","",[["Adet",40]]],
  ["Sade Kruvasan","",[["Adet",60]]],
  ["Peynirli Kruvasan","",[["Adet",70]]],
  ["Nutellalı Kruvasan","",[["Adet",80]]],
 ]},
 {id:"zeytinyagli", ad:"Zeytinyağlılar", hint:"Porsiyon 150 gr. Az porsiyon yarısı kadardır.", items:[
  ["Yaprak Sarma","",[["Adet",15],["Az",80],["Porsiyon",150],["Yarım kg",450],["Kg",900]]],
  ["Beyaz Lahana Sarma","",[["Az",80],["Porsiyon",150],["Yarım kg",375],["Kg",750]]],
  ["Kuru Patlıcan Dolma","",[["Adet",60],["Yarım kg",425],["Kg",850]]],
  ["Fırında Biber Dolması","",[["Adet",50],["Yarım kg",375],["Kg",750]]],
  ["Portakallı Enginar","",[["Adet",130],["Kg",1250]]],
  ["Yoğurt","",[["Az",15],["Tam",35]]],
 ]},
 {id:"salata", ad:"Salatalar", hint:"Porsiyon 250 gr. Az porsiyon yarısı kadardır.", items:[
  ["Sebze Tarator","Patates, havuç, sakız kabağı, dereotu, az sarımsak, süzme yoğurt",[["Az",100],["Porsiyon",225],["Yarım kg",450],["Kg",900]]],
  ["Pancarlı Kısır","İnce bulgur, kuru ve taze soğan, maydanoz, kırmızı pancar, nar ekşisi, limon, zeytinyağı",[["Az",80],["Porsiyon",190],["Yarım kg",375],["Kg",750]]],
  ["Karagöz Salatası","Börülce, kapya biber, mısır, kornişon, dereotu, taze soğan, nar ekşisi, zeytinyağı",[["Az",110],["Porsiyon",230],["Yarım kg",475],["Kg",950]]],
  ["Közmari","Köz patlıcan, köz kapya, mısır, havuç, ceviz, az sarımsak, süzme yoğurt",[["Az",110],["Porsiyon",230],["Yarım kg",475],["Kg",950]]],
  ["Patates Salatası","Patates, köz kapya, taze soğan, maydanoz, limon, sumak, zeytinyağı",[["Az",80],["Porsiyon",190],["Yarım kg",375],["Kg",750]]],
  ["Rus Salatası","Patates, havuç, bezelye, kornişon, süzme yoğurt, mayonez, az sarımsak",[["Az",80],["Porsiyon",190],["Yarım kg",375],["Kg",750]]],
 ]},
 {id:"tatli", ad:"Tatlılar", hint:"Borcamlar 15 dilim. Borcam ve tepsiler depozitolu.", items:[
  ["Trileçe","",[["Porsiyon",230],["Borcam",2850]]],
  ["Ağlayan Pasta","",[["Porsiyon",190],["Borcam",2500]]],
  ["İncir Rüyası","",[["Porsiyon",190],["Borcam",2500]]],
  ["Islak Kek","",[["Porsiyon",160],["Borcam",2100]]],
  ["Cevizli Ev Baklavası","",[["Dilim",50],["Kg",1100],["Tepsi",3300]]],
  ["Sıcak Brownie","Vişneli, Nutella dolgulu",[["Porsiyon",220],["6 adet",1700]]],
  ["Magnolya","Çilekli ya da muzlu",[["Kavanoz",200],["Paket",230]]],
  ["Profiterol","",[["",90]]],
  ["Rulo Pasta","",[["",240]]],
  ["Pasta","",[["Dilim",100]]],
 ]},
 {id:"kurabiye", ad:"Kurabiyeler", hint:"Hepsi tereyağlı.", items:[
  ["Susamlı Çörek Otlu","",[["Adet",12.5],["Kg",990]]],
  ["Vanilyalı Mavi Haşhaşlı","",[["Adet",15],["Kg",990]]],
  ["Çatlak","Ceviz, üzüm, tarçın",[["Adet",30],["Kg",990]]],
  ["Brownie Kurabiye","",[["Adet",40],["Kg",1150]]],
  ["Elmalı","",[["Adet",40],["Kg",1250]]],
  ["Atom","İncir, kayısı, elma, pekmez, ceviz",[["Adet",50],["Kg",1250]]],
  ["Karışık Kurabiye Paketi","",[["Paket",300]]],
 ]},
 {id:"donuk", ad:"Dondurulmuş", hint:"Evde pişirmeye hazır. Dondurucuda saklayın.", items:[
  ["İçli Köfte","",[["Adet",100]]],
  ["Çi Börek","",[["Adet",60]]],
  ["Kayseri Mantı","",[["Yarım kg",375],["Kg",750]]],
  ["Boşnak Mantısı","",[["",210]]],
  ["Patatesli Gül Böreği","",[["Adet",70]]],
  ["Patatesli Kıymalı Gül Böreği","",[["Adet",85]]],
  ["Peynirli Gül Böreği","",[["Adet",80]]],
  ["Ispanaklı Gül Böreği","",[["Adet",80]]],
  ["Kıymalı Gül Böreği","",[["Adet",100]]],
 ]},
 {id:"icecek", ad:"İçecekler", hint:"", items:[
  ["Çay","",[["",35]]],
  ["Türk Kahvesi","",[["",100]]],
  ["Sütlü Türk Kahvesi","",[["",130]]],
  ["Büyük Türk Kahvesi","",[["",200]]],
  ["Filtre Kahve","",[["",130]]],
  ["Nescafe","",[["",130]]],
  ["Ayran","",[["",50]]],
  ["Sıkma Portakal Suyu","",[["",160]]],
  ["Limonata","",[["Limon",120],["Çilek",120]]],
  ["Su","",[["",20]]],
  ["Maden Suyu","",[["",40]]],
  ["Freşa Meyveli Soda","",[["Elmalı",60],["Limonlu",60]]],
  ["Gazoz","",[["",70]]],
  ["Kola","",[["Küçük kutu",70],["Şişe",80],["Büyük kutu",90]]],
  ["Fanta","",[["Küçük kutu",70],["Büyük kutu",90]]],
  ["Didi Limon","",[["Küçük",70],["Büyük",90]]],
  ["Didi Şeftali","",[["Küçük",70],["Büyük",90]]],
  ["Churchill","",[["",80]]],
  ["Meyve Suyu","",[["Şeftali",40],["Vişne",40]]],
  ["Süt","",[["",40]]],
 ]},
];


/* ===== Ayarlar ===== */
const ZLD = {
  WA: "905444628015",
  MASA_SAYISI: 12,
  SB_URL: "https://utniaprnvwakwfsumner.supabase.co",
  SB_KEY: "sb_publishable_LnGWWoHPM5692YmL1o-IzA_vuhx1BKV",
  // Gel Al ayarları (cafeyle netleştirilecek)
  ACILIS: 9, KAPANIS: 19,        // ilk ve son alış saati aralığı: 09:00 ile 19:00 arası
  HAZIRLIK_DK: 60,               // normal sipariş için en az hazırlık süresi
  BUYUK_HAZIRLIK_DK: 180,        // tepsi ve borcam siparişleri için
  SLOT_KAPASITE: 8,              // bir saat aralığında en fazla kaç sipariş
  GUN_SAYISI: 3,                 // bugün dahil kaç gün ilerisi seçilebilir
};

/* ===== Yardımcılar ===== */
const tl = n => (Number.isInteger(+n) ? (+n).toLocaleString("tr-TR") : (+n).toLocaleString("tr-TR",{minimumFractionDigits:1,maximumFractionDigits:2})) + " TL";
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm = s => s.toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ı/g,"i");
const store = {
  get(k, d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
const $ = id => document.getElementById(id);
let _tt;
function toast(s){ const el = $("toast"); if(!el) return; el.textContent = s; el.classList.add("on"); clearTimeout(_tt); _tt = setTimeout(() => el.classList.remove("on"), 2000); }
const itemLabel = (ad, opt) => ad + (opt ? ", " + opt : "");

/* ===== Gel Al saat aralıkları =====
   Saklama biçimi: "2026-10-04 17:00-18:00" (alfabetik sıralama = zaman sırası) */
const pad = n => String(n).padStart(2, "0");
const ymd = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const slotKey = (d, h) => `${ymd(d)} ${pad(h)}:00-${pad(h + 1)}:00`;
function parseSlot(s){
  const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):00-(\d{2}):00$/.exec(s || ""); if(!m) return null;
  const start = new Date(+m[1], +m[2] - 1, +m[3], +m[4]), end = new Date(+m[1], +m[2] - 1, +m[3], +m[5]);
  return {start, end};
}
function dayName(d){
  const t = new Date(); t.setHours(0, 0, 0, 0);
  const x = new Date(d); x.setHours(0, 0, 0, 0);
  const diff = Math.round((x - t) / 864e5);
  if(diff === 0) return "Bugün";
  if(diff === 1) return "Yarın";
  return x.toLocaleDateString("tr-TR", {weekday:"long", day:"numeric", month:"long"});
}
function slotLabel(s){
  const p = parseSlot(s); if(!p) return s || "";
  return `${dayName(p.start)} ${pad(p.start.getHours())}:00–${pad(p.end.getHours())}:00`;
}

/* ===== Ürünler ===== */
const PRODUCTS = {};
MENU.forEach(c => c.items.forEach((it, i) => {
  const key = c.id + "-" + i;
  PRODUCTS[key] = {key, cat:c.id, ad:it[0], ing:it[1], opts:it[2].map(o => ({l:o[0], p:o[1], base:o[1]}))};
}));
function applyPrices(map){
  Object.values(PRODUCTS).forEach(p => p.opts.forEach((o, j) => { const v = map[p.key + ":" + j]; o.p = (v !== undefined && v !== null) ? +v : o.base; }));
}
/* ===== Vitrin: kategori fotoğrafları ve öneriler (fotoğraflar cafenin Instagram'ından) ===== */
const KAT_FOTO = {kahvalti:"k-kahvalti", gun:"k-gun", borek:"k-borek", zeytinyagli:"k-zeytinyagli", salata:"k-salata", tatli:"k-tatli", icecek:"k-icecek"};
const ONERILER = [
  {key:"gun-2", foto:"o-zeytinyagli-tabagi", not:"Sarma, dolma ve günün zeytinyağlıları bir tabakta"},
  {key:"gun-4", foto:"o-icli-kofte", not:"Çıtır dış, bol cevizli iç"},
  {key:"tatli-4", foto:"o-baklava", not:"Cevizli, ev usulü, dilimle ya da tepsiyle"},
];
function defaultOpt(p){ const i = p.opts.findIndex(o => o.l === "Porsiyon"); return i >= 0 ? i : 0; }

/* ===== Veritabanı ===== */
const db = (window.supabase && window.supabase.createClient) ? window.supabase.createClient(ZLD.SB_URL, ZLD.SB_KEY) : null;
async function loadPrices(){
  if(!db) return;
  const {data, error} = await db.from("prices").select("key,price");
  if(error){ console.warn("fiyatlar", error.message); return; }
  const m = {}; data.forEach(r => m[r.key] = r.price); applyPrices(m);
}
function watchPrices(cb){
  if(!db) return;
  db.channel("prices").on("postgres_changes", {event:"*", schema:"public", table:"prices"}, async () => { await loadPrices(); cb && cb(); }).subscribe();
}
async function joinCampaign(name, phone){
  if(!db) throw new Error("Bağlantı yok");
  const {error} = await db.from("members").insert({name, phone});
  if(error && error.code !== "23505") throw error;   // 23505: zaten kayıtlı
}

/* ===== Menü çizici =====
   mode: "view" (sadece bakılır) | "order" (sepete eklenir)
   cart: {"key:j": qty} nesnesi, onChange: sepet değişince çağrılır */
/* Yatay kaydırılan şeritler: fareyle sürükleme ve masaüstünde ok düğmeleri
   (parmakla kaydırma tarayıcının kendisinde zaten çalışır) */
function hscroll(el){
  if(!el || el.dataset.hs) return; el.dataset.hs = "1";
  const box = document.createElement("div"); box.className = "hs";
  el.parentNode.insertBefore(box, el); box.appendChild(el);
  const mk = (dir, label) => { const b = document.createElement("button"); b.type = "button"; b.className = "hs-btn hs-" + dir; b.setAttribute("aria-label", label); b.tabIndex = -1;
    b.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${dir === "l" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}"/></svg>`;
    b.onclick = () => el.scrollBy({left: (dir === "l" ? -1 : 1) * el.clientWidth * .8, behavior: "smooth"}); box.appendChild(b); return b; };
  const L = mk("l", "Sola kaydır"), R = mk("r", "Sağa kaydır");
  const edges = () => { L.hidden = el.scrollLeft < 4; R.hidden = el.scrollLeft + el.clientWidth > el.scrollWidth - 4; };
  el.addEventListener("scroll", edges, {passive:true}); addEventListener("resize", edges); setTimeout(edges, 0); new MutationObserver(edges).observe(el, {childList:true});
  // fareyle tut-sürükle
  let down = null, moved = false;
  el.addEventListener("pointerdown", e => { if(e.pointerType !== "mouse" || e.button) return; down = {x:e.clientX, left:el.scrollLeft}; moved = false; });
  addEventListener("pointermove", e => { if(!down) return; const dx = e.clientX - down.x;
    if(Math.abs(dx) > 5 && !moved){ moved = true; el.classList.add("dragging"); }
    if(moved){ el.scrollLeft = down.left - dx; e.preventDefault(); } });
  addEventListener("pointerup", () => { if(!down) return; down = null; el.classList.remove("dragging"); });
  // sürükleme bitince altta kalan karta tıklanmış sayılmasın
  el.addEventListener("click", e => { if(moved){ e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
  el.addEventListener("dragstart", e => e.preventDefault());
}

function MenuView({root, chips, search, empty, mode, cart, onChange, onAdd, strip, picks}){
  const sel = {};
  function item(p){
    if(sel[p.key] === undefined) sel[p.key] = defaultOpt(p);
    const j = sel[p.key], o = p.opts[j], multi = p.opts.length > 1;
    let ctrl = "";
    if(mode === "order"){
      const q = cart[p.key + ":" + j] || 0;
      ctrl = q
        ? `<div class="qty" aria-label="${esc(p.ad)} adedi"><button data-dec="${p.key}" aria-label="Bir azalt">−</button><span>${q}</span><button data-inc="${p.key}" aria-label="Bir artır">+</button></div>`
        : `<button class="add" data-inc="${p.key}" aria-label="${esc(itemLabel(p.ad, o.l))} ekle"><svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button>`;
    }
    return `<article class="item" data-key="${p.key}">
      <div class="row">
        <div class="head"><h3>${esc(p.ad)}</h3><span class="dots" aria-hidden="true"></span><div class="price">${tl(o.p)}${!multi && o.l ? `<small>${esc(o.l)}</small>` : ""}</div></div>
        ${ctrl}
      </div>
      ${p.ing ? `<p class="ing">${esc(p.ing)}</p>` : ""}
      ${multi ? `<div class="portions" role="group" aria-label="${esc(p.ad)} porsiyon seçimi">${p.opts.map((x, i) =>
        `<button type="button" data-opt="${p.key}" data-i="${i}" aria-pressed="${i === j}"><b>${esc(x.l)}</b><i>${tl(x.p)}</i></button>`).join("")}</div>` : ""}
      ${multi && o.l === "Az" ? `<span class="az-note">Az porsiyon: normal porsiyonun yarısı</span>` : ""}
    </article>`;
  }
  function render(){
    const q = search ? norm(search.value.trim()) : "";
    let any = false;
    root.innerHTML = MENU.map(c => {
      const items = c.items.map((_, i) => PRODUCTS[c.id + "-" + i]).filter(p => !q || norm(p.ad + " " + p.ing).includes(q));
      if(!items.length) return "";
      any = true;
      return `<section class="cat" id="c-${c.id}" aria-labelledby="h-${c.id}">
        <h2 id="h-${c.id}">${c.ad}</h2>${c.hint ? `<p class="hint">${c.hint}</p>` : ""}
        <div class="list">${items.map(item).join("")}</div></section>`;
    }).join("");
    if(empty) empty.hidden = any;
    if(chips && !chips.children.length) chips.innerHTML = MENU.map(c => `<button type="button" class="chip" data-go="${c.id}">${c.ad}</button>`).join("");
    if(strip){
      strip.hidden = !!q;
      if(!strip.children.length) strip.innerHTML = MENU.map((c, n) => `<button type="button" class="kat${KAT_FOTO[c.id] ? "" : " nofoto"}" data-go="${c.id}">
        ${KAT_FOTO[c.id] ? `<img src="foto/${KAT_FOTO[c.id]}.webp" alt="" width="360" height="300"${n > 3 ? ' loading="lazy"' : ""}>` : `<span class="kat-ph" aria-hidden="true">${esc(c.ad[0])}</span>`}
        <span class="kat-ad">${esc(c.ad)}</span></button>`).join("");
    }
    if(picks){
      picks.hidden = !!q;
      if(!picks.querySelector(".picks-row")){ picks.innerHTML = `<h2>Önerilerimiz</h2><div class="picks-row"></div>`; hscroll(picks.querySelector(".picks-row")); }
      picks.querySelector(".picks-row").innerHTML = `${ONERILER.filter(o => PRODUCTS[o.key]).map(o => {
        const p = PRODUCTS[o.key], d = p.opts[defaultOpt(p)];
        return `<button type="button" class="pick-card" data-item="${o.key}">
          <img src="foto/${o.foto}.webp" alt="${esc(p.ad)}" width="540" height="360" loading="lazy">
          <span class="pick-t"><b>${esc(p.ad)}</b><span>${esc(o.not)}</span></span>
          <span class="pick-p">${tl(d.p)}${p.opts.length > 1 ? "’den" : ""}</span></button>`; }).join("")}`;
    }
    spy();
  }
  // Kategori kartı ya da öneriye dokunulunca listede ilgili yere kay
  function goTo(el, flash){
    if(!el) return;
    const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    jumping = Date.now() + 1200;
    window.scrollTo({top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - stickyBottom() - 12), behavior: smooth ? "smooth" : "auto"});
    if(flash){ el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); }
  }
  [strip, chips].forEach(el => el && hscroll(el));
  [strip, picks].forEach(box => box && box.addEventListener("click", e => {
    const b = e.target.closest("[data-go],[data-item]"); if(!b) return;
    if(b.dataset.go){ const c = chips && chips.querySelector(`[data-go="${b.dataset.go}"]`); c ? c.click() : goTo($("c-" + b.dataset.go)); }
    else goTo(root.querySelector(`[data-key="${b.dataset.item}"]`), true);
  }));
  function rerender(key){ const el = root.querySelector(`[data-key="${key}"]`); if(el) el.outerHTML = item(PRODUCTS[key]); }
  root.addEventListener("click", e => {
    const b = e.target.closest("button"); if(!b) return;
    if(b.dataset.opt){ sel[b.dataset.opt] = +b.dataset.i; rerender(b.dataset.opt);
      const nb = root.querySelector(`[data-opt="${b.dataset.opt}"][data-i="${b.dataset.i}"]`); nb && nb.focus(); return; }
    const key = b.dataset.inc || b.dataset.dec; if(!key || mode !== "order") return;
    const ck = key + ":" + sel[key], isNew = !cart[ck];
    cart[ck] = (cart[ck] || 0) + (b.dataset.inc ? 1 : -1);
    if(cart[ck] <= 0) delete cart[ck];
    rerender(key); onChange && onChange();
    if(b.dataset.inc && isNew && onAdd) onAdd(PRODUCTS[key], PRODUCTS[key].opts[sel[key]]);
    const f = root.querySelector(`[data-key="${key}"] ${b.dataset.inc ? "[data-inc]" : "[data-dec]"}`) || root.querySelector(`[data-key="${key}"] [data-inc]`);
    f && f.focus();
  });
  // Kategoriye git: sayfayı hesaplanan konuma kaydır. Kayma sürerken çubuğu
  // yeniden ortalama (ortalama, telefonda sayfa kaymasını yarıda keser).
  let jumping = 0, touching = 0;
  // yapışkan arama çubuğunun alt kenarı (sayfa en üstteyken de yapıştığı konuma göre)
  const stickyBottom = () => { const bar = $("bar"); return bar ? (parseFloat(getComputedStyle(bar).top) || 0) + bar.offsetHeight : 0; };
  if(chips){
    chips.addEventListener("click", e => {
      const b = e.target.closest("[data-go]"); if(!b) return;
      const s = $("c-" + b.dataset.go); if(!s) return;
      const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
      const y = s.getBoundingClientRect().top + window.scrollY - stickyBottom() - 8;
      chips.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-current", c === b));
      centerChip(b, smooth);
      jumping = Date.now() + 1200;
      window.scrollTo({top: Math.max(0, y), behavior: smooth ? "smooth" : "auto"});
    });
    const hold = () => { touching = Date.now() + 1500; };
    chips.addEventListener("touchstart", hold, {passive:true});
    chips.addEventListener("touchmove", hold, {passive:true});
    chips.addEventListener("wheel", hold, {passive:true});
    addEventListener("scrollend", () => { jumping = 0; spy(); });
  }
  function centerChip(c, smooth){
    // sadece yatay çubuğu kaydır; sayfaya dokunma
    const left = chips.scrollLeft + c.getBoundingClientRect().left - chips.getBoundingClientRect().left - (chips.clientWidth - c.offsetWidth) / 2;
    chips.scrollTo({left: Math.max(0, left), behavior: smooth ? "smooth" : "auto"});
  }
  function spy(){
    if(!chips) return;
    const bar = $("bar"); if(bar) bar.classList.toggle("stuck", window.scrollY > 120);
    if(Date.now() < jumping) return;
    const line = stickyBottom() + 24;
    const secs = [...root.querySelectorAll(".cat")];
    let cur = secs[0] && secs[0].id;
    secs.forEach(s => { if(s.getBoundingClientRect().top < line) cur = s.id; });
    // sayfa sonunda son bölüm çizgiye çıkamaz; ekranda görünen son bölümü seç
    if(innerHeight + scrollY >= document.documentElement.scrollHeight - 4)
      secs.forEach(s => { if(s.getBoundingClientRect().top < innerHeight * .6) cur = s.id; });
    chips.querySelectorAll(".chip").forEach(c => {
      const on = "c-" + c.dataset.go === cur;
      if(on && c.getAttribute("aria-current") !== "true" && Date.now() > touching) centerChip(c, false);
      c.setAttribute("aria-current", on);
    });
  }
  let tick = false;
  addEventListener("scroll", () => { if(!tick){ requestAnimationFrame(() => { spy(); tick = false; }); tick = true; } }, {passive:true});
  if(search) search.addEventListener("input", render);
  return {render, rerender};
}

function cartLines(cart){
  return Object.entries(cart).filter(([k]) => { const [key, j] = k.split(":"); return PRODUCTS[key] && PRODUCTS[key].opts[j]; })
    .map(([k, q]) => { const [key, j] = k.split(":"); const p = PRODUCTS[key], o = p.opts[j]; return {k, key, j:+j, q, p, o, sum:o.p * q}; });
}

/* Kampanya formu (masa menüsü + online sipariş) */
function bindJoinForm(){
  const f = $("joinForm"); if(!f) return;
  f.addEventListener("submit", async e => {
    e.preventDefault();
    const n = $("jn").value.trim(), p = $("jp").value.replace(/\D/g, ""), c = $("jc").checked, err = $("jerr");
    let msg = "";
    if(!n) msg = "Adınızı yazın.";
    else if(!/^(0?5\d{9}|905\d{9})$/.test(p)) msg = "Telefonu 05xx xxx xx xx biçiminde yazın.";
    else if(!c) msg = "Mesaj gönderebilmemiz için onay kutusunu işaretleyin.";
    if(msg){ err.textContent = msg; err.style.display = "block"; return; }
    const btn = f.querySelector("button"); btn.disabled = true; btn.textContent = "Kaydediliyor…";
    try{
      await joinCampaign(n, "90" + p.replace(/^90/, "").replace(/^0/, ""));
      err.style.display = "none"; f.style.display = "none";
      const d = $("jdone"); d.style.display = "block"; d.textContent = `Teşekkürler ${n}. Kampanyalar WhatsApp'ınıza gelecek.`;
    }catch(ex){
      err.textContent = "Kayıt şu an yapılamadı. İnternet bağlantınızı kontrol edip tekrar deneyin."; err.style.display = "block";
      btn.disabled = false; btn.textContent = "Kampanyalara katıl";
    }
  });
}

/* ===== Masadan sipariş (misafir) ===== */
function getGuest(){
  let g = store.get("zld_guest", null);
  if(!g || !g.id){
    const id = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
    g = {id, name:""}; store.set("zld_guest", g);
  }
  return g;
}
const ITEM_STATUS_TR = {onay:"Garson onayı bekleniyor", yeni:"Mutfağa iletildi", hazirlaniyor:"Hazırlanıyor", hazir:"Hazır", servis:"Servis edildi"};

// Masanın açık adisyonu; yoksa açar. Aynı anda iki kişi açmaya çalışırsa ikincisi mevcut olanı alır.
async function openTableOrder(masa){
  const find = () => db.from("orders").select("id").eq("kind", "masa").eq("masa", masa).eq("status", "acik").maybeSingle();
  let {data, error} = await find();
  if(error) throw error;
  if(data) return data.id;
  const ins = await db.from("orders").insert({kind:"masa", masa}).select("id").single();
  if(!ins.error) return ins.data.id;
  if(ins.error.code !== "23505") throw ins.error;
  ({data, error} = await find());
  if(error || !data) throw (error || new Error("adisyon bulunamadı"));
  return data.id;
}
// Misafir kodu: masa no + harf (1A, 1B…). Kaydedilmez; her ekranda aynı veriden hesaplanır:
// masada ilk siparişini en erken gönderen telefon A, sonraki B… (aynı anda gönderilse bile çakışmaz).
// Garsonun eklediği ürünlerde telefon yok: "Masa geneli".
const LETTERS = "ABCDEFGHIJKLMNOPRSTUVYZ";
function makeLabeler(masa, items){
  const first = {};
  items.forEach(i => { if(i.guest_id && (!first[i.guest_id] || i.created_at < first[i.guest_id])) first[i.guest_id] = i.created_at; });
  const order = Object.keys(first).sort((x, y) => first[x] < first[y] ? -1 : first[x] > first[y] ? 1 : x < y ? -1 : 1);
  const map = {}; order.forEach((g, n) => map[g] = masa + (LETTERS[n] || "-" + (n + 1)));
  return i => i.guest_id ? map[i.guest_id] : "Masa geneli";
}
async function addTableItems(masa, lines, extra){
  const orderId = await openTableOrder(masa);
  const {error} = await db.from("order_items").insert(lines.map(l => ({order_id:orderId, product_key:l.key + ":" + l.j, name:l.p.ad, option:l.o.l, price:l.o.p, qty:l.q, ...extra})));
  if(error) throw error;
  return orderId;
}
