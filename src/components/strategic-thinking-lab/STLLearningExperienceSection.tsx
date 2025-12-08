import { useInView } from "@/hooks/useInView";
import { Video, Wrench, Users, BookOpen, ClipboardList } from "lucide-react";

const components = [
  {
    icon: Video,
    title: "Live Interactive Sessions",
    description: "Weekly 3-hour sessions with faculty and peers. Concepts taught through dialogue, not lecture."
  },
  {
    icon: Wrench,
    title: "Hands-On Labs",
    description: "Apply frameworks to real scenarios. Practice strategic analysis with immediate feedback."
  },
  {
    icon: Users,
    title: "Peer Learning Circles",
    description: "Small group discussions that deepen understanding and build lasting professional relationships."
  },
  {
    icon: BookOpen,
    title: "Reflection Journal",
    description: "Structured prompts that transform experience into insight and insight into capability."
  },
  {
    icon: ClipboardList,
    title: "Decision Log",
    description: "Track real decisions, predictions, and outcomes. Build your personal decision intelligence."
  }
];

export const STLLearningExperienceSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            The Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            How You'll Learn
          </h2>
          <p className="text-lg text-muted-foreground">
            A multi-modal learning experience designed for busy executives who demand results
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {components.map((component, index) => (
            <div 
              key={index}
              className={`group p-8 bg-warm-stone border border-border hover:border-primary/50 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <component.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {component.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>

        {/* Hybrid Note */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-muted border border-border">
            <span className="text-primary font-bold">100% Remote</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">All sessions conducted via Zoom with recordings available</span>
          </div>
        </div>
      </div>
    </section>
  );
};
