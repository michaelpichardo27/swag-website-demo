import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const inputClass = "bg-surface-dark-foreground/5 border-surface-dark-foreground/15 text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 h-12";

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        tag="Contact"
        title="Get in Touch"
        description="Questions about training, scheduling, or how SWAG can help your athlete? Send us a message or reach out using the details below."
      />

      <section className="section-padding bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-3">
              <h2 className="heading-display text-2xl mb-2">Send a message</h2>
              <p className="text-surface-dark-foreground/60 text-sm mb-6">
                Prefer to apply for the program?{" "}
                <Link to="/join" className="text-green-glow hover:underline">
                  Go to Join SWAG
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your name *" value={form.name} onChange={update("name")} className={inputClass} />
                <Input type="email" placeholder="Email address *" value={form.email} onChange={update("email")} className={inputClass} />
                <Input type="tel" placeholder="Phone (optional)" value={form.phone} onChange={update("phone")} className={inputClass} />
                <Input placeholder="Subject (optional)" value={form.subject} onChange={update("subject")} className={inputClass} />
                <Textarea
                  placeholder="Your message *"
                  value={form.message}
                  onChange={update("message")}
                  rows={5}
                  className="bg-surface-dark-foreground/5 border-surface-dark-foreground/15 text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 resize-none"
                />
                <Button type="submit" size="lg" className="w-full h-12 font-display uppercase tracking-wider text-base gap-2">
                  <Send className="w-4 h-4" /> Send message
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="md:col-span-2">
              <h2 className="heading-display text-2xl mb-6">Contact info</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-glow/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-green-glow" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:info@swag-sports.com" className="text-surface-dark-foreground/60 text-sm hover:text-green-glow transition-colors">
                      info@swag-sports.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-glow/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-green-glow" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href="tel:+15551234567" className="text-surface-dark-foreground/60 text-sm hover:text-green-glow transition-colors">
                      (555) 123-4567
                    </a>
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
                  <p className="font-display uppercase tracking-wider text-sm mb-4">Follow us</p>
                  <div className="flex gap-3">
                    {[Instagram, Twitter, Youtube].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-full bg-surface-dark-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
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

export default Contact;
