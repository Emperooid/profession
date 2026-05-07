'use client'

import CountUp from 'react-countup'
import Link from 'next/link'

const statsData = [
  { num: 3,  suffix: '+', label: 'Years of\nExperience' },
  { num: 15, suffix: '+', label: 'Projects\nCompleted' },
  { num: 20, suffix: '+', label: 'Technologies\nMastered' },
  { num: 30, suffix: '+', label: 'Students\nMentored' },
]

const Stats = () => {
  return (
    <section className="py-10 xl:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="glass-card glow-hover rounded-2xl p-6 xl:p-8 flex flex-col gap-1.5 group"
            >
              <CountUp
                end={item.num}
                suffix={item.suffix}
                duration={3}
                delay={1.8}
                className="text-4xl xl:text-5xl font-black text-accent leading-none"
              />
              <p className="text-white/45 text-[11px] uppercase tracking-widest leading-snug whitespace-pre-line mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
          <p className="text-white/30 text-xs uppercase tracking-widest">
            Based in Lagos, Nigeria · Available worldwide
          </p>
          <Link
            href="/contact"
            className="text-accent text-xs uppercase tracking-widest font-medium hover:text-white transition-colors duration-300 flex items-center gap-1.5"
          >
            Let&apos;s work together →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Stats
