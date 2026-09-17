import "server-only";
import { Resend } from "resend";
import { site } from "./content";

export type DemoRequest = {
  name: string;
  clinic: string;
  phone: string;
  email: string;
  size: string;
};

const SIZE_LABELS: Record<string, string> = {
  "0-250": "250’ye kadar",
  "250-1000": "250 – 1.000",
  "1000+": "1.000’den fazla",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rows(request: DemoRequest) {
  return [
    ["Ad soyad", request.name],
    ["Klinik", request.clinic],
    ["Telefon", request.phone],
    ["E-posta", request.email],
    ["Hasta sayısı", SIZE_LABELS[request.size] ?? request.size],
  ] as const;
}

function buildHtml(request: DemoRequest) {
  const body = rows(request)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 16px 8px 0;color:#77877f;font-size:13px;white-space:nowrap">${label}</td>
          <td style="padding:8px 0;color:#14251f;font-size:15px;font-weight:600">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `<!doctype html>
<html lang="tr"><body style="margin:0;background:#f2f7f2;padding:28px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:520px;margin:0 auto;background:#fff;border:1px solid #d8e3da;border-radius:14px;padding:28px">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#35a83a;font-weight:700">${site.name}</p>
    <h1 style="margin:0 0 22px;font-size:20px;color:#14251f">Yeni demo talebi</h1>
    <table style="border-collapse:collapse;width:100%">${body}</table>
    <p style="margin:24px 0 0;padding-top:18px;border-top:1px solid #d8e3da;font-size:13px;color:#77877f">
      Bu e-postayı yanıtlarsanız doğrudan ${escapeHtml(request.name)} kişisine gider.
    </p>
  </div>
</body></html>`;
}

function buildText(request: DemoRequest) {
  return [
    `${site.name} — yeni demo talebi`,
    "",
    ...rows(request).map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}

/**
 * Demo talebini bildirim adresine e-posta olarak gönderir.
 *
 * Gerekli ortam değişkenleri:
 *   RESEND_API_KEY    Resend API anahtarı
 *   DEMO_NOTIFY_TO    talebin düşeceği adres (virgülle birden fazla yazılabilir)
 *   DEMO_NOTIFY_FROM  gönderen adres — Resend'de doğrulanmış alan adından olmalı
 *
 * Bu değişkenler tanımlı değilse (yerel geliştirme) talep sunucu günlüğüne yazılır.
 */
export async function sendDemoRequest(request: DemoRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_NOTIFY_TO;
  const from = process.env.DEMO_NOTIFY_FROM;

  if (!apiKey || !to || !from) {
    console.warn(
      `[${site.name}] E-posta yapılandırması eksik; talep gönderilmedi, yalnızca kaydedildi:`,
      request
    );
    return;
  }

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to: to.split(",").map((address) => address.trim()),
    replyTo: request.email,
    subject: `Yeni demo talebi — ${request.clinic}`,
    html: buildHtml(request),
    text: buildText(request),
  });

  if (error) {
    throw new Error(`Resend: ${error.message}`);
  }
}
