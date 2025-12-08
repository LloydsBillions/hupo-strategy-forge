import { useInView } from "@/hooks/useInView";
import { Clock, Video, BookOpen } from "lucide-react";

const weeks = [
  {
    week: 1,
    title: "Foundations of Strategic Thought",
    description: "Understand what separates strategic thinkers from tactical operators. Establish your baseline and identify growth edges.",
    topics: ["Strategic vs. Tactical Thinking", "Mental Model Inventory", "Personal Strategic Assessment"],
    liveHours: 3,
    selfPacedHours: 2
  },
  {
    week: 2,
    title: "Systems Thinking Mastery",
    description: "Learn to see the interconnections, feedback loops, and leverage points that others miss.",
    topics: ["Causal Loop Diagrams", "Identifying Leverage Points", "Second & Third Order Effects"],
    liveHours: 3,
    selfPacedHours: 3
  },
  {
    week: 3,
    title: "Decision Architecture",
    description: "Build frameworks for making high-quality decisions consistently, even under uncertainty and pressure.",
    topics: ["Decision Quality Framework", "Cognitive Bias Mitigation", "Probabilistic Thinking"],
    liveHours: 3,
    selfPacedHours: 2
  },
  {
    week: 4,
    title: "Strategic Sensemaking",
    description: "Transform information into insight. Learn to read environments, spot patterns, and anticipate change.",
    topics: ["Environmental Scanning", "Pattern Recognition", "Scenario Planning Basics"],
    liveHours: 3,
    selfPacedHours: 3
  },
  {
    week: 5,
    title: "Personal Operating System",
    description: "Design the rituals, rhythms, and structures that turn strategic insight into consistent execution.",
    topics: ["Weekly Strategic Review", "Decision Journaling", "Energy & Focus Management"],
    liveHours: 3,
    selfPacedHours: 2
  },
  {
    week: 6,
    title: "Integration & Application",
    description: "Apply everything to a real strategic challenge. Present your transformation and lock in new capabilities.",
    topics: ["Capstone Project", "Peer Feedback Sessions", "90-Day Action Plan"],
    liveHours: 4,
    selfPacedHours: 2
  }
];

export const STLWeeklyCurriculumSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-warm-stone">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            The Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            6 Weeks to Strategic Mastery
          </h2>
          <p className="text-lg text-muted-foreground">
            A carefully sequenced journey from tactical thinking to strategic command
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-primary/20" />

          {/* Weeks */}
          <div className="space-y-8">
            {weeks.map((week, index) => (
              <div 
                key={index}
                className={`relative pl-20 md:pl-28 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Week number circle */}
                <div className="absolute left-0 w-16 md:w-24 h-16 md:h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs uppercase tracking-wider opacity-80">Week</div>
                    <div className="text-2xl md:text-3xl font-bold">{week.week}</div>
                  </div>
                </div>

                {/* Content card */}
                <div className="bg-background p-6 md:p-8 border border-border hover:border-primary/30 transition-colors duration-300">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
                    {week.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {week.description}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {week.topics.map((topic, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Time commitment */}
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Video className="w-4 h-4 text-primary" />
                      <span>{week.liveHours}h live sessions</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>{week.selfPacedHours}h self-paced</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total commitment */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-obsidian text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">Total Time Commitment</span>
          </div>
          <p className="text-steel">
            19 hours live sessions + 14 hours self-paced = <span className="text-primary font-bold">33 hours over 6 weeks</span>
          </p>
        </div>
      </div>
    </section>
  );
};
