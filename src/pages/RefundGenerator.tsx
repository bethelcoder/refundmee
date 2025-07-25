import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AdSpace from "@/components/layout/AdSpace";
import useSEO, { getCompanySEO } from "@/hooks/useSEO";
import { Copy, Download, RefreshCw, Wand2, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RefundGenerator = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    company: "",
    customCompany: "",
    issue: "",
    desired_outcome: "",
    tone: ""
  });
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // SEO optimization with dynamic content
  const seoData = getCompanySEO(searchParams.get('company') || formData.company);
  useSEO(seoData);

  // Set company from URL parameter
  useEffect(() => {
    const companyParam = searchParams.get('company');
    if (companyParam && companies.includes(companyParam)) {
      setFormData(prev => ({ ...prev, company: companyParam }));
    }
  }, [searchParams]);

  const companies = [
    "Amazon", "Uber", "DoorDash", "eBay", "PayPal", "Netflix", "Spotify", 
    "Apple", "Google", "Microsoft", "Other"
  ];

  const outcomes = [
    "Full Refund", "Partial Refund", "Store Credit", "Replacement", 
    "Service Credit", "Cancellation", "Other"
  ];

  const tones = [
    { value: "polite", label: "Polite & Professional" },
    { value: "assertive", label: "Assertive & Direct" },
    { value: "disappointed", label: "Disappointed Customer" },
    { value: "frustrated", label: "Frustrated (but civil)" }
  ];

  const loadingMessages = [
    "Crafting your masterpiece of polite rage...",
    "Teaching AI the art of professional complaining...",
    "Generating disappointment with surgical precision...",
    "Calibrating the perfect amount of indignation...",
    "Writing the complaint letter you wish you could..."
  ];

  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);

  const generateRefundRequest = async () => {
    if (!formData.company || !formData.issue || !formData.desired_outcome || !formData.tone || 
        (formData.company === "Other" && !formData.customCompany.trim())) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields before generating your request.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setCurrentLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    try {
      const companyName = formData.company === "Other" ? formData.customCompany : formData.company;
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "tencent/hunyuan-a13b-instruct:free",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant that writes refund request emails based on input."
            },
            {
              role: "user",
              content: `Write a short and clear refund request message to ${companyName}. The customer experienced: ${formData.issue}. They are requesting: ${formData.desired_outcome}. Keep the tone ${formData.tone}, between 150-180 words, and easy for customer support to quickly understand and act on.`

            }
          ]
        })
      });

      if (!response.ok) throw new Error("AI API call failed");

      const data = await response.json();
      const message = data.choices?.[0]?.message?.content || "Something went wrong.";
      const cleanedMessage = message.replace('<answer>', '').replace('</answer>', '').trim();
      setGeneratedText(cleanedMessage);
      toast({
        title: "Request Generated!",
        description: "Your refund request has been crafted with algorithmic precision."
      });
    } catch (error) {
     // Simulate AI generation (fallback mechanism)
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const mockResponse = generateMockRefundRequest(formData);
      setGeneratedText(mockResponse);
      
      toast({
        title: "Request Generated!",
        description: "Your refund request has been crafted with algorithmic precision.",
      });
    } finally {
      setIsLoading(false);
      clearInterval(messageInterval);
      setCurrentLoadingMessage(0);
    }
  };

  const generateMockRefundRequest = (data: typeof formData) => {
    const { company, customCompany, issue, desired_outcome, tone } = data;
    const companyName = company === "Other" ? customCompany : company;
    
    const greetings = {
      polite: `Dear ${companyName} Customer Service Team,`,
      assertive: `To Whom It May Concern at ${companyName}:`,
      disappointed: `Dear ${companyName} Support,`,
      frustrated: `${companyName} Customer Service,`
    };

    const openings = {
      polite: "I hope this message finds you well. I am writing to bring to your attention an issue I have encountered",
      assertive: "I am writing to formally request resolution for an unacceptable service experience",
      disappointed: "I am reaching out regarding a disappointing experience that has left me questioning my loyalty to your brand",
      frustrated: "I need immediate assistance resolving a significant issue that has caused considerable inconvenience"
    };

    const closings = {
      polite: "I would be most grateful for your prompt attention to this matter and look forward to your response.",
      assertive: "I expect this matter to be resolved promptly and professionally within 5-7 business days.",
      disappointed: "I sincerely hope we can resolve this matter quickly so I can continue being a satisfied customer.",
      frustrated: "I require immediate action on this matter and expect to hear back from you within 24 hours."
    };

    return `${greetings[tone as keyof typeof greetings]}

${openings[tone as keyof typeof openings]} with your service.

Issue Description:
${issue}

Due to this situation, I am requesting ${desired_outcome.toLowerCase()} as a resolution to this matter. This issue has caused inconvenience and frustration, and I believe this compensation is both fair and appropriate given the circumstances.

I have been a customer of ${companyName} and have generally had positive experiences, which makes this situation particularly disappointing. I trust that you will handle this matter with the professionalism and care that your customers deserve.

${closings[tone as keyof typeof closings]}

Thank you for your time and consideration.

Best regards,
[Your Name]
[Your Contact Information]
[Order/Account Number if applicable]`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
    toast({
      title: "Copied!",
      description: "Your refund request has been copied to clipboard.",
    });
  };

  const downloadAsText = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    const companyName = formData.company === "Other" ? formData.customCompany : formData.company;
    element.download = `refund-request-${companyName.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Downloaded!",
      description: "Your refund request has been saved as a text file.",
    });
  };

  const sendViaEmailClient = () => {
    const companyName = formData.company === "Other" ? formData.customCompany : formData.company;
    const emailBody = encodeURIComponent(generatedText);
    const subject = encodeURIComponent(`Refund Request to ${companyName}`);
    const mailtoLink = `mailto:support@${companyName.toLowerCase().replace(/\s+/g, '')}.com?subject=${subject}&body=${emailBody}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Refund Request <span className="text-primary">Generator</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transform your anger into artfully crafted complaints with the power of AI. 
            No more staring at blank screens wondering how to say "give me my money back" professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-primary" />
                  Generate Your Refund Request
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 {/* Company Selection */}
                <div className="space-y-2">
                  <Label htmlFor="company">Which company wronged you?</Label>
                  <Select value={formData.company} onValueChange={(value) => setFormData({...formData, company: value, customCompany: ""})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the source of your disappointment" />
                    </SelectTrigger>
                    <SelectContent>
                      {companies.map((company) => (
                        <SelectItem key={company} value={company}>{company}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Custom Company Input - Only show when "Other" is selected */}
                {formData.company === "Other" && (
                  <div className="space-y-2">
                    <Label htmlFor="customCompany">Company Name</Label>
                    <Input
                      id="customCompany"
                      placeholder="Enter the company name"
                      value={formData.customCompany}
                      onChange={(e) => setFormData({...formData, customCompany: e.target.value})}
                    />
                  </div>
                )}

                {/* Issue Description */}
                <div className="space-y-2">
                  <Label htmlFor="issue">What happened? (Be specific)</Label>
                  <Textarea
                    id="issue"
                    placeholder="Describe your issue here. The more details, the better we can craft your complaint. Example: 'My food delivery was 2 hours late, arrived cold, and the driver ate half of my fries.'"
                    value={formData.issue}
                    onChange={(e) => setFormData({...formData, issue: e.target.value})}
                    className="min-h-[120px] resize-none"
                  />
                </div>

                {/* Desired Outcome */}
                <div className="space-y-2">
                  <Label htmlFor="outcome">What do you want?</Label>
                  <Select value={formData.desired_outcome} onValueChange={(value) => setFormData({...formData, desired_outcome: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your desired resolution" />
                    </SelectTrigger>
                    <SelectContent>
                      {outcomes.map((outcome) => (
                        <SelectItem key={outcome} value={outcome}>{outcome}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tone Selection */}
                <div className="space-y-2">
                  <Label htmlFor="tone">Choose your tone</Label>
                  <Select value={formData.tone} onValueChange={(value) => setFormData({...formData, tone: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="How angry are you feeling?" />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map((tone) => (
                        <SelectItem key={tone.value} value={tone.value}>{tone.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Generate Button */}
                <Button 
                  onClick={generateRefundRequest}
                  className="w-full bg-gradient-primary hover:animate-glow-pulse text-lg py-6 h-auto font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5" />
                      Generate My Complaint
                    </>
                  )}
                </Button>

                {/* Loading Message */}
                {isLoading && (
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <p className="text-muted-foreground animate-fade-in">
                      {loadingMessages[currentLoadingMessage]}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with Ad */}
          <div className="space-y-6">
            {/* <AdSpace size="banner" /> */}
            
            {/* Tips Card */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary mb-1">Be Specific</p>
                  <p className="text-muted-foreground">Include order numbers, dates, and exact details about what went wrong.</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary mb-1">Stay Professional</p>
                  <p className="text-muted-foreground">Even when frustrated, maintaining professionalism gets better results.</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="font-medium text-primary mb-1">Follow Up</p>
                  <p className="text-muted-foreground">If you don't hear back in 3-5 days, send a polite follow-up.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Generated Result */}
        {generatedText && (
          <div className="max-w-7xl mx-auto mt-12">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Your Generated Refund Request</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="hover:bg-primary/10"
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadAsText}
                    className="hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm" onClick={sendViaEmailClient}
                    className="hover:bg-primary/10"
                    >
                    <Mail className="h-4 w-4 mr-1" />
                    Send via Email
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={generateRefundRequest}
                    className="hover:bg-primary/10"
                  >
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Regenerate
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-6">
                  <pre className="whitespace-pre-wrap text-sm font-mono leading-relaxed">
                    {generatedText}
                  </pre>
                </div>
                <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
                  <p className="text-success-foreground text-sm">
                    <strong>Next Steps:</strong> Copy this text and send it through the company's official support channels. 
                    Keep a record of your request and follow up if needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Bottom Ad */}
        <div className="mt-16">
          {/* <AdSpace size="leaderboard" /> */}
        </div>
      </div>
    </div>
  );
};

export default RefundGenerator;