import { motion } from "framer-motion";
import collegeImg from "../assets/images/educat/college.jpg";
import schoolImg from "../assets/images/educat/school.jpg";

const educationData = [
  {
    title: "Bachelor of Engineering in ECE",
    institution:
      "Govind Ballabh Pant Institute of Engineering & Technology (GBPIET), Ghurdauri",
    duration: "2021 - 2025 | Pursuing",
    image: collegeImg,
  },
  {
    title: "Class XII",
    institution: "Saraf Public School | CBSE",
    duration: "2021 | Completed (95.2%)",
    image: schoolImg,
  },
  {
    title: "Class X",
    institution: "Saraf Public School | CBSE",
    duration: "2019 | Completed (95.6%)",
    image: schoolImg,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#0d0d0d] text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold mb-12 flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <i className="fas fa-graduation-cap text-yellow-400" />
        My <span className="text-yellow-400 ml-2">Education</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 ">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}>
            <img
              src={edu.image}
              alt={edu.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                {edu.title}
              </h3>
              <p className="text-sm text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
