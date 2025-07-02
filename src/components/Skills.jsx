import skills from "../data/skills.json";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0f0f0f] text-white py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 flex items-center gap-2">
        <i className="fas fa-laptop-code text-blue-500" /> Skills &{" "}
        <span className="text-blue-400 ml-2">Tech Stack</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-2 bg-[#1a1a1a] rounded-xl p-4 shadow-md">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-14 h-14 object-contain"
              loading="lazy"
            />
            <span className="text-sm text-gray-200">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
