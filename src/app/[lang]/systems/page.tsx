import { getAllContent } from "../../../lib/data";
import SystemsClient from "./SystemsClient";

export default async function SystemsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const systems = getAllContent('systems');

  return <SystemsClient systems={systems} lang={lang} />;
}
