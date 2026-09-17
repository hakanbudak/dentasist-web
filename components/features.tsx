import Image from "next/image";
import { features, type Feature as FeatureData } from "@/lib/content";
import { Shield } from "./icons";

function Shot({ shot }: { shot: FeatureData["shot"] }) {
  return (
    <div>
      <div className="frame">
        <div className="frame-bar">
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <span>{shot.caption}</span>
        </div>
        <Image
          src={shot.src}
          width={shot.width}
          height={shot.height}
          alt={shot.alt}
          sizes="(max-width: 940px) 100vw, 540px"
        />
      </div>
    </div>
  );
}

function Feature({ data }: { data: FeatureData }) {
  return (
    <div className={data.flip ? "feature flip" : "feature"} id={data.id}>
      <div className="feature-copy">
        <p className="eyebrow">{data.eyebrow}</p>
        <h2>{data.title}</h2>
        <p>{data.body}</p>

        {data.items && (
          <ul className="feature-list">
            {data.items.map((item) => (
              <li key={item.rest}>
                <span className={`chip tone-${item.tone}`} aria-hidden="true" />
                <span>
                  {item.strong ? (
                    <>
                      <strong>{item.strong}</strong> — {item.rest}
                    </>
                  ) : (
                    item.rest
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}

        {data.vars && (
          <div className="vars">
            {data.vars.map((variable) => (
              <code key={variable}>{variable}</code>
            ))}
          </div>
        )}

        {data.legend && (
          <div className="legend">
            {data.legend.map((item) => (
              <span key={item.label}>
                <i className={`tone-${item.tone}`} aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </div>
        )}

        {data.note && (
          <div className="note">
            <Shield />
            <span>
              <strong>{data.note.strong}</strong>
              {data.note.rest}
            </span>
          </div>
        )}
      </div>

      <Shot shot={data.shot} />
    </div>
  );
}

export function Features() {
  return (
    <section className="section band" id="nasil">
      <div className="wrap">
        {features.map((data) => (
          <Feature key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
}
