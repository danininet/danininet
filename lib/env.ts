export function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

export function optionalEnv(name: string, fallback = "") {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : fallback;
}

export const env = {
  siteUrl: optionalEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000"),
  supportEmail: optionalEnv("SUPPORT_EMAIL", "support@danininet.daninihub.com"),
  productName: optionalEnv("PRODUCT_NAME", "Digitalna prodaja lokacije"),
  stripeSecretKey: optionalEnv("STRIPE_SECRET_KEY"),
  stripePriceIdLaunch: optionalEnv("STRIPE_PRICE_ID_LAUNCH"),
  stripeWebhookSecret: optionalEnv("STRIPE_WEBHOOK_SECRET"),
  brevoApiKey: optionalEnv("BREVO_API_KEY"),
  brevoSenderEmail: optionalEnv("BREVO_SENDER_EMAIL", "support@danininet.daninihub.com"),
  brevoSenderName: optionalEnv("BREVO_SENDER_NAME", "DaniniNet"),
  deliveryTokenSecret: optionalEnv("DELIVERY_TOKEN_SECRET"),
  downloadBaseUrl: optionalEnv("DOWNLOAD_BASE_URL", optionalEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000")),
};
