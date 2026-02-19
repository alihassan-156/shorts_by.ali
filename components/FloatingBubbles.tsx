
import React from 'react';
import { motion } from 'framer-motion';

const Bubble: React.FC<{ size: number; x: string; y: string; duration: number; delay: number }> = ({ 
  size, x, y, duration, delay 
}) => (
  <motion.div
    initial={{ x: x, y: y, opacity: 0 }}
    animate={{ 
      y: ['0%', '-20%', '0%'],
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      duration, 
      delay, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className="absolute pointer-events-none rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-transparent blur-2xl"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
    }}
  />
);

const FloatingBubbles: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <Bubble size={400} x="10%" y="20%" duration={8} delay={0} />
      <Bubble size={300} x="70%" y="10%" duration={12} delay={2} />
      <Bubble size={500} x="40%" y="60%" duration={10} delay={4} />
      <Bubble size={250} x="85%" y="75%" duration={15} delay={1} />
    </div>
  );
};

export default FloatingBubbles;
