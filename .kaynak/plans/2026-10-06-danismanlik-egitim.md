# Danışmanlık ve eğitim konumlaması: uygulama planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Nexi Digital sitesini danışmanlık ve eğitim odaklı olarak yeniden kurmak, LinkedIn ve 30 günlük planı tek bir Claude Docs belgesinde teslim etmek.

**Architecture:** Site statik kalır. `.kaynak/template.html` ve `.kaynak/build.py` (TR/EN sözlükleri) üzerinden `index.html` ve `en.html` üretilir. Hero'daki 4 sekmeli sahne, aynı sekme, zamanlayıcı ve IntersectionObserver iskeletini kullanan 2 sekmeli "Keşif Günü" sahnesiyle değiştirilir. Müşteri ağı demosu ve hizmetler bento bölümü silinir. LinkedIn ve plan içeriği site dışında, bir Claude Docs belgesinde durur.

**Tech Stack:** HTML/CSS/vanilla JS, Python 3 build, Playwright (scratchpad/pw, channel chrome), Claude Docs MCP.

**Spec:** `.kaynak/specs/2026-10-06-danismanlik-egitim-design.md`

## Global Constraints

- Logo (node-N), palet (kobalt #2E4BF0, mandalina #F26B2E, güneş #FFC94D, zemin #F5F6FA, gece #0B1024), Unbounded + Hanken Grotesk değişmez.
- Fotoğraf yok. Ad "Pınar Saçu Kargün".
- Paket fiyatları: Keşif Günü 7.500 ₺, 4 Haftalık Kurulum 35.000 ₺, Aylık Yanınızda 15.000 ₺/ay, Ekip Eğitimi 25.000 ₺, Bireysel Atölye 2.500 ₺/kişi. Hepsi "...'den başlayan" ve KDV hariç.
- CTA etiketi her yerde tek: TR "Ön görüşme iste", EN "Book a free call".
- Uzun tire (em-dash) yok. Türkçe karakterler eksiksiz. Uydurma referans ya da yorum yok. Demo rakamları "örnek" etiketli.
- "Kapı çalmak" ifadesi kullanılmaz.
- `CNAME`, `zld/` ve Formspree `mkodyrzb` korunur. WhatsApp 905358758848.
- Push yalnızca kullanıcı onayıyla yapılır.

## Review Focus

- 320 px telefonda hero sahnesi: iş listesi satırları taşmamalı, sayaç okunmalı. → Task 4 ekran görüntüsü 320 px.
- `prefers-reduced-motion`: sahne dönmemeli, son durum (kurulan sistem ve saat) statik görünmeli. → Task 2 adım 4.
- Klavye: sahne sekmeleri ok tuşlarıyla gezilmeli. Tıklama ya da tuş otomatik dönmeyi durdurmalı. → Task 2 adım 4.
- Eski çapalar (`#hizmetler`, `#ornek`, `#nasil`) dışarıdan link almış olabilir. `#nasil` korunur, `#hizmetler` yeni Sektörler bölümünün id'si olur. → Task 3.
- Koyu tema kontrastı: fiyat ve "örnek" etiketleri WCAG AA'yı geçmeli. → Task 4.

---

### Task 1: LinkedIn + 30 günlük plan belgesi (Claude Docs) ve kapak görseli

**Files:**
- Create: Claude Docs belgesi "Nexi Digital: İlk Gelir Planı"
- Create: `~/Desktop/Uygulamalar/Nexi Marka Dosyaları/linkedin-kapak.png` (1584×396)

- [ ] **Adım 1:** Belge iskeletini oluştur. Her bölüm için bir `pending` bloğu olacak: LinkedIn (ad, başlık, Hakkında, deneyim, öne çıkanlar, hizmetler, yetenekler, düzeltmeler), İlk 5 gönderi, 30 gün (hafta hafta), DM şablonları (LinkedIn ve Instagram), Ön görüşme soruları, Teklif e-postası, Günlük sayaç.
- [ ] **Adım 2:** Bölümleri spec'teki metinlerle doldur. Başlık 220 karakteri, Hakkında 2.600 karakteri geçmemeli. Sayaç tablosunun sütunları: Gün, Bağlantı, Mesaj, Yanıt, Görüşme, Teklif, Kapanış.
- [ ] **Adım 3:** Kapak görselini HTML olarak yaz ve Playwright ile 1584×396 PNG'ye çevir. İçerik: node-N logo ve ana cümle. Sol alttaki ~400 px'lik profil fotoğrafı alanı boş kalır.
- [ ] **Adım 4:** Doğrula. Belgeyi oku ve şunlara bak: "TBD" yok, fiyatlar Global Constraints ile aynı, telefon 0535 875 88 48. PNG'yi görsel olarak kontrol et.

### Task 2: Hero, "Keşif Günü" sahnesi

**Files:**
- Modify: `.kaynak/template.html` (hero, `#stage` ve sahne JS'i, satır ~690-790 ve ~1249-1310)
- Modify: `.kaynak/build.py` (`render()` içinde `ticker`, `socCapText`, `noteVideo` ve `WAVE` artık kullanılmıyor)

**Interfaces:**
- Produces: `TR_JS.notes` / `EN_JS.notes` anahtarları `{"cafe": str, "emlak": str}`. Sahne id'leri `sc-cafe` ve `sc-emlak`. `[[noteCafe]]` build'de doldurulur.

- [ ] **Adım 1:** Sahne HTML'i. Her sahnede 4 iş satırı olacak: ad + "N sa/hafta", işaretlenen satır `.loss`. Altında `.fix` kartı (kurulan sistem) ve `data-count` sayaçlı "−N sa/hafta" göstergesi.
  - Cafe satırları: WhatsApp sipariş yazışması 6 sa, Menü/fiyat güncelleme 2 sa, Kampanya duyurusu 3 sa, Gün sonu hesap 2 sa.
  - Emlak satırları: İlan metni ve görsel 5 sa, Müşteriye dönüş 4 sa, Sosyal medya paylaşımı 3 sa, Portföy takibi 2 sa.
  - Kurulan sistemler: Cafe "QR menü + sipariş paneli, −9 sa/hafta". Emlak "İlan içerik üretimi + takvim, −8 sa/hafta".
  - Etiket: "Örnek Keşif Günü".
- [ ] **Adım 2:** JS. Var olan `showScene(i, fromUser)` döngüsünü 2 sahneye indir, aralık 7 saniye. Tarama: satırlara sırayla `.scan` ekle (`element.animate`), ardından `.loss`, ardından `.fix` görünür olsun ve sayaç çalışsın.
- [ ] **Adım 3:** `build.py` dosyasında `render()` içindeki kaldırılan anahtarları temizle. `python3 .kaynak/build.py` çıktısı "wrote index.html" ve "wrote en.html" olmalı, `unfilled` hatası olmamalı.
- [ ] **Adım 4:** Doğrula (Playwright, `scratchpad/pw`):
  - 1440 ve 320 px'te 0, 3 ve 8. saniye ekran görüntüleri.
  - `reducedMotion: 'reduce'` ile tek kare: son durum görünür, döngü yok.
  - ArrowRight ile sekme değişiyor ve dönme duruyor.
- [ ] **Adım 5:** Commit: `feat: Keşif Günü hero stage`

### Task 3: Bölümler ve metinler (TR + EN)

**Files:**
- Modify: `.kaynak/template.html` (`#hizmetler` bento, `#isler` içindeki `#ornek`/viz, `#nasil`, `#kimler`, `#sss`, `#iletisim` ve nav; ağ JS'i satır ~1071-1203 ve `.svc` spotlight silinir)
- Modify: `.kaynak/build.py` (TR/EN sözlükleri baştan, kullanılmayan anahtarlar silinir; `EN_JS.segs` ve `TR_JS.segs` silinir)

**Interfaces:**
- Consumes: Task 2'deki sahne anahtarları.
- Produces: Bölüm id'leri `#hizmetler` (Sektörler), `#nasil`, `#paketler`, `#egitim`, `#isler`, `#hakkimda`, `#sss`, `#iletisim`. Nav bu sırada.

- [ ] **Adım 1:** Sektörler bölümü (`#hizmetler`). İki kart, Yeme-içme ve Emlak: 3 sorun ve 3 kurulan sistem. Altında "Bireyseller için" şeridi `#egitim`'e bağlanır.
- [ ] **Adım 2:** `#nasil`. 4 adım (Keşif, Kurulum, Ekip eğitimi, Takip) ve "Klasik danışman / Ben" karşılaştırması (2 sütun, 3 satır).
- [ ] **Adım 3:** `#paketler`. 5 kart: ad, kime, 3 madde, "…'den" fiyat (count-up yok, statik), "Ön görüşme iste" butonu. Butonlar `#iletisim`'e gider ve ilgili paket kutusunu işaretler (`?paket=` değil, `data-pick`). Not satırı: "Keşif Günü ücreti pakete sayılır. Fiyatlar KDV hariçtir."
- [ ] **Adım 4:** `#egitim`. Ekip eğitimi:
  - Hafta 1: Yapay zekayla tanışma ve güvenli kullanım
  - Hafta 2: Müşteri mesajı ve metin
  - Hafta 3: Görsel ve içerik
  - Hafta 4: Kendi iş akışını kurma
  
  Bireysel atölye: içerik fikri, senaryo, seslendirme ve kurgu, yayın takvimi. Kanıt satırı: GlowTips 850 bin+ izlenme.
- [ ] **Adım 5:** `#isler`. Sıra ZLD, Subly, GlowTips. `#ornek` makalesi ve viz kaldırılır.
- [ ] **Adım 6:** `#hakkimda`. Ad, spec'teki hikâye cümlesi, LinkedIn bağlantısı `https://www.linkedin.com/in/pinar-sa%C3%A7u-karg%C3%BCn-73a41491/`. `#kimler` (uygun / uygun değil) KOBİ'ye göre yeniden yazılır ve bu bölümde kalır.
- [ ] **Adım 7:** `#sss`. Spec'teki 5 soru ve "yapay zeka gerçek uzmanlık mı" sorusu korunur. `#iletisim` seçim kutuları: 5 paket ve "Henüz emin değilim".
- [ ] **Adım 8:** Meta: `title`, `metaDesc`, `ogTitle` TR ve EN yeni konumlamaya göre. EN metinleri TR'nin çevirisi ("Sakarya on-site, Turkey-wide online").
- [ ] **Adım 9:** Build çalıştır: `unfilled` hatası olmamalı. Kalıntı kontrolü: `grep -c "Papatya\|vizSvg\|tab-video" index.html en.html` sonucu 0 olmalı.
- [ ] **Adım 10:** Commit: `feat: reposition site for consulting and training`

### Task 4: OG görselleri ve son doğrulama

**Files:**
- Modify: `img/og-tr.png`, `img/og-en.png` (1200×630, yeni başlık)

- [ ] **Adım 1:** OG görsellerini yeni hero başlığıyla yeniden üret. Eski görsellerin üretim yöntemini kullan: HTML'den Playwright ile.
- [ ] **Adım 2:** Tam sayfa ekran görüntüleri: 320, 768 ve 1440 px; açık ve koyu tema; TR ve EN. Yatay kaydırma olmamalı (`scrollWidth <= innerWidth`).
- [ ] **Adım 3:** Kontrast kontrolü. Fiyat, "örnek" etiketi ve alt metin renkleri iki temada da en az 4.5:1 olmalı (JS ile hesapla).
- [ ] **Adım 4:** $10K kontrol listesinin 8 maddesini tek tek gözden geçir. Sorunları düzelt ve tekrar build et.
- [ ] **Adım 5:** Commit: `chore: new OG images`. Ardından kullanıcıya ekran görüntülerini göster ve push için onay iste.
