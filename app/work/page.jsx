"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { HiPlus, HiMinus } from "react-icons/hi2";

/* ─── DATA ───────────────────────────────────────────────────────── */

const projects = [
  {
    num: "01",
    category: "Mobile · FinTech",
    title: "EasePay Mobile App",
    year: "2026",
    description:
      "A cross-platform mobile payments app built for Easetack — handling transactions, wallet management, and financial flows with a clean, fast UI. Shipped to both iOS and Android from a single React Native codebase.",
    stack: ["React Native", "Expo", "TypeScript", "Node.js"],
    github: "https://github.com/Emperooid/easepayfrontend",
    live: "https://play.google.com/store/apps/details?id=com.easetack.easepay",
    liveLabel: "Play Store",
    accent: "#22c55e",
    from: "#14532d",
    to: "#0a0a0a",
  },
  {
    num: "02",
    category: "Frontend · FinTech",
    title: "EasePay Website",
    year: "2026",
    description:
      "The public-facing web platform for EasePay — a responsive, performant marketing and product site built with Next.js. Covers landing pages, feature breakdowns, and onboarding flows.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Emperooid/easepay-website",
    live: "https://easepay-website.vercel.app",
    liveLabel: "Live site",
    accent: "#34d399",
    from: "#064e3b",
    to: "#0a0a12",
  },
  {
    num: "03",
    category: "AI · Productivity",
    title: "Olive AI",
    year: "2025",
    description:
      "An AI-powered assistant designed to simplify workflows and surface smart insights. Built with a focus on fast responses, clean UX, and practical utility — not just a demo.",
    stack: ["React", "Node.js", "OpenAI API", "TypeScript"],
    github: "https://github.com/Emperooid/olive-ai",
    live: null,
    liveLabel: null,
    accent: "#a3e635",
    from: "#365314",
    to: "#0a0a0a",
  },
  {
    num: "04",
    category: "AI · EdTech",
    title: "Gradlink AI",
    year: "2024",
    description:
      "Graduate job-placement system with AI recommendation algorithms. Boosted match rates ~40%, placed 2nd at the EdTech Hackathon. Tested by 80+ students with an average 45% improvement in placement outcomes.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "ML"],
    github: "https://github.com/Emperooid/gradlink--ai",
    live: "https://gradlink-ai.vercel.app",
    liveLabel: "Live site",
    accent: "#0ea5e9",
    from: "#0c4a6e",
    to: "#0a0a1a",
  },
  {
    num: "05",
    category: "AI · Full-Stack",
    title: "Biasless",
    year: "2024",
    description:
      "AI journalism bias detector built at the CJID Hackathon. Detects biased language with ~75% accuracy using ML sentiment pipelines, helping media outlets cut misinformation and boost reporting credibility by 20–30%.",
    stack: ["React", "Python", "NLP/ML", "Node.js"],
    github: "https://github.com/Emperooid",
    live: null,
    liveLabel: null,
    accent: "#8b5cf6",
    from: "#4c1d95",
    to: "#1e1b4b",
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────── */

const Work = () => {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="min-h-[80vh] py-16 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-16 xl:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">
              Selected Works
            </span>
            <h1
              className="font-black leading-[0.9] tracking-tight mt-2 text-white"
              style={{ fontSize: "clamp(38px, 5vw, 68px)" }}
            >
              My Work
            </h1>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-white/18 text-xs tabular-nums">
              {String(projects.length).padStart(2, "0")} projects
            </span>
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 text-white/35 text-xs uppercase tracking-widest hover:text-accent transition-colors duration-300"
            >
              Hire me <FiArrowUpRight />
            </Link>
          </div>
        </motion.div>

        {/* List */}
        <div>
          <div className="w-full h-px bg-white/8" />

          {projects.map((p, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative border-b border-white/8 overflow-hidden"
              >
                {/* Accent left bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500"
                  style={{ background: isOpen ? p.accent : "transparent" }}
                />

                {/* Background tint */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, ${p.accent}07, transparent 60%)`,
                    opacity: isOpen ? 1 : 0,
                  }}
                />

                {/* Row trigger */}
                <button
                  onClick={() => toggle(i)}
                  className="relative w-full text-left pl-6 pr-2 sm:pr-0 py-8 xl:py-11 focus:outline-none"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 xl:gap-7 min-w-0">
                      <span
                        className="font-mono text-xs shrink-0 tabular-nums transition-colors duration-300"
                        style={{ color: isOpen ? p.accent : "rgba(255,255,255,0.2)" }}
                      >
                        {p.num}
                      </span>
                      <h2
                        className="font-black leading-none truncate transition-colors duration-400"
                        style={{
                          fontSize: "clamp(24px, 4vw, 60px)",
                          color: isOpen ? "white" : "rgba(255,255,255,0.75)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {p.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-4 xl:gap-8 shrink-0">
                      <span className="hidden md:block text-white/30 text-sm">{p.category}</span>
                      <span className="hidden lg:block text-white/20 text-xs tabular-nums">{p.year}</span>
                      <div
                        className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-400 shrink-0"
                        style={{
                          borderColor: isOpen ? `${p.accent}55` : "rgba(255,255,255,0.1)",
                          color: isOpen ? p.accent : "rgba(255,255,255,0.3)",
                          background: isOpen ? `${p.accent}10` : "transparent",
                        }}
                      >
                        {isOpen ? <HiMinus className="text-sm" /> : <HiPlus className="text-sm" />}
                      </div>
                    </div>
                  </div>

                  {/* Category on mobile */}
                  <p
                    className="md:hidden text-[10px] uppercase tracking-widest mt-2 pl-9 transition-colors duration-300"
                    style={{ color: isOpen ? p.accent : "rgba(255,255,255,0.25)" }}
                  >
                    {p.category}
                  </p>
                </button>

                {/* Expanded panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 sm:pl-14 pr-4 pb-10 xl:pb-14">
                        <div className="flex flex-col gap-6 max-w-2xl">

                          {/* Description */}
                          <p className="text-white/55 text-sm leading-relaxed">{p.description}</p>

                          {/* Metadata row */}
                          <div
                            className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-5"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                          >
                            <div>
                              <span className="text-[10px] uppercase tracking-widest text-white/25 block mb-2">
                                Category
                              </span>
                              <span className="text-xs text-white/65">{p.category}</span>
                            </div>
                            <div>
                              <span className="text-[10px] uppercase tracking-widest text-white/25 block mb-2">
                                Year
                              </span>
                              <span className="text-xs text-white/65">{p.year}</span>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <span className="text-[10px] uppercase tracking-widest text-white/25 block mb-2">
                                Stack
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {p.stack.map((t, ti) => (
                                  <span
                                    key={ti}
                                    className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border"
                                    style={{ color: `${p.accent}cc`, borderColor: `${p.accent}28` }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex items-center gap-3">
                            {p.live ? (
                              <Link
                                href={p.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black hover:opacity-85 transition-opacity"
                                style={{ background: p.accent }}
                              >
                                {p.liveLabel} <FiArrowUpRight />
                              </Link>
                            ) : (
                              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white/22 border border-white/8 cursor-not-allowed">
                                Coming soon
                              </span>
                            )}
                            {p.github && (
                              <Link
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white/55 border border-white/12 hover:border-white/28 hover:text-white transition-all duration-300"
                              >
                                GitHub <FiGithub />
                              </Link>
                            )}
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Work;
