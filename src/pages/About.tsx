import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdSpace from "@/components/layout/AdSpace";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-foreground">refund</span><span className="text-primary">mee</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              The story behind the most usefully useless tool on the internet
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that everyone deserves their money back when things go wrong. But let's be honest - writing complaint emails is about as fun as watching paint dry in slow motion.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    That's where we come in. refund.me uses the power of artificial intelligence to craft the perfect refund request. Whether you need to be polite and professional or channel your inner Karen (but in a classy way), our AI has got you covered.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Why We Built This</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    After spending countless hours crafting the perfect "I'm not angry, just disappointed" emails to various companies, we realized there had to be a better way. Why should everyone have to reinvent the wheel of professional complaining?
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    So we built refund.me - a tool that's so simple it's almost stupid, but so effective it just might change your life. Or at least save you 20 minutes of staring at a blank email wondering how to politely say "this is garbage."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold mb-1">Tell us what happened</h4>
                        <p className="text-muted-foreground text-sm">Describe your issue in as much detail as you want. The more specific, the better.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold mb-1">Choose your style</h4>
                        <p className="text-muted-foreground text-sm">Pick a tone that matches your mood - from sweetly professional to assertively direct.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold mb-1">Get your refund request</h4>
                        <p className="text-muted-foreground text-sm">Our AI crafts a perfectly worded request that you can copy, paste, and send.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>The Fine Print</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We're not affiliated with any of the companies mentioned on this site. We're just here to help you write better complaint letters.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    While our AI is pretty smart, we can't guarantee you'll get your refund. But we can guarantee you'll sound way more professional than "this sucks give me money back pls."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* <AdSpace size="banner" /> */}
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Fun Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="font-medium text-primary mb-1">🤖 AI Powered</p>
                    <p className="text-muted-foreground">Our AI has been trained on thousands of successful refund requests.</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="font-medium text-primary mb-1">💰 Completely Free</p>
                    <p className="text-muted-foreground">No hidden fees, no subscriptions, no catches. Just free complaint assistance.</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="font-medium text-primary mb-1">📱 Mobile Friendly</p>
                    <p className="text-muted-foreground">Generate complaints on the go, because anger doesn't wait for desktop.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          {/* <AdSpace size="leaderboard" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;