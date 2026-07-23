import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'

const SECTIONS = [
  {
    title: '1. Quem somos',
    body: 'A Lar Limpo é uma empresa de limpezas com sede na Rua da Boavista 120, 4050-107 Porto, contactável através do telefone 220 000 000 e do e-mail geral@larlimpo.pt. Somos responsáveis pelo tratamento dos dados pessoais recolhidos através deste site.',
  },
  {
    title: '2. Que dados recolhemos',
    body: 'Recolhemos apenas os dados que nos fornece voluntariamente no formulário de contacto: nome, endereço de e-mail, número de telemóvel, localidade, a mensagem que escreve e eventuais fotografias que anexe do espaço a limpar.',
  },
  {
    title: '3. Para que usamos os seus dados',
    body: 'Usamos os seus dados exclusivamente para responder ao seu pedido de orçamento, agendar e prestar o serviço de limpeza contratado e cumprir obrigações legais e fiscais. Não utilizamos os seus dados para marketing sem o seu consentimento expresso.',
  },
  {
    title: '4. Com quem partilhamos os seus dados',
    body: 'Não vendemos nem cedemos os seus dados a terceiros. Os dados podem ser acedidos pelos colaboradores da Lar Limpo envolvidos na prestação do serviço e pelos nossos prestadores de serviços de alojamento web e contabilidade, sempre sujeitos a dever de confidencialidade.',
  },
  {
    title: '5. Durante quanto tempo guardamos os dados',
    body: 'Pedidos de orçamento sem contratação são eliminados ao fim de 12 meses. Dados de clientes com serviço prestado são conservados durante 10 anos, por imposição da legislação fiscal portuguesa.',
  },
  {
    title: '6. Os seus direitos',
    body: 'Ao abrigo do RGPD, tem direito a aceder aos seus dados, corrigi-los, apagá-los, limitar ou opor-se ao seu tratamento e à portabilidade dos mesmos. Para exercer qualquer destes direitos, escreva para geral@larlimpo.pt. Tem também o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD).',
  },
  {
    title: '7. Cookies',
    body: 'Este site não utiliza cookies de publicidade nem de perfilagem. Poderão ser usados cookies estritamente necessários ao funcionamento do site e à medição anónima de visitas.',
  },
  {
    title: '8. Alterações a esta política',
    body: 'Podemos atualizar esta política sempre que necessário. A versão em vigor é sempre a publicada nesta página, com a respetiva data de atualização.',
  },
]

export default function Privacidade() {
  useEffect(() => {
    document.title = 'Política de privacidade | Lar Limpo'
  }, [])

  return (
    <div className="min-h-dvh bg-background">
      <div className="noise-overlay" />
      <div className="relative max-w-3xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-dark hover:gap-3 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao site
        </Link>

        <div className="flex items-center gap-2 mt-10 mb-4">
          <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-deep" strokeWidth={2.4} />
          </span>
          <span className="font-display font-bold text-lg text-ink">Lar Limpo</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink leading-[1.05] tracking-tight">
          Política de
          <span className="block font-serif italic font-medium text-primary-dark">privacidade.</span>
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mt-5">
          Última atualização: julho de 2026
        </p>

        <div className="mt-12 space-y-10">
          {SECTIONS.map((s, i) => (
            <section key={i}>
              <h2 className="font-display font-bold text-xl text-ink mb-3">{s.title}</h2>
              <p className="text-muted text-[15px] leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-divider">
          <Link
            to="/"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-6 py-3 rounded-full"
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  )
}
