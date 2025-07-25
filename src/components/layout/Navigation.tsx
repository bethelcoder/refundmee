import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Generator", path: "/generator" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy", path: "/privacy" }
  ];

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-foreground">refund</span>
              <span className="text-primary">mee</span>
              <span className="text-foreground">.com</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link to="/generator">
            <Button className="bg-gradient-primary hover:animate-glow-pulse">
              Start Complaining
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;