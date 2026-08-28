import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useScrollReveal from './hooks/useScrollReveal';

function PortfolioLayout() {
  useScrollReveal();
  return (
    <div>
      <Navbar />
      <div className="scroll-reveal"><Profile /></div>
      <div className="scroll-reveal"><About /></div>
      <div className="scroll-reveal"><Skills /></div>
      <div className="scroll-reveal"><Projects /></div>
      <div className="scroll-reveal"><Contact /></div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

