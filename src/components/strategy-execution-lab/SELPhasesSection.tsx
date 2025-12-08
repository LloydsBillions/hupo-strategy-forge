import { Search, Users, Rocket, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const phases = [
  {
    number: "01",
    name: "Deep Diagnostic",
    duration: "2 weeks",
    icon: Search,
    description: "Comprehensive assessment of your organization's execution capability, strategic alignment, and decision-making patterns.",
    deliverables: [
      "Stakeholder interviews (12-15 leaders)",
      "Execution capability assessment",
      "Decision flow mapping",
      "Strategic alignment audit",
      "Diagnostic report with findings",
    ],
  },
  {
    number: "02",
    name: "Alignment Workshop",
    duration: "3 days intensive",
    icon: Users,
    description: "Immersive workshop to align your leadership team on strategic priorities, establish execution rhythms, and build shared mental models.",
    deliverables: [
      "Strategic priority alignment",
      "Decision rights framework",
      "Execution rhythm design",
      "Team operating agreements",
      "90-day action roadmap",
    ],
  },
  {
    number: "03",
    name: "Implementation Support",
    duration: "8 weeks",
    icon: Rocket,
    description: "Hands-on coaching and support as your team implements new execution systems and navigates real organizational challenges.",
    deliverables: [
      "Bi-weekly coaching sessions",
      "Progress tracking dashboard",
      "Obstacle resolution support",
      "Mid-point calibration",
      "Team capability building",
    ],
  },
  {
    number: "04",
    name: "90-Day Review & Embed",
    duration: "Ongoing",
    icon: CheckCircle,
    description: "Comprehensive review of transformation outcomes, sustainability assessment, and embedding of new practices for long-term success.",
    deliverables: [
      "Outcome measurement",
      "Sustainability assessment",
      "Leadership capability review",
      "Continuous improvement plan",
      "Alumni network access",
    ],
  },
];

const SELPhasesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container-wide">
        {/* Section header */}
        <div className={cn(
          "text-center mb-20 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            The Solution
          </span>
          <h2 className="text-display-lg font-display font-bold text-foreground">
            How the Lab Works
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className={cn(
                  "relative md:grid md:grid-cols-2 md:gap-12 opacity-0",
                  isInView && "animate-fade-up",
                  index % 2 === 1 && "md:direction-rtl"
                )}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary transform -translate-x-1/2 z-10 hidden md:block" style={{ top: '2rem' }} />

                {/* Content card */}
                <div className={cn(
                  "bg-warm-stone p-8 md:p-10 border border-border card-lift",
                  index % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:text-left md:pl-16"
                )}>
                  <div className={cn(
                    "flex items-center gap-4 mb-6",
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  )}>
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <phase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-5xl font-display font-black text-primary/20">
                      {phase.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {phase.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-charcoal text-white text-xs font-medium uppercase tracking-wider mb-4">
                    {phase.duration}
                  </span>

                  <p className="text-muted-foreground mb-6 text-left">
                    {phase.description}
                  </p>

                  <div className="text-left">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SELPhasesSection;
