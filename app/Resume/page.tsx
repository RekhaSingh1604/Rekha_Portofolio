export default function Resume() {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git & GitHub",
  ];

  const projects = [
    {
      title: "Zanifest Insurance",
      desc: "Developed a modern insurance website with multiple policy sections and responsive UI.",
    },
    {
      title: "Facebook Lead Generation",
      desc: "Built responsive dashboard, profile and feed sections with modern animations.",
    },
    {
      title: "Undercover Social",
      desc: "WordPress based website with custom UI, plugins and contact form integration.",
    },
    {
      title: "Petrol Pump Management System",
      desc: "Management system for fuel sales, billing, reporting and daily operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">

        {/* Hero */}
        <div className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-[6px] text-sm mb-3">
            Resume
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold">
            Rekha <span className="text-purple-500">Singh</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Frontend Developer & MERN Stack Developer passionate about creating modern,
            responsive and scalable web applications.
          </p>

          <button className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 rounded-xl font-medium hover:scale-105 transition">
            Download Resume
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {[
            { number: "1+", label: "Years Experience" },
            { number: "4+", label: "Projects" },
            { number: "12+", label: "Technologies" },
            { number: "100%", label: "Passion" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-purple-400">
                {item.number}
              </h3>
              <p className="text-gray-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-14 hover:border-purple-500/40 transition">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Professional Summary
          </h2>

          <p className="text-gray-300 leading-8">
            Frontend Developer & MERN Stack Developer with 1+ years of hands-on
            experience in React.js and MERN Stack development. Skilled in
            responsive UI design, REST API integration, JavaScript, Node.js,
            MongoDB and building performance-optimized applications.
          </p>
        </div>

        {/* Education */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-8 text-purple-500">
            Education
          </h2>

          <div className="relative border-l-2 border-purple-500 pl-8">
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-purple-500 rounded-full"></div>

            <h3 className="text-xl font-semibold">
              Bachelor of Computer Applications (BCA)
            </h3>

            <p className="text-purple-400 mt-2">
              Avviare Educational Hub
            </p>

            <p className="text-gray-400 mt-1">
              2022 – 2025
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-8 text-purple-500">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 rounded-full bg-purple-600/10 border border-purple-500/30 hover:bg-purple-600/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-8 text-purple-500">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="relative overflow-hidden rounded-3xl p-12 text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20">
          
          <h2 className="text-4xl font-bold mb-4">
            Open To Opportunities 🚀
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Currently seeking opportunities as a Frontend Developer,
            React.js Developer, MERN Stack Developer, or Full Stack Developer.
            I am excited to contribute to innovative projects and grow with a dynamic team.
          </p>

          <a
            href="mailto:singhrekh5704@gmail.com"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </div>
  );
}