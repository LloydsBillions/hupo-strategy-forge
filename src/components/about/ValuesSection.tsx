import { useInView } from "@/hooks/useInView";

const values = [
  {
    number: "01",
    title: "Depth Over Width",
    description: "We don't skim the surface; we drill down.",
  },
  {
    number: "02",
    title: "Insight Over Information",
    description: "Data is cheap; wisdom is rare.",
  },
  {
    number: "03",
    title: "The Trenches Over The Classroom",
    description: "Theory fails without execution.",
  },
  {
    number: "04",
    title: "Transformation Over Certification",
    description: "We chase the outcome, not the paper.",
  },
  {
    number: "05",
    title: "Multiplication Over Addition",
    description: "True strategy doesn't just add value; it compounds it.",
  },
];

const ValuesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-obsidian">
      <div className="container-padding max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 text-center">
            What We Stand For
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Our Non-Negotiable Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.number}
                className={`group p-8 border border-charcoal hover:border-primary transition-all duration-300 ${
                  index === 4 ? "lg:col-start-2" : ""
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 100}ms` : "0ms",
                }}
              >
                <span className="font-display text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {value.number}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-4 mb-2">
                  {value.title}
                </h3>
                <p className="text-steel">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
