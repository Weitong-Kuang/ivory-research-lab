import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="next-badge mb-6 inline-block">{t('nav.about.desc')}</span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-8">
          {t('nav.about')}
        </h1>
        <div className="prose prose-accents max-w-none">
          <h2 className="text-2xl font-bold mb-4">{t('about.what')}</h2>
          <p className="text-xl text-accents-5 leading-relaxed mb-8">
            {t('hero.subtitle')}
          </p>
          <h2 className="text-2xl font-bold mb-4">{t('about.why')}</h2>
          <p className="text-accents-6 leading-relaxed mb-8">
            {t('footer.tagline')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="next-card">
            <h3 className="text-lg font-bold mb-4">Core Values</h3>
            <ul className="space-y-3 text-sm text-accents-5">
              <li>• Transparency in neural mapping</li>
              <li>• Ethical personality replication</li>
              <li>• Substrate-agnostic consciousness</li>
              <li>• Universal access to digital life</li>
            </ul>
          </div>
          <div className="next-card">
            <h3 className="text-lg font-bold mb-4">Research Focus</h3>
            <ul className="space-y-3 text-sm text-accents-5">
              <li>• Synaptic connectivity mapping</li>
              <li>• Behavioral pattern synthesis</li>
              <li>• Decentralized substrate hosting</li>
              <li>• Post-biological legal frameworks</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
