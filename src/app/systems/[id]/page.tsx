import { getAllContent, getContentById } from "../../../lib/data";
import SystemDetailClient from "./SystemDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const systems = getAllContent('systems');
  
  return systems.map(system => ({
    id: system.id
  }));
}

export default async function SystemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const system = getContentById('systems', id);

  if (!system) {
    notFound();
  }

  return <SystemDetailClient system={system} />;
}
