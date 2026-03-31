import { motion } from "motion/react";
import { ChevronRight, ArrowRight, Zap, Shield, Globe, Cpu, Box, Layout, HelpCircle } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { experiments } from "../data/experiments";
import { systems } from "../data/systems";

const IconComponent = ({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) => {
  const icons: Record<string, any> = { Zap, Shield, Globe, Cpu, Box, Layout };
  const Icon = icons[name] || HelpCircle;
  return <Icon size={size} className={className} />;
};

export default function Home() {
  const { t, language } = useTranslation();

  const homeSystems = systems.filter(s => s.showOnHome).slice(0, 3);
  const homeExperiments = experiments.filter(e => e.showOnHome).slice(0, 1);
  const featuredExperiment = homeExperiments[0];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 next-grid-bg -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="next-badge mb-6 inline-block">
              {t('nav.home.desc')}
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-accents-5">
              IVORY LAB.
            </h1>
            <p className="text-xl text-accents-5 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('home.intro')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/research" className="next-button-primary !px-8 !py-3 text-base">
                {t('hero.cta.primary')}
              </Link>
              <Link to="/experiments" className="next-button-secondary !px-8 !py-3 text-base">
                {t('nav.experiments')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Status / Progress Summary */}
      <section className="py-24 border-t border-accents-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">{t('home.progress')}</h2>
            <p className="text-accents-5">{t('nav.home.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeSystems.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/systems/${system.id}`} className="next-card group block h-full">
                  <div className="w-10 h-10 bg-accents-1 rounded-lg flex items-center justify-center mb-6 border border-accents-2 group-hover:border-foreground transition-colors">
                    <IconComponent name={system.icon} className="text-geist-success" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {language === 'en' ? system.titleEn : system.titleZh}
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-accents-5 text-sm leading-relaxed">
                    {language === 'en' ? system.descriptionEn : system.descriptionZh}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Experiments */}
      <section className="py-24 bg-accents-1 border-t border-accents-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">{t('home.ongoing')}</h2>
            <p className="text-accents-5">{t('nav.experiments.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {featuredExperiment ? (
              <Link to={`/experiments/${featuredExperiment.id}`} className="md:col-span-8 next-card bg-background flex flex-col justify-between min-h-[400px] group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="next-badge uppercase">{featuredExperiment.status}</span>
                    <IconComponent name={featuredExperiment.icon} className="text-geist-warning" />
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter mb-6 group-hover:text-geist-success transition-colors">
                    {language === 'en' ? featuredExperiment.titleEn : featuredExperiment.titleZh}
                  </h2>
                  <p className="text-accents-5 max-w-md">
                    {language === 'en' ? featuredExperiment.descriptionEn : featuredExperiment.descriptionZh}
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-accents-2 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-accents-2 border-2 border-background" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-accents-4 uppercase tracking-widest flex items-center gap-2">
                    {t('home.researchers.active')}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </span>
                </div>
              </Link>
            ) : (
              <div className="md:col-span-8 next-card bg-background flex items-center justify-center min-h-[400px]">
                <p className="text-accents-4">No ongoing experiments featured.</p>
              </div>
            )}
            
            <div className="md:col-span-4 next-card bg-foreground text-background flex flex-col justify-center items-center text-center">
              <Globe size={48} className="mb-6 text-geist-success" />
              <h3 className="text-2xl font-bold tracking-tighter mb-4">{t('home.network.title')}</h3>
              <p className="text-accents-4 text-sm mb-8">
                {t('home.network.desc')}
              </p>
              <Link to="/about" className="w-full py-3 bg-background text-foreground rounded-md font-bold text-sm hover:bg-accents-2 transition-colors text-center">
                {t('home.network.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
