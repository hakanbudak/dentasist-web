import { problem } from "@/lib/content";

function Column({
  data,
  good = false,
}: {
  data: { title: string; items: readonly string[] };
  good?: boolean;
}) {
  return (
    <div className={good ? "compare-col good" : "compare-col"}>
      <h3>{data.title}</h3>
      <ul>
        {data.items.map((item) => (
          <li key={item}>
            <span className={good ? "mark mark-good" : "mark mark-bad"} aria-hidden="true">
              {good ? "✓" : "✕"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Problem() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow">{problem.eyebrow}</p>
          <h2>{problem.title}</h2>
          <p>{problem.lede}</p>
        </div>

        <div className="compare">
          <Column data={problem.before} />
          <Column data={problem.after} good />
        </div>
      </div>
    </section>
  );
}
