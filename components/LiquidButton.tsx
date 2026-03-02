
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ 
  children, 
  onClick, 
  className = "", 
  variant = 'primary' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.button
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerDown={() => setIsHovered(true)}
      onPointerUp={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-3 rounded-full font-medium overflow-hidden transition-all duration-500
        group flex items-center justify-center
        ${variant === 'primary' ? 'text-white' : 'text-[#00D4FF] border border-[#00D4FF]/40'}
        ${className}
      `}
    >
      <div className={`absolute inset-0 transition-colors duration-500 ${
        variant === 'primary' ? 'bg-[#393E46]' : 'bg-transparent'
      } group-hover:bg-opacity-80`} />

      <motion.div 
        animate={{ x: [-100, 100], opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent pointer-events-none"
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 12, stiffness: 100 }}
            className="absolute pointer-events-none rounded-full bg-[#00D4FF] blur-xl md:blur-2xl hidden md:block"
            style={{
              width: '100px',
              height: '100px',
              left: mousePos.x - 50,
              top: mousePos.y - 50,
            }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />
      
      <motion.div className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
        {children}
      </motion.div>
    </motion.button>
  );
};

export default LiquidButton;
