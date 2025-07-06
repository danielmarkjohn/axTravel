import React from "react";
import { motion } from "framer-motion";
import { teamMembers } from "@config/team";

const OurTeam: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50"
    >
      <div className="container ">
        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mt-4 text-xl text-gray-600"
          >
            Meet the talented individuals behind our success
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid gap-4 mt-12 sm:grid-cols-1 md:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 4) }}
              whileHover="hover"
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="relative h-34 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-half h-half"
                />
              </div>
              <div className="p-6">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <span className="text-md font-medium text-primary">
                  {member.position}
                </span>
                <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurTeam;