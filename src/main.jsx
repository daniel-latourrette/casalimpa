import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Privacidade from './pages/Privacidade.jsx'
import Termos from './pages/Termos.jsx'
import './index.css'

const container = document.getElementById('root')

const tree = (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

// O build faz pré-render das rotas (ver scripts/prerender.mjs): se já existir
// markup estático, hidratamos em vez de voltar a renderizar do zero.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
