import { ArrowRight, TrendingDown, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    industry: "Financial Services",
    company: "Leading Pan-African Bank",
    challenge: "Leadership team spending 70%+ of time on operational escalations, leaving no bandwidth for strategic initiatives. Departments operating in silos with conflicting priorities.",
    outcome: "Complete transformation of decision-making architecture and execution rhythms.",
    metrics: [
      { icon: TrendingDown, value: "60%", label: "Reduction in escalations" },
      { icon: TrendingUp, value: "2x", label: "Execution speed" },
      { icon: Clock, value: "10+", label: "Hours/week freed for leadership" },
    ],
    quote: "Before Hupo, I was the bottleneck in every decision. The Strategy Execution Lab taught us to build systems that empower our teams.",
    author: "Chief Operating Officer",
    duration: "12 weeks",
  },
  {
    industry: "FMCG",
    company: "Regional Consumer Goods Leader",
    challenge: "Rapid growth outpacing organizational capability. Strategy clear at the top but fragmented execution across regions. Mid-level managers lacking decision-making frameworks.",
    outcome: "Aligned regional leadership with clear decision rights and consistent execution cadence.",
    metrics: [
      { icon: TrendingUp, value: "85%", label: "Mid-level capability increase" },
      { icon: TrendingDown, value: "45%", label: "Time to market" },
      { icon: TrendingUp, value: "3x", label: "Cross-regional coordination" },
    ],
    quote: "We went from strategy presentations that died in PowerPoint to actual execution discipline. The difference is night and day.",
    author: "Managing Director",
    duration: "14 weeks",
  },
  {
    industry: "Professional Services",
    company: "Top-Tier Consulting Firm",
    challenge: "Senior partners overwhelmed with delivery. Juniors not developing fast enough. Client satisfaction declining despite talented team.",
    outcome: "Redesigned operating model with clear delegation frameworks and capability development pathways.",
    metrics: [
      { icon: TrendingUp, value: "40%", label: "Partner utilization improvement" },
      { icon: TrendingUp, value: "92%", label: "Client satisfaction score" },
      { icon: TrendingDown, value: "50%", label: "Junior-to-partner escalations" },
    ],
    quote: "The frameworks we learned aren't just for us—we now use them with our own clients. That's the ultimate validation.",
    author: "Senior Partner",
    duration: "10 weeks",
  },
];

const SELCaseStudiesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container-wide">
        {/* Section header */}
        <div className={cn(
          "text-center mb-16 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            Proof of Impact
          </span>
          <h2 className="text-display-lg font-display font-bold text-foreground">
            Organizations Transformed
          </h2>
        </div>

        {/* Case study cards */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.company}
              className={cn(
                "relative bg-warm-stone border border-border overflow-hidden card-lift opacity-0",
                isInView && "animate-fade-up"
              )}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="grid lg:grid-cols-3">
                {/* Left column - Context */}
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {study.company}
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      The Challenge
                    </h4>
                    <p className="text-sm text-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      The Outcome
                    </h4>
                    <p className="text-sm text-foreground leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      Duration: <span className="text-foreground font-medium">{study.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Middle column - Metrics */}
                <div className="p-8 lg:p-10 bg-obsidian text-white">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                    Measurable Impact
                  </h4>
                  <div className="space-y-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                          <metric.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-3xl font-display font-black text-primary">
                            {metric.value}
                          </span>
                          <p className="text-sm text-steel">{metric.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column - Quote */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-6xl text-primary/20 font-display leading-none">"</span>
                    <blockquote className="text-lg font-display italic text-foreground -mt-4">
                      {study.quote}
                    </blockquote>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="text-sm font-medium text-foreground">
                      {study.author}
                    </span>
                    <p className="text-sm text-muted-foreground">{study.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-16 opacity-0",
          isInView && "animate-fade-up"
        )} style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join these organizations?
          </p>
          <Button variant="hero" size="xl" className="group">
            Request Your Proposal
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SELCaseStudiesSection;
