import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/home/index.jsx"
import Features from "./pages/features/index.jsx"
import About from "./pages/about/index.jsx"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import FAQ from "./pages/FAQ"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div className="md:pt-16"><Home /></div>} /> 
        <Route path="/features" element={<div className="pt-20"><Features /></div>} />
        <Route path="/about" element={<div className="pt-20"><About /></div>} />
        <Route path="/pricing" element={<div className="pt-20"><Pricing /></div>} />
        <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
        <Route path="/faq" element={<div className="pt-20"><FAQ /></div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App