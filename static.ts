import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Prefer a local `server/public` folder, but fall back to the Vite build output
  // (`../dist/public`) if it exists. This makes deployment easier when the
  // client build is placed in `dist/public` by the build script.
  const serverPublic = path.resolve(__dirname, "public");
  const distPublic = path.resolve(__dirname, "..", "dist", "public");

  let distPath = serverPublic;
  if (!fs.existsSync(distPath)) {
    if (fs.existsSync(distPublic)) {
      distPath = distPublic;
    } else {
      throw new Error(
        `Could not find the build directory: tried ${serverPublic} and ${distPublic}. Build the client first`,
      );
    }
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
