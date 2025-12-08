import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { Check, Zap, Clock, Users } from "lucide-react";

const pricingTiers = [
  {
    name: "Early Bird",
    price: "₦900,000",
    priceNote: "First 15 spots",
    deadline: "Ends March 31, 2026",
    isPopular: true
  },
  {
    name: "Standard",
    price: "₦1,125,000",
    priceNote: "Regular pricing",
    deadline: "Until April 30, 2026",
    isPopular: false
  },
  {
    name: "Late Registration",
    price: "₦1,350,000",
    priceNote: "Final spots",
    deadline: "May 1-7, 2026",
    isPopular: false
  }
];

const included = [
  "6 weeks of live interactive sessions",
  "All course materials and workbooks",
  "Peer learning circle facilitation",
  "Faculty office hours access",
  "Lifetime alumni community membership",
  "Certificate of completion",
  "Session recordings for 12 months",
  "Strategic Thinking Toolkit (digital)"
];

export const STLPricingSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-4 block">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Program Investment
          </h2>
          <p className="text-lg text-primary-foreground/80">
            May 2026 Cohort Pricing
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative p-8 transition-all duration-500 ${
                tier.isPopular 
                  ? 'bg-obsidian text-white scale-105 md:scale-110' 
                  : 'bg-primary-foreground text-foreground'
              } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Popular badge */}
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-ember text-white text-xs font-bold uppercase tracking-wider">
                  Best Value
                </div>
              )}

              {/* Tier name */}
              <div className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                tier.isPopular ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {tier.name}
              </div>

              {/* Price */}
              <div className={`text-3xl md:text-4xl font-display font-bold mb-2 ${
                tier.isPopular ? 'text-white' : 'text-foreground'
              }`}>
                {tier.price}
              </div>

              {/* Price note */}
              <div className={`text-sm mb-4 ${
                tier.isPopular ? 'text-steel' : 'text-muted-foreground'
              }`}>
                {tier.priceNote}
              </div>

              {/* Deadline */}
              <div className={`flex items-center gap-2 text-sm ${
                tier.isPopular ? 'text-primary' : 'text-primary'
              }`}>
                <Clock className="w-4 h-4" />
                {tier.deadline}
              </div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="max-w-3xl mx-auto bg-primary-foreground p-8 md:p-12">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            What's Included
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {included.map((item, index) => (
              <div 
                key={index}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* Payment options */}
          <div className="border-t border-border pt-6 text-center">
            <p className="text-muted-foreground mb-2">
              <Zap className="w-4 h-4 inline mr-2 text-primary" />
              Full payment or 2-part installment available
            </p>
            <p className="text-sm text-muted-foreground">
              Corporate sponsorship? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for group rates
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="dark" size="xl" className="bg-obsidian hover:bg-charcoal">
            <Link to="/apply" className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Apply for May 2026 Cohort
            </Link>
          </Button>
          <p className="text-primary-foreground/60 text-sm mt-4">
            Only 25 spots available per cohort
          </p>
        </div>
      </div>
    </section>
  );
};
