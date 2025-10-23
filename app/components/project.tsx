"use client"
import { useState, useMemo, FC, ReactElement } from "react";
import Image from "next/image";
import {
  Code,
  Gamepad2,
  Briefcase,
  BarChart,

  Bot,
  ShieldCheck,
  BookOpen,
  Atom,
  Wrench,
  Link as LinkIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";

// --- TYPES AND DATA ---
interface ProjectType {
  title: string;
  description: string;
  link: string;
  category: string;
  tech: string[];
  image: string;
}

const projects: ProjectType[] = [
  {
    title: "Food Truck Website",
    description:
      "Sleek, modern, and responsive food truck site with interactive features.",
    link: "https://hackathon-day-3-4e59.vercel.app/",
    category: "Web Development",
    tech: ["React", "Next.js"],
    image: "/images/food-truck.png",
  },
  {
    title: "Asia Water Website",
    description:
      "Professional corporate website with modern UI/UX and optimized performance.",
    link: "https://www.asiapremiumwater.com/",
    category: "Corporate",
    tech: ["HTML", "CSS"],
    image: "/images/asia-water.png",
  },
  {
    title: "Calculator",
    description:
      "Awesome calculator with advanced mathematical operations and sleek interface.",
    link: "https://quick-calc-gold.vercel.app/",
    category: "Utility",
    tech: ["JavaScript"],
    image: "/images/calculator.png",
  },
  {
    title: "Currency Convertor",
    description:
      "Real-time currency converter with live exchange rates and intuitive design.",
    link: "https://currency-convertor-two-zeta.vercel.app/",
    category: "Finance",
    tech: ["React", "API"],
    image: "/images/currency-converter.png",
  },
  {
    title: "Word Counter",
    description:
      "Functional word counter with character analysis and text statistics.",
    link: "https://word-counter-one-delta.vercel.app/",
    category: "Utility",
    tech: ["JavaScript"],
    image: "/images/word-counter.png",
  },
  {
    title: "Number Guessing Game",
    description:
      "Interactive number guessing game with scoring system and difficulty levels.",
    link: "https://number-gussing-game-eight.vercel.app/",
    category: "Game",
    tech: ["JavaScript"],
    image: "/images/number-gussing-game.png",
  },
  {
    title: "Todo App",
    description:
      "Feature-rich todo application with drag-drop and local storage support.",
    link: "https://colorful-todo-list.vercel.app/",
    category: "Productivity",
    tech: ["React"],
    image: "/images/todo.png",
  },
  {
    title: "Quiz App",
    description:
      "Interactive quiz application with multiple categories and scoring system.",
    link: "https://quick-calc-gold.vercel.app/",
    category: "Education",
    tech: ["JavaScript"],
    image: "/images/quiz.png",
  },
  {
    title: "ATM Project",
    description:
      "Realistic ATM interface simulation with transaction handling and logic.",
    link: "https://quick-calc-gold.vercel.app/",
    category: "Simulation",
    tech: ["TypeScript"],
    image: "/images/atm.png",
  },
  {
    title: "Donation App",
    description:
      "User-friendly donation platform with secure payment integration.",
    link: "https://donation-app-bay.vercel.app/",
    category: "Social",
    tech: ["React", "API"],
    image: "/images/donation.png",
  },
  {
    title: "Dictionary App",
    description:
      "Comprehensive dictionary app with pronunciation and examples.",
    link: "https://dictionaryapp-93ewwj6h2ysrmsdpaobq5d.streamlit.app/",
    category: "Education",
    tech: ["Python", "API"],
    image: "/images/dictionary.png",
  },
  {
    title: "Spin the Wheel App",
    description:
      "Fun and interactive spin the wheel game with customizable options.",
    link: "https://spinthewheelgame-app-nycmv3qr7b23edguwmvbtp.streamlit.app/",
    category: "Game",
    tech: ["Python"],
    image: "/images/spin-wheel.png",
  },
  {
    title: "Password Strength Meter",
    description: "Advanced password security analyzer with real-time feedback.",
    link: "https://passwordmeterpy-git-sdvscvvxg6xog5gisbtvtb.streamlit.app/",
    category: "Security",
    tech: ["Python"],
    image: "/images/password-meter.png",
  },
];

const categoryIcons: { [key: string]: ReactElement } = {
  "Web Development": <Code />,
  Corporate: <Briefcase />,
  Utility: <Wrench />,
  Finance: <BarChart />,
  Game: <Gamepad2 />,
  Productivity: <Atom />,
  Education: <BookOpen />,
  Simulation: <Bot />,

  Security: <ShieldCheck />,
};

// --- HELPER COMPONENTS ---
const Background = () => (
  <div className="absolute inset-0 -z-20 h-full w-full bg-black overflow-hidden">
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_50%_200px,#1e293b,black)] opacity-50" />
    <div id="stars1" className="absolute inset-0 z-10"></div>
    <div id="stars2" className="absolute inset-0 z-10"></div>
    <div id="stars3" className="absolute inset-0 z-10"></div>
  </div>
);

const ProjectCard: FC<{
  project: ProjectType;
  offset: number;
  onCardClick: () => void;
}> = ({ project, offset, onCardClick }) => {
  const CategoryIcon = categoryIcons[project.category] || <Atom />;
  const isActive = offset === 0;

  const direction = Math.sign(offset);
  const absOffset = Math.abs(offset);

  const transform = `
    rotateY(${direction * -35}deg)
    translateX(${direction * 40}%)
    translateZ(${-absOffset * 15}rem)
    scale(${1 - absOffset * 0.15})
  `;

  return (
    <div
      onClick={onCardClick}
      className={`absolute w-96 h-[28rem] transition-transform duration-500 ease-out transform-style-3d origin-center ${
        isActive ? "cursor-default" : "cursor-pointer"
      }`}
      style={{ transform: isActive ? "" : transform, zIndex: 10 - absOffset }}
    >
      <div
        className={`relative w-full h-full rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700 transition-all duration-500 ${
          isActive
            ? "opacity-100 border-cyan-400/50 shadow-2xl shadow-cyan-500/10"
            : "opacity-50 hover:opacity-80"
        }`}
      >
        <div
          className={`absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 transition-opacity duration-500 ${
            isActive ? "opacity-50 animate-pulse-slow" : "opacity-0"
          }`}
        />
        <div className="relative z-10 flex flex-col h-full p-6">
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-slate-700">
            {/* NOTE: For these images to work, place them in the `public/images/` directory of your Next.js project */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent" />
          </div>
          <h3 className="text-2xl font-bold text-slate-100 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 mt-1 mb-3 text-sm text-cyan-400">
            {React.cloneElement(CategoryIcon, { className: "w-4 h-4" })}{" "}
            {project.category}
          </div>
          <p className="text-sm leading-relaxed flex-grow text-slate-400 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full transition-all duration-300 ${
              isActive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 font-semibold text-black transition-all duration-300 rounded-lg bg-cyan-400 hover:bg-white shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <LinkIcon className="w-4 h-4" /> View Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const ProjectHoloDeckPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filteredProjects = useMemo(() => {
    setActiveIndex(0);
    return selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev > 0 ? prev - 1 : filteredProjects.length - 1
    );
  const handleNext = () =>
    setActiveIndex((prev) =>
      prev < filteredProjects.length - 1 ? prev + 1 : 0
    );

  return (
    <>
      <div className="min-h-screen w-full font-sans text-white bg-black overflow-hidden flex flex-col">
        <Background />
        <div className="relative z-10 flex flex-col items-center w-full p-4 sm:p-8">
          <header className="text-center my-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-text-focus-in bg-gradient-to-br from-white to-cyan-400 bg-clip-text text-transparent">
              Project HoloDeck
            </h1>
            <p className="mt-2 text-slate-400 animate-text-focus-in animation-delay-300">
              Explore my interactive portfolio and web projects
            </p>
          </header>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((category, i) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 border transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                    : "bg-slate-900/50 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white"
                }`}
                style={{
                  animation: `fade-in 0.5s ${i * 0.05}s ease-out forwards`,
                  opacity: 0,
                }}
              >
                {categoryIcons[category] &&
                  React.cloneElement(categoryIcons[category], {
                    className: "w-4 h-4",
                  })}{" "}
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex-grow w-full flex flex-col items-center justify-center perspective-1200 -mt-12">
          <div className="relative w-96 h-[28rem] transform-style-3d">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${selectedCategory}-${project.title}`}
                project={project}
                offset={index - activeIndex}
                onCardClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {filteredProjects.length > 1 && (
            <div className="relative z-20 flex items-center gap-8 mt-12">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-slate-900/50 border border-slate-700 text-cyan-400 hover:bg-slate-800 hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="text-slate-400 text-sm">
                {activeIndex + 1} / {filteredProjects.length}
              </div>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-slate-900/50 border border-slate-700 text-cyan-400 hover:bg-slate-800 hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1200 {
          perspective: 1200px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }

        @keyframes text-focus-in {
          0% {
            filter: blur(12px);
            opacity: 0;
          }
          100% {
            filter: blur(0px);
            opacity: 1;
          }
        }
        .animate-text-focus-in {
          animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Starfield Background Layers */
        #stars1,
        #stars2,
        #stars3 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-repeat: repeat;
          pointer-events: none;
          z-index: 10;
        }
        #stars1 {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #4dd0e1,
              transparent
            ),
            radial-gradient(2px 2px at 50px 80px, #81d4fa, transparent);
          background-size: 100px 100px;
          animation: starMove 60s linear infinite;
          opacity: 0.3;
        }
        #stars2 {
          background-image: radial-gradient(
              1.5px 1.5px at 40px 60px,
              #26c6da,
              transparent
            ),
            radial-gradient(1.5px 1.5px at 70px 20px, #4dd0e1, transparent);
          background-size: 80px 80px;
          animation: starMove 90s linear infinite reverse;
          opacity: 0.2;
        }
        #stars3 {
          background-image: radial-gradient(
              1px 1px at 10px 10px,
              #00acc1,
              transparent
            ),
            radial-gradient(1px 1px at 60px 40px, #26c6da, transparent);
          background-size: 60px 60px;
          animation: starMove 120s linear infinite;
          opacity: 0.15;
        }

        @keyframes starMove {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 200px 200px, 200px 200px;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectHoloDeckPage;


