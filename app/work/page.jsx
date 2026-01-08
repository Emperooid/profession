"use client";
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Pagination } from "swiper/modules";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "lorem c fjknknbkj ghbnrujhbgubrvuyiq uvhubnihvijhfui h uif vgiuhguhgoh3ohfg3uhfioph98p24yh98hjbfu3rhhfhnp;3hhg98 5th3h3uvj0quhjoi[8vh3ruhhewhf983u ",
    stack: [{ name: "react" }, { name: "nextjs" }, { name: "framer-motion" }],
    image: "/project-1.png",
    github: "https://github.com",
    live: "https://google.com",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
    description:
      "lorem c fjknknbkj ghbnrujhbgubrvuyiq uvhubnihvijhfui h uif vgiuhguhgoh3ohfg3uhfioph98p24yh98hjbfu3rhhfhnp;3hhg98 5th3h3uvj0quhjoi[8vh3ruhhewhf983u ",
    stack: [{ name: "react" }, { name: "nextjs" }, { name: "framer-motion" }],
    image: "/project-1.png",
    github: "https://github.com",
    live: "https://google.com",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description:
      "lorem c fjknknbkj ghbnrujhbgubrvuyiq uvhubnihvijhfui h uif vgiuhguhgoh3ohfg3uhfioph98p24yh98hjbfu3rhhfhnp;3hhg98 5th3h3uvj0quhjoi[8vh3ruhhewhf983u ",
    stack: [{ name: "react" }, { name: "nextjs" }, { name: "framer-motion" }],
    image: "/project-1.png",
    github: "https://github.com",
    live: "https://google.com",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 1",
    description:
      "lorem c fjknknbkj ghbnrujhbgubrvuyiq uvhubnihvijhfui h uif vgiuhguhgoh3ohfg3uhfioph98p24yh98hjbfu3rhhfhnp;3hhg98 5th3h3uvj0quhjoi[8vh3ruhhewhf983u ",
    stack: [{ name: "react" }, { name: "nextjs" }, { name: "framer-motion" }],
    image: "/project-1.png",
    github: "https://github.com",
    live: "https://google.com",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 1",
    description:
      "lorem c fjknknbkj ghbnrujhbgubrvuyiq uvhubnihvijhfui h uif vgiuhguhgoh3ohfg3uhfioph98p24yh98hjbfu3rhhfhnp;3hhg98 5th3h3uvj0quhjoi[8vh3ruhhewhf983u ",
    stack: [{ name: "react" }, { name: "nextjs" }, { name: "framer-motion" }],
    image: "/project-1.png",
    github: "https://github.com",
    live: "https://google.com",
  },
  {
    num: "06",
    category: "frontend",
    title: "project 1",
    description:
      "lorem c fjknknbkj ghbnrujhbgubrvuyiq uvhubnihvijhfui h uif vgiuhguhgoh3ohfg3uhfioph98p24yh98hjbfu3rhhfhnp;3hhg98 5th3h3uvj0quhjoi[8vh3ruhhewhf983u ",
    stack: [{ name: "react" }, { name: "nextjs" }, { name: "framer-motion" }],
    image: "/project-1.png",
    github: "https://github.com",
    live: "https://google.com",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, 
        transition: { duration: 0.5 , ease: "easeInOut", delay: 2.4 },
       }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-0">
            <div className="flex flex-col gap-4">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              <p className="text-white/60 max-w-[400px]">
                {project.description}
              </p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={(swiper) => {
                setProject(projects[swiper.activeIndex]);
                setActiveIndex(swiper.activeIndex);
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Pagination]}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] sm:h-[450px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Unique responsive navigation buttons */}
            <div className="flex justify-center xl:justify-start gap-4">
              <button
                className="group relative bg-transparent border-2 border-accent hover:bg-accent h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] xl:h-[70px] xl:w-[70px] rounded-full flex justify-center items-center transition-all duration-300 overflow-hidden"
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slidePrev();
                  }
                }}
              >
                <div className="absolute inset-0 bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <SlArrowLeft className="relative z-10 text-accent group-hover:text-primary text-lg sm:text-xl xl:text-2xl transition-colors duration-300" />
              </button>

              {/* Slide indicator */}
              <div className="flex items-center justify-center bg-white/10 rounded-full px-4 sm:px-6 xl:px-8 h-[50px] sm:h-[60px] xl:h-[70px]">
                <span className="text-accent font-bold text-sm sm:text-base xl:text-lg">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              <button
                className="group relative bg-transparent border-2 border-accent hover:bg-accent h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] xl:h-[70px] xl:w-[70px] rounded-full flex justify-center items-center transition-all duration-300 overflow-hidden"
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideNext();
                  }
                }}
              >
                <div className="absolute inset-0 bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <SlArrowRight className="relative z-10 text-accent group-hover:text-primary text-lg sm:text-xl xl:text-2xl transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
