
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import LiquidButton from './LiquidButton';

const Navbar: React.FC = () => {
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
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-8 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#393E46] animate-pulse" />
          SHORTS<span className="text-[#00D4FF]">BY ALI</span>
        </Link>

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
          <Link to="/contact">
            <LiquidButton className="py-2 px-6 text-sm">Start a Project</LiquidButton>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
