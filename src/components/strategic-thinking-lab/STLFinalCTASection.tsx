import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users } from "lucide-react";

export const STLFinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
            Ready to Transform How You Think?
          </h2>

          {/* Cohort reminder */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-12 p-6 bg-muted">
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button asChild variant="hero" size="xl">
              <Link to="/apply">Apply for May 2026</Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/contact">Join September Waitlist</Link>
            </Button>
          </div>

          {/* Questions */}
          <p className="text-muted-foreground">
            Have questions? <Link to="/contact" className="text-primary hover:underline">Schedule a call</Link> with our team
          </p>
        </div>
      </div>
    </section>
  );
};
