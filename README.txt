Combat Frogs — Neon v4 (Cloudflare Pages)

Major changes:
- GLOBAL brick wall background + left→right neon gradient wash that reacts to flicker.
- Side neon lamps with inner+outer glow and realistic flicker.
- Hero centered with LARGE logo (uses assets/logo-gear.png). If you provide assets/logo-gear-only.svg,
  we can rotate only the gear while keeping the frog static for 1:1 animation.
- "Top-site" structure: Hero+CTA → Stats → Preview (featured + gallery with lightbox) → Links → Utility (accordion)
  → Roadmap (accordion/timeline) → FAQ → Join WL → Footer.
- X and OpenSea links prefilled.

How to upload in Cloudflare Pages (new UI):
1) Cloudflare → Workers & Pages → open your project (e.g., combatfrogs2).
2) Tab **Deployments** (or **Uploads**) → **Create deployment** / **Upload new build**.
3) Drop this ZIP → **Deploy**. Preview at https://<project>.pages.dev
4) To add your domain: **Custom domains** → **Set up a custom domain** → add combatfrogs.xyz + www.combatfrogs.xyz.

What to place where:
- assets/logo-gear.png — put your ORIGINAL logo image (current file is a placeholder).
- Optional: assets/logo-gear-only.svg — if you export the gear ring only (SVG), we’ll animate rotation exactly.
- hero-cover.jpg — optional hero side image (place next to index.html).
- gallery/1.webp … gallery/8.webp — artworks for preview.
