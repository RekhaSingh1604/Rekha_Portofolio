"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const categories = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "VS Code", icon: <FaReact /> },
  ],
};

export default function Skills() {
  const [active, setActive] = useState("Frontend");

  return (
    <section className="relative py-28 bg-black text-white px-6 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full border transition ${
                active === cat
                  ? "bg-blue-600 border-blue-600"
                  : "border-white/20 hover:border-blue-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {categories[active as keyof typeof categories].map((skill, i) => (

            <Tilt
              key={i}
              glareEnable
              glareMaxOpacity={0.2}
              scale={1.05}
              className="rounded-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition"
              >

                {/* Icon */}
                <div className="text-4xl text-blue-400 mb-3 group-hover:scale-110 transition">
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                  {skill.name}
                </h3>

              </motion.div>
            </Tilt>

          ))}

        </div>
      </div>
    </section>
  );
}