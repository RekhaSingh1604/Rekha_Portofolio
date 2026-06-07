export default function Resume() {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            My <span className="text-purple-500">Resume</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            MERN Stack Developer passionate about building responsive,
            scalable and user-friendly web applications.
          </p>

          <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-medium transition">
            Download Resume
          </button>
        </div>

        {/* Summary */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Professional Summary
          </h2>

          <p className="text-gray-300 leading-8">
           Frontend Developer & MERN experience with 1+ years of hands-on experience in React.js and MERN stack development. Skilled in responsive UI design, REST API integration, JavaScript, Node.js, and developing modern, performance-optimized applications with clean code practices and user-focused design. Passionate about building user-friendly web applications and learning new technical skills.
          </p>
        </div>

        {/* Education */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-8">
            Education
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-semibold">
              Bachelor of Computer Applications (BCA)
            </h3>

            <p className="text-purple-400 mt-2">
              Avviare Educational Hub
            </p>

            <p className="text-gray-400 mt-1">
              2022 - 2025
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-8">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "React.js",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "HTML5",
              "CSS3",
              "Git & GitHub",
              "REST APIs",
              "Tailwind CSS",
              "Next.js",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-purple-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-8">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-3">
               Zanifest Insurance
              </h3>

              <p className="text-gray-400">
               Zanifest Insurance
Tech Stack: React.js, Next.js, Tailwind CSS, JavaScript, React Router, Node.js
Developed a modern insurance website with multiple policy sections.
Focused on user-friendly layout to simplify complex insurance information.
Added clean Ul components and optimized overall user experience.
Implemented responsive design for seamless experience across all devices.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Facebook Lead Generation
              </h3>

              <p className="text-gray-400">
               Tech Stack: Next.js, React.js, CSS, JavaScript, Animation
Built responsive Ul with Dashboard, Feed and Profile sections using React and Next.js
Added smooth animations and interactive transitions for better UX.
Designed and implemented Dashboard layout for managing user activities.
Built reusable React components and handled dynamic rendering.
Added smooth animations and transitions to enhance user experience
              </p>
            </div>

             <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Facebook Lead Generation
              </h3>

              <p className="text-gray-400">
               Tech Stack: Next.js, React.js, CSS, JavaScript, Animation
Built responsive Ul with Dashboard, Feed and Profile sections using React and Next.js
Added smooth animations and interactive transitions for better UX.
Designed and implemented Dashboard layout for managing user activities.
Built reusable React components and handled dynamic rendering.
Added smooth animations and transitions to enhance user experience
              </p>
            </div>

             <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-3">
               Petrol Pump Management System
              </h3>

              <p className="text-gray-400">
               Tech Stack: Next.js, React.js, CSS, JavaScript, Animation
Built responsive Ul with Dashboard, Feed and Profile sections using React and Next.js
Added smooth animations and interactive transitions for better UX.
Designed and implemented Dashboard layout for managing user activities.
Built reusable React components and handled dynamic rendering.
Added smooth animations and transitions to enhance user experience
              </p>
            </div>

          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-purple-700/20 to-pink-600/20 border
         border-purple-500/20 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Work Together
          </h2>

          <p className="text-gray-300 mb-6">
            Looking for Frontend, React.js or MERN Stack opportunities.
          </p>

          <a
            href="mailto:singhrekha5704@gmail.com"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl inline-block transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </div>
  );
}