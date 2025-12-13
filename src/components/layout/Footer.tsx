import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hupoLogo from "@/assets/hupo-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: "Programs Overview", href: "#programs" },
      { name: "Strategy Execution Lab", href: "#execution-lab" },
      { name: "Strategic Thinking Lab", href: "#thinking-lab" },
      { name: "Corporate Solutions", href: "#organizations" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Approach", href: "#approach" },
      { name: "Impact", href: "#impact" },
      { name: "Resources", href: "#resources" },
    ],
    contact: [
      { name: "hello@huposchool.com", href: "mailto:hello@huposchool.com" },
      { name: "corporate@huposchool.com", href: "mailto:corporate@huposchool.com" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-obsidian text-white noise-overlay">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={hupoLogo} alt="Hupo School of Strategy" className="w-10 h-10 object-contain" />
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  HUPO
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-steel -mt-1">
                  School of Strategy
                </span>
              </div>
            </Link>
            <p className="text-steel text-sm leading-relaxed mb-6">
              Africa's first School of Strategic Thought—where leaders pause the noise 
              to reconstruct how they think, decide, and act.
            </p>
            <p className="text-primary font-display text-lg italic">
              Architects of Clarity
            </p>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">
              Programs
            </h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-steel hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-steel hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">
              Stay Sharp
            </h4>
            <p className="text-steel text-sm mb-4">
              Strategic insights delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-charcoal border border-steel/30 px-4 py-3 text-white placeholder:text-steel focus:border-primary focus:outline-none transition-colors"
              />
              <Button variant="default" size="default" className="w-full group">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 border border-steel/30 flex items-center justify-center text-steel hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel text-sm">
            © {currentYear} Hupo School of Strategy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-steel hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-steel hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
