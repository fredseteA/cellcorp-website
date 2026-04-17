import lampIcon from "@/assets/icons/lamp1.png"
import { useEffect, useRef, useState } from "react"

function FeaturesHero() {
  const [textVisible, setTextVisible] = useState(false)
  const [imgVisible, setImgVisible] = useState(false)
  const textRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTextVisible(true) },
      { threshold: 0.15 }
    )
    const imgObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setImgVisible(true) },
      { threshold: 0.2 }
    )
    if (textRef.current) textObserver.observe(textRef.current)
    if (imgRef.current) imgObserver.observe(imgRef.current)
    return () => {
      textObserver.disconnect()
      imgObserver.disconnect()
    }
  }, [])

  return (
    <section className="bg-white py-16 md:py-24 px-4 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Texto */}
          <div
            ref={textRef}
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {/* Eyebrow */}
            <p className="font-poppins font-semibold text-sm md:text-base mb-2">
              <span className="text-primary">Seus problemas</span>
              <span className="text-gray-700"> são </span>
              <span className="text-primary">nossos</span>
              <span className="text-gray-700"> problemas</span>
            </p>

            {/* Título principal */}
            <h1 className="font-poppins font-extrabold text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight uppercase">
              Conheça nossas{" "}
              <span className="text-primary">Soluções</span>
            </h1>

            {/* Descrição */}
            <p className="font-poppins text-gray-500 text-sm md:text-base mt-5 max-w-xl leading-relaxed">
              Desenvolvemos um sistema pensado de dentro para fora do comércio de roupas,
              acessórios e confecções. Nossa equipe vivenciou o dia a dia dessas lojas e
              entende exatamente quais ferramentas fazem a diferença — do controle de estoque
              às vendas, tudo integrado para que você tome decisões com mais segurança e
              agilidade.{" "}
              <strong className="text-gray-700 font-semibold">
                Um sistema feito por quem conhece o seu negócio.
              </strong>
            </p>
          </div>

          {/* Imagem da lâmpada */}
          <div
            ref={imgRef}
            className="flex justify-center lg:justify-end"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: "150ms",
            }}
          >
            <div className="relative">
              {/* Círculo decorativo atrás */}
              <div className="absolute inset-0 m-auto w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/5" />
              <img
                src={lampIcon}
                alt="Lâmpada — nossas soluções"
                className="relative w-40 md:w-56 lg:w-64 drop-shadow-md"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturesHero