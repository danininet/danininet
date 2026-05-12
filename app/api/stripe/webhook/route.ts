import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { env, requiredEnv } from "@/lib/env";
import { appendJsonl } from "@/lib/store";
import { createDeliveryToken } from "@/lib/delivery-token";
import { sendDeliveryEmail } from "@/lib/brevo";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const stripe = getStripe();
  const signature = request.headers.get("stripe-signature");
  const body = await request.text();

  if (!signature) {
    return NextResponse.json({ ok: false, error: "missing_signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      requiredEnv("STRIPE_WEBHOOK_SECRET")
    );
  } catch (error) {
    await appendJsonl("stripe-webhook-errors.jsonl", {
      stage: "construct_event",
      error: error instanceof Error ? error.message : String(error),
    });

    return NextResponse.json({ ok: false, error: "invalid_signature" }, { status: 400 });
  }

  await appendJsonl("stripe-events.jsonl", {
    id: event.id,
    type: event.type,
  });

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const customerEmail =
        session.customer_details?.email ||
        session.customer_email ||
        "";

      const customerName =
        session.customer_details?.name ||
        "";

      if (!customerEmail) {
        throw new Error(`Missing customer email for session ${session.id}`);
      }

      const token = createDeliveryToken({
        email: customerEmail,
        sessionId: session.id,
      });

      const downloadUrl = `${env.downloadBaseUrl}/api/download/${encodeURIComponent(token)}`;

      await appendJsonl("orders.jsonl", {
        sessionId: session.id,
        paymentStatus: session.payment_status,
        amountTotal: session.amount_total,
        currency: session.currency,
        customerEmail,
        customerName,
        product: session.metadata?.product || env.productName,
        locale: session.metadata?.locale || "sr",
        downloadUrl,
      });

      await sendDeliveryEmail({
        toEmail: customerEmail,
        toName: customerName,
        downloadUrl,
        sessionId: session.id,
      });

      await appendJsonl("orders-delivered.jsonl", {
        sessionId: session.id,
        customerEmail,
        delivered: true,
      });
    } catch (error) {
      await appendJsonl("delivery-errors.jsonl", {
        sessionId: session.id,
        error: error instanceof Error ? error.message : String(error),
      });

      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true, received: true });
}
