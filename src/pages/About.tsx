import { motion } from "framer-motion";
import { Heart, Target, Users, Award, Shield, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import Footer from "@/components/Footer";

const values = [
  { icon: Target, title: "Excellence", description: "We hold ourselves and our athletes to the highest standard in training, academics, and character." },
  { icon: Heart, title: "Community", description: "We build a family environment where every athlete feels supported, valued, and motivated." },
  { icon: Shield, title: "Integrity", description: "We operate with honesty and transparency in everything we do — from recruiting to academic guidance." },
  { icon: Lightbulb, title: "Growth", description: "We believe in continuous improvement and developing the whole person, not just the athlete." },
];

const team = [
  { name: "Coach Michael Davis", role: "Founder & Head of Training", bio: "Former D1 athlete with 15+ years of coaching experience. Michael founded SWAG to give student-athletes the guidance and support he wished he had growing up." },
  { name: "Sarah Johnson", role: "Academic Director", bio: "Education specialist with a master's in counseling. Sarah oversees all academic programs and ensures every athlete stays on track for eligibility and college admissions." },
  { name: "James Wright", role: "Recruiting Coordinator", bio: "Former college assistant coach with connections to 50+ college programs nationwide. James manages all recruiting outreach, highlight films, and showcase events." },
  { name: "Dr. Lisa Chen", role: "Sports Performance Director", bio: "Ph.D. in Exercise Science with expertise in youth athlete development. Lisa designs all training programs using the latest sports science research." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        tag="About SWAG"
        title="Built for the Next Generation"
        description="SWAG was founded with one mission: to give student-athletes the tools, training, and guidance they need to earn opportunities in college athletics."
      />

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Our Mission</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground mb-6">Why SWAG Exists</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Too many talented athletes miss out on college opportunities because they lack access to quality training, academic support, and recruiting guidance. SWAG bridges that gap — providing a comprehensive development program that prepares student-athletes for success on the field, in the classroom, and beyond.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { value: "2018", label: "Year Founded" },
              { value: "500+", label: "Athletes Served" },
              { value: "50+", label: "College Placements" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-secondary rounded-lg p-8">
                <div className="heading-display text-3xl md:text-4xl text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-green-glow font-display uppercase tracking-[0.2em] text-sm mb-3">Values</p>
            <h2 className="heading-display text-3xl md:text-5xl">What We Stand For</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-glow/10 flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7 text-green-glow" />
                </div>
                <h3 className="heading-display text-lg mb-2">{v.title}</h3>
                <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Leadership</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Meet the Team</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-lg border border-border p-6 shadow-card">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-display text-lg text-foreground">{t.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{t.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-3">Impact</p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground mb-6">Community Impact</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              SWAG is more than a training program — we're a community. We partner with local schools, churches, and community organizations to ensure every athlete has access to the resources they need, regardless of financial circumstances.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "15+", label: "Community Partners" },
                { value: "100+", label: "Scholarship Hours Awarded" },
                { value: "8", label: "Counties Served" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="heading-display text-2xl md:text-3xl text-primary mb-1">{stat.value}</div>
                  <p className="text-muted-foreground text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <PageCTA headline="Join the SWAG Family" description="Become part of a community that's changing the game for student-athletes across Georgia and beyond." />
      <Footer />
    </div>
  );
};

export default About;
