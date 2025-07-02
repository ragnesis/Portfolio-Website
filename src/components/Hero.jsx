import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import heroImg from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold">
          Hi There,
          <br /> I'm Mayank Pathak{" "}
          <span className="text-blue-400">(Ragnesis)</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl">
          I am into{" "}
          <span className="text-blue-400 font-semibold">
            <Typewriter
              options={{
                strings: [
                  "Web Development",
                  "UI/UX",
                  "Software Development",
                  "Graphic Design",
                  "Video Editing",
                  "DSA",
                  "VFX",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.p>

        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-500 transition">
          About Me
          <i className="fas fa-arrow-circle-down ml-2" />
        </motion.a>

        {/* Social Icons */}
        <div className="flex space-x-6 pt-4 ">
          <a
            href="https://www.linkedin.com/in/ragnesitain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-2xl">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ragnesis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-2xl">
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ragnesis_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 text-2xl">
            <FaTwitter />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 md:mt-0">
        <img
          src={heroImg}
          alt="Hero"
          className="w-64 md:w-96 rounded-xl shadow-xl"
          draggable={false}
        />
      </motion.div>
    </section>
  );
}
