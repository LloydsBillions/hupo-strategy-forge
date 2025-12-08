import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

const transformations = [
  {
    from: "Reactive",
    to: "Reflective",
    description: "Stop firefighting. Start anticipating and shaping outcomes before they emerge."
  },
  {
    from: "Complexity",
    to: "Clarity",
    description: "See through the noise. Identify the leverage points that matter most."
  },
  {
    from: "Insight",
    to: "Impact",
    description: "Transform good ideas into disciplined action that compounds over time."
  }
];

export const STLOpportunitySection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-obsidian text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            The Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8">
            Why Strategic Thinking Mastery Matters
          </h2>
        </div>

        {/* Large Quote */}
        <div 
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display italic text-primary leading-relaxed">
            "Most leaders know what to do.
            <br />
            They struggle with how to think about it."
          </blockquote>
        </div>

        {/* Transformation Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div 
              key={index}
              className={`group bg-charcoal p-8 border border-steel/20 hover:border-primary/50 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Transformation Arrow */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-steel text-lg line-through">{item.from}</span>
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="text-primary text-xl font-bold">{item.to}</span>
              </div>

              {/* Description */}
              <p className="text-steel leading-relaxed">
                {item.description}
              </p>

              {/* Accent line */}
              <div className="mt-6 h-1 bg-primary/20 group-hover:bg-primary transition-colors duration-300" 
                style={{ width: '40%' }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
