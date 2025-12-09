import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Building2, User, Mail, Phone, Users, Target, Send } from "lucide-react";

const challenges = [
  "Slow execution of strategic initiatives",
  "Frequent escalations to leadership",
  "Siloed departments and poor coordination",
  "Inconsistent decision-making quality",
  "Middle management capability gaps",
  "Difficulty scaling operations",
];

const CorporateInquiryForm = () => {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    contactName: "",
    contactTitle: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    teamSize: "",
    challengeDetails: "",
    timeline: "",
    budget: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleChallengeToggle = (challenge: string) => {
    setSelectedChallenges(prev =>
      prev.includes(challenge)
        ? prev.filter(c => c !== challenge)
        : [...prev, challenge]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.contactName || !formData.email || !formData.companyName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest! Our team will reach out within 2 business days to schedule a discovery call.",
    });
    
    setFormData({
      contactName: "",
      contactTitle: "",
      email: "",
      phone: "",
      companyName: "",
      industry: "",
      teamSize: "",
      challengeDetails: "",
      timeline: "",
      budget: "",
    });
    setSelectedChallenges([]);
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-obsidian" id="corporate">
      <div className="container-padding max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider mb-4">
              For Organizations
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Corporate Inquiry
            </h2>
            <p className="text-steel">
              Request a proposal for the Strategy Execution Lab or custom corporate solutions
            </p>
          </div>

          {/* Inquiry Form */}
          <form onSubmit={handleSubmit} className="bg-charcoal p-8 md:p-12 border border-charcoal">
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactName" className="text-white">Your Name *</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      required
                      maxLength={100}
                      className="bg-obsidian border-steel/30 text-white placeholder:text-steel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactTitle" className="text-white">Your Title</Label>
                    <Input
                      id="contactTitle"
                      name="contactTitle"
                      value={formData.contactTitle}
                      onChange={handleInputChange}
                      placeholder="e.g., Chief HR Officer"
                      maxLength={100}
                      className="bg-obsidian border-steel/30 text-white placeholder:text-steel"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="corpEmail" className="text-white">Work Email *</Label>
                    <Input
                      id="corpEmail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      required
                      maxLength={100}
                      className="bg-obsidian border-steel/30 text-white placeholder:text-steel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="corpPhone" className="text-white">Phone Number</Label>
                    <Input
                      id="corpPhone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 xxx xxx xxxx"
                      maxLength={20}
                      className="bg-obsidian border-steel/30 text-white placeholder:text-steel"
                    />
                  </div>
                </div>
              </div>

              {/* Organization Details */}
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Organization Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-white">Company Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your organization"
                      required
                      maxLength={100}
                      className="bg-obsidian border-steel/30 text-white placeholder:text-steel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-white">Industry</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 bg-obsidian border border-steel/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select industry</option>
                      <option value="financial-services">Financial Services</option>
                      <option value="fmcg">FMCG / Consumer Goods</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="technology">Technology</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="energy">Energy / Oil & Gas</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <Label htmlFor="teamSize" className="text-white">
                    <Users className="w-4 h-4 inline mr-2" />
                    Leadership Team Size
                  </Label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 py-2 bg-obsidian border border-steel/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select team size</option>
                    <option value="5-10">5-10 leaders</option>
                    <option value="11-20">11-20 leaders</option>
                    <option value="21-50">21-50 leaders</option>
                    <option value="50+">50+ leaders</option>
                  </select>
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Current Challenges
                </h3>
                <p className="text-steel mb-4">Select all that apply:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {challenges.map((challenge) => (
                    <div
                      key={challenge}
                      className={`flex items-center gap-3 p-4 border cursor-pointer transition-all ${
                        selectedChallenges.includes(challenge)
                          ? "border-primary bg-primary/10"
                          : "border-steel/30 hover:border-steel"
                      }`}
                      onClick={() => handleChallengeToggle(challenge)}
                    >
                      <Checkbox
                        checked={selectedChallenges.includes(challenge)}
                        onCheckedChange={() => handleChallengeToggle(challenge)}
                      />
                      <span className="text-white text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2">
                  <Label htmlFor="challengeDetails" className="text-white">
                    Additional Context (Optional)
                  </Label>
                  <Textarea
                    id="challengeDetails"
                    name="challengeDetails"
                    value={formData.challengeDetails}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your specific challenges and what you're hoping to achieve..."
                    rows={4}
                    maxLength={2000}
                    className="bg-obsidian border-steel/30 text-white placeholder:text-steel"
                  />
                </div>
              </div>

              {/* Timeline & Budget */}
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  Timeline & Investment
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-white">Preferred Timeline</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 bg-obsidian border border-steel/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select timeline</option>
                      <option value="q1-2026">Q1 2026</option>
                      <option value="q2-2026">Q2 2026</option>
                      <option value="q3-2026">Q3 2026</option>
                      <option value="q4-2026">Q4 2026</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-white">Budget Range</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 bg-obsidian border border-steel/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-15m">Under ₦15M</option>
                      <option value="15-25m">₦15M - ₦25M</option>
                      <option value="25-35m">₦25M - ₦35M</option>
                      <option value="35m+">₦35M+</option>
                      <option value="tbd">To be determined</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Request Proposal
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-steel">
                Our team will reach out within 2 business days to schedule a discovery call.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CorporateInquiryForm;
