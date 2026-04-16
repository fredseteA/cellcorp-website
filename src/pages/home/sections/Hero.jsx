import logo from "../../../assets/logo/heroLogo.png"
import heroBg from "../../../assets/hero-bg.png"
import DownloadButton from "../../../components/Button"

function Hero() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "554635365321"
    const message = "Olá! Gostaria de saber mais sobre o TopCell"
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section 
      className="w-full min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(190,190,190,0.6) 0%,
            rgba(137,137,137,0.6) 16%,
            rgba(66, 66, 66, 0.6) 42%,
            rgba(48, 47, 47, 0.6) 60%,
            rgba(15, 15, 15, 0.6) 100%
          ),
          url(${heroBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-6xl mx-auto text-center px-4">

        {/* Título Principal */}
        <h1 className="font-poppins font-extrabold text-[#BEBEBE] leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
          text-3xl sm:text-4xl md:text-5xl lg:text-[61px] lg:whitespace-nowrap">
          TRANSFORME A <span className="text-primary">GESTÃO</span> DA SUA LOJA
        </h1>
        {/* Subtítulo */}
        <p className="font-poppins font-extralight text-gray-400 mb-8 mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
          text-xl sm:text-2xl md:text-3xl lg:text-[49px]">
          Um único sistema, diversas possibilidades
        </p>

        {/* Logo */}
        <div className="mb-8 md:mb-12">
          <img 
            src={logo} 
            alt="TopCell Logo" 
            className="h-20 sm:h-24 md:h-28 lg:h-32 mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-16">
          <DownloadButton text="Baixar Teste Windows (.exe)" />
          
          <button
            onClick={handleWhatsAppClick}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white 
              px-6 py-3 rounded-md flex items-center gap-2 justify-center transition-colors
              text-sm md:text-base"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Falar no WhatsApp
          </button>
        </div>

        {/* Estatísticas */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-16 justify-center items-center pt-8 border-t border-gray-500">
          <div className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">+200</p>
            <p className="text-xs md:text-sm text-gray-300">Lojas Ativas</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">12 anos</p>
            <p className="text-xs md:text-sm text-gray-300">No Mercado</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero