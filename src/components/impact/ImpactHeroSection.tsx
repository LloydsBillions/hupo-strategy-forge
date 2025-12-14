import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ImpactHeroSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative bg-obsidian py-32 md:py-40 overflow-hidden noise-overlay">
      {/* Geometric accents */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rotate-45" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/5 rotate-12" />
      <div className="absolute top-1/3 left-1/4 w-px h-32 bg-primary/30" />

      <div className="container-wide relative z-10">
        {/* Breadcrumb */}
        <nav className={cn(
          "flex items-center gap-2 text-sm text-steel mb-8 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary">Impact</span>
        </nav>

        <div className="max-w-4xl">
          {/* Badge */}
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-8 opacity-0",
            isInView && "animate-fade-up stagger-1"
          )}>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Proof of Transformation
            </span>
          </div>

          {/* Headline */}
          <h1 className={cn(
            "text-3xl sm:text-4xl md:text-5xl lg:text-display-lg xl:text-display-xl font-display font-black text-white leading-none mb-6 opacity-0",
            isInView && "animate-fade-up stagger-2"
          )}>
            Measurable
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-primary">Impact</span>
          </h1>

          {/* Subheadline */}
          <p className={cn(
            "text-xl md:text-2xl text-steel max-w-2xl mb-8 opacity-0",
            isInView && "animate-fade-up stagger-3"
          )}>
            Real stories of transformation from leaders and organizations who chose depth over shortcuts.
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
    </section>
  );
};

export default ImpactHeroSection;