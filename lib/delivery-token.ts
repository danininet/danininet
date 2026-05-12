import crypto from "node:crypto";
import { env, requiredEnv } from "@/lib/env";

type DeliveryPayload = {
  email: string;
  sessionId: string;
  product: string;
  exp: number;
};

function base64url(input: Buffer | string) {
  return Buffer.from(input).toString("base64url");
}

function sign(payload: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createDeliveryToken(input: {
  email: string;
  sessionId: string;
  product?: string;
  ttlSeconds?: number;
}) {
  const secret = requiredEnv("DELIVERY_TOKEN_SECRET");

  const payload: DeliveryPayload = {
    email: input.email,
    sessionId: input.sessionId,
    product: input.product || env.productName,
    exp: Math.floor(Date.now() / 1000) + (input.ttlSeconds || 60 * 60 * 24 * 7),
  };

  const encodedPayload = base64url(JSON.stringify(payload));
  const signature = sign(encodedPayload, secret);

  return `${encodedPayload}.${signature}`;
}

export function verifyDeliveryToken(token: string): DeliveryPayload {
  const secret = requiredEnv("DELIVERY_TOKEN_SECRET");
  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    throw new Error("Invalid token format");
  }

  const expected = sign(encodedPayload, secret);

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    throw new Error("Invalid token signature");
  }

  const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as DeliveryPayload;

  if (!payload.email || !payload.sessionId || !payload.exp) {
    throw new Error("Invalid token payload");
  }

  if (payload.exp < Math.floor(Date.now() / 1000)) {
    throw new Error("Expired token");
  }

  return payload;
}
