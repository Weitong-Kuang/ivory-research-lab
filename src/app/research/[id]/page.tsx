import { getAllContent, getContentById } from "../../../lib/data";
import ArticleDetailClient from "./ArticleDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getAllContent('articles');
  
  return articles.map(article => ({
    id: article.id
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getContentById('articles', id);

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient article={article} />;
}
