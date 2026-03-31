import { getAllContent, getContentById } from "../../../../lib/data";
import ArticleDetailClient from "./ArticleDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getAllContent('articles');
  const locales = ['en', 'zh'];
  
  const params: { lang: string; id: string }[] = [];
  locales.forEach(lang => {
    articles.forEach(article => {
      params.push({ lang, id: article.id });
    });
  });
  
  return params;
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const article = getContentById('articles', id);

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient article={article} lang={lang} />;
}
