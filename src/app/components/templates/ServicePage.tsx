'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import Button from '@/app/components/ui/Button';
import Navbar from '@/app/landing/Navbar';
import Contact from '@/app/landing/Contact';
import Footer from '@/app/landing/Footer';
import CountUp from 'react-countup';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface Benefit {
  text: string;
}

interface ServicePageProps {
  service: {
    name: string;
    logo: React.ReactNode;
    heroImage: string;
    description: string;
    features: Feature[];
    benefits: Benefit[];
    stats: {
      retention: number;
      adSpend: number;
      roi: number;
    };
  };
}

export default function ServicePage({ service }: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main className="w-full font-sans">
        {/* Hero Section */}
        <section className="relative min-h-[600px] w-full flex items-center bg-black">
          <div className="absolute inset-0">
            <Image
              src={service.heroImage}
              alt={`${service.name} Marketing`}
              fill
              className="object-cover opacity-50"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          <div className="container relative mx-auto px-4 text-center py-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-6 mb-8 justify-center">
                <div className="w-16 h-16 text-[#ff4d00]">
                  {service.logo}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Elevate Your Brand with {service.name}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                {service.description}
              </p>
              <Button 
                href="#contact"
                variant="white"
                icon={<ArrowRight className="w-5 h-5" weight="bold" />}
              >
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-black py-10 md:py-16 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#ff4d00]">
                  <CountUp end={service.stats.retention} suffix="%" duration={2} />
                </div>
                <p className="text-base sm:text-lg text-white">Client Retention Rate</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#ff4d00]">
                  <CountUp end={service.stats.adSpend} prefix="$" suffix="M+" duration={2} />
                </div>
                <p className="text-base sm:text-lg text-white">Ad Spend Managed</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#ff4d00]">
                  <CountUp end={service.stats.roi} suffix="x" duration={2} />
                </div>
                <p className="text-base sm:text-lg text-white">Average ROI</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
                  Why Choose Our {service.name} Service?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {service.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex flex-col items-center gap-3 p-4 bg-black/5 rounded-lg group-hover:bg-[#ff4d00]/10 transition-colors">
                        <div className="text-[#ff4d00] group-hover:scale-110 transition-transform text-4xl">
                          {feature.icon}
                        </div>
                        <p className="text-base font-medium text-black">{feature.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
                  Platform Benefits
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-black/5 rounded-lg"
                    >
                      <CheckCircle className="w-6 h-6 text-[#ff4d00] flex-shrink-0 mt-0.5" weight="fill" />
                      <p className="text-base text-black text-left">{benefit.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[#ff4d00]/20" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                  Ready to Transform Your {service.name} Strategy?
                </h2>
                <p className="text-base sm:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                  Join the ranks of successful businesses that have revolutionized their {service.name} presence with our expert team.
                </p>
                <Button 
                  href="#contact"
                  variant="white"
                  icon={<ArrowRight className="w-5 h-5" weight="bold" />}
                >
                  Schedule a Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
} 