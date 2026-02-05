import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import RealEstate from './pages/RealEstate';
import Fashion from './pages/Fashion';
import Lending from './pages/Lending';
import Contact from './pages/Contact';
import Team from './pages/Team';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/real-estate" element={<RealEstate />} />
        <Route path="/services/fashion" element={<Fashion />} />
        <Route path="/services/lending" element={<Lending />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
