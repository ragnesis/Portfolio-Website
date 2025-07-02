export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Ragnesis's Portfolio</h3>
          <p className="text-gray-400 text-sm">
            Thanks for visiting my personal portfolio website. Connect with me
            on socials. <br /> <br />
            Keep Rising 🚀
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              "home",
              "about",
              "skills",
              "education",
              "work",
              "experience",
              "contact",
            ].map((link) => (
              <li key={link}>
                <a href={`#${link}`} className="hover:text-cyan-400 capitalize">
                  <i className="fas fa-chevron-circle-right mr-2" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Contact Info</h3>
          <p className="text-sm text-gray-400 mb-2">
            <i className="fas fa-phone mr-2" /> +91 902-792-9049
          </p>
          <p className="text-sm text-gray-400 mb-2">
            <i className="fas fa-envelope mr-2" /> ragnesisofficial@gmail.com
          </p>
          <p className="text-sm text-gray-400 mb-4">
            <i className="fas fa-map-marker-alt mr-2" /> Uttarakhand, India
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/ragnesitain"
              target="_blank"
              rel="noreferrer">
              <i className="fab fa-linkedin text-2xl hover:text-cyan-400" />
            </a>
            <a
              href="https://github.com/ragnesis"
              target="_blank"
              rel="noreferrer">
              <i className="fab fa-github text-2xl hover:text-cyan-400" />
            </a>
            <a
              href="mailto:ragnesisofficial@gmail.com"
              target="_blank"
              rel="noreferrer">
              <i className="fas fa-envelope text-2xl hover:text-cyan-400" />
            </a>
            <a
              href="https://twitter.com/ragnesis_"
              target="_blank"
              rel="noreferrer">
              <i className="fab fa-twitter text-2xl hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        Designed with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/ragnesitain"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:underline">
          Mayank Pathak (Ragnesis)
        </a>
      </p>
    </footer>
  );
}
