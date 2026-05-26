# Hostinger Deploy Readiness — DaniniNet

## Repository

`danininet/danininet`

This is the repository that should be imported for DaniniNet live deployment.

Do not import `danininet/daninilans` for DaniniNet. That repository is a separate future DaniniLans project and is currently not a valid framework project.

---

# Framework detection

DaniniNet is a valid Next.js project.

Evidence from `package.json`:

- `next`: `16.2.6`
- `react`: `19.2.4`
- `react-dom`: `19.2.4`
- script `build`: `next build`
- script `start`: `next start`
- script `dev`: `next dev`

---

# Hostinger import settings

Use:

- Repository: `danininet/danininet`
- Branch: `main`
- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`

Do not set a custom output directory unless Hostinger explicitly requires it.

---

# Important build note

The project has a prebuild script:

`node scripts/sanitize-dpl-no-prompt.cjs`

This means `npm run build` runs the sanitizer before Next build.

The sanitizer is part of the DaniniNet governance rule against prompt-pack wording.

---

# Required environment variables

For basic site build, no affiliate link env variables are required.

Affiliate links are stored in registry, not `.env`.

For Brevo lead flow, later required:

```env
BREVO_API_KEY=
BREVO_DANININET_LIST_ID=
BREVO_DANINILANS_LIST_ID=
BREVO_DANININET_SENDER_EMAIL=info@danininet.daninihub.com
BREVO_DANINILANS_SENDER_EMAIL=info@daninilans.daninihub.com
```

Do not expose Brevo API key to frontend.

---

# Common import error

If Hostinger says:

`Unsupported framework or invalid project structure`

Check:

1. Correct repository selected: `danininet/danininet`
2. Branch selected: `main`
3. `package.json` exists at repository root
4. `app/` exists at repository root
5. Build command is `npm run build`
6. Repo is not empty
7. You are not importing `danininet/daninilans` accidentally

---

# DaniniLans warning

`danininet/daninilans` currently contains only README and cannot be imported to Hostinger as a Next.js project until a real Next.js structure is added.

DaniniLans should be built later as a separate project.

---

# Deploy priority

1. Deploy DaniniNet first.
2. Verify products page.
3. Verify blog page.
4. Verify contact/support/lead pages.
5. Verify no prompt-pack wording appears publicly.
6. Verify disclosure blocks.
7. Then start DaniniLans in separate repo/chat.

---

# Live readiness checklist

Before final live push:

- Products page shows multiple product directions.
- Registry exists.
- Disclosure components exist.
- Blog hub is coherent.
- Brevo API implementation is planned.
- No mailto forms in final production lead flow.
- SEO metadata should be reviewed.
- Build must pass.
