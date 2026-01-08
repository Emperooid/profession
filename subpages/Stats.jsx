'use client'

import CountUp from 'react-countup'

const statsData = [
  { num: 3, label: 'Years of Experience', suffix: '+' },
  { num: 10, label: 'Projects Completed', suffix: '+' },
  { num: 10, label: 'Technologies Mastered', suffix: '+' },
  { num: 10, label: 'Happy Clients', suffix: '+' },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none justify-center xl:justify-between">
          {statsData.map((item, index) => {
            return (
              <div 
                key={index} 
                className="flex-1 min-w-[140px] max-w-[200px] sm:max-w-[250px] xl:max-w-none flex flex-col items-center justify-center xl:justify-start text-center xl:text-left gap-2"
              >
                <CountUp 
                  end={item.num} 
                  suffix={item.suffix} 
                  duration={3} 
                  delay={1} 
                  className='text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-accent'
                />
                <p className="text-sm sm:text-base xl:text-lg leading-snug text-white/80 max-w-[120px] sm:max-w-[150px] xl:max-w-[180px]">
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats;