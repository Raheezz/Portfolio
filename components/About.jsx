export default function AboutSkills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS",
    "Django", "Python", "Git", "MySQL"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4 md:px-8 py-16">
      
      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto mb-20 text-left">
        <h2 className="text-4xl font-extrabold mb-6 text-indigo-400 drop-shadow text-center md:text-left">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I'm <span className="font-semibold text-white">Muhammed Rahees MK</span>, a Bachelor of Computer Applications (BCA) student with a strong foundation in full-stack web development. I have completed a full-stack development course, gaining hands-on experience with technologies such as <span className="text-indigo-300">React</span>, <span className="text-indigo-300">Next.js</span>, <span className="text-indigo-300">Tailwind CSS</span>, <span className="text-indigo-300">Django</span>, and <span className="text-indigo-300">Git</span>.

          My focus is on building efficient, user-friendly, and responsive web applications. I'm passionate about learning and continuously improving my skills, and I'm currently exploring the world of <span className="text-indigo-300">3D design and animation</span> using Blender as a beginner.

          I'm eager to apply my knowledge in real-world projects, collaborate with teams, and grow into a well-rounded full-stack developer with creative and technical skills.
        </p>
      </section>

      {/* Divider */}
      <div className="w-3/4 mx-auto border-b border-gray-700 mb-16"></div>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-extrabold mb-8 text-indigo-400 drop-shadow text-center md:text-left">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 
                         border border-gray-600 text-indigo-300 
                         rounded-lg text-base font-medium shadow-md 
                         hover:shadow-xl hover:shadow-indigo-500/30
                         hover:text-white hover:border-indigo-400
                         transition-transform duration-300 transform hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
