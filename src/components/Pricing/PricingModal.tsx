// src/components/PricingModal.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { modalBackdrop, modalContent, buttonHover } from '../../utils/animations';
import { useNavigate } from 'react-router-dom';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    tiers?: {
      standard: string[];
      business: string[];
      pro: string[];
    };
  };
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, service }) => {
  const [activeTab, setActiveTab] = useState(1); // 0: Standard, 1: Business, 2: Pro
  const navigate = useNavigate();

  const tiers = [
    {
      name: 'Standard',
      features: service.tiers?.standard || [],
      highlighted: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Business',
      features: service.tiers?.business || [],
      highlighted: true,
      buttonText: 'Popular Choice'
    },
    {
      name: 'Pro',
      features: service.tiers?.pro || [],
      highlighted: false,
      buttonText: 'Contact Sales'
    }
  ];

  const handleContactClick = (tierName: string) => {
    onClose(); // Close the modal first
    navigate('/contact', {
      state: {
        from: 'pricing',
        service: service.title,
        tier: tierName
      }
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
          <motion.div
            variants={modalBackdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          
          <motion.div
            variants={modalContent}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full min-h-screen md:min-h-0 bg-white md:rounded-lg md:max-w-7xl z-10 md:my-8"
          >
            {/* Sticky Header with Close Button */}
            <div className="sticky w-full top-0 z-20 bg-white border-b border-gray-200 px-5 py-5 md:rounded-t-lg">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <h2 className="text-xl md:text-2xl font-bold">{service.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 md:p-6">
              {/* Mobile Tabs */}
              <div className="md:hidden mb-6">
                <div className="flex items-center justify-between bg-gray-100 p-1 rounded-lg">
                  {tiers.map((tier, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all
                        ${activeTab === index 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      {tier.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile View - Single Tier at a time */}
              <div className="md:hidden">
                <div className={`p-4 rounded-lg ${
                  tiers[activeTab].highlighted 
                    ? 'bg-blue-50 border-2 border-blue-500' 
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <h3 className="text-xl font-semibold mb-4">{tiers[activeTab].name}</h3>
                  <ul className="space-y-4 mb-6">
                    {tiers[activeTab].features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    variants={buttonHover}
                    whileHover="hover"
                    whileTap="tap"
                    className={`w-full py-3 px-4 rounded-lg text-white font-medium
                      ${tiers[activeTab].highlighted 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                  >
                    {tiers[activeTab].buttonText}
                  </motion.button>
                </div>
              </div>

              {/* Desktop View - Grid Layout */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {tiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-blue-50 border-2 border-blue-500 shadow-lg transform hover:-translate-y-1'
                        : 'bg-gray-50 border border-gray-200 hover:shadow-md'
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-4">{tier.name}</h3>
                    <ul className="space-y-4 mb-6">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      variants={buttonHover}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => handleContactClick(tier.name)}
                      className={`w-full py-3 px-4 rounded-lg text-white font-medium 
                        ${tier.highlighted 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-600 hover:bg-gray-700'
                        }`}
                    >
                      Contact for {tier.name}
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Footer for Mobile */}
            <div className="md:hidden sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Swipe between plans</span>
                <span>{activeTab + 1} of {tiers.length}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;
