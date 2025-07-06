// src/components/blog/BlogHero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const BlogHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Insights & Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 mb-8"
          >
            Exploring the future of technology, one story at a time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Web', 'Mobile', 'AI/ML', 'DevOps', 'Security'].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
