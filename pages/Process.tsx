
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LiquidButton from '../components/LiquidButton';

const Step = ({ number, title, desc, align = 'left' }: { number: string; title: string; desc: string; align?: 'left' | 'right' }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
  >
    <div className={`w-full md:w-1/2 flex justify-center ${align === 'right' ? 'md:justify-start' : 'md:justify-end'}`}>
       <div className="text-[120px] md:text-[220px] font-bold text-white/5 leading-none select-none tracking-tighter">
         {number}
       </div>
    </div>
    <div className={`w-full md:w-1/2 text-center ${align === 'right' ? 'md:text-left' : 'md:text-left'}`}>
      <div className="inline-block px-4 py-1 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-4">
        Phase {number}
      </div>
      <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">{title}</h3>
      <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Process: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8">Our <span className="text-[#00D4FF]">Workflow</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We've refined our process to be as hands-off for you as possible. You focus on recording; we handle the rest.
          </p>
        </motion.div>
      </section>

      {/* Steps Container */}
      <section className="py-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Step 
            number="01" 
            title="Onboarding & Strategy" 
            desc="We kick things off with a strategy call to define your brand voice, visual style, and goals. We set up your private client portal." 
          />
          <Step 
            number="02" 
            title="Upload Raw Footage" 
            desc="Simply drop your raw video files into your dedicated Google Drive or Frame.io folder. No naming conventions needed—we organize it." 
            align="right"
          />
           <Step 
            number="03" 
            title="The Magic Edit" 
            desc="Our editors get to work. We apply high-retention cuts, engaging captions, sound design, and motion graphics tailored to your niche." 
          />
           <Step 
            number="04" 
            title="Review & Refine" 
            desc="You receive the first draft within 48 hours. Leave precise timestamped comments if anything needs tweaking. We revise usually within 24h." 
            align="right"
          />
          <Step 
            number="05" 
            title="Final Delivery" 
            desc="Once approved, download your high-resolution assets ready for upload. We also provide thumbnail variations if included in your plan." 
          />
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 mb-32"
        >
          <Link to="/contact">
            <LiquidButton className="px-16 py-6 text-xl">
              Start Your Project
            </LiquidButton>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Process;
