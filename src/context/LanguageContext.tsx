import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.systems': 'Systems',
    'nav.experiments': 'Experiments',
    'nav.about': 'About',
    'hero.title': 'The Future of Digital Existence.',
    'hero.subtitle': 'Ivory Research Lab is dedicated to the study of digital immortality, personality replication, and substrate independence.',
    'hero.cta.primary': 'Read Research',
    'hero.cta.secondary': 'View Logs',
    'nav.home.desc': 'System Entry + Current Status',
    'nav.research.desc': 'Experiment Log Center (Core Content)',
    'nav.systems.desc': 'Structured Systems',
    'nav.experiments.desc': 'Small Experiment Area (Rapid Validation)',
    'nav.about.desc': 'People + Goals + Methodology',
    'status.online': 'System Status: Online',
    'status.sync': 'Synchronized',
    'footer.tagline': 'Building the substrate for eternal consciousness.',
    'footer.rights': 'All rights reserved.',
    'home.latest': 'Latest Research',
    'home.logs': 'Transmission Logs',
    'search.placeholder': 'Search articles...',
    'search.noResults': 'No articles found matching your search.',
    'writing.title': 'Writing & Insights.',
    'writing.subtitle': 'Documenting our journey towards substrate independence and the evolution of digital consciousness.',
    'article.readMore': 'Read Article',
    'system.explore': 'Explore System',
    'experiment.view': 'View Experiment',
    'system.status': 'Status',
    'system.progress': 'Development Progress',
    'system.updates': 'System Updates',
    'experiment.results': 'Experiment Results',
    'experiment.date': 'Experiment Date',
    'common.back': 'Back',
    'common.backToSystems': 'Back to Systems',
    'common.backToExperiments': 'Back to Experiments',
    'system.status.active.desc': 'System is fully operational and undergoing continuous refinement.',
    'system.status.beta.desc': 'System is in active testing phase with limited access.',
    'system.status.planned.desc': 'System is currently in the architectural planning stage.',
    'experiment.status.ongoing.desc': 'Experiment is currently active and gathering data.',
    'experiment.status.completed.desc': 'Experiment has concluded and results are being analyzed.',
    'experiment.status.failed.desc': 'Experiment has been archived due to technical limitations or failure.',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.social': 'Social',
    'footer.language': 'Language',
    'footer.documentation': 'Documentation',
    'footer.blog': 'Blog',
    'footer.methodology': 'Methodology',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.github': 'GitHub',
    'footer.twitter': 'Twitter',
    'footer.discord': 'Discord',
    'home.intro': 'Ivory Lab is a research initiative exploring the intersection of digital consciousness and substrate independence.',
    'home.ongoing': 'Ongoing Experiments',
    'home.progress': 'Latest Progress Summary',
    'research.thinking': 'Public Thinking Stream',
    'systems.product': 'Product Entry',
    'experiments.chaos': 'Allow chaos, but must be public',
    'about.why': 'Why we do this',
    'about.what': 'What we are doing'
  },
  zh: {
    'nav.home': '首页',
    'nav.research': '研究',
    'nav.systems': '系统',
    'nav.experiments': '实验',
    'nav.about': '关于',
    'hero.title': '数字存在的未来。',
    'hero.subtitle': 'Ivory 研究实验室致力于数字永生、人格复制和基质独立性的研究。',
    'hero.cta.primary': '阅读研究',
    'hero.cta.secondary': '查看日志',
    'nav.home.desc': '系统入口 + 当前状态',
    'nav.research.desc': '实验记录中心（核心内容区）',
    'nav.systems.desc': '结构化系统',
    'nav.experiments.desc': '小型实验区（低成本试验）',
    'nav.about.desc': '人 + 目标 + 方法论',
    'status.online': '系统状态：在线',
    'status.sync': '已同步',
    'footer.tagline': '构建永恒意识的基质。',
    'footer.rights': '保留所有权利。',
    'home.latest': '最新研究',
    'home.logs': '传输日志',
    'search.placeholder': '搜索文章...',
    'search.noResults': '未找到匹配的文章。',
    'writing.title': '写作与洞察。',
    'writing.subtitle': '记录我们走向基质独立和数字意识演化的旅程。',
    'article.readMore': '阅读文章',
    'system.explore': '探索系统',
    'experiment.view': '查看实验',
    'system.status': '状态',
    'system.progress': '开发进度',
    'system.updates': '系统更新',
    'experiment.results': '实验结果',
    'experiment.date': '实验日期',
    'common.back': '返回',
    'common.backToSystems': '返回系统',
    'common.backToExperiments': '返回实验',
    'system.status.active.desc': '系统运行正常，正在进行持续优化。',
    'system.status.beta.desc': '系统处于活跃测试阶段，访问受限。',
    'system.status.planned.desc': '系统目前处于架构规划阶段。',
    'experiment.status.ongoing.desc': '实验目前处于活跃状态，正在收集数据。',
    'experiment.status.completed.desc': '实验已结束，正在分析结果。',
    'experiment.status.failed.desc': '由于技术限制或失败，实验已归档。',
    'footer.resources': '资源',
    'footer.legal': '法律',
    'footer.social': '社交',
    'footer.language': '语言',
    'footer.documentation': '文档',
    'footer.blog': '博客',
    'footer.methodology': '方法论',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.github': 'GitHub',
    'footer.twitter': 'Twitter',
    'footer.discord': 'Discord',
    'home.intro': 'Ivory Lab 是一个探索数字意识和基质独立性交叉领域的的研究计划。',
    'home.ongoing': '正在进行的“实验”',
    'home.progress': '最新进展摘要',
    'research.thinking': '公开思维流',
    'systems.product': '产品化入口',
    'experiments.chaos': '允许混乱，但必须公开',
    'about.why': '为什么这样做',
    'about.what': '你在做什么'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
