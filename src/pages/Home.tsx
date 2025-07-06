import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing/Pricing";
import MissionVision from "components/MissionVision";
import AnimatedStats from "components/AnimatedStats";
import { COMPANY_METADATA } from "data/company";

const Home: React.FC = () => {
  return (
    <>
      <Meta
        title="AxSphere - Innovative Digital Solutions"
        description="AxSphere delivers cutting-edge technology solutions for businesses. Transform your ideas into powerful digital solutions with our expert team."
        keywords="technology, digital solutions, web development, software development, tech consulting"
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
                Welcome to{" "}
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
                {COMPANY_METADATA.tagLine}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  className="px-8 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <AnimatedStats />
          <Services />
          <Portfolio />
          <Pricing />
          <MissionVision />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
