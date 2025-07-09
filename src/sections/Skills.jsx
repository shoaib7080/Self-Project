import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: FaReact, name: "React", color: "text-blue-400" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-400" },
    { icon: SiExpress, name: "Express", color: "text-gray-300" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: FaHtml5, name: "HTML5", color: "text-orange-400" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
    { icon: FaGitAlt, name: "Git", color: "text-red-400" },
    // { icon: FaDatabase, name: "SQL", color: "text-purple-400" },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500" },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <skill.icon className={`w-12 h-12 mb-3 ${skill.color}`} />
              <span className="text-white text-sm font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
