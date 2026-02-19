
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LiquidButton from '../components/LiquidButton';
import { PortfolioCard } from '../components/PortfolioCard';
import { SERVICES, PORTFOLIO, TESTIMONIALS, WORKFLOW_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-8">
            Short-Form Specialized Agency
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Stop Scrolling. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#DFD0B8]">Start Dominating.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            High-Retention Short-Form Editing for Brands and Businesss That Want to Dominate Social Media
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <LiquidButton className="text-lg px-10 py-4">View Showreel</LiquidButton>
            </Link>
            <Link to="/services">
              <LiquidButton variant="outline" className="text-lg px-10 py-4">Explore Pricing</LiquidButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-panel p-10 rounded-[2.5rem] group"
          >
            <div className="mb-6 p-4 bg-[#222831] w-fit rounded-2xl group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Selected Works - 9:16 Ratio */}
      <section className="py-32 bg-[#393E46]/10 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Crafted for <br/> <span className="text-[#00D4FF]">Vertical Dominance</span>
            </h2>
            <Link to="/portfolio">
              <LiquidButton variant="outline">View All Work</LiquidButton>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PORTFOLIO.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow - Liquid Timeline */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">Our Workflow</h2>
          <div className="relative border-l-2 border-[#00D4FF]/20 pl-8 ml-4 md:ml-0 space-y-16">
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#00D4FF] shadow-[0_0_15px_#00D4FF]" />
                <span className="text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-2 block">Step 0{i+1}</span>
                <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-gray-400 max-w-xl">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[#393E46]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-panel p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} className="w-12 h-12 rounded-full border border-[#00D4FF]/30" alt="" />
                <div>
                  <h5 className="text-white font-bold">{t.name}</h5>
                  <p className="text-[#00D4FF] text-xs uppercase">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">"{t.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#00D4FF]/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to evolve?</h2>
          <div className="flex justify-center">
            <Link to="/contact">
              <LiquidButton className="text-xl px-12 py-5">Start Your Trial</LiquidButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
