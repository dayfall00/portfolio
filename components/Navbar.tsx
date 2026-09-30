"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "WORK", href: "/#work", exactMatchHref: "/work" },
    { label: "ABOUT", href: "/about" },
    { label: "LAB", href: "/experiments" },
    { label: "PHOTOGRAPHY", href: "/photography" },
    { label: "CONTACT", href: "/contact" },
  ];

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.exactMatchHref && pathname.startsWith(link.exactMatchHref)) {
      return true;
    }
    return pathname === link.href;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#090a0d]/85 backdrop-blur-md border-b border-white/[0.06] shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo / Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-stone-100 hover:text-white transition-colors"
          >
            <div className="w-2.5 h-2.5 bg-lime-400 rounded-sm transform group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-bold tracking-tight text-base sm:text-lg uppercase">
              ADITYA
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-stone-500 uppercase border-l border-stone-800 pl-3">
              AI / SWE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-xs font-mono tracking-widest uppercase transition-colors py-1 ${
                    active
                      ? "text-lime-400 font-semibold"
                      : "text-stone-400 hover:text-stone-100"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-lime-400"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Quick Status Pill */}
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/[0.08] text-[11px] font-mono text-stone-400">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse-subtle" />
              <span>OPEN TO ROLES</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-stone-200 active:scale-95 transition"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-4 h-4 text-lime-400" />
            <span>MENU</span>
          </button>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#090a0d] flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-stone-100 font-bold uppercase tracking-tight text-lg"
              >
                <div className="w-2.5 h-2.5 bg-lime-400 rounded-sm" />
                ADITYA
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-white/[0.1] bg-white/[0.04] text-stone-300 hover:text-white"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 text-lime-400" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-6 my-auto" aria-label="Mobile Navigation">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * (idx + 1), duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between text-4xl sm:text-5xl font-bold tracking-tight uppercase text-stone-200 hover:text-lime-400 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 text-lime-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Footer */}
            <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-2">
              <div className="text-xs font-mono uppercase tracking-widest text-lime-400">
                AI / ML · SOFTWARE · CREATIVE
              </div>
              <div className="text-xs text-stone-500 font-mono">
                Computer Science & Engineering · New Delhi, India
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
