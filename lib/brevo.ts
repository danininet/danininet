import { env, requiredEnv } from "@/lib/env";
import { appendJsonl } from "@/lib/store";

export async function sendDeliveryEmail(input: {
  toEmail: string;
  toName?: string;
  downloadUrl: string;
  sessionId: string;
}) {
  const apiKey = requiredEnv("BREVO_API_KEY");

  const firstName = input.toName?.trim() || "DaniniNet korisniče";

  const htmlContent = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
    <div style="max-width:720px;margin:0 auto;padding:32px 18px;">
      <div style="background:#0f172a;color:#ffffff;border-radius:24px;padding:32px;">
        <p style="margin:0 0 12px;color:#a7f3d0;font-size:12px;letter-spacing:1.8px;text-transform:uppercase;font-weight:700;">DaniniNet delivery</p>
        <h1 style="margin:0;font-size:34px;line-height:1.05;">Digitalna prodaja lokacije</h1>
        <p style="margin:18px 0 0;color:#cbd5e1;font-size:16px;line-height:1.6;">
          Hvala na kupovini. Vaš digitalni paket je spreman za preuzimanje.
        </p>
      </div>

      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:24px;padding:28px;margin-top:18px;">
        <p style="font-size:16px;line-height:1.7;margin:0 0 16px;">Zdravo ${escapeHtml(firstName)},</p>

        <p style="font-size:16px;line-height:1.7;margin:0 0 16px;">
          Kupili ste DaniniNet proizvod <strong>Digitalna prodaja lokacije</strong>.
        </p>

        <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">
          Paket uključuje PDF vodič i Bonus Pack Beta v01:
        </p>

        <ul style="font-size:15px;line-height:1.8;margin:0 0 24px;padding-left:20px;">
          <li>PDF vodič „Digitalna prodaja lokacije”</li>
          <li>Pre-launch checklist</li>
          <li>Investor Brief Outline</li>
          <li>Homepage Structure Template</li>
          <li>Lead Calculator</li>
          <li>Email Templates</li>
          <li>Visual Asset Checklist</li>
          <li>Public / Private Information Map</li>
          <li>Metrics Tracker</li>
          <li>Disclaimer Library</li>
          <li>DaniniHub Prompt Pack</li>
        </ul>

        <p style="margin:0 0 24px;">
          <a href="${input.downloadUrl}" style="display:inline-block;background:#0f172a;color:#ffffff;text-decoration:none;border-radius:999px;padding:14px 22px;font-weight:700;">
            Preuzmi DaniniNet paket
          </a>
        </p>

        <p style="font-size:13px;line-height:1.7;color:#64748b;margin:0;">
          Link je namenjen kupcu i može imati vremensko ograničenje. Ako imate tehnički problem sa pristupom,
          odgovorite direktno na ovaj email.
        </p>
      </div>

      <div style="font-size:12px;line-height:1.7;color:#64748b;margin-top:18px;padding:0 6px;">
        <strong>Važna napomena:</strong>
        Sadržaj je edukativnog i informativnog karaktera. Ne predstavlja pravni, finansijski, poreski,
        urbanistički, tehnički ili investicioni savet. Ne garantuje prodaju, profit, pronalazak investitora,
        vrednost lokacije ili izvodljivost projekta. Sve odluke zahtevaju nezavisnu proveru stručnih lica.
        <br /><br />
        DaniniNet · ${env.supportEmail}
      </div>
    </div>
  </body>
</html>`;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: env.brevoSenderName,
        email: env.brevoSenderEmail,
      },
      to: [
        {
          email: input.toEmail,
          name: input.toName || input.toEmail,
        },
      ],
      replyTo: {
        email: env.supportEmail,
        name: "DaniniNet Support",
      },
      subject: "Vaš DaniniNet proizvod: Digitalna prodaja lokacije",
      htmlContent,
      params: {
        DOWNLOAD_URL: input.downloadUrl,
        SESSION_ID: input.sessionId,
      },
    }),
  });

  const text = await response.text();

  await appendJsonl("delivery-log.jsonl", {
    provider: "brevo",
    toEmail: input.toEmail,
    sessionId: input.sessionId,
    status: response.status,
    ok: response.ok,
    response: safeText(text),
  });

  if (!response.ok) {
    throw new Error(`Brevo delivery failed: ${response.status} ${text}`);
  }

  return text;
}

function safeText(value: string) {
  return value.length > 2000 ? value.slice(0, 2000) : value;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
