/**
 * Nirengi işareti: üç sabit nokta ve onları bağlayan çizgiler. Yeşil tepe
 * noktası kliniği, alttaki iki nokta hasta ve randevuyu temsil eder.
 * Marka kitindeki 64×64 geometri birebir: tepe r9, alt noktalar r7, çizgi 3,5.
 * Mürekkep rengi currentColor ile dışarıdan gelir; tepe noktası `--logo-tip`
 * değişkeninden okunur (açık zeminde #1B7A4F, koyu zeminde #4C9A6E,
 * yeşil zeminde beyaz).
 */
export function LogoMark({ size = 30, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <path
        d="M32 12 L53 50 H11 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="50" r="7" fill="currentColor" />
      <circle cx="53" cy="50" r="7" fill="currentColor" />
      <circle cx="32" cy="12" r="9" fill="var(--logo-tip, #1b7a4f)" />
    </svg>
  );
}

/**
 * "Ağ kuruluyor": noktalar sabit, çizgiler sırayla bağlanır. 2,2 sn döngü.
 * Sayfa ve pano açılışı için.
 */
export function LoaderNetwork({ size = 48 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className="loader loader-network"
    >
      <circle cx="11" cy="50" r="7" />
      <circle cx="53" cy="50" r="7" />
      <circle cx="32" cy="12" r="9" />
      <g fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path className="edge edge-1" d="M32 12 L53 50" pathLength={1} />
        <path className="edge edge-2" d="M53 50 H11" pathLength={1} />
        <path className="edge edge-3" d="M11 50 L32 12" pathLength={1} />
      </g>
    </svg>
  );
}

/**
 * "Sinyal": noktalar klinikten başlayarak sırayla yanar. 1,5 sn döngü.
 * Gönderim ve kısa işlemler için (satır içi durum metni).
 */
export function LoaderSignal({ size = 22 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className="loader loader-signal"
    >
      <path
        className="frame"
        d="M32 12 L53 50 H11 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle className="dot dot-1" cx="32" cy="12" r="9" />
      <circle className="dot dot-2" cx="53" cy="50" r="7" />
      <circle className="dot dot-3" cx="11" cy="50" r="7" />
    </svg>
  );
}

/**
 * "Dönen nokta": çizgi yok, üç nokta ağırlık merkezinin çevresinde döner. 1,1 sn.
 * Butonların içinde ve 20 px altında.
 */
export function LoaderSpin({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className="loader loader-spin"
    >
      <g className="spin">
        <circle cx="11" cy="50" r="8" opacity="0.35" />
        <circle cx="53" cy="50" r="8" opacity="0.65" />
        <circle cx="32" cy="12" r="10" />
      </g>
    </svg>
  );
}
