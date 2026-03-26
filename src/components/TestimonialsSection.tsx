import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SWAG completely changed my son's trajectory. He went from being overlooked to receiving three Division I offers. The coaches truly care about each athlete's future.",
    name: "Maria Johnson",
    role: "Parent of D1 Football Player",
  },
  {
    quote: "The academic support was a game-changer. I was struggling with eligibility, but SWAG helped me get my grades up and connected me with a college that was the perfect fit.",
    name: "Jaylen Carter",
    role: "College Basketball Player",
  },
  {
    quote: "As a parent, I needed to trust the people guiding my daughter's future. SWAG delivered on every promise — she earned a full scholarship and is thriving on campus.",
    name: "David Williams",
    role: "Parent of D2 Soccer Player",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Success Stories</p>
          <h2 className="heading-display text-3xl md:text-5xl text-foreground">What Families Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-lg border border-border p-8 shadow-card relative"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-display uppercase tracking-wide text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
