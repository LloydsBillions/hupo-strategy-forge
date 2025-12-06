import { useInView } from "@/hooks/useInView";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-background py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 
            className={`font-display text-4xl md:text-5xl lg:text-display-lg font-bold text-foreground mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Ready to Become an
            <span className="text-primary"> Architect of Clarity</span>?
          </h2>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <Button variant="hero" size="lg" className="group min-w-[220px]">
              Explore Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group min-w-[220px]">
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </Button>
          </div>

          {/* Supporting Text */}
          <p 
            className={`text-muted-foreground mt-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            Limited spots available for 2026 cohorts. Applications reviewed on a rolling basis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
