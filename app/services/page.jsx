"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    num: "01",
    title: "Frontend\nEngineering",
    description:
      "Pixel-perfect, performant interfaces built with React and Next.js — responsive layouts, smooth animations, accessible components, and UIs that feel fast on every device.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Vitest"],
    href: "/work",
  },
  {
    num: "02",
    title: "Backend\nEngineering",
    description:
      "Scalable server-side systems with Node.js and NestJS — RESTful and GraphQL APIs, JWT-secured auth, PostgreSQL or MongoDB databases, and Docker-containerised deployments.",
    tags: ["Node.js", "NestJS", "GraphQL", "PostgreSQL", "MongoDB", "Docker", "Redis"],
    href: "/contact",
  },
  {
    num: "03",
    title: "Mobile\nEngineering",
    description:
      "Cross-platform mobile apps with React Native and Expo — real-time data, role-based dashboards, secure authentication, and polished iOS/Android experiences from one codebase.",
    tags: ["React Native", "Expo", "TypeScript", "Zod", "iOS / Android"],
    href: "/work",
  },
  {
    num: "04",
    title: "Full-Stack\nDevelopment",
    description:
      "End-to-end product delivery — from database schema and API contracts to the final UI. I own the full stack, write tests, set up CI/CD, and ship to production with confidence.",
    tags: ["Git", "GitHub Actions", "Vercel", "AWS", "Jest", "Cypress", "Prisma"],
    href: "/contact",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Services = () => (
  <section className="min-h-[80vh] flex flex-col justify-center py-16 xl:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section header */}
      <motion.div
        className="flex items-end justify-between mb-12 xl:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">What I offer</span>
          <h1
            className="font-black leading-[0.9] tracking-tight mt-2 text-white"
            style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}
          >
            My Services
          </h1>
        </div>
        <Link
          href="/contact"
          className="hidden sm:flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest hover:text-accent transition-colors duration-300"
        >
          Hire me <FiArrowUpRight />
        </Link>
      </motion.div>

      {/* Service rows */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="divide-y divide-white/5"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={rowVariants}
            className="group py-8 xl:py-10 grid grid-cols-[44px_1fr] md:grid-cols-[80px_1fr_1fr_48px] gap-x-4 gap-y-4 md:gap-8 items-start cursor-pointer"
          >
            {/* Number */}
            <span className="text-white/15 text-3xl md:text-4xl font-black tracking-tight group-hover:text-accent/40 transition-colors duration-500 leading-none pt-1">
              {s.num}
            </span>

            {/* Title */}
            <h2
              className="text-white font-bold leading-tight group-hover:text-accent transition-colors duration-400 whitespace-pre-line"
              style={{ fontSize: 'clamp(18px, 2.5vw, 30px)' }}
            >
              {s.title}
            </h2>

            {/* Description + tags — spans both columns on mobile */}
            <div className="col-span-2 md:col-auto flex flex-col gap-4">
              <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t, ti) => (
                  <span key={ti} className="text-[10px] uppercase tracking-widest text-accent/70 border border-accent/15 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <Link
              href={s.href}
              className="col-span-2 md:col-auto hidden md:flex w-12 h-12 rounded-full border border-white/8 items-center justify-center text-white/30 group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all duration-500"
            >
              <FiArrowUpRight className="text-lg" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
