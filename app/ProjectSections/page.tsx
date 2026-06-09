"use client";

const projects = [
  {
    title: "Petrol Pump Management System",
    desc: "A complete management system for handling fuel sales, billing, and daily operations efficiently.",
    role: "Developed responsive UI and improved user experience.",
    tech: ["React", "Tailwind CSS"],
    features: [
      "Dashboard UI Design",
      "Responsive Layout",
      "User-friendly Interface",
    ],
    live: "https://amarneerfuelstationfrontend.vercel.app/",
    code: "#",
  },
  {
    title: "ZentFiest (MERN Project)",
    desc: "A full-stack MERN web application with authentication and modern UI.",
    role: "Worked on frontend UI development and responsiveness.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Modern UI Design",
      "Responsive Pages",
      "User Authentication UI",
    ],
    live: "https://zanifestinsurance.com/",
    code: "https://github.com/AeronDigitalSolutions/zanifest.git",
  },
  {
    title: "Undercover Social (WordPress)",
    desc: "A WordPress-based social platform with full design customization and integrations.",
    role: "Complete development including design, contact forms, and integrations.",
    tech: ["WordPress", "Elementor", "Plugins"],
    features: [
      "Custom UI Design",
      "Contact Form Integration",
      "Plugin Configuration",
    ],
    live: "https://undercoversocials.in/",
    code: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-24 bg-[#050816] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className=" text-center mb-16 md:mb-20">
          <p className="text-purple-400 text-base md:text-lg font-medium">My Work</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A collection of real-world projects showcasing my experience in
            MERN Stack, React.js, WordPress and modern web development.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8 lg:p-10
                transition-all duration-500
                hover:border-purple-500/40
                hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]
                flex flex-col lg:flex-row
                gap-10
                items-center
              "
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

              {/* Left Side */}
              <div className="flex-1 relative z-10">
                {/* Number */}
                <div
                  className="
                    inline-flex items-center justify-center
                    w-12 h-12
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    to-blue-600
                    text-white
                    font-bold
                    text-lg
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-4 text-sm leading-7">
                  {project.desc}
                </p>

                {/* Role */}
                <div
                  className="
                    mt-5
                    inline-flex
                    items-center
                    px-4 py-2
                    rounded-full
                    border border-blue-500/20
                    bg-blue-500/10
                  "
                >
                  <span className="text-blue-400 text-sm font-medium">
                    {project.role}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-4 py-2
                        rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        text-gray-300
                        text-xs
                        hover:border-purple-500/40
                        transition-all
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-center
      px-6 py-3
      rounded-xl
      bg-gradient-to-r
      from-purple-600
      to-blue-600
      text-white
      text-sm
      font-medium
      hover:scale-105
      transition-all
                    "
                  >
                    Live Preview
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        text-center
      px-6 py-3
      rounded-xl
      border border-white/10
      text-white
      text-sm
      hover:bg-white/5
      transition-all
                    "
                  >
                    Source Code
                  </a>
                </div>
              </div>

              {/* Right Side - Browser Preview */}
              <div className="flex-1 w-full relative z-10">
                <div
                  className="
                    rounded-3xl
                    overflow-hidden
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    shadow-2xl
                  "
                >
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-5 py-4 bg-white/5 border-b border-white/10">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />

                    <div className="ml-4 text-xs text-gray-400 truncate">
                      {project.live}
                    </div>
                  </div>

                  {/* Website Preview */}
                  <iframe
                    src={project.live}
                    title={project.title}
                    className= "w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] "
  loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Stats */}
      
<div className="relative max-w-7xl mx-auto px-6 mt-24">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
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

        
        </div>
    </section>
  );
}