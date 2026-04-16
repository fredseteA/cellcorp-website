import { useEffect, useRef, useState } from "react"
import nextStepImg from "../../../assets/nextStepImg.png"

function NextStep() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"
    const message = "Olá! Gostaria de agendar uma demonstração do TopCell"
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }
  const [visible, setVisible] = useState(false)
    const ref = useRef(null)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(true) },
        { threshold: 0.2 }
      )
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])

  const handleDownloadClick = () => {
    // Handle download logic
    console.log("Download clicked")
  }

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div 
        className="w-full max-w-6xl mx-auto"
        ref={ref}
      >

        {/* Header */}
        <div 
          className="mb-10 md:mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2 className="font-poppins font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl mb-2">
            Seu <span className="text-primary">próximo passo</span> começa aqui...
          </h2>
          <p className="font-poppins font-light text-gray-500 text-sm md:text-base">
            Soluções desenhadas para maximizar o seu potencial e seus lucros.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          {/* Left - Screenshot */}
          <div className="w-full lg:w-[60%]">
            <div 
              className="rounded-lg overflow-hidden shadow-lg border border-gray-200"
              style={{
                transform: visible ? "translateY(0px)" : "translateY(32px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "150ms",
              }}
            >
              <img
                src={nextStepImg}
                alt="TopCell sistema de gestão"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - CTA */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">

            {/* Text Block */}
            <div
               style={{
                transform: visible ? "translateY(0px)" : "translateY(32px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "150ms",
              }}
            >
              <p className="font-poppins text-primary font-medium text-base md:text-lg mb-1">
                Interessado, mas não tem certeza?
              </p>
              <h3 className="font-poppins font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl mb-4">
                Baixe ou agende uma demonstração <span className="text-primary">gratuita</span>!
              </h3>
              <p className="font-poppins font-light text-gray-600 text-sm md:text-base leading-relaxed">
                Conheça as funcionalidades e benefícios de utilização de nossos produtos de forma
                personalizada às necessidades do seu negócio.
              </p>
            </div>

            {/* Buttons */}
            <div 
              className="flex flex-col gap-3"
              style={{
                transform: visible ? "translateY(0px)" : "translateY(32px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "150ms",
              }}
            >

              {/* Download Button */}
              <button
                onClick={handleDownloadClick}
                className="bg-primary text-white font-poppins font-medium px-6 py-4 rounded-md
                  flex items-center gap-3 justify-center hover:opacity-90 transition-opacity
                  text-sm md:text-base"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Baixar Teste Windows (.exe)
              </button>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="bg-primary text-white font-poppins font-medium px-6 py-4 rounded-md
                  flex items-center gap-3 justify-center hover:opacity-90 transition-opacity
                  text-sm md:text-base"
              >
                Converse com Nosso Time
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Plans Button */}
              <a
                href="/pricing"
                className="bg-primary text-white font-poppins font-medium px-6 py-4 rounded-md
                  flex items-center gap-3 justify-center hover:opacity-90 transition-opacity
                  text-sm md:text-base"
              >
                Conheça Nossos Planos
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default NextStep