import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { Extras } from "@/components/extras";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Pricing } from "@/components/pricing";
import { Problem } from "@/components/problem";
import { pricing, site } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** Arama sonuçlarında zengin sonuç için yapısal veri. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.tagline,
  url: site.url,
  inLanguage: "tr-TR",
  offers: pricing.packs.map((pack) => ({
    "@type": "Offer",
    name: `${pack.amount} kontör`,
    price: pack.price.replace(/[^\d]/g, ""),
    priceCurrency: "TRY",
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Sabit, geliştirici tarafından yazılmış veri.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <Features />
        <Extras />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
