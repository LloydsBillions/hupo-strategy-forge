import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    category: "Systems Thinking",
    title: "Seeing the Invisible: How Systems Thinking Changes Everything",
    excerpt: "The difference between a tactical and strategic mind is the ability to see what others cannot—the invisible forces that shape visible outcomes.",
    readTime: "8 min",
    date: "Nov 28, 2025",
  },
  {
    category: "Decision Making",
    title: "The Decision Trap: Why Smart Leaders Make Poor Choices",
    excerpt: "Intelligence is not the same as wisdom. Many brilliant leaders fall into predictable decision traps that undermine their effectiveness.",
    readTime: "10 min",
    date: "Nov 21, 2025",
  },
  {
    category: "Execution",
    title: "From Insight to Impact: Bridging the Execution Gap",
    excerpt: "Having the right strategy is necessary but not sufficient. The real skill is turning strategic insight into disciplined action.",
    readTime: "7 min",
    date: "Nov 14, 2025",
  },
  {
    category: "Leadership",
    title: "The Bottleneck at the Top: Why Organizations Stall",
    excerpt: "When leaders become the constraint on their own organizations, growth stops. Here is how to recognize and fix this pattern.",
    readTime: "9 min",
    date: "Nov 7, 2025",
  },
  {
    category: "Strategic Thinking",
    title: "Mental Models for African Business Context",
    excerpt: "Western frameworks often fail in African markets. Here are the mental models that actually work for our unique complexity.",
    readTime: "11 min",
    date: "Oct 31, 2025",
  },
  {
    category: "Organizational Design",
    title: "Decision Rights: The Hidden Architecture of High-Performing Teams",
    excerpt: "Unclear decision rights are the silent killer of organizational velocity. Learn how to design clarity into your team structure.",
    readTime: "8 min",
    date: "Oct 24, 2025",
  },
];

const ArticlesGridSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-warm-stone">
      <div className="container-wide">
        {/* Section header */}
        <div className={cn(
          "flex flex-col md:flex-row md:items-end md:justify-between mb-12 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2 block">
              Latest Insights
            </span>
            <h2 className="text-display-md font-display font-bold text-foreground">
              Strategic Intelligence
            </h2>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            {["All", "Strategic Thinking", "Execution", "Leadership"].map((filter) => (
              <button
                key={filter}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  filter === "All"
                    ? "bg-obsidian text-white"
                    : "bg-background text-muted-foreground hover:bg-obsidian/10"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={cn(
                "group bg-background border border-border hover:border-primary/30 transition-all duration-400 card-lift opacity-0",
                isInView && "animate-fade-up"
              )}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-obsidian/60 to-obsidian/20 group-hover:from-obsidian/40 transition-colors" />
                <div className="absolute top-4 left-4 px-2 py-1 bg-primary text-obsidian text-xs font-semibold uppercase tracking-wider">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span>{article.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        <div className={cn(
          "text-center mt-12 opacity-0",
          isInView && "animate-fade-up"
        )} style={{ animationDelay: "0.8s" }}>
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesGridSection;