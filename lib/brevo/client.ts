import SibApiV3Sdk from "sib-api-v3-sdk";

let configured = false;

export function getBrevoClient() {
  if (!configured) {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications["api-key"];

    apiKey.apiKey = process.env.BREVO_API_KEY || "";

    configured = true;
  }

  return new SibApiV3Sdk.ContactsApi();
}

export async function upsertBrevoContact({
  email,
  attributes,
  listIds,
}: {
  email: string;
  attributes: Record<string, unknown>;
  listIds: number[];
}) {
  const client = getBrevoClient();

  return client.createContact({
    email,
    attributes,
    listIds,
    updateEnabled: true,
  });
}
