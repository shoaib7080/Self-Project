import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with seamless checkout",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://example.com",
      image: "project1.jpg",
    },
    {
      title: "Task Management App",
      description: "Collaborative workspace for team productivity",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      link: "https://example.com",
      image: "project2.jpg",
    },
    {
      title: "Portfolio Website",
      description: "Creative showcase with smooth animations",
      technologies: ["React", "Framer Motion", "CSS"],
      link: "https://example.com",
      image: "project3.jpg",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 right-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <HiExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
