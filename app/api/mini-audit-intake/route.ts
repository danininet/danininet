import { NextResponse } from "next/server";
import { z } from "zod";
import SibApiV3Sdk from "sib-api-v3-sdk";

const intakeSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  region: z.string().trim().min(2).max(120),
  assetType: z.string().trim().min(2).max(120),
  language: z.enum(["sr", "de", "en"]),
  materialUrl: z.string().trim().max(500).optional().or(z.literal("")),
  goal: z.string().trim().min(2).max(300),
  message: z.string().trim().max(2500).optional().or(z.literal("")),
  consent: z.literal(true),
});

type IntakeData = z.infer<typeof intakeSchema>;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildOwnerEmail(data: IntakeData) {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Region", data.region],
    ["Asset type", data.assetType],
    ["Language", data.language],
    ["Material URL", data.materialUrl || "—"],
    ["Goal", data.goal],
    ["Message", data.message || "—"],
  ];

  return `
    <h2>New DaniniNet Mini Audit intake</h2>
    <p>A new Mini Audit request has been submitted through DaniniNet.</p>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#ddd;">
      ${rows.map(([label, value]) => `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`).join("")}
    </table>
    <p><strong>Consent:</strong> User confirmed processing for Mini Audit communication.</p>
  `;
}

function buildUserEmail(data: IntakeData) {
  const greeting = data.language === "de" ? "Danke für deine Mini-Audit Anfrage." : data.language === "en" ? "Thank you for your Mini Audit request." : "Hvala za Mini Audit prijavu.";
  const next = data.language === "de"
    ? "Ich prüfe die Angaben und melde mich mit dem nächsten sinnvollen Schritt. Diese Einschätzung ist keine Rechts-, Finanz-, Steuer-, Planungs-, Technik- oder Anlageberatung."
    : data.language === "en"
      ? "I will review the details and reply with the next useful step. This assessment is not legal, financial, tax, planning, technical or investment advice."
      : "Pregledaću podatke i javiti se sa sledećim smislenim korakom. Ova procena nije pravni, finansijski, poreski, urbanistički, tehnički ili investicioni savet.";

  return `
    <h2>${escapeHtml(greeting)}</h2>
    <p>${escapeHtml(next)}</p>
    <p><strong>DaniniNet</strong><br/>Income · Intelligence · Health</p>
  `;
}

async function sendBrevoEmails(data: IntakeData) {
  const apiKey = process.env.BREVO_API_KEY;
  const ownerEmail = process.env.MINI_AUDIT_OWNER_EMAIL || process.env.CONTACT_TO_EMAIL || "dragangaganet@gmail.com";
  const senderEmail = process.env.BREVO_SENDER_EMAIL || ownerEmail;
  const senderName = process.env.BREVO_SENDER_NAME || "DaniniNet";

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const auth = defaultClient.authentications["api-key"];
  auth.apiKey = apiKey;

  const api = new SibApiV3Sdk.TransactionalEmailsApi();

  await api.sendTransacEmail({
    sender: { email: senderEmail, name: senderName },
    to: [{ email: ownerEmail, name: "DaniniNet" }],
    replyTo: { email: data.email, name: data.name },
    subject: `Mini Audit request — ${data.name}`,
    htmlContent: buildOwnerEmail(data),
  });

  await api.sendTransacEmail({
    sender: { email: senderEmail, name: senderName },
    to: [{ email: data.email, name: data.name }],
    subject: data.language === "de" ? "DaniniNet Mini-Audit Anfrage erhalten" : data.language === "en" ? "DaniniNet Mini Audit request received" : "DaniniNet Mini Audit prijava primljena",
    htmlContent: buildUserEmail(data),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = intakeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid Mini Audit intake data." }, { status: 400 });
    }

    await sendBrevoEmails(parsed.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Mini Audit intake failed", error instanceof Error ? error.message : error);
    return NextResponse.json({ ok: false, error: "Mini Audit intake could not be sent right now." }, { status: 500 });
  }
}
