import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  BadgeCheck,
  Users,
  Home,
  BedDouble,
  Sparkles,
  HardHat,
  PackageOpen,
  Sofa,
  Menu,
  X,
  Upload,
  ChevronDown,
  Clock,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constantes / Conteúdo
---------------------------------------------------------------- */
const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Zonas', href: '#zonas' },
  { label: 'Contacto', href: '#contacto' },
]

const TELEFONE_DISPLAY = '220 000 000'
const TELEFONE_TEL = '+351220000000'
const EMAIL = 'geral@larlimpo.pt'
const MORADA = 'Rua da Boavista 120, 4050-107 Porto'

const SERVICES_FULL = [
  {
    icon: Home,
    title: 'Limpeza doméstica regular',
    text: 'Limpeza semanal ou quinzenal de apartamentos e moradias. Produtos e equipamento incluídos, sempre com a mesma equipa a entrar em sua casa.',
  },
  {
    icon: BedDouble,
    title: 'Turnover de Alojamento Local',
    text: 'Limpeza entre hóspedes, troca de roupa de cama e toalhas, reposição de amenities e fotografias de verificação antes do check-in seguinte.',
  },
  {
    icon: Sparkles,
    title: 'Limpeza profunda',
    text: 'Limpeza de fundo de toda a casa: interiores de armários, eletrodomésticos por dentro, rodapés, juntas de azulejo e zonas que a rotina não alcança.',
  },
  {
    icon: HardHat,
    title: 'Limpeza pós-obra',
    text: 'Remoção de poeiras finas, restos de tinta, cimento e silicone depois de uma remodelação. Deixamos a casa pronta a habitar, não apenas varrida.',
  },
  {
    icon: PackageOpen,
    title: 'Fim de contrato e mudanças',
    text: 'Limpeza completa para entregar a casa ao senhorio ou receber novos inquilinos, com checklist assinada que serve de prova do estado do imóvel.',
  },
  {
    icon: Sofa,
    title: 'Estofos e colchões',
    text: 'Lavagem e higienização de sofás, cadeiras, tapetes e colchões por injeção-extração, com secagem rápida e produtos sem perfumes agressivos.',
  },
]

const ZONAS = [
  { concelho: 'Porto', freguesias: 'Cedofeita, Bonfim, Paranhos, Campanhã, Ramalde, Aldoar' },
  { concelho: 'Vila Nova de Gaia', freguesias: 'Mafamude, Canidelo, Oliveira do Douro, Santa Marinha' },
  { concelho: 'Matosinhos', freguesias: 'Matosinhos, Leça da Palmeira, Senhora da Hora, Custóias' },
  { concelho: 'Maia', freguesias: 'Águas Santas, Castêlo da Maia, Moreira, Pedrouços' },
  { concelho: 'Gondomar', freguesias: 'Rio Tinto, Fânzeres, São Cosme, Valbom' },
  { concelho: 'Valongo', freguesias: 'Ermesinde, Alfena, Campo, Sobrado' },
]

const FAQ_ITEMS = [
  {
    q: 'Quanto custa uma limpeza doméstica no Porto?',
    a: 'As limpezas domésticas da Lar Limpo começam em 15€ por hora, com produtos e equipamento incluídos. O valor final depende da área da casa e da frequência: limpezas semanais ou quinzenais ficam mais baratas por hora do que limpezas pontuais.',
  },
  {
    q: 'Que zonas é que a Lar Limpo serve?',
    a: 'A Lar Limpo serve todo o Grande Porto: Porto, Vila Nova de Gaia, Matosinhos, Maia, Gondomar e Valongo. No Porto, em Vila Nova de Gaia e em Matosinhos há disponibilidade para turnovers de Alojamento Local no próprio dia.',
  },
  {
    q: 'Os produtos de limpeza estão incluídos no preço?',
    a: 'Sim. A Lar Limpo leva todos os produtos e equipamento necessários, sem custo adicional. Os produtos são eco certificados, biodegradáveis e seguros para crianças e animais domésticos.',
  },
  {
    q: 'Fazem limpezas de Alojamento Local entre hóspedes?',
    a: 'Sim. A Lar Limpo faz turnovers completos de Alojamento Local: limpeza de todas as divisões, troca de roupa de cama e toalhas, reposição de amenities e verificação fotográfica antes do check-in seguinte. Trabalhamos todos os dias das 7h às 21h, incluindo fins de semana e feriados.',
  },
  {
    q: 'Têm seguro? E se alguma coisa se estragar durante a limpeza?',
    a: 'Sim. A Lar Limpo tem seguro de responsabilidade civil que cobre danos ocorridos durante o serviço, e toda a equipa é contratada e verificada pela empresa — não trabalhamos com subcontratados. Se o resultado não corresponder ao combinado, repetimos o serviço sem custo.',
  },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Sparkles className="h-5 w-5 text-deep" strokeWidth={2.4} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/50 transition" />
            </span>
            <span
              className={`font-display font-bold tracking-tight text-lg ${
                scrolled ? 'text-ink' : 'text-white'
              } transition-colors`}
            >
              Lar Limpo
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight lift-on-hover ${
                  scrolled ? 'text-ink/70 hover:text-primary-dark' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-deep px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Pedir orçamento
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 rounded-full ${scrolled ? 'text-ink' : 'text-white'}`}
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl text-ink">Lar Limpo</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/60" aria-label="Fechar menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-deep px-6 py-4 rounded-full font-semibold w-full"
          >
            Pedir orçamento
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 })
      gsap.from('.hero-cta, .hero-meta', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="inicio" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=80"
          alt="Sala de estar luminosa e impecavelmente limpa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/90 via-deep/55 to-primary/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/35 to-transparent" />
      </div>

      {/* Bolhas de sabão flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[18%] h-2.5 w-2.5 rounded-full bg-primary/60 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[55%] right-[10%] h-1.5 w-1.5 rounded-full bg-white/40 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] right-[26%] h-1.5 w-1.5 rounded-full bg-primary-light/70 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[30%] left-[12%] h-2 w-2 rounded-full bg-white/25 animate-float" style={{ animationDelay: '2.2s' }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="px-6 sm:px-10 lg:px-16 max-w-4xl">
          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-5xl md:text-6xl">
              Limpezas domésticas
            </span>
            <span
              className="hero-line-2 block font-serif italic font-medium text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2"
              style={{ lineHeight: '0.95' }}
            >
              no Grande Porto.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-2xl text-white/75 text-base sm:text-lg mt-8 leading-relaxed">
            A Lar Limpo faz limpezas domésticas, turnovers de Alojamento Local e limpezas profundas
            pós-obra no Porto, Vila Nova de Gaia, Matosinhos, Maia, Gondomar e Valongo,
            <span className="text-white"> com preços desde 15€/hora.</span>
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-primary text-deep font-semibold px-7 py-4 rounded-full shadow-2xl shadow-primary/40"
            >
              Pedir orçamento grátis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${TELEFONE_TEL}`}
              className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-7 py-4 rounded-full"
            >
              <Phone className="h-4 w-4" />
              {TELEFONE_DISPLAY}
            </a>
          </div>

          <p className="hero-meta font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 mt-8">
            Todos os dias · 7h — 21h
          </p>
        </div>

        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Card 1 — Checklist por divisão (stacked shuffler)
---------------------------------------------------------------- */
function DivisoesShuffler() {
  const items = [
    { tag: 'Cozinha', label: 'Bancadas, placa e eletrodomésticos', pontos: '18 pontos' },
    { tag: 'Casa de banho', label: 'Sanitários, azulejos e juntas', pontos: '14 pontos' },
    { tag: 'Quartos', label: 'Pó, chão e roupa de cama', pontos: '11 pontos' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-muted">{item.pontos}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{ background: idx < 24 - offset * 6 ? '#26B6A8' : '#E2E9E7' }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Card 2 — Assinatura: turnover de Alojamento Local
   (bolhas de sabão a cair de um pulverizador sobre superfície polida)
---------------------------------------------------------------- */
function TurnoverBubbles() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(4)

  const statuses = [
    { text: 'Check-out concluído · 11h02', label: 'Livre', tone: 'primary' },
    { text: 'Turnover em curso · T2 Cedofeita', label: 'A limpar', tone: 'accent' },
    { text: 'Roupa trocada · fotos enviadas', label: 'Verificado', tone: 'primary' },
    { text: 'Pronto para check-in · 15h00', label: 'Pronto', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Pronto') setCount((c) => c + 1)
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const bubbles = [
    { left: '14%', delay: '0.0s', dur: '2.8s', size: 15 },
    { left: '26%', delay: '1.3s', dur: '3.2s', size: 11 },
    { left: '38%', delay: '0.6s', dur: '2.6s', size: 18 },
    { left: '50%', delay: '1.9s', dur: '3.0s', size: 13 },
    { left: '63%', delay: '0.9s', dur: '2.7s', size: 16 },
    { left: '75%', delay: '2.1s', dur: '3.3s', size: 12 },
    { left: '86%', delay: '0.4s', dur: '2.9s', size: 15 },
  ]

  const sparkles = [
    { left: '23%', delay: '0.2s' },
    { left: '49%', delay: '1.0s' },
    { left: '77%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald'
      ? 'text-emerald-600'
      : status.tone === 'accent'
      ? 'text-accent-dark'
      : 'text-primary-dark'
  const toneDot =
    status.tone === 'emerald' ? 'bg-emerald-500' : status.tone === 'accent' ? 'bg-accent' : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{ background: 'linear-gradient(180deg, #F1FAF8 0%, #DEF1EE 70%, #CFE9E5 100%)' }}
    >
      {/* Halos de espuma */}
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/50 blur-xl" />

      {/* Cabeçalho */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2.2} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-dark">
            Alojamento Local
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">hoje</span>
        </div>
      </div>

      {/* Barra pulverizadora com bicos */}
      <svg className="absolute left-3 right-3 top-9 h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
        <rect x="0" y="6" width="400" height="8" rx="4" fill="#26B6A8" fillOpacity="0.22" />
        <rect x="0" y="7" width="400" height="2" fill="#12766D" fillOpacity="0.35" />
        <rect x="0" y="4" width="6" height="12" rx="1.5" fill="#12766D" fillOpacity="0.5" />
        <rect x="394" y="4" width="6" height="12" rx="1.5" fill="#12766D" fillOpacity="0.5" />
        {[60, 152, 248, 340].map((x) => (
          <g key={x}>
            <rect x={x - 3} y="2" width="6" height="6" rx="1" fill="#12766D" />
            <path d={`M ${x - 4} 14 L ${x + 4} 14 L ${x + 2} 18 L ${x - 2} 18 Z`} fill="#12766D" fillOpacity="0.7" />
          </g>
        ))}
      </svg>

      {/* Campo de bolhas */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {bubbles.map((b, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: b.left,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animation: `foam-fall ${b.dur} cubic-bezier(0.45,0.05,0.55,0.95) ${b.delay} infinite`,
              filter: 'drop-shadow(0 1px 2px rgba(18,118,109,0.22))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 32 32"
          >
            <defs>
              <radialGradient id={`bub-${i}`} cx="35%" cy="30%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="55%" stopColor="#8FE0D6" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#26B6A8" stopOpacity="0.75" />
              </radialGradient>
            </defs>
            <circle cx="16" cy="16" r="14" fill={`url(#bub-${i})`} />
            <circle cx="16" cy="16" r="14" fill="none" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1.2" />
            <ellipse cx="11" cy="10" rx="3.6" ry="2.4" fill="white" fillOpacity="0.85" transform="rotate(-25 11 10)" />
          </svg>
        ))}
      </div>

      {/* Superfície polida */}
      <svg className="absolute bottom-9 left-3 right-3 h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
        <line x1="0" y1="6" x2="200" y2="6" stroke="#12766D" strokeOpacity="0.4" strokeWidth="1.2" />
        <line x1="0" y1="8.5" x2="200" y2="8.5" stroke="#26B6A8" strokeOpacity="0.22" strokeWidth="0.8" />
      </svg>

      {/* Brilhos na superfície */}
      <div className="absolute bottom-[32px] left-3 right-3 h-4">
        {sparkles.map((s, i) => (
          <svg
            key={i}
            className="absolute top-0 -translate-x-1/2"
            style={{ left: s.left, width: '14px', height: '14px', animation: `shine-pop 2.4s ease-out ${s.delay} infinite` }}
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0 C 13 8, 16 11, 24 12 C 16 13, 13 16, 12 24 C 11 16, 8 13, 0 12 C 8 11, 11 8, 12 0 Z"
              fill="#26B6A8"
            />
          </svg>
        ))}
      </div>

      {/* Estado */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === 'accent' && (
              <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />
            )}
          </span>
          <span
            key={status.text}
            className={`font-mono text-[10px] truncate ${toneText}`}
            style={{ animation: 'foam-fadein 0.35s ease-out' }}
          >
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes foam-fall {
          0%   { transform: translate(-50%, -10px) scale(0.7); opacity: 0; }
          14%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translate(-50%, 92px) scale(1.05); opacity: 0; }
        }
        @keyframes shine-pop {
          0%   { transform: translateX(-50%) scale(0.2) rotate(0deg); opacity: 0; }
          25%  { transform: translateX(-50%) scale(1) rotate(45deg); opacity: 0.9; }
          70%  { transform: translateX(-50%) scale(0.3) rotate(90deg); opacity: 0; }
          100% { transform: translateX(-50%) scale(0.2) rotate(90deg); opacity: 0; }
        }
        @keyframes foam-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Card 3 — Agendamento com cursor
---------------------------------------------------------------- */
function AgendamentoScheduler() {
  const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
  const [step, setStep] = useState(0)
  const activeDay = 2

  useEffect(() => {
    const interval = setInterval(() => setStep((prev) => (prev + 1) % 5), 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0:
        return { x: 8, y: 110, opacity: 0 }
      case 1:
        return { x: 60, y: 60, opacity: 1 }
      case 2:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4:
        return { x: 130, y: 130, opacity: 1 }
      default:
        return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Semana 30 · Julho
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">
          Agendamento
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? 'bg-primary text-deep scale-110 shadow-lg shadow-primary/30'
                : 'bg-background text-ink'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 21}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-accent text-deep scale-[1.02] shadow-md shadow-accent/30' : 'bg-divider/60 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Limpeza agendada' : 'Escolha um dia'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? 'scale(0.85)' : 'scale(1)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#14201F" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Casa',
      heading: 'Limpeza doméstica',
      sub: 'Semanal, quinzenal ou pontual',
      text: 'Seguimos uma checklist por divisão — cozinha, casas de banho, quartos e zonas comuns — para que o resultado seja o mesmo em todas as visitas, com ou sem si em casa.',
      Component: DivisoesShuffler,
    },
    {
      eyebrow: '02 / Alojamento Local',
      heading: 'Turnovers de AL',
      sub: 'Entre check-out e check-in',
      text: 'Limpeza completa, troca de roupa de cama e toalhas, reposição de amenities e fotografias de verificação. Todos os dias das 7h às 21h, fins de semana incluídos.',
      Component: TurnoverBubbles,
    },
    {
      eyebrow: '03 / Pós-obra',
      heading: 'Limpezas profundas',
      sub: 'Obra, mudança ou fim de contrato',
      text: 'Poeiras finas, restos de tinta, cimento e silicone. Agendamos a data que precisa e entregamos a casa pronta a habitar, com checklist assinada.',
      Component: AgendamentoScheduler,
    },
  ]

  return (
    <section id="servicos" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
            ╱ O que fazemos
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Três serviços.
            <span className="block font-serif italic font-medium text-primary-dark mt-1">
              Um só padrão.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {card.eyebrow}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/30 group-hover:text-primary-dark group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.8}
                />
              </div>

              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary-dark text-sm mt-1">{card.sub}</p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pilares
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01',
      title: 'Cobertura',
      target: 6,
      suffix: '',
      label: 'concelhos no Grande Porto',
      desc: 'Porto, Vila Nova de Gaia, Matosinhos, Maia, Gondomar e Valongo. A equipa desloca-se sem custo adicional dentro destes seis concelhos.',
    },
    {
      n: '02',
      title: 'Disponibilidade',
      target: 7,
      suffix: '/7',
      label: 'dias por semana, 7h — 21h',
      desc: 'Trabalhamos todos os dias do ano, fins de semana e feriados incluídos. É por isso que conseguimos turnovers de Alojamento Local no próprio dia.',
    },
    {
      n: '03',
      title: 'Garantia',
      target: 100,
      suffix: '%',
      label: 'satisfação garantida',
      desc: 'Se o resultado não corresponder ao que ficou combinado, a equipa volta e repete o serviço sem custo. Está no contrato, não no slogan.',
    },
  ]

  return (
    <section
      id="confianca"
      ref={ref}
      className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary-dark mb-5">
              ╱ Três pilares
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              Os números por
              <span className="block font-serif italic font-medium text-primary-dark">trás da confiança.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Três números que definem como trabalhamos. Não é marketing — é o que entregamos em cada visita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {p.n} / {p.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>

              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                {p.suffix && (
                  <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-3 sm:mb-4">
                    {p.suffix}
                  </span>
                )}
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-dark mt-5">
                {p.label}
              </p>

              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }}
                />
              </div>

              <span className="absolute top-9 right-9 sm:top-12 sm:right-12 font-mono text-[9px] uppercase tracking-widest text-primary/30">
                {p.n}.pt
              </span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocolo — cartões sticky
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Orçamento',
      tagline: 'Sem visita obrigatória.',
      text: 'Diga-nos a tipologia da casa, o tipo de limpeza e a localidade. Devolvemos um orçamento fixo em 24 horas, com o número de horas e o valor final. Sem custos escondidos e sem taxa de deslocação dentro dos seis concelhos.',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=80',
      alt: 'Profissional de limpeza a calçar luvas antes do serviço',
      meta: 'Passo 1 / Orçamento',
    },
    {
      num: '02',
      title: 'A equipa em ação',
      tagline: 'Sempre as mesmas pessoas.',
      text: 'A equipa é contratada e verificada pela Lar Limpo — não subcontratamos. Chega com todos os produtos eco certificados e segue a checklist da sua casa, divisão a divisão, para que o resultado seja igual em todas as visitas.',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80',
      alt: 'Mão com luva a segurar pulverizador de produto de limpeza',
      meta: 'Passo 2 / Execução',
    },
    {
      num: '03',
      title: 'Verificação',
      tagline: 'Ou voltamos.',
      text: 'No fim recebe a checklist preenchida e, no caso do Alojamento Local, fotografias de cada divisão. Se alguma coisa não estiver como combinado, a equipa volta e repete o serviço sem custo.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
      alt: 'Casa de banho impecavelmente limpa após o serviço',
      meta: 'Passo 3 / Garantia',
    },
  ]

  return (
    <section id="processo" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
          ╱ Como trabalhamos
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Três passos.
          <span className="block font-serif italic font-medium text-primary-dark">Zero surpresas.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                    {step.meta}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2.5 py-1 rounded-full">
                    Método Lar Limpo
                  </span>
                </div>

                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-primary/15 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-primary-dark text-2xl sm:text-3xl mt-3">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">
                    Passo {step.num}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {step.num} / Lar Limpo
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Grelha de serviços
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              ╱ Tudo o que limpamos
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Da rotina semanal
              <span className="block font-serif italic font-medium text-primary">ao pós-obra.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            Casas particulares e Alojamento Local, do T0 à moradia. Produtos, equipamento e deslocação
            incluídos no preço por hora.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.03] transition-colors duration-500 relative"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-primary group-hover:text-deep" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Zonas que servimos
---------------------------------------------------------------- */
function Zonas() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.zona-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
        y: 26,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.07,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="zonas" ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
            ╱ Onde trabalhamos
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Zonas que servimos
            <span className="block font-serif italic font-medium text-primary-dark">no Grande Porto.</span>
          </h2>
          <p className="text-muted text-lg mt-6 leading-relaxed">
            A Lar Limpo serve seis concelhos do Grande Porto — Porto, Vila Nova de Gaia, Matosinhos,
            Maia, Gondomar e Valongo — incluindo as freguesias de Cedofeita, Bonfim, Paranhos,
            Mafamude, Canidelo, Senhora da Hora, Águas Santas e Rio Tinto. No Porto, em Vila Nova de
            Gaia e em Matosinhos há disponibilidade para turnovers de Alojamento Local no próprio dia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ZONAS.map((z, i) => (
            <div
              key={i}
              className="zona-card group bg-surface border border-divider rounded-4xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <MapPin className="h-4 w-4 text-primary-dark group-hover:text-deep" strokeWidth={2.2} />
                </span>
                <h3 className="font-display font-bold text-lg text-ink">{z.concelho}</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">{z.freguesias}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-4xl bg-primary/5 border border-primary/15">
          <span className="h-11 w-11 shrink-0 rounded-2xl bg-primary/15 flex items-center justify-center">
            <Clock className="h-5 w-5 text-primary-dark" strokeWidth={2} />
          </span>
          <p className="text-ink text-[15px] leading-relaxed">
            <span className="font-semibold">A sua freguesia não está na lista?</span>{' '}
            <span className="text-muted">
              Ligue para {TELEFONE_DISPLAY} — se estiver a menos de 20 minutos do Porto, quase sempre
              conseguimos ir.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Sinais de confiança
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck,
      title: 'Seguro de responsabilidade civil',
      text: 'Todos os serviços da Lar Limpo estão cobertos por seguro de responsabilidade civil, que responde por danos ocorridos durante a limpeza.',
    },
    {
      Icon: Leaf,
      title: 'Produtos eco certificados',
      text: 'Usamos produtos biodegradáveis e certificados, seguros para crianças e animais domésticos. Estão incluídos no preço por hora.',
    },
    {
      Icon: Users,
      title: 'Equipa própria e verificada',
      text: 'A equipa é contratada pela Lar Limpo, com referências verificadas. Não subcontratamos — é sempre a mesma pessoa a entrar em sua casa.',
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
            ╱ Porquê confiar em nós
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            Chaves de casa são coisa séria.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-white border border-divider rounded-4xl p-6 hover:border-primary/40 transition-all duration-700 ease-out shadow-sm ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-primary-dark mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contacto"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30"
          >
            Pedir orçamento grátis
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   FAQ
---------------------------------------------------------------- */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
            ╱ Dúvidas comuns
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Perguntas
            <span className="font-serif italic font-medium text-primary-dark"> frequentes.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen ? 'border-primary/40 bg-surface shadow-lg shadow-primary/5' : 'border-divider bg-surface'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-display font-semibold text-lg sm:text-xl text-ink leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary-dark transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted text-[15px] leading-relaxed px-6 pb-6">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Formulário de contacto
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', localidade: '', message: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle')
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  return (
    <section id="contacto" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
              ╱ Contacto
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Peça o seu
              <span className="block font-serif italic font-medium text-primary-dark">orçamento.</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              Diga-nos a tipologia da casa, a localidade e o tipo de limpeza. Respondemos com um valor
              fixo em 24 horas, sem compromisso.
            </p>

            <div className="mt-10 space-y-4">
              <a href={`tel:${TELEFONE_TEL}`} className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Phone className="h-5 w-5 text-primary-dark group-hover:text-deep" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                    Ligue diretamente
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">{TELEFONE_DISPLAY}</span>
                </span>
              </a>

              <a href={`mailto:${EMAIL}`} className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary-dark group-hover:text-deep" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                    Escreva para
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">{EMAIL}</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary-dark" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                    Morada
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">{MORADA}</span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary-dark" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                    Horário
                  </span>
                  <span className="font-display font-semibold text-ink text-lg">
                    Todos os dias, 7h — 21h
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-dark mb-2">
                Proteção de dados
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Os seus dados são usados apenas para responder ao seu pedido de orçamento e são
                guardados em segurança. Não os partilhamos com terceiros nem os usamos para marketing.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5"
            >
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Nome" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field
                      label="E-mail"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                    <Field
                      label="Telemóvel"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                    <Field
                      label="Localidade"
                      value={form.localidade}
                      onChange={(v) => setForm({ ...form, localidade: v })}
                    />
                  </div>

                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
                      A sua mensagem *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Ex.: T2 em Cedofeita, limpeza quinzenal, com casa de banho e cozinha..."
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>

                  <div
                    ref={dropRef}
                    onDragOver={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.add('!border-primary', '!bg-primary/5')
                    }}
                    onDragLeave={() => {
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                    }}
                    onDrop={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                      handleFiles(e.dataTransfer.files)
                    }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <input
                      type="file"
                      multiple
                      id="file-up"
                      className="hidden"
                      onChange={(e) => handleFiles(e.target.files)}
                      accept="image/*"
                    />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-dark mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">
                        Anexe fotografias do espaço
                      </p>
                      <p className="text-xs text-muted mt-1">
                        Clique ou arraste ficheiros para aqui (máx. 5 imagens)
                      </p>
                      {files.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {files.map((f, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark text-xs px-3 py-1.5 rounded-full font-mono"
                            >
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                      Respondemos em 24 horas. Os campos com * são obrigatórios.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'A enviar...' : 'Enviar pedido'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">
                    Obrigado pelo seu pedido
                  </h3>
                  <p className="text-muted max-w-md mx-auto">
                    Recebemos o seu pedido. Respondemos com o orçamento em 24 horas — se for urgente,
                    ligue para {TELEFONE_DISPLAY}.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Rodapé
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Casa limpa,
            <span className="font-serif italic font-medium text-primary block">semana livre.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-lg">
              A Lar Limpo é uma empresa de limpezas do Grande Porto, com equipa própria verificada,
              seguro de responsabilidade civil e produtos eco certificados, disponível todos os dias
              das 7h às 21h, desde 15€/hora.
            </p>
            <a
              href="#contacto"
              className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto"
            >
              Pedir orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Bloco NAP */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-deep" strokeWidth={2.4} />
              </span>
              <span className="font-display font-bold text-lg">Lar Limpo</span>
            </div>
            <address className="not-italic text-white/60 text-sm leading-relaxed space-y-1">
              <div className="font-display font-semibold text-white/85">Lar Limpo</div>
              <div>{MORADA}</div>
              <div>
                <a href={`tel:${TELEFONE_TEL}`} className="hover:text-primary transition">
                  {TELEFONE_DISPLAY}
                </a>
              </div>
              <div>
                <a href={`mailto:${EMAIL}`} className="hover:text-primary transition">
                  {EMAIL}
                </a>
              </div>
            </address>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mt-6">
              NIF: 000 000 000
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Serviços</p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#servicos" className="text-white/65 hover:text-primary transition text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Zonas</p>
            <ul className="space-y-2.5">
              {ZONAS.slice(0, 5).map((z, i) => (
                <li key={i}>
                  <a href="#zonas" className="text-white/65 hover:text-primary transition text-sm">
                    Limpezas em {z.concelho}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Empresa</p>
            <ul className="space-y-2.5">
              <li>
                <a href="#confianca" className="text-white/65 hover:text-primary transition text-sm">
                  Confiança
                </a>
              </li>
              <li>
                <a href="#processo" className="text-white/65 hover:text-primary transition text-sm">
                  Processo
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/65 hover:text-primary transition text-sm">
                  Perguntas frequentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/65 hover:text-primary transition text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              Aberto hoje · 7h — 21h
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <Link to="/privacidade" className="hover:text-primary transition">
              Política de privacidade
            </Link>
            <Link to="/termos" className="hover:text-primary transition">
              Termos e condições
            </Link>
            <span>© 2026 Lar Limpo</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <Zonas />
        <TrustSignals />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
