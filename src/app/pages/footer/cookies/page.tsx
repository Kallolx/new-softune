'use client';

import Navbar from "@/app/landing/Navbar";
import Footer from "@/app/landing/Footer";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white mt-4">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-[-0.06em] font-secondary uppercase mb-6">
                Cookie Policy
              </h1>
              <p className="text-zinc-600 text-lg font-sans">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12 font-sans">
              {/* Introduction */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">About Cookies</h2>
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <p className="text-zinc-600 leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how you interact with our services.
                  </p>
                </div>
              </section>

              {/* Types of Cookies */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Types of Cookies We Use</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-4">Essential Cookies</h3>
                    <ul className="text-zinc-600 space-y-2">
                      <li>• Authentication status</li>
                      <li>• Security features</li>
                      <li>• Basic functionality</li>
                      <li>• Session management</li>
                    </ul>
                  </div>
                  <div className="bg-zinc-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-4">Analytics Cookies</h3>
                    <ul className="text-zinc-600 space-y-2">
                      <li>• Usage patterns</li>
                      <li>• Performance metrics</li>
                      <li>• Feature preferences</li>
                      <li>• Error tracking</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Cookie Purpose */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">How We Use Cookies</h2>
                <div className="bg-zinc-100 p-6 rounded-lg space-y-4">
                  <ul className="text-zinc-600 space-y-3">
                    <li>• Improve website performance</li>
                    <li>• Remember your preferences</li>
                    <li>• Provide personalized content</li>
                    <li>• Analyze user behavior</li>
                    <li>• Enhance security measures</li>
                  </ul>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Third-Party Cookies</h2>
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <p className="text-zinc-600 leading-relaxed">
                    Some of our pages may contain content from third-party services (like social media or analytics providers) which may use their own cookies. We don't control these cookies and recommend checking their respective privacy policies.
                  </p>
                </div>
              </section>

              {/* Managing Cookies */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Managing Your Cookies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-4">Browser Settings</h3>
                    <ul className="text-zinc-600 space-y-2">
                      <li>• Control via preferences</li>
                      <li>• Delete existing cookies</li>
                      <li>• Block future cookies</li>
                      <li>• Set cookie permissions</li>
                    </ul>
                  </div>
                  <div className="bg-zinc-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-4">Our Controls</h3>
                    <ul className="text-zinc-600 space-y-2">
                      <li>• Cookie consent banner</li>
                      <li>• Preference center</li>
                      <li>• Optional features</li>
                      <li>• Analytics opt-out</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Impact of Disabling Cookies */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Impact of Disabling Cookies</h2>
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <p className="text-zinc-600 leading-relaxed">
                    While you can disable cookies through your browser settings, please note that some features of our website may not function properly without essential cookies. Non-essential cookies can be disabled without affecting basic functionality.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Questions About Cookies?</h2>
                <div className="bg-black text-white p-6 rounded-lg">
                  <p className="mb-4">
                    If you have any questions about how we use cookies or would like to know more about our privacy practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p>Email: <span className="text-zinc-400">privacy@softune.dev</span></p>
                    <p className="text-zinc-400">We're committed to being transparent about our use of cookies and protecting your privacy.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 