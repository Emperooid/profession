"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "@/subpages/Stairs";

const StairsAnimation = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* The 6 bars sit inside a fixed full-screen flex row */}
        <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-50 flex">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairsAnimation;
