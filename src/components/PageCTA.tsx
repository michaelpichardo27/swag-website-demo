import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PageCTAProps {
  headline?: string;
  description?: string;
  buttonLabel?: string;
  buttonTo?: string;
}

const PageCTA = ({
  headline = "Ready to Get Started?",
  description = "Join SWAG and take the first step toward your future in college athletics.",
  buttonLabel = "Join SWAG",
  buttonTo = "/join",
}: PageCTAProps) => {
  return (
    <section className="section-padding bg-surface-dark text-surface-dark-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="heading-display text-3xl md:text-5xl mb-4">{headline}</h2>
        <p className="text-surface-dark-foreground/60 mb-8 leading-relaxed">{description}</p>
        <Button asChild size="lg" className="font-display uppercase tracking-wider px-10 py-6 text-base">
          <Link to={buttonTo}>{buttonLabel}</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default PageCTA;
