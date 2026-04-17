import dataImg from "@/assets/dataImg.png"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Gravação automática de lançamentos",
    desc: "O sistema salva automaticamente os dados durante o uso. Caso ocorra um desligamento inesperado do computador, as informações não são perdidas. No próximo acesso, o lançamento será exibido como pendente, permitindo que você continue exatamente de onde parou.",
  },
  {
    title: "Backup automático na nuvem",
    desc: "O sistema realiza backup automático em modo silencioso, protegendo suas informações sem interromper o trabalho da equipe. Além disso, permite configuração flexível, possibilitando agendar vários backups ao longo do expediente.",
  },
]

function DataSecurity() {
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
    <section className="bg-primary py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

          {/* Imagem — "janela" cortada */}
          <div
            ref={imgRef}
            className="lg:col-span-2 flex items-center justify-center lg:justify-start"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="relative w-[320px] md:w-[380px]">
              {/* Borda decorativa deslocada atrás */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-white/20" />

              {/* Janela com a imagem cortada */}
              <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-white/10" style={{ aspectRatio: "16/10" }}>
                <img
                  src={dataImg}
                  alt="Tela do sistema"
                  className="absolute inset-0 w-full h-full object-cover object-left-top"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div
            ref={textRef}
            className="lg:col-span-3"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: "150ms",
            }}
          >
            {/* Eyebrow */}
            <p className="font-poppins text-white/60 text-sm font-medium uppercase tracking-widest mb-3">
              Dados
            </p>

            {/* Título */}
            <h2 className="font-poppins font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-tight mb-8">
              Segurança{" "}
              <span className="text-white/80 font-normal">que protege o que é mais</span>{" "}
              importante
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
                  <p className="font-poppins font-bold text-white text-base md:text-lg mb-1">
                    {f.title}
                  </p>
                  <p className="font-poppins text-white/70 text-sm md:text-base leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DataSecurity