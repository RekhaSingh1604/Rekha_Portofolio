"use client";
// import { image } from 'framer-motion/client';
import '../../public/assets/image.png';
import { useEffect } from 'react';
import gsap from "gsap";
import SplitType from "split-type";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function PortfolioHero() {

// useEffect(() => {

//     const text = new SplitType(".title , .hello", {
//       types: "chars",
//     });

//     gsap.from(text.chars, {
//       y: 100,
//       opacity: 20,
//       stagger: 0.02,
//       duration: 2,
//       ease: "power2.out",
//     });

//   }, []);


  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Navbar */}
      {/* <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">
          Rekha <span className="text-purple-500">Singh</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
          <li className="hover:text-purple-400 cursor-pointer">Home</li>
          <li className="hover:text-purple-400 cursor-pointer">About</li>
          <li className="hover:text-purple-400 cursor-pointer">Skills</li>
          <li className="hover:text-purple-400 cursor-pointer">Projects</li>
          <li className="hover:text-purple-400 cursor-pointer">Resume</li>
          <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-xl text-sm font-medium shadow-lg shadow-purple-500/30">
          Let’s Talk
        </button>
      </nav> */}

      {/* Hero Section */}
      {/* <section className="max-w-7xl mx-auto px-8 py-26 grid lg:grid-cols-2 gap-16 items-center"> */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="text-gray-400 mb-4 text-base sm:text-lg hello">Hello, I'm 👋</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Rekha Singh
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-6 title">
            I build modern & user-friendly
            <span className="text-purple-500"> web experiences</span>
          </h2>

          {/* <div className="inline-flex items-center gap-2 bg-[#14182b] border border-purple-500/30 px-4 py-2 rounded-full text-sm text-gray-300 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Frontend Developer
          </div>

          <div className="inline-flex items-center gap-2 bg-[#14182b] border border-purple-500/30 mx-4 px-4 py-2 rounded-full text-sm text-gray-300 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            MERN Stack Developer
          </div> */}

          <p className="text-gray-400 max-w-lg leading-7 sm:leading-8 mb-10 text-base sm:text-lg">
            Passionate about creating responsive, accessible and
            high-performance web applications using modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/ProjectSections">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition px-8 py-4 rounded-2xl font-medium shadow-xl shadow-purple-500/30">
                View Projects
              </button>
            </Link>

            <Link href="/Resume">
              <button className="border border-purple-500/40 hover:bg-purple-500/10 transition px-8 py-4 rounded-2xl font-medium text-gray-200">
                Download Resume
              </button>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {/* {[
              "Instagram",
              "GitHub",
              "Email",
              "LinkedIn",
            ] */}
            {[
  { name: "Instagram", link: "https://www.instagram.com/rekha_singh1604" , icon: <FaInstagram /> },
  { name: "GitHub", link: "https://github.com/RekhaSingh1604",icon:<FaGithub /> },
  { name: "Email", link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=singhrekh5704@gmail.com", icon:<IoMdMail /> },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/rekha-singh-35a22b309/", icon:<FaLinkedinIn /> },
]
            .map((item, index) => (
              // <div
              //   key={index}
              //   className="w-14 h-14 rounded-full bg-[#101528] border border-white/10 flex items-center justify-center hover:border-purple-500 hover:-translate-y-1 transition cursor-pointer"
              // >
              //   <span className="text-sm text-gray-300">{item[0]}</span>
              // </div>
              <a
  key={index}
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="w-14 h-14 rounded-full bg-[#101528] border border-white/10 flex items-center justify-center hover:border-purple-500 hover:-translate-y-1 transition cursor-pointer"
>
  {item.icon}
</a>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          {/* Glow Effect */}
          <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full border-4 border-purple-600 shadow-[0_0_80px_rgba(168,85,247,0.7)]"></div>

    
<img
  src="/assets/image.png"
  alt="profile"
  className="relative z-10 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] object-cover rounded-full border-2 border-purple-500"/>
          {/* Floating Cards */}
          <div className="absolute top-10 right-10 bg-[#14182b] border border-purple-500/40 p-4 rounded-2xl shadow-lg">
            <p className="text-purple-400 text-xl">&lt;/&gt;</p>
          </div>

          <div className="absolute bottom-20 left-10 bg-[#14182b] border border-purple-500/40 p-4 rounded-2xl shadow-lg">
            ✨
          </div>
        </div>
      </section>

      {/* Bottom Feature Cards */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Frontend Development",
              desc: "Building responsive and interactive UI.",
            },
            {
              title: "Modern Technologies",
              desc: "React, Next.js, JavaScript, HTML, CSS & more",
            },
            {
              title: "Responsive Design",
              desc: "Mobile-first approach for all devices",
            },
            {
              title: "Performance Focused",
              desc: "Optimized code for better performance",
            },
           
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#101528] border border-white/10 rounded-3xl p-6 hover:border-purple-500/50 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 text-xl mb-4">
                ⚡
              </div>

              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-7">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}