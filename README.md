# Professional React + TypeScript GitHub Pages Site

This is a Vite + React + TypeScript starter configured to deploy to GitHub Pages.

## Scripts

- npm run dev — start dev server
- npm run build — build for production
- npm run preview — preview production build
- npm run deploy — deploy to GitHub Pages using gh-pages

## Notes

- Set repository `main` branch and push code to GitHub. The Actions workflow will build and publish to gh-pages branch.
- Make sure `homepage` or `base` is not needed in this setup because `vite.config.ts` uses relative base.
