import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Target, Shield, Lightbulb, Mail } from "lucide-react";
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

const founders = [
  {
    name: "DeVon Hilliard",
    role: "Co-Founder",
    initials: "DH",
    imageSrc: "/team/devon-hilliard.jpg",
    bio: "Mr. Hilliard graduated from Atwater High School in 1998. He accepted a partial athletic scholarship to UC Davis. Due to an unforeseen injury, Mr. Hilliard came back to Atwater and attended Merced JC. In 2000, after receiving an AA degree, he joined the United States Air Force. Mr. Hilliard finished his enlistment in 2004 and at that time he received his Criminal Justice Bachelors degree. In 2005 Mr. Hilliard began working with the California Department of Corrections. In 2008, Mr. Hilliard received his Masters Degree in Criminal Justice Administration.",
    email: "dhilliard.swag@gmail.com",
  },
  {
    name: "Brett Nickelson",
    role: "Co-Founder",
    initials: "BN",
    imageSrc: "/team/brett-nickelson.jpg",
    bio: "Mr. Nickelson graduated from Atwater High School in 1998. Following high school, Mr. Nickelson accepted an academic scholarship to the University of Washington where he earned his Bachelor’s degree in Social Science. He has been a teacher in the Merced Union High School District since 2003 and has recently completed his Master’s degree in Education and earned an Administrative Services Credential. Mr. Nickelson has recently accepted a position as an Associate Principal at Delhi High School.",
    email: "nickelson.brett@gmail.com",
  },
  {
    name: "Eddie Frazier",
    role: "Co-Founder · Student-athlete recruiting",
    initials: "EF",
    imageSrc: "/team/eddie-frazier.jpg",
    bio: "Graduated from Atwater High in 1996. Mr. Frazier signed a Scholarship to University of Nevada Reno for Football. Transferred to Merced College and played football for a semester. Then transferred to Delta Junior College and played Basketball from 1997-1999. Mr. Frazier signed a Basketball Scholarship to attend Holy Names University and played there from 1999-2002. He then played for 2 ½ years in Berlin Germany. Mr. Frazier now works for Merced County Human Services agency. Mr. Frazier is in charge of all of the recruiting for SWAG's student athletes.",
    email: "edfraz04@gmail.com",
  },
];

function FounderAvatar({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const [useFallback, setUseFallback] = useState(false);
  if (useFallback) {
    return (
      <div
        className="aspect-square w-full max-w-[200px] shrink-0 rounded-lg bg-primary/15 flex items-center justify-center heading-display text-3xl text-primary border border-border"
        aria-hidden
      >
        {initials}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="aspect-square w-full max-w-[200px] shrink-0 rounded-lg object-cover border border-border bg-secondary"
      onError={() => setUseFallback(true)}
    />
  );
}

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        tag="About SWAG"
        title="Built for the Next Generation"
        description="Based out of Merced, CA. Serving the Central Valley. SWAG supports high school students transitioning to college through academic mentoring and athletic training."
      />

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
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">Meet the Founders</h2>
          </motion.div>
          <div className="flex flex-col gap-10">
            {founders.map((f, i) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-lg border border-border p-6 md:p-8 shadow-card"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <FounderAvatar src={f.imageSrc} alt={`${f.name}`} initials={f.initials} />
                  <div className="min-w-0 flex-1 text-center md:text-left">
                    <h3 className="heading-display text-xl text-foreground">{f.name}</h3>
                    <p className="text-primary text-sm font-medium mb-4">{f.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{f.bio}</p>
                    <a
                      href={`mailto:${f.email}`}
                      className="inline-flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      <Mail className="w-4 h-4 shrink-0" aria-hidden />
                      {f.email}
                    </a>
                  </div>
                </div>
              </motion.article>
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

      <PageCTA headline="Join the SWAG Family" description="Become part of a community that's changing the game for student-athletes across the Central Valley and beyond." />
      <Footer />
    </div>
  );
};

export default About;
