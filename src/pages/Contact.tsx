import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, LocationMarkerIcon, ClockIcon } from "@heroicons/react/outline";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for your enquiry. We will get back to you soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

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
            Please fill the form for any booking enquiries!
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Map and Contact Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Google Map */}
              <div className="h-80 bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5254591514086!2d77.63340731482266!3d13.062312990796379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19721a651fd3%3A0x5f4adbdbab8bd80f!2sHennur%20Cross%2C%20Bengaluru%2C%20Karnataka%20560043!5m2!1s0x3bae19721a651fd3%3A0x5f4adbdbab8bd80f!2sHennur%20Cross%2C%20Bengaluru%2C%20Karnataka%20560043" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
              
              {/* Contact Information */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">JJ Travels</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <LocationMarkerIcon className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      #12&13, Classic Enclave, Phase 3, Chelekere, Hennur Cross, Bangalore – 560043
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <a href="tel:9845214513" className="hover:text-primary">9845214513</a> / 
                      <a href="tel:6364514513" className="hover:text-primary"> 6364514513</a>
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <MailIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <a href="mailto:bookings@jjtravels.org" className="text-gray-700 hover:text-primary">
                      bookings@jjtravels.org
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div className="text-gray-700">
                      <p className="font-medium">Business Hours:</p>
                      <ul className="mt-1 space-y-1">
                        <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                        <li>Saturday: 9:00 AM - 6:00 PM</li>
                        <li>Sunday: 10:00 AM - 4:00 PM</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    
                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        placeholder="Tell us about your travel needs"
                        required
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
