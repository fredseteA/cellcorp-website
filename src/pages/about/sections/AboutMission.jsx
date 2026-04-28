import backImgAbout from "@/assets/backImgAbout.png"
import { useEffect, useRef, useState } from "react"

const missions = {
  missao: {
    label: "Nossa missão",
    text: "Oferecer tecnologia acessível e eficiente para que lojistas de moda gerenciem seus negócios com mais controle, agilidade e segurança no dia a dia.",
  },
  visao: {
    label: "Nossa visão",
    text: "Ser referência nacional em sistemas de gestão para o comércio de roupas e confecções, crescendo junto com cada loja que acredita no nosso trabalho.",
  },
}

const valores = [
  "Simplicidade",
  "Comprometimento",
  "Inovação",
  "Transparência",
  "Proximidade",
  "Resultados",
]

function AboutMission() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-14 md:py-20 px-4"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(15, 15, 15, 0.55) 0%,
            rgba(30, 28, 28, 0.60) 50%,
            rgba(15, 15, 15, 0.62) 100%
          ),
          url(${backImgAbout})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Missão + Visão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-12 md:mb-16">
          {Object.values(missions).map(({ label, text }, i) => (
            <div
              key={label}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <p className="font-poppins font-bold text-white leading-snug mb-3 text-xl sm:text-2xl md:text-2xl lg:text-[1.6rem]">
                {text}
              </p>
              <p className="font-poppins text-gray-400 text-sm font-normal">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease",
            transitionDelay: "350ms",
          }}
        >
          <div className="border-t border-gray-600 mb-10 md:mb-12" />

          {/* Valores */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 mb-5">
            {valores.map((valor, i) => (
              <p
                key={valor}
                className="font-poppins font-bold text-white text-lg sm:text-xl md:text-2xl"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${400 + i * 80}ms`,
                }}
              >
                {valor}
              </p>
            ))}
          </div>

          <p className="font-poppins text-gray-400 text-sm font-normal">
            Nossos valores
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutMission