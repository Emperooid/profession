"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Photo from '@/subpages/Photo'
import Socials from '@/subpages/Socials'
import Stats from '@/subpages/Stats'
import Marquee from '@/subpages/Marquee'
import { FiDownload, FiArrowDownRight } from 'react-icons/fi'
import Link from 'next/link'

const roles = [
  "Full-Stack Engineer",
  "React Native Dev",
  "UI/UX Craftsman",
  "Problem Solver",
]

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(p => (p + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flex flex-col">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden">

        {/* Subtle radial glow behind the photo side */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10 xl:gap-0">

            {/* ── LEFT: text block ── */}
            <motion.div
              className="flex-1 xl:max-w-[58%] order-2 xl:order-1"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Available badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 mb-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'blink 2s ease-in-out infinite' }} />
                <span className="text-green-400/80 text-xs uppercase tracking-widest font-medium">
                  Available for work
                </span>
              </motion.div>

              {/* Display name */}
              <motion.h1
                className="font-black leading-[0.88] tracking-tight mb-5"
                style={{ fontSize: 'clamp(52px, 8vw, 108px)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-white block">Emmanuel</span>
                <span className="text-gradient block">Awosika</span>
              </motion.h1>

              {/* Rotating role strip */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                <span className="h-px w-8 bg-accent/60 shrink-0" />
                <div className="h-6 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="text-accent text-sm uppercase tracking-widest font-medium block"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.p
                className="text-white/55 text-base md:text-lg max-w-md leading-relaxed mb-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                I build production-grade web and mobile apps from Lagos, Nigeria —
                healthcare platforms, AI tools, logistics dashboards, and everything between.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.15 }}
              >
                {/* Buttons row */}
                <div className="flex flex-wrap items-center gap-3">
                  <a href="/Emmanuel-Awosika-CV.pdf" download>
                    <button className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent/85 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
                      Download CV
                      <FiDownload className="text-base group-hover:translate-y-0.5 transition-transform duration-200" />
                    </button>
                  </a>

                  <Link href="/work">
                    <button className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm font-medium hover:border-white/25 hover:text-white transition-all duration-300">
                      View work
                      <FiArrowDownRight className="text-base group-hover:rotate-0 -rotate-45 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>

                {/* Socials on its own row */}
                <Socials
                  containerStyles="flex gap-3"
                  iconStyles="w-9 h-9 border border-white/10 rounded-full flex justify-center items-center text-white/50 text-sm hover:border-accent hover:text-accent transition-all duration-300"
                />
              </motion.div>
            </motion.div>

            {/* ── RIGHT: photo ── */}
            <motion.div
              className="order-1 xl:order-2 self-center xl:self-auto"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Photo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <Marquee />
      </motion.div>

      {/* ── STATS (bento) ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.55 }}
      >
        <Stats />
      </motion.div>
    </div>
  )
}
