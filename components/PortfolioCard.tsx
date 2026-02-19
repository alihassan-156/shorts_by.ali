
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '../types';

export const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsOpen(true)}
        className="relative aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer glass-panel"
      >
        <img 
          src={item.thumbnail} 
          alt={item.title} 
          className="w-full h-full object-cover transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
          <span className="text-xs text-[#00D4FF] font-bold uppercase tracking-widest mb-1">{item.category}</span>
          <h4 className="text-white text-xl font-bold">{item.title}</h4>
          <div className="mt-4 flex items-center gap-2 text-[#00D4FF]">
            <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span className="text-sm font-medium">Watch Clip</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative w-full max-w-[400px] aspect-[9/16] glass-panel rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#00D4FF] transition-colors"
              >
                ✕
              </button>
              <iframe 
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=0`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
