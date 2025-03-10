'use client';

import { 
  FacebookLogo,
  Target,
  Users,
  ChartLine,
  Gear,
  ChartBar,
  Storefront
} from '@phosphor-icons/react';
import ServicePage from '@/app/components/templates/ServicePage';

export default function FacebookAdsPage() {
  const serviceData = {
    name: 'Facebook Ads',
    logo: <FacebookLogo weight="fill" />,
    heroImage: '/images/services/facebook-ads.jpg',
    description: 'Target your ideal customers with precision using Facebooks powerful advertising platform. Drive engagement, leads, and sales with data-driven campaigns.',
    stats: {
      retention: 92,
      adSpend: 150,
      roi: 8
    },
    features: [
      { 
        icon: <Target weight="fill" />, 
        text: "Precise Audience Targeting" 
      },
      { 
        icon: <Users weight="fill" />, 
        text: "Custom Audiences" 
      },
      { 
        icon: <ChartLine weight="fill" />, 
        text: "Performance Tracking" 
      },
      { 
        icon: <Gear weight="fill" />, 
        text: "Campaign Optimization" 
      },
      { 
        icon: <ChartBar weight="fill" />, 
        text: "Detailed Analytics" 
      },
      { 
        icon: <Storefront weight="fill" />, 
        text: "E-commerce Integration" 
      }
    ],
    benefits: [
      { text: "Reach Millions of Active Users" },
      { text: "Advanced Demographic Targeting" },
      { text: "Visual-First Advertising" },
      { text: "Retargeting Capabilities" },
      { text: "Cross-Platform Reach" }
    ]
  };

  return <ServicePage service={serviceData} />;
} 