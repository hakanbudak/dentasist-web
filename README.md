# Dentasist — tanıtım sitesi

Diş klinikleri için hasta hatırlatma ve ödeme takip sisteminin tanıtım sayfası.
Next.js 15 (App Router) + React 19 + TypeScript.

## Çalıştırma

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm start
```

## Yapı

```
app/
  layout.tsx     metadata, next/font, tema renkleri
  page.tsx       bölümleri sıralar + JSON-LD yapısal veri
  actions.ts     demo formunun Server Action'ı
  globals.css    tasarım token'ları ve tüm stiller
  sitemap.ts     /sitemap.xml
  robots.ts      /robots.txt
components/      Nav, Hero, Problem, Features, Extras, Pricing, Cta, DemoForm, Footer
lib/content.ts   sayfadaki TÜM metin ve veri
public/screens/  panel ekran görüntüleri
```

**Metni değiştirmek için yalnızca `lib/content.ts` yeterli.** Bileşenler veriyi
oradan okur.

## Next.js'in kullanılan yanları

| Ne | Nerede | Neden |
| --- | --- | --- |
| Server Components | tüm bileşenler | Yalnızca `DemoForm` istemciye iner; sayfa JS'i 7 kB |
| Server Action | `app/actions.ts` | Doğrulama sunucuda; ayrı API route gerekmez, gizli anahtar sızmaz |
| Progressive enhancement | `<form action={formAction}>` | JavaScript yüklenmeden de form gönderilir |
| `next/font/google` | `app/layout.tsx` | Fontlar kendi sunucumuzdan; Google'a istek yok, layout shift yok |
| `next/image` | Hero ve özellik görselleri | AVIF/WebP dönüşümü, responsive `srcset`, lazy loading |
| Metadata API | `app/layout.tsx` | title/description/canonical/OpenGraph/Twitter tek yerde |
| `sitemap.ts` / `robots.ts` | `app/` | Tip güvenli, build'de üretilir |
| JSON-LD | `app/page.tsx` | `SoftwareApplication` + fiyat teklifleri, zengin arama sonucu |
| Statik prerender | build çıktısı | Ana sayfa `○ Static` — CDN'den servis edilir |

## Yapılandırma

**Alan adı** — `lib/content.ts` içindeki `site.url`. Metadata, sitemap ve robots
bunu kullanır.

**Demo formu** — talepler varsayılan olarak sunucu günlüğüne yazılır. Gerçek bir
yere iletmek için:

```bash
# .env.local
DEMO_WEBHOOK_URL=https://...
```

Uç nokta `{ name, clinic, phone, email, size, receivedAt }` gövdesiyle POST alır.
Farklı bir hedef (e-posta servisi, CRM, veritabanı) istiyorsanız `app/actions.ts`
içindeki `deliver` fonksiyonunu değiştirin.

## Notlar

- Ekran görüntüleri uygulamanın kendisinden alındı; içindeki **klinik ve hasta
  bilgileri temsilidir** (`Meydan Diş Kliniği`). Gerçek müşteri adı kullanılmaz.
- Fiyatlar (kontör paketleri) uygulamadaki değerlerdir. "İlk 50 mesaj ücretsiz"
  ve "15 dakikalık demo" pazarlama vaatleridir — `lib/content.ts` içinden
  değiştirin.
- Server Action kullanıldığı için `output: "export"` (tamamen statik çıktı) ile
  derlenmez. Vercel, Node sunucusu veya Docker ile yayınlayın.
