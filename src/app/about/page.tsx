import fs from 'fs';
import path from 'path';
import AboutClient from "./AboutClient";

export default async function AboutPage() {
  const contentPath = path.join(process.cwd(), `src/content/about/en.md`);
  const content = fs.existsSync(contentPath) ? fs.readFileSync(contentPath, 'utf8') : '';

  return <AboutClient content={content} />;
}
