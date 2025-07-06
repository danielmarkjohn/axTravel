// src/components/MissionVision.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';
import { Link } from 'react-router-dom';
import { sections } from '@config/services';

const MissionVision: React.FC = () => {

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="container mx-auto px-4 py-12"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800">
            Smart Engineering & AI Innovation
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Pioneering the future of digital solutions through AI-powered development,
          smart engineering practices, and cutting-edge design methodologies.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 p-6 border-b border-gray-100">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{section.icon}</span>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.content}</p>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <ul className="space-y-4">
                {section.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-blue-500 mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Transform Your Digital Presence</h3>
          <p className="max-w-2xl mx-auto mb-6">
            Experience the power of AI-driven development, smart engineering, and modern design.
            Let's build something extraordinary together.
          </p>
          <br />
          <Link
            to="/services"
            className="px-8 py-3 text-base font-medium text-primary bg-white rounded-md"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionVision;
