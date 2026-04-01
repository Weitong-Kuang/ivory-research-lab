"use client";

import { motion } from "motion/react";
import { ArrowRight, BookOpen, Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ResearchClient({ articles }: { articles: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const title = article.titleEn;
    const excerpt = article.excerptEn;
    const query = searchQuery.toLowerCase();
    return (
      title.toLowerCase().includes(query) ||
      excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-20">
          <span className="next-badge mb-6 inline-block">Experiment Log Center (Core Content)</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
            Public Thinking Stream
          </h1>
          <p className="text-xl text-accents-5 leading-relaxed mb-12">
            Documenting our journey towards substrate independence and the evolution of digital consciousness.
          </p>

          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-accents-4" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="block w-full pl-10 pr-3 py-3 border border-accents-2 rounded-xl bg-accents-1 text-foreground placeholder-accents-4 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-accents-3 transition-all sm:text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-12">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/research/${article.id}`} className="block">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold text-accents-4 uppercase tracking-widest">{article.date}</span>
                    <span className="w-1 h-1 bg-accents-2 rounded-full" />
                    <span className="text-xs font-bold text-geist-success uppercase tracking-widest">{article.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4 group-hover:text-accents-5 transition-colors flex items-center justify-between">
                    {article.titleEn}
                    <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </h2>
                  <p className="text-accents-5 leading-relaxed mb-6">
                    {article.excerptEn}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <BookOpen size={16} />
                    <span>Read Article</span>
                  </div>
                </Link>
              </motion.article>
            ))
          ) : (
            <div className="text-center py-20 bg-accents-1 rounded-2xl border border-dashed border-accents-2">
              <p className="text-accents-5 font-medium">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
