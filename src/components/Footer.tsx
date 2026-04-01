"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accents-1 border-t border-accents-2 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Terminal size={24} />
              <span className="font-bold tracking-tighter text-xl">IVORY RESEARCH LAB</span>
            </Link>
            <p className="text-accents-5 text-sm max-w-sm leading-relaxed mb-8">
              Building the substrate for eternal consciousness.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-geist-success rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-accents-5">System Status: Online</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accents-3">|</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accents-5">Synchronized</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accents-8 mb-6">Resources</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/research" className="text-sm text-accents-5 hover:text-foreground transition-colors">Research</Link></li>
              <li><Link href="/systems" className="text-sm text-accents-5 hover:text-foreground transition-colors">Systems</Link></li>
              <li><Link href="/experiments" className="text-sm text-accents-5 hover:text-foreground transition-colors">Experiments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accents-8 mb-6">Social</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-sm text-accents-5 hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="#" className="text-sm text-accents-5 hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-accents-5 hover:text-foreground transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-accents-2 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accents-4">
            © 2026 IVORY RESEARCH LAB. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-accents-5 hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-accents-5 hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
