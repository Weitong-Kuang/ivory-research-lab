import { loadAllContent } from '../lib/content';

export interface Article {
  id: string;
  titleEn: string;
  titleZh: string;
  date: string;
  category: string;
  excerptEn: string;
  excerptZh: string;
  contentEn: string;
  contentZh: string;
}

const modules = import.meta.glob('/src/content/articles/*.md', { query: '?raw', import: 'default', eager: true });
export const articles = loadAllContent(modules as Record<string, string>) as Article[];
