import { Mail, Phone, MapPin } from "lucide-react"

const WhatsAppSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const CONTACT_INFO = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "E-mail",
    content: <a href="mailto:cell.comercial@gmail.com" className="hover:opacity-75 transition-opacity">cell.comercial@gmail.com</a>,
  },
  {
    icon: <Phone className="w-4 h-4" />,
    label: "Telefone",
    content: <span>(46) 3536-5321</span>,
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Endereço",
    content: <span>Rua 28 de Novembro, 16 – Sala 306<br />85660-000 – Dois Vizinhos – Paraná</span>,
  },
]

// ─── Sub-componentes internos ──────────────────────────────────────────────

function InfoList({ iconClass, textClass }) {
  return (
    <div className="flex flex-col gap-4">
      {CONTACT_INFO.map(({ icon, content }) => (
        <div key={content} className="flex items-start gap-3">
          <span className={`mt-0.5 shrink-0 ${iconClass}`}>{icon}</span>
          <span className={`font-poppins text-sm leading-relaxed ${textClass}`}>{content}</span>
        </div>
      ))}
    </div>
  )
}

function ActionButtons({ variant }) {
  const handleWhatsApp = () => {
    const phoneNumber = "554635365321"
    const message = "Olá! Gostaria de saber mais sobre o TopCell"
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }
  const handleEmail = () => { window.location.href = "mailto:cell.comercial@gmail.com" }

  // Estilos por variante
  const btnClass =
    variant === "light"
      ? "bg-primary text-white hover:bg-primary/90"
      : "bg-white/10 border border-white/20 text-white hover:bg-white/20"

  const iconBg =
    variant === "light"
      ? "bg-white/20"
      : "bg-white/15 group-hover:bg-white/25"

  return (
    <div className="flex flex-col gap-3 w-full lg:w-auto"> 
      <button
        onClick={handleWhatsApp}
        className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 group w-fit lg:min-w-[300px] ${btnClass}`}
      >
        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${iconBg}`}>
          <WhatsAppSVG />
        </span>
        <span className="font-poppins text-sm font-medium">Entre em contato (WhatsApp)</span>
      </button>

      <button
        onClick={handleEmail}
        className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 group w-fit lg:min-w-[300px] ${btnClass}`}
      >
        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${iconBg}`}>
          <Mail className="w-4 h-4" />
        </span>
        <span className="font-poppins text-sm font-medium">Entre em contato (e-mail)</span>
      </button>
    </div>
  )
}

// ─── Variante MAP ──────────────────────────────────────────────────────────

function MapLayout() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* Mapa */}
      <div className="w-full lg:w-[420px] shrink-0 rounded-2xl overflow-hidden shadow-lg h-64 lg:h-72">
        <iframe
          title="Localização TopCell"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=Rua+28+de+Novembro,16+Dois+Vizinhos+PR"
        />
      </div>

      {/* Infos + botões */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 w-full">
        <InfoList iconClass="text-white" textClass="text-white" />
        <div className="hidden lg:block w-px h-32 bg-white/10 shrink-0" />
        <ActionButtons variant="dark" />
      </div>
    </div>
  )
}

// ─── Variante DARK / LIGHT (layout igual, cores diferentes) ───────────────

function FlatLayout({ variant }) {
  const iconClass = variant === "light" ? "text-primary" : "text-white"
  const textClass = variant === "light" ? "text-gray-700" : "text-white"

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <InfoList iconClass={iconClass} textClass={textClass} />
      <div className={`hidden lg:block w-px h-32 shrink-0 ${variant === "light" ? "bg-gray-200" : "bg-white/10"}`} />
      <ActionButtons variant={variant} />
    </div>
  )
}

// ─── Componente principal ──────────────────────────────────────────────────

/**
 * @param {"dark" | "light" | "map"} variant
 * @param {boolean} showHeader 
 */
function Contact({ variant = "dark", showHeader = false }) {
  const sectionBg =
    variant === "light"
      ? "bg-white border-t border-gray-100"
      : "bg-primary relative overflow-hidden"

  return (
    <section className={`w-full py-12 px-6 ${sectionBg}`}>

      {/* Decoração — só em dark/map */}
      {variant !== "light" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-[0.03]" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white opacity-[0.03]" />
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Cabeçalho opcional */}
        {showHeader && (
          <div className="mb-8 text-center">
            <p className={`font-poppins text-xs font-semibold tracking-widest uppercase mb-2 ${variant === "light" ? "text-primary/60" : "text-white/50"}`}>
              Fale Conosco
            </p>
            <h2 className={`font-poppins font-bold text-2xl sm:text-3xl leading-tight ${variant === "light" ? "text-gray-900" : "text-white"}`}>
              Entre em contato com a gente
            </h2>
            <p className={`font-poppins mt-2 max-w-md mx-auto text-sm leading-relaxed ${variant === "light" ? "text-gray-500" : "text-white/60"}`}>
              Estamos prontos para te ajudar. Escolha o canal mais conveniente para você.
            </p>
          </div>
        )}

        {variant === "map" ? <MapLayout /> : <FlatLayout variant={variant} />}
      </div>
    </section>
  )
}

export default Contact