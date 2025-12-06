import { useInView } from "@/hooks/useInView";

const ProvocationSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-obsidian py-24 md:py-32 lg:py-40 relative overflow-hidden noise-overlay">
      {/* Geometric Accent */}
      <div className="absolute top-1/2 left-0 w-32 h-1 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 border border-primary/10 rotate-45 -translate-x-1/2" />

      <div className="container-narrow relative z-10">
        {/* Section Label */}
        <div 
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8 block">
            The Challenge
          </span>
        </div>

        {/* Main Quote */}
        <h2 
          className={`font-display text-3xl md:text-4xl lg:text-display-md text-white font-bold leading-tight mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Most Leaders Don't Fail from Lack of Intelligence.
          <span className="text-primary"> They Fail from Lack of Structured Thought.</span>
        </h2>

        {/* Body Text */}
        <div 
          className={`space-y-6 text-steel text-body-lg leading-relaxed transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <p>
            Across Africa, brilliant executives are trapped in firefighting mode. 
            Strategies die between vision and execution. Teams lack the capability 
            to lead without constant oversight. Decisions are inconsistent. 
            Scale remains elusive.
          </p>
          <p>
            This isn't an ambition problem. <strong className="text-white">It's an architecture problem.</strong>
          </p>
          <p className="text-white text-xl font-display italic border-l-4 border-primary pl-6 mt-8">
            Your results are downstream of your thinking. Transform the structure 
            of thought, and everything changes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProvocationSection;
