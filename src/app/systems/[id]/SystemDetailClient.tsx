"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Cpu, Box, Layout, Activity, Clock, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const IconMap: Record<string, any> = {
  Box: Box,
  Cpu: Cpu,
  Layout: Layout,
};

type Tab = 'overview' | 'updates';

export default function SystemDetailClient({ system }: { system: any }) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  
  const Icon = IconMap[system.icon] || Box;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link 
          href="/systems"
          className="flex items-center gap-2 text-accents-5 hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Systems</span>
        </Link>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-accents-1 border border-accents-2 flex items-center justify-center rounded-2xl shrink-0">
              <Icon size={32} className="text-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accents-4">{system.subtitleEn}</span>
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
                {system.titleEn}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-accents-1 rounded-3xl border border-accents-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-accents-4 uppercase tracking-widest mb-4">
                <Activity size={14} />
                Progress
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
                Status
              </div>
              <p className="text-sm font-medium text-accents-5">
                {system.status === 'active' ? 'System is fully operational' :
                 system.status === 'beta' ? 'System is in beta testing' :
                 'System is planned for future development'}
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
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('updates')}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors relative ${
              activeTab === 'updates' ? 'text-foreground' : 'text-accents-4 hover:text-accents-6'
            }`}
          >
            <div className="flex items-center gap-2">
              <Clock size={14} />
              Updates
              {system.updates?.length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-accents-2 text-[10px] rounded-full">
                  {system.updates.length}
                </span>
              )}
            </div>
            {activeTab === 'updates' && (
              <motion.div 
                layoutId="activeTab"
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
                <ReactMarkdown>{system.contentEn}</ReactMarkdown>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="updates"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="mb-20"
            >
              {system.updates?.length > 0 ? (
                <div className="space-y-12">
                  {system.updates.map((update: any, idx: number) => (
                    <div key={idx} className="relative pl-10 border-l border-accents-2">
                      <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-foreground border-4 border-background" />
                      <div className="mb-3">
                        <span className="text-xs font-bold text-accents-4 uppercase tracking-widest px-2 py-1 bg-accents-1 border border-accents-2 rounded-md">
                          {update.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold tracking-tight mb-3">
                        {update.titleEn}
                      </h3>
                      <p className="text-accents-5 text-lg leading-relaxed max-w-2xl">
                        {update.contentEn}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center bg-accents-1 rounded-3xl border border-dashed border-accents-2">
                  <p className="text-accents-4 font-medium">No updates recorded for this system yet.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
