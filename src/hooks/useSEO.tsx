import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const useSEO = (seoData: SEOData) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Update title
    document.title = seoData.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', seoData.description);
    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', seoData.title, 'property');
    updateMetaTag('og:description', seoData.description, 'property');
    updateMetaTag('og:url', window.location.href, 'property');
    updateMetaTag('og:type', 'website', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoData.title);
    updateMetaTag('twitter:description', seoData.description);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = seoData.canonical || window.location.href;

  }, [seoData, location, searchParams]);
};

export const getCompanySEO = (company?: string | null): SEOData => {
  if (!company || company === 'Other') {
    return {
      title: 'Free AI Refund Request Generator | refund.me',
      description: 'Generate professional refund requests for Amazon, Uber, DoorDash, and more. Free AI-powered tool to write effective complaint letters and get your money back.',
      keywords: 'refund request generator, AI complaint letter, refund email template, customer service complaint, refund letter generator',
    };
  }

  const companyData = {
    Amazon: {
      title: `Amazon Refund Request Generator - Free AI Tool | refund.me`,
      description: `Generate professional Amazon refund requests instantly. Free AI-powered tool to write effective complaint letters for Amazon orders, deliveries, and services.`,
      keywords: 'Amazon refund request, Amazon complaint letter, how to request refund from Amazon, Amazon customer service email template, Amazon return request',
    },
    Uber: {
      title: `Uber Refund Request Generator - Free AI Tool | refund.me`,
      description: `Create professional Uber refund requests with AI. Generate complaint letters for ride issues, overcharging, and service problems. Get your money back from Uber.`,
      keywords: 'Uber refund request, Uber complaint letter, how to complain to Uber, Uber customer service email, Uber ride refund',
    },
    DoorDash: {
      title: `DoorDash Refund Request Generator - Free AI Tool | refund.me`,
      description: `Generate DoorDash refund requests for late delivery, missing items, and food quality issues. Free AI tool to write professional complaint letters.`,
      keywords: 'DoorDash refund request, DoorDash complaint letter, how to get refund from DoorDash, DoorDash customer service email, food delivery complaint',
    },
    eBay: {
      title: `eBay Refund Request Generator - Free AI Tool | refund.me`,
      description: `Create professional eBay refund requests with AI. Generate complaint letters for seller disputes, item not as described, and shipping issues.`,
      keywords: 'eBay refund request, eBay complaint letter, eBay buyer protection, eBay dispute email template',
    },
    PayPal: {
      title: `PayPal Refund Request Generator - Free AI Tool | refund.me`,
      description: `Generate PayPal refund requests and dispute letters with AI. Professional templates for payment issues, unauthorized transactions, and service complaints.`,
      keywords: 'PayPal refund request, PayPal dispute letter, PayPal complaint email, PayPal customer service template',
    },
  };

  return companyData[company as keyof typeof companyData] || getCompanySEO();
};

export default useSEO;