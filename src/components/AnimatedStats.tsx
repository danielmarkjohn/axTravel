// src/components/AnimatedStats.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { stats } from '@config/services';
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
  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Main Stats */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Driving Digital Transformation
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Empowering businesses with enterprise-grade solutions and cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  color={stat.color}
                />
                <h3 className="text-xl font-semibold mt-2 text-gray-800">
                  {stat.label}
                </h3>
                <p className="text-gray-500 mt-1">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>

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
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-blue-100">
                    Join leading enterprises that trust our solutions
                  </p>
                </div>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 shadow-md" onClick={handleContactClick}>
                  Schedule a Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
