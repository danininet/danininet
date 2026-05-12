import { NextResponse } from "next/server";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { verifyDeliveryToken } from "@/lib/delivery-token";
import { appendJsonl } from "@/lib/store";

export const runtime = "nodejs";

const DELIVERY_FILE = "digitalna-prodaja-lokacije-launch.zip";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;
    const payload = verifyDeliveryToken(token);

    const filePath = path.join(process.cwd(), "private", "delivery", DELIVERY_FILE);

    await stat(filePath);
    const file = await readFile(filePath);

    await appendJsonl("download-log.jsonl", {
      email: payload.email,
      sessionId: payload.sessionId,
      product: payload.product,
      file: DELIVERY_FILE,
    });

    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${DELIVERY_FILE}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    await appendJsonl("download-errors.jsonl", {
      error: error instanceof Error ? error.message : String(error),
    });

    return new NextResponse(
      "Download link nije validan ili delivery paket još nije postavljen. Kontakt: support@danininet.daninihub.com",
      {
        status: 404,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
