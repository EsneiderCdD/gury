import HeroHome from './components/HeroHome'
import AboutSection from './components/AboutSection'
import ProposalSection from './components/ProposalSection'
import CallToActionSection from './components/CallToActionSection'
import MovimientoDelBate from './components/MovimientoDelBate'
import MapaDelBarrio from './components/MapaDelBarrio'
// FormularioSumate se moverá a su propia página
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProposalsDashboard from './pages/ProposalsDashboard'
import ProposalDetail from './pages/ProposalDetail'
import Navbar from './components/Navbar'
import Sumate from './pages/Sumate'
import Denuncia from './pages/Denuncia'
import Calendario from './pages/Calendario'

function Home() {
  return (
    <>
      <HeroHome />
      <AboutSection />
      <ProposalSection />
      <CallToActionSection />
      <MovimientoDelBate />
      <MapaDelBarrio />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propuestas" element={<ProposalsDashboard />} />
        <Route path="/propuestas/:slug" element={<ProposalDetail />} />
        <Route path="/sumate" element={<Sumate />} />
        <Route path="/denuncia" element={<Denuncia />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
