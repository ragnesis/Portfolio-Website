import { motion } from "framer-motion";

const experiences = [
  {
    company: "Ragnesis Productions",
    role: "Developer | Video Editor | Designer",
    duration: "Jan 2021 - present",
    align: "left",
  },
  {
    company: "Main Flow Services and Technologies",
    role: "Full-Stack Developer | Internship",
    duration: "July 2024 - August 2024",
    align: "right",
  },
  {
    company: "Animeloft",
    role: "Web Dev & Video Editor | Freelance",
    duration: "Nov 2022 - June 2023",
    align: "left",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0d0d0d] text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold mb-12 flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <i className="fas fa-briefcase text-yellow-400" />
        Experience
      </motion.h2>

      <div className="relative border-l-4 border-yellow-400 pl-6 space-y-12 ">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: exp.align === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <div className="absolute -left-3 top-1 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white" />
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-300">
                {exp.company}
              </h3>
              <p className="text-md font-medium text-white mt-1">{exp.role}</p>
              <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/experience"
          className="text-yellow-400 border border-yellow-400 px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition-all">
          View Full Experience →
        </a>
      </div>
    </section>
  );
}
