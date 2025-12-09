import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, Briefcase, Building2, Send } from "lucide-react";

const IndividualApplicationForm = () => {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentRole: "",
    company: "",
    yearsExperience: "",
    whyHupo: "",
    commitment: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.whyHupo) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.commitment) {
      toast({
        title: "Commitment Required",
        description: "Please confirm your commitment to the program.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted",
      description: "Thank you for applying! We'll review your application and get back to you within 3-5 business days.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentRole: "",
      company: "",
      yearsExperience: "",
      whyHupo: "",
      commitment: false,
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-background" id="individual">
      <div className="container-padding max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-ember/10 text-ember text-sm font-medium uppercase tracking-wider mb-4">
              For Individuals
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic Thinking Lab Application
            </h2>
            <p className="text-muted-foreground">
              Next Cohort: May 2026 • Limited to 25 Participants
            </p>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="bg-warm-stone p-8 md:p-12 border border-border">
            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                      maxLength={50}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required
                      maxLength={50}
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 xxx xxx xxxx"
                      maxLength={20}
                    />
                  </div>
                </div>
              </div>

              {/* Professional Background */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Professional Background
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentRole">Current Role</Label>
                    <Input
                      id="currentRole"
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleInputChange}
                      placeholder="e.g., Director of Operations"
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your organization"
                      maxLength={100}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearsExperience">Years of Leadership Experience</Label>
                  <select
                    id="yearsExperience"
                    name="yearsExperience"
                    value={formData.yearsExperience}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              {/* Why Hupo */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Tell Us About Yourself
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="whyHupo">
                    Why do you want to join the Strategic Thinking Lab? What transformation are you seeking? *
                  </Label>
                  <Textarea
                    id="whyHupo"
                    name="whyHupo"
                    value={formData.whyHupo}
                    onChange={handleInputChange}
                    placeholder="Share your story, challenges, and what you hope to achieve..."
                    rows={6}
                    required
                    maxLength={2000}
                  />
                  <p className="text-sm text-muted-foreground">
                    {formData.whyHupo.length}/2000 characters
                  </p>
                </div>
              </div>

              {/* Commitment */}
              <div className="flex items-start gap-3 p-4 bg-background border border-border">
                <Checkbox
                  id="commitment"
                  checked={formData.commitment}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, commitment: checked as boolean }))
                  }
                />
                <div>
                  <Label htmlFor="commitment" className="text-foreground cursor-pointer">
                    I commit to fully engaging with the 6-week program, including attending all live sessions 
                    and completing assignments. I understand this is a transformative journey that requires 
                    dedicated effort.
                  </Label>
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
                    Submit Application
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Applications are reviewed within 3-5 business days. You'll receive an email with next steps.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IndividualApplicationForm;
