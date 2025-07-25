import { Coffee, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BuyMeCoffeeProps {
  variant?: "button" | "card" | "floating";
  size?: "sm" | "default" | "lg";
}

const BuyMeCoffee = ({ variant = "button", size = "default" }: BuyMeCoffeeProps) => {
  const handleSupport = () => {
    // Replace with your actual Buy Me a Coffee URL
    window.open("https://buymeacoffee.com/refundme", "_blank");
  };

  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleSupport}
          className="rounded-full w-12 h-12 p-0 bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
          aria-label="Buy me a coffee"
        >
          <Coffee className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Support Our Work</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Help us keep this free tool running and add more features!
          </p>
          <Button 
            onClick={handleSupport}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Heart className="w-4 h-4 mr-2" />
            Buy Me a Coffee
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Default button variant
  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    default: "h-10 px-4 py-2",
    lg: "h-12 px-6 text-base"
  };

  return (
    <Button
      onClick={handleSupport}
      variant="outline"
      size={size}
      className={`${sizeClasses[size]} border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300`}
    >
      <Coffee className="w-4 h-4 mr-2" />
      Buy Me a Coffee
    </Button>
  );
};

export default BuyMeCoffee;