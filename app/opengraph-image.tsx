import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0F2A1A";
const GREEN = "#1B7A4F";

/**
 * Google Fonts'tan tek bir ağırlığın woff/ttf verisini çeker. Ağ yoksa
 * (ör. çevrimdışı build) null döner ve sistem yazı tipine düşülür.
 */
async function loadFont(family: string, weight: number, text: string) {
  try {
    // Tarayıcı kimliği gönderilmez: Google o zaman woff2 yerine TTF verir,
    // görsel üretici yalnızca TTF/OTF/WOFF okur.
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`,
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

/**
 * Marka kitindeki paylaşım görseli: açık zemin, logo sol üstte, slogan altta,
 * işaretin büyük ve soluk bir kopyası sağ alt köşeden taşarak arka planda.
 */
export default async function OpenGraphImage() {
  const slogan = "Hastanız kontrolü unutmasın, taksidi aksatmasın.";
  const [jakarta, onest] = await Promise.all([
    loadFont("Plus+Jakarta+Sans", 700, site.wordmark),
    loadFont("Onest", 600, slogan),
  ]);
  const fonts = [
    jakarta && { name: "Plus Jakarta Sans", data: jakarta, weight: 700 as const, style: "normal" as const },
    onest && { name: "Onest", data: onest, weight: 600 as const, style: "normal" as const },
  ].filter((f): f is NonNullable<typeof f> => Boolean(f));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 92,
          background: "#F6F8F4",
          color: INK,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg viewBox="0 0 64 64" width="76" height="76">
            <path d="M32 12 L53 50 H11 Z" fill="none" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
            <circle cx="11" cy="50" r="7" fill={INK} />
            <circle cx="53" cy="50" r="7" fill={INK} />
            <circle cx="32" cy="12" r="9" fill={GREEN} />
          </svg>
          <div
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: 58,
              fontWeight: 700,
              letterSpacing: "-0.035em",
            }}
          >
            {site.wordmark}
          </div>
        </div>
        <div
          style={{
            fontFamily: "Onest, sans-serif",
            fontSize: 70,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            maxWidth: "78%",
          }}
        >
          {slogan}
        </div>
        <svg
          viewBox="0 0 64 64"
          width="560"
          height="560"
          style={{ position: "absolute", right: -86, bottom: -108, opacity: 0.07 }}
        >
          <path d="M32 12 L53 50 H11 Z" fill="none" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
          <circle cx="11" cy="50" r="7" fill={INK} />
          <circle cx="53" cy="50" r="7" fill={INK} />
          <circle cx="32" cy="12" r="9" fill={INK} />
        </svg>
      </div>
    ),
    { ...size, fonts },
  );
}
