import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { FileText, Search, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Application",
    duration: "15-20 minutes",
    description: "Tell us about your background, current role, and what you hope to achieve. Share a strategic challenge you're facing."
  },
  {
    number: "02",
    icon: Search,
    title: "Review & Interview",
    duration: "3-5 business days",
    description: "Our team reviews your application. Selected candidates may be invited for a brief conversation to ensure mutual fit."
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Enrollment",
    duration: "Secure your spot",
    description: "Accepted applicants receive an offer within 48 hours. Confirm your spot with payment and begin pre-work."
  }
];

export const STLApplicationSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-obsidian text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            How to Join
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Application Process
          </h2>
          <p className="text-lg text-steel">
            We curate each cohort carefully to ensure rich peer learning experiences
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Arrow connector (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}

                {/* Card */}
                <div className="bg-charcoal p-8 h-full border border-steel/20 hover:border-primary/30 transition-colors">
                  {/* Number */}
                  <div className="text-5xl font-display font-bold text-primary/30 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Duration */}
                  <div className="text-sm text-primary mb-4">
                    {step.duration}
                  </div>

                  {/* Description */}
                  <p className="text-steel leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Candidate */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-charcoal border border-steel/20">
          <h3 className="text-xl font-display font-bold text-white mb-6 text-center">
            Who Should Apply?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-steel">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Mid to senior leaders ready for deeper strategic thinking</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Founders and executives navigating complexity</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>High-potential professionals seeking accelerated growth</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Anyone tired of reactive, tactical firefighting</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="hero" size="xl">
            <Link to="/apply">Start Your Application</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
