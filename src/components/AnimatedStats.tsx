// src/components/AnimatedStats.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const AnimatedNumber: React.FC<{
  value: number;
  suffix?: string;
  prefix?: string;
  color: string;
}> = ({ value, suffix = '', prefix = '', color }) => {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = value / 40;
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCurrent(value);
          clearInterval(timer);
        } else {
          setCurrent(Number(start.toFixed(1)));
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {prefix}{current}{suffix}
      </div>
    </div>
  );
};

const AnimatedStats: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact', {
      state: {
        from: 'AnimatedStats',
      }
    });
  };
  
  const jjStats = [
    {
      value: 50,
      label: "Vehicles",
      sublabel: "Luxury Fleet",
      color: "from-blue-500 to-blue-600",
    },
    {
      value: 4,
      label: "States",
      sublabel: "Service Coverage",
      color: "from-green-500 to-green-600",
    },
    {
      value: 150000,
      label: "Kms Traveled",
      sublabel: "Safe Journeys",
      color: "from-purple-500 to-purple-600",
    },
    {
      value: 7,
      label: "Awards Won",
      sublabel: "Industry Recognition",
      color: "from-indigo-500 to-indigo-600",
    },
  ];
  
  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* About Us Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            About JJ Travels
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
            Founded in 2006, JJ Travels is a premier luxury travel agency offering high-end corporate and event transportation.
            With 19 years of excellence, we are known for our punctuality, discipline, and 5-star service, catering to high end and elite clients.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="mr-2 text-blue-500">✓</span>
              <span className="text-gray-700">Professionally Trained Drivers</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="mr-2 text-blue-500">✓</span>
              <span className="text-gray-700">24/7 Full-Service Transportation</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="mr-2 text-blue-500">✓</span>
              <span className="text-gray-700">National Network of Transportation Partners</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {jjStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <AnimatedNumber
                value={stat.value}
                color={stat.color}
              />
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                {stat.label}
              </h3>
              <p className="text-gray-500 mt-1">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        {/* Fleet Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-lg mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6 text-lg">
              Our fleet includes luxury cars, Tempo Travelers, and AC coach buses, providing corporate travel, wedding bookings, and special event transportation across Bangalore and other major cities.
              Every vehicle is sanitized, air-conditioned, and equipped with essential amenities, ensuring a seamless and comfortable journey.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center px-4 py-2 rounded-full bg-gray-50 shadow-sm">
                <span className="mr-2 text-blue-500">✓</span>
                <span className="text-gray-700">Professionally Trained Chauffeurs</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-gray-50 shadow-sm">
                <span className="mr-2 text-blue-500">✓</span>
                <span className="text-gray-700">24/7 Full-Service Transportation</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-full bg-gray-50 shadow-sm">
                <span className="mr-2 text-blue-500">✓</span>
                <span className="text-gray-700">National Network of Transportation Partners</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="px-6 py-10 sm:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">
                  Ready to Experience Premium Travel?
                </h3>
                <p className="text-blue-100">
                  Book your luxury transportation with JJ Travels today
                </p>
              </div>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 shadow-md" onClick={handleContactClick}>
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedStats;
