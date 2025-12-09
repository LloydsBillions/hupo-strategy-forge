import { useInView } from "@/hooks/useInView";

const advisors = [
  {
    name: "Advisory Board Member",
    role: "Strategic Advisor",
    expertise: "Corporate Strategy",
  },
  {
    name: "Advisory Board Member",
    role: "Industry Expert",
    expertise: "Executive Leadership",
  },
  {
    name: "Advisory Board Member",
    role: "Academic Partner",
    expertise: "Organizational Behavior",
  },
];

const TeamSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-warm-stone">
      <div className="container-padding max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 text-center">
            The Team
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Faculty & Advisors
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Hupo is currently founder-led, with a carefully curated network of advisors 
            and guest faculty who bring deep expertise across strategy, leadership, and 
            organizational transformation.
          </p>

          {/* Advisory Board */}
          <div className="mb-16">
            <h3 className="font-display text-xl font-bold text-foreground mb-8 text-center">
              Advisory Network
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {advisors.map((advisor, index) => (
                <div
                  key={index}
                  className="bg-background p-8 border border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className="w-20 h-20 bg-charcoal mb-6 flex items-center justify-center">
                    <span className="text-3xl font-display text-primary font-bold">
                      {advisor.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">
                    {advisor.name}
                  </h4>
                  <p className="text-primary text-sm font-medium mb-2">
                    {advisor.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {advisor.expertise}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Join the Team CTA */}
          <div className="bg-obsidian p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-steel mb-6 max-w-xl mx-auto">
              As Hupo expands, we're building a world-class faculty of practitioners, 
              not just theorists. If you've led strategic transformation in the trenches, 
              we want to hear from you.
            </p>
            <a
              href="mailto:careers@huposchool.com"
              className="inline-flex items-center justify-center h-12 px-8 font-medium text-sm uppercase tracking-wider border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Express Interest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
