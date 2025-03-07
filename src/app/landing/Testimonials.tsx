import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Globe } from '@phosphor-icons/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';

const testimonials = [
  {
    id: 1,
    name: 'Patrick Newarda',
    position: 'UX Manager at Superhabbits',
    image: '/images/testimonials/testimonial-1.jpg',
    quote: 'SofTune has been a game-changer for our product development process. Their attention to detail and creative solutions have consistently impressed our entire team.',
    additionalInfo: 'Collaborated 12+ projects',
    link: 'https://superhabbits.com'
  },
  {
    id: 2,
    name: 'Rob West',
    position: 'CEO of Kingdom Advisors',
    image: '/images/testimonials/testimonial-2.jpg',
    quote: 'DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!',
    additionalInfo: '3 years of partnership',
    link: 'https://kingdomadvisors.com'
  },
  {
    id: 3,
    name: 'Pam Patel',
    position: 'Product Designer at Lightdash',
    image: '/images/testimonials/testimonial-3.jpg',
    quote: 'Working with DesignMe has been a game-changer for our product development process. Their attention to detail and creative solutions have consistently impressed our entire team.',
    additionalInfo: 'Complete brand redesign',
    link: 'https://lightdash.com'
  },
  {
    id: 4,
    name: 'Dan Thompson',
    position: 'CEO of RightFlow',
    image: '/images/testimonials/testimonial-4.jpg',
    quote: 'The level of professionalism and creativity that DesignMe brings to each project is outstanding. They have become an invaluable partner in our design journey.',
    additionalInfo: 'Enterprise solution partner',
    link: 'https://rightflow.com'
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="relative h-full group bg-white overflow-hidden">
    <div className="relative h-full p-6 md:p-8 flex flex-col">
      {/* Profile Image */}
      <div className="mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden relative">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Quote */}
      <blockquote className="flex-grow mb-6">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          "{testimonial.quote}"
        </p>
      </blockquote>

      {/* Name and Position */}
      <div className="mt-auto">
        <h4 className="font-medium text-black text-lg mb-1">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </div>

    {/* Modern Slide-up Overlay */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-black transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <p className="text-white/80 text-sm font-medium uppercase tracking-wider">{testimonial.additionalInfo}</p>
          </div>
        </div>
        <Link 
          href={testimonial.link}
          target="_blank"
          className="flex items-center gap-2 text-white group/link"
        >
          <Globe size={24} />
        </Link>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-24 bg-white">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 mb-10 md:mb-16">
        <div className="flex text-black justify-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em]">
          <h2>What Clients Say</h2>
        </div>
      </div>

      {/* Testimonials Layout */}
      <div className="w-full relative overflow-hidden">
        {isMobile ? (
          // Mobile Swiper Layout
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
            className="w-screen"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                style={{ width: '85vw', height: '350px' }}
                className="border-r border-gray-200"
              >
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Desktop Grid Layout
          <div className="flex flex-wrap">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="w-full md:w-1/2 lg:w-1/4 h-[400px] border-b md:border-r border-gray-200 last:border-r-0"
                style={{
                  borderRight: index === testimonials.length - 1 ? 'none' : undefined
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 