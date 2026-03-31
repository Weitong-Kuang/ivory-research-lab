import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { Cpu, Layout, Box, ArrowRight } from "lucide-react";
import { systems } from "../data/systems";
import { Link } from "react-router-dom";

const IconMap: Record<string, any> = {
  Box: Box,
  Cpu: Cpu,
  Layout: Layout,
};

export default function Systems() {
  const { language, t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-20">
          <span className="next-badge mb-6 inline-block">{t('systems.product')}</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
            {t('nav.systems')}
          </h1>
          <p className="text-xl text-accents-5 max-w-2xl leading-relaxed">
            {t('nav.systems.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system, index) => {
            const Icon = IconMap[system.icon] || Box;
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="next-card group"
              >
                <div className="w-12 h-12 bg-accents-1 border border-accents-2 flex items-center justify-center rounded-xl mb-8 group-hover:border-foreground transition-colors">
                  <Icon size={24} className="text-foreground" />
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold tracking-tight mb-1">
                    {language === 'en' ? system.titleEn : system.titleZh}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-accents-4">
                    {language === 'en' ? system.subtitleEn : system.subtitleZh}
                  </p>
                </div>
                <p className="text-accents-5 leading-relaxed mb-10">
                  {language === 'en' ? system.descriptionEn : system.descriptionZh}
                </p>
                <Link 
                  to={`/systems/${system.id}`}
                  className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accents-5 transition-colors"
                >
                  {t('system.explore')}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
