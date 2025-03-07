'use client';

import Image from 'next/image';
import Button from '../components/ui/Button';
import { ArrowRight } from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content - Left-aligned on both mobile and desktop */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 90,
              damping: 20,
              delay: 0.1
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="overflow-hidden">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-black tracking-[-0.04em] mb-6"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 90,
                  damping: 20,
                  delay: 0.2
                }}
                style={{ willChange: "transform" }}
              >
                Welcome to SofTune
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl text-black/80 mb-8 tracking-[-0.02em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.4
              }}
              style={{ willChange: "opacity" }}
            >
              We are a leading IT agency specializing in innovative digital solutions that transform businesses. 
              Our team of experts combines technical excellence with creative thinking to deliver exceptional 
              results for our clients across various industries. With over a decade of experience, we've helped hundreds of businesses achieve their digital goals 
              through custom software development, web applications, and strategic IT consulting.
            </motion.p>
            
            <motion.div 
              className="max-w-xs mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.6
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <Button 
                href="/about" 
                icon={<ArrowRight weight="bold" className="w-5 h-5" />}
              >
                LEARN MORE
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 90,
              damping: 20,
              delay: 0.3
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/about-image.jpg"
              alt="SofTune Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 