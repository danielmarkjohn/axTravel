import React from "react";
import { motion } from "framer-motion";
import { contactMethods } from "@config/contact";

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex-1 py-16 bg-gray-50"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-4xl font-bold text-gray-900"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12 text-xl text-gray-600"
          >
            Get in touch with our experts to discuss your project needs.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + 0.2 * index }}
              className="p-8 bg-white rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary rounded-full">
                <method.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {method.name}
              </h3>
              <p className="mb-4 text-gray-600">{method.description}</p>
              <a
                href={method.action}
                className="inline-block px-6 py-3 text-sm font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary/90"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contact us via ${method.name}`}
              >
                {method.buttonText}
              </a>
            </motion.div>
          ))}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Book a Consultation
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              Schedule a personalized 1:1 Virtual consultation with our experts.
            </p>
            <a
              href="tel:+917019896937"
              className="inline-block px-6 py-3 mb-8 text-sm font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary/90"
              aria-label="Schedule a Consultation"
            >
              Schedule Now
            </a>
            <br />
            <div className="p-4 mb-4 bg-gray-100 rounded-md">
              <p className="text-lg font-medium text-gray-900">
                Free 30-min Zoom Call*{" "}
                <p className="text-sm font-small text-gray-900">
                  (+60 mins standard rates applicable)
                </p>
              </p>
              <p className="mt-2 text-xs text-gray-600">
                *Prices may vary based on project complexity and requirements.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Book a on-Premise Visit
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              Schedule a on premise session with our experts.
            </p>
            <a
              href="tel:+917019896937"
              className="inline-block px-6 py-3 mb-8 text-sm font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary/90"
              aria-label="Schedule a Consultation"
            >
              Schedule Now
            </a>
            <br />
            <div className="p-4 mb-4 bg-gray-100 rounded-md">
              <p className="text-lg font-medium text-gray-900">
                10km Radius - Free Session*{" "}
                <p className="text-sm font-small text-gray-900">
                  (+10km radius standard rates applicable)
                </p>
              </p>
              <p className="mt-2 text-xs text-gray-600">
                *Prices may vary based on project complexity and requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
