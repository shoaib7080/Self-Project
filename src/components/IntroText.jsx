import React from "react";
import { motion } from "framer-motion";

const IntroText = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center md:text-left max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
        >
          Hi, I'm <span className="text-blue-400">Shoaib</span>
        </motion.h1>

        <div className="text-center space-y-4 md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed"
          >
            A web developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed"
          >
            Dedicated to creative web solutions
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default IntroText;
