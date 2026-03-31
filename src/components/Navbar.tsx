"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Terminal, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "../context/LanguageContext";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang as string;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${lang}`, label: t('nav.home') },
    { href: `/${lang}/research`, label: t('nav.research') },
    { href: `/${lang}/systems`, label: t('nav.systems') },
    { href: `/${lang}/experiments`, label: t('nav.experiments') },
    { href: `/${lang}/about`, label: t('nav.about') },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-accents-2 py-3" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform">
              <Terminal size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tighter leading-none">IVORY LAB</span>
              <span className="text-[10px] text-accents-5 font-medium">RESEARCH</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`next-nav-link ${isActive(link.href) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 text-accents-5 hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold tracking-tighter ${
                  isActive(link.href) ? "text-foreground" : "text-accents-5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
