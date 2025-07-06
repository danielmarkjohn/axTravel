import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesOffered } from "@config/services";


const Services: React.FC = () => {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mt-4 text-xl text-gray-600"
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesOffered.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 4) }}
              whileHover="hover"
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <service.icon className="w-12 h-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="max-w-3xl p-8 mx-auto mt-16 text-center bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white rounded-lg p-8 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Contact us today to discuss your project and how we can help you
            achieve your goals.
          </p>

          <br />
          <Link
            to="/pricing"
            className="px-8 py-3 text-base font-medium text-primary bg-white rounded-md"
          >
            Check Pricing
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
