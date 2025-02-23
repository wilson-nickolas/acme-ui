import { defineConfig } from 'tsup'
import fs from 'fs'
import path from 'path'

export default defineConfig(options => {
  const srcDir = 'src'

  const entries = fs
      .readdirSync(srcDir, { withFileTypes: true })
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.tsx'))
      .map(dirent => path.join(srcDir, dirent.name));

  return {
    entry: entries,
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    treeshake: true,
    external: ['react'],
    ...options,
  }
})
