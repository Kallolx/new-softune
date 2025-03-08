'use client';

import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import AboutUs from "./landing/AboutUs";
import Services from "./landing/Services";
import Testimonials from './landing/Testimonials';
import BusinessShowcase from './landing/BusinessShowcase';
import SocialHosting from "./landing/SocialHosting";
import Contact from "./landing/Contact";
import Footer from "./landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />        
        <Testimonials />
        <BusinessShowcase />
        <SocialHosting />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
