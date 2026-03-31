import { getAllContent } from "../../../lib/data";
import ExperimentsClient from "./ExperimentsClient";

export default async function ExperimentsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const experiments = getAllContent('experiments');

  return <ExperimentsClient experiments={experiments} lang={lang} />;
}
