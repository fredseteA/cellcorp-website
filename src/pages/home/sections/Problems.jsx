import personIcon from "@/assets/icons/personIcon.svg"
import { useEffect, useRef, useState } from "react"
import { PackageX, TrendingDown, Clock, BarChart2 } from "lucide-react"

const problems = [
  {
    icon: <PackageX className="w-5 h-5" />,
    title: "Controle de estoque desorganizado",
    desc: "Excesso de itens parados? Pouca ou nenhuma exatidão na quantidade de itens totais?",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: "Prejuízo oculto",
    desc: "Não consegue identificar onde está perdendo dinheiro no seu negócio?",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Processos lentos e manuais",
    desc: "Atenda melhor seus clientes com processos mais rápidos e eficientes.",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Falta de informações confiáveis",
    desc: "Toma decisões importantes sem ter dados precisos sobre seu negócio?",
  },
]

function ProblemCard({ icon, title, desc, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm relative overflow-hidden transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-24px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Decoração canto direito */}
      <div className="absolute right-0 top-0 w-16 h-16 rounded-bl-full bg-primary/10" />

      {/* Ícone */}
      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mt-0.5">
        {icon}
      </div>

      {/* Texto */}
      <div>
        <p className="font-poppins font-bold text-gray-900 text-sm md:text-base">{title}</p>
        <p className="font-poppins text-gray-500 text-xs md:text-sm mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function Problems() {
  const [imgVisible, setImgVisible] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setImgVisible(true) },
      { threshold: 0.2 }
    )
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="mb-2">
          <h2 className="font-poppins font-bold text-gray-900 text-2xl md:text-3xl lg:text-4xl">
            Você enfrenta essas <span className="text-primary">dificuldades</span> na sua loja?
          </h2>
          <p className="font-poppins text-gray-500 text-sm md:text-base mt-3 max-w-2xl">
            Nossos desenvolvedores conhecem de perto o dia-a-dia do comércio de roupas e acessórios,
            assim reconhecemos os maiores problemas atualmente encontrados nesses ambientes:
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {problems.map((p, i) => (
              <ProblemCard key={i} index={i} {...p} />
            ))}
          </div>

          {/* Imagem + botão */}
          <div
            ref={imgRef}
            className="flex flex-col items-center gap-8"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: "200ms",
            }}
          >
            <img
              src={personIcon}
              alt="Pessoa estressada"
              className="w-48 md:w-64 lg:w-72 drop-shadow-md"
            />

            <a
              href="/features"
              className="flex items-center gap-2 bg-primary text-white font-poppins font-semibold text-sm md:text-base px-6 py-3 rounded-xl hover:opacity-90 transition shadow-md"
            >
              Descubra como resolver
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Problems