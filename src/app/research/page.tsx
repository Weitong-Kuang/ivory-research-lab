import { getAllContent } from "../../lib/data";
import ResearchClient from "./ResearchClient";

export default async function ResearchPage() {
  const articles = getAllContent('articles');

  return <ResearchClient articles={articles} />;
}
