import { NextResponse } from "next/server";
import { z } from "zod";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = intakeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid Mini Audit intake data." }, { status: 400 });
    }

    console.log("Mini Audit intake received", {
      name: parsed.data.name,
      email: parsed.data.email,
      region: parsed.data.region,
      assetType: parsed.data.assetType,
      language: parsed.data.language,
      goal: parsed.data.goal,
      hasMaterialUrl: Boolean(parsed.data.materialUrl),
      hasMessage: Boolean(parsed.data.message),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Mini Audit intake failed", error instanceof Error ? error.message : error);
    return NextResponse.json({ ok: false, error: "Mini Audit intake could not be sent right now." }, { status: 500 });
  }
}
