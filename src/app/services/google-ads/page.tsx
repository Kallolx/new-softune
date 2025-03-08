'use client';

import { motion } from 'framer-motion';
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
      <main className="w-full font-sans pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full bg-black flex items-center py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <GoogleLogo className="w-16 h-16 md:w-20 md:h-20 text-white mb-4 md:mb-6" weight="fill" />
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6">
                Drive Results with Google Ads
              </h1>
              <p className="text-lg md:text-xl text-white mb-6 md:mb-8">
                Maximize your ROI with data-driven Google Ads campaigns that target the right audience at the right time.
              </p>
              <Button 
                href="#contact"
                variant="white"
                icon={<ArrowRight className="w-5 h-5" weight="bold" />}
              >
                Start Your Campaign
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-black py-12 md:py-16 w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <CountUp end={95} suffix="%" duration={2} />
                </div>
                <p className="text-white text-sm md:text-base">Client Retention Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <CountUp end={300} prefix="$" suffix="M+" duration={2} />
                </div>
                <p className="text-white text-sm md:text-base">Ad Spend Managed</p>
              </div>
              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <CountUp end={10} suffix="x" duration={2} />
                </div>
                <p className="text-white text-sm md:text-base">Average ROI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
              <div>
                <GoogleLogo className="w-24 h-24 md:w-32 md:h-32 text-black mb-6 md:mb-8" weight="fill" />
                <p className="text-base md:text-lg text-black mb-6">
                  Our Google Ads team consistently finds low hanging fruit and quick wins within the Google platform. Google Ads is still a channel that can make you money, and that's all we care about.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MagnifyingGlass className="w-5 h-5 md:w-6 md:h-6 text-red-600" weight="fill" />
                    <p className="text-base md:text-lg text-black">High-Intent Search Traffic</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-red-600" weight="fill" />
                    <p className="text-base md:text-lg text-black">Advanced Targeting Options</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChartLineUp className="w-5 h-5 md:w-6 md:h-6 text-red-600" weight="fill" />
                    <p className="text-base md:text-lg text-black">Performance Tracking & Analytics</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gear className="w-5 h-5 md:w-6 md:h-6 text-red-600" weight="fill" />
                    <p className="text-base md:text-lg text-black">Continuous Optimization</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChartBar className="w-5 h-5 md:w-6 md:h-6 text-red-600" weight="fill" />
                    <p className="text-base md:text-lg text-black">Transparent Reporting</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button 
                    href="#contact"
                    icon={<ArrowRight className="w-5 h-5" weight="bold" />}
                  >
                    Request a Consultation
                  </Button>
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">
                  Google is still the search engine that for most companies, shouldn't be ignored.
                </h2>
                <p className="text-lg md:text-xl text-black mb-6 md:mb-8">
                  Within the platform and its ad network you should expect to find:
                </p>
                <div className="space-y-4">
                  {[
                    "Highly Targeted Traffic",
                    "Competitive Cost Per Click",
                    "Market Domination Potential",
                    "Cost-Effective Management",
                    "Predictable Results & ROI"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <p className="text-base md:text-lg text-black">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Services Section */}
        <Services />

        {/* Big Banner */}
        <section className="bg-black py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                Ready to Dominate Google Search?
              </h2>
              <p className="text-lg md:text-xl text-white mb-6 md:mb-8">
                Let's create a Google Ads strategy that drives real results for your business.
              </p>
              <Button 
                href="#contact"
                variant="white"
                icon={<ArrowRight className="w-6 h-6" weight="bold" />}
              >
                Start Your Campaign
              </Button>
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