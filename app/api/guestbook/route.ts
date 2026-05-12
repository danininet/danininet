import { NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

function clean(value: unknown, max: number) {
  return String(value || "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const record = {
      createdAt: new Date().toISOString(),
      status: "pending",
      locale: clean(body.locale, 10),
      name: clean(body.name, 80),
      email: clean(body.email, 140),
      message: clean(body.message, 1400),
      consent: Boolean(body.consent),
      publishConsent: Boolean(body.publishConsent)
    };

    if (!record.name || !record.email || !record.message || !record.consent || !record.email.includes("@")) {
      return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    await appendFile(path.join(dataDir, "guestbook-pending.jsonl"), JSON.stringify(record) + "\n", "utf8");

    return NextResponse.json({ ok: true, status: "pending" });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
