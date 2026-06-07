"use client";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma,
  FaNodeJs, FaPython, FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss,
  SiTypescript, SiDocker, SiPostgresql, SiNestjs, SiGraphql,
  SiRedux, SiFirebase, SiPrisma, SiJest, SiGithubactions,
  SiVercel, SiAmazon, SiRedis, SiBootstrap, SiSass,
  SiVite, SiMysql, SiSupabase, SiExpo, SiFramer,
} from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

/* ─── DATA ──────────────────────────────────────────────────────── */

const about = {
  title: "About me",
  description: [
    "I'm Emmanuel — a software engineer from Lagos, Nigeria, currently studying Systems Engineering at the University of Lagos.",
    "I build things end to end. From designing interfaces to writing backend systems and shipping mobile apps, I enjoy the full process of turning ideas into real, working products. I don't just like code that works — I care about how it feels to use, how fast it runs, and whether it actually solves the problem it was built for.",
    "Over time, I've worked on projects across health tech, logistics, education, and community-focused tools. Most of what I build is driven by real needs I've seen around me, especially in environments where systems can be improved with thoughtful software.",
    "Outside of building products, I teach programming to kids through a local STEM program. It keeps me grounded and constantly reminds me to think simply, communicate clearly, and never lose sight of the basics.",
    "Right now, I'm focused on growing as a builder — improving my engineering depth, collaborating on meaningful projects, and creating tools that are genuinely useful to the people who use them.",
  ],
  info: [
    { fieldName: "Name",        fieldValue: "Emmanuel Awosika" },
    { fieldName: "Phone",       fieldValue: "(+234) 814 364 0561",          href: "tel:+2348143640561" },
    { fieldName: "Experience",  fieldValue: "3+ years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Email",       fieldValue: "awosikaemmanueldefirst@gmail.com", href: "mailto:awosikaemmanueldefirst@gmail.com" },
    { fieldName: "Freelance",   fieldValue: "Available" },
    { fieldName: "Location",    fieldValue: "Lagos, Nigeria" },
    { fieldName: "Languages",   fieldValue: "English" },
  ],
};

const experiences = {
  title: "Experience",
  description: "7 roles across healthtech, logistics, non-profit, fintech, and civil-engineering sectors.",
  items: [
    {
      company: "Easetack",
      role: "Software Engineer",
      duration: "Jan 2026 – Present",
      highlights: [
        "Built cross-platform mobile apps with React Native and Expo, shipping to both iOS and Android from a single codebase.",
        "Developed responsive web applications with Next.js and Tailwind CSS, covering product dashboards and public-facing pages.",
        "Designed and maintained RESTful backend APIs with Node.js — handling auth flows, data models, and cloud deployments.",
      ],
    },
    {
      company: "Digital Nexus AI",
      role: "Web Developer Intern",
      duration: "Jan 2026 – Jul 2026",
      highlights: [
        "Developed and maintained client-facing web interfaces using HTML, CSS, Bootstrap, and JavaScript within an AI product company.",
        "Implemented server-side scripting features, contributing to backend data handling and page rendering logic.",
        "Collaborated with cross-functional teams to deliver accessible, consistent UI components across multiple product pages.",
      ],
    },
    {
      company: "NitHub Unilag",
      role: "Frontend Engineer Intern",
      duration: "Mar 2025 – Jul 2025",
      highlights: [
        "Built a virtual health scheduling platform enabling patients to book appointments and track health records online.",
        "Implemented real-time dashboards for clinicians and administrators, with role-based access control across user types.",
        "Integrated third-party APIs and ensured fully responsive, accessible UI across all device sizes.",
      ],
    },
    {
      company: "Bunmi Adedayo Foundation",
      role: "Software Engineer",
      duration: "Sept 2024 – Jan 2026",
      highlights: [
        "Redesigned the foundation's website from scratch — drove a 60% increase in organic traffic and a 35% rise in user engagement.",
        "Applied test-driven development (TDD) throughout, reducing production downtime by ~40% over the engagement.",
        "Optimised site performance and SEO, improving page load times and search visibility for the non-profit's core campaigns.",
      ],
    },
    {
      company: "ASCE Nigeria International",
      role: "Junior Software Engineer",
      duration: "Feb 2024 – Aug 2024",
      highlights: [
        "Shipped a full event management platform using atomic design principles, supporting conference registration, scheduling, and attendance.",
        "Integrated transactional email notification APIs to automate event updates, reminders, and confirmations for attendees.",
        "Contributed to a shared component library that standardised UI patterns across the platform.",
      ],
    },
    {
      company: "Rottank Storage & Logistics",
      role: "Software Engineer",
      duration: "Mar 2024 – Dec 2025",
      highlights: [
        "Built an inventory tracking system with real-time logistics dashboards, replacing manual spreadsheet workflows across the business.",
        "Improved operational decision speed by ~35% through live data visualisation and automated status update pipelines.",
        "Worked closely with operations leads to translate business requirements into maintainable, scalable software solutions.",
      ],
    },
    {
      company: "IGPES Group",
      role: "Computer Engineering Intern",
      duration: "Feb 2023 – Aug 2023",
      highlights: [
        "Maintained and configured network infrastructure, servers, and hardware across multiple departments at the firm.",
        "Installed and updated security software, firewalls, and antivirus systems to keep company assets protected.",
        "Troubleshot and resolved hardware and software issues, reducing recurring IT downtime across teams.",
      ],
    },
  ],
};

const education = {
  title: "Education & Certifications",
  description: "Formal engineering foundations combined with self-directed learning in modern web technologies.",
  formal: [
    {
      institution: "University of Lagos",
      degree: "B.Eng Systems Engineering",
      duration: "2023 – Present",
    },
    {
      institution: "Yaba College of Technology",
      degree: "ND Computer Engineering — Distinction",
      duration: "2022 – May 2024",
    },
  ],
  certifications: [
    {
      institution: "Udemy",
      degree: "Web Development Masterclass",
      duration: "Oct 2024",
    },
    {
      institution: "Udemy",
      degree: "Python A-Z: Beginner to Expert",
      duration: "Oct 2024",
    },
    {
      institution: "YouTube",
      degree: "React Native & Mobile Development",
      duration: "2024",
    },
    {
      institution: "YouTube",
      degree: "Full-Stack Web Development",
      duration: "2023 – 2024",
    },
  ],
};

const skills = {
  title: "Skills",
  description: "The stack I reach for every day — frontend, mobile, backend, data, and cloud.",
  skillList: [
    { icon: FaHtml5,          name: "HTML5" },
    { icon: FaCss3,           name: "CSS3" },
    { icon: SiSass,           name: "Sass" },
    { icon: SiBootstrap,      name: "Bootstrap" },
    { icon: SiTailwindcss,    name: "Tailwind CSS" },
    { icon: FaJs,             name: "JavaScript" },
    { icon: SiTypescript,     name: "TypeScript" },
    { icon: FaReact,          name: "React" },
    { icon: SiRedux,          name: "Redux" },
    { icon: SiNextdotjs,      name: "Next.js" },
    { icon: SiVite,           name: "Vite" },
    { icon: SiFramer,         name: "Framer Motion" },
    { icon: FaReact,          name: "React Native" },
    { icon: SiExpo,           name: "Expo" },
    { icon: FaNodeJs,         name: "Node.js" },
    { icon: SiExpress,        name: "Express.js" },
    { icon: SiNestjs,         name: "NestJS" },
    { icon: SiGraphql,        name: "GraphQL" },
    { icon: FaPython,         name: "Python" },
    { icon: SiMongodb,        name: "MongoDB" },
    { icon: SiPostgresql,     name: "PostgreSQL" },
    { icon: SiMysql,          name: "MySQL" },
    { icon: SiRedis,          name: "Redis" },
    { icon: SiPrisma,         name: "Prisma" },
    { icon: SiSupabase,       name: "Supabase" },
    { icon: SiFirebase,       name: "Firebase" },
    { icon: SiDocker,         name: "Docker" },
    { icon: SiVercel,         name: "Vercel" },
    { icon: SiAmazon,         name: "AWS" },
    { icon: SiGithubactions,  name: "GitHub Actions" },
    { icon: SiJest,           name: "Jest" },
    { icon: FaGitAlt,         name: "Git" },
    { icon: FaFigma,          name: "Figma" },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const Resume = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
    className="min-h-[90vh] flex items-start justify-center py-16 xl:py-24"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">

      {/* Page heading */}
      <div className="mb-10 xl:mb-14">
        <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Background</span>
        <h1
          className="font-black leading-[0.9] tracking-tight mt-2 text-white"
          style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}
        >
          My Resume
        </h1>
      </div>

      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-10 xl:gap-16">

        {/* Sidebar */}
        <TabsList className="flex flex-row xl:flex-col w-full xl:w-48 shrink-0 gap-1 xl:gap-2 bg-transparent p-0 overflow-x-auto">
          {["experience", "education", "skills", "about"].map((v) => (
            <TabsTrigger
              key={v}
              value={v}
              className="uppercase text-xs tracking-widest font-medium px-4 py-2.5 rounded-lg text-white/40 data-[state=active]:bg-white/6 data-[state=active]:text-accent hover:text-white/70 transition-all duration-200 whitespace-nowrap"
            >
              {v === "about" ? "About Me" : v}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content */}
        <div className="flex-1 min-h-96">

          {/* ── EXPERIENCE ── */}
          <TabsContent value="experience" className="mt-0">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white">{experiences.title}</h2>
                <p className="text-white/45 text-sm mt-2">{experiences.description}</p>
              </div>
              <div className="relative">
                {/* timeline line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-white/6 hidden sm:block" />
                <div className="flex flex-col gap-0">
                  {experiences.items.map((item, i) => (
                    <div key={i} className="group relative sm:pl-8 pb-8 last:pb-0">
                      {/* dot */}
                      <div className="absolute -left-0.75 top-2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent group-hover:scale-125 transition-all duration-300 hidden sm:block" />
                      <div className="glass-card glow-hover rounded-xl p-5 flex flex-col gap-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-accent text-xs font-medium tracking-wide">{item.duration}</span>
                          <span className="text-white/30 text-xs">{item.company}</span>
                        </div>
                        <h3 className="text-base font-semibold text-white">{item.role}</h3>
                        <ul className="flex flex-col gap-1 mt-1">
                          {item.highlights.map((point, pi) => (
                            <li key={pi} className="flex gap-2 text-white/45 text-xs leading-relaxed">
                              <span className="text-accent/60 mt-0.5 shrink-0">–</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ── EDUCATION ── */}
          <TabsContent value="education" className="mt-0">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-bold text-white">{education.title}</h2>
                <p className="text-white/45 text-sm mt-2">{education.description}</p>
              </div>

              {/* Formal */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium">Formal Education</span>
                <div className="relative">
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-white/6 hidden sm:block" />
                  <div className="flex flex-col gap-0">
                    {education.formal.map((item, i) => (
                      <div key={i} className="group relative sm:pl-8 pb-6 last:pb-0">
                        <div className="absolute -left-0.75 top-2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent group-hover:scale-125 transition-all duration-300 hidden sm:block" />
                        <div className="glass-card glow-hover rounded-xl p-5 flex flex-col gap-2">
                          <span className="text-accent text-xs font-medium tracking-wide">{item.duration}</span>
                          <h3 className="text-base font-semibold text-white">{item.degree}</h3>
                          <p className="text-white/40 text-xs">{item.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium">Certifications</span>
                <div className="relative">
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-white/6 hidden sm:block" />
                  <div className="flex flex-col gap-0">
                    {education.certifications.map((item, i) => (
                      <div key={i} className="group relative sm:pl-8 pb-6 last:pb-0">
                        <div className="absolute -left-0.75 top-2 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent group-hover:scale-125 transition-all duration-300 hidden sm:block" />
                        <div className="glass-card glow-hover rounded-xl p-5 flex flex-col gap-2">
                          <span className="text-accent text-xs font-medium tracking-wide">{item.duration}</span>
                          <h3 className="text-base font-semibold text-white">{item.degree}</h3>
                          <p className="text-white/40 text-xs">{item.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ── SKILLS ── */}
          <TabsContent value="skills" className="mt-0">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white">{skills.title}</h2>
                <p className="text-white/45 text-sm mt-2">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3">
                {skills.skillList.map((skill, i) => (
                  <li key={i}>
                    <TooltipProvider delayDuration={80}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-24 glass-card glow-hover rounded-xl flex justify-center items-center group transition-all duration-300">
                          <div className="text-4xl text-white/40 group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                            <skill.icon />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* ── ABOUT ── */}
          <TabsContent value="about" className="mt-0">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white">{about.title}</h2>
                <div className="flex flex-col gap-3 mt-3">
                  {about.description.map((para, i) => (
                    <p key={i} className="text-white/55 text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {about.info.map((item, i) => (
                  <li key={i} className="glass-card rounded-xl p-4 flex flex-row items-start gap-3 min-w-0">
                    <span className="text-white/35 text-[10px] uppercase tracking-widest font-medium shrink-0 pt-0.5 w-24">
                      {item.fieldName}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white/80 text-sm hover:text-accent transition-colors duration-200 truncate min-w-0"
                      >
                        {item.fieldValue}
                      </a>
                    ) : (
                      <span className="text-white/80 text-sm truncate min-w-0">{item.fieldValue}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

        </div>
      </Tabs>
    </div>
  </motion.div>
);

export default Resume;
