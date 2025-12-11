import { useInView } from "@/hooks/useInView";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    category: "Format & Structure",
    items: [
      { feature: "Duration", execution: "12-16 Weeks", thinking: "6 Weeks" },
      { feature: "Delivery Mode", execution: "Hybrid (In-Person + Virtual)", thinking: "Virtual Cohort" },
      { feature: "Participant Type", execution: "Leadership Teams", thinking: "Individual Professionals" },
      { feature: "Cohort Size", execution: "8-15 per organization", thinking: "20 per cohort" },
    ]
  },
  {
    category: "Content & Experience",
    items: [
      { feature: "Custom Diagnostic", execution: true, thinking: false },
      { feature: "Live Weekly Sessions", execution: true, thinking: true },
      { feature: "Framework Development", execution: "Custom for org", thinking: "Standard curriculum" },
      { feature: "Real Challenge Application", execution: true, thinking: true },
      { feature: "Peer Learning", execution: true, thinking: true },
      { feature: "1:1 Coaching", execution: true, thinking: "Optional add-on" },
    ]
  },
  {
    category: "Support & Access",
    items: [
      { feature: "Implementation Support", execution: true, thinking: false },
      { feature: "Post-Program Advisory", execution: "12 months", thinking: "Alumni network" },
      { feature: "Resource Library", execution: true, thinking: true },
      { feature: "Certificate", execution: true, thinking: true },
    ]
  },
  {
    category: "Investment",
    items: [
      { feature: "Starting Price", execution: "$45,000", thinking: "$2,500" },
      { feature: "Payment Options", execution: "Phased payments", thinking: "Full or installments" },
      { feature: "Scholarships", execution: "Corporate sponsorship", thinking: "Limited available" },
    ]
  }
];

const ComparisonTableSection = () => {
  const { ref, isInView } = useInView();

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-gold mx-auto" />
      ) : (
        <X className="w-5 h-5 text-warm-stone mx-auto" />
      );
    }
    return <span className="text-charcoal">{value}</span>;
  };

  return (
    <section className="py-24 md:py-32 bg-warm-stone/20">
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
            Side-by-Side
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-obsidian mb-6">
            Compare Programs
          </h2>
          <p className="text-charcoal text-lg max-w-2xl mx-auto">
            Not sure which program is right for you? Here's a detailed comparison 
            to help you make the best decision.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-obsidian text-white font-sans text-sm tracking-wide uppercase">
                  Feature
                </th>
                <th className="p-4 bg-gold text-obsidian font-sans text-sm tracking-wide uppercase text-center">
                  Strategy Execution Lab
                </th>
                <th className="p-4 bg-ember text-obsidian font-sans text-sm tracking-wide uppercase text-center">
                  Strategic Thinking Lab
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((section) => (
                <>
                  <tr key={section.category}>
                    <td 
                      colSpan={3} 
                      className="p-4 bg-charcoal/10 font-display text-lg text-obsidian"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {section.items.map((item, index) => (
                    <tr 
                      key={item.feature} 
                      className={`border-b border-warm-stone/30 ${index % 2 === 0 ? 'bg-white' : 'bg-warm-stone/10'}`}
                    >
                      <td className="p-4 text-charcoal font-medium">
                        {item.feature}
                      </td>
                      <td className="p-4 text-center">
                        {renderValue(item.execution)}
                      </td>
                      <td className="p-4 text-center">
                        {renderValue(item.thinking)}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-8">
          {comparisonData.map((section) => (
            <div key={section.category} className="bg-white border border-warm-stone/30">
              <div className="p-4 bg-charcoal/10 font-display text-lg text-obsidian">
                {section.category}
              </div>
              {section.items.map((item) => (
                <div key={item.feature} className="p-4 border-b border-warm-stone/30">
                  <div className="font-medium text-obsidian mb-3">{item.feature}</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gold/10">
                      <span className="text-xs text-gold block mb-2">Execution Lab</span>
                      {renderValue(item.execution)}
                    </div>
                    <div className="text-center p-3 bg-ember/10">
                      <span className="text-xs text-ember block mb-2">Thinking Lab</span>
                      {renderValue(item.thinking)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
