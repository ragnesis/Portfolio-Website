import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#111] text-white py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 flex items-center gap-2">
        <i className="fas fa-user-alt text-yellow-500" /> About{" "}
        <span className="text-yellow-500 ml-2">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start ">
        {/* Text Content */}
        <div className="flex-1 space-y-5">
          <h3 className="text-2xl font-semibold">I'm Mayank</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-yellow-500 text-sm px-3 py-1 rounded-full text-white">
              Full Stack Developer
            </span>
            <span className="inline-block bg-yellow-500 text-sm px-3 py-1 rounded-full text-white">
              UI/UX Designer
            </span>
            <span className="inline-block bg-yellow-500 text-sm px-3 py-1 rounded-full text-white">
              VFX Artist
            </span>
            <span className="inline-block bg-yellow-500 text-sm px-3 py-1 rounded-full text-white">
              Creative Coder
            </span>
          </div>

          <p className="text-lg leading-relaxed text-gray-300">
            I’m a Full Stack Developer from Uttarakhand, India, currently
            pursuing my B.Tech in Electronics and Communication Engineering from
            GBPIET, Ghurdauri.
            <br />
            <br />
            I blend creativity with logic to build sleek, functional MERN stack
            projects and WebApps. Always in grind mode, upskilling and building
            stuff that actually matters.
            <br />
            <br />
            Currently working solo, crafting my digital identity through code,
            design, and vision.
          </p>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4 text-gray-300 text-base">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              ragnesisofficial@gmail.com
            </p>
            <p>
              <span className="font-semibold text-white">Location:</span>{" "}
              Uttarakhand, India
            </p>
          </div>

          {/* Resume Button */}
          <div className="pt-6">
            <a
              href="https://drive.google.com/file/d/13Cn6YrZKGs1GUcLeIRU8q7B1cBan1isC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-yellow-600 hover:bg-blue-500 text-white rounded-full font-medium transition">
              Resume <i className="fas fa-chevron-right ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
