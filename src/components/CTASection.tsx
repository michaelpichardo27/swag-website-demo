import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding bg-surface-dark text-surface-dark-foreground">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <p className="text-green-glow font-display uppercase tracking-[0.2em] text-sm mb-3">Get Started</p>
          <h2 className="heading-display text-3xl md:text-5xl mb-4">Start Your Journey Today</h2>
          <p className="text-surface-dark-foreground/60 mb-8">Ready to take the next step? Fill out our application and a SWAG coordinator will reach out within 24 hours.</p>
          <Button asChild size="lg" className="font-display uppercase tracking-wider px-10 py-6 text-base">
            <Link to="/join">Apply Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
