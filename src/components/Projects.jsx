import { motion } from "framer-motion";
import projects from "../data/projects.json"; // make sure this file exists

export default function Projects() {
  return (
    <section id="work" className="bg-black text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold mb-12 flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <i className="fas fa-laptop-code text-cyan-400" />
        Projects <span className="text-cyan-400 ml-2">Made</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 ">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-cyan-300">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400 mt-2 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                {project.links?.view && project.links.view !== "#" && (
                  <a
                    href={project.links.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition text-sm font-medium">
                    🔗 View Live
                  </a>
                )}
                {project.links?.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-sm font-medium">
                    💻 View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/projects"
          className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition">
          View All →
        </a>
      </div>
    </section>
  );
}
