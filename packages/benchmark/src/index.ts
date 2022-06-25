import { URL } from 'node:url'
import fg from 'fast-glob'

// Get all files with `suite` suffix from `suites` folder recursively.
const entries = await fg('**/suites/*.suite.ts')
const { pathname } = new URL('..', import.meta.url)

entries.map(entry => import(`${pathname}/${entry}`))
