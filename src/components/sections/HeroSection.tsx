import { useEffect, useState } from "react";
import { ChevronRight, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoMarquee from "@/components/ui/LogoMarquee";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-obsidian overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 border border-white rotate-45" />
          <div className="absolute bottom-40 left-10 w-64 h-64 border border-white rotate-12" />
          <div className="absolute top-1/3 left-1/4 w-48 h-48 border border-primary rotate-45" />
        </div>
        
        {/* Diagonal Gold Line */}
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent transform -skew-x-12 origin-top-right" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />
      </div>

      <div className="container-wide relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Super Headline */}
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="inline-block text-primary text-sm font-bold uppercase tracking-[0.3em] mb-8">
              Architects of Clarity
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-display-xl font-black text-white leading-none mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            WHERE STRATEGIC
            <br />
            <span className="text-primary">LEADERS ARE FORGED</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl lg:text-3xl text-steel font-display mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Think Deeply. Decide Wisely. Execute Consistently.
          </p>

          {/* Supporting Text */}
          <p 
            className={`text-body-lg text-steel/80 max-w-2xl mx-auto mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms' }}
          >
            Africa's first School of Strategic Thought—where leaders pause the noise 
            to reconstruct how they think, decide, and act.
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <Button variant="hero" size="lg" className="group min-w-[220px]">
              Explore Programs
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="lg" className="min-w-[220px]">
              Take Free Assessment
            </Button>
          </div>

          {/* Trust Indicators - Logo Marquee */}
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <LogoMarquee />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Responsive & Animated */}
      <div 
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '900ms' }}
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-wider hidden sm:block">
          Scroll to Discover
        </span>
        <div className="animate-bounce-gentle">
          <MousePointer2 className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
