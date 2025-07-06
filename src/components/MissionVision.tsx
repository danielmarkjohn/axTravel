// src/components/MissionVision.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';
import { Link } from 'react-router-dom';
import { sections } from '@config/services';

const MissionVision: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Vehicles' },
    { value: '4', label: 'States' },
    { value: '150,000+', label: 'Kms Traveled' },
    { value: '7', label: 'Awards Won' },
  ];

  const features = [
    'Professionally Trained Drivers',
    '24/7 Full-Service Transportation',
    'National network of Transportation Partners',
    'Luxury Fleet of Cars, Tempo Travelers & Buses',
    'Corporate Travel & Event Transportation',
    'Wedding & Special Occasion Services',
  ];

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
            About JJ Travels
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Founded in 2006, JJ Travels is a premier luxury travel agency offering high-end corporate and event transportation.
          With 19 years of excellence, we are known for our punctuality, discipline, and 5-star service, catering to high end and elite clients.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-lg shadow-lg p-6 flex items-start"
          >
            <div className="text-blue-500 mr-4 mt-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* About Our Fleet */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Premium Fleet</h2>
        <p className="text-gray-600 mb-6">
          Our fleet includes luxury cars, Tempo Travelers, and AC coach buses, providing corporate travel, wedding bookings, 
          and special event transportation across Bangalore and other major cities. Every vehicle is sanitized, air-conditioned, 
          and equipped with essential amenities, ensuring a seamless and comfortable journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Luxury Sedans</h3>
            <p className="text-gray-600">Perfect for executive travel and small groups with premium comfort.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Tempo Travelers</h3>
            <p className="text-gray-600">Ideal for medium-sized groups with spacious seating and amenities.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">AC Coach Buses</h3>
            <p className="text-gray-600">Designed for large groups and long-distance travel with maximum comfort.</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Experience Premium Travel with JJ Travels</h3>
          <p className="max-w-2xl mx-auto mb-6">
            Book your next journey with us and experience the perfect blend of luxury, comfort, and reliability.
            Our professional drivers and premium vehicles ensure a seamless travel experience.
          </p>
          <br />
          <Link
            to="/contact"
            className="px-8 py-3 text-base font-medium text-primary bg-white rounded-md"
          >
            Book Your Journey
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionVision;
