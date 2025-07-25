interface AdSpaceProps {
  size: "banner" | "square" | "leaderboard";
  className?: string;
}

const AdSpace = ({ size, className = "" }: AdSpaceProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case "leaderboard":
        return "h-24 w-full max-w-[728px]"; // 728x90
      case "banner":
        return "h-[250px] w-full max-w-[300px]"; // 300x250
      case "square":
        return "h-[280px] w-full max-w-[336px]"; // 336x280
      default:
        return "h-24 w-full";
    }
  };

  const getSizeText = () => {
    switch (size) {
      case "leaderboard":
        return "Google AdSense - 728x90 Leaderboard";
      case "banner":
        return "Google AdSense - 300x250 Medium Rectangle";
      case "square":
        return "Google AdSense - 336x280 Large Rectangle";
      default:
        return "Google AdSense";
    }
  };

  return (
    <div className={`mx-auto ${className}`}>
      <div
        className={`${getSizeClasses()} bg-muted/10 border border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center`}
      >
        <p className="text-muted-foreground text-xs text-center px-4">
          [{getSizeText()}]
        </p>
      </div>
    </div>
  );
};

export default AdSpace;