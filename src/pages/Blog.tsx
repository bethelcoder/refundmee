import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, User, Share2, ThumbsUp, ThumbsDown, Facebook, Twitter, MessageCircle, ChevronRight, Home } from "lucide-react";
import { useState, useEffect } from "react";
import useSEO from "@/hooks/useSEO";
import StructuredData from "@/components/seo/StructuredData";
import BuyMeCoffee from "@/components/ui/buy-me-coffee";
import { useToast } from "@/hooks/use-toast";

const blogPosts = {
  "amazon-refund": {
    title: "How to Get a Refund from Amazon in 3 Simple Steps",
    excerpt: "Complete guide to requesting Amazon refunds for orders, deliveries, and digital purchases. Includes email templates and pro tips.",
    readTime: "5 min read",
    category: "Amazon",
    date: "January 15, 2024",
    author: "RefundBot",
    content: `
# How to Get a Refund from Amazon in 3 Simple Steps

Amazon's refund process is generally straightforward, but knowing the right approach can save you time and ensure success. Here's your complete guide to getting your money back.

## Step 1: Check Your Order Status

Before requesting a refund, visit your Amazon account and check the order details:

- **Recent orders**: Go to "Your Orders" in your account
- **Order status**: Look for delivery confirmation or tracking issues
- **Return window**: Most items have a 30-day return window
- **Digital purchases**: Different rules apply for Kindle books, apps, and Prime Video

## Step 2: Choose the Right Refund Method

Amazon offers several refund options depending on your situation:

### For Physical Items:
- **Self-service returns**: Use Amazon's automated return system
- **Return to Amazon locker**: Drop off at convenient locations
- **Schedule pickup**: For large or heavy items

### For Digital Content:
- **Accidental purchases**: Can often be refunded within 48 hours
- **Content issues**: Report problems with video quality or download errors
- **Subscription cancellations**: Cancel Prime or other services easily

## Step 3: Write an Effective Refund Request

If the standard process doesn't work, contact customer service with a clear message:

### Email Template:
\`\`\`
Subject: Refund Request for Order #[ORDER-NUMBER]

Dear Amazon Customer Service,

I am writing to request a refund for my recent order #[ORDER-NUMBER] placed on [DATE].

Issue: [Clearly describe the problem - item not as described, damaged, late delivery, etc.]

Resolution Requested: [Full refund, partial refund, replacement, etc.]

I have been a loyal Amazon customer for [X] years and would appreciate your prompt assistance in resolving this matter.

Thank you for your time and consideration.

Best regards,
[Your Name]
[Your Contact Information]
\`\`\`

## Pro Tips for Success

1. **Be polite but firm**: Courtesy goes a long way with customer service
2. **Provide evidence**: Screenshots, photos, or tracking information
3. **Know your rights**: Familiarize yourself with Amazon's return policy
4. **Escalate if needed**: Ask to speak with a supervisor for complex issues
5. **Document everything**: Keep records of all communications

## Common Refund Scenarios

### Late Delivery
If your package arrives late, you may be eligible for:
- Full refund
- Partial refund
- Free shipping on next order
- Prime membership extension

### Item Not as Described
When the item doesn't match the listing:
- Take photos of the actual item vs. listing
- Document specific differences
- Request full refund plus return shipping

### Damaged Items
For items damaged in shipping:
- Don't return the item until instructed
- Provide photos of packaging and damage
- Amazon often provides immediate refunds

## Conclusion

Getting a refund from Amazon doesn't have to be complicated. Follow these three steps, be clear about your issue, and maintain a professional tone. Most refund requests are processed quickly when you provide the right information upfront.

Remember: Amazon values customer satisfaction and will often go above and beyond to resolve issues. Don't hesitate to reach out if you have a legitimate concern.
    `
  },
  "ubereats-policy": {
    title: "Uber Eats Refund Policy: What You Need to Know",
    excerpt: "Everything about Uber Eats refunds for late delivery, wrong orders, and quality issues. Learn how to get your money back fast.",
    readTime: "4 min read",
    category: "Uber",
    date: "January 12, 2024",
    author: "RefundBot",
    content: `
# Uber Eats Refund Policy: What You Need to Know

Understanding Uber Eats' refund policy can help you get your money back when orders go wrong. Here's everything you need to know about getting refunds for delivery issues.

## When You Can Get a Refund

Uber Eats typically provides refunds for these situations:

### Order Issues
- **Wrong items**: You received different food than ordered
- **Missing items**: Part of your order didn't arrive
- **Quality problems**: Food arrived cold, spoiled, or inedible
- **Allergies**: Restaurant didn't follow special instructions

### Delivery Problems
- **Late delivery**: Order arrived significantly late
- **Never delivered**: Driver marked as delivered but you didn't receive it
- **Delivery to wrong address**: Due to driver error

### Restaurant Issues
- **Restaurant closed**: Order was accepted but restaurant was actually closed
- **Out of items**: Restaurant couldn't fulfill your order

## How to Request a Refund

### Through the App (Fastest Method):
1. Open the Uber Eats app
2. Go to "Account" → "Order History"
3. Find your order and tap "Get Help"
4. Select the issue type
5. Follow the prompts to request a refund

### Via Website:
1. Visit help.uber.com
2. Sign in to your account
3. Navigate to "Order Issues"
4. Select your problem and submit a request

## Types of Refunds Available

### Full Refund
- Complete order never arrived
- Entirely wrong order
- Food safety concerns
- Restaurant was closed

### Partial Refund
- Some items missing
- Portion of order was incorrect
- Minor quality issues
- Late delivery (usually promotional credits)

### Uber Credits vs. Money Back
- **Credits**: Most common form of compensation
- **Original payment method**: Available for serious issues
- **Promotional credits**: Often given for late deliveries

## Refund Request Email Template

If you need to escalate beyond the app:

\`\`\`
Subject: Refund Request - Order #[ORDER-NUMBER]

Dear Uber Eats Support,

I am requesting a refund for order #[ORDER-NUMBER] placed on [DATE] at [TIME].

Issue Details:
- [Describe the specific problem]
- [Include relevant details like delivery time, restaurant name]
- [Mention any health/safety concerns if applicable]

Resolution Requested:
[Specify if you want full refund, partial refund, or credits]

This order cost $[AMOUNT] and the issue has significantly impacted my experience. I would appreciate a prompt resolution.

Order Details:
- Order Number: [NUMBER]
- Restaurant: [NAME]
- Delivery Address: [ADDRESS]
- Payment Method: [CARD/PAYPAL]

Thank you for your assistance.

Best regards,
[Your Name]
[Phone Number]
[Email Address]
\`\`\`

## Timeline for Refunds

### Immediate (App-based requests):
- Credits: Usually instant
- Simple issues: Within minutes

### Customer Service Reviews:
- Complex cases: 3-5 business days
- Payment method refunds: 5-10 business days

## Tips for Successful Refund Requests

1. **Act quickly**: Report issues within 48 hours
2. **Be specific**: Clearly describe what went wrong
3. **Take photos**: Document missing or wrong items
4. **Keep records**: Screenshot order details and delivery confirmation
5. **Be reasonable**: Small delays don't always warrant refunds

## What If Your Refund Is Denied?

### Escalation Steps:
1. **Request review**: Ask for a supervisor or manager
2. **Provide more evidence**: Additional photos or documentation
3. **Social media**: Sometimes public complaints get faster responses
4. **Chargeback**: Last resort through your credit card company

### Common Denial Reasons:
- Too much time has passed
- Pattern of frequent refund requests
- Insufficient evidence of the issue
- Order was delivered as confirmed

## Preventing Future Issues

- **Check orders immediately**: Verify contents upon delivery
- **Provide clear delivery instructions**: Reduce delivery errors
- **Rate honestly**: Help improve restaurant and driver quality
- **Use delivery notes**: Specify any special requirements

## Conclusion

Uber Eats generally has a customer-friendly refund policy, especially for legitimate issues. The key is to report problems quickly through the app and provide clear details about what went wrong. Most issues are resolved within minutes, and even complex cases are usually handled within a few days.

Remember that while Uber Eats wants to keep customers happy, frequent refund requests may flag your account for review. Only request refunds for genuine issues to maintain a good standing with the platform.
    `
  },
  "doordash-complaint-templates": {
    title: "DoorDash Complaint Letter Templates That Actually Work",
    excerpt: "Proven DoorDash refund request templates for common delivery problems. Get results with these professional complaint letters.",
    readTime: "6 min read",
    category: "DoorDash",
    date: "January 10, 2024",
    author: "RefundBot",
    content: `
# DoorDash Complaint Letter Templates That Actually Work

Getting a satisfactory response from DoorDash requires the right approach. These proven templates will help you write effective complaint letters that get results.

## Template 1: Late Delivery Complaint

**Use when**: Your order arrived significantly late

\`\`\`
Subject: Late Delivery Compensation Request - Order #[ORDER-NUMBER]

Dear DoorDash Customer Support,

I am writing to express my dissatisfaction with the delivery service for order #[ORDER-NUMBER] placed on [DATE] at [TIME].

Issue Summary:
- Order was scheduled for delivery by [EXPECTED TIME]
- Actual delivery time: [ACTUAL TIME]
- Delay: [X] minutes/hours late
- No communication about the delay was provided

Impact:
[Choose relevant impacts:]
- Food arrived cold and inedible
- Missed scheduled meal time
- Had to make alternative dinner arrangements
- Late for work/appointment due to waiting

Resolution Requested:
I request [full refund/partial refund/delivery fee refund/credit for future order] due to this unacceptable delay.

I have been a loyal DoorDash customer for [X] years and expect better service. Please confirm how you will resolve this matter.

Order Details:
- Order #: [NUMBER]
- Restaurant: [NAME]
- Original delivery estimate: [TIME]
- Actual delivery: [TIME]
- Order total: $[AMOUNT]

Thank you for your prompt attention to this matter.

Sincerely,
[Your Name]
[Email]
[Phone]
\`\`\`

## Template 2: Wrong Order Complaint

**Use when**: You received someone else's order or incorrect items

\`\`\`
Subject: Incorrect Order Delivered - Immediate Refund Required

Dear DoorDash Support Team,

I received an incorrect order today and require immediate resolution for order #[ORDER-NUMBER].

What I Ordered:
- [List items you actually ordered]
- Total paid: $[AMOUNT]

What I Received:
- [List items you actually received]
- [Note if it was clearly meant for someone else]

This error has resulted in:
- Wasted money on food I cannot eat
- [Dietary restrictions violated - if applicable]
- No dinner for my family
- Significant inconvenience

Immediate Action Required:
1. Full refund of $[AMOUNT] to my original payment method
2. Compensation for the inconvenience caused
3. Assurance this will not happen again

I expect this to be resolved within 24 hours. This level of service is unacceptable for a premium delivery platform.

Order Information:
- Order #: [NUMBER]
- Delivery address: [ADDRESS]
- Driver name: [IF KNOWN]
- Delivery time: [TIME]

I await your immediate response and resolution.

Best regards,
[Your Name]
[Account email]
[Phone number]
\`\`\`

## Template 3: Food Quality Complaint

**Use when**: Food arrived damaged, cold, or inedible

\`\`\`
Subject: Food Quality Issue - Health Concern and Refund Request

Dear DoorDash Customer Care,

I am writing to report a serious food quality issue with order #[ORDER-NUMBER] that requires immediate attention.

Food Quality Problems:
- [Specific issues: cold food, spilled items, damaged packaging, etc.]
- [Any food safety concerns]
- [Items that were completely inedible]

Health and Safety Concerns:
[If applicable, mention:]
- Potential food poisoning risk
- Allergies not observed
- Contamination concerns
- Temperature safety issues

Financial Impact:
- Order total: $[AMOUNT]
- Delivery fee: $[AMOUNT]
- Tip: $[AMOUNT]
- Total wasted: $[TOTAL AMOUNT]

Resolution Required:
1. Full refund of $[TOTAL AMOUNT]
2. Investigation of restaurant's food handling
3. Assurance of improved quality control

This incident has caused significant disappointment and potential health risks. I expect DoorDash to take this matter seriously and provide appropriate compensation.

Supporting Evidence:
- Photos of the damaged food (available upon request)
- Timestamp of delivery
- Order receipt

Please respond within 24 hours with your resolution plan.

Sincerely,
[Your Name]
[Account Information]
\`\`\`

## Template 4: Driver Behavior Complaint

**Use when**: The driver was unprofessional, rude, or inappropriate

\`\`\`
Subject: Unprofessional Driver Behavior - Order #[ORDER-NUMBER]

Dear DoorDash Management,

I am filing a formal complaint about the unprofessional behavior of the driver assigned to order #[ORDER-NUMBER] on [DATE].

Incident Details:
- Driver behavior: [Specific description of what happened]
- Time of incident: [TIME]
- Location: [DELIVERY ADDRESS]
- Driver actions that were inappropriate: [DETAILS]

Impact:
- Felt unsafe/uncomfortable
- Unprofessional service experience
- [Any specific consequences]

This behavior is completely unacceptable and reflects poorly on DoorDash's brand. I expect:

1. Investigation of this driver
2. Appropriate disciplinary action
3. Full refund for this order ($[AMOUNT])
4. Assurance this driver will not deliver to my address again

Driver Information:
- Driver name: [IF KNOWN]
- Vehicle: [DESCRIPTION IF VISIBLE]
- License plate: [IF NOTED]
- Order #: [NUMBER]

I trust DoorDash will take swift action to address this serious matter.

Regards,
[Your Name]
[Contact Information]
\`\`\`

## Template 5: Missing Items Follow-up

**Use when**: DoorDash's initial response was inadequate

\`\`\`
Subject: FOLLOW-UP: Inadequate Resolution for Missing Items - Order #[ORDER-NUMBER]

Dear DoorDash Escalation Team,

I am following up on my complaint from [DATE] regarding missing items from order #[ORDER-NUMBER]. Your initial response was insufficient and requires escalation.

Original Issue:
- Missing items: [LIST ITEMS]
- Value of missing items: $[AMOUNT]
- Initial complaint date: [DATE]

Inadequate Initial Response:
- [Describe what DoorDash offered]
- Why this doesn't adequately resolve the issue
- [If they offered credits when you wanted a refund, etc.]

What I Need:
- Full refund of $[AMOUNT] for missing items
- [Additional compensation if applicable]
- Guarantee this won't happen again

This is my [X] time experiencing this issue with DoorDash. As a [frequency] customer who spends approximately $[MONTHLY AMOUNT] monthly on your platform, I expect better service and appropriate resolution.

Please escalate this to a supervisor and provide a satisfactory resolution within 48 hours, or I will consider taking my business elsewhere and sharing this experience publicly.

Previous Case Information:
- Original order #: [NUMBER]
- Initial complaint reference: [IF PROVIDED]
- Customer service rep: [NAME IF KNOWN]

I await your prompt response.

[Your Name]
[Account Email]
[Phone Number]
\`\`\`

## Key Tips for Success

### Before Writing:
1. **Document everything**: Take photos, save receipts, note times
2. **Check app first**: Try the in-app help feature before emailing
3. **Be timely**: Report issues within 24-48 hours

### Writing Your Complaint:
1. **Be specific**: Include order numbers, times, and exact issues
2. **Stay professional**: Angry emails get less attention
3. **Request specific resolution**: Don't just complain, say what you want
4. **Set deadlines**: Give them 24-48 hours to respond

### Follow-up Strategy:
1. **Escalate if needed**: Ask for supervisors or managers
2. **Use social media**: Public complaints often get faster responses
3. **Consider chargebacks**: Last resort through your credit card
4. **Rate honestly**: Use app ratings to reflect your experience

## Conclusion

These templates provide a framework for effective DoorDash complaints. Customize them with your specific details and maintain a professional tone. Most issues are resolved quickly when you clearly communicate the problem and your desired resolution.

Remember: DoorDash wants to keep customers happy, but you need to advocate for yourself to get fair compensation when things go wrong.
    `
  },
  "refund-psychology": {
    title: "The Psychology of Effective Refund Requests",
    excerpt: "Discover the key elements that make refund requests successful. Learn the right tone, structure, and timing for maximum impact.",
    readTime: "7 min read",
    category: "Strategy",
    date: "January 8, 2024",
    author: "RefundBot",
    content: `
# The Psychology of Effective Refund Requests

Understanding the psychology behind successful refund requests can dramatically improve your success rate. Here's what customer service representatives respond to and how to craft requests that get results.

## The Customer Service Mindset

### What Representatives Want to See:
- **Clear problem description**: They need to understand exactly what went wrong
- **Reasonable requests**: Asking for fair compensation, not trying to scam
- **Polite communication**: Respectful tone makes them want to help
- **Easy resolution**: Simple fixes that don't require manager approval

### What Triggers Resistance:
- **Aggressive language**: Threats, demands, or rude behavior
- **Vague complaints**: "Everything was terrible" without specifics
- **Unreasonable demands**: Asking for more than the issue warrants
- **Obvious fraud**: Claims that don't match the evidence

## The CLEAR Framework

Use this psychological framework for maximum effectiveness:

### C - Calm and Courteous
**Psychology**: People naturally want to help those who treat them well.

**Example**:
❌ "This is absolutely ridiculous! I demand immediate action!"
✅ "I hope you can help me resolve this unfortunate situation."

### L - Logical Structure
**Psychology**: Organized information is easier to process and act upon.

**Structure**:
1. Brief greeting
2. Order/account details
3. Clear problem description
4. Impact statement
5. Specific resolution request
6. Polite closing

### E - Empathy and Understanding
**Psychology**: Acknowledging the company's position builds rapport.

**Example**:
"I understand that delivery delays can happen, but in this case..."

### A - Assertive but Respectful
**Psychology**: Confidence without aggression shows you know your rights.

**Example**:
"Based on your return policy, I believe a full refund is appropriate."

### R - Reasonable Resolution
**Psychology**: Fair requests are more likely to be approved quickly.

**Ask yourself**: "Is what I'm requesting proportional to the problem?"

## Psychological Triggers That Work

### 1. Loss Aversion
**Principle**: People hate losing existing customers more than gaining new ones.

**How to use**:
"I've been a loyal customer for [X] years and would hate for this experience to change that relationship."

### 2. Social Proof
**Principle**: We follow what others do.

**How to use**:
"I've recommended your service to friends, but this experience makes that difficult."

### 3. Reciprocity
**Principle**: People want to return favors.

**How to use**:
"I appreciate your time in reviewing this matter" (before they've actually helped).

### 4. Authority
**Principle**: We respect expertise and knowledge.

**How to use**:
"According to your terms of service..." or "Your return policy states..."

### 5. Consistency
**Principle**: People want to appear consistent with previous actions.

**How to use**:
"Your company has always provided excellent service, so I'm confident you'll resolve this."

## The Timing Psychology

### Best Times to Submit Requests:
- **Tuesday-Thursday**: Mid-week when staff isn't overwhelmed
- **Morning hours**: When representatives are fresh and motivated
- **Within 24-48 hours**: Shows the issue is current and urgent

### Worst Times:
- **Monday mornings**: Staff dealing with weekend backlog
- **Friday afternoons**: People focused on weekend plans
- **After major holidays**: High volume of complaints

## Language That Works

### Power Words:
- "Disappointed" (not angry)
- "Confident" (not demanding)
- "Appreciate" (builds goodwill)
- "Resolve" (focuses on solutions)
- "Experience" (personalizes the issue)

### Avoid These Words:
- "Demand" (creates resistance)
- "Terrible" (too emotional)
- "Never" (usually an exaggeration)
- "Always" (absolutes trigger skepticism)
- "Ridiculous" (dismisses their effort)

## The Three-Layer Approach

### Layer 1: The Problem (Facts)
Present objective information without emotion:
"My order #12345 was delivered 2 hours late on January 15th."

### Layer 2: The Impact (Personal)
Explain how it affected you specifically:
"This caused my dinner party to start without the main course."

### Layer 3: The Resolution (Forward-looking)
State what would make it right:
"A refund of the delivery fee would help restore my confidence in your service."

## Escalation Psychology

### When Initial Request Fails:
1. **Ask for reconsideration**: "Could we explore other options?"
2. **Request supervisor**: "I'd appreciate a second opinion on this."
3. **Reference company values**: "This doesn't align with [company]'s usual standards."

### Maintain Professional Tone:
Even when escalating, keep the focus on resolution, not blame.

## Email vs. Phone Psychology

### Email Advantages:
- **Documentation**: Creates paper trail
- **Thoughtful responses**: Representatives can research properly
- **Less emotional**: Reduced chance of heated exchanges

### Phone Advantages:
- **Human connection**: Harder to say no to a real person
- **Immediate resolution**: Can solve simple issues instantly
- **Tone conveyance**: Your sincerity comes through

## The Follow-up Strategy

### First Follow-up (48-72 hours):
"I wanted to follow up on my request from [date]. Could you provide an update on the resolution timeline?"

### Second Follow-up (1 week):
"I haven't heard back about my refund request. Could this be escalated to ensure it receives proper attention?"

### Final Follow-up:
"This will be my final request before exploring other resolution options. Please provide a definitive response."

## Common Psychological Mistakes

### 1. Emotional Dumping
❌ Writing a novel about how upset you are
✅ Brief, factual description of the issue

### 2. Ultimatums
❌ "Fix this or I'll never shop here again!"
✅ "I hope we can resolve this to maintain our positive relationship."

### 3. Comparison Complaints
❌ "Amazon would never treat customers like this!"
✅ Focus on the current issue with the current company

### 4. Assumption of Bad Intent
❌ "You're obviously trying to steal my money!"
✅ "I'm sure this was an unintentional oversight."

## Success Metrics

### High Success Rate Requests:
- Factual and specific
- Proportional resolution requested
- Professional tone maintained
- Clear timeline provided

### Low Success Rate Requests:
- Emotional and vague
- Excessive compensation demanded
- Threatening or rude language
- Immediate response demanded

## Conclusion

Successful refund requests aren't about being the loudest complainer—they're about understanding human psychology and crafting messages that make customer service representatives want to help you.

Remember: The person reading your request is human. They respond to respect, clarity, and reasonable requests. Master these psychological principles, and you'll see dramatically improved results in your refund success rate.

The key is to make it easy for them to say "yes" to your request while maintaining your dignity and their respect throughout the process.
    `
  }
};

// Helper functions for Table of Contents
const extractHeadings = (content: string) => {
  const lines = content.split('\n');
  const headings: { id: string; text: string; level: number }[] = [];
  
  lines.forEach((line, index) => {
    if (line.startsWith('## ')) {
      const text = line.replace('## ', '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ id, text, level: 2 });
    } else if (line.startsWith('### ')) {
      const text = line.replace('### ', '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ id, text, level: 3 });
    }
  });
  
  return headings;
};

const ShareButtons = ({ title, url }: { title: string; url: string }) => {
  const { toast } = useToast();
  
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied!",
      description: "Article URL copied to clipboard",
    });
  };
  
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg">
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0"
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`, '_blank')}
          >
            <Twitter className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0"
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
          >
            <Facebook className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0"
            onClick={() => window.open(`https://wa.me/?text=${shareTitle}%20${shareUrl}`, '_blank')}
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0"
            onClick={copyToClipboard}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const HelpfulSection = () => {
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);
  const { toast } = useToast();
  
  const handleFeedback = (type: 'up' | 'down') => {
    setFeedback(type);
    toast({
      title: type === 'up' ? "Thanks for your feedback!" : "Sorry this wasn't helpful",
      description: type === 'up' ? "We're glad this article helped you!" : "We'll work to improve our content.",
    });
  };
  
  return (
    <div className="bg-muted/20 border border-border rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold mb-3">Was this article helpful?</h3>
      <div className="flex justify-center gap-4">
        <Button
          variant={feedback === 'up' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFeedback('up')}
          className="flex items-center gap-2"
        >
          <ThumbsUp className="h-4 w-4" />
          Yes, helpful
        </Button>
        <Button
          variant={feedback === 'down' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFeedback('down')}
          className="flex items-center gap-2"
        >
          <ThumbsDown className="h-4 w-4" />
          Not helpful
        </Button>
      </div>
    </div>
  );
};

const RelatedArticles = ({ currentSlug }: { currentSlug: string }) => {
  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== currentSlug)
    .slice(0, 3);
    
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(([key, post]) => (
          <Card key={key} className="group hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                  {post.category}
                </span>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                <Link to={`/blog/${key}`}>
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <Link to={`/blog/${key}`}>
                <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary/80">
                  Read Article →
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const TableOfContents = ({ headings }: { headings: { id: string; text: string; level: number }[] }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <div className="hidden xl:block fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg max-w-64">
        <h4 className="font-semibold text-sm mb-3">Table of Contents</h4>
        <nav className="space-y-1">
          {headings.map(({ id, text, level }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block text-xs transition-colors hover:text-primary ${
                activeId === id ? 'text-primary font-medium' : 'text-muted-foreground'
              } ${level === 3 ? 'pl-3' : ''}`}
            >
              {text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

const Blog = () => {
  const { slug } = useParams();
  
  if (!slug) {
    // Blog list page
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Refund Request <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Master the art of getting your money back with our expert guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(blogPosts).map(([key, post]) => (
            <Card key={key} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
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
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  <Link to={`/blog/${key}`}>
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <Link to={`/blog/${key}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Full Article
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Individual blog post page
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
        <Link to="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  // Extract headings for table of contents
  const headings = extractHeadings(post.content);
  const currentUrl = `https://refund.me/blog/${slug}`;

  // SEO for individual blog posts
  useSEO({
    title: `${post.title} | refund.me Blog`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()} refund, complaint letter, refund request template, customer service email`
  });

  return (
    <>
      <StructuredData
        type="article"
        data={{
          headline: post.title,
          description: post.excerpt,
          author: post.author,
          datePublished: post.date,
          url: currentUrl
        }}
      />
      
      {/* Sticky Breadcrumb */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Share Buttons */}
      <ShareButtons title={post.title} url={currentUrl} />
      
      {/* Table of Contents */}
      <TableOfContents headings={headings} />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground flex-wrap">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-primary bg-clip-text text-transparent">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="blog-content space-y-6"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .split('\n')
                .map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold mt-12 mb-6 first:mt-0">${line.replace('# ', '')}</h1>`;
                  }
                  if (line.startsWith('## ')) {
                    const text = line.replace('## ', '');
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h2 id="${id}" class="text-2xl font-semibold mt-10 mb-4 scroll-mt-24">${text}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    const text = line.replace('### ', '');
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h3 id="${id}" class="text-xl font-semibold mt-8 mb-3 scroll-mt-24">${text}</h3>`;
                  }
                  if (line.startsWith('```') && !line.includes('Subject:')) {
                    return '<div class="bg-muted/20 border border-border rounded-lg p-6 my-6 font-mono text-sm whitespace-pre-line overflow-x-auto">';
                  }
                  if (line.startsWith('```') && line.includes('Subject:')) {
                    return '<div class="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6 my-6 font-mono text-sm whitespace-pre-line">';
                  }
                  if (line === '```') {
                    return '</div>';
                  }
                  if (line.startsWith('- ')) {
                    return `<li class="ml-6 mb-2 leading-relaxed">${line.replace('- ', '')}</li>`;
                  }
                  if (line.startsWith('❌ ') || line.startsWith('✅ ')) {
                    return `<p class="mb-4 leading-relaxed p-3 rounded-lg ${line.startsWith('❌') ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-green-50 border border-green-200 text-green-800'}">${line}</p>`;
                  }
                  if (line.trim() === '') {
                    return '<div class="h-4"></div>';
                  }
                  return `<p class="mb-4 leading-relaxed text-lg">${line}</p>`;
                })
                .join('')
            }}
          />
        </div>

        {/* Was this helpful section */}
        <div className="mt-16">
          <HelpfulSection />
        </div>

        {/* Support Section */}
        <div className="mt-12 p-6 bg-gradient-subtle rounded-lg border border-border/50 text-center">
          <h3 className="text-lg font-semibold mb-3">Found This Article Helpful?</h3>
          <p className="text-muted-foreground mb-4">
            Support us to keep creating valuable refund guides and tools!
          </p>
          <BuyMeCoffee variant="button" size="default" />
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Refund Request?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Use our free AI-powered tool to generate a personalized refund request letter in seconds
            </p>
            <Link to="/generator">
              <Button size="lg" className="bg-gradient-primary hover:animate-glow-pulse text-lg px-8 py-3">
                Generate My Refund Request
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <RelatedArticles currentSlug={slug} />
      </article>
    </>
  );
};

export default Blog;