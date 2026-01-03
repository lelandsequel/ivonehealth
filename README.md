## IV One Health (Next.js App Router)

### Getting started

Install dependencies:

```bash
npm install
```

Run dev (recommended port):

```bash
npm run dev -- --port 3002
```

Build:

```bash
npm run build
```

### Key routes (do not change existing SEO URLs)

- **Website**: `/`, `/services`, `/conditions-we-treat`, `/guides`, `/patient-process`, `/insurance`, `/policy`
- **Presentation**: `/presentation` and `/presentation/leave-behind`

### Dev performance (pSEO)

Dynamic pSEO routes cap `generateStaticParams()` **only in development** to keep `npm run dev` responsive. Production builds still generate the full set of pages.

### Walkthrough + screenshots

See `docs/WALKTHROUGH.md` for what to capture and where to save screenshots.

### Optional config

Set these env vars if you want real contact info and absolute URLs in JSON-LD:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_PHONE`
