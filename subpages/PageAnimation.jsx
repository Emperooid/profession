"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Subtle content fade-in that starts after the bars have cleared
const PageAnimation = ({ children }) => {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.55 } }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimation;
