"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

import { Tabs, tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { TabsContent } from "@radix-ui/react-tabs";

const about = {
  title: "About me",
  description:
    "I am a passionate web developer with expertise in creating dynamic and responsive websites. Skilled in HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and Figma for UI/UX design. Committed to delivering high-quality solutions that meet client needs and enhance user experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Emmanuel Awosika",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 814 364 0561",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "awosikaemmanueldefirst@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

const experiences = {
  icon: "",
  title: "My Experience",
  description:
    "Here is a brief overview of my professional journey and the skills I've acquired along the way.",
  items: [
    {
      company: "Tech Solutions Ltd.",
      role: "Frontend Developer",
      duration: "Jan 2021 - Present",
      details:
        "Developed and maintained the front end of the company's main product using React and Next.js, improving user engagement by 20%. Collaborated with designers to implement responsive UI/UX designs using Figma and Tailwind CSS.",
    },
    {
      company: "Tech Solutions Ltd.",
      role: "Frontend Developer",
      duration: "Jan 2021 - Present",
      details:
        "Developed and maintained the front end of the company's main product using React and Next.js, improving user engagement by 20%. Collaborated with designers to implement responsive UI/UX designs using Figma and Tailwind CSS.",
    },
    {
      company: "Tech Solutions Ltd.",
      role: "Frontend Developer",
      duration: "Jan 2021 - Present",
      details:
        "Developed and maintained the front end of the company's main product using React and Next.js, improving user engagement by 20%. Collaborated with designers to implement responsive UI/UX designs using Figma and Tailwind CSS.",
    },
    {
      company: "Tech Solutions Ltd.",
      role: "Frontend Developer",
      duration: "Jan 2021 - Present",
      details:
        "Developed and maintained the front end of the company's main product using React and Next.js, improving user engagement by 20%. Collaborated with designers to implement responsive UI/UX designs using Figma and Tailwind CSS.",
    },
    {
      company: "Tech Solutions Ltd.",
      role: "Frontend Developer",
      duration: "Jan 2021 - Present",
      details:
        "Developed and maintained the front end of the company's main product using React and Next.js, improving user engagement by 20%. Collaborated with designers to implement responsive UI/UX designs using Figma and Tailwind CSS.",
    },
    {
      company: "Tech Solutions Ltd.",
      role: "Frontend Developer",
      duration: "Jan 2021 - Present",
      details:
        "Developed and maintained the front end of the company's main product using React and Next.js, improving user engagement by 20%. Collaborated with designers to implement responsive UI/UX designs using Figma and Tailwind CSS.",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "lorem55nnknklntgknklnnhtnklhnnklnrnrnhkln mmmvq  th3ghhg p;hhuhh qph35htg5huhqg g5hyghuhguiq hg5uqhgph5pqh.",
  items: [
    {
      Institution: "Yaba College Of Technology.",
      Degree: "Computer Engineering",
      duration: "2022  - 2024",
      details:
        "Developed and maintained the front end of the company's main product using React and Next.js, improving user engagement by 20%. Collaborated with designers to implement responsive UI/UX designs using Figma and Tailwind CSS.",
    },
    {
      Institution: "University of Lagos",
      Degree: "Systems Engineering",
      duration: "2023  - Present",
      details:
        "Developed and maintained the front end of the company's main product using React and Next.js, improving user engagement by 20%. Collaborated with designers to implement responsive UI/UX designs using Figma and Tailwind CSS.",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Here are some of the technical skills and tools I have experience with:",
  skillList: [
    {
      icon: FaHtml5,
      name: "HTML5",
    },
    {
      icon: FaCss3,
      name: "CSS3",
    },
    {
      icon: FaJs,
      name: "JavaScript",
    },
    {
      icon: FaReact,
      name: "React",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
    },
    {
      icon: SiExpress,
      name: "Express",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
    },
    { icon: FaFigma, name: "Figma" },
    {
      icon: FaPython,
      name: "Python",
    },
  ],
};

const Resume = () => {
  return(
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { duration: 0.5, delay: 2.4, ease: "easeIn" },
    }}
    className="min-h-[90vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value = "about">About Me</TabsTrigger>
          <TabsTrigger value = "experience">Experience</TabsTrigger>
          <TabsTrigger value = "education">Education</TabsTrigger>
          <TabsTrigger value = "skills">Skills</TabsTrigger>
        </TabsList>

        <div className="min-h-[70vh] w-full">

          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              </div>
              <ul className="grid grid-cols-1 gap-4 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-center xl:justify-start gap-2 sm:gap-4 p-3 bg-[#27272c] rounded-lg">
                      <span className="text-white/60 text-sm sm:text-base sm:min-w-[120px] font-medium">{item.fieldName}:</span>
                      <span className="text-base sm:text-lg break-all">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>



          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experiences.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiences.description}</p>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] pr-1">
                  {experiences.items.map((item, index) => {
                    return (
                      <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.role}</h3>

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                           {/* <h3>{item.details}</h3> */}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>



          <TabsContent value="education" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] pr-1">
                  {education.items.map((item, index) => {
                    return (
                      <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Degree}</h3>

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.Institution}</p>
                           {/* <h3>{item.details}</h3> */}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>




          
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              <skill.icon />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
  );
};

export default Resume;
