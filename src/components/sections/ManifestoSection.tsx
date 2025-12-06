import { useInView } from "@/hooks/useInView";

const manifestoPoints = [
  {
    number: "01",
    principle: "Depth Over Width",
    description: "We don't skim the surface; we drill down.",
  },
  {
    number: "02",
    principle: "Insight Over Information",
    description: "Data is cheap; wisdom is rare.",
  },
  {
    number: "03",
    principle: "The Trenches Over The Classroom",
    description: "Theory fails without execution.",
  },
  {
    number: "04",
    principle: "Transformation Over Certification",
    description: "We chase the outcome, not the paper.",
  },
  {
    number: "05",
    principle: "Multiplication Over Addition",
    description: "True strategy doesn't just add value; it compounds it.",
  },
];

const ManifestoSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-warm-stone py-24 md:py-32 lg:py-40 relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div 
              className={`sticky top-32 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-display-md font-bold text-foreground mb-6">
                What We Stand For
              </h2>
              <p className="text-body-lg text-muted-foreground">
                These five principles guide everything we do at Hupo. 
                They are non-negotiable.
              </p>
            </div>
          </div>

          {/* Right Column - Manifesto Cards */}
          <div className="lg:col-span-3 space-y-6">
            {manifestoPoints.map((point, index) => (
              <div
                key={point.number}
                className={`group bg-background p-8 md:p-10 border border-border hover:border-primary transition-all duration-500 card-lift ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <span className="text-6xl md:text-7xl font-display font-black text-primary/20 group-hover:text-primary/40 transition-colors leading-none">
                    {point.number}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {point.principle}
                    </h3>
                    <p className="text-muted-foreground text-body-lg">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
