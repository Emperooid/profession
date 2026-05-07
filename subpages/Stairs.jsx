'use client'
import { motion } from 'framer-motion'

// 6 themed bars — dark to accent purple, left to right
const bars = [
  '#f5f5f0',
  '#eeeee8',
  '#e8e8e2',
  '#e2e2dc',
  '#dcdcd6',
  '#d6d6d0',
]

const reverseIndex = (i, total) => total - i - 1

const Stairs = () => (
  <>
    {bars.map((color, i) => (
      <motion.div
        key={i}
        style={{ background: color }}
        initial={{ top: '0%' }}
        animate={{
          top: '-100%',
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: reverseIndex(i, bars.length) * 0.065,
          },
        }}
        exit={{
          top: ['-100%', '0%'],
          transition: {
            duration: 0.42,
            ease: [0.88, 0, 0.1, 1],
            delay: i * 0.065,
          },
        }}
        className="relative h-full w-full"
      />
    ))}
  </>
)

export default Stairs
