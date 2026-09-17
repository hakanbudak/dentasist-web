import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <section className="section band" id="fiyat">
      <div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h2>{pricing.title}</h2>
          <p>{pricing.lede}</p>
        </div>

        <div className="price-grid">
          {pricing.packs.map((pack) => (
            <div className={pack.best ? "price best" : "price"} key={pack.amount}>
              <span className="price-tag">{pack.tag}</span>
              <div className="price-n">{pack.amount}</div>
              <div className="price-u">kontör</div>
              <div className="price-p">
                {pack.price} <span className="price-per">· {pack.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
