import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const SELFinalCTASection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative bg-obsidian py-24 md:py-40 overflow-hidden noise-overlay">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-primary/10 rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-primary/5 -rotate-12" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5" />
      </div>

      <div className="container-wide relative z-10 text-center">
        <div className={cn(
          "max-w-4xl mx-auto opacity-0",
          isInView && "animate-fade-up"
        )}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8">
            Take the First Step
          </span>
          
          <h2 className="text-display-lg md:text-display-xl font-display font-black text-white mb-6">
            Ready to Transform How Your
            <br />
            <span className="text-primary">Organization Executes?</span>
          </h2>
          
          <p className="text-xl text-steel max-w-2xl mx-auto mb-12">
            Join the leading African organizations that have rebuilt their execution architecture 
            with the Strategy Execution Lab.
          </p>

          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center opacity-0",
            isInView && "animate-fade-up stagger-2"
          )}>
            <Button variant="hero" size="xl" className="group">
              Request Proposal
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Schedule Discovery Call
            </Button>
          </div>

          <p className={cn(
            "text-sm text-steel mt-10 opacity-0",
            isInView && "animate-fade-up stagger-3"
          )}>
            Typical engagement starts within 4-6 weeks of proposal acceptance
          </p>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
};

export default SELFinalCTASection;
