"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_uuumg6u",      // ✅ your service ID
        "template_kyc6z8v",     // ✅ your template ID
        e.target,
        "fu0-0a19JMYO-NR6T"     // ✅ your public key
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error);
          toast.error("Failed to send ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative py-28 bg-black text-white px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

          <p className="text-gray-400 mb-8">
            Let's build something amazing together. Feel free to contact me anytime.
          </p>

          <div className="space-y-4 text-gray-300">

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              singhrekha5704@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" />
              +91 595361153
            </p>

            <p className="flex items-center gap-3">
              <FaLinkedin className="text-blue-400" />
              Rekha Singh
            </p>

            <p className="flex items-center gap-3">
              <FaGithub className="text-blue-400" />
              github.com/RekhaSingh1604
            </p>

          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={sendEmail}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-5 backdrop-blur-md"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-black/40 border border-white/10 focus:border-blue-500 outline-none"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-black/40 border border-white/10 focus:border-blue-500 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded bg-black/40 border border-white/10 focus:border-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-medium transition flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

        </form>
      </div>

      {/* MAP */}
      <div className="mt-16 max-w-6xl mx-auto">
        <iframe
          className="w-full h-64 rounded-xl border border-white/10"
          src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
}