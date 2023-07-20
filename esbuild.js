require('esbuild').buildSync({
  entryPoints: ['src/index.mjs'],
  bundle: true,
  platform: 'node',
  external: ['./node_modules/.pnpm/cpu-features@0.0.8/*'],
  minify: true,
  // outdir: 'dist'
  outfile: 'dist/n-sftp.js'
})
