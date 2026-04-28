import engineImg from "@/assets/icons/engineImg.png"
import { useEffect, useRef, useState } from "react"

function AboutHero() {
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

          {/* Texto (título + parágrafo) — no desktop fica à esquerda */}
          <div
            ref={textRef}
            className="flex flex-col"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {/* Eyebrow + Título — sempre primeiro */}
            <div className="order-1">
              <p className="font-poppins font-semibold text-sm md:text-base mb-1">
                <span className="text-primary">Uma</span>
                <span className="text-gray-800"> empresa,</span>
              </p>
              <h1 className="font-poppins font-extrabold text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight uppercase">
                Diversas{" "}
                <span className="text-primary">Funcionalidades</span>
              </h1>
            </div>

            {/* Imagem — no mobile aparece depois do título (order-2), no desktop some daqui */}
            <div className="order-2 flex justify-center mt-6 lg:hidden">
              <img
                src={engineImg}
                alt="Uma empresa, diversas funcionalidades"
                className="w-48 md:w-64"
              />
            </div>

            {/* Parágrafo — no mobile é order-3, no desktop é order-2 */}
            <p className="order-3 font-poppins text-gray-500 text-sm md:text-base mt-5 max-w-xl leading-relaxed">
              Fundada com o propósito de transformar a gestão do comércio de moda,
              nossa empresa nasceu da vivência real dentro das lojas. Desde o início,
              acreditamos que tecnologia só faz sentido quando resolve problemas de verdade.
              Combinamos inovação com simplicidade para entregar um sistema que se adapta
              ao seu ritmo — eficiente, intuitivo e feito para crescer junto com o seu negócio.{" "}
              <strong className="text-gray-700 font-semibold">
                Somos parceiros da sua evolução.
              </strong>
            </p>
          </div>

          {/* Imagem — visível só no desktop (lg:flex), no mobile é renderizada acima */}
          <div
            ref={imgRef}
            className="hidden lg:flex justify-end"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: "150ms",
            }}
          >
            <img
              src={engineImg}
              alt="Uma empresa, diversas funcionalidades"
              className="w-48 md:w-64 lg:w-72"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutHero