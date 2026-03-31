import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Cpu, Box, Layout, Activity } from "lucide-react";
import { systems } from "../data/systems";
import { useTranslation } from "../context/LanguageContext";
import ReactMarkdown from "react-markdown";

const IconMap: Record<string, any> = {
  Box: Box,
  Cpu: Cpu,
  Layout: Layout,
};

export default function SystemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useTranslation();
  
  const system = systems.find(s => s.id === id);

  if (!system) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">System not found</h1>
        <button 
          onClick={() => navigate("/systems")}
          className="mt-4 text-geist-success hover:underline"
        >
          {t('common.backToSystems')}
        </button>
      </div>
    );
  }

  const title = language === 'en' ? system.titleEn : system.titleZh;
  const subtitle = language === 'en' ? system.subtitleEn : system.subtitleZh;
  const content = language === 'en' ? system.contentEn : system.contentZh;
  const Icon = IconMap[system.icon] || Box;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button 
          onClick={() => navigate("/systems")}
          className="flex items-center gap-2 text-accents-5 hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">{t('common.backToSystems')}</span>
        </button>

        <div className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-accents-1 border border-accents-2 flex items-center justify-center rounded-2xl">
              <Icon size={32} className="text-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accents-4">{subtitle}</span>
                <span className="w-1 h-1 bg-accents-2 rounded-full" />
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                  system.status === 'active' ? 'border-geist-success text-geist-success bg-geist-success/5' :
                  system.status === 'beta' ? 'border-geist-warning text-geist-warning bg-geist-warning/5' :
                  'border-accents-3 text-accents-5 bg-accents-1'
                }`}>
                  {system.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                {title}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-accents-1 rounded-3xl border border-accents-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-accents-4 uppercase tracking-widest mb-4">
                <Activity size={14} />
                {t('system.progress')}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-accents-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${system.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-foreground"
                  />
                </div>
                <span className="text-sm font-bold">{system.progress}%</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-accents-4 uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-geist-success" />
                {t('system.status')}
              </div>
              <p className="text-sm font-medium text-accents-5">
                {t(`system.status.${system.status}.desc`)}
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-accents max-w-none dark:prose-invert prose-headings:tracking-tighter prose-headings:font-extrabold mb-20">
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>

        {system.updates.length > 0 && (
          <div className="border-t border-accents-2 pt-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-10">{t('system.updates')}</h2>
            <div className="space-y-8">
              {system.updates.map((update, idx) => (
                <div key={idx} className="relative pl-8 border-l border-accents-2">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-foreground" />
                  <div className="mb-2">
                    <span className="text-xs font-bold text-accents-4 uppercase tracking-widest">{update.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{language === 'en' ? update.titleEn : update.titleZh}</h3>
                  <p className="text-accents-5 text-sm leading-relaxed">
                    {language === 'en' ? update.contentEn : update.contentZh}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
