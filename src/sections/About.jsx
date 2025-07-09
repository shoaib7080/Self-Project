import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const cards = [
    {
      title: "My Journey",
      content:
        "Passionate web developer with expertise in modern technologies and creative problem-solving. Building robust and scalable applications.",
    },
    {
      title: "Skills",
      content: "React, JavaScript, Node.js, CSS",
    },
    {
      title: "Experience",
      content: "4 months",
    },
    {
      title: "Projects",
      content: "10+ Built",
    },
    {
      title: "Passion",
      content: "Creating beautiful, functional web experiences",
    },
    {
      title: "Tech Stack",
      content: "Currently focused towards MERN stack. Ready to switch any time",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 grid-rows-4 gap-4 h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-2 row-span-2 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {cards[0].title}
            </h3>
            <p className="text-gray-300">{cards[0].content}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-2 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              {cards[1].title}
            </h3>
            <p className="text-gray-300 text-sm">{cards[1].content}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              {cards[2].title}
            </h3>
            <p className="text-gray-300 text-sm">{cards[2].content}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              {cards[3].title}
            </h3>
            <p className="text-gray-300 text-sm">{cards[3].content}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="col-span-2 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              {cards[4].title}
            </h3>
            <p className="text-gray-300 text-sm">{cards[4].content}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="col-span-2 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              {cards[5].title}
            </h3>
            <p className="text-gray-300 text-sm">{cards[5].content}</p>
          </motion.div>
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 h-48 flex flex-col justify-center items-center text-center p-6"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
