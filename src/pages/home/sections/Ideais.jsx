import { useEffect, useRef, useState } from "react"
import instaPost from "../../../assets/postImg.png"
import logo from "../../../assets/logo/grayLogo.jpg"

const INSTAGRAM_POST_URL = "https://www.instagram.com/p/CzmTkDVPp-2/"
const INSTAGRAM_PROFILE_IMAGE = logo 
const INSTAGRAM_POST_IMAGE = instaPost    

function Ideais() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-primary py-16 md:py-24 px-4">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >

        {/* Texto */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2 className="font-poppins font-extrabold text-white text-3xl md:text-4xl lg:text-5xl mb-6 uppercase tracking-wide">
            Nossos Ideais
          </h2>

          <p className="font-poppins text-white/80 text-sm md:text-base leading-relaxed mb-8">
            A busca pela simplicidade e eficácia é o que define a essência do TopCell, 
            uma solução desenhada para transformar a rotina do setor de vestuário. 
            Com um olhar estratégico e focado em resultados, nosso principal objetivo é 
            consolidar a excelência no mercado, oferecendo ferramentas que se adaptam às 
            necessidades reais da indústria da moda.
          </p>

          <a
            href="/about"
            className="inline-flex items-center gap-2 border border-white text-white font-poppins text-sm md:text-base px-6 py-3 rounded-xl hover:bg-white hover:text-primary transition-all duration-300"
          >
            Conheça a TopCELL
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Card Instagram */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(32px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            transitionDelay: "150ms",
          }}
          className="flex justify-center lg:justify-end"
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">

            {/* Header do card */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              {/* Foto de perfil */}
              <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 shrink-0 ring-2 ring-primary/30">
                {INSTAGRAM_PROFILE_IMAGE ? (
                  <img src={INSTAGRAM_PROFILE_IMAGE} alt="TopCELL" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/40 to-primary flex items-center justify-center">
                    <span className="text-white text-xs font-bold">TC</span>
                  </div>
                )}
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-sm leading-tight">TopCELL</p>
                <p className="text-gray-400 text-xs">Dois Vizinhos, Paraná</p>
              </div>

              {/* Logo Instagram */}
              <div className="ml-auto">
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
            </div>

            {/* Imagem do post com hover */}
            <a
              href={INSTAGRAM_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-square overflow-hidden bg-gray-900 cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {INSTAGRAM_POST_IMAGE ? (
                <img
                  src={INSTAGRAM_POST_IMAGE}
                  alt="Post Instagram"
                  className="w-full h-full object-cover"
                  style={{
                    transform: hovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.4s ease",
                  }}
                />
              ) : (
                // Placeholder
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
                  <svg className="w-10 h-10 text-gray-600 mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <p className="text-gray-500 font-poppins font-bold text-lg text-center leading-snug px-4">
                    Place your<br />design here!
                  </p>
                </div>
              )}

              {/* Overlay hover */}
              <div
                className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: hovered ? 1 : 0 }}
              >
                <span className="text-white font-poppins font-semibold text-base flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Ver post
                </span>
              </div>
            </a>

            {/* Rodapé do card */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <svg className="w-6 h-6 text-gray-700 hover:text-primary cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
                <svg className="w-6 h-6 text-gray-700 hover:text-primary cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <svg className="w-6 h-6 text-gray-700 hover:text-primary cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Ideais