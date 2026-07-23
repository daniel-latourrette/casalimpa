/**
 * Tier 2 — pré-render de build.
 * Renderiza cada rota para HTML estático e injeta-o em dist/, para que
 * crawlers que não executam JavaScript vejam o conteúdo das secções.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const { render, routes } = await import(path.join(root, 'dist-ssr', 'entry-server.js'))

const TITLES = {
  '/privacidade': 'Política de privacidade | Lar Limpo',
  '/termos': 'Termos e condições | Lar Limpo',
}

for (const route of routes) {
  const html = render(route)
  if (!html) {
    console.warn(`[prerender] sem markup para ${route} — ignorado`)
    continue
  }

  let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  if (TITLES[route]) {
    page = page
      .replace(/<title>[^<]*<\/title>/, `<title>${TITLES[route]}</title>`)
      .replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="https://larlimpo.pt${route}" />`
      )
      .replace(/<meta name="robots"[^>]*>/, '')
      .replace('</head>', '  <meta name="robots" content="noindex, follow" />\n  </head>')
  }

  const outDir = route === '/' ? dist : path.join(dist, route.slice(1))
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), page)
  console.log(`[prerender] ${route} → ${path.relative(root, path.join(outDir, 'index.html'))}`)
}
