"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitDemoRequest, type DemoFormState } from "@/app/actions";
import { BigCheck } from "./icons";

const initialState: DemoFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary btn-lg" type="submit" disabled={pending}>
      {pending ? "Gönderiliyor…" : "Demo talebi gönder"}
    </button>
  );
}

export function DemoForm() {
  const [state, formAction] = useActionState(submitDemoRequest, initialState);

  if (state.status === "success") {
    return (
      <div className="form">
        <div className="form-done">
          <span className="ok" aria-hidden="true">
            <BigCheck />
          </span>
          <h3>Talebiniz alındı</h3>
          <p role="status">
            En geç bir iş günü içinde {state.phone ?? "belirttiğiniz numaradan"} arayıp
            demo için uygun bir saat belirleyelim.
          </p>
        </div>
      </div>
    );
  }

  const errors = state.errors ?? {};

  return (
    // action={formAction}: JavaScript yüklenmeden de gönderilebilir (progressive enhancement).
    <form className="form" action={formAction}>
      <h3>Demo talep edin</h3>

      <div className="field">
        <label htmlFor="f-name">Ad soyad</label>
        <input
          id="f-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Dt. Selin Meydan"
          aria-invalid={Boolean(errors.name)}
          required
        />
        {errors.name && <p className="form-error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="f-clinic">Klinik adı</label>
        <input
          id="f-clinic"
          name="clinic"
          type="text"
          autoComplete="organization"
          placeholder="Meydan Diş Kliniği"
          aria-invalid={Boolean(errors.clinic)}
          required
        />
        {errors.clinic && <p className="form-error">{errors.clinic}</p>}
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="f-phone">Telefon</label>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="0532 000 00 00"
            aria-invalid={Boolean(errors.phone)}
            required
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
        <div className="field">
          <label htmlFor="f-size">Hasta sayısı</label>
          <select id="f-size" name="size" defaultValue="250-1000">
            <option value="0-250">250’ye kadar</option>
            <option value="250-1000">250 – 1.000</option>
            <option value="1000+">1.000’den fazla</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-mail">E-posta</label>
        <input
          id="f-mail"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="klinik@ornek.com"
          aria-invalid={Boolean(errors.email)}
          required
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <SubmitButton />

      {state.status === "error" && !state.errors && (
        <p className="form-error" role="alert">
          {state.message}
        </p>
      )}

      <p className="form-fine">
        Bilgileriniz yalnızca demo görüşmesi için kullanılır, üçüncü tarafla paylaşılmaz.
      </p>
    </form>
  );
}
