import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skills", href: "#skills" },
  { id: 4, name: "Education", href: "#education" },
  { id: 5, name: "Work", href: "#work" },
  { id: 6, name: "Experience", href: "#experience" },
  { id: 7, name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Auto-track current section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16 relative">
        <a href="/" className="text-2xl font-bold">
          Ragnesis
        </a>

        {/* Mobile Toggle */}
        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex relative space-x-6 pb-2">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative transition ${
                  isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"
                }`}>
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Nav */}
      {nav && (
        <ul className="md:hidden bg-black text-white flex flex-col items-center py-4 space-y-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setNav(false)}
                className={`${
                  activeSection === link.href.slice(1)
                    ? "text-cyan-400 font-bold"
                    : "hover:text-cyan-400"
                }`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
