import { useInView } from "@/hooks/useInView";
import { Brain, Eye, Hammer } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    number: "01",
    title: "Mental Models",
    subtitle: "The Architecture of Thought",
    description: "We equip you with a library of proven mental frameworks—from first principles thinking to inversion, from systems dynamics to decision trees. These aren't academic concepts; they're practical tools that change how you process information and generate insights.",
    outcomes: [
      "Pattern recognition across disparate domains",
      "Structured problem decomposition",
      "Bias identification and mitigation",
      "Scenario planning and stress-testing"
    ]
  },
  {
    icon: Eye,
    number: "02",
    title: "Strategic Vision",
    subtitle: "The Clarity of Direction",
    description: "Vision without clarity is hallucination. We train you to see through the noise, identify true leverage points, and articulate futures that inspire action. This isn't about dreaming big—it's about seeing accurately.",
    outcomes: [
      "Environmental scanning and signal detection",
      "Opportunity identification frameworks",
      "Strategic positioning analysis",
      "Vision articulation and communication"
    ]
  },
  {
    icon: Hammer,
    number: "03",
    title: "Execution Architecture",
    subtitle: "The Discipline of Delivery",
    description: "Strategy without execution is fantasy. We build your capacity to translate vision into reality through systematic planning, resource orchestration, and adaptive implementation. This is where potential becomes performance.",
    outcomes: [
      "Initiative prioritization and sequencing",
      "Resource allocation optimization",
      "Progress tracking and course correction",
      "Stakeholder alignment and momentum"
    ]
  }
];

const MetaCurriculumDeepDive = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 bg-obsidian">
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-3xl mb-20">
          <span className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
            The Meta-Curriculum
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Three Pillars of<br />
            <span className="text-gold">Strategic Mastery</span>
          </h2>
          <p className="text-warm-stone text-lg leading-relaxed">
            Our curriculum is built on three interconnected pillars. Each reinforces 
            the others, creating a compound effect that accelerates your strategic 
            development exponentially.
          </p>
        </div>

        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-gold/30 font-display text-6xl">{pillar.number}</span>
                  <pillar.icon className="w-12 h-12 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-white mb-2">
                    {pillar.title}
                  </h3>
                  <span className="text-gold font-sans text-sm tracking-wide uppercase">
                    {pillar.subtitle}
                  </span>
                </div>
                <p className="text-warm-stone leading-relaxed text-lg">
                  {pillar.description}
                </p>
              </div>
              
              <div className="bg-charcoal/50 p-8 border-l-2 border-gold">
                <h4 className="text-white font-sans text-sm tracking-wide uppercase mb-6">
                  Key Outcomes
                </h4>
                <ul className="space-y-4">
                  {pillar.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3 text-warm-stone">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetaCurriculumDeepDive;
