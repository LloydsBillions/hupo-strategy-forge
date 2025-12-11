import { useInView } from "@/hooks/useInView";

const ApproachHeroSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-obsidian overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-gold/20" />
      
      <div 
        ref={ref}
        className={`container mx-auto px-6 py-32 text-center relative z-10 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="inline-block text-gold font-sans text-sm tracking-[0.2em] uppercase mb-6">
          Our Methodology
        </span>
        <h1 className="font-display text-5xl md:text-7xl text-white mb-8 tracking-tight">
          The Hupo<br />
          <span className="text-gold">Approach</span>
        </h1>
        <p className="text-warm-stone text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
          A systematic methodology for transforming strategic potential into 
          measurable impact through deliberate practice and structured thinking.
        </p>
      </div>
    </section>
  );
};

export default ApproachHeroSection;
