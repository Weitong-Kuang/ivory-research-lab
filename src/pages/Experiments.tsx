import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { Zap, Code, Terminal, ArrowRight } from "lucide-react";

export default function Experiments() {
  const { t } = useTranslation();

  const experiments = [
    {
      title: "UI Demos",
      subtitle: "Visual Experiments",
      description: "Exploration of new interface patterns and interaction models for digital consciousness.",
      icon: <Zap className="text-geist-success" size={24} />,
    },
    {
      title: "Small Tools",
      subtitle: "Utility Prototypes",
      description: "Quickly validated tools for data capture and neural mapping efficiency.",
      icon: <Code className="text-geist-warning" size={24} />,
    },
    {
      title: "Failed Projects",
      subtitle: "Learning Logs",
      description: "Documenting the failures and lessons learned during the development process.",
      icon: <Terminal className="text-accents-5" size={24} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-20">
          <span className="next-badge mb-6 inline-block">{t('experiments.chaos')}</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
            {t('nav.experiments')}
          </h1>
          <p className="text-xl text-accents-5 max-w-2xl leading-relaxed">
            {t('nav.experiments.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((experiment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="next-card group"
            >
              <div className="w-12 h-12 bg-accents-1 border border-accents-2 flex items-center justify-center rounded-xl mb-8 group-hover:border-foreground transition-colors">
                {experiment.icon}
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold tracking-tight mb-1">{experiment.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-accents-4">{experiment.subtitle}</p>
              </div>
              <p className="text-accents-5 leading-relaxed mb-10">
                {experiment.description}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accents-5 transition-colors">
                View Experiment
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
