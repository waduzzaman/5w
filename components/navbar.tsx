'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, X, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <header className="fixed top-0 z-50 w-full">

      {/* 🔥 TOP NAV */}
      <div className="bg-[#1a1a1a] text-white text-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">

          {/* Left Text */}
          <div className="hidden md:block text-gray-400 tracking-wide">
            Global PR & Digital Communications Agency
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 ml-auto">

            {/* Social Icons */}
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Instagram className="h-4 w-4" />
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-4 py-1.5 rounded-full bg-blue-500 text-white text-[10px] uppercase tracking-wider hover:bg-blue-600 transition"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>

      {/* 🔥 MAIN NAVBAR */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#f5f2ed]/90 backdrop-blur-md border-b border-[#1a1a1a]/10 py-2"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-3 hover:opacity-90"
              >
                <Image
                  src="/images/logo.png"
                  alt="5W Communications Logo"
                  width={150}
                  height={20}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex space-x-10">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-md font-semibold uppercase tracking-[0.15em] relative transition-colors ${
                        isActive
                          ? "text-brand-mulberry"
                          : "text-[#1a1a1a]/70 hover:text-brand-mulberry"
                      }`}
                    >
                      {link.name}

                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-2 left-0 right-0 h-[1px] bg-brand-mulberry"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#1a1a1a] hover:text-brand-mulberry"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 MOBILE NAV */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#f5f2ed] border-b border-[#1a1a1a]/10 w-full"
        >
          <div className="space-y-1 px-4 pb-6 pt-4">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-sm uppercase tracking-[0.15em] font-medium border-b border-[#1a1a1a]/5 ${
                    isActive
                      ? "text-brand-mulberry"
                      : "text-[#1a1a1a]/70 hover:text-brand-mulberry"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </header>
  );
}