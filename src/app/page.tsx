'use client';

import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import AboutUs from "./landing/AboutUs";
import Services from "./landing/Services";
import Testimonials from './landing/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
      </main>
    </div>
  );
}
