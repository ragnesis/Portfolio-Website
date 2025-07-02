import { motion } from "framer-motion";
import contactIllustration from "../assets/images/contact1.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0d0d0d] text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold mb-12 flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <i className="fas fa-headset text-cyan-400" />
        Get in <span className="text-cyan-400 ml-2">Touch</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center ">
        <img
          src={contactIllustration}
          alt="Contact illustration"
          className="w-full h-auto max-h-[400px] object-contain"
        />

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const res = await fetch("https://formspree.io/f/xanjkwdk", {
              method: "POST",
              body: formData,
              headers: {
                Accept: "application/json",
              },
            });

            if (res.ok) {
              alert("Thanks for reaching out! 📩 We'll get back to you soon.");
              e.target.reset();
            } else {
              alert("Oops! Something went wrong. Try again later.");
            }
          }}
          className="space-y-5 w-full">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 bg-[#1a1a1a] rounded text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 bg-[#1a1a1a] rounded text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="w-full p-3 bg-[#1a1a1a] rounded text-white border border-gray-700 focus:outline-none focus:border-cyan-400"></textarea>
          <button
            type="submit"
            className="bg-cyan-500 px-6 py-3 rounded text-white font-semibold hover:bg-cyan-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
