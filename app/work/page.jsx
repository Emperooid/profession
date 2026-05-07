"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FiArrowUpRight, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

/* ─── DATA ──────────────────────────────────────────────────────── */
// Replace `image: null` with the real path (e.g. "/projects/biasless.png") once you have screenshots.

const projects = [
  {
    num: "01",
    category: "AI · Full-Stack",
    title: "Biasless",
    description:
      "AI journalism bias detector built at the CJID Hackathon. Detects biased language with ~75% accuracy using ML sentiment pipelines, helping media outlets cut misinformation and boost reporting credibility by 20–30%.",
    stack: ["React", "Python", "NLP/ML", "Node.js"],
    image: null,
    github: "https://github.com/Emperooid",
    live: "#",
    from: "#4c1d95",
    to: "#1e1b4b",
    accent: "#8b5cf6",
  },
  {
    num: "02",
    category: "AI · EdTech",
    title: "Gradlink AI",
    description:
      "Graduate job-placement system with AI recommendation algorithms. Boosted match rates ~40%, placed 2nd at the EdTech Hackathon. Tested by 80+ students with an average 45% improvement in placement outcomes.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "ML"],
    image: null,
    github: "https://github.com/Emperooid",
    live: "#",
    from: "#0c4a6e",
    to: "#0a0a1a",
    accent: "#0ea5e9",
  },
  {
    num: "03",
    category: "HealthTech · Full-Stack",
    title: "NitHub Health Platform",
    description:
      "Virtual health scheduling platform bridging patients and doctors in underserved communities. Role-based dashboards for Admins, Doctors, and Patients with real-time appointment management.",
    stack: ["React", "Vite", "TypeScript", "Axios"],
    image: null,
    github: "#",
    live: "#",
    from: "#064e3b",
    to: "#0a0a14",
    accent: "#10b981",
  },
  {
    num: "04",
    category: "Frontend · Non-Profit",
    title: "Bunmi Adedayo Foundation",
    description:
      "Modern redesign of the Foundation's website. Achieved a 60% increase in web traffic and 35% rise in online engagement within six months. Introduced TDD, cutting downtime by 40%.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
    image: null,
    github: "#",
    live: "#",
    from: "#78350f",
    to: "#0a0a0a",
    accent: "#f59e0b",
  },
  {
    num: "05",
    category: "Logistics · Full-Stack",
    title: "Rottank Logistics Dashboard",
    description:
      "Inventory management and real-time shipment tracking for Rottank Storage & Logistics (Amsterdam). Integrated live dashboards and data-viz tools — improved logistics visibility and decision speed by ~35%.",
    stack: ["React", "Node.js", "REST APIs", "Charts"],
    image: null,
    github: "#",
    live: "#",
    from: "#1e293b",
    to: "#0a0a0a",
    accent: "#94a3b8",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const Work = () => {
  const [active, setActive] = useState(0);
  const p = projects[active];

  const prev = () => setActive(i => (i - 1 + projects.length) % projects.length);
  const next = () => setActive(i => (i + 1) % projects.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      className="min-h-[80vh] flex flex-col justify-center py-16 xl:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page heading */}
        <div className="mb-10 xl:mb-14">
          <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Portfolio</span>
          <h1
            className="font-black leading-[0.9] tracking-tight mt-2 text-white"
            style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}
          >
            My Work
          </h1>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start">

          {/* ── LEFT: project info ── */}
          <div className="w-full xl:w-[45%] flex flex-col gap-6 xl:sticky xl:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-5"
              >
                {/* Number */}
                <span
                  className="font-black leading-none tracking-tighter select-none"
                  style={{ fontSize: 'clamp(60px, 8vw, 100px)', color: `${p.accent}18` }}
                >
                  {p.num}
                </span>

                {/* Category + title */}
                <div className="flex flex-col gap-1 -mt-4">
                  <span className="text-xs uppercase tracking-widest font-medium" style={{ color: p.accent }}>
                    {p.category}
                  </span>
                  <h2
                    className="font-bold text-white leading-tight"
                    style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}
                  >
                    {p.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed max-w-lg">{p.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border"
                      style={{ color: p.accent, borderColor: `${p.accent}25` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-1">
                  {p.live !== "#" ? (
                    <Link
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/70 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-300"
                    >
                      Live site <FiArrowUpRight />
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/20 border border-white/5 cursor-not-allowed">
                      Coming soon <FiArrowUpRight />
                    </span>
                  )}

                  {p.github !== "#" ? (
                    <Link
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/70 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-300"
                    >
                      GitHub <FiGithub />
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/20 border border-white/5 cursor-not-allowed">
                      Private <FiGithub />
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-accent hover:text-accent transition-all duration-300"
              >
                <FiChevronLeft />
              </button>
              <span className="text-white/30 text-xs font-medium tabular-nums">
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <button
                onClick={next}
                aria-label="Next project"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-accent hover:text-accent transition-all duration-300"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* ── RIGHT: project cards list ── */}
          <div className="w-full xl:w-[55%] flex flex-col gap-3">
            {projects.map((proj, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`group w-full text-left rounded-2xl p-5 transition-all duration-400 border ${
                  active === i
                    ? "border-white/10 bg-white/4 scale-[1.01]"
                    : "border-white/4 hover:border-white/8 hover:bg-white/2"
                }`}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Color swatch */}
                    <div
                      className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-xs font-black opacity-80"
                      style={{
                        background: `linear-gradient(135deg, ${proj.from}, ${proj.to})`,
                        color: proj.accent,
                      }}
                    >
                      {proj.num}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: proj.accent + "99" }}>
                        {proj.category}
                      </p>
                      <h3 className="text-sm font-semibold text-white truncate">{proj.title}</h3>
                    </div>
                  </div>
                  <FiArrowUpRight
                    className={`shrink-0 transition-all duration-300 ${
                      active === i ? "text-accent rotate-0" : "text-white/20 -rotate-45"
                    }`}
                  />
                </div>

                {/* Expanded preview */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Project image / gradient placeholder */}
                      <div
                        className="mt-4 rounded-xl overflow-hidden relative h-44"
                        style={{
                          background: `linear-gradient(135deg, ${proj.from} 0%, ${proj.to} 100%)`,
                        }}
                      >
                        {proj.image ? (
                          <Image src={proj.image} fill className="object-cover" alt={proj.title} />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                            <span className="text-5xl font-black opacity-8 leading-none">{proj.num}</span>
                            <span className="text-xs uppercase tracking-widest opacity-25">
                              Add screenshot → public/projects/{proj.title.toLowerCase().replace(/\s+/g, "-")}.png
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
