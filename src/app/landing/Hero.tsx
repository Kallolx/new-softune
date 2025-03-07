'use client';

import { ArrowRight } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '../components/ui/Button';
import { NumberTicker } from '../components/ui/NumberTicker';

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-5rem)] mt-20 overflow-hidden">
        {/* Video Background with optimized animation */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark Overlay - faster animation */}
          <motion.div 
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          ></motion.div>
        </motion.div>
        
        {/* Title Overlay with line-by-line animation */}
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-start md:justify-start pt-[15%] sm:pt-[18%] md:pt-12 lg:pt-16 xl:pt-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <h1 className="text-[4.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[10rem] font-bold text-white uppercase tracking-[-0.06em] font-sans text-center md:text-left max-w-[95%] md:max-w-[80%] leading-[0.9]">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 90,
                  damping: 20,
                  delay: 0.2
                }}
                style={{ willChange: "transform" }}
              >
                We Build
              </motion.div>
            </div>
            
            <div className="overflow-hidden w-[105%]">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 90,
                  damping: 20,
                  delay: 0.4
                }}
                style={{ willChange: "transform" }}
              >
                Business.
              </motion.div>
            </div>
          </h1>
        </div>
        
        {/* White Rectangle with slide-in from right animation */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto bottom-[20%] sm:bottom-[25%] md:bottom-12 lg:bottom-16 xl:bottom-20 md:right-12 lg:right-16 xl:right-20 bg-white p-6 md:p-8 w-[85%] max-w-[500px] md:max-w-md overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], 
            delay: 0.6
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <p className="text-xl sm:text-2xl md:text-xl text-black font-medium mb-6 tracking-[-0.04em] text-center md:text-left">
            Transforming ideas into digital success stories. We create innovative IT solutions that drive growth and efficiency for businesses of all sizes.
          </p>
          
          <Button 
            href="/contact" 
            icon={<ArrowRight weight="bold" className="w-6 h-6 md:w-5 md:h-5" />}
          >
            GET STARTED
          </Button>
        </motion.div>
      </section>

      {/* Stats Section - Optimized animations */}
      <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-24">
            <motion.div 
              className="stat-item text-center py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.1
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <NumberTicker 
                value={250} 
                className="text-5xl sm:text-6xl md:text-6xl font-bold text-black tracking-[-0.04em]"
                delay={0.2}
              />
              <span className="text-5xl sm:text-6xl md:text-6xl font-bold text-black tracking-[-0.04em]">+</span>
              <p className="text-black/70 text-lg sm:text-xl md:text-lg mt-1 tracking-[-0.04em]">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              className="stat-item text-center py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <NumberTicker 
                value={10} 
                className="text-5xl sm:text-6xl md:text-6xl font-bold text-black tracking-[-0.04em]"
                delay={0.3}
              />
              <span className="text-5xl sm:text-6xl md:text-6xl font-bold text-black tracking-[-0.04em]">+</span>
              <p className="text-black/70 text-lg sm:text-xl md:text-lg mt-1 tracking-[-0.04em]">Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="stat-item text-center py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <NumberTicker 
                value={98} 
                className="text-5xl sm:text-6xl md:text-6xl font-bold text-black tracking-[-0.04em]"
                delay={0.4}
              />
              <span className="text-5xl sm:text-6xl md:text-6xl font-bold text-black tracking-[-0.04em]">%</span>
              <p className="text-black/70 text-lg sm:text-xl md:text-lg mt-1 tracking-[-0.04em]">Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
} 