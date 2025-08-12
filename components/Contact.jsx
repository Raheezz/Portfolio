import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-300 text-gray-800 text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-indigo-600 drop-shadow">
        Get In Touch
      </h2>
      <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed text-gray-700">
        Interested in collaborating or have a question? I'd love to hear from you! Feel free to connect with me via email or through my social platforms.
      </p>

      {/* Contact Button */}
      <a
        href="mailto:mrsrahees@gmail.com"
        className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-300 hover:bg-indigo-500 hover:shadow-lg"
      >
        Send Me an Email
      </a>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
