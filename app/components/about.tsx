
"use client";
import { useState, useEffect, FC } from "react";
import Image from "next/image";
import {
  Cpu,
  Code,
  Bot,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
} from "lucide-react";
import { NextPage } from "next";

// Helper component for tech pills in the header
const InfoPill: FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex items-center gap-2 bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm">
    {icon}
    <span>{text}</span>
  </div>
);

// Helper component for tool tags
const ToolTag: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-slate-800 text-slate-300 rounded-md text-sm text-center py-2 px-3 border border-slate-700 hover:border-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
    {children}
  </div>
);

const About: NextPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const aiTools = [
    "OpenAI API",
    "Python Agents",
    "Next.js AI SDK",
    "LangChain",
  
  
  ];

  return (
    <div className="relative bg-slate-900 text-slate-100 font-sans overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(120,82,255,0.15),_transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.1),_transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%231e293b%22%20fill-opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <section id="about" className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-6">
              Full-Stack Developer with a passion for Agentic AI.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <InfoPill
                icon={<Cpu size={16} className="text-sky-400" />}
                text="Full-Stack Developer"
              />
              <InfoPill
                icon={<Code size={16} className="text-emerald-400" />}
                text="Next.js & TypeScript"
              />
              <InfoPill
                icon={<Bot size={16} className="text-purple-400" />}
                text="Agentic AI Research"
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16 items-center">
            {/* Profile Image - Same style as Hero */}
            <div
              className={`lg:col-span-2 flex justify-center transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative group w-64 h-80 md:w-80 md:h-96">
                {/* Glowing border effect similar to Hero */}
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-sky-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-all duration-500"></div>

                {/* Main container similar to Hero's card */}
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/20 w-full h-full flex items-center justify-center group-hover:border-white/30 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-3xl">
                  {/* Animated background elements similar to Hero */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-blue-300 font-mono text-lg animate-float"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 3}s`,
                          fontSize: `${Math.random() * 16 + 14}px`,
                        }}
                      >
                        {["{ }", "< />", "();", "=>", "[]"][i % 5]}
                      </div>
                    ))}
                  </div>

                  {/* Profile Image Container */}
                  <div className="relative w-full h-full flex items-center justify-center p-6">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-purple-400/50 transition-all duration-500 shadow-2xl">
                      <Image
                        src="/images/profile.png"
                        alt="Kiran Mushtaque"
                        width={224}
                        height={224}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                        priority
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-all duration-500">
                      <Code size={24} className="text-cyan-400" />
                    </div>
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-all duration-500">
                      <Bot size={24} className="text-purple-400" />
                    </div>
                    <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-all duration-500">
                      <Cpu size={24} className="text-emerald-400" />
                    </div>
                  </div>

                  {/* Status indicator similar to Hero */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-400/30 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Available for projects
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div
              className={`lg:col-span-3 transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-white/30">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                    Im a Full-Stack Developer passionate about{" "}
                    <span className="font-semibold text-purple-400">
                      Agentic AI
                    </span>{" "}
                    — intelligent systems that reason, act, and automate
                    workflows autonomously.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    I blend{" "}
                    <span className="font-medium text-emerald-400">
                      Next.js, TypeScript, and Python
                    </span>{" "}
                    with cutting-edge AI tools to create adaptive,
                    learning-driven web applications that push the boundaries of
                    whats possible.
                  </p>

                  {/* Collapsible Section */}
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      showMore
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-6 space-y-6 border-t border-slate-700">
                      <p className="text-slate-300 leading-relaxed">
                        My current focus is on building multi-agent systems —
                        autonomous web agents that can plan, learn, and perform
                        complex tasks using OpenAI technologies.
                      </p>
                      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <BrainCircuit size={20} className="text-purple-400" />
                          Core Focus & Tools
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {aiTools.map((tool) => (
                            <ToolTag key={tool}>{tool}</ToolTag>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-purple-500/30 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      {showMore ? "Show Less" : "Read More"}
                      {showMore ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add the same animations as Hero */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default About;
