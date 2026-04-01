"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Zap, Code, Terminal, Calendar, Activity, FileText, BarChart3 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const IconMap: Record<string, any> = {
  Zap: Zap,
  Code: Code,
  Terminal: Terminal,
};

type Tab = 'overview' | 'results';

export default function ExperimentDetailClient({ experiment }: { experiment: any }) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  
  const Icon = IconMap[experiment.icon] || Zap;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link 
          href="/experiments"
          className="flex items-center gap-2 text-accents-5 hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Experiments</span>
        </Link>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-accents-1 border border-accents-2 flex items-center justify-center rounded-2xl shrink-0">
              <Icon size={32} className="text-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accents-4">{experiment.subtitleEn}</span>
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
                {experiment.titleEn}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-accents-1 rounded-3xl border border-accents-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-accents-4 uppercase tracking-widest mb-4">
                <Calendar size={14} />
                Date
              </div>
              <p className="text-sm font-bold">{experiment.date}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-accents-4 uppercase tracking-widest mb-4">
                <Activity size={14} />
                Status
              </div>
              <p className="text-sm font-medium text-accents-5">
                {experiment.status === 'ongoing' ? 'Experiment is currently in progress' :
                 experiment.status === 'completed' ? 'Experiment has been completed' :
                 'Experiment has failed to complete'}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-accents-2 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors relative ${
              activeTab === 'overview' ? 'text-foreground' : 'text-accents-4 hover:text-accents-6'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText size={14} />
              Overview
            </div>
            {activeTab === 'overview' && (
              <motion.div 
                layoutId="activeTabExp"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors relative ${
              activeTab === 'results' ? 'text-foreground' : 'text-accents-4 hover:text-accents-6'
            }`}
          >
            <div className="flex items-center gap-2">
              <BarChart3 size={14} />
              Results
            </div>
            {activeTab === 'results' && (
              <motion.div 
                layoutId="activeTabExp"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
              />
            )}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="prose prose-accents max-w-none dark:prose-invert prose-headings:tracking-tighter prose-headings:font-extrabold mb-20"
            >
              <div className="markdown-body">
                <ReactMarkdown>{experiment.contentEn}</ReactMarkdown>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="mb-20"
            >
              <div className="p-10 bg-accents-1 rounded-3xl border border-accents-2 border-dashed relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BarChart3 size={120} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-accents-4 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-geist-success" />
                  Final Findings
                </h3>
                <p className="text-2xl font-medium text-accents-6 leading-relaxed italic relative z-10">
                  &quot;{experiment.resultsEn}&quot;
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
