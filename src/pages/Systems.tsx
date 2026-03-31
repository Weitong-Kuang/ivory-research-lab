import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { Cpu, Layout, Box, ArrowRight } from "lucide-react";

export default function Systems() {
  const { t } = useTranslation();

  const systems = [
    {
      title: "Ivory System",
      subtitle: "Life Recording System",
      description: "A structured framework for capturing and organizing personal experiences, thoughts, and memories.",
      icon: <Box className="text-geist-success" size={24} />,
    },
    {
      title: "AI Assistant System",
      subtitle: "Cognitive Extension",
      description: "An integrated AI layer designed to augment human decision-making and knowledge management.",
      icon: <Cpu className="text-geist-warning" size={24} />,
    },
    {
      title: "Future App Modules",
      subtitle: "Experimental Interfaces",
      description: "Modular components for the next generation of digital interaction and substrate hosting.",
      icon: <Layout className="text-accents-5" size={24} />,
    },
  ];

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
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="next-card group"
            >
              <div className="w-12 h-12 bg-accents-1 border border-accents-2 flex items-center justify-center rounded-xl mb-8 group-hover:border-foreground transition-colors">
                {system.icon}
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold tracking-tight mb-1">{system.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-accents-4">{system.subtitle}</p>
              </div>
              <p className="text-accents-5 leading-relaxed mb-10">
                {system.description}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accents-5 transition-colors">
                Explore System
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
