import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: 'faq' | 'website' | 'service' | 'article';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    let structuredData: any = {};

    switch (type) {
      case 'faq':
        const faqItems: FAQItem[] = [
          {
            question: "How do I request a refund from Amazon?",
            answer: "Use our free AI tool to generate a professional refund request for Amazon. Simply select Amazon as the company, describe your issue, choose your desired outcome, and select your preferred tone. Our AI will create a personalized refund request email."
          },
          {
            question: "Can I get a refund from Uber for a bad ride?",
            answer: "Yes, Uber offers refunds for various issues including overcharging, poor service, or ride problems. Use our refund generator to create a professional complaint letter that clearly explains your issue and requested resolution."
          },
          {
            question: "How long should I wait for a DoorDash refund?",
            answer: "DoorDash typically processes refunds within 5-7 business days. If you haven't received a response to your refund request, use our tool to generate a follow-up email to escalate your complaint."
          },
          {
            question: "What should I include in a refund request email?",
            answer: "Include specific details about your issue, order numbers, dates, desired outcome, and maintain a professional tone. Our AI generator automatically includes all necessary elements for an effective refund request."
          },
          {
            question: "Is the refund request generator really free?",
            answer: "Yes, our AI-powered refund request generator is completely free to use. You can generate unlimited refund requests for any company without any cost or registration required."
          }
        ];

        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        };
        break;

      case 'website':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "refund.me",
          "description": "Free AI-powered refund request generator for Amazon, Uber, DoorDash, and more companies",
          "url": "https://refund.me",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://refund.me/generator?company={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
        break;

      case 'service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Refund Request Generator",
          "description": "Free AI-powered tool to generate professional refund requests and complaint letters for popular companies",
          "provider": {
            "@type": "Organization",
            "name": "refund.me"
          },
          "serviceType": "Customer Service Tool",
          "areaServed": "US",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Refund Request Templates",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Amazon Refund Request Generator"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Uber Refund Request Generator"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "DoorDash Refund Request Generator"
                }
              }
            ]
          }
        };
        break;

      case 'article':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.headline || "Refund Request Guide",
          "description": data?.description || "Learn how to write effective refund requests",
          "author": {
            "@type": "Person",
            "name": data?.author || "RefundBot"
          },
          "publisher": {
            "@type": "Organization",
            "name": "refund.me",
            "logo": {
              "@type": "ImageObject",
              "url": "https://refund.me/logo.png"
            }
          },
          "datePublished": data?.datePublished || new Date().toISOString(),
          "dateModified": data?.dateModified || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || "https://refund.me"
          }
        };
        break;
    }

    // Remove existing structured data script
    const existingScript = document.querySelector('script[data-structured-data]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-structured-data]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;