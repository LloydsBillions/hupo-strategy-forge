import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ArrowRight, TrendingUp, TrendingDown, Clock, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    industry: "Financial Services",
    company: "Leading Pan-African Bank",
    challenge: "Leadership team spending 70%+ of time on operational escalations. Strategic initiatives perpetually stalled. Cross-functional friction consuming organizational energy.",
    solution: "12-week Strategy Execution Lab engagement redesigning decision architecture, establishing execution rhythms, and building team alignment protocols.",
    results: [
      { icon: TrendingDown, value: "60%", label: "Reduction in escalations" },
      { icon: TrendingUp, value: "2x", label: "Execution speed improvement" },
      { icon: Clock, value: "10+", label: "Hours freed weekly per leader" },
    ],
    quote: "Before Hupo, I was the bottleneck in every decision. The Strategy Execution Lab taught us to build systems that empower our teams while maintaining strategic alignment.",
    author: "Chief Operating Officer",
    duration: "12 weeks",
  },
  {
    industry: "FMCG",
    company: "Regional Consumer Goods Leader",
    challenge: "Rapid growth outpacing organizational capability. Strategy clear at the top but fragmented execution across regions. Mid-level managers lacking decision-making frameworks.",
    solution: "Comprehensive diagnostic followed by intensive workshop and 8-week implementation coaching focused on cascading priorities and building regional leadership capability.",
    results: [
      { icon: TrendingUp, value: "85%", label: "Mid-level capability increase" },
      { icon: TrendingDown, value: "45%", label: "Time to market reduction" },
      { icon: TrendingUp, value: "3x", label: "Cross-regional coordination" },
    ],
    quote: "We went from strategy presentations that died in PowerPoint to actual execution discipline. The difference is night and day.",
    author: "Managing Director",
    duration: "14 weeks",
  },
  {
    industry: "Professional Services",
    company: "Top-Tier Consulting Firm",
    challenge: "Senior partners overwhelmed with delivery. Junior consultants not developing strategic capability fast enough. Client satisfaction declining despite talented team.",
    solution: "Redesigned operating model with clear delegation frameworks, capability development pathways, and performance management systems aligned to strategic growth.",
    results: [
      { icon: TrendingUp, value: "40%", label: "Partner utilization improvement" },
      { icon: TrendingUp, value: "92%", label: "Client satisfaction score" },
      { icon: TrendingDown, value: "50%", label: "Junior-to-partner escalations" },
    ],
    quote: "The frameworks we learned are not just for us—we now use them with our own clients. That is the ultimate validation of Hupo methodology.",
    author: "Senior Partner",
    duration: "10 weeks",
  },
];

const CaseStudiesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container-wide">
        {/* Section header */}
        <div className={cn(
          "text-center mb-16 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            Case Studies
          </span>
          <h2 className="text-display-lg font-display font-bold text-foreground">
            Organizations Transformed
          </h2>
        </div>

        {/* Case studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.company}
              className={cn(
                "bg-warm-stone border border-border overflow-hidden opacity-0",
                isInView && "animate-fade-up"
              )}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="grid lg:grid-cols-3">
                {/* Context */}
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {study.company}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      The Challenge
                    </h4>
                    <p className="text-sm text-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Our Solution
                    </h4>
                    <p className="text-sm text-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      Duration: <span className="text-foreground font-medium">{study.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="p-8 lg:p-10 bg-obsidian text-white">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                    Measurable Impact
                  </h4>
                  <div className="space-y-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                          <result.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-3xl font-display font-black text-primary">
                            {result.value}
                          </span>
                          <p className="text-sm text-steel">{result.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <blockquote className="text-lg font-display italic text-foreground">
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
        )} style={{ animationDelay: "0.8s" }}>
          <Button variant="hero" size="xl" className="group">
            Become Our Next Success Story
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;