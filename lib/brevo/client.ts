type BrevoContactInput = {
  email: string;
  attributes: Record<string, unknown>;
  listIds: number[];
};

type BrevoErrorBody = {
  message?: string;
  code?: string;
};

export async function upsertBrevoContact({ email, attributes, listIds }: BrevoContactInput) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      attributes,
      listIds,
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    let errorBody: BrevoErrorBody = {};

    try {
      errorBody = (await response.json()) as BrevoErrorBody;
    } catch {
      errorBody = {};
    }

    throw new Error(errorBody.message || `Brevo contact request failed with status ${response.status}`);
  }

  return response.json();
}
