import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const FeaturedArticleSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container-wide">
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 items-center opacity-0",
          isInView && "animate-fade-up"
        )}>
          {/* Image placeholder */}
          <div className="relative bg-warm-stone aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian/80 to-obsidian/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-display font-black text-primary/30">FEATURED</span>
              </div>
            </div>
            {/* Category badge */}
            <div className="absolute top-6 left-6 px-3 py-1 bg-primary text-obsidian text-xs font-semibold uppercase tracking-wider">
              Strategic Thinking
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>December 5, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>12 min read</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              The Architecture of Clarity: Why Most Strategic Plans Fail Before They Start
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Most organizations confuse strategic planning with strategy. They produce documents when they need decisions. 
              They create presentations when they need alignment. This fundamental confusion is why 70% of strategies fail 
              at execution—not because the strategy was wrong, but because it was never truly formed.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-lg font-display font-bold text-obsidian">H</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Hupo Faculty</p>
                <p className="text-sm text-muted-foreground">Founder & Lead Faculty</p>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group mt-4">
              Read Full Article
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticleSection;