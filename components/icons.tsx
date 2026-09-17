const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function Check({ size = 12, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
      stroke={color}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1.5 6.3 4.4 9.2 10.5 3" />
    </svg>
  );
}

export function Shield({ size = 19 }: { size?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden="true" {...strokeProps}>
      <path d="M10 2.2 16.5 5v5.1c0 3.7-2.6 6.6-6.5 7.7-3.9-1.1-6.5-4-6.5-7.7V5L10 2.2Z" />
      <path d="M7.4 10.1 9.3 12l3.4-3.6" />
    </svg>
  );
}

const glyphs = {
  chart: (
    <>
      <path d="M2.5 15.5V8" />
      <path d="M7 15.5V3.5" />
      <path d="M11.5 15.5v-5" />
      <path d="M16 15.5V6" />
    </>
  ),
  user: (
    <>
      <circle cx="9" cy="6" r="3" />
      <path d="M3 15.5c0-3 2.7-4.5 6-4.5s6 1.5 6 4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="9" cy="9" r="6.5" />
      <path d="M9 5.2V9l2.6 1.6" />
    </>
  ),
} as const;

export type GlyphName = keyof typeof glyphs;

export function CardIcon({ name }: { name: GlyphName }) {
  return (
    <svg viewBox="0 0 18 18" width="17" height="17" aria-hidden="true" {...strokeProps}>
      {glyphs[name]}
    </svg>
  );
}

export function BigCheck() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.4 8 14.4 16 5.6" />
    </svg>
  );
}
