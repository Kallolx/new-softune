import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const businesses = [
  {
    id: 1,
    title: "Digital Experience Creation",
    image: "/images/businesses/business-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Excellence",
    image: "/images/businesses/business-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "App Development",
    image: "/images/businesses/business-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Brand Development",
    image: "/images/businesses/business-4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Mobile Innovation",
    image: "/images/businesses/business-5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Cloud Solutions",
    image: "/images/businesses/business-6.jpg",
    link: "#",
  },
];

const brands = [
  { id: 1, name: "SKG", logo: "/images/brands/brand-1.svg" },
  { id: 2, name: "HLG", logo: "/images/brands/brand-2.svg" },
  { id: 3, name: "Gbonnex", logo: "/images/brands/brand-3.svg" },
  { id: 4, name: "GLD", logo: "/images/brands/brand-4.svg" },
  { id: 5, name: "Taylor Gang", logo: "/images/brands/brand-5.svg" },
  { id: 6, name: "SEP", logo: "/images/brands/brand-6.svg" },
  { id: 7, name: "Aurate", logo: "/images/brands/brand-7.svg" },
  { id: 8, name: "Hemper", logo: "/images/brands/brand-8.svg" },
  { id: 9, name: "HomeServe", logo: "/images/brands/brand-9.svg" },
  { id: 10, name: "James Oro", logo: "/images/brands/brand-10.svg" },
];

const BusinessCard = ({ business }: { business: (typeof businesses)[0] }) => {
  return (
    <div className="group h-full border-r border-gray-200 last:border-r-0">
      {/* Image Container with Hover Effect */}
      <div className="relative h-[250px] sm:h-[350px] md:h-[500px] overflow-hidden bg-white">
        {/* Image with scale effect */}
        <Image
          src={business.image}
          alt={business.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 500px"
          priority
        />

        {/* Dark overlay that appears on hover */}
        <motion.div 
          className="absolute inset-0 bg-black/0"
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Content Overlay at Bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-20 pb-6 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl text-white font-medium">{business.title}</h3>
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ArrowUpRight weight="bold" className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const BrandLogo = ({ brand, index }: { brand: (typeof brands)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="flex items-center justify-center p-4 md:p-8 transition-all duration-500"
    >
      <Image
        src={brand.logo}
        alt={brand.name}
        width={160}
        height={80}
        className="w-auto h-8 md:h-12 object-contain brightness-0 invert hover:brightness-100 hover:invert-0 hover:filter-none transition-all duration-500 ease-in-out will-change-[filter]"
      />
    </motion.div>
  );
};

export default function BusinessShowcase() {
  return (
    <>
      <section className="py-12 md:py-24 bg-white">
        {/* Section Header */}
        <div className="container mx-auto px-4 md:px-6 mb-10 md:mb-16">
          <div className="flex text-black justify-center text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.06em]">
            <h2>Businesses We've Helped Build</h2>
          </div>
        </div>

        {/* Business Showcase Layout */}
        <div className="w-full relative">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={0}
            slidesPerView={"auto"}
            speed={1000}
            freeMode={{
              enabled: true,
              sticky: false,
              minimumVelocity: 0.2,
              momentum: true,
              momentumRatio: 0.4,
              momentumVelocityRatio: 0.4,
            }}
            grabCursor={true}
            className="!pt-8 !pb-16"
          >
            {businesses.map((business) => (
              <SwiperSlide
                key={business.id}
                style={{ width: "300px" }}
                className="transition-all duration-500 md:!w-[400px]"
              >
                <BusinessCard business={business} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 w-full max-w-6xl">
              {brands.map((brand, index) => (
                <BrandLogo key={brand.id} brand={brand} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
