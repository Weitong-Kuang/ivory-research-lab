import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Terminal, Globe, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "../context/LanguageContext";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/research", label: t('nav.research') },
    { href: "/systems", label: t('nav.systems') },
    { href: "/experiments", label: t('nav.experiments') },
    { href: "/about", label: t('nav.about') },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-geist-success/20">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-accents-2 py-3" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform">
                <Terminal size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tighter leading-none">IVORY LAB</span>
                <span className="text-[10px] text-accents-5 font-medium">RESEARCH</span>
              </div>
            </NavLink>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) => `next-nav-link ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </NavLink>
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
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `text-2xl font-bold tracking-tighter ${
                  isActive ? "text-foreground" : "text-accents-5"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-accents-1 border-t border-accents-2 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <NavLink to="/" className="flex items-center gap-2 mb-6">
                <Terminal size={24} />
                <span className="font-bold tracking-tighter text-xl">IVORY RESEARCH LAB</span>
              </NavLink>
              <p className="text-accents-5 text-sm max-w-sm leading-relaxed mb-8">
                {t('footer.tagline')}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-geist-success rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accents-5">{t('status.online')}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accents-3">|</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accents-5">{t('status.sync')}</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-accents-8 mb-6">{t('footer.resources')}</h4>
              <ul className="flex flex-col gap-4">
                <li><NavLink to="/research" className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('nav.research')}</NavLink></li>
                <li><NavLink to="/systems" className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('nav.systems')}</NavLink></li>
                <li><NavLink to="/experiments" className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('nav.experiments')}</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-accents-8 mb-6">{t('footer.social')}</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('footer.github')}</a></li>
                <li><a href="#" className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('footer.twitter')}</a></li>
                <li><a href="#" className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('footer.discord')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-accents-8 mb-6">{t('footer.language')}</h4>
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`text-sm text-left transition-colors ${language === 'en' ? 'text-foreground font-bold' : 'text-accents-5 hover:text-foreground'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage('zh')}
                  className={`text-sm text-left transition-colors ${language === 'zh' ? 'text-foreground font-bold' : 'text-accents-5 hover:text-foreground'}`}
                >
                  简体中文
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-accents-2 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accents-4">
              © 2026 IVORY RESEARCH LAB. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <NavLink to="/" className="text-[10px] font-bold uppercase tracking-widest text-accents-5 hover:text-foreground transition-colors">{t('footer.privacy')}</NavLink>
              <NavLink to="/" className="text-[10px] font-bold uppercase tracking-widest text-accents-5 hover:text-foreground transition-colors">{t('footer.terms')}</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
