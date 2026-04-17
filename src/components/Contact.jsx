import { Mail, Phone, MapPin } from "lucide-react"

// SVG WhatsApp inline
const WhatsAppSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

function ContatoSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "554635365321"
    const message = "Olá! Gostaria de saber mais sobre o TopCell"
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:cell.comercial@gmail.com"
  }

  return (
    <section className="bg-primary py-20 px-6 relative overflow-hidden">

      {/* Elemento decorativo de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-[0.03]" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white opacity-[0.03]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Cabeçalho da section */}
        <div className="mb-14 text-center">
          <p className="font-poppins text-sm font-semibold tracking-widest text-white/50 uppercase mb-3">
            Fale Conosco
          </p>
          <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl leading-tight">
            Entre em contato com a gente
          </h2>
          <p className="font-poppins text-white/60 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Estamos prontos para te ajudar. Escolha o canal mais conveniente para você.
          </p>
        </div>

        {/* Layout principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Lado esquerdo — Informações */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </span>
              <div>
                <p className="font-poppins text-white/50 text-xs mb-0.5 uppercase tracking-wider">E-mail</p>
                <a
                  href="mailto:cell.comercial@gmail.com"
                  className="font-poppins text-white text-sm hover:text-white/75 transition-colors"
                >
                  cell.comercial@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </span>
              <div>
                <p className="font-poppins text-white/50 text-xs mb-0.5 uppercase tracking-wider">Telefone</p>
                <span className="font-poppins text-white text-sm">(46) 3536-5321</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </span>
              <div>
                <p className="font-poppins text-white/50 text-xs mb-0.5 uppercase tracking-wider">Endereço</p>
                <span className="font-poppins text-white text-sm leading-relaxed">
                  Rua 28 de Novembro, 16 – Sala 306<br />
                  85660-000 – Dois Vizinhos – Paraná
                </span>
              </div>
            </div>
          </div>

          {/* Divisor vertical (desktop) */}
          <div className="hidden lg:block w-px h-40 bg-white/10" />

          {/* Lado direito — Botões de ação */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-72">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 group w-full"
            >
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors text-white">
                <WhatsAppSVG />
              </span>
              <span className="font-poppins text-white text-sm font-medium">
                Entre em contato (WhatsApp)
              </span>
            </button>

            <button
              onClick={handleEmailClick}
              className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 group w-full"
            >
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors text-white">
                <Mail className="w-4 h-4" />
              </span>
              <span className="font-poppins text-white text-sm font-medium">
                Entre em contato (e-mail)
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContatoSection