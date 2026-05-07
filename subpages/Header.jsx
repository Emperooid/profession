"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/subpages/Nav";
import MobileNav from "@/subpages/MobileNav";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#08080f]/80 backdrop-blur-xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-0.5">
          <span className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-white/80 transition-colors duration-300">
            Emperooid
          </span>
          <span
            className="text-accent text-xl sm:text-2xl font-black"
            style={{ animation: 'blink 3s ease-in-out infinite' }}
          >
            .
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button
              className="rounded-full px-5 py-2 text-sm font-semibold bg-accent text-white hover:bg-accent/85 hover:shadow-lg hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
