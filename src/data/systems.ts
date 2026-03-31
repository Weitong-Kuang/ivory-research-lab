import { loadAllContent } from '../lib/content';

export interface System {
  id: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  status: 'active' | 'beta' | 'planned';
  progress: number;
  icon: string; // lucide icon name
  contentEn: string;
  contentZh: string;
  updates: {
    date: string;
    titleEn: string;
    titleZh: string;
    contentEn: string;
    contentZh: string;
  }[];
}

const modules = import.meta.glob('/src/content/systems/*.md', { query: '?raw', import: 'default', eager: true });
export const systems = loadAllContent(modules as Record<string, string>) as System[];
