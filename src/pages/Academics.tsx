import { motion } from "framer-motion";
import { BookOpen, GraduationCap, ClipboardCheck, Users, Brain, Calendar, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import Footer from "@/components/Footer";

const services = [
  { icon: BookOpen, title: "Tutoring", description: "One-on-one and small group tutoring in core subjects, test preparation, and study skills to keep your grades on track." },
  { icon: ClipboardCheck, title: "GPA Monitoring", description: "Regular GPA check-ins and academic progress reports to ensure you stay on track for eligibility and college admissions." },
  { icon: GraduationCap, title: "Eligibility Guidance", description: "Expert guidance on NCAA, NAIA, and NJCAA eligibility requirements including core course tracking and clearinghouse registration." },
  { icon: Users, title: "Mentoring", description: "Pairing athletes with mentors who understand the unique challenges of balancing academics and athletics at a high level." },
  { icon: Brain, title: "Academic Planning", description: "Course selection guidance, college prep planning, and SAT/ACT preparation to position you for academic scholarships." },
  { icon: Calendar, title: "Time Management", description: "Tools and coaching to help you balance practice, games, school, and personal life without burning out." },
];

const faqs = [
  { q: "What GPA do I need for NCAA eligibility?", a: "The NCAA requires a minimum 2.3 GPA in core courses for Division I and a 2.2 GPA for Division II. However, we recommend aiming for a 3.0+ to maximize your recruiting options and scholarship potential." },
  { q: "Do you help with SAT/ACT preparation?", a: "Yes. We offer test prep resources and connect athletes with tutors who specialize in SAT and ACT preparation. Many college programs have minimum test score requirements." },
  { q: "How often are tutoring sessions?", a: "Tutoring sessions are available 3-5 days per week depending on the athlete's needs. We also offer virtual tutoring for flexibility." },
  { q: "Can parents track academic progress?", a: "Absolutely. Parents receive monthly academic progress reports and have direct access to our academic coordinators for questions or concerns." },
  { q: "What grades do you work with?", a: "We work with student-athletes in grades 9-12. Early enrollment (starting in 9th grade) gives athletes the best chance of meeting all eligibility requirements." },
];

const Academics = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        tag="Academic Support"
        title="Academics That Open Doors"
        description="Strong academics are the foundation of every successful recruiting journey. We make sure you're eligible, prepared, and positioned for college."
        ctaLabel="Get Academic Support"
        ctaTo="/join"
      />

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Services</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Academic Support Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-lg border border-border p-6 shadow-card hover:shadow-card-hover transition-all group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-display text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Academics Matter */}
      <section className="section-padding bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-green-glow font-display uppercase tracking-[0.2em] text-sm mb-3">The Reality</p>
            <h2 className="heading-display text-3xl md:text-5xl mb-6">Why Academics Matter for Recruiting</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              "College coaches check grades before offering scholarships",
              "NCAA eligibility requirements eliminate thousands of athletes each year",
              "Academic scholarships can stack on top of athletic scholarships",
              "A strong GPA gives you more college options and leverage",
              "Student-athletes with good grades are more likely to stay eligible all four years",
            ].map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 bg-surface-dark-foreground/5 rounded-lg px-6 py-4 border border-surface-dark-foreground/10">
                <CheckCircle className="w-5 h-5 text-green-glow mt-0.5 shrink-0" />
                <span className="text-surface-dark-foreground/80 text-sm">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">FAQ</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Frequently Asked Questions</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="text-foreground text-sm font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <PageCTA headline="Get Academic Support" description="Don't let grades hold you back from your athletic dreams. Let SWAG help you stay on track." buttonLabel="Get Started" />
      <Footer />
    </div>
  );
};

export default Academics;
