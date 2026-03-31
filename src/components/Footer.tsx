"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const { t } = useTranslation();
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const lang = params.lang as string;

  const switchLanguage = (newLang: string) => {
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPathname);
  };

  return (
    <footer className="bg-accents-1 border-t border-accents-2 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-6">
              <Terminal size={24} />
              <span className="font-bold tracking-tighter text-xl">IVORY RESEARCH LAB</span>
            </Link>
            <p className="text-accents-5 text-sm max-w-sm leading-relaxed mb-8">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-geist-success rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-accents-5">{t('status.online')}</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accents-3">|</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accents-5">{t('status.sync')}</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accents-8 mb-6">{t('footer.resources')}</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href={`/${lang}/research`} className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('nav.research')}</Link></li>
              <li><Link href={`/${lang}/systems`} className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('nav.systems')}</Link></li>
              <li><Link href={`/${lang}/experiments`} className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('nav.experiments')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accents-8 mb-6">{t('footer.social')}</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('footer.github')}</a></li>
              <li><a href="#" className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('footer.twitter')}</a></li>
              <li><a href="#" className="text-sm text-accents-5 hover:text-foreground transition-colors">{t('footer.discord')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accents-8 mb-6">{t('footer.language')}</h4>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => switchLanguage('en')}
                className={`text-sm text-left transition-colors ${lang === 'en' ? 'text-foreground font-bold' : 'text-accents-5 hover:text-foreground'}`}
              >
                English
              </button>
              <button 
                onClick={() => switchLanguage('zh')}
                className={`text-sm text-left transition-colors ${lang === 'zh' ? 'text-foreground font-bold' : 'text-accents-5 hover:text-foreground'}`}
              >
                简体中文
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accents-2 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accents-4">
            © 2026 IVORY RESEARCH LAB. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${lang}`} className="text-[10px] font-bold uppercase tracking-widest text-accents-5 hover:text-foreground transition-colors">{t('footer.privacy')}</Link>
            <Link href={`/${lang}`} className="text-[10px] font-bold uppercase tracking-widest text-accents-5 hover:text-foreground transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
