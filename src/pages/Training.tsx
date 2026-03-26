import { motion } from "framer-motion";
import { Dumbbell, Zap, Target, Clock, Users, TrendingUp, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import Footer from "@/components/Footer";

const trainingTypes = [
  { icon: Zap, title: "Speed & Agility", description: "Cone drills, ladder work, sprint mechanics, and reaction training to make you faster and more explosive on the field." },
  { icon: Dumbbell, title: "Strength & Power", description: "Progressive resistance training tailored to your sport, building functional strength that translates directly to performance." },
  { icon: Target, title: "Sport-Specific Skills", description: "Position-specific drills and game-situation training led by coaches who've played and coached at the collegiate level." },
  { icon: TrendingUp, title: "Performance Testing", description: "Regular assessments of your 40-yard dash, vertical jump, pro agility, and sport-specific metrics to track improvement." },
];

const schedule = [
  { day: "Monday", focus: "Speed & Agility", time: "4:00 PM – 6:00 PM" },
  { day: "Tuesday", focus: "Strength Training", time: "4:00 PM – 6:00 PM" },
  { day: "Wednesday", focus: "Sport-Specific Skills", time: "4:00 PM – 6:00 PM" },
  { day: "Thursday", focus: "Conditioning & Recovery", time: "4:00 PM – 5:30 PM" },
  { day: "Friday", focus: "Combine Prep & Testing", time: "4:00 PM – 6:00 PM" },
  { day: "Saturday", focus: "Open Gym / Showcase Prep", time: "10:00 AM – 12:00 PM" },
];

const benefits = [
  "Train with coaches who've developed D1 athletes",
  "Small group sessions (max 12 athletes)",
  "Individualized training plans",
  "Video analysis and performance tracking",
  "Nutrition guidance and recovery protocols",
  "Year-round programming with seasonal periodization",
];

const Training = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        tag="Athletic Training"
        title="Train Like an Elite Athlete"
        description="Our comprehensive training programs develop speed, strength, agility, and sport-specific skills to prepare you for competition at the next level."
        ctaLabel="Start Training"
        ctaTo="/join"
      />

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Our Approach</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground mb-6">Training Philosophy</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              At SWAG, we believe elite performance starts with a strong foundation. Our training methodology combines proven sports science with real-world coaching experience to develop well-rounded athletes who are physically and mentally prepared for the demands of college athletics.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { label: "Develop", desc: "Build the physical foundation with progressive training" },
              { label: "Compete", desc: "Apply skills in competitive, game-like environments" },
              { label: "Dominate", desc: "Peak performance when it matters most" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-secondary rounded-lg p-6">
                <span className="font-display text-green-glow text-sm tracking-widest uppercase">0{i + 1}</span>
                <h3 className="heading-display text-xl text-foreground mt-2 mb-2">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Types */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Programs</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Types of Training</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {trainingTypes.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-lg border border-border p-8 shadow-card hover:shadow-card-hover transition-all group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <t.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-display text-xl text-foreground mb-2">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Athletes</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground mb-6">Who Is This For?</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "High School Athletes", desc: "Grades 9-12 looking to compete at the varsity and college level" },
              { icon: Target, title: "Multi-Sport Athletes", desc: "Athletes who want to develop transferable skills across sports" },
              { icon: TrendingUp, title: "College-Bound Athletes", desc: "Serious athletes preparing for D1, D2, D3, NAIA, or JUCO programs" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="heading-display text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-green-glow font-display uppercase tracking-[0.2em] text-sm mb-3">Schedule</p>
            <h2 className="heading-display text-3xl md:text-5xl">Sample Weekly Schedule</h2>
          </motion.div>
          <div className="space-y-3">
            {schedule.map((s, i) => (
              <motion.div key={s.day} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center justify-between bg-surface-dark-foreground/5 rounded-lg px-6 py-4 border border-surface-dark-foreground/10">
                <div className="flex items-center gap-4">
                  <Clock className="w-4 h-4 text-green-glow" />
                  <span className="font-display uppercase tracking-wide text-sm">{s.day}</span>
                </div>
                <span className="text-surface-dark-foreground/70 text-sm hidden sm:block">{s.focus}</span>
                <span className="text-surface-dark-foreground/50 text-xs">{s.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Why SWAG</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Benefits & Outcomes</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground text-sm">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA headline="Join Training Program" description="Start training with SWAG and develop the skills college coaches are looking for." buttonLabel="Apply Now" />
      <Footer />
    </div>
  );
};

export default Training;
