import { useInView } from "@/hooks/useInView";
import { Target, Compass } from "lucide-react";

const VisionMissionSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-warm-stone">
      <div className="container-padding max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Vision Card */}
          <div className="bg-background p-10 border-2 border-primary relative group hover:shadow-gold-glow transition-all duration-300">
            <div className="absolute top-0 left-0 w-16 h-16 bg-primary flex items-center justify-center">
              <Compass className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="pt-12">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become Africa's most trusted sanctuary for strategic transformation—where 
                leaders come to reconstruct how they think, decide, and act, emerging as 
                architects of clarity in a world of noise.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-obsidian p-10 border-2 border-primary relative group hover:shadow-gold-glow transition-all duration-300">
            <div className="absolute top-0 left-0 w-16 h-16 bg-primary flex items-center justify-center">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="pt-12">
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-steel leading-relaxed">
                To unleash the next generation of African visionaries with the high-leverage 
                tools necessary to turn vague potential into exponential impact through 
                superior judgment and disciplined execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
