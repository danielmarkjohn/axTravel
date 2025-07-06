import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LocationMarkerIcon, OfficeBuildingIcon, GlobeIcon, UserGroupIcon } from "@heroicons/react/outline";
import { COMPANY_METADATA } from "data/company";

const serviceCategories = [
  {
    title: "AIRPORT TRANSFER",
    icon: LocationMarkerIcon,
    image: "https://wallpapers.com/images/high/travel-laptop-0m6r2w9ywrwtb81n.webp",
    description: "Reliable and punctual airport pickup and drop-off services with flight tracking and waiting time included."
  },
  {
    title: "LOCAL TRAVEL",
    icon: LocationMarkerIcon,
    image: "https://wallpapers.com/images/high/travel-laptop-0m6r2w9ywrwtb81n.webp",
    description: "Explore the city with our comfortable vehicles available for hourly rentals or point-to-point travel."
  },
  {
    title: "OUTSTATION TRAVEL",
    icon: GlobeIcon,
    image: "https://wallpapers.com/images/high/travel-laptop-0m6r2w9ywrwtb81n.webp",
    description: "Enjoy seamless intercity travel with our luxury fleet, experienced drivers, and all-inclusive packages."
  },
  {
    title: "CORPORATE TRAVEL",
    icon: OfficeBuildingIcon,
    image: "https://wallpapers.com/images/high/travel-laptop-0m6r2w9ywrwtb81n.webp",
    description: "Premium transportation solutions for businesses with dedicated account management and customized billing."
  }
];

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50"
    >
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://wallpapers.com/images/high/travel-laptop-0m6r2w9ywrwtb81n.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Our Services
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg text-blue-100"
            >
              <span>{COMPANY_METADATA.name} &gt; Our Services</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        {/* Introduction */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            JJ Travel Services
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Founded in 2006, JJ Travels is a premier luxury travel agency offering high-end corporate and event transportation. 
            With 19 years of excellence, we are known for our punctuality, discipline, and 5-star service, 
            catering to high end and elite clients.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md">
            <p className="text-lg italic text-gray-700 mb-4">
              "I invite you to try our service and I personally guarantee you will have a fully satisfied experience."
            </p>
            <p className="font-bold text-blue-800">
              JUSTIN - CHAIRMAN & CEO
            </p>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">
            The perfect collection of vehicles –
            whatever your occasion is choose our service
          </h3>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 4) }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <category.icon className="w-10 h-10 text-white mb-2" />
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{category.description}</p>
                <Link 
                  to="/contact" 
                  className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Book Now
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fleet Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="max-w-4xl mx-auto mt-20 bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Our Premium Fleet
              </h2>
              <p className="mb-6">
                Experience luxury travel with our meticulously maintained vehicles, 
                professional chauffeurs, and exceptional service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Luxury Sedans
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Premium SUVs
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Tempo Travelers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  AC Coach Buses
                </li>
              </ul>
              <Link
                to="/stats"
                className="mt-8 inline-flex items-center px-5 py-2 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-700 transition-colors"
              >
                View Our Fleet
              </Link>
            </div>
            <div className="relative h-full min-h-[300px]">
              <img 
                src="/assets/images/luxury-fleet.jpg" 
                alt="Our Luxury Fleet" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="max-w-3xl mx-auto mt-16 text-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white rounded-xl p-10 shadow-xl"
        >
          <UserGroupIcon className="w-16 h-16 mx-auto mb-4 text-white/80" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to experience luxury travel?
          </h2>
          <p className="mt-4 text-xl text-white/90 mb-8">
            Contact us today to book your journey or discuss your transportation needs.
            Our team is available 24/7 to assist you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 text-base font-medium bg-white rounded-lg text-blue-700 hover:bg-blue-50 transition-colors shadow-md"
            >
              Book Now
            </Link>
            <Link
              to="/stats"
              className="px-8 py-3 text-base font-medium border-2 border-white rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              View Our Fleet
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
