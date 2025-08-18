export default function Projects() {
  const projects = [
    {
      title: "To-Do List Web App",
      description: "A task management app built with Django and React.",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using Next.js and TailwindCSS.",
      link: "https://dodge-nine-alpha.vercel.app/"
    },
    {
      title: "Dodge-new models Website",
      description: "A demo e-commerce site using React and Firebase.",
      link: "#"
    },
    {
      title: "Login-page",
      description: "A demo e-commerce site using html and css.",
      link: "login-page-flax-pi.vercel.app"
    },
    {
      title: "Rock-Paper-Scissor Game",
      description: "A demo game site using React.",
      link: "https://new-project-kw9n.vercel.app/"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, #111827 0%, #111827 97%, #f3f4f6 100%)`
      }}
    >
      <h2 className="text-4xl font-extrabold mb-6 text-indigo-400 drop-shadow">
        Projects
      </h2>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        A few projects I’ve worked on recently. Click below to view live demos.
      </p>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] p-6 text-left rounded-lg
                       bg-gradient-to-r from-gray-800 to-gray-700
                       border border-gray-600 text-indigo-300
                       shadow-md hover:shadow-xl hover:shadow-indigo-500/30
                       hover:text-white hover:border-indigo-400
                       transition-transform duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
