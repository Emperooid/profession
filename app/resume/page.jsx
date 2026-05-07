"use client";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma,
  FaNodeJs, FaPython, FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss,
  SiTypescript, SiDocker, SiPostgresql, SiNestjs, SiGraphql,
} from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

/* ─── DATA ──────────────────────────────────────────────────────── */

const about = {
  title: "About me",
  description:
    "Software engineer based in Lagos, Nigeria. 3+ years shipping production apps across healthcare, logistics, edtech, and non-profit sectors. Currently completing a B.Eng in Systems Engineering at the University of Lagos. I care deeply about clean architecture, real user impact, and code that doesn't embarrass you six months later.",
  info: [
    { fieldName: "Name",        fieldValue: "Emmanuel Awosika" },
    { fieldName: "Phone",       fieldValue: "(+234) 814 364 0561" },
    { fieldName: "Experience",  fieldValue: "3+ years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Email",       fieldValue: "awosikaemmanueldefirst@gmail.com" },
    { fieldName: "Freelance",   fieldValue: "Available" },
    { fieldName: "Location",    fieldValue: "Lagos, Nigeria" },
    { fieldName: "Languages",   fieldValue: "English" },
  ],
};

const experiences = {
  title: "Experience",
  description: "4 roles across healthtech, logistics, non-profit, and civil-engineering sectors.",
  items: [
    {
      company: "NitHub Unilag",
      role: "Frontend Engineer",
      duration: "Mar 2025 – Jul 2025",
      highlight: "Built virtual health scheduling platform with real-time dashboards & role-based access.",
    },
    {
      company: "Bunmi Adedayo Foundation",
      role: "Software Engineer",
      duration: "Sept 2024 – Jul 2025",
      highlight: "Redesigned website — 60% traffic uplift, 35% engagement rise, 40% less downtime via TDD.",
    },
    {
      company: "ASCE Nigeria International",
      role: "Junior Software Engineer",
      duration: "Feb 2024 – Aug 2024",
      highlight: "Shipped event management platform using atomic design; wired email notification APIs.",
    },
    {
      company: "Rottank Storage & Logistics",
      role: "Software Engineer",
      duration: "Mar 2024 – Present",
      highlight: "Built inventory tracking & real-time logistics dashboards; improved decision speed ~35%.",
    },
    {
      company: "IGPES Group",
      role: "Computer Engineering Intern",
      duration: "Feb 2023 – Aug 2023",
      highlight: "Maintained networks, servers, and hardware; configured security software across departments.",
    },
  ],
};

const education = {
  title: "Education",
  description: "Formal engineering foundations + self-directed learning in modern web technologies.",
  items: [
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
  ],
};

const skills = {
  title: "Skills",
  description: "The stack I reach for every day — frontend, mobile, backend, data, and cloud.",
  skillList: [
    { icon: FaHtml5,       name: "HTML5" },
    { icon: FaCss3,        name: "CSS3" },
    { icon: FaJs,          name: "JavaScript" },
    { icon: SiTypescript,  name: "TypeScript" },
    { icon: FaReact,       name: "React" },
    { icon: FaReact,       name: "React Native" },
    { icon: SiNextdotjs,   name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: FaNodeJs,      name: "Node.js" },
    { icon: SiExpress,     name: "Express.js" },
    { icon: SiNestjs,      name: "NestJS" },
    { icon: FaPython,      name: "Python" },
    { icon: SiGraphql,     name: "GraphQL" },
    { icon: SiMongodb,     name: "MongoDB" },
    { icon: SiPostgresql,  name: "PostgreSQL" },
    { icon: SiDocker,      name: "Docker" },
    { icon: FaFigma,       name: "Figma" },
    { icon: FaGitAlt,      name: "Git" },
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
                        <p className="text-white/45 text-xs leading-relaxed">{item.highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ── EDUCATION ── */}
          <TabsContent value="education" className="mt-0">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white">{education.title}</h2>
                <p className="text-white/45 text-sm mt-2">{education.description}</p>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-white/6 hidden sm:block" />
                <div className="flex flex-col gap-0">
                  {education.items.map((item, i) => (
                    <div key={i} className="group relative sm:pl-8 pb-8 last:pb-0">
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
                <p className="text-white/55 text-sm mt-3 leading-relaxed max-w-2xl">{about.description}</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl">
                {about.info.map((item, i) => (
                  <li key={i} className="glass-card rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-white/35 text-[10px] uppercase tracking-widest sm:min-w-28 font-medium">
                      {item.fieldName}
                    </span>
                    <span className="text-white/80 text-sm break-all">{item.fieldValue}</span>
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
