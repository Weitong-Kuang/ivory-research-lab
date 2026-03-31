import fs from 'fs';
import path from 'path';
import { parseContent } from './content';
import { Article, System, Experiment } from '../types';

const contentDir = path.join(process.cwd(), 'src/content');

export function getAllContent(type: string) {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const id = file.replace('.md', '');
      const fullPath = path.join(dir, file);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { metadata, contentEn, contentZh } = parseContent(raw);
      return {
        id,
        ...metadata,
        contentEn,
        contentZh
      };
    });
}

export function getContentById(type: string, id: string) {
  const dir = path.join(contentDir, type);
  const fullPath = path.join(dir, `${id}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, 'utf8');
  const { metadata, contentEn, contentZh } = parseContent(raw);
  return {
    id,
    ...metadata,
    contentEn,
    contentZh
  };
}
