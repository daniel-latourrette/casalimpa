import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'

const SECTIONS = [
  {
    title: '1. Âmbito',
    body: 'Estes termos regulam a prestação de serviços de limpeza pela Lar Limpo, com sede na Rua da Boavista 120, 4050-107 Porto, nos concelhos do Porto, Vila Nova de Gaia, Matosinhos, Maia, Gondomar e Valongo.',
  },
  {
    title: '2. Orçamentos',
    body: 'Os orçamentos são gratuitos, comunicados por escrito no prazo de 24 horas e válidos por 30 dias. O preço base é de 15€ por hora e inclui produtos, equipamento e deslocação dentro dos seis concelhos servidos. Serviços de limpeza profunda, pós-obra e tratamento de estofos são orçamentados à tarefa.',
  },
  {
    title: '3. Agendamento e cancelamento',
    body: 'O serviço é agendado por telefone, e-mail ou formulário. Cancelamentos comunicados com menos de 24 horas de antecedência podem implicar o pagamento de 50% do valor do serviço agendado, uma vez que a equipa fica alocada.',
  },
  {
    title: '4. Acesso ao imóvel',
    body: 'O cliente garante o acesso ao imóvel na data e hora acordadas, seja presencialmente, por entrega de chave ou por sistema de acesso digital. Se a equipa não conseguir aceder ao imóvel, o serviço é considerado prestado para efeitos de faturação.',
  },
  {
    title: '5. Garantia de satisfação',
    body: 'Se o resultado não corresponder ao que ficou acordado, o cliente deve comunicá-lo no prazo de 48 horas após a prestação do serviço. A Lar Limpo repete o serviço nas zonas em causa, sem qualquer custo adicional.',
  },
  {
    title: '6. Seguro e responsabilidade',
    body: 'A Lar Limpo dispõe de seguro de responsabilidade civil que cobre danos materiais causados durante a prestação do serviço. Ficam excluídos danos resultantes de defeito, desgaste ou fragilidade prévia dos bens, bem como objetos de valor não previamente comunicados.',
  },
  {
    title: '7. Pagamento',
    body: 'O pagamento é efetuado após a prestação do serviço, por transferência bancária, MB Way ou numerário. Nos contratos regulares, a faturação é mensal. Todos os serviços são faturados com IVA à taxa legal em vigor.',
  },
  {
    title: '8. Lei aplicável',
    body: 'Estes termos regem-se pela lei portuguesa. Em caso de litígio, o cliente consumidor pode recorrer ao Centro de Informação de Consumo e Arbitragem do Porto (CICAP), nos termos da Lei n.º 144/2015.',
  },
]

export default function Termos() {
  useEffect(() => {
    document.title = 'Termos e condições | Lar Limpo'
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
          Termos e
          <span className="block font-serif italic font-medium text-primary-dark">condições.</span>
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
