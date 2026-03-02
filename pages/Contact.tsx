
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MessageSquare, Mail, ArrowRight, 
  Copy, Check, Zap, Sparkles, Instagram, X 
} from 'lucide-react';
import LiquidButton from '../components/LiquidButton';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [brief, setBrief] = useState({ type: 'Short Form', volume: '8 Videos/mo' });

  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateEmail = () => {
    const body = `Hi Ali, I'm interested in ${brief.type} (${brief.volume}). Let's talk.`;
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=New Project Brief&body=${body}`;
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && setIsBookingOpen(false);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 md:px-6 min-h-screen bg-[#222831]">
      <section className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
            </span>
            Available Now
          </div>
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-6">Let's <span className="text-[#00D4FF]">Scale</span></h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">Skip the friction. Choose your preferred channel to start your creative evolution.</p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Booking Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-panel p-8 rounded-[2.5rem] flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 bg-[#00D4FF] rounded-2xl flex items-center justify-center text-[#222831] mb-8 shadow-lg shadow-[#00D4FF]/20">
              <Calendar size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Discovery Call</h3>
            <p className="text-gray-400 mb-8">Grab a 30-minute slot to audit your content and define your strategy.</p>
          </div>
          <LiquidButton className="w-full py-4" onClick={() => setIsBookingOpen(true)}>
            Check Availability <ArrowRight size={16} className="ml-2" />
          </LiquidButton>
        </motion.div>

        {/* Email Brief Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-panel p-8 rounded-[2.5rem] flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 bg-[#393E46] rounded-2xl flex items-center justify-center text-[#00D4FF] mb-8">
              <Sparkles size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Direct Brief</h3>
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-2 gap-2">
                {['Short Form', 'Long Form'].map(t => (
                  <button key={t} onClick={() => setBrief({...brief, type: t})} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${brief.type === t ? 'bg-[#00D4FF] text-[#222831] border-[#00D4FF]' : 'border-white/10 text-gray-500'}`}>{t}</button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['8/mo', '15/mo'].map(v => (
                  <button key={v} onClick={() => setBrief({...brief, volume: v})} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${brief.volume === v ? 'bg-[#00D4FF] text-[#222831] border-[#00D4FF]' : 'border-white/10 text-gray-500'}`}>{v}</button>
                ))}
              </div>
            </div>
          </div>
          <LiquidButton variant="outline" onClick={generateEmail} className="w-full py-4">Send Brief <Mail size={16} className="ml-2" /></LiquidButton>
        </motion.div>

        {/* Rapid Response Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-panel p-8 rounded-[2.5rem] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-[#393E46] rounded-2xl flex items-center justify-center text-[#00D4FF]"><MessageSquare size={28} /></div>
            <p className="text-gray-400">Need a quick answer? Reach out directly on WhatsApp or Instagram.</p>
            <div className="space-y-3">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#00D4FF]/30 transition-all group">
                <div className="flex items-center gap-4"><Zap size={18} className="text-green-500" /><span className="font-bold text-white text-sm">WhatsApp</span></div>
                <ArrowRight size={16} className="text-gray-600 group-hover:text-[#00D4FF]" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#00D4FF]/30 transition-all group">
                <div className="flex items-center gap-4"><Instagram size={18} className="text-pink-500" /><span className="font-bold text-white text-sm">Instagram</span></div>
                <ArrowRight size={16} className="text-gray-600 group-hover:text-[#00D4FF]" />
              </a>
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-white font-medium text-xs truncate mr-4">{SOCIAL_LINKS.email}</span>
            <button onClick={copyEmail} className="p-2 hover:bg-white/10 rounded-lg text-gray-400">
              {copied ? <Check size={16} className="text-[#00D4FF]" /> : <Copy size={16} />}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isBookingOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-black/95 backdrop-blur-xl" onClick={() => setIsBookingOpen(false)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="relative w-full max-w-5xl h-[90vh] md:h-[80vh] bg-[#393E46] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="absolute top-0 inset-x-0 h-14 bg-[#222831] border-b border-white/5 flex items-center justify-between px-6 z-10">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Secure Booking</span>
                <button onClick={() => setIsBookingOpen(false)} className="text-white hover:text-[#00D4FF]"><X size={20} /></button>
              </div>
              <iframe src={SOCIAL_LINKS.calendly} className="w-full h-full pt-14 bg-white" frameBorder="0" title="Schedule call" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
