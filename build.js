const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./src/index.ts"],
  outdir: "dist",
  platform: "node",
  target: "esnext",
  format: "cjs",
  logLevel: "info",
  external: ["*.node", "vscode"],
  incremental: true,
  bundle: true,
  watch: true,
});

esbuild.build({
  bundle: true,
  incremental: true,
  watch: true,
  entryPoints: ["./src/extension.ts"],
  outdir: "dist",
  external: ["*.node", "vscode"],
  platform: "node",
  target: "esnext",
  format: "cjs",
  logLevel: "info",
});
