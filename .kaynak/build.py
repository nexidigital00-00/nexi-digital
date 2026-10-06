import json, re, sys, pathlib

HERE = pathlib.Path(__file__).parent
SITE = HERE.parent
tpl = (HERE / "template.html").read_text(encoding="utf-8")


def logo(uid):
    return (
        f'<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="nxg-{uid}" x1="0" y1="0" x2="1" y2="1">'
        '<stop offset=".2" stop-color="#4A67FF"/><stop offset=".8" stop-color="#FF7A3D"/></linearGradient></defs>'
        '<path class="mk-line" d="M24 20v60M24 20l52 60M76 20v60"/>'
        '<circle class="mk-node mk-c" cx="24" cy="20" r="10"/><circle class="mk-node mk-c" cx="24" cy="80" r="10"/>'
        '<circle class="mk-node mk-t" cx="76" cy="20" r="10"/><circle class="mk-node mk-t" cx="76" cy="80" r="10"/>'
        f'<circle class="mk-node" cx="50" cy="50" r="12.5" fill="url(#nxg-{uid})"/></svg>'
    )


TR = {
    "lang": "tr", "selfFile": "", "ogLocale": "tr_TR", "ogLocaleAlt": "en_US",
    "title": "KOBİ'ler için Yapay Zeka Danışmanlığı ve Ekip Eğitimi | Nexi Digital",
    "metaDesc": "KOBİ'ler için yapay zeka danışmanlığı, otomasyon ve ekip eğitimi. Önce sorununuzu birlikte belirliyor, sonra çözümü kurup ekibinize öğretiyorum. Ön görüşme ücretsiz.",
    "ogTitle": "Nexi Digital: Sorununuzu bulup yapay zekayla yanınızda çözüyorum",
    "skip": "İçeriğe geç", "homeHref": "./", "homeLabel": "Nexi Digital ana sayfa", "navLabel": "Ana menü",
    "altHref": "en.html", "altLang": "en", "altLabel": "English version", "altShort": "EN", "menuOpen": "Menüyü aç",
    "navSectors": "Sektörler", "navPackages": "Paketler", "navEdu": "Eğitim", "navWork": "İşler", "navAbout": "Hakkımda",
    "cta": "Ön görüşme iste",

    # Hero
    "h1": "İşletmenizin sorununu bulup yapay zekayla yanınızda çözüyorum.",
    "heroLede": "Orta ve büyük ölçekli KOBİ'lere danışmanlık ve ekip eğitimi. Önce sorunu birlikte belirliyor, sonra çalışan çözümü kuruyoruz. Sakarya'da yerinde, Türkiye'de online.",
    "heroCta2": "Paketleri gör",
    "stageLabel": "Örnek seç", "tabCafe": "Cafe", "tabEmlak": "Emlak ofisi",
    "kSample": "Örnek Keşif Günü", "kBuilt": "Kurulan sistem", "hrs": "sa", "hrsWeek": "sa/hafta",
    "cafeWeek": "Bir cafenin haftası",
    "cafe1": "WhatsApp'tan sipariş yazışması", "cafe2": "Menü ve fiyat güncelleme", "cafe3": "Kampanya duyurusu", "cafe4": "Gün sonu hesap ve kasa",
    "cafeFix": "QR menü, masadan sipariş ve kasa ekranı", "cafeSave": "9",
    "emlakWeek": "Bir emlak ofisinin haftası",
    "emlak1": "İlan metni ve görsel hazırlama", "emlak2": "Müşteriye geri dönüş", "emlak3": "Sosyal medya paylaşımı", "emlak4": "Portföy takibi",
    "emlakFix": "İlan içerik üretimi ve paylaşım takvimi", "emlakSave": "8",
    "tickerLabel": "Kurduğum ve öğrettiğim şeyler",
    "ticker": ["Keşif Günü", "QR menü ve sipariş", "Müşteri listesi ve kampanya", "İlan içerik üretimi", "WhatsApp yanıt asistanı", "Ekip eğitimi", "Bireysel atölye"],

    # Sectors
    "secTitle": "Sektör değil, sorun önemli",
    "secLede": "Her işletmeye aynı aracı satmıyorum. Şimdiye kadar yeme-içme ve emlakta çalıştım; aşağıda neler kurduğumu görebilirsiniz. Sektörünüz farklıysa yöntem aynı: önce sorununuzu birlikte belirliyoruz.",
    "probLabel": "Sık gördüğüm", "buildLabel": "Kurduğum",
    "foodT": "Restoran ve cafeler", "foodTag": "Çalıştığım alan",
    "food1": "Siparişler WhatsApp'ta kayboluyor", "food2": "Menü ve fiyat elle güncelleniyor", "food3": "Gelen müşteri bir daha aranmıyor",
    "foodB1": "QR menü ve masadan sipariş", "foodB2": "Mutfak, garson ve kasa ekranları", "foodB3": "Müşteri listesi ve kampanya mesajları",
    "foodLink": "Canlı cafe sistemini incele",
    "estateT": "Emlak ofisleri", "estateTag": "Çalıştığım alan",
    "anyT": "Sizin sektörünüz", "anyTag": "Üretim, perakende, sağlık, eğitim, hizmet",
    "anyP": "Orta ve büyük ölçekli KOBİ'lerde sorunlar sektörden çok birbirine benziyor: elle yapılan tekrar eden işler, dağınık müşteri talepleri, saatler alan raporlar. Sorununuzu anlatın, birlikte değerlendirelim.",
    "any1": "Teklif, fatura ve raporlar elle hazırlanıyor", "any2": "Müşteri talepleri e-posta ve WhatsApp'ta dağılıyor", "any3": "Ekip yapay zekayı ya hiç ya da rastgele kullanıyor",
    "anyB1": "Teklif ve rapor otomasyonu", "anyB2": "Talep toplama ve yanıt asistanı", "anyB3": "Ekibe özel yapay zeka kullanım düzeni",
    "anyHowLabel": "Nasıl başlıyoruz", "anyH1": "Ön görüşmede sorunu birlikte belirliyoruz", "anyH2": "Soruna uygun çözümü konuşuyoruz", "anyH3": "Mantıklıysa kuruyor ve ekibe öğretiyorum",
    "anyLink": "Sorununuzu anlatın",
    "estate1": "Her ilan için metin ve görsel baştan", "estate2": "Sosyal medya haftalarca boş kalıyor", "estate3": "Müşteriye geri dönüş gecikiyor",
    "estateB1": "Fotoğraftan ilan metni ve dikey video", "estateB2": "Haftalık paylaşım takvimi", "estateB3": "Sık sorulara WhatsApp yanıt asistanı",
    "estateLink": "Ofisiniz için Keşif Günü isteyin",
    "indivTag": "Bireyseller için", "indivText": "İçerik üreticisi ya da serbest çalışan mısınız? Yapay zekayla içerik ve video üretimi atölyesine bakın.",

    # How I work
    "whatTitle": "Nasıl çalışıyorum",
    "whatBig": "Sunum yapıp gitmiyorum. <strong>İşletmenizin yanına oturuyor, çalışan sistemi kuruyor ve ekibinize öğretiyorum.</strong>",
    "p1t": "Ön görüşme", "p1p": "20 dakikada sorununuzu dinliyor, neyin çözülebileceğini birlikte belirliyoruz.", "p1tag": "Ücretsiz",
    "p2t": "Keşif Günü", "p2p": "Sorunun yerinde haritasını çıkarıyor, çözümü netleştiriyor ve aynı gün ilk otomasyonu kuruyorum.",
    "p3t": "Kurulum ve eğitim", "p3p": "Çalışan sistemi kuruyor, kullanacak kişilere uygulamalı öğretiyorum. Kimse bana bağımlı kalmıyor.",
    "p4t": "Takip", "p4p": "Kazanılan saati birlikte ölçüyor, işe yaramayanı değiştiriyoruz.",
    "cmpLabel": "Klasik danışmanlık ile benim yaklaşımımın karşılaştırması",
    "cmpOld": "Klasik danışmanlık", "cmpNew": "Benim yaklaşımım",
    "cmpO1": "Sunum ve rapor bırakır", "cmpN1": "Çalışan sistemi kurar",
    "cmpO2": "Uygulamak size kalır", "cmpN2": "Ekip kullanana kadar yanınızdayım",
    "cmpO3": "Sonuç aylar sonra", "cmpN3": "İlk otomasyon Keşif Günü'nde",
    "fdeNote": "Bu yaklaşımın teknoloji dünyasındaki adı \"forward deployed engineer\": müşterinin içinde, sahada sistem kuran kişi. Yapay zeka bunu küçük işletmeler için de mümkün kıldı.",

    # Packages
    "packTitle": "Danışmanlık ve eğitim paketleri",
    "packLede": "Fiyatlar başlangıç fiyatıdır. Kesin teklif, 20 dakikalık ücretsiz ön görüşmeden sonra netleşir.",
    "packBiz": "İşletmeler için", "packEdu": "Eğitim",
    "from": "başlangıç", "perMonth": "aylık, başlangıç", "perPerson": "kişi başı",
    "k1badge": "Buradan başlayın", "k1t": "Keşif Günü", "k1price": "7.500 ₺",
    "k1for": "Nereden başlayacağını bilmeyen işletmeler için tek günlük başlangıç.",
    "k1a": "Zaman kaybı haritası", "k1b": "Aynı gün kurulan 1 hızlı otomasyon", "k1c": "30 günlük yol haritası",
    "k2t": "4 Haftalık Kurulum", "k2price": "35.000 ₺",
    "k2for": "En çok saat yiyen işi kalıcı olarak çözmek isteyenler için.",
    "k2a": "Haftada 4 saat yanınızda", "k2b": "1-2 çalışan sistem", "k2c": "Ekip eğitimi dahil",
    "k3t": "Aylık Yanınızda", "k3price": "15.000 ₺",
    "k3for": "Kurulumdan sonra büyümeye devam etmek isteyenler için.",
    "k3a": "Ayda 8 saat", "k3b": "Yeni otomasyon ve ölçüm", "k3c": "WhatsApp'tan öncelikli destek",
    "k4t": "Ekip Eğitimi", "k4price": "25.000 ₺",
    "k4for": "Çalışanlarının yapay zekayı kendi işinde kullanmasını isteyen işletmeler için.",
    "k4a": "4 hafta, haftada 2 saat", "k4b": "En fazla 10 kişi", "k4c": "Kendi işinizden örneklerle",
    "k5t": "Bireysel Atölye", "k5price": "2.500 ₺",
    "k5for": "Yapay zekayla içerik ve video üretmek isteyen bireyler için.",
    "k5a": "4 haftalık küçük grup", "k5b": "Ya da birebir", "k5c": "Kendi kanalımdan gerçek örnekler",
    "packNote": "Keşif Günü ücreti, sonraki paketinizin ücretinden düşülür. Fiyatlara KDV dahil değildir.",

    # Education
    "eduTitle": "Şirketler için yapay zeka eğitimi",
    "eduLede": "Araç anlatmıyorum, iş yaptırıyorum. Her hafta kendi işinizden bir görevi yapay zekayla birlikte bitiriyoruz.",
    "week": "Hafta",
    "eduTeamT": "Ekip eğitimi", "eduTeamFor": "İşletme ekipleri için, 4 hafta, haftada 2 saat.",
    "ew1t": "Tanışma ve güvenli kullanım", "ew1p": "Hangi iş yapay zekaya verilir, hangisi verilmez; müşteri verisi nasıl korunur.",
    "ew2t": "Müşteri mesajı ve metin", "ew2p": "WhatsApp yanıtları, ilan ve menü metinleri, kampanya duyuruları.",
    "ew3t": "Görsel ve içerik", "ew3p": "Ürün ve ilan fotoğrafından paylaşım, kısa video ve kapak.",
    "ew4t": "Kendi iş akışınız", "ew4p": "Her çalışan kendi tekrar eden işi için bir akış kurar ve sunar.",
    "eduSoloT": "Bireysel atölye", "eduSoloFor": "İçerik üretmek isteyen bireyler için, 4 hafta.",
    "es1t": "İçerik fikri ve konu", "es1p": "İzlenecek konuyu bulmak, rakip kanalları okumak.",
    "es2t": "Senaryo ve seslendirme", "es2p": "Kısa video senaryosu ve yapay zeka sesi.",
    "es3t": "Görsel ve kurgu", "es3p": "Dikey format, altyazı, kapak ve kesim.",
    "es4t": "Yayın takvimi", "es4p": "Düzenli paylaşım ve sonuçları okumak.",
    "eduProof": "izlenme: atölyede anlattığım yöntemle kendi kanalımda aldığım sonuç",

    # Work
    "workTitle": "Kurduğum yapay zeka işleri",
    "workLede": "Anlattığım her şeyi önce kendim yaptım. Biri bir cafe için kuruldu ve canlı, ikisi kendi ürünüm.",
    "w3kind": "Müşteri işi, Sakarya'da bir ev yemekleri kafesi",
    "w3p": "Masadan QR ile sipariş, garson, mutfak ve kasa ekranları, kişi kişi hesap ve gelip alınan siparişler için Gel Al uygulaması. Hepsi aynı anda, canlı güncellenir.",
    "w3f1": "birbirine canlı bağlı ekran", "w3f2": "mağazadan indirilecek uygulama", "w3f3": "porsiyon seçeneği: az, porsiyon, kilo",
    "zldCta": "Masa menüsünü dene",
    "w3Title": "QR sipariş ve mutfak sistemi",
    "zldAltDesk": "Kafenin mutfak ekranı: masa, Gel Al ve Yemeksepeti siparişleri, saat yaklaşınca uyarılar",
    "zldAltPhone": "Kafenin masadaki QR menüsü",
    "w1kind": "Kendi ürünüm, yayında",
    "w1p": "TikTok, Reels ve Shorts içerik üreticileri için watermark'sız altyazı aracı. Fikirden canlı ürüne kadar kendim geliştirdim.",
    "w1f1": "dile altyazı çevirisi", "w1f2": "watermark, ücretsiz planda bile", "w1f3": "ücretsiz video, her ay",
    "sublyCta": "Subly'yi ücretsiz dene",
    "sublyAltDesk": "Subly ana sayfası: videona watermark'sız altyazı ekleme ekranı", "sublyAltPhone": "Subly'nin telefondaki görünümü",
    "w0kind": "Kendi yüzsüz kanalım",
    "w0p": "Güzellik ve estetik temalı \"This or That\" Shorts kanalı. Konudan yüklemeye kadar üretimi yapay zeka ajanlarıyla kurdum; Haziran 2024'ten bu yana 182 video yayınlandı.",
    "w0f1": "video yayında", "w0f2n": "850 bin+", "w0f2": "toplam izlenme", "w0f3n": "3,9 bin", "w0f3": "abone",
    "ytCta": "Kanalı YouTube'da aç", "ytThumbAlt": "GlowTips kanalından bir Shorts kapağı",
    "newTab": "(yeni sekmede açılır)",

    # About + fit
    "aboutKind": "Nexi Digital kurucusu, Sakarya",
    "aboutBig": "5 yıl doktor ve eczacılarla çalışarak ilaç tanıtımı ve satışı yaptım.",
    "aboutP": "Abdi İbrahim'de geçen bu yıllar bana güven kurmayı, teknik bir konuyu sade anlatmayı ve düzenli takiple sonuç almayı öğretti. Bugün aynı ilişki ve ikna becerisini yapay zekayla birleştiriyor, işletmelere çalışan sistemler kuruyorum.",
    "liCta": "LinkedIn'de bağlantı kurun",
    "fitYesT": "Birlikte çalışmamız mantıklı, eğer",
    "fitNoT": "Doğru adres değilim, eğer",
    "y1": "Orta ya da büyük ölçekli bir KOBİ yönetiyorsanız.",
    "y2": "Aynı işi her hafta elle yapmaktan yorulduysanız.",
    "y3": "Ekibinizin yeni bir şeyi öğrenmeye birkaç saati varsa.",
    "n1": "Rapor alıp çekmeceye koymak istiyorsanız.",
    "n2": "Takipçi ya da beğeni satın almak istiyorsanız.",
    "n3": "Her şeyin bir gecede bitmesini bekliyorsanız.",

    # FAQ
    "faqTitle": "Sık sorulanlar",
    "objQ": "Bunu yapay zekayla mı yapıyorsunuz? O zaman gerçek bir uzmanlık mı bu?",
    "objA": "<strong>Gerçek bir uzmanlık.</strong> Aracı açmak işin kolay kısmı. Hangi işin yapay zekaya verileceğini, ekibin onu gerçekten kullanacağı şekilde nasıl kurulacağını bilmek deneyim ister. Bunu iddia etmiyorum, <a class=\"inlineLink\" href=\"#isler\">yaptığım işlerde</a> gösteriyorum.",
    "q1": "Ekibim teknolojiden anlamıyor, yine de olur mu?",
    "a1": "Olur. Bu yüzden eğitim kurulumun parçası. Ekranları tek dokunuşla çalışacak şekilde kuruyorum ve ekip alışana kadar yanınızdayım.",
    "q2": "Sakarya dışında çalışıyor musunuz?",
    "a2": "Evet. Sakarya ve çevresinde yerinde, Türkiye'nin her yerinde online çalışıyorum. Keşif Günü online da yapılabiliyor.",
    "q3": "Müşteri verilerim ne oluyor?",
    "a3": "Veriler yalnızca sizin işiniz için, sizin hesaplarınızda kullanılır ve üçüncü kişiyle paylaşılmaz. KVKK'ya uygun aydınlatma metni ve onay adımlarını kurulumda birlikte hazırlıyoruz.",
    "q4": "Hangi araçları kullanıyorsunuz?",
    "a4": "İşe göre seçiyorum: Claude ve ChatGPT gibi yapay zeka modelleri, WhatsApp Business, Google araçları ve gerektiğinde size özel küçük web uygulamaları. Lisans ve hesaplar sizin adınıza açılır.",
    "q5": "Aylık ücret ne zaman biter?",
    "a5": "İstediğiniz zaman. Aylık Yanınızda paketi ay ay devam eder, taahhüt yok. Kurulan sistemler ayrıldığınızda da sizde kalır.",
    "q7": "Yapay zeka danışmanlığı ne kadar tutar?",
    "a7": "Ön görüşme ücretsiz. Keşif Günü 7.500 ₺, 4 haftalık kurulum 35.000 ₺, Aylık Yanınızda 15.000 ₺, ekip eğitimi 25.000 ₺ ve bireysel atölye kişi başı 2.500 ₺'den başlar. Fiyatlara KDV dahil değildir; kesin teklif ön görüşmeden sonra netleşir.",
    "q8": "Nexi Digital nedir?",
    "a8": "Nexi Digital, kurduğum yapay zeka danışmanlığı ve ekip eğitimi işi. Ben Pınar Saçu Kargün; orta ve büyük ölçekli KOBİ'lerde önce sorunu birlikte belirliyor, sonra çalışan çözümü kurup ekibinize öğretiyorum.",
    "q6": "Benim sektörümde daha önce çalıştınız mı?",
    "a6": "Şimdiye kadar yeme-içme ve emlakta çalıştım. Ama yöntemim sektöre değil soruna bakıyor: ön görüşmede sorununuzu dinliyor, neyin kurulabileceğini açıkça söylüyorum. Yapay zeka sizin sorununuza uygun değilse onu da söylüyorum.",

    # Contact
    "contactTitle": "Önce 20 dakika konuşalım",
    "contactLede": "Ön görüşme ücretsiz. Önce sorununuzu birlikte belirliyoruz, sonra ona nasıl bir çözüm kurabileceğimizi konuşuyoruz.",
    "cl1": "En geç bir iş günü içinde dönüş", "cl2": "Görüşme sonunda net teklif",
    "waBtn": "WhatsApp'tan yazın",
    "formSubject": "Web sitesinden ön görüşme talebi",
    "pickLegend": "Hangisiyle ilgileniyorsunuz?", "unsure": "Henüz emin değilim",
    "fName": "Ad soyad", "fNamePh": "Adınız soyadınız", "fBiz": "İşletme adı", "fBizPh": "Örn. Yıldız Makina",
    "fEmail": "E-posta", "fEmailPh": "siz@ornek.com", "fPhone": "Telefon", "fPhonePh": "05xx xxx xx xx",
    "optional": "(isteğe bağlı)", "fMsg": "Kısaca anlatın", "fMsgPh": "Sizi en çok hangi sorun yoruyor?",

    # Footer
    "footNav": "Alt menü", "copyright": "© 2026 Nexi Digital, Sakarya",
    "privacy": "Bu site kişisel verilerinizi otomatik olarak toplamaz. İletişime geçtiğinizde paylaştığınız bilgiler yalnızca size dönüş yapmak için kullanılır.",
}
TR_NOTES = {
    "cafe": "Keşif Günü'nde haftanızı çıkarıyor, zaman kaybını işaretliyor ve aynı gün ilk sistemi kuruyorum.",
    "emlak": "İlan hazırlığı ve paylaşım ofisin en çok saatini alıyor. Onay sizde kalıyor, gerisini sistem yapıyor.",
}
TR_JS = {
    "mailBody": "Merhaba,\n\nİşletmemin adı: \nİhtiyacım olan şey: \n\n(Kısa bilgi yeterli, detayları görüşmede konuşabiliriz.)",
    "waText": "Merhaba, Nexi Digital'in danışmanlık ve eğitim paketleri hakkında bilgi almak istiyorum.",
    "menuOpen": "Menüyü aç", "menuClose": "Menüyü kapat",
    "sending": "Gönderiliyor", "submit": TR["cta"], "notes": TR_NOTES,
    "sent": "Talebiniz ulaştı. En geç bir iş günü içinde dönüş yapacağım.",
    "failed": "Form gönderilemedi. Bağlantınızı kontrol edip tekrar deneyin ya da nexidigital.00@gmail.com adresine doğrudan yazın.",
}

EN = {
    "lang": "en", "selfFile": "en.html", "ogLocale": "en_US", "ogLocaleAlt": "tr_TR",
    "title": "AI Consulting and Team Training for SMEs | Nexi Digital",
    "metaDesc": "AI consulting, automation and team training for SMEs. We define your problem together first, then I build the solution and train your team. The first call is free.",
    "ogTitle": "Nexi Digital: I find your problem and solve it with AI, beside you",
    "skip": "Skip to content", "homeHref": "en.html", "homeLabel": "Nexi Digital home", "navLabel": "Main menu",
    "altHref": "./", "altLang": "tr", "altLabel": "Türkçe sürüm", "altShort": "TR", "menuOpen": "Open menu",
    "navSectors": "Sectors", "navPackages": "Packages", "navEdu": "Training", "navWork": "Work", "navAbout": "About",
    "cta": "Book a free call",

    "h1": "I find your business's problem and solve it with AI, right beside you.",
    "heroLede": "Consulting and team training for mid-sized and larger SMEs. We define the problem together first, then build a working solution. On-site in Sakarya, online across Turkey.",
    "heroCta2": "See packages",
    "stageLabel": "Pick an example", "tabCafe": "Café", "tabEmlak": "Real estate office",
    "kSample": "Sample Discovery Day", "kBuilt": "System built", "hrs": "h", "hrsWeek": "h/week",
    "cafeWeek": "A café's week",
    "cafe1": "Taking orders over WhatsApp", "cafe2": "Updating menu and prices", "cafe3": "Announcing offers", "cafe4": "End-of-day till count",
    "cafeFix": "QR menu, table ordering and a till screen", "cafeSave": "9",
    "emlakWeek": "A real estate office's week",
    "emlak1": "Writing listings and preparing photos", "emlak2": "Getting back to clients", "emlak3": "Posting on social media", "emlak4": "Tracking the portfolio",
    "emlakFix": "Listing content and a posting calendar", "emlakSave": "8",
    "tickerLabel": "What I build and teach",
    "ticker": ["Discovery Day", "QR menu and ordering", "Customer lists and offers", "Listing content", "WhatsApp reply assistant", "Team training", "Solo workshop"],

    "secTitle": "The problem matters more than the sector",
    "secLede": "I don't sell every business the same tool. So far I've worked in food service and real estate; below is what I built. If your sector is different, the method is the same: we define your problem together first.",
    "probLabel": "What I often see", "buildLabel": "What I build",
    "foodT": "Restaurants and cafés", "foodTag": "Where I've worked",
    "food1": "Orders get lost in WhatsApp", "food2": "Menu and prices updated by hand", "food3": "Past customers never hear back",
    "foodB1": "QR menu and table ordering", "foodB2": "Kitchen, waiter and till screens", "foodB3": "Customer lists and offer messages",
    "foodLink": "See the live café system",
    "estateT": "Real estate offices", "estateTag": "Where I've worked",
    "anyT": "Your sector", "anyTag": "Manufacturing, retail, health, education, services",
    "anyP": "In mid-sized and larger SMEs the problems look more alike than the sectors: repeated manual work, scattered customer requests, reports that take hours. Tell me your problem and we'll assess it together.",
    "any1": "Quotes, invoices and reports made by hand", "any2": "Customer requests scattered across email and WhatsApp", "any3": "The team uses AI not at all, or at random",
    "anyB1": "Quote and report automation", "anyB2": "Request intake and a reply assistant", "anyB3": "A tailored way for the team to use AI",
    "anyHowLabel": "How we start", "anyH1": "We define the problem together on a first call", "anyH2": "We discuss the solution that fits it", "anyH3": "If it makes sense, I build it and train the team",
    "anyLink": "Tell me your problem",
    "estate1": "Copy and photos redone for every listing", "estate2": "Social accounts sit idle for weeks", "estate3": "Replies to clients run late",
    "estateB1": "Listing copy and vertical video from photos", "estateB2": "A weekly posting calendar", "estateB3": "A WhatsApp assistant for common questions",
    "estateLink": "Ask for a Discovery Day for your office",
    "indivTag": "For individuals", "indivText": "A creator or freelancer? See the workshop on making content and video with AI.",

    "whatTitle": "How I work",
    "whatBig": "I don't present and leave. <strong>I sit down beside your business, set up a working system and teach your team.</strong>",
    "p1t": "First call", "p1p": "In 20 minutes I listen to your problem and we define together what can be solved.", "p1tag": "Free",
    "p2t": "Discovery Day", "p2p": "I map the problem on-site, pin down the solution and set up the first automation the same day.",
    "p3t": "Setup and training", "p3p": "I build the working system and teach the people who will use it, hands-on. Nobody ends up depending on me.",
    "p4t": "Follow-up", "p4p": "We measure the hours saved together and change what doesn't work.",
    "cmpLabel": "Classic consulting compared with my approach",
    "cmpOld": "Classic consulting", "cmpNew": "My approach",
    "cmpO1": "Leaves a deck and a report", "cmpN1": "Sets up a working system",
    "cmpO2": "Doing it is up to you", "cmpN2": "I stay until the team uses it",
    "cmpO3": "Results months later", "cmpN3": "First automation on Discovery Day",
    "fdeNote": "In tech this role is called a \"forward deployed engineer\": someone who builds systems on-site, inside the client. AI has made it possible for small businesses too.",

    "packTitle": "Consulting and training packages",
    "packLede": "Prices are starting prices. The exact quote comes after a free 20-minute call.",
    "packBiz": "For businesses", "packEdu": "Training",
    "from": "starting", "perMonth": "per month, starting", "perPerson": "per person",
    "k1badge": "Start here", "k1t": "Discovery Day", "k1price": "7,500 TRY",
    "k1for": "A one-day start for businesses that don't know where to begin.",
    "k1a": "A map of where time is lost", "k1b": "1 quick automation set up that day", "k1c": "A 30-day roadmap",
    "k2t": "4-Week Setup", "k2price": "35,000 TRY",
    "k2for": "For fixing the job that eats the most hours, for good.",
    "k2a": "4 hours a week beside you", "k2b": "1-2 working systems", "k2c": "Team training included",
    "k3t": "Monthly Support", "k3price": "15,000 TRY",
    "k3for": "For businesses that want to keep growing after setup.",
    "k3a": "8 hours a month", "k3b": "New automations and measurement", "k3c": "Priority support on WhatsApp",
    "k4t": "Team Training", "k4price": "25,000 TRY",
    "k4for": "For businesses that want their staff using AI in their own work.",
    "k4a": "4 weeks, 2 hours a week", "k4b": "Up to 10 people", "k4c": "Examples from your own business",
    "k5t": "Solo Workshop", "k5price": "2,500 TRY",
    "k5for": "For individuals who want to make content and video with AI.",
    "k5a": "A 4-week small group", "k5b": "Or one-to-one", "k5c": "Real examples from my own channel",
    "packNote": "The Discovery Day fee comes off the price of your next package. Prices exclude VAT.",

    "eduTitle": "AI training for companies",
    "eduLede": "I don't walk through tools, I get work done. Each week we finish a task from your own work with AI.",
    "week": "Week",
    "eduTeamT": "Team training", "eduTeamFor": "For business teams, 4 weeks, 2 hours a week.",
    "ew1t": "Getting started safely", "ew1p": "Which jobs to hand to AI and which not to; how to protect customer data.",
    "ew2t": "Customer messages and copy", "ew2p": "WhatsApp replies, listing and menu copy, offer announcements.",
    "ew3t": "Visuals and content", "ew3p": "Posts, short videos and covers from product and listing photos.",
    "ew4t": "Your own workflow", "ew4p": "Each person builds and presents a flow for their own repeating task.",
    "eduSoloT": "Solo workshop", "eduSoloFor": "For individuals who want to create content, 4 weeks.",
    "es1t": "Ideas and topics", "es1p": "Finding topics people watch, reading competing channels.",
    "es2t": "Script and voice", "es2p": "Short-video scripts and AI voiceover.",
    "es3t": "Visuals and editing", "es3p": "Vertical format, captions, covers and cuts.",
    "es4t": "Publishing schedule", "es4p": "Posting regularly and reading the results.",
    "eduProof": "views: what the method I teach got on my own channel",

    "workTitle": "AI work I've built",
    "workLede": "I did everything I teach myself first. One was built for a café and is live; two are my own products.",
    "w3kind": "Client work, a home-cooking café in Sakarya",
    "w3p": "QR ordering at the table, waiter, kitchen and till screens, split bills per guest, and a pick-up ordering app. Every screen updates live.",
    "w3f1": "screens kept in sync live", "w3f2": "apps to download from a store", "w3f3": "portion sizes: half, full, by the kilo",
    "zldCta": "Try the table menu",
    "w3Title": "QR ordering and kitchen system",
    "zldAltDesk": "The café's kitchen screen: table, pick-up and delivery-platform orders with countdown alerts",
    "zldAltPhone": "The café's QR menu at the table",
    "w1kind": "My own product, live",
    "w1p": "A watermark-free captioning tool for TikTok, Reels and Shorts creators. I took it from idea to live product myself.",
    "w1f1": "caption languages", "w1f2": "watermarks, even on the free plan", "w1f3": "free videos every month",
    "sublyCta": "Try Subly free",
    "sublyAltDesk": "Subly home page: the screen for adding watermark-free captions to a video", "sublyAltPhone": "Subly on a phone",
    "w0kind": "My own faceless channel",
    "w0p": "A beauty and aesthetics \"This or That\" Shorts channel. I built its production with AI agents, from topic to upload; 182 videos have gone out since June 2024.",
    "w0f1": "videos published", "w0f2n": "850K+", "w0f2": "total views", "w0f3n": "3.9K", "w0f3": "subscribers",
    "ytCta": "Open the channel on YouTube", "ytThumbAlt": "A Shorts cover from the GlowTips channel",
    "newTab": "(opens in a new tab)",

    "aboutKind": "Founder of Nexi Digital, Sakarya",
    "aboutBig": "For 5 years I worked with doctors and pharmacists in pharmaceutical promotion and sales.",
    "aboutP": "Those years at Abdi İbrahim taught me to build trust, explain technical things simply and get results through steady follow-up. Today I bring the same relationship and persuasion skills together with AI, setting up working systems for businesses.",
    "liCta": "Connect on LinkedIn",
    "fitYesT": "We're a good fit if",
    "fitNoT": "I'm not the right person if",
    "y1": "You run a mid-sized or larger SME.",
    "y2": "You're tired of doing the same job by hand every week.",
    "y3": "Your team has a few hours to learn something new.",
    "n1": "You want a report to file away.",
    "n2": "You want to buy followers or likes.",
    "n3": "You expect everything done overnight.",

    "faqTitle": "Common questions",
    "objQ": "You do this with AI? Then is it real expertise?",
    "objA": "<strong>Real expertise.</strong> Opening the tool is the easy part. Knowing which work to hand to AI, and how to set it up so the team actually uses it, takes experience. I'm not just claiming it; <a class=\"inlineLink\" href=\"#isler\">my work</a> shows it.",
    "q1": "My team isn't technical. Will it still work?",
    "a1": "Yes. That's why training is part of setup. I build screens that work with one tap, and I stay until the team is comfortable.",
    "q2": "Do you work outside Sakarya?",
    "a2": "Yes. On-site in and around Sakarya, online anywhere in Turkey. A Discovery Day can be done online too.",
    "q3": "What happens to my customer data?",
    "a3": "Data is used only for your business, in your own accounts, and is never shared with third parties. We prepare KVKK-compliant notices and consent steps together during setup.",
    "q4": "Which tools do you use?",
    "a4": "It depends on the job: AI models like Claude and ChatGPT, WhatsApp Business, Google tools and, when needed, small web apps built for you. Licences and accounts are opened in your name.",
    "q5": "When does the monthly fee end?",
    "a5": "Whenever you like. Monthly Support runs month to month, with no commitment. The systems stay with you when you leave.",
    "q7": "How much does AI consulting cost?",
    "a7": "The first call is free. Discovery Day starts at 7,500 TRY, the 4-week setup at 35,000 TRY, Monthly Support at 15,000 TRY, team training at 25,000 TRY and the solo workshop at 2,500 TRY per person. Prices exclude VAT; the exact quote is set after the first call.",
    "q8": "What is Nexi Digital?",
    "a8": "Nexi Digital is the AI consulting and team training business I founded. I'm Pınar Saçu Kargün; with mid-sized and larger SMEs I define the problem together first, then build a working solution and teach your team to use it.",
    "q6": "Have you worked in my sector before?",
    "a6": "So far I've worked in food service and real estate. But my method looks at the problem, not the sector: on the first call I listen and tell you plainly what can be built. If AI doesn't fit your problem, I'll tell you that too.",

    "contactTitle": "Let's talk for 20 minutes first",
    "contactLede": "The first call is free. We define your problem together first, then talk about what kind of solution we can build.",
    "cl1": "A reply within one business day", "cl2": "A clear quote at the end of the call",
    "waBtn": "Message on WhatsApp",
    "formSubject": "Call request from the website",
    "pickLegend": "What are you interested in?", "unsure": "Not sure yet",
    "fName": "Full name", "fNamePh": "Your full name", "fBiz": "Business name", "fBizPh": "e.g. Yıldız Makina",
    "fEmail": "Email", "fEmailPh": "you@example.com", "fPhone": "Phone", "fPhonePh": "+90 5xx xxx xx xx",
    "optional": "(optional)", "fMsg": "Tell me a bit", "fMsgPh": "Which problem wears you down the most?",

    "footNav": "Footer menu", "copyright": "© 2026 Nexi Digital, Sakarya, Turkey",
    "privacy": "This site does not automatically collect personal data. Any information you share when contacting us is used only to respond to you.",
}
EN_NOTES = {
    "cafe": "On a Discovery Day I map your week, mark where time is lost and set up the first system the same day.",
    "emlak": "Listings and posts eat most of an office's hours. You keep the final say; the system does the rest.",
}
EN_JS = {
    "mailBody": "Hello,\n\nMy business name: \nWhat I need: \n\n(A short note is enough, we can go into detail on the call.)",
    "waText": "Hello, I'd like to learn more about Nexi Digital's consulting and training packages.",
    "menuOpen": "Open menu", "menuClose": "Close menu",
    "sending": "Sending", "submit": EN["cta"], "notes": EN_NOTES,
    "sent": "Your request arrived. I'll get back to you within one business day.",
    "failed": "The form couldn't be sent. Check your connection and try again, or write directly to nexidigital.00@gmail.com.",
}

SEP = ('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12" stroke="currentColor" stroke-opacity=".3" stroke-width="2"/>'
       '<circle cx="5" cy="12" r="4" fill="#4A67FF"/><circle cx="19" cy="12" r="4" fill="#FF7A3D"/></svg>')


def render(strings, js, out):
    strings = dict(strings)
    ticker = strings.pop("ticker")
    strings["noteCafe"] = js["notes"]["cafe"]
    html = tpl.replace("[[TICKER]]", "".join(f"<span>{t}</span>{SEP}" for t in ticker))
    html = html.replace("[[LOGO:h]]", logo("h")).replace("[[LOGO:f]]", logo("f")).replace("[[LOGO:s]]", logo("s"))
    html = html.replace("[[JS]]", json.dumps(js, ensure_ascii=False).replace("</", "<\\/"))
    for k, v in strings.items():
        html = html.replace(f"[[{k}]]", v)
    unused = sorted(k for k in strings if f"[[{k}]]" not in tpl)
    if unused:
        sys.exit(f"{out}: unused strings {unused}")
    left = re.findall(r"\[\[[^\]]+\]\]", html)
    if left:
        sys.exit(f"{out}: unfilled {sorted(set(left))}")
    (SITE / out).write_text(html, encoding="utf-8")
    print("wrote", out, len(html))


def json_ld(lang):
    tr = lang == "tr"
    def offer(name, price, desc):
        return {"@type": "Offer", "priceCurrency": "TRY",
                "priceSpecification": {"@type": "PriceSpecification", "minPrice": price, "priceCurrency": "TRY", "valueAddedTaxIncluded": False},
                "itemOffered": {"@type": "Service", "name": name, "description": desc}}
    offers = [
        offer("Keşif Günü" if tr else "Discovery Day", 7500, "Sorunun yerinde haritası ve aynı gün ilk otomasyon." if tr else "An on-site map of the problem and the first automation the same day."),
        offer("4 Haftalık Kurulum" if tr else "4-Week Setup", 35000, "Çalışan sistemin kurulumu ve ekibe öğretilmesi." if tr else "Building the working system and teaching the team to use it."),
        offer("Aylık Yanınızda" if tr else "Monthly Support", 15000, "Aylık destek, taahhütsüz." if tr else "Monthly support, no commitment."),
        offer("Ekip Eğitimi" if tr else "Team Training", 25000, "Şirket ekibine uygulamalı yapay zeka eğitimi." if tr else "Hands-on AI training for a company team."),
        offer("Bireysel Atölye" if tr else "Solo Workshop", 2500, "Kişi başı yapay zeka atölyesi." if tr else "AI workshop, per person."),
    ]
    data = {"@context": "https://schema.org", "@graph": [
        {"@type": "ProfessionalService", "@id": "https://nexidigitalai.com/#org", "name": "Nexi Digital",
         "url": "https://nexidigitalai.com/", "image": f"https://nexidigitalai.com/img/og-{lang}.png",
         "description": ("KOBİ'ler için yapay zeka danışmanlığı ve ekip eğitimi. Önce sorunu birlikte belirler, sonra çalışan çözümü kurar ve ekibe öğretir." if tr
                         else "AI consulting and team training for SMEs. Defines the problem together first, then builds a working solution and trains the team."),
         "email": "nexidigital.00@gmail.com", "telephone": "+905358758848",
         "address": {"@type": "PostalAddress", "addressLocality": "Sakarya", "addressCountry": "TR"},
         "areaServed": {"@type": "Country", "name": "Türkiye" if tr else "Turkey"},
         "knowsLanguage": ["tr", "en"], "founder": {"@id": "https://nexidigitalai.com/#founder"}, "makesOffer": offers},
        {"@type": "Person", "@id": "https://nexidigitalai.com/#founder", "name": "Pınar Saçu Kargün",
         "jobTitle": "Kurucu, yapay zeka danışmanı ve eğitmeni" if tr else "Founder, AI consultant and trainer",
         "worksFor": {"@id": "https://nexidigitalai.com/#org"}, "sameAs": ["https://www.linkedin.com/in/pinarsacukargun/"]},
        {"@type": "WebSite", "@id": "https://nexidigitalai.com/#website", "url": "https://nexidigitalai.com/", "name": "Nexi Digital",
         "inLanguage": lang, "publisher": {"@id": "https://nexidigitalai.com/#org"}},
    ]}
    return json.dumps(data, ensure_ascii=False, indent=1).replace("</", "<\\/")


TR["jsonLd"] = json_ld("tr")
EN["jsonLd"] = json_ld("en")

render(TR, TR_JS, "index.html")
render(EN, EN_JS, "en.html")
