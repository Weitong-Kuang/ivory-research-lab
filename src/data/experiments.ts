import { getAllContent } from '../lib/data';

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

export const experiments = getAllContent('experiments') as Experiment[];
