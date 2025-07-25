import { Link } from "react-router-dom";
import BuyMeCoffee from "@/components/ui/buy-me-coffee";

const Footer = () => {
  const companyLinks = [
    { name: "Amazon", url: "https://www.amazon.com/gp/help/customer/contact-us" },
    { name: "Uber", url: "https://help.uber.com/riding-and-driving/article/contact-uber-support?nodeId=7bad6a9a-b0d9-432f-ae2f-c5d5d62821d2" },
    { name: "DoorDash", url: "https://help.doordash.com/consumers/s/contactsupport?language=en_US" },
    { name: "eBay", url: "https://www.ebay.com/help/default.htm" },
    { name: "PayPal", url: "https://www.paypal.com/us/smarthelp/contact-us" }
  ];

  const seoLinks = [
    { text: "Amazon Refund Request Generator", company: "Amazon" },
    { text: "Uber Complaint Letter Generator", company: "Uber" },
    { text: "DoorDash Refund Email Template", company: "DoorDash" },
    { text: "eBay Dispute Letter Generator", company: "eBay" },
    { text: "PayPal Refund Request Tool", company: "PayPal" },
    { text: "Free AI Refund Templates", company: "" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      {/* Ad Space */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-muted/20 border border-dashed border-muted-foreground/30 rounded-lg p-8 text-center">
          <p className="text-muted-foreground text-sm">
            [Google AdSense Banner - 728x90]
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* SEO Links Section */}
        <div className="mb-12 p-6 bg-muted/20 rounded-lg">
          <h3 className="font-semibold text-foreground mb-4 text-center">
            Popular Refund Request Generators
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {seoLinks.map((link, index) => (
              <Link
                key={index}
                to={link.company ? `/generator?company=${link.company}` : '/generator'}
                className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-1 rounded-md hover:bg-primary/10"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold">
              <span className="text-foreground">refund</span>
              <span className="text-primary">mee</span>
              <span className="text-foreground">.com</span>
            </div>
            <p className="text-muted-foreground text-sm">
              So useless it might just get you a refund.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/generator" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Generator
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Company Help Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company Support</h4>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name} Support
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Support Us */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support Us</h4>
            <div className="space-y-3">
              <BuyMeCoffee variant="button" size="sm" />
              <p className="text-xs text-muted-foreground">
                Keep this tool free for everyone
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 refundmee.com. Not affiliated with any companies mentioned.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ and questionable life choices
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;