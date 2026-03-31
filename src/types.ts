export interface Article {
  id: string;
  titleEn: string;
  titleZh: string;
  excerptEn: string;
  excerptZh: string;
  contentEn: string;
  contentZh: string;
  date: string;
  category: string;
}

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
  icon: string;
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

export interface Experiment {
  id: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  status: 'ongoing' | 'completed' | 'planned';
  date: string;
  icon: string;
  contentEn: string;
  contentZh: string;
  resultsEn: string;
  resultsZh: string;
}
