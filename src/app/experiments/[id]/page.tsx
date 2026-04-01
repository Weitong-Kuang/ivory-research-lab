import { getAllContent, getContentById } from "../../../lib/data";
import ExperimentDetailClient from "./ExperimentDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const experiments = getAllContent('experiments');
  
  return experiments.map(experiment => ({
    id: experiment.id
  }));
}

export default async function ExperimentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experiment = getContentById('experiments', id);

  if (!experiment) {
    notFound();
  }

  return <ExperimentDetailClient experiment={experiment} />;
}
