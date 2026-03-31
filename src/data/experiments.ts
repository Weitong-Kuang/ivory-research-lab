import { loadAllContent } from '../lib/content';

export interface Experiment {
  id: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  status: 'ongoing' | 'completed' | 'failed';
  icon: string; // lucide icon name
  contentEn: string;
  contentZh: string;
  resultsEn: string;
  resultsZh: string;
  date: string;
  showOnHome?: boolean;
}

const modules = import.meta.glob('/src/content/experiments/*.md', { query: '?raw', import: 'default', eager: true });
export const experiments = loadAllContent(modules as Record<string, string>) as Experiment[];
