import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Athletes training" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/60 to-surface-dark/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-green-glow font-display uppercase tracking-[0.3em] text-sm md:text-base mb-6">
          Student-Athlete Development
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="heading-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-surface-dark-foreground mb-6">
          Helping Student-Athletes Get to the <span className="text-green-glow">Next Level</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-surface-dark-foreground/70 text-base md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          Elite training, academic support, and recruiting guidance for athletes ready to compete at the next level
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base px-8 py-6 font-display uppercase tracking-wider">
            <Link to="/join">Join SWAG</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 font-display uppercase tracking-wider border-2 border-green-glow bg-transparent text-green-glow hover:bg-green-glow/15 hover:text-green-glow"
          >
            <Link to="/training">Explore Programs</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-surface-dark-foreground/30 rounded-full flex justify-center">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 bg-green-glow rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
