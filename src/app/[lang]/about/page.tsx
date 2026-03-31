import fs from 'fs';
import path from 'path';
import AboutClient from "./AboutClient";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const contentPath = path.join(process.cwd(), `src/content/about/${lang}.md`);
  const content = fs.existsSync(contentPath) ? fs.readFileSync(contentPath, 'utf8') : '';

  return <AboutClient content={content} />;
}
