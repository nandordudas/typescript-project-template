import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'

const pwd = dirname(dirname(fileURLToPath(import.meta.url)))
// Get all files with `suite` suffix from `suites` folder recursively.
const entries = await fg('**/suites/*.suite.ts')

entries.map(entry => import(join(pwd, entry)))
