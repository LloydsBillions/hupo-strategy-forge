import { Check, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const included = [
  "Comprehensive organizational diagnostic",
  "3-day intensive leadership workshop",
  "8 weeks of implementation coaching",
  "90-day review and sustainability assessment",
  "All materials, workbooks, and frameworks",
  "Post-program alumni network access",
  "Quarterly check-in sessions (Year 1)",
];

const steps = [
  {
    number: "01",
    title: "Request Proposal",
    description: "Share your organization's context and challenges",
  },
  {
    number: "02",
    title: "Discovery Call",
    description: "Deep dive into your specific situation and goals",
  },
  {
    number: "03",
    title: "Diagnostic & Kickoff",
    description: "Begin the transformation with clarity and alignment",
  },
];

const SELInvestmentSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative bg-primary py-24 md:py-32 overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-white/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-white/20 to-transparent" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className={cn(
          "text-center mb-16 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-obsidian/70 mb-4 block">
            Investment
          </span>
          <h2 className="text-display-lg font-display font-bold text-obsidian">
            Investment & Engagement
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pricing card */}
          <div className={cn(
            "bg-white p-10 shadow-elegant opacity-0",
            isInView && "animate-fade-up stagger-1"
          )}>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Program Investment
            </h3>
            <p className="text-muted-foreground mb-6">
              Customized based on organization size and complexity
            </p>

            <div className="bg-warm-stone p-6 mb-8">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Typical Range
              </span>
              <div className="text-4xl font-display font-black text-foreground mt-2">
                ₦18M – ₦30M
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                What's Included
              </h4>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-obsidian text-white text-center mb-8">
              <span className="text-sm font-medium uppercase tracking-wider">
                Pilot Pricing Available
              </span>
              <p className="text-sm text-white/70 mt-1">
                Limited spots for early partners
              </p>
            </div>

            <Button variant="dark" size="xl" className="w-full group">
              Request Detailed Proposal
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Process steps */}
          <div className={cn(
            "opacity-0",
            isInView && "animate-fade-up stagger-2"
          )}>
            <h3 className="text-2xl font-display font-bold text-obsidian mb-8">
              Getting Started
            </h3>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex gap-6 items-start bg-white/10 p-6 hover:bg-white/20 transition-colors"
                >
                  <span className="text-4xl font-display font-black text-obsidian/30">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-xl font-display font-bold text-obsidian mb-2">
                      {step.title}
                    </h4>
                    <p className="text-obsidian/70">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-obsidian/30 flex-shrink-0 mt-2" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-obsidian text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Prefer to Talk First?</h4>
                  <p className="text-sm text-white/70">
                    Schedule a 30-minute discovery call with our team.
                  </p>
                </div>
              </div>
              <Button variant="hero-outline" size="lg" className="w-full mt-6">
                Schedule Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SELInvestmentSection;
