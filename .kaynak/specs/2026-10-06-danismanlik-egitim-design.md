# Nexi Digital: danışmanlık ve eğitim konumlaması (tasarım)

Tarih: 2026-10-06. Onaylayan: Pınar Saçu Kargün (bölüm bölüm, sohbette).

## Amaç

İlk geliri ürün ya da proje işi yerine danışmanlık ve eğitimden elde etmek. Kaynak, yapay zekayla para kazanmanın dört yolunu anlatan bir video:

- FDE yaklaşımı: müşterinin yanında çalışan sistemi kurmak, sunum bırakıp gitmemek.
- Önce kanıt, sonra fiyat.
- LinkedIn'de profil, hedef liste ve mesaj ile ilk müşteri.
- 30 gün tek odak.

Başarı ölçütü: 30 gün içinde en az 1 ücretli Keşif Günü ve 1 eğitim satışı.

## Konumlama

- Birincil kitle: KOBİ'ler, yani yeme-içme (restoran, cafe) ve emlak ofisleri. İkincil kitle: bireyler (eğitim atölyesi).
- Ana cümle: "Restoran, cafe ve emlak ofisleri için yapay zeka danışmanı ve eğitmeni. Sunum yapıp gitmem; yanınızda çalışan sistemi kurarım."
- Kişi: Pınar Saçu Kargün. Adı sitede görünür, fotoğraf yok.
- Hikâye: "5 yıl doktor ve eczacılarla çalışarak ilaç tanıtımı ve satışı yaptım (Abdi İbrahim, 2013-2018, Sakarya). Bugün aynı ilişki ve ikna becerisini yapay zekayla birleştiriyor, işletmelere çalışan sistemler kuruyorum." "Kapı çalmak" ifadesi kullanılmaz.
- Kanıtlar: ZLD sistemi (canlı, cafe izin verdi), Subly (canlı ürün), GlowTips (182 video, 850 bin+ izlenme, 3,9 bin abone). Uydurma referans ya da yorum kullanılmaz.

## Paketler ("...'den başlayan" fiyat, KDV hariç)

| Paket | İçerik | Başlangıç |
|---|---|---|
| Keşif Günü | 1 gün yerinde/online; zaman kaybı haritası, o gün 1 hızlı otomasyon, 30 günlük yol haritası. Ücret sonraki pakete sayılır. | 7.500 ₺ |
| 4 Haftalık Kurulum | Haftada 4 saat yanında; 1-2 çalışan sistem (QR menü/sipariş, müşteri listesi/kampanya, ilan içerik üretimi, WhatsApp yanıt asistanı); ekip eğitimi dahil | 35.000 ₺ |
| Aylık Yanınızda | Ayda 8 saat; yeni otomasyon, ölçüm, WhatsApp öncelikli destek | 15.000 ₺/ay |
| Ekip Eğitimi | 4 hafta × 2 saat, en fazla 10 kişi; çalışanlar yapay zekayı kendi işinde kullanır | 25.000 ₺ |
| Bireysel Atölye | Yapay zekayla içerik ve video üretimi; 4 haftalık küçük grup ya da birebir | 2.500 ₺/kişi |

Kâr payı modeli şimdilik yok.

## Site (aynı repo, aynı build hattı)

Korunan: node-N logo, kobalt/mandalina/güneş paleti, Unbounded + Hanken Grotesk, sistem teması, kaydırmayla açılan bölümler, Formspree ve WhatsApp, CNAME, `zld/` klasörü.

Sayfa sırası:

1. **Hero:** "Restoran, cafe ve emlak ofislerine yapay zekayı yanınızda kuruyorum." Alt metin: "Sunum değil, çalışan sistem. Danışmanlık ve ekip eğitimi; Sakarya'da yerinde, Türkiye'de online." CTA: "Ön görüşme iste" ve "Paketleri gör".
   - Canlı demo, "Keşif Günü" ekranı. İki sekme: Cafe ve Emlak ofisi.
   - Haftalık iş listesi görünür. Tarayıcı satırların üzerinden geçer ve zaman kaybını işaretler.
   - Ardından kurulan sistem belirir ve kazanılan saat sayaçla artar.
   - Sahneler kendi kendine döner; tıklanınca durur. Ekran dışındayken duraklar.
   - Rakamlar "örnek" etiketlidir.
2. **Sektörler:** Yeme-içme ve Emlak kartları (sorunlar ve kurulan sistemler). Altında "Bireyseller için" şeridi.
3. **Nasıl çalışırım:** Keşif, Kurulum, Ekip eğitimi, Takip. Karşılaştırma: klasik danışman ve ben.
4. **Paketler:** Beş paket. Not: "Keşif Günü ücreti pakete sayılır."
5. **Eğitim:** Ekip eğitiminin 4 haftalık içeriği ve bireysel atölye içeriği (GlowTips kanıt olarak).
6. **Yaptıklarım:** ZLD, Subly, GlowTips. Müşteri ağı ve segment demosu kaldırılır.
7. **Ben kimim:** Ad, hikâye, LinkedIn bağlantısı.
8. **SSS:** Ekibim teknik bilmiyor; Sakarya dışı; KVKK ve veri; hangi araçlar; aylık ücret biter mi.
9. **İletişim:** Formda seçim kutuları paket listesi olur.

Kaldırılanlar: 4 sekmeli ajans hero demosu (YouTube, sosyal, site, müşteri) ve hizmetler bento bölümü. Bu işler kurulum paketinin içinde anılır.

EN sayfası aynı yapıda, çevrilmiş metinlerle. Meta, OG başlık ve açıklamaları güncellenir. OG görselleri yeni başlıkla yeniden üretilir.

Doğrulama: Playwright gerçek zamanlı ekran görüntüleri, 320-1440 px, açık ve koyu tema, TR ve EN. Yayın (push) için kullanıcının onayı gerekir.

## LinkedIn ve 30 günlük plan (Claude Docs belgesi)

Tek belge, kopyala-yapıştır yapılabilir metinlerle:

- Ad düzeltmesi: "Pinar" yerine "Pınar".
- Başlık: "Restoran, cafe ve emlak ofislerine yapay zeka danışmanlığı ve ekip eğitimi | Nexi Digital kurucusu | 5 yıl ilaç tanıtımı ve satışı".
- Hakkında metni, Nexi Digital deneyimi (2024'ten bugüne) ve yeniden yazılmış Abdi İbrahim açıklaması.
- Öne Çıkanlar, Hizmetler, Yetenekler listesi.
- Telefon düzeltmesi: profilde 0535875848 yazıyor; doğrusu 0535 875 88 48.
- Kapak görseli: 1584×396 PNG, site renkleriyle.
- İlk 5 gönderi taslağı.
- 30 gün:
  - 1. hafta: profil ve site; 100 kişilik hedef liste.
  - 2-3. hafta: günde 15-20 bağlantı, 3 adımlı DM şablonları (LinkedIn ve Instagram), yüz yüze ziyaret, ZLD referansı.
  - 4. hafta: görüşme ve teklif.
- Günlük sayaç tablosu, ön görüşme soruları, teklif e-postası şablonu.

## Kapsam dışı

Kâr payı sözleşmesi, ayrı `/egitim` sayfası, e-posta otomasyonu (domain ısınması), ücretli reklam.
