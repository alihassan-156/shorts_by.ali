import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#00D4FF]/5 -skew-x-12 transform translate-x-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl text-center md:text-left"
          >
            <h4 className="text-[#00D4FF] font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">Who We Are</h4>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
              We're not just editors.<br/>
              We are <span className="text-[#00D4FF]">Growth Partners</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
              ShortsBy Ali was born out of a simple frustration: Traditional editors care about "cinematic" shots. 
              We care about <strong>retention graphs, click-through rates, and ROI</strong>. 
              We bridge the gap between high-end production and performance marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              icon: <Target className="w-10 h-10 text-[#00D4FF]" />,
              title: "Results First",
              desc: "If it doesn't perform, it doesn't matter how good it looks. We optimize for metrics that actually move the needle for your business."
            },
            {
              icon: <Heart className="w-10 h-10 text-[#00D4FF]" />,
              title: "Client Obsessed",
              desc: "We treat your brand like our own. We are proactive, responsive, and constantly looking for ways to improve your content strategy."
            },
            {
              icon: <Award className="w-10 h-10 text-[#00D4FF]" />,
              title: "Quality at Speed",
              desc: "The internet moves fast. We've built systems that allow us to deliver premium quality assets without the traditional agency bloat."
            }
          ].map((val, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-10 rounded-3xl border-l-4 border-[#00D4FF] hover:bg-[#393E46]/50 transition-colors"
            >
              <div className="mb-6">{val.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
              <p className="text-gray-400 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team / Story Section */}
      <section className="py-20 md:py-32 px-6 bg-[#393E46]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl glass-panel p-2"
             >
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&grayscale=true" alt="Team working" className="w-full h-full object-cover rounded-[1.5rem]" />
               <div className="absolute inset-0 bg-[#00D4FF]/10 mix-blend-overlay"></div>
             </motion.div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Built for the Modern Creator Economy</h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-base md:text-lg">
                Founded in 2023, ShortsBy Ali started as a specialized team of editors who realized that the "old way" of video production was dead. 
                Creators needed speed. Brands needed adaptability. 
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed text-base md:text-lg">
                Today, we are a fully remote team of specialized editors, strategists, and designers working with some of the fastest-growing personal brands on the internet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;