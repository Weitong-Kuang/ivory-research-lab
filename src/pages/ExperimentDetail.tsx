import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Zap, Code, Terminal, Calendar, Activity } from "lucide-react";
import { experiments } from "../data/experiments";
import { useTranslation } from "../context/LanguageContext";
import ReactMarkdown from "react-markdown";

const IconMap: Record<string, any> = {
  Zap: Zap,
  Code: Code,
  Terminal: Terminal,
};

export default function ExperimentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useTranslation();
  
  const experiment = experiments.find(e => e.id === id);

  if (!experiment) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Experiment not found</h1>
        <button 
          onClick={() => navigate("/experiments")}
          className="mt-4 text-geist-success hover:underline"
        >
          {t('common.backToExperiments')}
        </button>
      </div>
    );
  }

  const title = language === 'en' ? experiment.titleEn : experiment.titleZh;
  const subtitle = language === 'en' ? experiment.subtitleEn : experiment.subtitleZh;
  const content = language === 'en' ? experiment.contentEn : experiment.contentZh;
  const results = language === 'en' ? experiment.resultsEn : experiment.resultsZh;
  const Icon = IconMap[experiment.icon] || Zap;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button 
          onClick={() => navigate("/experiments")}
          className="flex items-center gap-2 text-accents-5 hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">{t('common.backToExperiments')}</span>
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
                  experiment.status === 'ongoing' ? 'border-geist-success text-geist-success bg-geist-success/5' :
                  experiment.status === 'completed' ? 'border-geist-warning text-geist-warning bg-geist-warning/5' :
                  'border-accents-3 text-accents-5 bg-accents-1'
                }`}>
                  {experiment.status}
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
                <Calendar size={14} />
                {t('experiment.date')}
              </div>
              <p className="text-sm font-bold">{experiment.date}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-accents-4 uppercase tracking-widest mb-4">
                <Activity size={14} />
                {t('system.status')}
              </div>
              <p className="text-sm font-medium text-accents-5">
                {t(`experiment.status.${experiment.status}.desc`)}
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-accents max-w-none dark:prose-invert prose-headings:tracking-tighter prose-headings:font-extrabold mb-20">
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>

        <div className="border-t border-accents-2 pt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">{t('experiment.results')}</h2>
          <div className="p-8 bg-accents-1 rounded-3xl border border-accents-2 border-dashed">
            <p className="text-accents-5 leading-relaxed italic">
              "{results}"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
