import paymentsImg from "@/assets/payments.png"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Controle de Cartões",
    desc: "Acompanhe de forma detalhada todas as transações realizadas por cartão, incluindo número de operações, valores movimentados e taxas administrativas. Isso facilita a conferência diária com as operadoras.",
  },
  {
    title: "Controle de Cheques",
    desc: "Gerencie cheques de forma automatizada com um ciclo de controle dinâmico e configurável, adaptado às necessidades da sua empresa.",
  },
]

function PaymentManagement() {
  const [imgVisible, setImgVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const imgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setImgVisible(true) },
      { threshold: 0.15 }
    )
    const textObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTextVisible(true) },
      { threshold: 0.15 }
    )
    if (imgRef.current) imgObserver.observe(imgRef.current)
    if (textRef.current) textObserver.observe(textRef.current)
    return () => {
      imgObserver.disconnect()
      textObserver.disconnect()
    }
  }, [])

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

          {/* Texto — lado esquerdo */}
          <div
            ref={textRef}
            className="lg:col-span-3"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {/* Eyebrow */}
            <p className="font-poppins text-primary text-sm font-medium uppercase tracking-widest mb-3">
              Gestão de pagamentos
            </p>

            {/* Título */}
            <h2 className="font-poppins font-bold text-gray-900 text-2xl md:text-3xl lg:text-4xl leading-tight mb-8">
              Tenha controle detalhado de{" "}
              <span className="text-primary">cartões</span>{" "}
              e <span className="text-primary">cheques</span>{" "}
              em um único sistema
            </h2>

            {/* Features */}
            <div className="flex flex-col gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    opacity: textVisible ? 1 : 0,
                    transform: textVisible ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transitionDelay: `${300 + i * 120}ms`,
                  }}
                >
                  <p className="font-poppins font-semibold text-gray-900 text-base md:text-lg mb-1">
                    {f.title}
                  </p>
                  <p className="font-poppins text-gray-500 text-sm md:text-base leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem — "janela" cortada, lado direito */}
          <div
            ref={imgRef}
            className="lg:col-span-2 flex items-center justify-center lg:justify-end"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: "150ms",
            }}
          >
            <div className="relative w-[320px] md:w-[380px]">
              {/* Borda decorativa deslocada atrás */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-primary/20" />

              {/* Janela com a imagem cortada */}
              <div
                className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100"
                style={{ aspectRatio: "16/10" }}
              >
                <img
                  src={paymentsImg}
                  alt="Gestão de pagamentos — tela do sistema"
                  className="absolute inset-0 w-full h-full object-cover object-left-top"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PaymentManagement