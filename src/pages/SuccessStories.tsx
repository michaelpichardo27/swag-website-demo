import { motion } from "framer-motion";
import { Quote, Users, DollarSign, School, Award, Star, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import Footer from "@/components/Footer";

const stats = [
  { icon: Users, value: "50+", label: "Athletes Placed in College Programs" },
  { icon: DollarSign, value: "$2M+", label: "In Scholarships Earned" },
  { icon: School, value: "30+", label: "Partner College Programs" },
  { icon: Award, value: "95%", label: "Academic Eligibility Rate" },
];

const spotlights = [
  {
    name: "Marcus Thompson",
    sport: "Football — Wide Receiver",
    school: "University of Georgia",
    division: "D1",
    scholarship: "Full Athletic Scholarship",
    quote: "SWAG didn't just make me a better athlete — they prepared me for everything that comes with being a college student-athlete.",
    stats: "4.4 40-yard dash · 3.5 GPA · All-State Selection",
  },
  {
    name: "Destiny Williams",
    sport: "Basketball — Point Guard",
    school: "Spelman College",
    division: "D2",
    scholarship: "75% Athletic + Academic Scholarship",
    quote: "The academic support was the difference-maker. I was struggling with eligibility until SWAG stepped in and got me back on track.",
    stats: "18 PPG · 3.7 GPA · Conference Player of the Year",
  },
  {
    name: "Carlos Rivera",
    sport: "Soccer — Midfielder",
    school: "Georgia State University",
    division: "D1",
    scholarship: "Partial Athletic Scholarship",
    quote: "Coach connected me with college coaches I never would have reached on my own. The showcase events put me on the map.",
    stats: "12 Goals · 15 Assists · 3.2 GPA",
  },
  {
    name: "Jasmine Carter",
    sport: "Track & Field — Sprinter",
    school: "Florida A&M University",
    division: "D1",
    scholarship: "Full Athletic Scholarship",
    quote: "SWAG believed in me before anyone else did. They saw my potential and helped me reach it.",
    stats: "11.2s 100m · 3.8 GPA · State Champion",
  },
];

const testimonials = [
  { quote: "As a parent, I was lost navigating the recruiting process. SWAG guided us every step of the way, and my son is now thriving at his dream school.", name: "Maria Johnson", role: "Parent" },
  { quote: "The coaches at SWAG push you to be great on the field and in the classroom. I owe my scholarship to this program.", name: "Jaylen Carter", role: "College Basketball Player" },
  { quote: "My daughter went from being overlooked to having three Division I offers. The recruiting exposure SWAG provides is unmatched.", name: "David Williams", role: "Parent" },
  { quote: "SWAG is more than training — it's a family. They genuinely care about each athlete's success.", name: "Tanya Brooks", role: "Parent" },
  { quote: "The highlight film SWAG produced for me was professional quality. Coaches started reaching out within weeks of it going live.", name: "DeAndre Hall", role: "D2 Football Player" },
  { quote: "I didn't think college athletics was possible for me. SWAG proved me wrong and helped me earn a scholarship.", name: "Sofia Martinez", role: "College Softball Player" },
];

const colleges = [
  "University of Georgia", "Georgia State", "Spelman College", "Florida A&M",
  "Morehouse College", "Kennesaw State", "Auburn University", "Alabama State",
  "Clark Atlanta", "Georgia Tech", "Florida State", "University of Alabama",
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        tag="Success Stories"
        title="Real Athletes. Real Results."
        description="See how SWAG has helped student-athletes across Georgia and beyond earn college scholarships and achieve their athletic and academic goals."
      />

      {/* Stats */}
      <section className="section-padding bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <stat.icon className="w-8 h-8 text-green-glow mx-auto mb-4" />
                <div className="heading-display text-4xl md:text-5xl text-green-glow mb-2">{stat.value}</div>
                <p className="text-surface-dark-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Spotlights */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Athletes</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Athlete Spotlights</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {spotlights.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-lg border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all">
                <div className="bg-primary/5 px-6 py-4 border-b border-border flex items-center justify-between">
                  <div>
                    <h3 className="heading-display text-lg text-foreground">{a.name}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{a.sport}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary text-primary-foreground text-xs font-display uppercase tracking-wider px-3 py-1 rounded-full">{a.division}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <School className="w-4 h-4 text-primary" />
                    <span className="text-foreground text-sm font-medium">{a.school}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-green-glow" />
                    <span className="text-green-glow text-sm">{a.scholarship}</span>
                  </div>
                  <p className="text-muted-foreground text-sm italic mb-4">"{a.quote}"</p>
                  <div className="bg-secondary rounded px-3 py-2">
                    <p className="text-xs text-muted-foreground"><Trophy className="w-3 h-3 inline mr-1" />{a.stats}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Testimonials</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">What Families Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-lg border border-border p-6 shadow-card">
                <Quote className="w-6 h-6 text-primary/20 mb-3" />
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <p className="font-display uppercase tracking-wide text-foreground text-xs">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* College Destinations */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Destinations</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Where Our Athletes Compete</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {colleges.map((c, i) => (
              <motion.span key={c} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="bg-secondary border border-border rounded-full px-5 py-2 text-sm text-foreground font-medium">
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <PageCTA headline="Write Your Own Success Story" description="Join the athletes who've taken their game to the next level with SWAG." />
      <Footer />
    </div>
  );
};

export default SuccessStories;
