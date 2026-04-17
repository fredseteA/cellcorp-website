import downloadIcon from "@/assets/icons/downloadIcon.svg"

function DownloadButton({ 
  text = "Baixar Teste", 
  className = "", 
  href = "#" 
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-2 bg-primary text-white text-sm px-4 py-2 rounded-xl hover:opacity-90 transition drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] ${className}`}
    >
      <img src={downloadIcon} alt="Download" className="h-4" />
      {text}
    </a>
  )
}

export default DownloadButton