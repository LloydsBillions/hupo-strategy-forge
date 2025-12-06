import { useInView } from "@/hooks/useInView";
import { Brain, Scale, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Brain,
    title: "THINK BETTER",
    description: "Master systems thinking, mental models, and strategic sensemaking. See complexity clearly. Frame problems correctly. Anticipate before others react.",
    bgClass: "bg-obsidian",
    textClass: "text-white",
    iconClass: "text-primary",
  },
  {
    icon: Scale,
    title: "DECIDE WISER",
    description: "Strengthen judgment under uncertainty. Manage cognitive biases. Prioritize ruthlessly. Make high-quality decisions consistently despite complexity.",
    bgClass: "bg-primary",
    textClass: "text-primary-foreground",
    iconClass: "text-primary-foreground",
  },
  {
    icon: Cog,
    title: "EXECUTE DEEPER",
    description: "Build personal operating systems. Create organizational execution rhythms. Turn strategic insight into disciplined action at scale.",
    bgClass: "bg-obsidian",
    textClass: "text-white",
    iconClass: "text-primary",
  },
];

const MetaCurriculumSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-background py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={`font-display text-3xl md:text-4xl lg:text-display-md font-bold text-foreground mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            The Hupo Meta-Curriculum
          </h2>
          <p 
            className={`text-body-xl text-muted-foreground transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            We don't teach business management. We reconstruct the cognitive 
            architecture that makes great leadership possible.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-0">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`${pillar.bgClass} ${pillar.textClass} p-8 md:p-10 lg:p-12 transition-all duration-700 group hover:scale-[1.02] relative ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mb-8 ${pillar.iconClass}`}>
                <pillar.icon className="w-full h-full stroke-[1.5]" />
              </div>

              {/* Title */}
              <h3 className={`font-display text-2xl md:text-3xl font-bold mb-4 ${index === 1 ? 'text-primary-foreground' : 'text-primary'}`}>
                {pillar.title}
              </h3>

              {/* Description */}
              <p className={`text-body-lg leading-relaxed ${index === 1 ? 'text-primary-foreground/90' : 'text-steel'}`}>
                {pillar.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 ${index === 1 ? 'bg-obsidian' : 'bg-primary'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <Button variant="outline" size="lg">
            Discover The Approach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MetaCurriculumSection;
