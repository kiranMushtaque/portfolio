

import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <footer className="relative z-10">
        <div className="container px-6 py-16 mx-auto">
          {/* Main Content */}
          <div className="flex flex-col items-center">
            {/* Logo Section */}
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">
                Kiran
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            {/* Tagline */}
            <p className="text-gray-300 text-lg mb-12 text-center max-w-md">
              Building digital experiences with passion and precision
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 mb-12">
              {/* Gmail */}
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kiranmushtaque373@gmail.com"
                target="_blank"
                className="group"
              >
                <div className="w-16 h-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white border-opacity-20 hover:bg-opacity-20 hover:scale-110 hover:rotate-6 transition-all duration-300 hover:border-red-400">
                  <MdEmail className="text-3xl text-white group-hover:text-red-400 transition-colors duration-300" />
                </div>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/kiran-m-9b238b2b6/"
                target="_blank"
                className="group"
              >
                <div className="w-16 h-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white border-opacity-20 hover:bg-opacity-20 hover:scale-110 hover:rotate-6 transition-all duration-300 hover:border-blue-400">
                  <FaLinkedin className="text-3xl text-white group-hover:text-blue-400 transition-colors duration-300" />
                </div>
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/kiranMushtaque"
                target="_blank"
                className="group"
              >
                <div className="w-16 h-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white border-opacity-20 hover:bg-opacity-20 hover:scale-110 hover:rotate-6 transition-all duration-300 hover:border-purple-400">
                  <FaGithub className="text-3xl text-white group-hover:text-purple-400 transition-colors duration-300" />
                </div>
              </Link>
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white via-opacity-20 to-transparent mb-8"></div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                © 2024 Kiran Personal Portfolio
              </p>
              <p className="text-gray-500 text-xs">
                Designed & Developed with 💙
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;