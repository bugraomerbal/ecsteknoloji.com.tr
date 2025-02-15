document.addEventListener("DOMContentLoaded", () => {
  // 1) Hem infobar hem de mobil menü overlay dil butonlarını seç
  const langElems = document.querySelectorAll(".infobar__lang, .mobile-menu-overlay__lang");

  // 2) localStorage'da 'userLang' varsa onu al, yoksa varsayılan 'tr'
  let currentLang = localStorage.getItem("userLang") || "tr";

  // 3) Tüm dil butonları için aktif dili ayarlayan fonksiyon
  function setActiveLang(lang) {
    langElems.forEach(el => {
      if (el.dataset.lang === lang) {
        el.classList.add("infobar__lang--active");
      } else {
        el.classList.remove("infobar__lang--active");
      }
    });
  }

  // İlk açılışta aktif dili uygula
  setActiveLang(currentLang);

  // 4) Tüm dil butonlarına tıklama olayını ekle
  langElems.forEach(elem => {
    elem.addEventListener("click", function () {
      const chosenLang = this.getAttribute("data-lang");
      localStorage.setItem("userLang", chosenLang);
      setActiveLang(chosenLang);
      console.log("Dil değişti:", chosenLang);
      // 5) Header'daki data-lang-key özniteliklerine göre çevirileri güncelle
      translateHeader(chosenLang);
    });
  });

  // 6) Çeviri metinlerini içeren nesne (header için)
  const translations = {
    tr: {
      "main-product-label": "KULLANDIĞIMIZ ÜRÜNLER",
      "main-product-title": "Güvenliğiniz için yanınızdayız",
      "main-product-all": "TÜM ÜRÜNLERİMİZ",
      navHome: "Anasayfa",
      navAbout: "Hakkımızda",
      navProducts: "Ürünlerimiz",
      navReferences: "Referanslar",
      navContact: "İletişim",
      slide1_title: "STİLİNİZE UYGUN GIYİYİRLERİ BULUN",
      slide1_description: "Özenle hazırlanmış, tarzınızı yansıtacak geniş ürün yelpazemizi keşfedin.",
      slide1_button: "Detay",
      slide2_title: "STİLİNİZE UYGUN GIYİYİRLERİ BULUN",
      slide2_description: "Özenle hazırlanmış, tarzınızı yansıtacak geniş ürün yelpazemizi keşfedin.",
      slide2_button: "Detay",
      slide3_title: "STİLİNİZE UYGUN GIYİYİRLERİ BULUN",
      slide3_description: "Özenle hazırlanmış, tarzınızı yansıtacak geniş ürün yelpazemizi keşfedin.",
      slide3_button: "Detay",
      slide4_title: "STİLİNİZE UYGUN GIYİYİRLERİ BULUN",
      slide4_description: "Özenle hazırlanmış, tarzınızı yansıtacak geniş ürün yelpazemizi keşfedin.",
      slide4_button: "Detay",
      "heading-part1": "Dünyanın",
      "heading-gradient": "her yerinden",
      "heading-part2": "sizin için çözümler",
      "about-description": "ECS Teknoloji +20 yıllık deneyim ile dünyanın farklı noktalarından size en uygun teknolojiyi ayağınıza kadar getiriyor.",
      "about-button": "Devamını Oku",
      "main-hizmetler-card-1": "",
      "main-hizmetler-card-1-icon": "",
      "main-hizmetler-card-1-title": "Kamera Sistemleri",
      "main-hizmetler-card-1-content": "Keskin lenslerle donatılmış kamera sistemleri, her değerli detayı anında kaydeder, üstün güvenle.",
      "main-hizmetler-card-2": "",
      "main-hizmetler-card-2-icon": "",
      "main-hizmetler-card-2-title": "Yangın Sistemleri",
      "main-hizmetler-card-2-content": "Yüksek teknolojiyle çalışan yangın sistemleri, güçlü alevleri hızla erken fark ederek hayat kurtarır.",
      "main-hizmetler-card-3": "",
      "main-hizmetler-card-3-icon": "",
      "main-hizmetler-card-3-title": "Elektrik Tesisatı",
      "main-hizmetler-card-3-content": "Modern elektrik tesisatı, kesintisiz enerji dağıtımını sağlamak üzere özenle ve güvenle kurulmuştur.",
      "main-hizmetler-card-4": "",
      "main-hizmetler-card-4-icon": "",
      "main-hizmetler-card-4-title": "Alarm Sistemleri",
      "main-hizmetler-card-4-content": "Akıllı ve etkili alarm sistemleri, tehlikeyi anında algılayarak güvenli yaşam alanları sunar.",
      "main-hizmetler-card-5": "",
      "main-hizmetler-card-5-icon": "",
      "main-hizmetler-card-5-title": "Kartlı Geçiş Sistemleri",
      "main-hizmetler-card-5-content": "Güvenli ve yenilikçi kartlı geçiş sistemleri, erişimi kolaylaştırıp alanları etkili biçimde korur.",
      "main-hizmetler-card-6": "",
      "main-hizmetler-card-6-icon": "",
      "main-hizmetler-card-6-title": "Otopark Bariyer Sistemi",
      "main-hizmetler-card-6-content": "Otopark bariyer sistemi, otomatik olarak araç trafiğini hassas biçimde düzenleyerek güvenliği sağlar.",
      "main-hizmetler-card-7": "",
      "main-hizmetler-card-7-icon": "",
      "main-hizmetler-card-7-title": "Akıllı Ev ve Bina Sistemleri",
      "main-hizmetler-card-7-content": "Modern akıllı ev ve bina sistemleri, yaşamı kolaylaştırıp yüksek enerji verimliliğini artırır.",
      "main-hizmetler-card-8": "",
      "main-hizmetler-card-8-icon": "",
      "main-hizmetler-card-8-title": "Elektrikli Şarj İstasyonu",
      "main-hizmetler-card-8-content": "Modern elektrikli şarj istasyonu, ultra hızlı şarj imkanıyla çevreci ulaşımın öncüsü olur.",
      "main-hizmetler-card-9": "",
      "main-hizmetler-card-9-icon": "",
      "main-hizmetler-card-9-title": "Network Hizmetleri",
      "main-hizmetler-card-9-content": "Güvenilir modern network hizmetleri, kesintisiz yüksek bağlantı sunarak dijital dünyayı birbirine bağlar.",
      "main-hizmetler-tr-header-title": "HİZMETLERİMİZ",
      "main-hizmetler-tr-header-subtitle-line1": "Sizlerin güvenliği",
      "main-hizmetler-tr-header-subtitle-line2": "bizim için önemli",
      "footer-main-description": "ECS Teknoloji – Güvenlik ve teknolojide yenilikçi çözümler sunuyoruz. Kesintisiz hizmet ve profesyonel destekle yanınızdayız.",
      "footer-main-pages-title": "Sayfalar",
      "footer-main-pages-link-about": "Anasayfa",
      "footer-main-pages-link-career": "Hakkımızda",
      "footer-main-pages-link-mobile": "Referanslar",
      "footer-main-products-title": "Ürünler",
      "footer-main-products-link-travlog": "Kameralar",
      "footer-main-products-link-partner": "Elektrik",
      "footer-main-products-link-faq": "SSS",
      "footer-main-contact-title": "Bize Ulaş",
      "footer-main-contact-phone": "+90 532 266 07 03",
      "footer-main-contact-email": "info@ecsteknoloji.com.tr",
      "footer-main-contact-address1": "Velibaba, Feyza Sk. No:4,",
      "footer-main-contact-address2": "34896 Pendik/İstanbul",
      "footer-main-copyright": "© 2025 Ecs Teknoloji. Tüm hakları saklıdır.",
      "footer-main-designer-wrapper": "Tasarım: ",
      "footer-main-designer": "Buğra Bal",
      "footer-main-social-icon-1": "",
      "footer-main-social-icon-2": "",
      "footer-main-social-icon-3": "",
      "memnuniyet-main-slide1-label": "MEMNUNİYET",
      "memnuniyet-main-slide1-title": "Bizim hakkımızda ne söylediler?",
      "contacts-map-wrapper": "İletişim Haritası",
      "contacts-container": "İletişim Bilgileri",
      "contacts-title": "İletişim",
      "contacts-phone": "Telefon",
      "contacts-phone-title": "Telefon",
      "contacts-phone-text": "+90 532 266 07 03",
      "contacts-email": "E-Posta",
      "contacts-email-title": "E-Posta",
      "contacts-email-text": "info@ecsteknoloji.com",
      "contacts-address": "Adres",
      "contacts-address-title": "Adres",
      "contacts-address-text": "Velibaba, Feyza Sk. No:4, 34896 Pendik/İstanbul",

    },
    en: {
      navHome: "Home",
      navAbout: "About",
      navProducts: "Products",
      navReferences: "References",
      navContact: "Contact",
      slide1_title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
      slide1_description: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
      slide1_button: "Details",
      slide2_title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
      slide2_description: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
      slide2_button: "Details",
      slide3_title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
      slide3_description: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
      slide3_button: "Details",
      slide4_title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
      slide4_description: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
      slide4_button: "Details",
      "heading-part1": "From every",
      "heading-gradient": "corner of the",
      "heading-part2": "world, solutions for you",
      "about-description": "With over 20 years of experience, ECS Teknoloji brings you the best technology from around the world right to your doorstep.",
      "about-button": "Read More",
      "main-hizmetler-card-1": "",
      "main-hizmetler-card-1-icon": "",
      "main-hizmetler-card-1-title": "Camera Systems",
      "main-hizmetler-card-1-content": "Advanced camera systems equipped with sharp lenses capture every detail instantly with superior security.",
      "main-hizmetler-card-2": "",
      "main-hizmetler-card-2-icon": "",
      "main-hizmetler-card-2-title": "Fire Systems",
      "main-hizmetler-card-2-content": "High-tech fire systems quickly detect fierce flames to save lives and property.",
      "main-hizmetler-card-3": "",
      "main-hizmetler-card-3-icon": "",
      "main-hizmetler-card-3-title": "Electrical Installations",
      "main-hizmetler-card-3-content": "Modern electrical installations are meticulously and securely set up for uninterrupted energy distribution.",
      "main-hizmetler-card-4": "",
      "main-hizmetler-card-4-icon": "",
      "main-hizmetler-card-4-title": "Alarm Systems",
      "main-hizmetler-card-4-content": "Smart and effective alarm systems instantly detect threats to ensure secure living spaces.",
      "main-hizmetler-card-5": "",
      "main-hizmetler-card-5-icon": "",
      "main-hizmetler-card-5-title": "Card Access Systems",
      "main-hizmetler-card-5-content": "Secure and innovative card access systems facilitate entry and effectively protect areas.",
      "main-hizmetler-card-6": "",
      "main-hizmetler-card-6-icon": "",
      "main-hizmetler-card-6-title": "Parking Barrier System",
      "main-hizmetler-card-6-content": "The parking barrier system automatically regulates vehicle flow with precision to ensure safety.",
      "main-hizmetler-card-7": "",
      "main-hizmetler-card-7-icon": "",
      "main-hizmetler-card-7-title": "Smart Home and Building Systems",
      "main-hizmetler-card-7-content": "Modern smart home and building systems simplify life and enhance high energy efficiency.",
      "main-hizmetler-card-8": "",
      "main-hizmetler-card-8-icon": "",
      "main-hizmetler-card-8-title": "Electric Charging Station",
      "main-hizmetler-card-8-content": "The modern electric charging station leads sustainable transportation with ultra-fast charging capabilities.",
      "main-hizmetler-card-9": "",
      "main-hizmetler-card-9-icon": "",
      "main-hizmetler-card-9-title": "Network Services",
      "main-hizmetler-card-9-content": "Reliable modern network services provide uninterrupted high-speed connectivity, linking the digital world.",
      "main-hizmetler-tr-header-title": "OUR SERVICES",
      "main-hizmetler-tr-header-subtitle-line1": "Your safety",
      "main-hizmetler-tr-header-subtitle-line2": "is important to us",
      "footer-main-description": "ECS Teknoloji - We offer innovative solutions in security and technology. We are with you with uninterrupted service and professional support.",
      "footer-main-pages-title": "Pages",
      "footer-main-pages-link-about": "Home Page",
      "footer-main-pages-link-career": "About",
      "footer-main-pages-link-mobile": "References",
      "footer-main-products-title": "Products",
      "footer-main-products-link-travlog": "Cameras",
      "footer-main-products-link-partner": "Electric",
      "footer-main-products-link-faq": "FAQ's",
      "footer-main-contact-title": "Contact Us",
      "footer-main-contact-phone": "+90 532 266 07 03",
      "footer-main-contact-email": "info@ecsteknoloji.com.tr",
      "footer-main-contact-address1": "Velibaba, Feyza Sk. No:4,",
      "footer-main-contact-address2": "34896 Pendik/İstanbul",
      "footer-main-copyright": "© 2025 Ecs Technology. All rights reserved.",
      "footer-main-designer-wrapper": "Design by ",
      "footer-main-designer": "Buğra Bal",
      "footer-main-social-icon-1": "",
      "footer-main-social-icon-2": "",
      "footer-main-social-icon-3": "",
      "memnuniyet-main-slide1-label": "SATISFACTION",
      "memnuniyet-main-slide1-title": "What did they say about us?"
    }
  };

  // 7) Header'daki data-lang-key özniteliklerine göre metinleri güncelleyen fonksiyon
  function translateHeader(lang) {
    document.querySelectorAll("[data-lang-key]").forEach(el => {
      const key = el.getAttribute("data-lang-key");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // Sayfa yüklendiğinde header çevirilerini uygula
  translateHeader(currentLang);
});
