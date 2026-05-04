import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadMagnetSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxb5G2_PWfFYVPsKCh5dQFWwtyU4BzAuQid9-CxR_4nEgsYHTzqgPB8y8TSG-J4Yow_/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <section ref={ref} className="bg-primary py-24 md:py-32 relative overflow-hidden">
      {/* Geometric Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 transform -rotate-12 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 transform rotate-12 translate-x-1/3 translate-y-1/3" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-display-md font-bold text-primary-foreground mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Diagnose Your Strategic Thinking Capability
          </h2>

          <p
            className={`text-lg md:text-xl text-primary-foreground/90 mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "100ms" }}
          >
            Take our 15-question assessment and discover your strengths and blind spots across strategic thinking,
            decision-making, and execution.
          </p>

          {/* Form */}
          <div
  className={`transition-all duration-700 ${
    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
  style={{ transitionDelay: "200ms" }}
>
  {!isSubmitted ? (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 bg-obsidian text-white px-5 py-4 text-lg placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-white"
        required
      />

      <button
        type="button"
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSeobBRaPEVsGBN5NOOP6S-xuaqqM5ZY2KeUuX2KnkCJtPlfbg/viewform?usp=header",
            "_blank"
          )
        }
        variant="dark"
        size="lg"
        className="group whitespace-nowrap"
      >
        Access Now
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  ) : (
    <div className="flex flex-col items-center gap-5">
      {/* success confirmation */}
      <div className="flex items-center justify-center gap-3 bg-obsidian text-white px-6 py-4">
        <CheckCircle2 className="w-6 h-6 text-primary" />
        <span className="text-lg">Registration successful</span>
      </div>

      {/* primary CTA */}
      <a href="/assessment">
        <Button variant="dark" size="lg" className="group">
          Take Assessment
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </a>
    </div>
  )}
</div>
            {/* Trust Line */}
            <p className="text-sm text-primary-foreground/70 mt-6">Join 500+ leaders gaining strategic clarity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
