import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { env, requiredEnv } from "@/lib/env";
import { appendJsonl } from "@/lib/store";

export const runtime = "nodejs";

const allowedLocales = new Set(["sr", "de", "en"]);

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const locale = allowedLocales.has(body.locale) ? body.locale : "sr";

    const stripe = getStripe();
    const priceId = requiredEnv("STRIPE_PRICE_ID_LAUNCH");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${env.siteUrl}/${locale}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env.siteUrl}/${locale}/cancel`,
      customer_creation: "always",
      allow_promotion_codes: false,
      billing_address_collection: "auto",
      metadata: {
        product: env.productName,
        locale,
        source: "danininet",
      },
    });

    await appendJsonl("checkout-created.jsonl", {
      sessionId: session.id,
      url: session.url,
      locale,
      priceId,
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch (error) {
    await appendJsonl("checkout-errors.jsonl", {
      error: error instanceof Error ? error.message : String(error),
    });

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Checkout error",
      },
      { status: 500 }
    );
  }
}
