import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdSpace from "@/components/layout/AdSpace";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              How we handle your data (spoiler: we barely collect any)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: July 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>The Short Version</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't store your complaint text, we don't sell your data, and we use Google AdSense for ads. 
                    That's pretty much it. If you want the legal version, keep reading.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What We DON'T Collect:</h4>
                    <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Your complaint text or refund requests</li>
                      <li>Personal information from your complaints</li>
                      <li>Account information (we don't have accounts)</li>
                      <li>Payment information (everything is free)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What We DO Collect:</h4>
                    <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Basic analytics (page views, user location, device type)</li>
                      <li>Cookies for Google AdSense</li>
                      <li>Error logs for technical issues</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                    <li>To improve the website and fix bugs</li>
                    <li>To show you relevant ads through Google AdSense</li>
                    <li>To understand how people use the tool (anonymously)</li>
                    <li>To comply with legal requirements if necessary</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Google AdSense</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use Google AdSense to display ads on our website. Google may use cookies and other tracking 
                    technologies to serve personalized ads based on your browsing history.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You can opt out of personalized advertising by visiting Google's 
                    <a href="https://adssettings.google.com" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                      Ad Settings page
                    </a>.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Since we don't store your complaints, there's not much to secure! But for the data we do collect 
                    (analytics and basic usage info), we use industry-standard security measures. Your complaint text 
                    is processed temporarily to generate the response and then discarded.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Your Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                    <li>You can disable cookies in your browser settings</li>
                    <li>You can opt out of Google AdSense personalization</li>
                    <li>You can contact us about any privacy concerns</li>
                    <li>You can stop using the tool anytime (no account to delete)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Google Analytics</h4>
                      <p className="text-muted-foreground text-sm">For website analytics and usage statistics</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Google AdSense</h4>
                      <p className="text-muted-foreground text-sm">For displaying ads that keep this tool free</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">OpenAI API</h4>
                      <p className="text-muted-foreground text-sm">For generating your refund requests (text is not stored)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this privacy policy occasionally. If we make significant changes, we'll update 
                    the date at the top of this page. Since we don't collect contact information, we can't notify 
                    you directly, so check back here if you're curious.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this privacy policy or how we handle data, feel free to 
                    reach out through our contact page. We promise to respond with the same level of 
                    professionalism we put into our complaint generator.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* <AdSpace size="banner" /> */}
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <p className="font-medium text-success mb-1">✅ We DON'T store complaints</p>
                    <p className="text-muted-foreground">Your text is processed and then discarded</p>
                  </div>
                  <div className="p-3 bg-success/10 rounded-lg">
                    <p className="font-medium text-success mb-1">✅ No personal data collection</p>
                    <p className="text-muted-foreground">We don't ask for or store personal info</p>
                  </div>
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <p className="font-medium text-warning mb-1">⚠️ We use ads</p>
                    <p className="text-muted-foreground">Google AdSense helps keep this free</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="font-medium text-primary mb-1">ℹ️ Basic analytics</p>
                    <p className="text-muted-foreground">Anonymous usage data to improve the tool</p>
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

export default Privacy;