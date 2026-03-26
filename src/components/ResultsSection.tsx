import { motion } from "framer-motion";
import { Users, DollarSign, School, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Athletes Placed in College Programs" },
  { icon: DollarSign, value: "$2M+", label: "In Scholarships Earned" },
  { icon: School, value: "30+", label: "Partner College Programs" },
  { icon: Award, value: "95%", label: "Academic Eligibility Rate" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="section-padding bg-surface-dark text-surface-dark-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-glow font-display uppercase tracking-[0.2em] text-sm mb-3">Proven Track Record</p>
          <h2 className="heading-display text-3xl md:text-5xl">Real Results</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-green-glow mx-auto mb-4" />
              <div className="heading-display text-4xl md:text-5xl text-green-glow mb-2">{stat.value}</div>
              <p className="text-surface-dark-foreground/60 text-sm leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
