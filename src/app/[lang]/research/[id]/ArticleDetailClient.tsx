"use client";

import { motion } from "motion/react";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useTranslation } from "../../../../context/LanguageContext";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function ArticleDetailClient({ article, lang }: { article: any, lang: string }) {
  const { language } = useTranslation();
  
  const title = language === 'en' ? article.titleEn : article.titleZh;
  const content = language === 'en' ? article.contentEn : article.contentZh;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link 
          href={`/${lang}/research`}
          className="flex items-center gap-2 text-accents-5 hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Journal</span>
        </Link>

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
