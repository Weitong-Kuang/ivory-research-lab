import { getAllContent } from '../lib/data';

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
  showOnHome?: boolean;
}

export const systems = getAllContent('systems') as System[];
