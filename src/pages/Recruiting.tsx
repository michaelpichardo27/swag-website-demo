import { motion } from "framer-motion";
import { Eye, Video, FileText, Mail, Users, Award, ArrowRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import Footer from "@/components/Footer";

const services = [
  { icon: Video, title: "Highlight Films", description: "Professional-quality highlight reels edited and formatted to meet the standards college coaches expect." },
  { icon: FileText, title: "Prospect Profiles", description: "Comprehensive athlete profiles with stats, academics, accolades, and contact information distributed to targeted programs." },
  { icon: Eye, title: "Showcase Events", description: "Organized events where athletes compete in front of college scouts and coaches from D1, D2, D3, and NAIA programs." },
  { icon: Mail, title: "Coach Outreach", description: "Direct email campaigns and introductions to college coaching staffs on behalf of our athletes." },
  { icon: Users, title: "Campus Visit Prep", description: "Guidance on official and unofficial visits, including what to ask, how to prepare, and making the best impression." },
  { icon: Award, title: "Offer Evaluation", description: "Help comparing scholarship offers, understanding NLI requirements, and making the best decision for your future." },
];

const processSteps = [
  { step: "01", title: "Assessment", desc: "We evaluate your athletic ability, academics, and recruiting timeline" },
  { step: "02", title: "Profile Building", desc: "Create your prospect profile, highlight film, and target school list" },
  { step: "03", title: "Outreach", desc: "Contact college coaches and get you in front of decision-makers" },
  { step: "04", title: "Exposure", desc: "Attend showcases, camps, and combine events to compete for coaches" },
  { step: "05", title: "Commitment", desc: "Evaluate offers, visit campuses, and commit to the right program" },
];

const testimonials = [
  { quote: "SWAG got me in front of coaches I never would have reached on my own. I committed to my dream school because of their recruiting support.", name: "Aiden Mitchell", role: "D1 Track & Field" },
  { quote: "The recruiting process was overwhelming until SWAG broke it down step by step. They made it manageable and I ended up with multiple offers.", name: "Kayla Thomas", role: "D2 Volleyball" },
];

const Recruiting = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        tag="Recruiting Exposure"
        title="Get Recruited to the Right Program"
        description="We connect talented athletes with college coaches through highlight films, showcases, direct outreach, and expert guidance through the entire recruiting process."
        ctaLabel="Start the Process"
        ctaTo="/join"
      />

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">What We Do</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Recruiting Support</h2>
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

      {/* Process */}
      <section className="section-padding bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-green-glow font-display uppercase tracking-[0.2em] text-sm mb-3">The Process</p>
            <h2 className="heading-display text-3xl md:text-5xl">How Recruiting Works</h2>
          </motion.div>
          <div className="space-y-4">
            {processSteps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-6 bg-surface-dark-foreground/5 rounded-lg px-6 py-5 border border-surface-dark-foreground/10">
                <span className="font-display text-green-glow text-xl tracking-widest shrink-0">{s.step}</span>
                <div>
                  <h3 className="heading-display text-lg mb-1">{s.title}</h3>
                  <p className="text-surface-dark-foreground/60 text-sm">{s.desc}</p>
                </div>
                {i < processSteps.length - 1 && <ArrowRight className="w-5 h-5 text-green-glow/30 shrink-0 mt-1 hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Results</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Proven Outcomes</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "College Placements" },
              { value: "$2M+", label: "Scholarships Earned" },
              { value: "30+", label: "Partner Programs" },
              { value: "200+", label: "Coach Connections" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="heading-display text-3xl md:text-4xl text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-lg border border-border p-8 shadow-card">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <p className="font-display uppercase tracking-wide text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA headline="Start the Recruiting Process" description="Let SWAG connect you with the college program that's the right fit for your talent and goals." buttonLabel="Get Started" />
      <Footer />
    </div>
  );
};

export default Recruiting;
