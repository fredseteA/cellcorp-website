import logo from "../assets/logo/heroLogo.png"
import { Mail, Phone, MapPin } from "lucide-react"

// SVGs inline para redes sociais (não dependem da versão do lucide-react)
const FacebookSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "554635365321"
    const message = "Olá! Gostaria de saber mais sobre o TopCell"
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <footer className="bg-[#2c2c2c] text-gray-300">

      {/* Corpo principal */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Coluna 1 — Logo + Redes */}
        <div className="flex flex-col gap-6 items-start">
          <img
            src={logo}
            alt="TopCell Logo"
            className="h-14 w-auto object-contain"
          />

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/cell.corporacao.3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-md bg-primary flex items-center justify-center hover:opacity-80 transition-opacity text-white"
            >
              <FacebookSVG />
            </a>
            <a
              href="https://www.instagram.com/cellcorporacaotecnologica/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-md bg-primary flex items-center justify-center hover:opacity-80 transition-opacity text-white"
            >
              <InstagramSVG />
            </a>
          </div>
        </div>

        {/* Coluna 2 — Links Úteis */}
        <div>
          <h3 className="font-poppins font-semibold text-white text-base mb-4">
            Links Úteis
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Início", href: "/" },
              { label: "Funcionalidades", href: "/features" },
              { label: "Preços", href: "/pricing" },
              { label: "Contato", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-poppins text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 — Recursos */}
        <div>
          <h3 className="font-poppins font-semibold text-white text-base mb-4">
            Recursos
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Tutoriais", href: "/tutorials" },
              { label: "FAQ", href: "/faq" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-poppins text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 4 — Contato */}
        <div>
          <h3 className="font-poppins font-semibold text-white text-base mb-4">
            Contato
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="mailto:contato@topcell.com.br"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors font-poppins"
              >
                <span className="w-8 h-8 rounded-full bg-[#3a3a3a] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </span>
                contato@topcell.com.br
              </a>
            </li>
            <li>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors font-poppins w-full text-left"
              >
                <span className="w-8 h-8 rounded-full bg-[#3a3a3a] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </span>
                (46) 3536-5321
              </button>
            </li>
            <li>
              <span className="flex items-center gap-3 text-sm text-gray-400 font-poppins">
                <span className="w-8 h-8 rounded-full bg-[#3a3a3a] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </span>
                Dois Vizinhos, Paraná
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-gray-600">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-poppins text-xs text-gray-500">
            © 2026 TopCell. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="font-poppins text-xs text-gray-500 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="/terms" className="font-poppins text-xs text-gray-500 hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer