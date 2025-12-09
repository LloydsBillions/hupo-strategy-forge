import { useInView } from "@/hooks/useInView";
import { User, Building2, ArrowRight } from "lucide-react";

const PathSelector = () => {
  const { ref, isInView } = useInView();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="container-padding max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Individual Path */}
          <button
            onClick={() => scrollToSection("individual")}
            className="group p-8 bg-warm-stone border-2 border-transparent hover:border-ember transition-all duration-300 text-left"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-ember/10 flex items-center justify-center">
                <User className="w-7 h-7 text-ember" />
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-ember group-hover:translate-x-1 transition-all" />
            </div>
            <span className="inline-block px-3 py-1 bg-ember/10 text-ember text-xs font-medium uppercase tracking-wider mb-4">
              For Individuals
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Strategic Thinking Lab
            </h3>
            <p className="text-muted-foreground">
              Apply for the 6-week cohort program designed for individual leaders seeking 
              strategic mastery.
            </p>
          </button>

          {/* Corporate Path */}
          <button
            onClick={() => scrollToSection("corporate")}
            className="group p-8 bg-obsidian border-2 border-transparent hover:border-primary transition-all duration-300 text-left"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <ArrowRight className="w-6 h-6 text-steel group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
              For Organizations
            </span>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Strategy Execution Lab
            </h3>
            <p className="text-steel">
              Request a proposal for your leadership team's transformation journey.
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PathSelector;
