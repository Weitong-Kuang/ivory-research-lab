import { getAllContent, getContentById } from "../../../../lib/data";
import SystemDetailClient from "./SystemDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const systems = getAllContent('systems');
  const locales = ['en', 'zh'];
  
  const params: { lang: string; id: string }[] = [];
  locales.forEach(lang => {
    systems.forEach(system => {
      params.push({ lang, id: system.id });
    });
  });
  
  return params;
}

export default async function SystemDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const system = getContentById('systems', id);

  if (!system) {
    notFound();
  }

  return <SystemDetailClient system={system} lang={lang} />;
}
