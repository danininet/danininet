import Stripe from "stripe";
import { requiredEnv } from "@/lib/env";

export function getStripe() {
  return new Stripe(requiredEnv("STRIPE_SECRET_KEY"));
}
