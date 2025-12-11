import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const metrics = [
  {
    value: "50+",
    label: "Leaders Transformed",
    description: "Across Africa and beyond",
  },
  {
    value: "8",
    label: "Organizations Served",
    description: "Financial services, FMCG, Professional services",
  },
  {
    value: "60%",
    label: "Avg. Escalation Reduction",
    description: "In organizations we work with",
  },
  {
    value: "92%",
    label: "Participant Satisfaction",
    description: "Would recommend to peers",
  },
];

const ImpactMetricsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={cn(
                "text-center opacity-0",
                isInView && "animate-fade-up"
              )}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-display font-black text-obsidian mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-obsidian mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-obsidian/70">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;