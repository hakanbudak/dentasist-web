import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Marka kitindeki paylaşım görseli: koyu zemin, yeşil işaret, tek cümle. */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0F2A1A",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg viewBox="0 0 64 64" width="64" height="64" fill="#4BC94B">
            <path d="M14 27A18 18 0 0 1 50 27Z" />
            <rect x="6" y="32" width="52" height="5.5" rx="2.75" />
            <rect x="6" y="41" width="36" height="5.5" rx="2.75" />
            <rect x="6" y="50" width="20" height="5.5" rx="2.75" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.03em" }}>{site.name}</div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            maxWidth: "85%",
          }}
        >
          Hastanız kontrolü unutmasın, taksidi aksatmasın.
        </div>
      </div>
    ),
    size,
  );
}
