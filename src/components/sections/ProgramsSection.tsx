import { useInView } from "@/hooks/useInView";
import { ArrowRight, Building2, User, TrendingDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-warm-stone py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background Geometric Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-display-md font-bold text-foreground mb-4">
            Transform Your Thinking. Command Your Market.
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Strategy Execution Lab - Larger Card */}
          <div 
            className={`lg:col-span-3 bg-obsidian text-white p-8 md:p-10 lg:p-12 relative overflow-hidden group transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Gold Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 transform rotate-45 translate-x-16 -translate-y-16" />
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1.5 mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-wider">For Organizations</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Strategy Execution Lab
              </h3>

              {/* Subtitle */}
              <p className="text-steel text-lg mb-8">
                Turn strategy into measurable, sustained results
              </p>

              {/* Key Points */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-steel">
                  <span className="text-primary mt-1">•</span>
                  Custom diagnostic + 3-day intensive workshop
                </li>
                <li className="flex items-start gap-3 text-steel">
                  <span className="text-primary mt-1">•</span>
                  90-day implementation with expert coaching
                </li>
                <li className="flex items-start gap-3 text-steel">
                  <span className="text-primary mt-1">•</span>
                  60% average reduction in escalations
                </li>
                <li className="flex items-start gap-3 text-steel">
                  <span className="text-primary mt-1">•</span>
                  For leadership teams of 8-20
                </li>
              </ul>

              {/* Metrics Callout */}
              <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b border-steel/20">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold text-lg">60% ↓ Escalations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold text-lg">2x Execution Speed</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" className="group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="lg">
                  Request Proposal
                </Button>
              </div>
            </div>
          </div>

          {/* Strategic Thinking Lab - Smaller Card */}
          <div 
            className={`lg:col-span-2 bg-background border-2 border-border p-8 md:p-10 relative overflow-hidden group hover:border-primary transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-ember/10 px-3 py-1.5 mb-6">
              <User className="w-4 h-4 text-ember" />
              <span className="text-ember text-xs font-bold uppercase tracking-wider">For Individuals</span>
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Strategic Thinking Lab
            </h3>

            {/* Subtitle */}
            <p className="text-muted-foreground text-lg mb-6">
              How leaders learn to see systems beneath problems
            </p>

            {/* Key Points */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                6-week hybrid cohort program
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                Live sessions + peer learning
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                85% sustained behavior change
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                Limited to 25 participants
              </li>
            </ul>

            {/* Cohort Info */}
            <div className="bg-muted p-4 mb-8">
              <div className="text-sm font-bold uppercase tracking-wider text-primary mb-1">
                Next Cohort: May 2026
              </div>
              <div className="text-2xl font-display font-bold text-foreground">
                From ₦900,000
              </div>
            </div>

            {/* CTA */}
            <Button variant="default" size="lg" className="w-full group/btn">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
