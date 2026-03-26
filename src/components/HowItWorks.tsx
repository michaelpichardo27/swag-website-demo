import { motion } from "framer-motion";
import { Dumbbell, BookOpen, Trophy } from "lucide-react";

const steps = [
  {
    icon: Dumbbell,
    step: "01",
    title: "Train with Elite Coaches",
    description: "Work with experienced trainers who develop speed, strength, agility, and sport-specific skills at the highest level.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Build Academic Eligibility",
    description: "Our academic advisors ensure you meet NCAA/NAIA eligibility requirements and maintain the GPA colleges demand.",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Get Recruited to College",
    description: "Gain exposure through showcases, highlight reels, and direct connections with college coaches nationwide.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">The Process</p>
          <h2 className="heading-display text-3xl md:text-5xl text-foreground">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-9 h-9 text-primary" />
              </div>
              <span className="font-display text-green-glow text-sm tracking-widest">{step.step}</span>
              <h3 className="heading-display text-xl md:text-2xl text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
