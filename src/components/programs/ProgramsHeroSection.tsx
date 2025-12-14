import { useInView } from "@/hooks/useInView";

const ProgramsHeroSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-obsidian overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45" />
      <div className="absolute bottom-20 right-20 w-48 h-48 border border-gold/10" />
      
      <div 
        ref={ref}
        className={`container mx-auto px-6 py-32 text-center relative z-10 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="inline-block text-gold font-sans text-sm tracking-[0.2em] uppercase mb-6">
          Our Programs
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 tracking-tight">
          Choose Your Path to
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="text-gold">Strategic Mastery</span>
        </h1>
        <p className="text-warm-stone text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
          Two distinct programs designed for different contexts, united by a 
          single purpose: transforming how you think, decide, and lead.
        </p>
      </div>
    </section>
  );
};

export default ProgramsHeroSection;
