

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Typewriter from "typewriter-effect";

// // const expertiseTags = [
// //   "Full-Stack Development",
// //   "Next.js & TypeScript",
// //   "Python Backend",
// //   "Open Source",
// //   "AI Integration",
// // ] as const;

// // const gradientMap: Record<(typeof expertiseTags)[number], string> = {
// //   "Full-Stack Development": "from-slate-900 via-blue-900 to-purple-900",
// //   "Next.js & TypeScript": "from-blue-900 via-slate-900 to-cyan-900",
// //   "Python Backend": "from-emerald-900 via-slate-900 to-teal-900",
// //   "Open Source": "from-violet-900 via-slate-900 to-indigo-900",
// //   "AI Integration": "from-rose-900 via-slate-900 to-pink-900",
// // };

// // const Hero: React.FC = () => {
// //   const [activeIndex, setActiveIndex] = useState<number>(0);
// //   const [mounted, setMounted] = useState(false);

// //   useEffect(() => {
// //     setMounted(true);
// //     const interval = setInterval(() => {
// //       setActiveIndex((prev) => (prev + 1) % expertiseTags.length);
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   if (!mounted) return null;

// //   const gradientClass =
// //     gradientMap[expertiseTags[activeIndex]] ?? "from-slate-900 to-gray-800";

// //   return (
// //     <main
// //       id="home"
// //       className={`relative min-h-screen bg-gradient-to-br ${gradientClass} transition-all duration-1000 flex items-center justify-center text-white px-6 overflow-hidden`}
// //     >
// //       {/* Animated Background */}
// //       <div className="absolute inset-0">
// //         {/* Floating Code Elements */}
// //         <div className="absolute inset-0 opacity-10">
// //           {[...Array(20)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="absolute text-blue-300 font-mono text-xl animate-float"
// //               style={{
// //                 top: `${Math.random() * 100}%`,
// //                 left: `${Math.random() * 100}%`,
// //                 animationDelay: `${i * 2}s`,
// //                 fontSize: `${Math.random() * 20 + 16}px`,
// //               }}
// //             >
// //               {["{ }", "< />", "();", "=>", "[]", "``", "${ }", "..."][i % 8]}
// //             </div>
// //           ))}
// //         </div>

// //         {/* Binary Rain */}
// //         <div className="absolute inset-0 opacity-5">
// //           {[...Array(15)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="absolute text-green-400 font-mono text-sm animate-binary-rain"
// //               style={{
// //                 left: `${(i + 1) * 6}%`,
// //                 animationDelay: `${i * 0.5}s`,
// //                 animationDuration: `${Math.random() * 10 + 10}s`,
// //               }}
// //             >
// //               {Array.from({ length: 20 }, () =>
// //                 Math.random() > 0.5 ? "1" : "0"
// //               ).join("")}
// //             </div>
// //           ))}
// //         </div>

// //         {/* Glowing Orbs */}
// //         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
// //         <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
// //         <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-600 rounded-full opacity-5 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
// //       </div>

// //       {/* Main Hero Section */}
// //       <section className="relative max-w-4xl w-full text-center rounded-2xl border border-white/20 bg-slate-900/80 backdrop-blur-xl px-8 py-16 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-white/30 mx-4 mt-2">
// //         {/* Status */}
// //         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 border border-green-400/50">
// //           <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
// //           Available for new projects
// //         </div>

// //         {/* Heading */}
// //         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
// //           Hi, Im{" "}
// //           <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// //             Kiran Mushtaque
// //           </span>
// //         </h1>

// //         {/* Typewriter Section */}
// //         <div className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-400 min-h-[40px] flex items-center justify-center relative">
// //           <div className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-glow"></div>
// //           <Typewriter
// //             options={{
// //               strings: [
// //                 "Full-Stack Developer",
// //                 "Next.js Specialist",
// //                 "TypeScript Expert",
// //                 "Open Source Contributor",
// //                 "Problem Solver",
// //               ],
// //               autoStart: true,
// //               loop: true,
// //               delay: 75,
// //               deleteSpeed: 50,
// //               cursor: "▌",
// //             }}
// //             onInit={(typewriter) => {
// //               typewriter.pauseFor(1500).start();
// //             }}
// //           />
// //         </div>

// //         {/* Intro Text */}
// //         <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
// //           I craft{" "}
// //           <span className="text-blue-400 font-semibold">
// //             scalable AI-driven applications
// //           </span>{" "}
// //           using <span className="text-cyan-400 font-semibold">Next.js</span>,{" "}
// //           <span className="text-purple-400 font-semibold">TypeScript</span>, and{" "}
// //           <span className="text-green-400 font-semibold">Python Agents</span>.
// //           Currently exploring{" "}
// //           <span className="text-pink-400 font-semibold">
// //             Agentic AI systems
// //           </span>{" "}
// //           and <span className="text-rose-400 font-semibold">OpenAI API</span>{" "}
// //           integration.
// //         </p>

// //         {/* Buttons */}
// //         <div className="mt-8 flex flex-wrap justify-center gap-4">
// //           <a
// //             href="#projects"
// //             className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 border border-blue-500/30 hover:shadow-2xl flex items-center gap-2"
// //           >
// //             <span>View My Work</span>
// //             <svg
// //               className="w-4 h-4"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M19 9l-7 7-7-7"
// //               />
// //             </svg>
// //           </a>

// //           <a
// //             href="#contact"
// //             className="rounded-full border border-slate-600 bg-slate-800/50 px-8 py-4 text-white font-semibold hover:border-slate-400 hover:bg-slate-700/50 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
// //           >
// //             <span>Get In Touch</span>
// //             <svg
// //               className="w-4 h-4"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
// //               />
// //             </svg>
// //           </a>
// //         </div>

// //         {/* Expertise Tags */}
// //         <div className="mt-10">
// //           <p className="text-gray-400 text-sm font-medium mb-4">
// //             SPECIALIZING IN
// //           </p>
// //           <div className="flex flex-wrap justify-center gap-3">
// //             {expertiseTags.map((tag, index) => {
// //               const isActive = index === activeIndex;
// //               return (
// //                 <button
// //                   key={tag}
// //                   type="button"
// //                   onMouseEnter={() => setActiveIndex(index)}
// //                   onFocus={() => setActiveIndex(index)}
// //                   className={`rounded-full border px-4 py-3 text-sm font-semibold transition-all duration-500 transform ${
// //                     isActive
// //                       ? "border-cyan-400 bg-cyan-900/30 text-cyan-300 shadow-lg shadow-cyan-500/20 scale-105"
// //                       : "border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-400 hover:bg-slate-700/50 hover:scale-102"
// //                   } backdrop-blur-sm whitespace-nowrap`}
// //                   aria-pressed={isActive}
// //                 >
// //                   {tag}
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* Quick Stats */}
// //         <div className="mt-12 grid grid-cols-3 gap-6 text-center border-t border-slate-700/50 pt-8">
// //           <div>
// //             <div className="text-2xl font-bold text-blue-400">2+</div>
// //             <div className="text-sm text-gray-400">Years Experience</div>
// //           </div>
// //           <div>
// //             <div className="text-2xl font-bold text-green-400">50+</div>
// //             <div className="text-sm text-gray-400">Projects Built</div>
// //           </div>
// //           <div>
// //             <div className="text-2xl font-bold text-purple-400">100%</div>
// //             <div className="text-sm text-gray-400">Client Satisfaction</div>
// //           </div>
// //         </div>
// //       </section>

   

// //       {/* Animations */}
// //       <style jsx>{`
// //         @keyframes float {
// //           0%,
// //           100% {
// //             transform: translateY(0px) rotate(0deg);
// //           }
// //           50% {
// //             transform: translateY(-20px) rotate(5deg);
// //           }
// //         }
// //         @keyframes binary-rain {
// //           0% {
// //             transform: translateY(-100px);
// //             opacity: 0;
// //           }
// //           10% {
// //             opacity: 1;
// //           }
// //           90% {
// //             opacity: 1;
// //           }
// //           100% {
// //             transform: translateY(100vh);
// //             opacity: 0;
// //           }
// //         }
// //         @keyframes pulse-slow {
// //           0%,
// //           100% {
// //             opacity: 0.1;
// //           }
// //           50% {
// //             opacity: 0.15;
// //           }
// //         }
// //         @keyframes glow {
// //           0%,
// //           100% {
// //             opacity: 0.3;
// //             filter: brightness(1);
// //           }
// //           50% {
// //             opacity: 0.6;
// //             filter: brightness(1.3);
// //           }
// //         }
// //         .animate-float {
// //           animation: float 6s ease-in-out infinite;
// //         }
// //         .animate-binary-rain {
// //           animation: binary-rain linear infinite;
// //         }
// //         .animate-pulse-slow {
// //           animation: pulse-slow 4s ease-in-out infinite;
// //         }
// //         .animate-glow {
// //           animation: glow 5s ease-in-out infinite;
// //         }
// //         .hover\\:scale-102:hover {
// //           transform: scale(1.02);
// //         }
// //         .hover\\:shadow-3xl:hover {
// //           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
// //         }
// //         .Typewriter__cursor {
// //           color: #22d3ee;
// //           font-weight: bold;
// //         }
// //       `}</style>
// //     </main>
// //   );
// // };

// // export default Hero;
// // app/page.tsx


// // app/components/Hero.tsx





// "use client";

// import React, { useEffect, useState } from "react";
// import Typewriter from "typewriter-effect";

// const expertiseTags = [
//   "Full-Stack Development",
//   "Next.js & TypeScript",
//   "Python Backend",
//   "Open Source",
//   "AI Integration",
// ] as const;

// const gradientMap: Record<(typeof expertiseTags)[number], string> = {
//   "Full-Stack Development": "from-slate-900 via-blue-900 to-purple-900",
//   "Next.js & TypeScript": "from-blue-900 via-slate-900 to-cyan-900",
//   "Python Backend": "from-emerald-900 via-slate-900 to-teal-900",
//   "Open Source": "from-violet-900 via-slate-900 to-indigo-900",
//   "AI Integration": "from-rose-900 via-slate-900 to-pink-900",
// };

// const Hero: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % expertiseTags.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   if (!mounted) return null;

//   const gradientClass =
//     gradientMap[expertiseTags[activeIndex]] ?? "from-slate-900 to-gray-800";

//   return (
//     <section
//       id="home"
//       className={`relative min-h-screen bg-gradient-to-br ${gradientClass} transition-all duration-1000 flex items-center justify-center text-white px-6 overflow-hidden`}
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         {/* Floating Code Elements */}
//         <div className="absolute inset-0 opacity-10">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute text-blue-300 font-mono text-xl animate-float"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 2}s`,
//                 fontSize: `${Math.random() * 20 + 16}px`,
//               }}
//             >
//               {["{ }", "< />", "();", "=>", "[]", "``", "${ }", "..."][i % 8]}
//             </div>
//           ))}
//         </div>

//         {/* Binary Rain */}
//         <div className="absolute inset-0 opacity-5">
//           {[...Array(15)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute text-green-400 font-mono text-sm animate-binary-rain"
//               style={{
//                 left: `${(i + 1) * 6}%`,
//                 animationDelay: `${i * 0.5}s`,
//                 animationDuration: `${Math.random() * 10 + 10}s`,
//               }}
//             >
//               {Array.from({ length: 20 }, () =>
//                 Math.random() > 0.5 ? "1" : "0"
//               ).join("")}
//             </div>
//           ))}
//         </div>

//         {/* Glowing Orbs */}
//         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
//         <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-600 rounded-full opacity-5 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
//       </div>

//       {/* Main Hero Section */}
//       <section className="relative max-w-4xl w-full text-center rounded-2xl border border-white/20 bg-slate-900/80 backdrop-blur-xl px-8 py-16 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-white/30 mx-4 mt-2">
//         {/* Status */}
//         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 border border-green-400/50">
//           <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//           Available for new projects
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//           Hi, Im{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Kiran Mushtaque
//           </span>
//         </h1>

//         {/* Typewriter Section */}
//         <div className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-400 min-h-[40px] flex items-center justify-center relative">
//           <div className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-glow"></div>
//           <Typewriter
//             options={{
//               strings: [
//                 "Full-Stack Developer",
//                 "Next.js Specialist",
//                 "TypeScript Expert",
//                 "Open Source Contributor",
//                 "Problem Solver",
//               ],
//               autoStart: true,
//               loop: true,
//               delay: 75,
//               deleteSpeed: 50,
//               cursor: "▌",
//             }}
//             onInit={(typewriter) => {
//               typewriter.pauseFor(1500).start();
//             }}
//           />
//         </div>

//         {/* Intro Text */}
//         <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
//           I craft{" "}
//           <span className="text-blue-400 font-semibold">
//             scalable AI-driven applications
//           </span>{" "}
//           using <span className="text-cyan-400 font-semibold">Next.js</span>,{" "}
//           <span className="text-purple-400 font-semibold">TypeScript</span>, and{" "}
//           <span className="text-green-400 font-semibold">Python Agents</span>.
//           Currently exploring{" "}
//           <span className="text-pink-400 font-semibold">
//             Agentic AI systems
//           </span>{" "}
//           and <span className="text-rose-400 font-semibold">OpenAI API</span>{" "}
//           integration.
//         </p>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-wrap justify-center gap-4">
//           <a
//             href="#projects"
//             className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 border border-blue-500/30 hover:shadow-2xl flex items-center gap-2"
//           >
//             <span>View My Work</span>
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </a>

//           <a
//             href="#about"
//             className="rounded-full border border-slate-600 bg-slate-800/50 px-8 py-4 text-white font-semibold hover:border-slate-400 hover:bg-slate-700/50 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
//           >
//             <span>About Me</span>
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//               />
//             </svg>
//           </a>
//         </div>

//         {/* Expertise Tags */}
//         <div className="mt-10">
//           <p className="text-gray-400 text-sm font-medium mb-4">
//             SPECIALIZING IN
//           </p>
//           <div className="flex flex-wrap justify-center gap-3">
//             {expertiseTags.map((tag, index) => {
//               const isActive = index === activeIndex;
//               return (
//                 <button
//                   key={tag}
//                   type="button"
//                   onMouseEnter={() => setActiveIndex(index)}
//                   onFocus={() => setActiveIndex(index)}
//                   className={`rounded-full border px-4 py-3 text-sm font-semibold transition-all duration-500 transform ${
//                     isActive
//                       ? "border-cyan-400 bg-cyan-900/30 text-cyan-300 shadow-lg shadow-cyan-500/20 scale-105"
//                       : "border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-400 hover:bg-slate-700/50 hover:scale-102"
//                   } backdrop-blur-sm whitespace-nowrap`}
//                   aria-pressed={isActive}
//                 >
//                   {tag}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="mt-12 grid grid-cols-3 gap-6 text-center border-t border-slate-700/50 pt-8">
//           <div>
//             <div className="text-2xl font-bold text-blue-400">2+</div>
//             <div className="text-sm text-gray-400">Years Experience</div>
//           </div>
//           <div>
//             <div className="text-2xl font-bold text-green-400">50+</div>
//             <div className="text-sm text-gray-400">Projects Built</div>
//           </div>
//           <div>
//             <div className="text-2xl font-bold text-purple-400">100%</div>
//             <div className="text-sm text-gray-400">Client Satisfaction</div>
//           </div>
//         </div>
//       </section>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(5deg);
//           }
//         }
//         @keyframes binary-rain {
//           0% {
//             transform: translateY(-100px);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(100vh);
//             opacity: 0;
//           }
//         }
//         @keyframes pulse-slow {
//           0%,
//           100% {
//             opacity: 0.1;
//           }
//           50% {
//             opacity: 0.15;
//           }
//         }
//         @keyframes glow {
//           0%,
//           100% {
//             opacity: 0.3;
//             filter: brightness(1);
//           }
//           50% {
//             opacity: 0.6;
//             filter: brightness(1.3);
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-binary-rain {
//           animation: binary-rain linear infinite;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }
//         .animate-glow {
//           animation: glow 5s ease-in-out infinite;
//         }
//         .hover\\:scale-102:hover {
//           transform: scale(1.02);
//         }
//         .hover\\:shadow-3xl:hover {
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
//         }
//         .Typewriter__cursor {
//           color: #22d3ee;
//           font-weight: bold;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;


"use client";

import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const expertiseTags = [
  "Full-Stack Development",
  "Next.js & TypeScript",
  "Python Backend",
  "Open Source",
  "AI Integration",
] as const;

const gradientMap: Record<(typeof expertiseTags)[number], string> = {
  "Full-Stack Development": "from-slate-900 via-blue-900 to-purple-900",
  "Next.js & TypeScript": "from-blue-900 via-slate-900 to-cyan-900",
  "Python Backend": "from-emerald-900 via-slate-900 to-teal-900",
  "Open Source": "from-violet-900 via-slate-900 to-indigo-900",
  "AI Integration": "from-rose-900 via-slate-900 to-pink-900",
};

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % expertiseTags.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!mounted) return null;

  const gradientClass =
    gradientMap[expertiseTags[activeIndex]] ?? "from-slate-900 to-gray-800";

  return (
    <section
      id="home"
      className={`relative min-h-screen bg-gradient-to-br ${gradientClass} transition-all duration-1000 flex items-center justify-center text-white px-6 overflow-hidden`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Code Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-300 font-mono text-xl animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                fontSize: `${Math.random() * 20 + 16}px`,
              }}
            >
              {["{ }", "< />", "();", "=>", "[]", "``", "${ }", "..."][i % 8]}
            </div>
          ))}
        </div>

        {/* Binary Rain */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-sm animate-binary-rain"
              style={{
                left: `${(i + 1) * 6}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            >
              {Array.from({ length: 20 }, () =>
                Math.random() > 0.5 ? "1" : "0"
              ).join("")}
            </div>
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-600 rounded-full opacity-5 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main Hero Section */}
      <section className="relative max-w-4xl w-full text-center rounded-2xl border border-white/20 bg-slate-900/80 backdrop-blur-xl px-8 py-16 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-white/30 mx-4 mt-2">
        {/* Status */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 border border-green-400/50">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Available for new projects
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Hi, Im{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kiran Mushtaque
          </span>
        </h1>

        {/* Typewriter Section */}
        <div className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-400 min-h-[40px] flex items-center justify-center relative">
          <div className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-glow"></div>
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer",
                "Next.js Specialist",
                "TypeScript Expert",
                "Open Source Contributor",
                "Problem Solver",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              cursor: "▌",
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(1500).start();
            }}
          />
        </div>

        {/* Intro Text */}
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          I craft{" "}
          <span className="text-blue-400 font-semibold">
            scalable AI-driven applications
          </span>{" "}
          using <span className="text-cyan-400 font-semibold">Next.js</span>,{" "}
          <span className="text-purple-400 font-semibold">TypeScript</span>, and{" "}
          <span className="text-green-400 font-semibold">Python Agents</span>.
          Currently exploring{" "}
          <span className="text-pink-400 font-semibold">
            Agentic AI systems
          </span>{" "}
          and <span className="text-rose-400 font-semibold">OpenAI API</span>{" "}
          integration.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 border border-blue-500/30 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
          >
            <span>View My Work</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="rounded-full border border-slate-600 bg-slate-800/50 px-8 py-4 text-white font-semibold hover:border-slate-400 hover:bg-slate-700/50 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 cursor-pointer"
          >
            <span>About Me</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>

        {/* Expertise Tags */}
        <div className="mt-10">
          <p className="text-gray-400 text-sm font-medium mb-4">
            SPECIALIZING IN
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseTags.map((tag, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tag}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`rounded-full border px-4 py-3 text-sm font-semibold transition-all duration-500 transform ${
                    isActive
                      ? "border-cyan-400 bg-cyan-900/30 text-cyan-300 shadow-lg shadow-cyan-500/20 scale-105"
                      : "border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-400 hover:bg-slate-700/50 hover:scale-102"
                  } backdrop-blur-sm whitespace-nowrap cursor-pointer`}
                  aria-pressed={isActive}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center border-t border-slate-700/50 pt-8">
          <div>
            <div className="text-2xl font-bold text-blue-400">2+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">50+</div>
            <div className="text-sm text-gray-400">Projects Built</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">100%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes binary-rain {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.15;
          }
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.3;
            filter: brightness(1);
          }
          50% {
            opacity: 0.6;
            filter: brightness(1.3);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-binary-rain {
          animation: binary-rain linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 5s ease-in-out infinite;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .Typewriter__cursor {
          color: #22d3ee;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default Hero;