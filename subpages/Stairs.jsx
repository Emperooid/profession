import { motion } from 'framer-motion'


const StairsAnimation = {
  initial: {
    top: "0%"
  },
  animate: {
    top: "-100%"
  },
  exit: {
    top: ["-100%", "0%"],
   
  }
};
//calculation for the steps//
const reverseIndex =(index) => {
  const totalSteps = 10; 
  return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
      {/* Stairs Animation */}
      {
        [...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={StairsAnimation}
            transition={{ delay: reverseIndex(index) * 0.1, duration: 0.4, ease: "easeInOut" }}
            className={`h-full w-full bg-white relative `}
          >

          </motion.div>
        ))}
    </>
  )
}

export default Stairs
