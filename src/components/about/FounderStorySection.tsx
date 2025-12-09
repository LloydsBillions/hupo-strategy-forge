import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const FounderStorySection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-background">
      <div className="container-padding max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 text-center">
            The Founder
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            The Architect Behind Hupo
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Founder Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-16 h-1 bg-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold text-white">
                    [Founder Name]
                  </h3>
                  <p className="text-primary font-medium">
                    Founder & Lead Faculty
                  </p>
                </div>
              </div>
              {/* Geometric accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary -z-10" />
            </div>

            {/* Founder Story */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-muted-foreground leading-relaxed">
                  The journey to Hupo began not in a classroom, but in the trenches of 
                  real-world strategy execution. After years of watching brilliant strategies 
                  die between boardroom approval and frontline implementation, a pattern emerged 
                  that couldn't be ignored.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Across Africa's most ambitious organizations, the gap wasn't in ambition or 
                  intelligence—it was in the cognitive architecture that transforms insight into 
                  action. Leaders were drowning in information while starving for wisdom. They 
                  knew what to do but struggled with how to think about it.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hupo was born from a conviction: that strategic excellence can be systematically 
                  developed. Not through more frameworks or certifications, but through 
                  reconstructing the very structure of thought that precedes every decision.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, Hupo stands as Africa's first School of Strategic Thought—a sanctuary 
                  where leaders pause the noise to rebuild their capacity for clarity, judgment, 
                  and execution at scale.
                </p>
              </div>

              {/* Credentials */}
              <div className="border-t border-border pt-6 mt-8">
                <h4 className="font-semibold text-foreground mb-4">Background</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5" />
                    Former strategy executive at leading African institutions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5" />
                    15+ years in strategic planning and execution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5" />
                    Advised 50+ organizations on transformation initiatives
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5" />
                    Speaker at Pan-African leadership forums
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;
