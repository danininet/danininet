import { NextResponse } from "next/server";
import { upsertBrevoContact } from "@/lib/brevo/client";
import { validateLeadPayload } from "@/lib/leads/validateLeadPayload";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const validation = validateLeadPayload(payload);

    if (!validation.ok) {
      return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
    }

    if (!process.env.BREVO_API_KEY || !process.env.BREVO_DANININET_LIST_ID) {
      return NextResponse.json({ ok: false, error: "Lead service is not configured" }, { status: 500 });
    }

    const lead = validation.data;
    const listId = Number(process.env.BREVO_DANININET_LIST_ID);

    if (!Number.isFinite(listId)) {
      return NextResponse.json({ ok: false, error: "Lead list is not configured" }, { status: 500 });
    }

    await upsertBrevoContact({
      email: lead.email,
      listIds: [listId],
      attributes: {
        FIRSTNAME: lead.name || undefined,
        SOURCE: lead.source,
        INTEREST: lead.interest,
        LOCALE: lead.locale,
        PROJECT: "DaniniNet",
        CONSENT_AT: new Date().toISOString(),
        METHOD: "Pitaj AI — AI pita tebe",
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DaniniNet lead registration failed", error);
    return NextResponse.json({ ok: false, error: "Lead registration failed" }, { status: 500 });
  }
}
