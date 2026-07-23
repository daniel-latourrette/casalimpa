import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'
import Privacidade from './pages/Privacidade.jsx'
import Termos from './pages/Termos.jsx'

const PAGES = {
  '/': App,
  '/privacidade': Privacidade,
  '/termos': Termos,
}

export function render(url) {
  const Page = PAGES[url]
  if (!Page) return ''
  return renderToString(
    <StaticRouter location={url}>
      <Page />
    </StaticRouter>
  )
}

export const routes = Object.keys(PAGES)
