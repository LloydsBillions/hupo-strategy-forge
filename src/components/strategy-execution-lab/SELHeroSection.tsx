import { Link } from "react-router-dom";
import { ArrowRight, Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const SELHeroSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] flex items-center bg-obsidian overflow-hidden"
    >
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary/20 rotate-45" />
        <div className="absolute bottom-20 left-10 w-64 h-64 border border-primary/10 rotate-12" />
        <div className="absolute top-1/2 right-1/4 w-2 h-32 bg-primary/30" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="container-wide relative z-10 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav className={cn(
          "flex items-center gap-2 text-sm text-steel mb-8 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary">Strategy Execution Lab</span>
        </nav>

        <div className="max-w-4xl">
          {/* Badge */}
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-8 opacity-0",
            isInView && "animate-fade-up stagger-1"
          )}>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              For Organizations
            </span>
          </div>

          {/* Headline */}
          <h1 className={cn(
            "text-display-xl md:text-[5rem] lg:text-[6rem] font-display font-black text-white leading-none mb-6 opacity-0",
            isInView && "animate-fade-up stagger-2"
          )}>
            Strategy
            <br />
            <span className="text-primary">Execution Lab</span>
          </h1>

          {/* Subheadline */}
          <p className={cn(
            "text-2xl md:text-3xl text-white/80 font-display mb-6 opacity-0",
            isInView && "animate-fade-up stagger-3"
          )}>
            Where leadership teams learn to turn strategy into consistent, measurable results
          </p>

          {/* Supporting text */}
          <p className={cn(
            "text-lg text-steel max-w-2xl mb-10 opacity-0",
            isInView && "animate-fade-up stagger-4"
          )}>
            A 12-week transformation program combining diagnostic precision, intensive workshop 
            immersion, and implementation coaching—designed specifically for African organizational complexity.
          </p>

          {/* CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 mb-12 opacity-0",
            isInView && "animate-fade-up stagger-5"
          )}>
            <Button variant="hero" size="xl" className="group">
              Request Detailed Proposal
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Download className="w-5 h-5" />
              Download Program Overview
            </Button>
          </div>

          {/* Trust line */}
          <p className={cn(
            "text-sm text-steel opacity-0",
            isInView && "animate-fade-up"
          )} style={{ animationDelay: '0.6s' }}>
            Delivered to 8+ organizations across financial services, FMCG, and professional services
          </p>
        </div>

        {/* Floating metrics */}
        <div className={cn(
          "absolute bottom-20 right-10 hidden lg:block opacity-0",
          isInView && "animate-slide-in-right"
        )} style={{ animationDelay: '0.8s' }}>
          <div className="bg-charcoal/80 backdrop-blur-sm border border-primary/20 p-8">
            <div className="space-y-6">
              <div>
                <span className="text-4xl font-display font-black text-primary">60%</span>
                <p className="text-sm text-steel mt-1">Avg. Escalation Reduction</p>
              </div>
              <div className="w-full h-px bg-primary/30" />
              <div>
                <span className="text-4xl font-display font-black text-primary">2x</span>
                <p className="text-sm text-steel mt-1">Execution Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SELHeroSection;
