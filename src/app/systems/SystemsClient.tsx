"use client";

import { motion } from "motion/react";
import { Cpu, Layout, Box, ArrowRight } from "lucide-react";
import Link from "next/link";

const IconMap: Record<string, any> = {
  Box: Box,
  Cpu: Cpu,
  Layout: Layout,
};

export default function SystemsClient({ systems }: { systems: any[] }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-20">
          <span className="next-badge mb-6 inline-block">Product Entry</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
            Systems
          </h1>
          <p className="text-xl text-accents-5 max-w-2xl leading-relaxed">
            Structured Systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system, index) => {
            const Icon = IconMap[system.icon] || Box;
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="next-card group"
              >
                <div className="w-12 h-12 bg-accents-1 border border-accents-2 flex items-center justify-center rounded-xl mb-8 group-hover:border-foreground transition-colors">
                  <Icon size={24} className="text-foreground" />
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold tracking-tight mb-1">
                    {system.titleEn}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-accents-4">
                    {system.subtitleEn}
                  </p>
                </div>
                <p className="text-accents-5 leading-relaxed mb-10">
                  {system.descriptionEn}
                </p>
                <Link 
                  href={`/systems/${system.id}`}
                  className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accents-5 transition-colors"
                >
                  Explore System
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
