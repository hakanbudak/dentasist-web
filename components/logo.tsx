/**
 * Dentasist işareti: güneş listenin üstünden doğar, satırlar gün boyu kısalır.
 * Marka kitindeki 64×64 geometri birebir; renk currentColor ile dışarıdan gelir.
 */
export function LogoMark({ size = 30, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M14 27A18 18 0 0 1 50 27Z" />
      <rect x="6" y="32" width="52" height="5.5" rx="2.75" />
      <rect x="6" y="41" width="36" height="5.5" rx="2.75" />
      <rect x="6" y="50" width="20" height="5.5" rx="2.75" />
    </svg>
  );
}

/**
 * "Kuyruk işleniyor" animasyonu: satırlar sırayla yanar, güneş sabit.
 * Gönderim ve kısa işlemler için (buton, form).
 */
export function LoaderQueue({ size = 22 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className="loader loader-queue"
    >
      <path d="M14 27A18 18 0 0 1 50 27Z" />
      <rect className="row" x="6" y="32" width="52" height="5.5" rx="2.75" />
      <rect className="row row-2" x="6" y="41" width="36" height="5.5" rx="2.75" />
      <rect className="row row-3" x="6" y="50" width="20" height="5.5" rx="2.75" />
    </svg>
  );
}

/**
 * "Gün doğumu" animasyonu: güneş doğar, satırlar sırayla dolar. 1,8 sn döngü.
 * Sayfa ve pano açılışı için.
 */
export function LoaderRise({ size = 56 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className="loader loader-rise"
    >
      <defs>
        <clipPath id="loader-rise-clip">
          <rect x="0" y="0" width="64" height="29.5" />
        </clipPath>
      </defs>
      <g clipPath="url(#loader-rise-clip)">
        <path className="sun" d="M14 27A18 18 0 0 1 50 27Z" />
      </g>
      <rect className="row" x="6" y="32" width="52" height="5.5" rx="2.75" />
      <rect className="row row-2" x="6" y="41" width="36" height="5.5" rx="2.75" />
      <rect className="row row-3" x="6" y="50" width="20" height="5.5" rx="2.75" />
    </svg>
  );
}
