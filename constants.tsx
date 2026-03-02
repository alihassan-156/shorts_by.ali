
import React from 'react';
import { Service, PortfolioItem, Testimonial, WorkflowStep } from './types';

const LiquidIcon = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#00D4FF]" xmlns="http://www.w3.org/2000/svg">
    <path d={path} />
  </svg>
);

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/shorts_by.ali/",
  twitter: "https://x.com/shorts_by_ali",
  whatsapp: "https://wa.me/923178480165",
  email: "alihassanfh156@gmail.com",
  calendly: "https://calendly.com/alihassanfh156/30min"
};

export const SERVICES: Service[] = [
  {
    id: 'retention',
    title: 'Maximum Retention',
    description: 'We use data-driven editing techniques to keep viewers hooked from the first second to the last frame.',
    icon: <LiquidIcon path="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />,
    details: ['Hook mastery', 'Pacing optimization', 'Visual storytelling']
  },
  {
    id: 'turnaround',
    title: '48h Turnaround',
    description: 'Speed is money. Get your fully edited, polished assets back within 2 days. Never miss a trend.',
    icon: <LiquidIcon path="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />,
    details: ['Rapid delivery', 'Real-time updates', 'Dedicated workflow']
  },
  {
    id: 'native',
    title: 'Platform Native',
    description: 'Optimized specifically for TikTok, Reels, and Shorts algorithms. We know what works right now.',
    icon: <LiquidIcon path="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />,
    details: ['Algorithm-first', 'Safe zone compliance', 'Custom VFX']
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { title: "Onboarding & Strategy", desc: "Strategy call to define brand voice and set up your private portal." },
  { title: "Upload Raw Footage", desc: "Drop your files into your dedicated folder. We handle the rest." },
  { title: "The Magic Edit", desc: "High-retention cuts, engaging captions, and platform-specific VFX." },
  { title: "Review & Refine", desc: "Receive drafts within 48h. We'll fine-tune the edit until it's ready for upload." },
  { title: "Final Delivery", desc: "Download high-res assets ready for viral upload." }
];

export const PRICING = [
  {
    name: "Growth",
    price: "$200",
    period: "per month",
    features: ["8 Short-form Edits", "48h Turnaround", "Dedicated Editor", "8 Rounds of Revisions"],
    accent: false
  },
  {
    name: "Scale",
    price: "$350",
    period: "per month",
    features: ["15 Short-form Edits", "Priority Support", "Advanced Sound & VFX", "Strategy Consults"],
    accent: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    features: ["Unlimited Volume", "Full Motion Identity", "Long-form Support", "Content Strategy"],
    accent: false
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'Tech Review Hook', category: 'Social', thumbnail: 'https://img.youtube.com/vi/wVllUGwmXD4/maxresdefault.jpg', youtubeId: 'wVllUGwmXD4' },
  { id: '2', title: 'Streetwear Drop', category: 'Commercial', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', youtubeId: 'dQw4w9WgXcQ' },
  { id: '3', title: 'Podcast Viral Clip', category: 'Social', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', youtubeId: 'dQw4w9WgXcQ' },
  { id: '4', title: 'Fitness Motivation', category: 'Short Film', thumbnail: 'https://img.youtube.com/vi/x-i0LNNZIXA/maxresdefault.jpg', youtubeId: 'x-i0LNNZIXA' },
  { id: '5', title: 'Gym Progress', category: 'Short Film', thumbnail: 'https://img.youtube.com/vi/Ja4J-ImmoLU/maxresdefault.jpg', youtubeId: 'Ja4J-ImmoLU' },
  { id: '6', title: 'Workout Routine', category: 'Short Film', thumbnail: 'https://img.youtube.com/vi/cGhyy_QkUJ0/maxresdefault.jpg', youtubeId: 'cGhyy_QkUJ0' },
  { id: '7', title: 'Elite Training', category: 'Short Film', thumbnail: 'https://img.youtube.com/vi/q_RufaiJsZU/maxresdefault.jpg', youtubeId: 'q_RufaiJsZU' },
  { id: '8', title: 'Powerlifting', category: 'Short Film', thumbnail: 'https://img.youtube.com/vi/QlnIAGarPV4/maxresdefault.jpg', youtubeId: 'QlnIAGarPV4' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Alex Rivera', role: 'Creator (2M+)', content: 'ShortsBy Ali transformed my retention. Pacing is world-class.', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { id: 't2', name: 'Sarah Chen', role: 'CMO, Nexa', content: 'Incredible 48h turnaround quality. Highly recommend.', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 't3', name: 'Marcus Thorne', role: 'Influencer', content: 'They know exactly what the algorithm wants.', avatar: 'https://i.pravatar.cc/150?u=marcus' }
];
