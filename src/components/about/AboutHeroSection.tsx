import { useInView } from "@/hooks/useInView";

const AboutHeroSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container-padding max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
            Our Story
          </p>
          <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8 leading-tight break-words">
            Building Africa's Premier Sanctuary
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-primary">for Strategic Transformation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our story, mission, and the minds behind Hupo
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
