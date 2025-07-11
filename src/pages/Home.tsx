import React from "react";
import { motion } from "framer-motion";
import Meta from "../components/Meta";
import Services from "./Services";
import MissionVision from "components/MissionVision";
import AnimatedStats from "components/AnimatedStats";
import TravelBooking from "components/TravelBooking";
import { COMPANY_METADATA } from "data/company";

const Home: React.FC = () => {
  return (
    <>
      <Meta
        title="TravelEase - Your Journey Made Simple"
        description="Book rides, plan trips, and travel with ease. Find the perfect transportation solution for your journey with our easy booking platform."
        keywords="travel, booking, rides, transportation, journey, trip planning"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-1"
      >
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gray-50">
          <div className="absolute inset-y-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            <div className="absolute inset-0">
              <svg
                className="w-full h-full text-gray-900/5"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {[...Array(10)].map((_, i) => (
                  <path
                    key={i}
                    d={`M${i * 10},100 L${i * 10 + 5},0 L${i * 10 + 10},100 Z`}
                    className="opacity-[0.03]"
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
              >
                Travel with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {COMPANY_METADATA.name}
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-xl mx-auto mt-6 text-xl text-gray-500"
              >
                Your journey, our priority. Book rides easily and travel in comfort.
              </motion.p>
              
              {/* Travel Booking Component */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10"
              >
                <TravelBooking />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <AnimatedStats />
          <Services />
          <MissionVision />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
