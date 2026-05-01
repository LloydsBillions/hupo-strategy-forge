import { useInView } from "@/hooks/useInView";
import { ArrowRight, Building2, User, TrendingDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-warm-stone py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background Geometric Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-display-md font-bold text-foreground mb-4">
            Transform Your Thinking. Command Your Market.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-black font-normal text-xl">
            We help businesses rethink strategy, optimize execution, and dominate competitive landscapes using
            data-driven insights and practical systems.Cut through noise. Define exactly where you win and why.Turn
            strategy into repeatable processes that scale. “If your strategy is average, your results will be
            predictable.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
