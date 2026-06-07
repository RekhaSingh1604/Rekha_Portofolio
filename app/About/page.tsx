"use client";
import { motion } from "framer-motion";
import '../../public/assets/videoframe_1014.png';
export default function About() {
  return (
   
    <section
      id="about"
      className="relative py-28 bg-black text-white px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* 🔥 LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/assets/videoframe_1014.png"
  alt="Rekha Singh"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl border border-blue-500/30 opacity-0 group-hover:opacity-100 transition"></div>
        </motion.div>

        {/* 🔥 RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          {/* Line */}
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>

          {/* Content */}
          <p className="text-gray-300 leading-relaxed mb-6">
            I am <span className="text-white font-semibold">Rekha Singh</span>, a passionate MERN Stack Developer with a strong foundation in building modern, scalable, and user-friendly web applications.  
            I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            With experience in React, Node.js, MongoDB, and frontend technologies, I focus on creating high-performance applications that deliver real-world impact. I am constantly learning and exploring new technologies to improve my skills and stay ahead in the tech industry.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4">

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-gray-400">Experience</p>
              <h4 className="font-semibold">1+ Year</h4>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-gray-400">Projects</p>
              <h4 className="font-semibold">5+ Completed</h4>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-gray-400">Specialization</p>
              <h4 className="font-semibold">MERN Stack</h4>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-gray-400">Location</p>
              <h4 className="font-semibold">New Delhi</h4>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  
  );
}