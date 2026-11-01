# Sahda Rahani Susilawati · Portfolio

Personal portfolio built with Astro, TypeScript, and Tailwind CSS.
Live at [sahdacantik.github.io/portfolio_sahda](https://sahdacantik.github.io/portfolio_sahda/).

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check and build to dist/
```

## Editing content

- **Projects:** one Markdown file per project in `src/content/projects/`. Set `featured: true` and `order` to control the home page.
- **Profile, experience, skills, education:** `src/data/site.ts`.
- **Design tokens:** `src/styles/global.css`.

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.
The `public/*.html` files redirect the URLs of the previous version of the site.
