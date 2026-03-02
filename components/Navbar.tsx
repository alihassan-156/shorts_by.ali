
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LiquidButton from './LiquidButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.hash === path || (location.hash === '' && path === '#/');

  const navLinks = [
    { name: 'Home', path: '#/' },
    { name: 'Services', path: '#/services' },
    { name: 'Portfolio', path: '#/portfolio' },
    { name: 'Process', path: '#/process' },
    { name: 'About', path: '#/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass-panel rounded-3xl md:rounded-full px-6 md:px-8 py-3 flex items-center justify-between relative">
        <Link to="/" className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 z-50">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#393E46] animate-pulse" />
          SHORTS<span className="text-[#00D4FF]">BY ALI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path.replace('#', '')}
              className={`text-sm font-medium transition-colors hover:text-[#00D4FF] ${
                isActive(link.path) ? 'text-[#00D4FF]' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block">
            <LiquidButton className="py-2 px-6 text-sm">Start a Project</LiquidButton>
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 z-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 mt-2 glass-panel rounded-3xl overflow-hidden md:hidden z-40"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path.replace('#', '')}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive(link.path) ? 'text-[#00D4FF]' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                  <LiquidButton className="w-full py-3">Start a Project</LiquidButton>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
