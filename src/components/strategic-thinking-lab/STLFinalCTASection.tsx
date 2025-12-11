import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const STLFinalCTASection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className={cn(
          "max-w-4xl mx-auto text-center opacity-0",
          isInView && "animate-fade-up"
        )}>
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
            Ready to Transform How You Think?
          </h2>

          {/* Cohort reminder */}
          <div className={cn(
            "inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-12 p-6 bg-muted opacity-0",
            isInView && "animate-fade-up stagger-1"
          )}>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">May 2026 Cohort</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">25 Spots Only</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="text-primary font-bold">
              From ₦900,000
            </div>
          </div>

          {/* CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row justify-center gap-4 mb-8 opacity-0",
            isInView && "animate-fade-up stagger-2"
          )}>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/apply">
                Apply for May 2026
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/contact">Join September Waitlist</Link>
            </Button>
          </div>

          {/* Questions */}
          <p className={cn(
            "text-muted-foreground opacity-0",
            isInView && "animate-fade-up stagger-3"
          )}>
            Have questions? <Link to="/contact" className="text-primary hover:underline link-underline">Schedule a call</Link> with our team
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
};
