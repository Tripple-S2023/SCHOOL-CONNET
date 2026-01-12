import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, alignment = "center", className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"} ${className}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-serif font-bold text-primary relative inline-block"
      >
        {title}
        {alignment === "center" && (
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary rounded-full"></span>
        )}
        {alignment === "left" && (
          <span className="absolute -bottom-4 left-0 w-16 h-1 bg-secondary rounded-full"></span>
        )}
      </motion.h2>
    </div>
  );
}
