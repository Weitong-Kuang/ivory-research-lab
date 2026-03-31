"use client";

import { motion } from "motion/react";
import { useTranslation } from "../../../context/LanguageContext";
import ReactMarkdown from "react-markdown";

export default function AboutClient({ content }: { content: string }) {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="next-badge mb-6 inline-block">{t('nav.about.desc')}</span>
        
        <div className="prose prose-accents max-w-none dark:prose-invert prose-headings:tracking-tighter prose-headings:font-extrabold prose-h1:text-5xl md:prose-h1:text-7xl prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-p:text-xl prose-p:text-accents-5 prose-p:leading-relaxed prose-li:text-accents-5 prose-li:text-lg prose-hr:border-accents-2">
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
