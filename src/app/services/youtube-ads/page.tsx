'use client';

import { 
  YoutubeLogo,
  VideoCamera,
  Clock,
  Users,
  Target,
  ChartBar,
  PlayCircle
} from '@phosphor-icons/react';
import ServicePage from '@/app/components/templates/ServicePage';

export default function YouTubeAdsPage() {
  const serviceData = {
    name: 'YouTube Ads',
    logo: <YoutubeLogo weight="fill" />,
    heroImage: '/images/services/youtube-ads.jpg',
    description: 'Reach your audience with compelling video content. Drive brand awareness and conversions with the worlds largest video platform.',
    stats: {
      retention: 89,
      adSpend: 200,
      roi: 7
    },
    features: [
      { 
        icon: <VideoCamera weight="fill" />, 
        text: "Video Advertising" 
      },
      { 
        icon: <Clock weight="fill" />, 
        text: "In-Stream Ads" 
      },
      { 
        icon: <Users weight="fill" />, 
        text: "Audience Targeting" 
      },
      { 
        icon: <Target weight="fill" />, 
        text: "Discovery Ads" 
      },
      { 
        icon: <ChartBar weight="fill" />, 
        text: "Analytics Dashboard" 
      },
      { 
        icon: <PlayCircle weight="fill" />, 
        text: "Bumper Ads" 
      }
    ],
    benefits: [
      { text: "Massive Reach Potential" },
      { text: "Long-Form Content" },
      { text: "Multiple Ad Formats" },
      { text: "Search Integration" },
      { text: "Brand Safety Controls" }
    ]
  };

  return <ServicePage service={serviceData} />;
} 