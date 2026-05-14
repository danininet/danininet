import { NextResponse } from "next/server";

export function GET(request: Request) {
  const gumroadUrl = process.env.DPL_GUMROAD_URL;

  if (!gumroadUrl) {
    return NextResponse.redirect(
      new URL("/proizvodi/digitalna-prodaja-lokacije?checkout=missing", request.url),
    );
  }

  return NextResponse.redirect(gumroadUrl);
}
