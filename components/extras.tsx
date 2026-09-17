import { extras } from "@/lib/content";
import { CardIcon, type GlyphName } from "./icons";

export function Extras() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">{extras.eyebrow}</p>
          <h2>{extras.title}</h2>
        </div>

        <div className="grid-3">
          {extras.cards.map((card) => (
            <div className="card" key={card.title}>
              <div className="card-ico">
                <CardIcon name={card.icon as GlyphName} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
