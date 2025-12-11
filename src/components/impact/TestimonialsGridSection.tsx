import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Strategic Thinking Lab fundamentally changed how I approach complex problems. I now see systems where I used to see chaos.",
    author: "Adaeze O.",
    role: "VP of Strategy",
    company: "Fintech Startup",
    program: "Strategic Thinking Lab",
  },
  {
    quote: "In 15 years of executive education, nothing has been as transformative as Hupo. The focus on depth over breadth is exactly what leaders need.",
    author: "Kunle A.",
    role: "CEO",
    company: "Manufacturing Group",
    program: "Strategy Execution Lab",
  },
  {
    quote: "I came expecting frameworks. I left with a completely rebuilt mental operating system. The peer learning was invaluable.",
    author: "Fatima M.",
    role: "General Manager",
    company: "Retail Chain",
    program: "Strategic Thinking Lab",
  },
  {
    quote: "Our team now speaks a common language of strategy. Decisions that used to take weeks now happen in hours with better quality.",
    author: "David N.",
    role: "Chief Operating Officer",
    company: "Pan-African Bank",
    program: "Strategy Execution Lab",
  },
  {
    quote: "The decision journaling practice alone was worth the investment. I can now trace how my thinking has evolved over time.",
    author: "Amara K.",
    role: "Director of Operations",
    company: "Logistics Company",
    program: "Strategic Thinking Lab",
  },
  {
    quote: "Hupo does not teach you what to think—they teach you how to think. That distinction makes all the difference.",
    author: "Michael E.",
    role: "Founder",
    company: "Tech Startup",
    program: "Strategic Thinking Lab",
  },
];

const TestimonialsGridSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-warm-stone">
      <div className="container-wide">
        {/* Section header */}
        <div className={cn(
          "text-center mb-16 opacity-0",
          isInView && "animate-fade-up"
        )}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            Voices of Transformation
          </span>
          <h2 className="text-display-lg font-display font-bold text-foreground">
            What Leaders Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "bg-background p-8 border border-border hover:border-primary/30 transition-all duration-400 opacity-0 card-lift",
                isInView && "animate-fade-up"
              )}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <blockquote className="text-foreground leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-obsidian">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGridSection;