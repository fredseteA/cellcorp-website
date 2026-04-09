import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo/logo.svg"
import DownloadButton from "./Button"
import menuIcon from "../assets/icons/menuIcon.svg"

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Funcionalidades", path: "/features" },
  { label: "Sobre", path: "/about" },
  { label: "Preços", path: "/pricing" },
  { label: "Contato", path: "/contact" },
  { label: "FAQ", path: "/faq" },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Header Desktop apenas */}
      <header className="hidden md:block bg-dark border-b border-gray-800 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          <Link to="/">
            <img src={logo} alt="TopCell" className="h-10" />
          </Link>

          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <DownloadButton />
        </div>
      </header>

      {/* Botão sanduíche flutuante Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white text-2xl bg-black/50 backdrop-blur-sm p-3 rounded-lg"
        onClick={() => setMenuOpen(true)}
      >
        <img src={menuIcon} alt="Menu" className="h-4" />
      </button>

      {/* Overlay escuro */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-dark z-50 flex flex-col px-6 py-8 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Botão fechar */}
        <button
          className="text-white text-2xl self-start mb-6 bg-black/50 backdrop-blur-sm p-2 rounded-lg"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {/* Logo no drawer */}
        <img src={logo} alt="TopCell" className="h-10 mb-8" />

        {/* Links */}
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white text-lg font-semibold hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão Baixar Teste */}
        <DownloadButton className="mt-auto" />
      </div>
    </>
  )
}

export default Header