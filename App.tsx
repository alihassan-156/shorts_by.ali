
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingBubbles from './components/FloatingBubbles';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Process from './pages/Process';
import { SOCIAL_LINKS } from './constants';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <Navbar />
        <FloatingBubbles />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            {/* Catch all for missing routes in this demo */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <footer className="py-20 border-t border-white/5 mt-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-2xl font-bold text-white">
              SHORTS<span className="text-[#00D4FF]">BY ALI</span>
            </div>
            <div className="flex gap-12 text-sm text-gray-400">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition-colors">Instagram</a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition-colors">Twitter</a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-[#00D4FF] transition-colors">Email</a>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 Shorts by Ali. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
