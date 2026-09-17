import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// next/font: fontlar build sırasında indirilip kendi sunucumuzdan servis edilir.
// Google'a istek gitmez, FOUT/layout shift oluşmaz.
const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Kontrol zamanı gelen ve ödeme sözü olan hastalar her sabah tek kuyrukta. " +
    "WhatsApp ve SMS hatırlatmaları siz onaylamadan gönderilmez.",
  keywords: [
    "diş kliniği yazılımı",
    "hasta hatırlatma",
    "randevu hatırlatma",
    "taksit takibi",
    "WhatsApp hatırlatma",
    "klinik otomasyonu",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Hasta kontrolleri ve ödeme sözleri tek panelde. Her mesajı düzenleyip tek tek onaylarsınız.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: "Hasta kontrolleri ve ödeme sözleri tek panelde, sizin onayınızla.",
  },
  robots: { index: true, follow: true },
};

// Site tek temalı: üstte yeşil hero, altı beyaz. Cihaz koyu moddayken de böyle.
export const viewport: Viewport = {
  themeColor: "#4BC94B",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
