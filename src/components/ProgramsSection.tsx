import { motion } from "framer-motion";
import { Dumbbell, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Dumbbell,
    title: "Athletic Training",
    description: "Sport-specific training programs designed to build explosive speed, power, and elite-level performance under the guidance of professional coaches.",
    to: "/training",
  },
  {
    icon: Users,
    title: "Join SWAG",
    description: "Take the next step with our team. Apply to train with SWAG and get a coordinator to walk you through options and scheduling.",
    to: "/join",
  },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">What We Offer</p>
          <h2 className="heading-display text-3xl md:text-5xl text-foreground">Our Programs</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {programs.map((program, i) => (
            <motion.div key={program.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card rounded-lg border border-border p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="heading-display text-xl md:text-2xl text-foreground mb-3">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
              <Button asChild variant="ghost" className="text-primary hover:text-green-glow font-medium px-0">
                <Link to={program.to}>Learn More →</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
