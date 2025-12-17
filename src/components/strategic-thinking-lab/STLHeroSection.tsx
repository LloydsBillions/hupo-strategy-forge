import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const STLHeroSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 pb-16 bg-background overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-ember/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-px h-32 bg-primary/30" />
      
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className={cn(
          "flex items-center gap-2 text-sm text-muted-foreground mb-8 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary">Strategic Thinking Lab</span>
        </nav>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Badge */}
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 bg-ember/10 border border-ember/20 rounded-sm opacity-0",
              isInView && "animate-fade-up stagger-1"
            )}>
              <span className="text-ember text-sm font-medium uppercase tracking-wider">
                For Individuals
              </span>
            </div>

            {/* Headline */}
            <h1 className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight break-words opacity-0",
              isInView && "animate-fade-up stagger-2"
            )}>
              Strategic Thinking Lab
            </h1>

            {/* Subheadline */}
            <p className={cn(
              "text-xl md:text-2xl text-muted-foreground font-medium opacity-0",
              isInView && "animate-fade-up stagger-3"
            )}>
              How Leaders Learn to See the System Beneath the Problem
            </p>

            {/* Supporting text */}
            <p className={cn(
              "text-lg text-muted-foreground max-w-2xl opacity-0",
              isInView && "animate-fade-up stagger-4"
            )}>
              A 6-week hybrid cohort program that transforms how you think, 
              decide, and execute. Master systems thinking, strengthen judgment 
              under uncertainty, and build your personal operating system.
            </p>

            {/* CTAs */}
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 opacity-0",
              isInView && "animate-fade-up stagger-5"
            )}>
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/apply">
                  Apply Now
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/contact">Join Waitlist</Link>
              </Button>
            </div>

            {/* Trust line */}
            <p className={cn(
              "text-sm text-muted-foreground opacity-0",
              isInView && "animate-fade-up"
            )} style={{ animationDelay: '0.6s' }}>
              Join 50+ strategic leaders transformed across Africa
            </p>
          </div>

          {/* Cohort Info Box */}
          <div className={cn(
            "lg:col-span-2 opacity-0",
            isInView && "animate-slide-in-right"
          )} style={{ animationDelay: '0.4s' }}>
            <div className="bg-primary text-primary-foreground p-8 space-y-6 shadow-gold-glow">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-semibold uppercase tracking-wider">
                  Next Cohort
                </span>
              </div>
              
              <div className="text-4xl font-display font-bold">
                May 2026
              </div>

              <div className="space-y-4 pt-4 border-t border-primary-foreground/20">
                <div>
                  <div className="text-sm opacity-80 mb-1">Early Bird Price</div>
                  <div className="text-2xl font-bold">₦900,000</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-1">Regular Price</div>
                  <div className="text-xl">₦1,125,000</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-primary-foreground/20">
                <Users className="w-5 h-5" />
                <span className="font-medium">Limited to 25 Participants</span>
              </div>

              <Button 
                asChild 
                variant="dark" 
                size="lg" 
                className="w-full bg-obsidian hover:bg-charcoal transition-all duration-300"
              >
                <Link to="/apply">Secure Your Spot</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
