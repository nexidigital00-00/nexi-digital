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
  ["Su Böreği","",[["Kg",1050]]],
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
function MenuView({root, chips, search, empty, mode, cart, onChange, onAdd}){
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
        <div class="name"><h3>${esc(p.ad)}</h3>${p.ing ? `<p class="ing">${esc(p.ing)}</p>` : ""}</div>
        <div class="price">${tl(o.p)}${!multi && o.l ? `<small>${esc(o.l)}</small>` : ""}</div>
        ${ctrl}
      </div>
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
    spy();
  }
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
    const left = c.offsetLeft - (chips.clientWidth - c.offsetWidth) / 2;
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
