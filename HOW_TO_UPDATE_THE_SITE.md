# SMC PHPA Website — How to Update

The PHPA website is hosted on Netlify and connected to GitHub.

Live website: https://smc-phpa.netlify.app

## Making Updates

Make your changes in Replit, then commit and push them to the `main` branch on GitHub.

Netlify will automatically rebuild and publish the website after a push.

---

## Update Board Members

Go to:

`artifacts/phpa-website/src/data/board.ts`

This file contains board member names, positions, emails, and other board information.

Edit the existing entries rather than changing the website layout.

---

## Update Events

Go to:

`artifacts/phpa-website/src/data/events.ts`

Use this file to add, remove, or update events.

For a new event, copy an existing event entry and replace its information.

---

## Update Opportunities

Go to:

`artifacts/phpa-website/src/data/opportunities.ts`

Use this file to add or update volunteer, clinical, research, and other pre-health opportunities.

---

## Update the Pre-Health Guide

Go to:

`artifacts/phpa-website/src/data/guide.ts`

This contains the information used in the pathway guide.

Be careful when changing academic information. Requirements can change, so information should be checked against official sources.

---

## Change Website Copy or Layout

The main pages are in:

`artifacts/phpa-website/src/pages/site-pages.tsx`

Only edit this file when changing the actual wording, sections, or design of the website.

---

## Publishing

Hosting: Netlify

Live site:

`https://smc-phpa.netlify.app`

Netlify is connected to the GitHub repository. Changes pushed to `main` are automatically deployed.

### Netlify Build Settings

Base directory:

`artifacts/phpa-website`

Build command:

`pnpm build`

Publish directory:

`dist/public`

Environment variables:

`PORT = 8888`

`BASE_PATH = /`

Do not change these unless the website's build configuration changes.

---

## If a Page Shows a 404

The file:

`artifacts/phpa-website/public/_redirects`

must contain:

`/*    /index.html   200`

This allows pages such as `/events`, `/about`, and `/guide` to work when opened directly.

---

## Important

The website's design is already built. For normal semester updates, you should usually only need to edit the files in `src/data`.

Avoid changing configuration, build files, or the main page components unless you are intentionally redesigning or developing the website.