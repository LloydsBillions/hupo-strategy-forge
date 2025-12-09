import { useInView } from "@/hooks/useInView";

const ApplyHeroSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="pt-32 pb-16 bg-background">
      <div className="container-padding max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
            Begin Your Journey
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Begin Your
            <br />
            <span className="text-primary">Transformation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path to strategic mastery. Whether you're an individual leader 
            or representing an organization, your journey starts here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplyHeroSection;
