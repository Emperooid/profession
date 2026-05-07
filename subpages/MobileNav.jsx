"use client";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home",     path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume",   path: "/resume" },
  { name: "Work",     path: "/work" },
  { name: "Contact",  path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-[#08080f] border-l border-white/5">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        {/* Logo */}
        <div className="mt-16 mb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-0.5">
            <span className="text-3xl font-black text-white tracking-tight">Emperooid</span>
            <span className="text-accent text-3xl font-black" style={{ animation: 'blink 3s ease-in-out infinite' }}>.</span>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className={`text-lg font-medium capitalize tracking-wide transition-all duration-300 ${
                link.path === pathname
                  ? "text-accent"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto pb-8 text-center">
          <p className="text-white/20 text-xs uppercase tracking-widest">
            Based in Lagos, Nigeria
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
