// src/pages/Pricing.tsx
import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../../components/Pricing/PricingCard';
import { services, consultationService } from '@config/services';

const Pricing: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50"
    >
      <div className="container">
        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900"
          >
            Our Pricing
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mt-4 text-xl text-gray-600"
          >
            Choose the perfect plan for your needs. All plans include access to our expert support team.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service: any, index: number) => (
            <motion.div
              key={service.id}
              initial="rest"
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
              whileHover="hover"
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <PricingCard service={service} />
            </motion.div>
          ))}
          <motion.div
            key={consultationService.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * (services.length + 1) }}
            whileHover="hover"
            className="overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <PricingCard service={consultationService} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pricing;