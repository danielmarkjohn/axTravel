import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDownIcon, FilterIcon } from "@heroicons/react/outline";
import { COMPANY_METADATA } from "data/company";

// Define vehicle types and makes for filters
const vehicleTypes = ["Any Type", "Sedan", "SUV", "Coach Bus", "Luxury"];
const vehicleMakes = ["Any Make", "Toyota", "Force", "Maruti Suzuki"];

// Define fleet data
const fleetVehicles = [
  {
    id: 1,
    name: "Force Traveller 12 Seater – AC",
    type: "Coach Bus",
    make: "Force",
    image: "https://wallpapers.com/images/high/travel-laptop-mkdefg59zg620zbl.webp",
    capacity: 12,
    luggage: 12,
    features: ["Air Conditioning", "Comfortable Seating", "Ample Luggage Space", "Music System"],
    description: "Perfect for group travel and corporate outings."
  },
  {
    id: 2,
    name: "INNOVA CRYSTA – A/C",
    type: "SUV",
    make: "Toyota",
    image: "https://wallpapers.com/images/high/travel-laptop-mkdefg59zg620zbl.webp",
    capacity: 6,
    luggage: 5,
    features: ["Air Conditioning", "Comfortable Seating", "Luggage Space", "Music System"],
    description: "Ideal for family trips and small group travel."
  },
  {
    id: 3,
    name: "SWIFT DZIRE – A/C",
    type: "Sedan",
    make: "Maruti Suzuki",
    image: "https://wallpapers.com/images/high/travel-laptop-mkdefg59zg620zbl.webp",
    capacity: 4,
    luggage: 4,
    features: ["Air Conditioning", "Comfortable Seating", "Luggage Space", "Music System"],
    description: "Perfect for city travel and airport transfers."
  },
  {
    id: 4,
    name: "Toyota Innova Hycross – A/C",
    type: "SUV",
    make: "Toyota",
    image: "https://wallpapers.com/images/high/travel-laptop-mkdefg59zg620zbl.webp",
    capacity: 6,
    luggage: 5,
    features: ["Air Conditioning", "Comfortable Seating", "Luggage Space", "Music System"],
    description: "Premium SUV for comfortable long-distance travel."
  },
  {
    id: 5,
    name: "Toyota Vellfire VIP Executive Lounge – A/C",
    type: "Luxury",
    make: "Toyota",
    image: "https://wallpapers.com/images/high/travel-laptop-mkdefg59zg620zbl.webp",
    capacity: 6,
    luggage: 6,
    features: ["VIP Executive Lounge", "Premium Air Conditioning", "Luxurious Seating", "Advanced Entertainment System", "Ample Luggage Space"],
    description: "Ultimate luxury travel experience for VIP clients."
  }
];

const OurFleet: React.FC = () => {
  const [selectedType, setSelectedType] = useState("Any Type");
  const [selectedMake, setSelectedMake] = useState("Any Make");

  // Filter vehicles based on selected type and make
  const filteredVehicles = fleetVehicles.filter(vehicle => {
    const typeMatch = selectedType === "Any Type" || vehicle.type === selectedType;
    const makeMatch = selectedMake === "Any Make" || vehicle.make === selectedMake;
    return typeMatch && makeMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen"
    >
      {/* Step 1: Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://wallpapers.com/images/high/travel-laptop-mkdefg59zg620zbl.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Our Fleet
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg text-blue-100"
            >
              <span>{COMPANY_METADATA.name} &gt; Our Fleet</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Step 2: Main Content Container */}
      <div className="container py-12">
        {/* Step 3: Filter Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6 mb-10"
        >
          <div className="flex items-center mb-4">
            <FilterIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Filter Vehicles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 4: Vehicle Type Filter */}
            <div>
              <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>
              <div className="relative">
                <select
                  id="vehicleType"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg shadow-sm"
                >
                  {vehicleTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            {/* Step 5: Vehicle Make Filter */}
            <div>
              <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Make
              </label>
              <div className="relative">
                <select
                  id="vehicleMake"
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg shadow-sm"
                >
                  {vehicleMakes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 6: Fleet Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 3) }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Step 7: Vehicle Image */}
              <div className="relative h-56 bg-gray-200">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                    {vehicle.type}
                  </span>
                </div>
              </div>
              
              {/* Step 8: Vehicle Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                
                {/* Step 9: Capacity and Luggage */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">{vehicle.capacity}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path>
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">{vehicle.luggage}</span>
                  </div>
                </div>
                
                {/* Step 10: Booking Button */}
                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Book This Vehicle
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Step 11: Empty State */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No vehicles found</h3>
            <p className="mt-1 text-gray-500">Try changing your filter criteria.</p>
          </div>
        )}
        
      </div>
    </motion.div>
  );
};

export default OurFleet;
