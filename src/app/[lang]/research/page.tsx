import { getAllContent } from "../../../lib/data";
import ResearchClient from "./ResearchClient";

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const articles = getAllContent('articles');

  return <ResearchClient articles={articles} lang={lang} />;
}
