import Image from "next/image";
import { demoClinic, hero, stats } from "@/lib/content";
import { Check } from "./icons";

export function Hero() {
  return (
    <div className="hero">
      <div className="wrap hero-in">
        <div>
          <h1>{hero.title}</h1>
          <p className="hero-lede">{hero.lede}</p>

          <div className="hero-cta">
            <a className="btn btn-lg btn-lime" href="#demo">
              Demo talep edin
            </a>
            <a className="btn btn-lg btn-ghost-light" href="#nasil">
              Nasıl çalıştığını görün
            </a>
          </div>
          <p className="hero-note">{hero.note}</p>

          <ul className="hero-points">
            {hero.points.map((point) => (
              <li key={point}>
                <span className="tick" aria-hidden="true">
                  <Check />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="shot-stage">
          <div className="shot">
            <Image
              src="/screens/dashboard.png"
              width={1800}
              height={1125}
              alt="Dentasist panosu: bugünün hatırlatmaları, gönderim kuyruğu ve geciken ödemeler listesi"
              sizes="(max-width: 940px) 100vw, 560px"
              priority
            />
          </div>
          <div className="bubble">
            <div className="bubble-head">
              <span className="bubble-dot" aria-hidden="true" />
              {hero.bubble.channel}
            </div>
            <p>
              {hero.bubble.text} <span className="sig">{demoClinic.name}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="wrap stats-in">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="stat-n">{stat.n}</div>
              <p className="stat-l">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
