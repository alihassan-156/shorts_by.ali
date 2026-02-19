
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRICING } from '../constants';
import LiquidButton from '../components/LiquidButton';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Pricing Header */}
      <section className="px-6 max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Subscription <span className="text-[#00D4FF]">Plans</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Fixed monthly rates. Unlimited creative energy. Zero hiring friction.</p>
      </section>

      {/* Plans */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {PRICING.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass-panel p-10 rounded-[2.5rem] relative ${plan.accent ? 'border-[#00D4FF]/50 ring-2 ring-[#00D4FF]/10' : ''}`}
          >
            {plan.accent && (
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#00D4FF] text-[#222831] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Recommended
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-bold text-[#00D4FF]">{plan.price}</span>
              <span className="text-gray-500">{plan.period}</span>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-400 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <LiquidButton className="w-full" variant={plan.accent ? 'primary' : 'outline'}>
                Join the Flow
              </LiquidButton>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Custom Section */}
      <section className="py-24 px-6 bg-[#00D4FF]/5 border-y border-[#00D4FF]/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">Need something custom?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We understand that every brand is unique. If our packages don't fit your specific needs, we can build a custom scope of work for you. From long-form YouTube editing to course production, we handle it all.
            </p>
            <Link to="/contact">
              <LiquidButton className="px-10">Contact Sales</LiquidButton>
            </Link>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {[
              "Long-form Editing", 
              "Thumbnail Design", 
              "Script Writing", 
              "Content Strategy", 
              "Channel Audits", 
              "VFX Work"
            ].map(item => (
              <div key={item} className="glass-panel p-6 rounded-2xl text-white font-medium flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked</h2>
        <div className="space-y-4">
          {[
            { q: "What is your turnaround time?", a: "Standard turnaround is 48-72 hours for first drafts." },
            { q: "Can I cancel anytime?", a: "Yes, our monthly subscriptions are month-to-month with no long-term lock-in." },
            { q: "How do we communicate?", a: "We use a dedicated Slack channel and a private project portal." }
          ].map((item, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl hover:bg-[#393E46]/30 transition-colors cursor-default">
              <h4 className="text-white font-bold mb-2 text-lg">{item.q}</h4>
              <p className="text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
