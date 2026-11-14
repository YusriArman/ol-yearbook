// Lists every image and video the data files point to, and whether it exists in public/ yet.
// Run with: npm run assets
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const termsDir = join(import.meta.dirname, '../src/terms')
const publicDir = join(import.meta.dirname, '../public')
const paths = new Set()

// Look through the data folder of every term.
for (const term of readdirSync(termsDir)) {
  const dataDir = join(termsDir, term, 'data')
  if (!existsSync(dataDir)) continue
  for (const file of readdirSync(dataDir)) {
    const text = readFileSync(join(dataDir, file), 'utf8')
    for (const match of text.matchAll(/["'](\/[^"']+\.(?:jpe?g|png|webp|avif|mp4))["']/g)) paths.add(match[1])
  }
}

const missing = [...paths].sort().filter((path) => !existsSync(join(publicDir, path)))
console.log(`${paths.size - missing.length} of ${paths.size} files are in place.`)
if (missing.length) console.log('\nStill missing:\n' + missing.map((path) => `  public${path}`).join('\n'))
