# Brevo Lead Flow Specification

## Sender / contact addresses

DaniniNet:
- info@danininet.daninihub.com

DaniniLans:
- info@daninilans.daninihub.com

## Rule

Do not use mailto forms for production lead capture.

Frontend forms must submit to server-side API routes. Brevo API keys must never be exposed in the browser.

## Recommended environment variables

Use .env only for secrets and technical configuration:

- BREVO_API_KEY
- BREVO_DANININET_LIST_ID
- BREVO_DANINILANS_LIST_ID
- BREVO_SENDER_DANININET_EMAIL=info@danininet.daninihub.com
- BREVO_SENDER_DANINILANS_EMAIL=info@daninilans.daninihub.com

Affiliate links do not go to .env. They stay in the registry.

## API routes

DaniniNet:
- POST /api/leads/danininet

DaniniLans:
- POST /api/leads/daninilans

## Required form fields

- email
- name optional
- source
- interest
- locale
- consent true/false

## Validation

Reject if:
- email is missing or invalid
- consent is not true
- source is unknown

## Brevo behavior

- Create or update contact
- Add to correct list
- Attach attributes:
  - SOURCE
  - INTEREST
  - LOCALE
  - PROJECT
  - CONSENT_AT

## Disclosure

All forms must include:

- AI-assisted content disclosure
- affiliate disclosure when relevant
- health disclaimer for DaniniLans
- unsubscribe/consent text when email automation is connected

## Security

- API key server-only
- no key in frontend
- basic rate protection later
- no sensitive health data collection
- no medical diagnosis questions

## DaniniHub method

Lead capture is not a generic newsletter.

Method:
1. User declares interest.
2. System asks at most 3 clarification questions when needed.
3. User receives relevant artifact.
4. Human decides next step.
