import { Building2, Landmark, Wallet, Radio, CreditCard, Code, Zap, Globe } from "lucide-react";

interface Company {
  name: string;
  icon: React.ElementType;
}

const companies: Company[] = [
  { name: "GTBank", icon: Landmark },
  { name: "Dangote", icon: Building2 },
  { name: "Flutterwave", icon: Wallet },
  { name: "MTN", icon: Radio },
  { name: "Access Bank", icon: CreditCard },
  { name: "Andela", icon: Code },
  { name: "Interswitch", icon: Zap },
  { name: "Paystack", icon: Globe },
];

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center gap-2 mb-4 justify-center">
        <span className="text-steel text-xs sm:text-sm uppercase tracking-wider">
          Trusted by leaders at
        </span>
      </div>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-obsidian to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-obsidian to-transparent z-10" />
        
        {/* Marquee container */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* First set of logos */}
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-2 px-4 sm:px-6 md:px-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <company.icon className="w-5 h-5 sm:w-6 sm:h-6 text-steel" />
              <span className="text-white/60 font-medium text-sm sm:text-base whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-2 px-4 sm:px-6 md:px-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <company.icon className="w-5 h-5 sm:w-6 sm:h-6 text-steel" />
              <span className="text-white/60 font-medium text-sm sm:text-base whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
