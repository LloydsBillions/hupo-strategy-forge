import { useInView } from "@/hooks/useInView";
import { Mail, MessageSquare, Linkedin, Twitter, Instagram } from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    label: "General Inquiries",
    value: "hello@huposchool.com",
    href: "mailto:hello@huposchool.com",
  },
  {
    icon: Mail,
    label: "Corporate Solutions",
    value: "corporate@huposchool.com",
    href: "mailto:corporate@huposchool.com",
  },
  {
    icon: MessageSquare,
    label: "Partnerships",
    value: "partnerships@huposchool.com",
    href: "mailto:partnerships@huposchool.com",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const ContactInfoSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-warm-stone">
      <div className="container-padding max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-muted-foreground">
              Have a quick question? Reach out directly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="bg-background p-8 border border-border hover:border-primary transition-all duration-300 group text-center"
              >
                <channel.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{channel.label}</h3>
                <p className="text-primary group-hover:underline">{channel.value}</p>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Remote-first institution</strong> • Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
