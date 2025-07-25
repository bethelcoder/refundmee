import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AdSpace from "@/components/layout/AdSpace";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Need help? Have a complaint about our complaint generator? We're here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us what's on your mind. Ironically, we can't generate this message for you."
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:animate-glow-pulse">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-card border-border text-center">
                  <CardContent className="pt-6">
                    <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">General Inquiries</h3>
                    <p className="text-sm text-muted-foreground">
                      Questions about the tool or partnerships
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border text-center">
                  <CardContent className="pt-6">
                    <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Technical Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Having trouble with the generator?
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border text-center">
                  <CardContent className="pt-6">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1">Media & Press</h3>
                    <p className="text-sm text-muted-foreground">
                      Want to write about us?
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              {/* <AdSpace size="banner" /> */}
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">FAQ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-primary mb-1">Is this really free?</h4>
                    <p className="text-muted-foreground">Yes! We make money from ads, not from charging for complaint letters.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Do you guarantee refunds?</h4>
                    <p className="text-muted-foreground">We can't guarantee results, but we can make you sound professional while asking.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Can I suggest new companies?</h4>
                    <p className="text-muted-foreground">Absolutely! Send us your suggestions and we'll add them to our list.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Is my data private?</h4>
                    <p className="text-muted-foreground">We don't store your complaints. Check our privacy policy for details.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            {/* <AdSpace size="leaderboard" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;