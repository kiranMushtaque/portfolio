






"use client";
import React, { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
  icon: string;
}

const FuturisticSkillsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number }>
  >([]);

  // Create refs for each skill card outside the map
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skills: Skill[] = [
    // Added HTML and CSS skills from the first code to Frontend category
    {
      name: "HTML",
      level: 100,
      category: "Frontend",
      description: "Semantic HTML5, Accessibility, SEO best practices",
      icon: "📄",
    },
    {
      name: "CSS",
      level: 85,
      category: "Frontend",
      description: "Tailwind CSS, Responsive Design, Animations, Flexbox/Grid",
      icon: "🎨",
    },
    {
      name: "React",
      level: 95,
      category: "Frontend",
      description: "Advanced component architecture & state management",
      icon: "⚛️",
    },
    {
      name: "TypeScript",
      level: 90,
      category: "Frontend",
      description: "Type-safe development & advanced patterns",
      icon: "🔷",
    },
    {
      name: "Next.js",
      level: 88,
      category: "Frontend",
      description: "SSR, SSG, and full-stack applications",
      icon: "▲",
    },
    {
      name: "Node.js",
      level: 85,
      category: "Backend",
      description: "Server-side JavaScript & API development",
      icon: "🟢",
    },
    {
      name: "Python",
      level: 82,
      category: "Backend",
      description: "Data processing & backend services",
      icon: "🐍",
    },
    {
      name: "PostgreSQL",
      level: 78,
      category: "Backend",
      description: "Database design & optimization",
      icon: "🐘",
    },

    {
      name: "LangChain",
      level: 80,
      category: "AI/ML",
      description: "LLM integration & AI pipelines",
      icon: "🔗",
    },
    {
      name: "OpenAI API",
      level: 85,
      category: "AI/ML",
      description: "GPT integration & prompt engineering",
      icon: "🤖",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "from-cyan-400 via-blue-500 to-indigo-600";
      case "Backend":
        return "from-purple-400 via-pink-500 to-rose-600";
      case "AI/ML":
        return "from-green-400 via-emerald-500 to-teal-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const getCategoryNeonColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "#00ffff";
      case "Backend":
        return "#ff00ff";
      case "AI/ML":
        return "#00ff00";
      default:
        return "#ffffff";
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-cyan-500 rounded-full opacity-30 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${20 + (particle.id % 10)}s infinite ease-in-out`,
            animationDelay: `${particle.id * 0.1}s`,
          }}
        />
      ))}

      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          style={{
            animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          style={{
            animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            animationDelay: "4s",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          style={{ animation: "float 15s infinite ease-in-out" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          style={{
            animation: "float 20s infinite ease-in-out",
            animationDelay: "5s",
          }}
        ></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(255, 0, 255, 0.05) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.05) 2px, transparent 2px)
          `,
            backgroundSize: "50px 50px, 50px 50px, 100px 100px, 100px 100px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 text-xs opacity-20 font-mono"
            style={{
              left: `${i * 5}%`,
              animation: `matrixRain ${
                10 + Math.random() * 10
              }s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
            ))}
          </div>
        ))}
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 container mx-auto px-4 py-20"
      >
        {/* Animated Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur-2xl opacity-30 animate-pulse"></div>
            <h2
              className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{
                animation: "glow 2s ease-in-out infinite alternate",
                textShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
              }}
            >
              SKILLS MATRIX
            </h2>
            <div
              className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              style={{ animation: "scan 3s linear infinite" }}
            ></div>
          </div>
          <p
            className="text-gray-400 mt-6 text-lg tracking-wider uppercase"
            style={{ animation: "fadeIn 1s ease-out 0.5s both" }}
          >
            Neural Network of Expertise
          </p>
          <div className="flex flex-wrap justify-center mt-4 space-x-2 gap-y-2">
            {[
              { name: "Frontend", color: "cyan" },
              { name: "Backend", color: "purple" },
              { name: "AI/ML", color: "green" },
            ].map((cat, i) => (
              <div
                key={cat.name}
                className="flex items-center space-x-2"
                style={{
                  animation: `slideIn 0.5s ease-out ${0.7 + i * 0.1}s both`,
                }}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-${cat.color}-500`}
                ></div>
                <span className="text-gray-500 text-sm">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="relative group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${
                        index * 0.1
                      }s both`
                    : "none",
                  transform: isHovered
                    ? `translateY(-15px) rotateX(10deg) rotateY(${
                        (mousePosition.x - window.innerWidth / 2) / 50
                      }deg) scale(1.05)`
                    : "translateY(0) rotateX(0) rotateY(0) scale(1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Outer glow ring */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${getCategoryColor(
                    skill.category
                  )} rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700`}
                  style={{
                    animation: isHovered
                      ? "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                      : "none",
                  }}
                ></div>

                {/* Card glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${getCategoryColor(
                    skill.category
                  )} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`}
                ></div>

                {/* Main card */}
                <div
                  className="relative bg-black/90 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: isHovered
                      ? `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 60px ${getCategoryNeonColor(
                          skill.category
                        )}40`
                      : "0 10px 30px rgba(0, 0, 0, 0.3)",
                    borderColor: isHovered
                      ? getCategoryNeonColor(skill.category) + "60"
                      : "",
                  }}
                >
                  {/* Animated border gradient */}
                  <div
                    className="absolute inset-0 rounded-2xl p-px"
                    style={{
                      background: isHovered
                        ? `linear-gradient(45deg, ${getCategoryNeonColor(
                            skill.category
                          )}, transparent, ${getCategoryNeonColor(
                            skill.category
                          )})`
                        : "transparent",
                      animation: isHovered
                        ? "borderRotate 3s linear infinite"
                        : "none",
                    }}
                  >
                    <div className="h-full w-full bg-black/90 rounded-2xl"></div>
                  </div>

                  {/* Holographic overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `linear-gradient(105deg, transparent 40%, ${getCategoryNeonColor(
                        skill.category
                      )}20 50%, transparent 60%)`,
                      animation: isHovered ? "shimmer 2s infinite" : "none",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative p-6 z-10">
                    {/* Category badge with animation */}
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(
                          skill.category
                        )} text-white shadow-lg relative overflow-hidden`}
                      >
                        <span className="relative z-10">{skill.category}</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </span>
                      <span
                        className="text-3xl filter drop-shadow-lg"
                        style={{
                          animation: isHovered ? "bounce 1s infinite" : "none",
                          filter: isHovered
                            ? `drop-shadow(0 0 10px ${getCategoryNeonColor(
                                skill.category
                              )})`
                            : "",
                        }}
                      >
                        {skill.icon}
                      </span>
                    </div>

                    {/* Skill name with glow */}
                    <h3
                      className="text-2xl font-bold text-white mb-2 tracking-wide transition-all duration-300"
                      style={{
                        textShadow: isHovered
                          ? `0 0 20px ${getCategoryNeonColor(skill.category)}`
                          : "none",
                      }}
                    >
                      {skill.name}
                    </h3>

                    {/* Progress section */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">
                          Proficiency
                        </span>
                        <span
                          className={`text-lg font-bold bg-gradient-to-r ${getCategoryColor(
                            skill.category
                          )} bg-clip-text text-transparent`}
                          style={{
                            filter: isHovered
                              ? `drop-shadow(0 0 8px ${getCategoryNeonColor(
                                  skill.category
                                )})`
                              : "none",
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar container */}
                      <div className="relative h-4 bg-gray-900 rounded-full overflow-hidden">
                        {/* Animated background pattern */}
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${getCategoryNeonColor(
                              skill.category
                            )}20 10px, ${getCategoryNeonColor(
                              skill.category
                            )}20 20px)`,
                            animation: "slidePattern 2s linear infinite",
                          }}
                        ></div>

                        {/* Progress bar with multiple layers */}
                        <div
                          className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out overflow-hidden"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            background: `linear-gradient(90deg, ${getCategoryNeonColor(
                              skill.category
                            )}80, ${getCategoryNeonColor(skill.category)})`,
                            boxShadow: `0 0 20px ${getCategoryNeonColor(
                              skill.category
                            )}60`,
                            transitionDelay: `${index * 0.1}s`,
                          }}
                        >
                          {/* Inner glow animation */}
                          <div
                            className="absolute inset-0 bg-white/20"
                            style={{
                              animation: "shimmerBar 2s linear infinite",
                            }}
                          ></div>

                          {/* Pulse effect at the edge */}
                          <div
                            className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-md"
                            style={{
                              animation: "pulseFade 1.5s ease-in-out infinite",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Description with fade animation */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p
                        className="text-gray-400 text-sm leading-relaxed"
                        style={{
                          animation: isHovered
                            ? "fadeInUp 0.5s ease-out"
                            : "none",
                        }}
                      >
                        {skill.description}
                      </p>
                    </div>

                    {/* Animated corner accents */}
                    <div
                      className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg opacity-50 transition-all duration-300"
                      style={{
                        borderColor: isHovered
                          ? getCategoryNeonColor(skill.category)
                          : "rgb(6, 182, 212)",
                        transform: isHovered ? "scale(1.2)" : "scale(1)",
                        filter: isHovered
                          ? `drop-shadow(0 0 5px ${getCategoryNeonColor(
                              skill.category
                            )})`
                          : "none",
                      }}
                    ></div>
                    <div
                      className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg opacity-50 transition-all duration-300"
                      style={{
                        borderColor: isHovered
                          ? getCategoryNeonColor(skill.category)
                          : "rgb(6, 182, 212)",
                        transform: isHovered ? "scale(1.2)" : "scale(1)",
                        filter: isHovered
                          ? `drop-shadow(0 0 5px ${getCategoryNeonColor(
                              skill.category
                            )})`
                          : "none",
                      }}
                    ></div>
                    <div
                      className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg opacity-50 transition-all duration-300"
                      style={{
                        borderColor: isHovered
                          ? getCategoryNeonColor(skill.category)
                          : "rgb(6, 182, 212)",
                        transform: isHovered ? "scale(1.2)" : "scale(1)",
                        filter: isHovered
                          ? `drop-shadow(0 0 5px ${getCategoryNeonColor(
                              skill.category
                            )})`
                          : "none",
                      }}
                    ></div>
                    <div
                      className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg opacity-50 transition-all duration-300"
                      style={{
                        borderColor: isHovered
                          ? getCategoryNeonColor(skill.category)
                          : "rgb(6, 182, 212)",
                        transform: isHovered ? "scale(1.2)" : "scale(1)",
                        filter: isHovered
                          ? `drop-shadow(0 0 5px ${getCategoryNeonColor(
                              skill.category
                            )})`
                          : "none",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration with animation */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="flex space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  style={{
                    animation: `pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                ></div>
              ))}
            </div>
            <span
              className="text-blue-400 text-sm uppercase tracking-wider"
              style={{ animation: "fadeIn 2s ease-out" }}
            >
              Continuously Learning & Improving
            </span>
            <div className="flex space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{
                    animation: `pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                    animationDelay: `${(4 - i) * 0.2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(20px);
          }
        }

        @keyframes glow {
          from {
            filter: brightness(1);
          }
          to {
            filter: brightness(1.2);
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes shimmerBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulseFade {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes borderRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes slidePattern {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(20px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes matrixRain {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default FuturisticSkillsSection;