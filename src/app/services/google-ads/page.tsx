'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, 
  MagnifyingGlass, 
  Target, 
  ChartLineUp, 
  Gear, 
  ChartBar,
  GoogleLogo
} from '@phosphor-icons/react';
import Button from '@/app/components/ui/Button';
import Navbar from '@/app/landing/Navbar';
import Testimonials from '@/app/landing/Testimonials';
import Services from '@/app/landing/Services';
import Contact from '@/app/landing/Contact';
import Footer from '@/app/landing/Footer';
import CountUp from 'react-countup';

export default function GoogleAdsPage() {
  return (
    <>
      <Navbar />
      <main className="w-full font-sans">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full bg-black">
          <div className="absolute inset-0">
            <Image
              src="/images/services/google-ads.jpg"
              alt="Google Ads Marketing"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="container relative mx-auto px-4 pt-40 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <GoogleLogo weight="fill" className="w-24 h-24 text-white mx-auto mb-8" />
              <h1 className="text-6xl tracking-[-0.06em] md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8">
                Drive Results with Google Ads
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
                Maximize your ROI with data-driven Google Ads campaigns that target the right audience at the right time. Our expert team delivers measurable results.
              </p>
              <Button 
                href="#contact"
                variant="white"
                icon={<ArrowRight className="w-6 h-6" weight="bold" />}
              >
                Start Your Campaign
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-black mb-4">
                  <CountUp end={95} suffix="%" duration={2} />
                </div>
                <p className="text-xl text-black/60">Client Retention Rate</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-black mb-4">
                  <CountUp end={300} prefix="$" suffix="M+" duration={2} />
                </div>
                <p className="text-xl text-black/60">Ad Spend Managed</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-black mb-4">
                  <CountUp end={10} suffix="x" duration={2} />
                </div>
                <p className="text-xl text-black/60">Average ROI</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Why Choose Our Google Ads Service?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto tracking-[-0.06em]">
                Our Google Ads team consistently finds low hanging fruit and quick wins within the Google platform. Google Ads is still a channel that can make you money, and that's all we care about.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { icon: <MagnifyingGlass weight="fill" />, text: "High-Intent Search Traffic" },
                { icon: <Target weight="fill" />, text: "Advanced Targeting Options" },
                { icon: <ChartLineUp weight="fill" />, text: "Performance Tracking" },
                { icon: <Gear weight="fill" />, text: "Continuous Optimization" },
                { icon: <ChartBar weight="fill" />, text: "Transparent Reporting" },
                { icon: <GoogleLogo weight="fill" />, text: "Google Ads Expertise" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-6">
                    <div className="w-full h-full text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.text}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-5xl tracking-[-0.06em] md:text-6xl font-bold text-black text-center mb-16">
                The Search Engine That Can't Be Ignored
              </h2>
              <div className="space-y-8">
                {[
                  "Highly Targeted Traffic",
                  "Competitive Cost Per Click",
                  "Market Domination Potential",
                  "Cost-Effective Management",
                  "Predictable Results & ROI"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-6 p-8 bg-black/5 rounded-2xl"
                  >
                    <div className="w-3 h-3 bg-black rounded-full" />
                    <p className="text-2xl text-black font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-32 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
                  Ready to Dominate Google Search?
                </h2>
                <p className="text-2xl text-white/80 mb-12">
                  Let's create a Google Ads strategy that drives real results for your business.
                </p>
                <Button 
                  href="#contact"
                  variant="white"
                  icon={<ArrowRight className="w-6 h-6" weight="bold" />}
                >
                  Start Your Campaign
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