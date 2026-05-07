'use client'

const skills = [
  'React', 'Next.js', 'TypeScript', 'React Native', 'Node.js',
  'Python', 'PostgreSQL', 'Docker', 'NestJS', 'GraphQL',
  'Tailwind CSS', 'Figma', 'MongoDB', 'Express.js', 'AWS',
]

const Marquee = () => {
  const doubled = [...skills, ...skills]
  return (
    <div className="overflow-hidden border-y border-white/5 py-4 my-0">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 40s linear infinite' }}
      >
        {doubled.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-4 text-white/35 text-[11px] uppercase tracking-[0.22em] font-medium"
          >
            {s}
            <span className="text-accent/60 text-[7px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
