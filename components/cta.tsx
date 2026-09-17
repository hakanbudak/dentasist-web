import { cta } from "@/lib/content";
import { DemoForm } from "./demo-form";

export function Cta() {
  return (
    <section className="cta-sec" id="demo">
      <div className="wrap">
        <div className="cta">
          <div className="cta-copy">
            <h2>{cta.title}</h2>
            <p>{cta.body}</p>
            <ul className="cta-list">
              {cta.points.map((point) => (
                <li key={point}>
                  <span aria-hidden="true">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <DemoForm />
        </div>
      </div>
    </section>
  );
}
