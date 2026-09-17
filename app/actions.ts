"use server";

import { site } from "@/lib/content";

export type DemoFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  phone?: string;
  /** Alan adı → hata mesajı */
  errors?: Partial<Record<"name" | "clinic" | "phone" | "email", string>>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** 05XX XXX XX XX / +90 5XX ... — aradaki boşluk, tire ve parantezler serbest. */
const PHONE = /^(\+?90)?0?5\d{9}$/;

function digits(value: string) {
  return value.replace(/[^\d+]/g, "");
}

/**
 * Demo talebini sunucuda işler. Server Action olduğu için tarayıcıya hiçbir
 * doğrulama veya gizli anahtar sızmaz; JavaScript kapalıyken de form çalışır.
 *
 * Talebi nereye ileteceğinizi aşağıdaki `deliver` içinde tanımlayın:
 * e-posta servisi, CRM webhook'u ya da veritabanı.
 */
export async function submitDemoRequest(
  _prev: DemoFormState,
  formData: FormData
): Promise<DemoFormState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    clinic: String(formData.get("clinic") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    size: String(formData.get("size") ?? "").trim(),
  };

  const errors: DemoFormState["errors"] = {};
  if (values.name.length < 2) errors.name = "Adınızı yazın.";
  if (values.clinic.length < 2) errors.clinic = "Klinik adını yazın.";
  if (!PHONE.test(digits(values.phone))) errors.phone = "Geçerli bir cep telefonu yazın.";
  if (!EMAIL.test(values.email)) errors.email = "Geçerli bir e-posta yazın.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Lütfen işaretli alanları düzeltin.", errors };
  }

  try {
    await deliver(values);
  } catch {
    return {
      status: "error",
      message: "Talebiniz iletilemedi. Lütfen birazdan tekrar deneyin.",
    };
  }

  return { status: "success", phone: values.phone };
}

type DemoRequest = {
  name: string;
  clinic: string;
  phone: string;
  email: string;
  size: string;
};

/**
 * Talebin gideceği yer. `DEMO_WEBHOOK_URL` tanımlıysa oraya POST eder;
 * tanımlı değilse sunucu günlüğüne yazar (geliştirme ve ilk yayın için).
 */
async function deliver(request: DemoRequest) {
  const webhook = process.env.DEMO_WEBHOOK_URL;

  if (!webhook) {
    console.info(`[${site.name}] demo talebi:`, request);
    return;
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...request, receivedAt: new Date().toISOString() }),
  });

  if (!response.ok) {
    throw new Error(`Webhook ${response.status}`);
  }
}
