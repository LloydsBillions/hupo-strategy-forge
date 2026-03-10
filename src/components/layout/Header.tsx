import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import hupoLogo from "@/assets/hupo-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      name: "Programs", 
      href: "/programs",
      hasDropdown: true,
      dropdownItems: [
        { name: "Strategy Execution Lab", href: "/programs/strategy-execution-lab", badge: "For Organizations" },
        { name: "Strategic Thinking Lab", href: "/programs/strategic-thinking-lab", badge: "For Individuals" },
        { name: "Compare Programs", href: "/programs", badge: "Overview" },
      ]
    },
    { name: "For Organizations", href: "/programs/strategy-execution-lab" },
    { name: "Approach", href: "/approach" },
    { name: "Impact", href: "/impact" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={hupoLogo} alt="Hupo School of Strategy" className="w-10 h-10 object-contain" />
            <div className="hidden sm:block">
              <span className={cn("font-display text-xl font-bold tracking-tight", isScrolled ? "text-foreground" : "text-white")}>
                HUPO
              </span>
              <span className={cn("block text-[10px] uppercase tracking-[0.2em] -mt-1", isScrolled ? "text-muted-foreground" : "text-white/60")}>
                School of Strategy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors"
                    onMouseEnter={() => setIsProgramsOpen(true)}
                    onMouseLeave={() => setIsProgramsOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors gold-underline"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors gold-underline"
                  >
                    {link.name}
                  </a>
                )}

                {link.hasDropdown && (
                  <div
                    className={cn(
                      "absolute top-full left-0 pt-4 transition-all duration-300",
                      isProgramsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}
                    onMouseEnter={() => setIsProgramsOpen(true)}
                    onMouseLeave={() => setIsProgramsOpen(false)}
                  >
                    <div className="bg-background border border-border shadow-elegant p-4 min-w-[280px]">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block p-3 hover:bg-muted transition-colors group/item"
                        >
                          <span className="text-xs uppercase tracking-wider text-primary font-medium">
                            {item.badge}
                          </span>
                          <span className="block text-base font-medium text-foreground group-hover/item:text-primary transition-colors mt-1">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button asChild variant="hero" size="default" className="hidden md:inline-flex">
              <Link to="/apply">Apply Now</Link>
            </Button>
            
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-20 bg-background z-40 transition-all duration-400",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="container-wide py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
                {link.hasDropdown && link.dropdownItems && (
                  <div className="mt-3 ml-4 flex flex-col gap-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-border">
              <Button variant="hero" size="lg" className="w-full">
                Apply Now
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
