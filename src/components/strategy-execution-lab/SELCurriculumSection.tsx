import { useState } from "react";
import { ChevronDown, Brain, Target, Workflow, BarChart3, Users2, Gauge } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const modules = [
  {
    icon: Brain,
    title: "Strategic Sensemaking",
    duration: "Workshop Day 1, Morning",
    topics: [
      "Reading complex environments",
      "Pattern recognition in uncertainty",
      "Identifying leverage points",
      "Distinguishing signal from noise",
    ],
    outcomes: "Leaders who can see the system beneath the symptoms and identify high-leverage intervention points.",
  },
  {
    icon: Target,
    title: "Priority Architecture",
    duration: "Workshop Day 1, Afternoon",
    topics: [
      "Strategic priority frameworks",
      "Resource allocation models",
      "Trade-off decision making",
      "Cascading priorities through levels",
    ],
    outcomes: "Crystal-clear organizational priorities that everyone understands and can act upon.",
  },
  {
    icon: Workflow,
    title: "Decision Rights & Flow",
    duration: "Workshop Day 2, Morning",
    topics: [
      "Decision rights mapping",
      "Escalation protocols",
      "Delegation frameworks",
      "Speed vs. quality trade-offs",
    ],
    outcomes: "Dramatic reduction in escalations as teams gain clarity on what they can decide independently.",
  },
  {
    icon: BarChart3,
    title: "Execution Rhythms",
    duration: "Workshop Day 2, Afternoon",
    topics: [
      "Operating rhythm design",
      "Meeting architecture",
      "Progress visibility systems",
      "Accountability without micromanagement",
    ],
    outcomes: "Sustainable execution systems that maintain momentum without leadership burnout.",
  },
  {
    icon: Users2,
    title: "Team Alignment Protocols",
    duration: "Workshop Day 3, Morning",
    topics: [
      "Cross-functional coordination",
      "Conflict resolution frameworks",
      "Communication protocols",
      "Building psychological safety",
    ],
    outcomes: "Aligned teams that collaborate effectively across boundaries without constant intervention.",
  },
  {
    icon: Gauge,
    title: "Performance & Adaptation",
    duration: "Workshop Day 3, Afternoon",
    topics: [
      "Leading vs. lagging indicators",
      "Feedback loop design",
      "Course correction triggers",
      "Learning from execution",
    ],
    outcomes: "Self-correcting execution systems that adapt quickly to changing conditions.",
  },
];

const SELCurriculumSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="relative bg-obsidian py-24 md:py-32 overflow-hidden noise-overlay">
      {/* Geometric accents */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-primary/10 rotate-45" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-primary/5 rotate-12" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className={cn(
          "text-center mb-16 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            Curriculum
          </span>
          <h2 className="text-display-lg font-display font-bold text-white mb-4">
            What Your Team Will Master
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            Six integrated modules designed to transform how your leadership team thinks, decides, and executes.
          </p>
        </div>

        {/* Accordion modules */}
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className={cn(
                "border border-white/10 overflow-hidden transition-all duration-400 opacity-0",
                openIndex === index && "border-primary/50",
                isInView && "animate-fade-up"
              )}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "w-full flex items-center gap-6 p-6 text-left transition-colors",
                  openIndex === index ? "bg-charcoal" : "bg-charcoal/30 hover:bg-charcoal/50"
                )}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 flex-shrink-0">
                  <module.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-display font-bold text-white">
                    {module.title}
                  </h3>
                  <span className="text-sm text-steel">{module.duration}</span>
                </div>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-primary transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>

              {/* Content */}
              <div className={cn(
                "overflow-hidden transition-all duration-400",
                openIndex === index ? "max-h-96" : "max-h-0"
              )}>
                <div className="p-6 pt-0 bg-charcoal">
                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                        Key Topics
                      </h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                            <span className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                        Outcome
                      </h4>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {module.outcomes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SELCurriculumSection;
