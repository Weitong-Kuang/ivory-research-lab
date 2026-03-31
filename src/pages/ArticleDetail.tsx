import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { articles } from "../data/articles";
import { useTranslation } from "../context/LanguageContext";
import ReactMarkdown from "react-markdown";

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useTranslation();
  
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <button 
          onClick={() => navigate("/writing")}
          className="mt-4 text-geist-success hover:underline"
        >
          Back to Writing
        </button>
      </div>
    );
  }

  const title = language === 'en' ? article.titleEn : article.titleZh;
  const content = language === 'en' ? article.contentEn : article.contentZh;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button 
          onClick={() => navigate("/writing")}
          className="flex items-center gap-2 text-accents-5 hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Journal</span>
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-accents-4 uppercase tracking-widest">
              <Calendar size={14} />
              {article.date}
            </div>
            <span className="w-1 h-1 bg-accents-2 rounded-full" />
            <div className="flex items-center gap-2 text-xs font-bold text-geist-success uppercase tracking-widest">
              <Tag size={14} />
              {article.category}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
            {title}
          </h1>
        </div>

        <div className="prose prose-accents max-w-none dark:prose-invert prose-headings:tracking-tighter prose-headings:font-extrabold">
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
