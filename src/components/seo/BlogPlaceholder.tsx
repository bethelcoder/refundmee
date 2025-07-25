import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

const BlogPlaceholder = () => {
  const blogPosts = [
    {
      title: "How to Get a Refund from Amazon in 3 Simple Steps",
      excerpt: "Complete guide to requesting Amazon refunds for orders, deliveries, and digital purchases. Includes email templates and pro tips.",
      readTime: "5 min read",
      category: "Amazon",
      slug: "amazon-refund"
    },
    {
      title: "Uber Eats Refund Policy: What You Need to Know",
      excerpt: "Everything about Uber Eats refunds for late delivery, wrong orders, and quality issues. Learn how to get your money back fast.",
      readTime: "4 min read",
      category: "Uber",
      slug: "ubereats-policy"
    },
    {
      title: "DoorDash Complaint Letter Templates That Actually Work",
      excerpt: "Proven DoorDash refund request templates for common delivery problems. Get results with these professional complaint letters.",
      readTime: "6 min read",
      category: "DoorDash",
      slug: "doordash-complaint-templates"
    },
    {
      title: "The Psychology of Effective Refund Requests",
      excerpt: "Discover the key elements that make refund requests successful. Learn the right tone, structure, and timing for maximum impact.",
      readTime: "7 min read",
      category: "Strategy",
      slug: "refund-psychology"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Refund Request <span className="text-primary">Guides</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Learn the insider secrets to writing refund requests that actually get results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                  {post.category}
                </span>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-0 h-auto text-primary hover:text-primary/80 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/blog">
          <Button size="lg" variant="outline" className="bg-gradient-primary hover:animate-glow-pulse text-white border-0">
            <BookOpen className="h-4 w-4 mr-2" />
            Read All Articles
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogPlaceholder;