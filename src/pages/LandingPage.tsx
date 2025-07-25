import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AdSpace from "@/components/layout/AdSpace";
import StructuredData from "@/components/seo/StructuredData";
import BlogPlaceholder from "@/components/seo/BlogPlaceholder";
import BuyMeCoffee from "@/components/ui/buy-me-coffee";
import useSEO from "@/hooks/useSEO";
import { ArrowRight, Zap, Shield, Smile, Star } from "lucide-react";

const LandingPage = () => {
  // SEO optimization
  useSEO({
    title: 'Free AI Refund Request Generator | refund.me - Get Your Money Back',
    description: 'Generate professional refund requests for Amazon, Uber, DoorDash, eBay, PayPal and more. Free AI-powered tool to write effective complaint letters and get refunds fast.',
    keywords: 'refund request generator, AI complaint letter, refund email template, how to request refund, customer service complaint, refund letter generator, Amazon refund, Uber refund, DoorDash refund'
  });

  const features = [
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Let artificial intelligence craft your complaint with artificial emotion"
    },
    {
      icon: Shield,
      title: "100% Free",
      description: "Because charging for complaints would be ironic even for us"
    },
    {
      icon: Smile,
      title: "Multiple Tones",
      description: "From polite to passive-aggressive to full Karen mode"
    }
  ];

  const companies = [
    "Amazon", "Uber", "DoorDash", "eBay", "PayPal", "Netflix", "Spotify", "Apple"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Structured Data */}
      <StructuredData type="website" />
      <StructuredData type="faq" />
      <StructuredData type="service" />
      
      {/* Top Ad Space */}
      <div className="container mx-auto px-4 py-6">
        {/* <AdSpace size="leaderboard" /> */}
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Get Your{" "}
            <span className="text-primary animate-glow-pulse">Money Back</span>{" "}
            <span className="text-foreground">with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators who are saving time and creating better complaint letters with our AI-powered refund request generator.
          </p>

          <div className="space-y-4">
            <Link to="/generator">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:animate-glow-pulse text-lg px-8 py-4 h-auto font-semibold"
              >
                Generate My Refund Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              No credit card required. Cancel anytime. (Actually, there's nothing to cancel)
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">refundmee</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Because sometimes the best solutions are the most ridiculous ones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Companies Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Works with Popular Companies
          </h2>
          <p className="text-muted-foreground text-lg">
            Generate refund requests for Amazon, Uber, DoorDash, and more
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {companies.map((company) => (
            <div 
              key={company}
              className="bg-card border border-border rounded-lg px-6 py-3 text-sm font-medium hover:border-primary/50 transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-card border border-border rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Your Money Back?
            </h2>
            <p className="text-muted-foreground text-lg">
              Stop writing awkward refund emails. Let our AI do the heavy lifting while you sit back and wait for that sweet, sweet refund.
            </p>
            <Link to="/generator">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:animate-glow-pulse text-lg px-8 py-4 h-auto font-semibold"
              >
                Start Complaining Like a Pro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about getting refunds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I request a refund from Amazon?</h3>
                <p className="text-muted-foreground text-sm">Use our free AI tool to generate a professional Amazon refund request. Select Amazon, describe your issue, and get a personalized email template instantly.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I get a refund from Uber for a bad ride?</h3>
                <p className="text-muted-foreground text-sm">Yes! Uber offers refunds for various issues. Our tool creates professional complaint letters that clearly explain your issue and requested resolution.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What should I include in a refund request?</h3>
                <p className="text-muted-foreground text-sm">Include specific details, order numbers, dates, and desired outcome. Our AI automatically includes all necessary elements for effective refund requests.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is the refund generator really free?</h3>
                <p className="text-muted-foreground text-sm">Yes! Our AI-powered refund request generator is completely free. Generate unlimited refund requests without cost or registration.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Placeholder Section */}
      <BlogPlaceholder />

      {/* Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Love This Free Tool?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              refundmee.com is completely free to use. If our AI-powered refund generator has helped you get your money back, consider supporting us to keep improving the service and adding new features!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-sm text-muted-foreground self-center">
                ❤️ Every coffee helps us grow
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <BuyMeCoffee variant="card" />
          </div>
        </div>
      </section>

      {/* Bottom Ad Space */}
      <div className="container mx-auto px-4 pb-8">
        {/* <AdSpace size="leaderboard" /> */}
      </div>
      
      {/* Floating Buy Me Coffee Button */}
      <BuyMeCoffee variant="floating" />
    </div>
  );
};

export default LandingPage;