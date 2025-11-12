import HeroHome from './components/HeroHome'
import AboutSection from './components/AboutSection'
import ProposalSection from './components/ProposalSection'
import CallToActionSection from './components/CallToActionSection'
import MovimientoDelBate from './components/MovimientoDelBate'
import MapaDelBarrio from './components/MapaDelBarrio'
import CalendarioBateYBarrio from './components/CalendarioBateYBarrio'
import FormularioSumate from './components/FormularioSumate'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProposalsDashboard from './pages/ProposalsDashboard'
import ProposalDetail from './pages/ProposalDetail'
import Navbar from './components/Navbar'

function Home() {
  return (
    <>
      <HeroHome />
      <AboutSection />
      <ProposalSection />
      <CallToActionSection />
      <MovimientoDelBate />
      <MapaDelBarrio />
      <FormularioSumate />
      <CalendarioBateYBarrio />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
