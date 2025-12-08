import { Clock, Users, Layers, Flame } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const challenges = [
  {
    icon: Clock,
    title: "Slow Execution",
    description: "Decisions made at the top take months to translate into action. Momentum dies in the gap between strategy and frontline.",
  },
  {
    icon: Users,
    title: "Frequent Escalations",
    description: "Leaders spend 70%+ of their time on decisions their teams should handle. The bottleneck is always at the top.",
  },
  {
    icon: Layers,
    title: "Siloed Departments",
    description: "Functions optimize locally while the organization suffers globally. Cross-functional friction consumes energy.",
  },
  {
    icon: Flame,
    title: "Firefighting Mode",
    description: "Every week is consumed by urgent problems. Strategic priorities get perpetually postponed for operational crises.",
  },
];

const SELChallengeSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative bg-obsidian py-24 md:py-32 overflow-hidden noise-overlay">
      {/* Geometric accent */}
      <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-primary to-transparent" />
      
      <div className="container-wide relative z-10">
        {/* Section label */}
        <div className={cn(
          "text-center mb-16 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Challenge
          </span>
        </div>

        {/* Main headline */}
        <h2 className={cn(
          "text-display-lg md:text-display-xl font-display font-bold text-white text-center max-w-5xl mx-auto mb-8 opacity-0",
          isInView && "animate-fade-up stagger-1"
        )}>
          The Execution Gap: When Smart Strategy{" "}
          <span className="text-primary">Meets Reality</span>
        </h2>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className={cn(
                "group p-8 bg-charcoal/50 border border-white/5 hover:border-primary/30 transition-all duration-400 opacity-0",
                isInView && "animate-fade-up"
              )}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <challenge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {challenge.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className={cn(
          "mt-20 text-center opacity-0",
          isInView && "animate-fade-up"
        )} style={{ animationDelay: '0.7s' }}>
          <blockquote className="relative inline-block">
            <span className="absolute -top-8 -left-4 text-8xl text-primary/20 font-display">"</span>
            <p className="text-2xl md:text-3xl font-display text-white italic max-w-3xl">
              The problem isn't your people.
              <br />
              <span className="text-primary">It's the absence of execution architecture.</span>
            </p>
          </blockquote>
        </div>
      </div>

      {/* Diagonal gold line accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-primary to-transparent" />
    </section>
  );
};

export default SELChallengeSection;
