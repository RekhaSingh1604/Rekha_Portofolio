"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-white/10 bg-[#050816] text-white fixed top-0 left-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Rekha <span className="text-purple-500">Singh</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-purple-400 cursor-pointer transition">
            Home
          </Link>

          <Link href="/About" className="hover:text-purple-400 cursor-pointer transition">
            About
          </Link>

          <Link href="/Skills" className="hover:text-purple-400 cursor-pointer transition">
            Skills
          </Link>

          <Link href="/ProjectSections" className="hover:text-purple-400 cursor-pointer transition">
            Projects
          </Link>

          {/* <Link href="/Resume" className="hover:text-purple-400 cursor-pointer transition">
            Resume
          </Link> */}

          <Link href="/Contact" className="hover:text-purple-400 cursor-pointer transition">
            Contact
          </Link>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-xl text-sm font-medium shadow-lg shadow-purple-500/30">
          Let’s Talk
        </button>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0b0f1a] border-b border-white/10 transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "max-h-[500px] py-6"
            : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-300 text-lg font-medium">

          <Link href="/" className="hover:text-purple-400 cursor-pointer transition">
            Home
          </Link>

          <Link href="/About" className="hover:text-purple-400 cursor-pointer transition">
            About
          </Link>

          <Link href="/Skills" className="hover:text-purple-400 cursor-pointer transition">
            Skills
          </Link>

          <Link href="/ProjectSections" className="hover:text-purple-400 cursor-pointer transition">
            Projects
          </Link>

          {/* <Link href="/Resume" className="hover:text-purple-400 cursor-pointer transition">
            Resume
          </Link> */}

          <Link href="/Contact" className="hover:text-purple-400 cursor-pointer transition">
            Contact
          </Link>

          <Link href="/Contact" className="bg-purple-600 hover:bg-purple-700 transition px-5 py-3 rounded-xl text-sm font-medium shadow-lg shadow-purple-500/30">
            Let’s Talk
          </Link>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;