import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { Linkedin } from "lucide-react";

export const STLFacultySection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-warm-stone">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Your Guide
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Learn from the Architect
          </h2>
        </div>

        {/* Faculty Card */}
        <div 
          className={`max-w-4xl mx-auto bg-background border border-border transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-5 gap-0">
            {/* Photo placeholder */}
            <div className="md:col-span-2 bg-obsidian min-h-[300px] md:min-h-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-charcoal rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-primary">H</span>
                </div>
                <p className="text-steel text-sm">Faculty Photo</p>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                [Founder Name]
              </h3>
              <p className="text-primary font-medium mb-6">
                Founder & Lead Faculty
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  After years of watching brilliant executives struggle not from lack of 
                  intelligence but from lack of structured thought, I founded Hupo to address 
                  the root cause of strategic failure.
                </p>
                <p>
                  My approach combines deep experience in organizational transformation with 
                  rigorous frameworks from decision science, systems thinking, and cognitive 
                  psychology. I've worked with leadership teams across financial services, 
                  FMCG, and professional services to build genuine strategic capability.
                </p>
                <p>
                  I believe strategic thinking isn't a gift—it's a skill that can be taught, 
                  practiced, and mastered. My role is to be your guide on that journey.
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-2 h-2 bg-primary" />
                  15+ years in organizational transformation
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-2 h-2 bg-primary" />
                  Trained 50+ senior leaders across Africa
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-2 h-2 bg-primary" />
                  Speaker at TEDx, Africa Leadership Summit
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link to="/about">Read Full Story</Link>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
