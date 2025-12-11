import { useInView } from "@/hooks/useInView";

const phases = [
  {
    number: "01",
    title: "Diagnose",
    description: "We start by understanding where you are—your current strategic position, capabilities, constraints, and aspirations. No assumptions, only evidence.",
    duration: "Weeks 1-2"
  },
  {
    number: "02",
    title: "Deconstruct",
    description: "We break down your challenges into first principles. What seems complex often reveals elegant simplicity when properly decomposed.",
    duration: "Weeks 2-3"
  },
  {
    number: "03",
    title: "Design",
    description: "Armed with clarity, we co-create strategic frameworks tailored to your context. These become your navigation instruments for decision-making.",
    duration: "Weeks 3-4"
  },
  {
    number: "04",
    title: "Deliberate",
    description: "Practice isn't repetition—it's intentional refinement. We create structured opportunities to apply frameworks under pressure and receive feedback.",
    duration: "Weeks 4-5"
  },
  {
    number: "05",
    title: "Deploy",
    description: "Strategy meets reality. We support the transition from learning environment to live application, ensuring frameworks translate to outcomes.",
    duration: "Weeks 5-6"
  }
];

const MethodologySection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 bg-warm-stone/20">
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
              The 5D Methodology
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-obsidian mb-6">
              A Systematic Path<br />to Transformation
            </h2>
            <p className="text-charcoal text-lg leading-relaxed mb-8">
              Transformation isn't magic—it's method. Our 5D framework provides a 
              structured pathway from current state to strategic mastery, with clear 
              milestones and measurable progress.
            </p>
            <div className="flex items-center gap-4 text-sm text-charcoal">
              <div className="w-12 h-px bg-gold" />
              <span>Typically completed in 6 weeks</span>
            </div>
          </div>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div 
                key={phase.title}
                className={`group relative pl-16 pb-8 border-l-2 border-warm-stone hover:border-gold transition-colors duration-300 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 bg-white border-2 border-warm-stone group-hover:border-gold group-hover:bg-gold transition-all duration-300 flex items-center justify-center">
                  <span className="text-xs font-sans text-charcoal group-hover:text-obsidian">{phase.number}</span>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-display text-2xl text-obsidian">
                    {phase.title}
                  </h3>
                  <span className="text-xs text-warm-stone font-sans tracking-wide uppercase">
                    {phase.duration}
                  </span>
                </div>
                <p className="text-charcoal leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
