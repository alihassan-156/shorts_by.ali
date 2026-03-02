
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { PortfolioCard } from '../components/PortfolioCard';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Commercial', 'Social', 'Short Film'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">Visual <span className="text-[#00D4FF]">Vault</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          A collection of viral hooks, high-fidelity soundscapes, and data-driven short form.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
              filter === cat 
                ? 'bg-[#00D4FF] text-[#222831]' 
                : 'glass-panel text-gray-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
