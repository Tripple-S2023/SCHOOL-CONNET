# Deployment Instructions

This file contains concise steps to build and deploy the School-Connect app.

## Local production build

1. Install dependencies:

```bash
npm install
```

2. Build client and server:

```bash
npm run build
```

3. Run production server (PowerShell):

```powershell
$env:NODE_ENV = "production"; node dist/index.cjs
```

On Windows CMD you can use:

```cmd
set NODE_ENV=production&& node dist/index.cjs
```

To make cross-platform, install `cross-env` and update `package.json` start script:

```json
"start": "cross-env NODE_ENV=production node dist/index.cjs"
```

## Deploy to Vercel

1. Push repository to GitHub.
2. Import project in Vercel and set the root to the repository root.
3. Set the build command to `npm run build` and the output directory to `dist/public` (or let Vercel detect).
4. Add environment variables if needed.

## Deploy to Heroku

1. Create a `Procfile` in the repo root:

```
web: node dist/index.cjs
```

2. Ensure `npm run build` runs during deploy (Heroku runs `npm run build` if `heroku-postbuild` or `build` exists). Optionally add a `heroku-postbuild` script to `package.json`.
3. Push to Heroku remote and start the app.

## Deploy with Docker (DigitalOcean / any host)

1. Create a `Dockerfile` that builds and runs the `dist/index.cjs` server.
2. Build and push the image, then deploy to your container host.

## Notes and recommendations

- The project already outputs `dist/public` for static assets and `dist/index.cjs` for the server.
- If deploying as static site only (client), serve `dist/public` via static hosting (Netlify, S3 + CloudFront).
- For full server + client, deploy the Node server that serves `dist/public` and runs API routes.
- Consider adding `cross-env` for cross-platform env var handling.

If you want, I can:
- Start a local browser preview and check specific pages.
- Create a `Procfile` and `Dockerfile` for you.
- Draft Vercel/Heroku platform-specific env configs.

## Dockerfile and CI

- A `Dockerfile` is included for building a production image. Example commands:

```bash
# build image
docker build -t school-connect:latest .

# run container (map port 5000)
docker run -p 5000:5000 --env PORT=5000 --env DATABASE_URL="your-db-url" school-connect:latest
```

- A GitHub Actions workflow `CI` is included at `.github/workflows/ci.yml` which runs typecheck and build on pushes to `main`.

## Pushing to GitHub (quick)

1. Initialize and commit (if not already):

```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create repo with GitHub CLI and push:

```bash
gh repo create <your-username>/school-connect --public --source=. --remote=origin --push
```

3. Connect the repo to Render (recommended) or Railway, then set environment variables (`DATABASE_URL`, etc.) in the service settings.
