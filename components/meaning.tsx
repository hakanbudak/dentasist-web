import { meaning } from "@/lib/content";

/**
 * İsmin hikâyesi. Marka işaretini büyük çizip üç noktasını etiketler:
 * tepe klinik, alttakiler hasta ve randevu, çizgiler hatırlatmalar.
 */
export function Meaning() {
  const [clinic, patient, appointment] = meaning.points;

  return (
    <section className="section meaning" aria-labelledby="meaning-title">
      <div className="wrap meaning-in">
        <figure className="meaning-figure">
          <svg viewBox="-34 -8 132 82" role="img" aria-label="Nirengi işareti: klinik, hasta ve randevu noktaları">
            <path
              d="M32 12 L53 50 H11 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <circle cx="11" cy="50" r="5" fill="currentColor" />
            <circle cx="53" cy="50" r="5" fill="currentColor" />
            <circle className="meaning-tip" cx="32" cy="12" r="6.5" />
            <circle className="meaning-ring" cx="32" cy="12" r="11" fill="none" />
            <text x="32" y="-1" textAnchor="middle" className="meaning-label strong">
              {clinic.label}
            </text>
            <text x="11" y="64" textAnchor="middle" className="meaning-label">
              {patient.label}
            </text>
            <text x="53" y="64" textAnchor="middle" className="meaning-label">
              {appointment.label}
            </text>
          </svg>
        </figure>

        <div className="meaning-copy">
          <p className="eyebrow">{meaning.eyebrow}</p>
          <h2 id="meaning-title">{meaning.title}</h2>
          <p className="meaning-body">{meaning.body}</p>
          <dl className="meaning-points">
            {meaning.points.map((point) => (
              <div key={point.label}>
                <dt>{point.label}</dt>
                <dd>{point.text}</dd>
              </div>
            ))}
          </dl>
          <p className="meaning-note">{meaning.note}</p>
        </div>
      </div>
    </section>
  );
}
