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
    title: "ZentFires (MERN Project)",
    desc: "A full-stack MERN web application with authentication and modern UI.",
    role: "Worked on frontend UI development and responsiveness.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Modern UI Design",
      "Responsive Pages",
      "User Authentication UI",
    ],
    live: "https://facebooklead.vercel.app/",
    code: "#",
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

export default function ProjectsSections() {
  return (
    <section className="w-full py-20 bg-[#050816]  bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-white text-lg font-medium"> My Work</p>
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-500 mt-2">
            Real live preview of my projects
          </p>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-8 mb-12 shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-10 items-center"
          >
            
            {/* LEFT */}
            <div className="flex-1">

              <span className="text-sm text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-2xl font-semibold mt-2 text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm">
                {project.desc}
              </p>

              {/* ROLE (VERY IMPORTANT) */}
              <p className="text-sm mt-2 text-blue-600 font-medium">
                Role: {project.role}
              </p>

              {/* TECH */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* FEATURES */}
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                {project.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="mt-6 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm"
                >
                  Open Full Site
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="px-4 py-2 border rounded-lg text-sm"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* RIGHT - IFRAME */}
            <div className="flex-1">
              <div className="bg-[#eef2ff] p-4 rounded-2xl">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border">

                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b">
                    <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  </div>

                  <iframe
                    src={project.live}
                    className="w-full h-[300px]"
                    loading="lazy"
                  />

                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}