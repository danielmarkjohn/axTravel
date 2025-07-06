// src/components/PricingCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PricingModal from '../Pricing/PricingModal';
import { cardHover, buttonHover } from '../../utils/animations';
import { ServiceProps } from 'types/pricing';


const PricingCard: React.FC<ServiceProps> = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (service.isConsultation) {
      navigate('/contact', { 
        state: { 
          from: 'consultation',
          service: service.title 
        } 
      });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        className={`bg-white rounded-lg shadow-xl p-6 flex flex-col h-full ${
          service.isConsultation 
            ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200' 
            : ''
        }`}
      >
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <ul className="mb-6 flex-grow">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <motion.button
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
          onClick={handleClick}
          className={`w-full py-2 px-4 rounded transition-colors duration-300 ${
            service.isConsultation
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-800 hover:bg-gray-900 text-white'
          }`}
        >
          {service.isConsultation ? 'Book Free Session' : 'View Pricing'}
        </motion.button>
      </motion.div>

      {!service.isConsultation && (
        <PricingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={service}
        />
      )}
    </>
  );
};

export default PricingCard;
