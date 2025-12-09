import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCTASection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-background">
      <div className="container-padding max-w-4xl mx-auto text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Ready to Begin Your
            <br />
            <span className="text-primary">Transformation?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're an individual leader seeking strategic mastery or an 
            organization ready to build execution capability, your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/programs/strategic-thinking-lab">
                For Individuals
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/programs/strategy-execution-lab">
                For Organizations
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
