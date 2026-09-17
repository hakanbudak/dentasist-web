// Sayfadaki tüm metin ve veri burada. Metni değiştirmek için bileşenlere
// dokunmanıza gerek yok, yalnızca bu dosyayı düzenleyin.

export const site = {
  name: "Dentasist",
  tagline: "Diş klinikleri için hasta hatırlatma ve ödeme takip sistemi",
  // Kendi alan adınızla değiştirin: metadata, sitemap ve robots bunu kullanır.
  url: "https://dentasist.com",
} as const;

/** Ekran görüntülerinde ve örnek mesajlarda görünen temsili klinik. */
export const demoClinic = {
  name: "Meydan Diş Kliniği",
  initials: "MD",
} as const;

export const nav = [
  { href: "#nasil", label: "Nasıl çalışır" },
  { href: "#odeme", label: "Ödeme takibi" },
  { href: "#veri", label: "Entegrasyonlar" },
  { href: "#fiyat", label: "Fiyatlandırma" },
] as const;

export const hero = {
  title: "Hastanız kontrolü unutmasın, taksidi aksatmasın.",
  lede:
    "Dentasist, kontrol zamanı gelen ve ödeme sözü olan hastaları her sabah tek listede " +
    "önünüze getirir. Mesajı okur, gerekirse düzenler, tek tek onaylarsınız. " +
    "Sizin onayınız olmadan hiçbir mesaj gitmez.",
  note: "15 dakikalık canlı demo · kurulum ve hasta aktarımı bize ait",
  points: [
    "WhatsApp önceliği, ulaşmazsa SMS yedeği",
    "Taksit ve maaş günü sözlerinin takibi",
    "Klinik yazılımınızdan hasta listesi aktarımı",
    "09:00–19:00 dışına mesaj çıkmaz",
  ],
  bubble: {
    channel: "WhatsApp · Ayşe Yıldız",
    text:
      "Sayın Ayşe Yıldız, diş taşı temizliğinizin üzerinden 6 ay geçti. " +
      "Kontrol randevunuz için bize dönebilirsiniz.",
  },
} as const;

export const stats = [
  { n: "0", label: "onayınız olmadan giden mesaj" },
  { n: "6", label: "klinik yazılımı ve dosya entegrasyonu" },
  { n: "2", label: "dakikada kurulum, şifre bile gerekmez" },
  { n: "2", label: "kanal: WhatsApp ve SMS, tek kuyrukta" },
] as const;

export const problem = {
  eyebrow: "Neden gerekli",
  title: "Kontroller ajandada, sözler akılda kalıyor.",
  lede:
    "Altı aylık temizlik, yıllık film, taksit günü, “maaşımı alınca ödeyeceğim” sözü… " +
    "Hepsi farklı yerde tutuluyor ve takibi tek bir kişinin hafızasına kalıyor. " +
    "Dentasist bu dört takibi tek kuyruğa indirir.",
  before: {
    title: "Bugün nasıl yürüyor",
    items: [
      "Kontrol zamanı gelen hasta yalnızca biri fark ederse aranıyor.",
      "Taksit günleri defterde; geciken ödeme haftalar sonra görülüyor.",
      "Mesajlar personelin kendi telefonundan, kendi cümleleriyle gidiyor.",
      "Kime ne zaman yazıldığının kaydı yok; aynı hastaya iki kez yazılıyor.",
    ],
  },
  after: {
    title: "Dentasist ile",
    items: [
      "Tarihi gelen her kontrol ve ödeme sabah panoda hazır bekliyor.",
      "Geciken taksitler tutarıyla ve kaç gün geciktiğiyle ayrı listede.",
      "Metin klinik şablonundan geliyor, altında klinik adınız imza olarak duruyor.",
      "Gönderilen, iletilemeyen ve başarısız her mesaj kayıt altında.",
    ],
  },
} as const;

export type Tone = "temizlik" | "film" | "odeme" | "maas";

export type FeatureItem = {
  tone: Tone;
  strong?: string;
  rest: string;
};

export type Feature = {
  id: string;
  flip?: boolean;
  eyebrow: string;
  title: string;
  body: string;
  items?: FeatureItem[];
  vars?: string[];
  legend?: { tone: Tone; label: string }[];
  note?: { strong: string; rest: string };
  shot: { src: string; caption: string; alt: string; width: number; height: number };
};

export const features: Feature[] = [
  {
    id: "kuyruk",
    eyebrow: "Gönderim kuyruğu",
    title: "Her sabah onaylanacaklar listesi.",
    body:
      "Pano yalnızca bugün sırası gelenleri gösterir. Satırın rengi hatırlatmanın türünü " +
      "söyler; okumadan hangi işin beklediğini görürsünüz. Satıra tıklayıp mesajı " +
      "düzenleyebilir, tek tek ya da “Tümünü onayla” ile topluca gönderebilirsiniz.",
    items: [
      { tone: "temizlik", strong: "Diş taşı temizliği", rest: "6 ayda bir kontrol hatırlatması" },
      { tone: "film", strong: "Film kontrolü", rest: "yıllık panoramik film zamanı" },
      { tone: "odeme", strong: "Taksit ödemesi", rest: "plandaki ödeme günü geldi" },
      { tone: "maas", strong: "Maaş günü sözü", rest: "hastanın kendi verdiği tarih" },
    ],
    shot: {
      src: "/screens/queue.png",
      caption: "Pano · Bugünün hatırlatmaları",
      alt: "Gönderim kuyruğu: hasta adı, hatırlatma türü etiketi, mesaj önizlemesi ve Gönder butonu",
      width: 1470,
      height: 1140,
    },
  },
  {
    id: "odeme",
    flip: true,
    eyebrow: "Ödeme takibi",
    title: "Söz verilen günü geçen taksitler gözden kaçmasın.",
    body:
      "Tedavi tutarını ve taksit sayısını girin; plan otomatik oluşsun. Her taksit " +
      "Ödendi, Bugün, Gecikti veya Bekliyor olarak görünür. Tahsil ettiğiniz tutarı " +
      "düzenleyip ödendi işaretlemeniz yeterli.",
    items: [
      { tone: "odeme", rest: "Geciken tutarın toplamı ve kaç gün geciktiği tek bakışta" },
      { tone: "odeme", rest: "Kısmi tahsilat girilebilir, kalan bakiye planda kalır" },
      { tone: "maas", rest: "Maaş günü gibi hastanın kendi verdiği tarihler ayrı takip edilir" },
      { tone: "odeme", rest: "Hastaya gönderilmiş her ödeme hatırlatması plan geçmişinde" },
    ],
    shot: {
      src: "/screens/payments.png",
      caption: "Ödeme takibi · Taksit planları",
      alt: "Ödeme takibi ekranı: taksit planları, gecikmiş ve bugün ödenecek tutarlar",
      width: 1800,
      height: 1125,
    },
  },
  {
    id: "sablon",
    eyebrow: "Mesaj şablonları",
    title: "Kliniğin dili herkeste aynı kalsın.",
    body:
      "Dönemsel hatırlatmalar için hazır metinler gelir; kendi şablonlarınızı da eklersiniz. " +
      "Değişkenler gönderim anında hastanın bilgisiyle dolar, imzaya klinik adınız düşer. " +
      "Yine de göndermeden önce metni düzenleyebilirsiniz.",
    vars: ["{ad}", "{tarih}", "{tutar}", "{klinik}"],
    legend: [
      { tone: "film", label: "6 ay · 12 ay periyodik" },
      { tone: "odeme", label: "Ödeme günü" },
      { tone: "temizlik", label: "Gecikme +7 gün" },
    ],
    shot: {
      src: "/screens/templates.png",
      caption: "Mesaj şablonları",
      alt: "Mesaj şablonları ekranı: periyot etiketleri ve şablon metinleri",
      width: 1800,
      height: 1125,
    },
  },
  {
    id: "veri",
    flip: true,
    eyebrow: "Verilerinizi çekin",
    title: "Hasta listeniz zaten bir yerde duruyor.",
    body:
      "Kullandığınız klinik yazılımını bağlayın, hasta listesi Dentasist’e aktarılsın. " +
      "Excel dosyası yükleyebilir, Google Sheets’i salt okunur bağlayabilir ya da " +
      "hastaları elle girebilirsiniz.",
    items: [
      { tone: "film", strong: "drdentes, Dentasis ve Doktor Takvimi", rest: "bağlantıları" },
      { tone: "film", strong: "Excel / CSV", rest: "yükleme — indirilebilir şablonla" },
      { tone: "film", strong: "Google Sheets", rest: "yalnızca okuma izniyle" },
      { tone: "film", strong: "Elle giriş", rest: "entegrasyon gerektirmeden" },
    ],
    note: {
      strong: "KVKK onayı olmadan aktarım başlamaz.",
      rest:
        " Yalnızca hasta adı, telefon ve işlem tarihi alınır. Tedavi notları, " +
        "radyografi ve finansal kayıtlar aktarılmaz.",
    },
    shot: {
      src: "/screens/integrations.png",
      caption: "Entegrasyonlar",
      alt: "Entegrasyon ekranı: drdentes, Dentasis, Excel, Google Sheets, elle giriş ve Doktor Takvimi seçenekleri",
      width: 1800,
      height: 1125,
    },
  },
];

export const extras = {
  eyebrow: "Ayrıca",
  title: "Panelin geri kalanı da aynı mantıkta.",
  cards: [
    {
      icon: "chart",
      title: "Gönderim raporu",
      body:
        "Son 7 günün grafiği ve satır satır döküm: gönderildi, iletilemedi, başarısız. " +
        "Hangi numaraya ulaşılamadığını görüp düzeltirsiniz.",
    },
    {
      icon: "user",
      title: "Hasta bazlı kurallar",
      body:
        "Her hasta için ayrı periyot: 3, 6 veya 12 ay. Ortodonti hastası üç ayda bir, " +
        "film kontrolü yılda bir. Kural hastanın kartında durur.",
    },
    {
      icon: "clock",
      title: "Gönderim saati koruması",
      body:
        "Çalışma saati dışında mesaj çıkmaz. Akşam onayladığınız kuyruk ertesi sabah " +
        "09:00’da gönderilir; hasta gece mesaj almaz.",
    },
  ],
} as const;

export const pricing = {
  eyebrow: "Fiyatlandırma",
  title: "Abonelik yok. Yalnızca gönderdiğiniz mesaj kadar.",
  lede:
    "Panel ve entegrasyonlar ücretsiz. Kontör satın alırsınız, her gönderilen mesaj " +
    "bir kontör düşer. Kullanmadığınız kontörün süresi dolmaz.",
  packs: [
    { tag: "Başlangıç", amount: "500", price: "450 TL", unit: "0,90 TL / mesaj", best: false },
    { tag: "En çok tercih edilen", amount: "1.500", price: "1.200 TL", unit: "0,80 TL / mesaj", best: true },
    { tag: "Çok şubeli", amount: "5.000", price: "3.600 TL", unit: "0,72 TL / mesaj", best: false },
  ],
} as const;

export const cta = {
  title: "Kliniğinizin kuyruğunu birlikte kuralım.",
  body:
    "15 dakikalık görüşmede hasta listenizi aktarır, ilk hatırlatma kurallarınızı tanımlar " +
    "ve paneli canlı gösteririz. Kurulum için sizin bir şey yapmanız gerekmez.",
  points: [
    "Hasta listesi aktarımı bizde",
    "İlk 50 mesaj ücretsiz",
    "Taahhüt yok, istediğinizde bırakırsınız",
  ],
} as const;

export const footerNote =
  "Dentasist · Diş klinikleri için hasta hatırlatma ve ödeme takip sistemi. " +
  "Ekran görüntülerindeki klinik ve hasta bilgileri temsilidir.";
