import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";

const ImpactCTASection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-obsidian overflow-hidden noise-overlay">
      {/* Geometric accents */}
      <div className="absolute top-1/4 left-10 w-64 h-64 border border-primary/10 rotate-45" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-primary/5 -rotate-12" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5" />

      <div className="container-wide relative z-10 text-center">
        <div className={cn(
          "max-w-3xl mx-auto opacity-0",
          isInView && "animate-fade-up"
        )}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8">
            Your Transformation Awaits
          </span>
          
          <h2 className="text-display-md md:text-display-lg font-display font-black text-white mb-6">
            Ready to Write Your
            <br />
            <span className="text-primary">Transformation Story?</span>
          </h2>
          
          <p className="text-xl text-steel max-w-2xl mx-auto mb-12">
            Join the leaders and organizations who have chosen depth over shortcuts 
            and are now reaping the rewards of genuine strategic capability.
          </p>

          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center opacity-0",
            isInView && "animate-fade-up stagger-2"
          )}>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/apply">
                Start Your Application
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl" className="group">
              <Link to="/programs">
                <Calendar className="w-5 h-5" />
                Explore Programs
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
};

export default ImpactCTASection;