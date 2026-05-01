import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Before Hupo, I was the bottleneck in every decision. The Strategy Execution Lab taught me to build systems that empower my team. We've cut escalations by 60% and execution speed has doubled.",
  },
  {
    quote:
      "The Strategic Thinking Lab fundamentally changed how I approach complex problems. I now see the system beneath the symptoms. My team has noticed the difference—I'm calmer, clearer, and more decisive.",
  },
  {
    quote:
      "We came to Hupo struggling with execution paralysis. Twelve weeks later, we have a clear operating rhythm, empowered mid-level leaders, and a strategy that's actually being implemented.",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 10000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section ref={ref} className="bg-obsidian py-24 md:py-32 lg:py-40 relative overflow-hidden noise-overlay">
      {/* Background Quote Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5">
        <Quote className="w-96 h-96" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-display-md font-bold text-primary">
            Leaders Transformed
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className={` max-w-4xl mx-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="relative justify-center items-center bg-charcoal/50 border border-primary/20 p-8 md:p-12 lg:p-16">
            {/* Geometric Frame */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

            {/* Quote */}
            <blockquote
              className={`font-display text-xl md:text-2xl lg:text-3xl text-white italic leading-relaxed mb-10 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
            >
              "{current.quote}"
            </blockquote>

            {/* Attribution */}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-steel/30 flex items-center justify-center text-steel hover:text-primary hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 transition-colors ${idx === currentIndex ? "bg-primary" : "bg-steel/30 hover:bg-steel"}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-steel/30 flex items-center justify-center text-steel hover:text-primary hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
