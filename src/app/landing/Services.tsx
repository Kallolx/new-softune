'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'creative' | 'marketing'>('creative');
  const [swiper, setSwiper] = useState<any>(null);

  // Reset swiper position when tab changes
  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0);
    }
  }, [activeTab, swiper]);

  const marketingServices = [
    {
      title: 'Facebook Marketing',
      image: '/images/services/social-media-marketing.jpg'
    },
    {
      title: 'Instagram Marketing',
      image: '/images/services/seo-optimization.jpg'
    },
    {
      title: 'TikTok Marketing',
      image: '/images/services/content-marketing.jpg'
    },
    {
      title: 'Email Marketing',
      image: '/images/services/email-campaigns.jpg'
    },
    {
      title: 'SEO Optimization',
      image: '/images/services/ppc-advertising.jpg'
    }
  ];

  const creativeServices = [
    {
      title: 'Graphic Design',
      image: '/images/services/graphic-design.jpg'
    },
    {
      title: 'Website Design',
      image: '/images/services/ui-ux-design.jpg'
    },
    {
      title: 'Brand Identity',
      image: '/images/services/brand-identity.jpg'
    },
    {
      title: 'Motion Graphics',
      image: '/images/services/motion-graphics.jpg'
    },
    {
      title: 'Video Production',
      image: '/images/services/video-production.jpg'
    }
  ];

  const activeServices = activeTab === 'marketing' ? marketingServices : creativeServices;

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      {/* Tab Selection */}
      <div className="container mx-auto px-4 md:px-6 mb-10 md:mb-16">
        <div className="flex justify-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em]">
          <button 
            className={`mr-3 md:mr-4 cursor-pointer transition-colors duration-200 ${activeTab === 'creative' ? 'text-black' : 'text-gray-300 hover:text-black'}`}
            onClick={() => setActiveTab('creative')}
          >
            Creative
          </button>
          <span className="text-gray-300">/</span>
          <button 
            className={`ml-3 md:ml-4 cursor-pointer transition-colors duration-200 ${activeTab === 'marketing' ? 'text-black' : 'text-gray-300 hover:text-black'}`}
            onClick={() => setActiveTab('marketing')}
          >
            Marketing
          </button>
        </div>
      </div>

      {/* Full Width Swiper Container */}
      <div className="w-full relative overflow-hidden">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={0}
          slidesPerView={'auto'}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.8,
            momentumVelocityRatio: 0.8
          }}
          grabCursor={true}
          onSwiper={setSwiper}
          className="w-screen"
          style={{
            marginLeft: 'calc(-50vw + 50%)',
          }}
        >
          {activeServices.map((service, index) => (
            <SwiperSlide 
              key={index} 
              style={{ 
                width: 'auto',
                borderRight: index !== activeServices.length - 1 ? '1px solid #e5e7eb' : 'none'
              }}
            >
              <div className="w-[250px] sm:w-[280px] md:w-[350px] h-[350px] sm:h-[400px] md:h-[500px] relative overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out filter group-hover:brightness-105 group-hover:contrast-105"
                  priority={index < 3} // Load first 3 images with priority
                />
                <div className="absolute inset-0 border-0 border-transparent transition-all duration-500 ease-in-out group-hover:border-4 group-hover:border-white/20"></div>
                
                {/* Title bar with hover animation */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex justify-between items-center bg-transparent overflow-hidden">
                  {/* Slide-up background */}
                  <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>
                  
                  {/* Title and arrow */}
                  <h3 className="relative z-10 text-base sm:text-lg md:text-xl font-medium text-white transition-colors duration-500 group-hover:text-black">{service.title}</h3>
                  <ArrowUpRight 
                    weight="bold" 
                    className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white transition-all duration-500 ease-in-out group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1" 
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 