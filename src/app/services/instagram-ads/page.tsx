'use client';

import { 
  InstagramLogo,
  Image,
  VideoCamera,
  Users,
  ShoppingBag,
  ChartBar,
  Heart
} from '@phosphor-icons/react';
import ServicePage from '@/app/components/templates/ServicePage';

export default function InstagramAdsPage() {
  const serviceData = {
    name: 'Instagram Ads',
    logo: <InstagramLogo weight="fill" />,
    heroImage: '/images/services/instagram-ads.jpg',
    description: 'Connect with your audience through visually stunning ads. Drive engagement and sales with Instagrams powerful visual commerce platform.',
    stats: {
      retention: 91,
      adSpend: 120,
      roi: 9
    },
    features: [
      { 
        icon: <Image weight="fill" />, 
        text: "Visual Storytelling" 
      },
      { 
        icon: <VideoCamera weight="fill" />, 
        text: "Reels Advertising" 
      },
      { 
        icon: <Users weight="fill" />, 
        text: "Influencer Integration" 
      },
      { 
        icon: <ShoppingBag weight="fill" />, 
        text: "Shopping Tags" 
      },
      { 
        icon: <ChartBar weight="fill" />, 
        text: "Performance Insights" 
      },
      { 
        icon: <Heart weight="fill" />, 
        text: "Engagement Focus" 
      }
    ],
    benefits: [
      { text: "Visual-First Platform" },
      { text: "Shopping Integration" },
      { text: "Story & Reels Formats" },
      { text: "Influencer Marketing" },
      { text: "High Brand Engagement" }
    ]
  };

  return <ServicePage service={serviceData} />;
} 