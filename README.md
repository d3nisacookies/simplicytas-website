# Simplicytas Website

Vite + React 19 + TypeScript multi-page marketing site. See [AGENTS.md](./AGENTS.md) for the project layout.

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the build
```

## Contact form (EmailJS)

The "Talk to Us" form on the home page (`src/pages/Home.tsx`) sends submissions using [EmailJS](https://www.emailjs.com/), so there's no backend to run or maintain. The integration lives in [src/lib/email.ts](./src/lib/email.ts).

### Setup

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/) (free tier is fine for low volume).
2. **Add an email service**: Dashboard → *Email Services* → *Add New Service* → connect the inbox you want submissions sent to (Gmail, Outlook, etc.). Note the generated **Service ID**.
3. **Create an email template**: Dashboard → *Email Templates* → *Create New Template*. Use these variables in the template body (they're sent by the form):
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{message}}`

   Example template body:
   ```
   New enquiry from {{from_name}} ({{from_email}}, {{phone}})

   {{message}}
   ```
   Set the template's "To email" to the address you want to receive enquiries at, and "Reply To" to `{{from_email}}` so you can reply directly. Note the generated **Template ID**.
4. **Get your public key**: Dashboard → *Account* → *General* → **Public Key**.
5. **Configure the site**: copy `.env.example` to `.env` in the project root and fill in the three values:

   ```bash
   cp .env.example .env
   ```

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. Restart `npm run dev` so Vite picks up the new env vars.

### Deploying (Vercel)

This site deploys on Vercel via `vercel.json`. Add the same three variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) under **Project Settings → Environment Variables** in the Vercel dashboard, then redeploy. They must be prefixed `VITE_` to be exposed to client-side code.

### Notes

- The EmailJS **public key** is safe to expose client-side by design — it identifies your account, not a secret. EmailJS uses per-service/template restrictions and rate limiting, not key secrecy, for protection. Still, consider enabling the "Allowed origins" / domain restriction under Account → Security in the EmailJS dashboard so only your production domain can send through your service.
- If the env vars are missing, submitting the form shows an inline error instead of failing silently — check `.env` if that happens locally.
- `.env` is git-ignored; only `.env.example` (no real values) is committed.
