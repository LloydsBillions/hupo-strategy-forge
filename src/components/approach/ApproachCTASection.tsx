import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

const ApproachCTASection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 bg-gold">
      <div 
        ref={ref}
        className={`container mx-auto px-6 text-center transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="font-display text-4xl md:text-5xl text-obsidian mb-6">
          Ready to Experience<br />the Approach?
        </h2>
        <p className="text-obsidian/80 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Choose your path to strategic mastery. Whether you're building organizational 
          capacity or sharpening individual acumen, we have a program designed for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-obsidian text-white hover:bg-charcoal px-8 py-6 text-base"
          >
            <Link to="/programs">
              Explore Programs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            className="border-obsidian text-obsidian hover:bg-obsidian hover:text-white px-8 py-6 text-base"
          >
            <Link to="/apply">
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApproachCTASection;
