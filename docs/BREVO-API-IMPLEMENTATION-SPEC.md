# Brevo API Implementation Spec — DaniniNet + DaniniLans

## Purpose

Replace unsafe/non-production lead capture patterns with secure server-side Brevo API routes.

This is not a placeholder. It is the implementation contract for the next code patch.

---

## Contact identities

DaniniNet:
- `info@danininet.daninihub.com`

DaniniLans:
- `info@daninilans.daninihub.com`

---

## Production rule

Do not use `mailto:` forms for lead capture.

All public lead forms must submit to server-side API routes.

Brevo API key must stay server-side only.

---

## Environment variables

Only secrets and technical IDs go to `.env`.

Required:

```env
BREVO_API_KEY=
BREVO_DANININET_LIST_ID=
BREVO_DANINILANS_LIST_ID=
BREVO_DANININET_SENDER_EMAIL=info@danininet.daninihub.com
BREVO_DANINILANS_SENDER_EMAIL=info@daninilans.daninihub.com
```

Affiliate links do not go to `.env`.

---

## API routes

### DaniniNet

`POST /api/leads/danininet`

### DaniniLans

`POST /api/leads/daninilans`

---

## Payload contract

```ts
type LeadPayload = {
  email: string;
  name?: string;
  interest: string;
  source: string;
  locale: "sr" | "de" | "en";
  consent: boolean;
};
```

---

## Validation rules

Reject with 400 when:

- email missing
- email invalid
- consent not true
- interest missing
- source missing
- locale not supported

Do not collect sensitive health data.

Do not ask for diagnosis, disease, medication or therapy details.

---

## Brevo contact attributes

Create or update contact with:

- EMAIL
- FIRSTNAME when provided
- SOURCE
- INTEREST
- LOCALE
- PROJECT
- CONSENT_AT
- METHOD = `Pitaj AI — AI pita tebe`

---

## List mapping

DaniniNet route adds contact to:
- `BREVO_DANININET_LIST_ID`

DaniniLans route adds contact to:
- `BREVO_DANINILANS_LIST_ID`

---

## Response contract

Success:

```json
{ "ok": true }
```

Validation error:

```json
{ "ok": false, "error": "Invalid email or consent" }
```

Server error:

```json
{ "ok": false, "error": "Lead registration failed" }
```

Never expose Brevo raw errors to public users.

---

## Required frontend copy

Every form must include:

- consent checkbox
- AI-assisted disclosure
- affiliate disclosure when relevant
- health disclaimer for DaniniLans
- unsubscribe/communication note

---

## DaniniHub method rule

Lead capture is not a generic newsletter.

Flow:

1. User declares interest.
2. AI/system may ask up to 3 clarification questions when needed.
3. User receives a relevant artifact.
4. Human decides next step.

---

## Next patch checklist

1. Add `lib/brevo/client.ts`.
2. Add `lib/leads/validateLeadPayload.ts`.
3. Add `app/api/leads/danininet/route.ts`.
4. Add `app/api/leads/daninilans/route.ts`.
5. Replace any `mailto:` form with fetch POST.
6. Add TrustDisclosure to forms.
7. Verify build.
