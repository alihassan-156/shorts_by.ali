
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-panel p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#00D4FF]/10 blur-2xl group-hover:bg-[#00D4FF]/20 transition-all duration-500 rounded-full" />
      
      <div className="text-4xl mb-6 bg-gray-800 w-16 h-16 flex items-center justify-center rounded-2xl">
        {service.icon}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00D4FF] transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-400 mb-6 leading-relaxed">
        {service.description}
      </p>

      <ul className="space-y-3">
        {/* Render specific service details now that the property exists in the Service type */}
        {service.details.map((detail, idx) => (
          <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#00D4FF]" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;