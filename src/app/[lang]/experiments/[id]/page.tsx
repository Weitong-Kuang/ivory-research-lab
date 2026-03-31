import { getAllContent, getContentById } from "../../../../lib/data";
import ExperimentDetailClient from "./ExperimentDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const experiments = getAllContent('experiments');
  const locales = ['en', 'zh'];
  
  const params: { lang: string; id: string }[] = [];
  locales.forEach(lang => {
    experiments.forEach(experiment => {
      params.push({ lang, id: experiment.id });
    });
  });
  
  return params;
}

export default async function ExperimentDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const experiment = getContentById('experiments', id);

  if (!experiment) {
    notFound();
  }

  return <ExperimentDetailClient experiment={experiment} lang={lang} />;
}
