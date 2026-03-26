import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const Join = () => {
  const [form, setForm] = useState({
    parentName: "",
    athleteName: "",
    sport: "",
    grade: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.parentName || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Application submitted! We'll be in touch within 24 hours.");
    setForm({ parentName: "", athleteName: "", sport: "", grade: "", email: "", phone: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const inputClass = "bg-surface-dark-foreground/5 border-surface-dark-foreground/15 text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 h-12";

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        tag="Join SWAG"
        title="Take the First Step"
        description="Fill out the form below and a SWAG coordinator will reach out within 24 hours to discuss how we can help your athlete reach the next level."
      />

      <section className="section-padding bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-3">
              <h2 className="heading-display text-2xl mb-6">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Parent / Guardian Name *" value={form.parentName} onChange={update("parentName")} className={inputClass} />
                <Input placeholder="Athlete Name" value={form.athleteName} onChange={update("athleteName")} className={inputClass} />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Sport" value={form.sport} onChange={update("sport")} className={inputClass} />
                  <Input placeholder="Grade (9-12)" value={form.grade} onChange={update("grade")} className={inputClass} />
                </div>
                <Input type="email" placeholder="Email Address *" value={form.email} onChange={update("email")} className={inputClass} />
                <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={update("phone")} className={inputClass} />
                <Textarea
                  placeholder="Tell us about your athlete and goals..."
                  value={form.message}
                  onChange={update("message")}
                  rows={4}
                  className="bg-surface-dark-foreground/5 border-surface-dark-foreground/15 text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 resize-none"
                />
                <Button type="submit" size="lg" className="w-full h-12 font-display uppercase tracking-wider text-base gap-2">
                  <Send className="w-4 h-4" /> Apply Now
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-2">
              <h2 className="heading-display text-2xl mb-6">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-glow/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-green-glow" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-surface-dark-foreground/60 text-sm">info@swag-sports.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-glow/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-green-glow" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-surface-dark-foreground/60 text-sm">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-glow/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-green-glow" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-surface-dark-foreground/60 text-sm">Atlanta, Georgia</p>
                  </div>
                </div>

                <div className="border-t border-surface-dark-foreground/10 pt-6">
                  <p className="font-display uppercase tracking-wider text-sm mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[Instagram, Twitter, Youtube].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-full bg-surface-dark-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t border-surface-dark-foreground/10 pt-6">
                  <p className="font-display uppercase tracking-wider text-sm mb-3">Hours</p>
                  <div className="text-surface-dark-foreground/60 text-sm space-y-1">
                    <p>Mon - Fri: 3:00 PM – 7:00 PM</p>
                    <p>Saturday: 9:00 AM – 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
