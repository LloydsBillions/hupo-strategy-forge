import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Building2, User, Clock, Users, Target, Zap } from "lucide-react";

const programs = [
  {
    id: "execution-lab",
    type: "For Organizations",
    icon: Building2,
    title: "Strategy Execution Lab",
    subtitle: "Transform organizational strategy capability",
    description: "A comprehensive intervention designed for leadership teams ready to build lasting strategic capacity. We work alongside your team to diagnose, design, and deploy frameworks that become part of your organizational DNA.",
    duration: "12-16 Weeks",
    format: "In-Person + Virtual",
    participants: "Leadership Teams (8-15)",
    features: [
      "Custom diagnostic and framework development",
      "Live strategic challenge workshops",
      "Implementation support and coaching",
      "Organizational capability building",
      "Post-program advisory access"
    ],
    outcomes: [
      "Clear strategic direction and priorities",
      "Aligned leadership team",
      "Embedded decision-making frameworks",
      "Measurable execution improvement"
    ],
    investment: "Starting at $45,000",
    link: "/programs/strategy-execution-lab",
    accent: "gold"
  },
  {
    id: "thinking-lab",
    type: "For Individuals",
    icon: User,
    title: "Strategic Thinking Lab",
    subtitle: "Sharpen your individual strategic acumen",
    description: "An intensive cohort-based program for ambitious professionals ready to elevate their strategic thinking. Join a select group of peers for six weeks of deep learning, deliberate practice, and personal transformation.",
    duration: "6 Weeks",
    format: "Cohort-Based Virtual",
    participants: "Individual Professionals (20 per cohort)",
    features: [
      "Weekly live sessions with expert faculty",
      "Structured frameworks and mental models",
      "Peer learning and accountability",
      "Real-world case application",
      "Alumni network access"
    ],
    outcomes: [
      "Enhanced strategic thinking capability",
      "Expanded mental model library",
      "Improved decision-making quality",
      "Professional peer network"
    ],
    investment: "From $2,500",
    link: "/programs/strategic-thinking-lab",
    accent: "ember"
  }
];

const ProgramCardsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`group relative bg-warm-stone/20 border border-warm-stone/50 hover:border-gold/50 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className={`p-8 ${program.accent === 'gold' ? 'bg-gold' : 'bg-ember'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <program.icon className="w-6 h-6 text-obsidian" />
                  <span className="text-obsidian font-sans text-sm tracking-wide uppercase">
                    {program.type}
                  </span>
                </div>
                <h3 className="font-display text-3xl text-obsidian mb-2">
                  {program.title}
                </h3>
                <p className="text-obsidian/80">
                  {program.subtitle}
                </p>
              </div>

              {/* Body */}
              <div className="p-8 space-y-8">
                <p className="text-charcoal leading-relaxed">
                  {program.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-warm-stone/30">
                    <Clock className="w-5 h-5 text-gold mx-auto mb-2" />
                    <span className="text-xs text-charcoal block">{program.duration}</span>
                  </div>
                  <div className="text-center p-4 bg-warm-stone/30">
                    <Target className="w-5 h-5 text-gold mx-auto mb-2" />
                    <span className="text-xs text-charcoal block">{program.format}</span>
                  </div>
                  <div className="text-center p-4 bg-warm-stone/30">
                    <Users className="w-5 h-5 text-gold mx-auto mb-2" />
                    <span className="text-xs text-charcoal block">{program.participants}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-sans text-sm tracking-wide uppercase text-obsidian mb-4">
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="font-sans text-sm tracking-wide uppercase text-obsidian mb-4">
                    Key Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {program.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-charcoal text-sm">
                        <Zap className="w-4 h-4 text-gold flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Investment & CTA */}
                <div className="pt-6 border-t border-warm-stone/50 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-charcoal block mb-1">Investment</span>
                    <span className="font-display text-xl text-obsidian">{program.investment}</span>
                  </div>
                  <Button 
                    asChild
                    className={`${program.accent === 'gold' ? 'bg-gold hover:bg-gold/90' : 'bg-ember hover:bg-ember/90'} text-obsidian px-6`}
                  >
                    <Link to={program.link}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCardsSection;
