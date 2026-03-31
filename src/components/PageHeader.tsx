import { motion } from "motion/react";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-20"
    >
      <span className="section-label">{label}</span>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-xl text-muted max-w-2xl leading-relaxed">
        {description}
      </p>
    </motion.section>
  );
}
