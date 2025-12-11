import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, MessageSquare } from "lucide-react";

const ProgramsCTASection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 bg-obsidian">
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
              Not Sure Which Program?
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Let's Find Your<br />
              <span className="text-gold">Best Fit</span>
            </h2>
            <p className="text-warm-stone text-lg leading-relaxed mb-8">
              Every organization and individual has unique needs. Schedule a brief 
              consultation with our team to discuss your goals and determine which 
              program will deliver the most impact for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-gold text-obsidian hover:bg-gold/90 px-8 py-6 text-base"
              >
                <Link to="/apply">
                  Start Application
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-obsidian px-8 py-6 text-base"
              >
                <Link to="/apply?type=consultation">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-charcoal/50 p-8 border-l-2 border-gold">
              <h3 className="font-display text-2xl text-white mb-6">
                Quick Guide
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-gold font-sans text-sm tracking-wide uppercase mb-2">
                    Choose Strategy Execution Lab if:
                  </h4>
                  <ul className="space-y-2 text-warm-stone">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      You're a leadership team needing alignment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      Your organization faces strategic challenges
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      You want custom frameworks for your context
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-ember font-sans text-sm tracking-wide uppercase mb-2">
                    Choose Strategic Thinking Lab if:
                  </h4>
                  <ul className="space-y-2 text-warm-stone">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-ember rounded-full mt-2 flex-shrink-0" />
                      You're an individual seeking growth
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-ember rounded-full mt-2 flex-shrink-0" />
                      You want peer learning and networking
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-ember rounded-full mt-2 flex-shrink-0" />
                      You prefer a structured curriculum
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCTASection;
