import { useInView } from "@/hooks/useInView";
import { Target, Layers, Zap, Compass } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Clarity Before Action",
    description: "We believe that strategic clarity is the precursor to all meaningful action. Without it, even the most energetic execution becomes mere motion without progress.",
    emphasis: "See before you move"
  },
  {
    icon: Layers,
    title: "Depth Over Breadth",
    description: "Surface-level understanding breeds mediocre decisions. We drill deep into first principles, uncovering the fundamental dynamics that govern outcomes.",
    emphasis: "Drill down, don't skim"
  },
  {
    icon: Zap,
    title: "Transformation Over Transaction",
    description: "We're not in the business of delivering information. We're in the business of catalyzing permanent shifts in how people think, decide, and lead.",
    emphasis: "Change the operating system"
  },
  {
    icon: Compass,
    title: "Context Over Copy",
    description: "African challenges require African solutions. We don't import frameworks wholesale—we forge tools that work in our unique economic and cultural landscape.",
    emphasis: "Built for Africa"
  }
];

const PhilosophySection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-3xl mb-16">
          <span className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
            Transformation Philosophy
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-obsidian mb-6">
            The Beliefs That<br />Guide Our Work
          </h2>
          <p className="text-charcoal text-lg leading-relaxed">
            Every methodology is built on assumptions. Here are ours—forged through 
            years of working with African leaders and organizations navigating 
            complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={principle.title}
              className={`group p-8 bg-warm-stone/30 border border-warm-stone/50 hover:border-gold/50 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <principle.icon className="w-10 h-10 text-gold mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-2xl text-obsidian mb-4">
                {principle.title}
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                {principle.description}
              </p>
              <span className="text-gold font-sans text-sm tracking-wide uppercase">
                {principle.emphasis}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
