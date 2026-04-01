import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { JOIN_SWAG_URL, isExternalHref } from "@/lib/joinSwagUrl";

const footerLinks = [
  { label: "Training", to: "/training" },
  { label: "Success Stories", to: "/success-stories" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Join SWAG", to: JOIN_SWAG_URL },
];

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-dark-foreground/10 text-surface-dark-foreground/70">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl tracking-wider text-surface-dark-foreground font-bold">SWAG</Link>
            <p className="text-sm mt-4 leading-relaxed">
              Developing the next generation of student-athletes through elite training and coaching.
            </p>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-wider text-surface-dark-foreground text-sm mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  {isExternalHref(l.to) ? (
                    <a href={l.to} target="_blank" rel="noopener noreferrer" className="hover:text-green-glow transition-colors">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="hover:text-green-glow transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-wider text-surface-dark-foreground text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail size={14} /> info@swag-sports.com</li>
              <li className="flex items-center gap-2"><Phone size={14} /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Atlanta, GA</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-wider text-surface-dark-foreground text-sm mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-surface-dark-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-surface-dark-foreground/10 mt-12 pt-8 text-center text-xs">
          © {new Date().getFullYear()} SWAG Sports. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
