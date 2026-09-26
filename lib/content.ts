// Sayfadaki tüm metin ve veri burada. Metni değiştirmek için bileşenlere
// dokunmanıza gerek yok, yalnızca bu dosyayı düzenleyin.

export const site = {
  name: "Nirengi",
  /** Logo yazısı: kit gereği her zaman küçük harf. */
  wordmark: "nirengi",
  tagline: "Diş klinikleri için hasta hatırlatma ve ödeme takip sistemi",
  // Kendi alan adınızla değiştirin: metadata, sitemap ve robots bunu kullanır.
  url: "https://nirengi.com",
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
    "Nirengi, kontrol zamanı gelen ve ödeme sözü olan hastaları her sabah tek listede " +
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
    "Nirengi bu dört takibi tek kuyruğa indirir.",
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
    title: "Nirengi ile",
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
      "Kullandığınız klinik yazılımını bağlayın, hasta listesi Nirengi’ye aktarılsın. " +
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

export type PlanFeature = { text: string; soon?: boolean };
export type Plan = {
  id: string;
  name: string;
  motto: string;
  monthly: number;
  yearly: number;
  patients: number;
  reminders: number;
  users: number | "sınırsız";
  /** Kümülatif liste: bir önceki paketin her şeyi dâhil. */
  features: PlanFeature[];
  featured?: boolean;
  /** trial: 14 gün deneme düğmesi; contact: fiyat görünür, satın alma yok. */
  cta: "trial" | "contact";
};

export const pricing = {
  eyebrow: "Fiyatlandırma",
  title: "Kliniğinize göre bir paket. Sözleşme yok.",
  lede:
    "Üç paket, tek karar. Yıllık ödemede 2 ay hediye. Fiyatlar KDV hariçtir; " +
    "14 gün ücretsiz deneme için kredi kartı istemiyoruz.",
  billing: {
    monthly: "Aylık",
    yearly: "Yıllık",
    yearlyBadge: "2 ay hediye",
  },
  value: "Ayda bir hastayı geri kazanmak bu ücreti karşılar.",
  channels:
    "SMS ve WhatsApp, her pakette. Hangisini kullanacağınıza siz karar verirsiniz; " +
    "ikisi de dâhil hatırlatma havuzunuzdan düşer.",
  plans: [
    {
      id: "baslangic",
      name: "Başlangıç",
      motto: "Hatırlatmalar kendiliğinden gitsin.",
      monthly: 399,
      yearly: 3990,
      patients: 300,
      reminders: 300,
      users: 2,
      cta: "trial",
      features: [
        { text: "Excel / CSV ile hasta aktarımı, önizlemeli" },
        { text: "Otomatik kontrol hatırlatmaları, hasta bazlı aralık" },
        { text: "Tedavi planı ve taksit takibi" },
        { text: "Vade günü ve geciken ödeme hatırlatmaları" },
        { text: "Ödeme panosu: geciken, bugün vadesi gelen, kalan bakiye" },
        { text: "Onay kuyruğu: göndermeden önce görüp onaylama" },
        { text: "Gönderim raporu ve son hareketler" },
        { text: "Düzenlenebilir mesaj şablonları" },
        { text: "SMS ve WhatsApp, kanal seçimi sizde" },
      ],
    },
    {
      id: "standart",
      name: "Standart",
      motto: "Kendi kendine çalışsın.",
      monthly: 799,
      yearly: 7990,
      patients: 1000,
      reminders: 800,
      users: 5,
      featured: true,
      cta: "trial",
      features: [
        { text: "Başlangıç'taki her şey" },
        { text: "Otomatik onay: kuyrukta beklemeden gönderim", soon: true },
        { text: "Yaklaşan hatırlatmalar: önümüzdeki 7 günün tablosu", soon: true },
        { text: "“Şimdi hatırlat”: vade gününü beklemeden gönderme", soon: true },
      ],
    },
    {
      id: "klinik-plus",
      name: "Klinik+",
      motto: "Sistemlerinize bağlanır.",
      monthly: 1599,
      yearly: 15990,
      patients: 2500,
      reminders: 2000,
      users: "sınırsız",
      cta: "contact",
      features: [
        { text: "Standart'taki her şey" },
        { text: "W-Lush entegrasyonu: randevu hatırlatmaları", soon: true },
        { text: "Öncelikli destek, kurulum ve veri taşıma yardımı" },
        { text: "Çok şube desteği", soon: true },
      ],
    },
  ] satisfies Plan[],
  overage: {
    title: "Dâhil hatırlatmanız biterse",
    lede: "Ek paket alırsınız; bekleyen hatırlatmalar kaybolmaz, paket gelince gönderilir.",
    packs: [
      { amount: 500, price: 199 },
      { amount: 2000, price: 699 },
      { amount: 5000, price: 1499 },
    ],
  },
  enterprise: {
    text: "Daha büyük bir kliniğiniz mi var?",
    link: "Bize ulaşın",
  },
  faq: [
    {
      q: "Hatırlatmalarım biterse ne olur?",
      a:
        "Bekleyen hatırlatmalar gönderilmeden durur, hiçbiri kaybolmaz. Ek paket " +
        "aldığınızda otomatik olarak kuyruğa geri döner ve gönderilir.",
    },
    {
      q: "Hasta sınırını aşarsam?",
      a: "Üst pakete geçersiniz, aradaki farkı kalan süre kadar ödersiniz. Kayıtlarınız silinmez.",
    },
    {
      q: "Mesajlarda kliniğimin adı görünür mü?",
      a: "Evet. Gönderici olarak kliniğinizin adı görünür; hastanız kimden geldiğini bilir.",
    },
    {
      q: "Sözleşme süresi var mı?",
      a: "Yok. Aylık pakette istediğiniz ay bırakabilirsiniz. Yıllık pakette 2 ay hediye vardır.",
    },
    {
      q: "Hastalarım mesaj almak istemezse?",
      a:
        "Hasta kartında SMS almayı kapatabilirsiniz; o hastaya bir daha hatırlatma gitmez. " +
        "Gelen “iptal” taleplerini de sistem kendisi işler.",
    },
    {
      q: "Mevcut hasta listemi nasıl aktarırım?",
      a:
        "Excel veya CSV dosyanızı yüklersiniz. Yüklemeden önce kaç hasta ekleneceğini, kaçının " +
        "güncelleneceğini ve hangi satırların hatalı olduğunu size gösterir; onaylamadan " +
        "hiçbir şey yazılmaz.",
    },
    {
      q: "Ücretsiz deneme kredi kartı istiyor mu?",
      a: "Hayır.",
    },
  ],
};

export const cta = {
  title: "Kliniğinizin kuyruğunu birlikte kuralım.",
  body:
    "15 dakikalık görüşmede hasta listenizi aktarır, ilk hatırlatma kurallarınızı tanımlar " +
    "ve paneli canlı gösteririz. Kurulum için sizin bir şey yapmanız gerekmez.",
  points: [
    "Hasta listesi aktarımı bizde",
    "14 gün ücretsiz deneme, kredi kartı yok",
    "Taahhüt yok, istediğinizde bırakırsınız",
  ],
} as const;

export const footerNote =
  "Nirengi · Diş klinikleri için hasta hatırlatma ve ödeme takip sistemi. " +
  "Ekran görüntülerindeki klinik ve hasta bilgileri temsilidir.";
