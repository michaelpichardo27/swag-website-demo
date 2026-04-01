import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { isExternalHref } from "@/lib/joinSwagUrl";

interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaTo?: string;
}

const PageHero = ({ tag, title, description, ctaLabel, ctaTo }: PageHeroProps) => {
  return (
    <section className="relative bg-surface-dark text-surface-dark-foreground pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green-glow/5" />
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-green-glow font-display uppercase tracking-[0.3em] text-sm mb-4"
        >
          {tag}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-surface-dark-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
        {ctaLabel && ctaTo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Button asChild size="lg" className="font-display uppercase tracking-wider px-8 py-6 text-base">
              {isExternalHref(ctaTo) ? (
                <a href={ctaTo} target="_blank" rel="noopener noreferrer">
                  {ctaLabel}
                </a>
              ) : (
                <Link to={ctaTo}>{ctaLabel}</Link>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
