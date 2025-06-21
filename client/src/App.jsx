import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaNodeJs,
  FaServer,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiNextdotjs } from "react-icons/si";

import TechBidAI_Home from "./assets/TechBidAI-Home.png";
import Bookstore_Home from "./assets/Bookstore-Home.png";
import IslamicBooks_Home from "./assets/IslamicBooks-Home.png";

// Projects
const projects = [
  {
    title: "TechBid AI",
    desc: "Construction Estimator with AI suggestions and user-learned pricing.",
    img: TechBidAI_Home,
    link: "https://tech-bid-ai.vercel.app",
  },
  {
    title: "IslamicBooks",
    desc: "E-Books Store for Classical Islamic Books and More!",
    img: IslamicBooks_Home,
    link: "https://islamic-books.vercel.app",
  },
  {
    title: "BookStore",
    desc: "Modern bookstore full CRUD API & DataBase",
    img: Bookstore_Home,
    link: "https://book-store-ashen-delta.vercel.app",
  },
];

// Work Experience
const workExperience = [
  {
    role: "Content Editor",
    period: "2016 – 2018",
    description: "Edited, proofread, and managed content ensuring consistency and accuracy.",
  },
  {
    role: "Writing and Research",
    period: "2018 – 2022",
    description: "Deep researcher of Subjects, Ideologies, Literature, Writing and Communication, Religion etc.",
  },
  {
    role: "Junior Engineer",
    period: "2022 – 2023",
    description: "Worked on real engineering problems, analyses, Design and project support.",
  },
  {
    role: "Project Engineer",
    period: "2023 – 2025",
    description: "Led and coordinated Major engineering projects through all lifecycle stages.",
  },
  {
    role: "Freelance Services",
    period: "Since 2024",
    description: "Providing web, UI/UX, and consulting solutions for diverse clients worldwide.",
  },
  {
    role: "Full Stack Developer",
    period: "2025 - Present",
    description: "Building and maintaining end-to-end web applications using modern front-end and back-end technologies, ensuring scalable architecture, seamless user experiences, and efficient data management.",
  },
];

// Glitter Component
function Glitter() {
  return (
    <span
      className="absolute w-1.5 h-1.5 bg-white opacity-80 rounded-full animate-float-up"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${4 + Math.random() * 4}s`,
      }}
    />
  );
}

// Service list
const services = [
  { title: "Full-Stack Web Development", icon: <FaServer className="text-blue-400 text-xl sm:text-3xl" /> },
  { title: "API Development & Integration", icon: <FaServer className="text-blue-400 text-xl sm:text-3xl" /> },
  { title: "Database Design & Optimization", icon: <FaServer className="text-blue-400 text-xl sm:text-3xl" /> },
  { title: "Cloud Deployment (AWS, Azure)", icon: <FaAws className="text-blue-400 text-xl sm:text-3xl" /> },
  { title: "CI/CD & DevOps Automation", icon: <FaDocker className="text-blue-400 text-xl sm:text-3xl" /> },
  { title: "UI/UX Design & Prototyping", icon: <FaReact className="text-blue-400 text-xl sm:text-3xl" /> },
  { title: "Bug Fixing & Optimization", icon: <FaServer className="text-blue-400 text-xl sm:text-3xl" /> },
  { title: "SEO Optimization & Performance", icon: <FaServer className="text-blue-400 text-xl sm:text-3xl" /> },
  { title: "Mobile-First Development", icon: <FaServer className="text-blue-400 text-xl sm:text-3xl" /> },
];

// Skills
const skills = [
  { label: "React", icon: <FaReact className="text-blue-400 text-xl sm:text-2xl" /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-xl sm:text-2xl" /> },
  { label: "JavaScript (ES6+)", icon: <SiJavascript className="text-blue-400 text-xl sm:text-2xl" /> },
  { label: "Node.js", icon: <FaNodeJs className="text-blue-400 text-xl sm:text-2xl" /> },
  { label: "MongoDB", icon: <SiMongodb className="text-blue-400 text-xl sm:text-2xl" /> },
  { label: "Docker", icon: <FaDocker className="text-blue-400 text-xl sm:text-2xl" /> },
  { label: "Next.js", icon: <SiNextdotjs className="text-blue-400 text-xl sm:text-2xl" /> },
  { label: "AWS Cloud", icon: <FaAws className="text-blue-400 text-xl sm:text-2xl" /> },
];

export default function App() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll({ target: heroRef });
  const blurAmount = useTransform(scrollY, [0, 200], [0, 10]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
    <div className="min-h-screen text-white font-sans bg-gradient-to-b from-[#0c0f1a] to-[#141830] relative overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm border-b border-blue-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div onClick={() => scrollTo(0, 0)} className="flex items-center text-xl font-bold text-blue-400 cursor-pointer">
            <img className="w-10" src="/SA Logo rm.png" alt="Logo" />
            Sharukh-Ahmed
          </div>
          <button className="md:hidden block text-white text-2xl p-2 rounded-full hover:bg-blue-900/40" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <motion.div
            className={`absolute top-14 left-0 w-full to-[#141830] md:bg-transparent md:static md:w-auto flex-col md:flex md:flex-row gap-4 p-4 md:p-0 shadow-lg md:shadow-none border-t border-blue-800 md:border-none transition-all ${menuOpen ? "flex" : "hidden"
              }`}
          >
            {["Home", "About", "Experience", "Projects", "Services", "Skills", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 hover:text-blue-300 rounded-md hover:bg-blue-900/40 transition"
              >
                {section}
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} id="home" className="relative flex flex-col items-center justify-center h-screen px-4 text-center overflow-hidden pt-20 bg-gradient-to-b from-[#0c0f1a] to-[#141830]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">{Array.from({ length: 50 }).map((_, i) => <Glitter key={i} />)}</div>
        <motion.div className="absolute inset-0 z-0" style={{ filter: blurAmount, background: "radial-gradient(circle at 50% 50%, rgba(17,38,70,0.9) 0%, rgba(12,15,26,1) 70%)" }} />
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="relative z-10 text-2xl sm:text-4xl md:text-6xl font-bold text-blue-400 flex flex-wrap justify-center drop-shadow-lg">
          {"Hi, I'm Sharukh Ahmed".split("").map((char, index) => (
            <motion.span key={index} whileHover={{ y: -10, scale: 1.2, color: "#60a5fa" }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300 }} className="inline-block cursor-pointer mx-0.5">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="relative z-10 mt-4 text-base sm:text-xl md:text-2xl max-w-xl text-white">
          Frontend Developer crafting interactive UIs & delightful web experiences.
        </motion.p>
      </section>

      {/* About */}
      <section id="about" className="px-4 sm:px-6 py-20 text-center bg-gradient-to-b from-[#141830] to-[#0c0f1a]">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-3xl md:text-4xl font-bold text-blue-400">About Me</motion.h2>
        <div className="relative max-w-2xl mx-auto mt-4 text-lg text-gray-200 leading-relaxed">
          <motion.div className={`overflow-hidden transition-all duration-500 ease-in-out ${aboutExpanded ? "max-h-[1000px]" : "max-h-32"}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
            <p>
              I'm Sharukh Ahmed, a passionate and self-taught frontend developer with a strong focus on creating intuitive,
              user-friendly, and responsive web applications. My journey into web development began with a curiosity for design
              and evolved into a commitment to crafting pixel-perfect interfaces using modern technologies like React.js,
              Tailwind CSS, and Framer Motion.
            </p>
            <p className="mt-4">With a background in engineering and project management, I bring a unique blend of problem-solving, attention to detail, and structured thinking to every project.</p>
            <p className="mt-4">I’m comfortable working across the full frontend stack — translating designs into interactive interfaces and utilizing REST APIs. My work is driven by the belief that great software is built at the intersection of design, technology, and empathy for the end user.</p>
            <p className="mt-4">When I’m not coding, I love exploring new tools and frameworks, learning about accessibility best practices, and continuously improving my craft. I’m currently looking for opportunities where I can contribute to a dynamic team and grow as a developer.</p>
            {!aboutExpanded && <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0c0f1a] to-transparent pointer-events-none" />}
          </motion.div>
          <button onClick={() => setAboutExpanded(!aboutExpanded)} className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-400 rounded-full text-white transition">
            {aboutExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-20 bg-gradient-to-b from-[#0c0f1a] to-[#141830] text-white overflow-hidden relative">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-400 mb-8">Chapters of My Career</h2>
        <motion.div className="flex space-x-8" animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }}>
          {[...workExperience, ...workExperience].map((job, idx) => (
            <div key={idx} className="min-w-[280px] max-w-xs bg-[#101325]/80 p-4 rounded-xl border border-blue-500 shadow-lg flex-shrink-0 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-blue-300">{job.role}</h3>
              <p className="text-sm text-blue-400 mb-1">{job.period}</p>
              <p className="text-sm text-gray-200 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </motion.div>
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0c0f1a] pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#141830] pointer-events-none" />
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 sm:px-6 py-16 bg-gradient-to-b from-[#0c0f1a] to-[#141830] text-white">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10">
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <motion.div key={idx} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl bg-[#101325]/80 border border-blue-800" whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }} whileTap={{ scale: 0.98 }} onClick={() => window.open(proj.link, "_blank")}>
              <img src={proj.img} alt={proj.title} className="w-full h-48 sm:h-64 object-cover group-hover:blur transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">{proj.title}</h3>
                <p className="text-xs sm:text-sm mb-4 text-gray-200">{proj.desc}</p>
                <button className="bg-blue-600 hover:bg-blue-500 px-4 sm:px-5 py-2 rounded-full shadow-lg">Visit Project</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-4 sm:px-6 py-20 bg-gradient-to-b from-[#141830] to-[#0c0f1a] text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">Services</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-[#101325]/80 p-4 sm:p-6 rounded-xl flex flex-col items-center text-center border border-blue-500 hover:scale-105 transition-transform">
              {service.icon}
              <span className="mt-2 text-blue-200 text-base sm:text-lg font-medium">{service.title}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-4 sm:px-6 py-20 bg-gradient-to-b from-[#0c0f1a] to-[#141830] text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-3xl md:text-4xl font-bold text-blue-400">Skills</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center gap-2 bg-[#101325]/80 p-4 rounded-xl border border-blue-500 hover:scale-105 transition">
              {skill.icon}
              <span className="text-gray-200">{skill.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-b from-[#141830] to-[#0c0f1a] px-4 sm:px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-blue-300"
        >
          Contact Me
        </motion.h2>
        <div className="mt-8 flex flex-col items-center space-y-6 text-xl text-blue-200">
          {/* GitHub */}
          <a
            href="https://github.com/Sharukh-Ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sharukh-ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex items-center gap-2"
          >
            <FaServer /> LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:sharukhahmed0706@gmail.com"
            className="hover:text-blue-400 flex items-center gap-2"
          >
            <FaEnvelope /> sharukhahmed0706@gmail.com
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/113g-gDKkezFVdKBwRUDzIB1ova5AobvV/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex items-center gap-2"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </section>

    </div>
  );
}
