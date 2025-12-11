import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Mail, Check } from "lucide-react";

const NewsletterSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-obsidian relative overflow-hidden noise-overlay">
      {/* Geometric accents */}
      <div className="absolute top-10 right-20 w-48 h-48 border border-primary/10 rotate-45" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-primary/5 -rotate-12" />

      <div className="container-wide relative z-10">
        <div className={cn(
          "max-w-2xl mx-auto text-center opacity-0",
          isInView && "animate-fade-up"
        )}>
          <div className="w-16 h-16 bg-primary/10 mx-auto mb-6 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-display-md font-display font-bold text-white mb-4">
            Strategic Intelligence Weekly
          </h2>

          <p className="text-lg text-steel mb-8">
            One insight per week that will sharpen how you think about strategy. 
            No fluff, no spam—just concentrated wisdom for leaders who think deeply.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-charcoal border-steel/30 text-white placeholder:text-steel focus:border-primary"
                required
              />
              <Button type="submit" variant="hero" size="lg">
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-primary">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium">Welcome to the strategic community</span>
            </div>
          )}

          <p className="text-sm text-steel mt-6">
            Join 2,500+ strategic leaders who receive our weekly insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;