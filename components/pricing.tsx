"use client";

import { useId, useState } from "react";
import { pricing, type Plan } from "@/lib/content";
import { Check } from "./icons";

type Billing = "monthly" | "yearly";

const tl = new Intl.NumberFormat("tr-TR");

function Price({ plan, billing }: { plan: Plan; billing: Billing }) {
  const amount = billing === "yearly" ? plan.yearly : plan.monthly;
  const perMonth = Math.round(plan.yearly / 12);
  return (
    <div className="plan-price">
      <div className="plan-amount">
        <span className="plan-num">{tl.format(amount)} ₺</span>
        <span className="plan-per">
          / {billing === "yearly" ? "yıl" : "ay"} <small>+KDV</small>
        </span>
      </div>
      <p className="plan-eq" aria-live="polite">
        {billing === "yearly"
          ? `Ayda ${tl.format(perMonth)} ₺'ye gelir · 2 ay hediye`
          : `Yıllık ödemede ${tl.format(plan.yearly)} ₺ · 2 ay hediye`}
      </p>
    </div>
  );
}

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  return (
    <article className={plan.featured ? "plan featured" : "plan"} aria-label={plan.name}>
      {plan.featured && <span className="plan-ribbon">En çok tercih edilen</span>}
      <header className="plan-head">
        <h3>{plan.name}</h3>
        <p>{plan.motto}</p>
      </header>

      <Price plan={plan} billing={billing} />

      <ul className="plan-limits">
        <li>
          <strong>{tl.format(plan.patients)}</strong> hastaya kadar
        </li>
        <li>
          Ayda <strong>{tl.format(plan.reminders)}</strong> hatırlatma dâhil
        </li>
        <li>
          <strong>{typeof plan.users === "number" ? plan.users : "Sınırsız"}</strong> kullanıcı
        </li>
      </ul>

      {plan.cta === "trial" ? (
        <a className={plan.featured ? "btn btn-primary btn-lg plan-cta" : "btn btn-outline btn-lg plan-cta"} href="#demo">
          14 gün ücretsiz dene
        </a>
      ) : (
        <a className="btn btn-outline btn-lg plan-cta" href="#demo">
          Bize ulaşın
        </a>
      )}

      <ul className="plan-features">
        {plan.features.map((f) => (
          <li key={f.text}>
            <span className="plan-check" aria-hidden="true">
              <Check size={10} color="currentColor" />
            </span>
            <span>
              {f.text}
              {f.soon && <em className="plan-soon">Yakında</em>}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("yearly");
  const groupId = useId();

  return (
    <section className="section band pricing" id="fiyat">
      <div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h2>{pricing.title}</h2>
          <p>{pricing.lede}</p>
        </div>

        <div className="billing" role="radiogroup" aria-labelledby={`${groupId}-label`}>
          <span id={`${groupId}-label`} className="sr-only">
            Ödeme dönemi
          </span>
          {(["monthly", "yearly"] as const).map((key) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={billing === key}
              className={billing === key ? "billing-opt on" : "billing-opt"}
              onClick={() => setBilling(key)}
            >
              {pricing.billing[key]}
              {key === "yearly" && <span className="billing-badge">{pricing.billing.yearlyBadge}</span>}
            </button>
          ))}
        </div>

        <div className="plans">
          {pricing.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>

        <p className="plans-value">{pricing.value}</p>
        <p className="plans-channels">{pricing.channels}</p>

        <div className="overage">
          <div className="overage-copy">
            <h3>{pricing.overage.title}</h3>
            <p>{pricing.overage.lede}</p>
          </div>
          <ul className="overage-list">
            {pricing.overage.packs.map((pack) => (
              <li key={pack.amount}>
                <span>{tl.format(pack.amount)} hatırlatma</span>
                <strong>
                  {tl.format(pack.price)} ₺ <small>+KDV</small>
                </strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="faq">
          <h3>Sık sorulanlar</h3>
          <div className="faq-list">
            {pricing.faq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <p className="plans-enterprise">
          {pricing.enterprise.text} <a href="#demo">{pricing.enterprise.link}</a>
        </p>
      </div>
    </section>
  );
}
