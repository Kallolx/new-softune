'use client';

import { 
  TiktokLogo,
  VideoCamera,
  Users,
  ChartLine,

  ChartBar,
  Target,
  Fire
} from '@phosphor-icons/react';
import ServicePage from '@/app/components/templates/ServicePage';

export default function TiktokAdsPage() {
  const serviceData = {
    name: 'TikTok Ads',
    logo: <TiktokLogo weight="fill" />,
    heroImage: '/images/services/tiktok-ads.jpg',
    description: 'Reach Gen Z and millennials with engaging short-form video ads. Drive viral growth and brand awareness with creative, native-feeling campaigns.',
    stats: {
      retention: 94,
      adSpend: 100,
      roi: 12
    },
    features: [
      { 
        icon: <VideoCamera weight="fill" />, 
        text: "Native Video Ads" 
      },
      { 
        icon: <Users weight="fill" />, 
        text: "Gen Z Targeting" 
      },
      { 
        icon: <ChartLine weight="fill" />, 
        text: "Viral Potential" 
      },
      { 
        icon: <Fire weight="fill" />, 
        text: "Trend Optimization" 
      },
      { 
        icon: <ChartBar weight="fill" />, 
        text: "Performance Analytics" 
      },
      { 
        icon: <Fire weight="fill" />, 
        text: "Trending Content" 
      }
    ],
    benefits: [
      { text: "Access to Young Demographics" },
      { text: "High Engagement Rates" },
      { text: "Creative Ad Formats" },
      { text: "Viral Marketing Potential" },
      { text: "Brand Challenge Opportunities" }
    ]
  };

  return <ServicePage service={serviceData} />;
} 