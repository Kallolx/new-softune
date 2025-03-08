'use client';

import Navbar from "@/app/landing/Navbar";
import Footer from "@/app/landing/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white mt-4">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-[-0.06em] font-secondary uppercase mb-6">
                Terms & Conditions
              </h1>
              <p className="text-zinc-600 text-lg font-sans">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12 font-sans">
              {/* Agreement */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Agreement to Terms</h2>
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <p className="text-zinc-600 leading-relaxed">
                    By accessing or using Softune's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                  </p>
                </div>
              </section>

              {/* Services */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-4">Web Hosting</h3>
                    <ul className="text-zinc-600 space-y-2">
                      <li>• Reliable cloud infrastructure</li>
                      <li>• 99.9% uptime guarantee</li>
                      <li>• Daily backups</li>
                      <li>• SSL certificates</li>
                    </ul>
                  </div>
                  <div className="bg-zinc-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-4">Support</h3>
                    <ul className="text-zinc-600 space-y-2">
                      <li>• 24/7 technical support</li>
                      <li>• Resource monitoring</li>
                      <li>• Security updates</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* User Responsibilities */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">User Responsibilities</h2>
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <ul className="text-zinc-600 space-y-3">
                    <li>• Maintain account security</li>
                    <li>• Comply with acceptable use policies</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Keep contact information updated</li>
                    <li>• Report any security concerns</li>
                  </ul>
                </div>
              </section>

              {/* Payment Terms */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Payment Terms</h2>
                <div className="bg-zinc-100 p-6 rounded-lg space-y-4">
                  <p className="text-zinc-600 leading-relaxed">
                    Services are billed on a subscription basis. You agree to pay all fees associated with your chosen plan. Fees are non-refundable except as required by law.
                  </p>
                  <ul className="text-zinc-600 space-y-2">
                    <li>• Automatic renewal unless cancelled</li>
                    <li>• Pro-rated refunds for downgrades</li>
                    <li>• Late payments may result in service suspension</li>
                  </ul>
                </div>
              </section>

              {/* Termination */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Account Termination</h2>
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <p className="text-zinc-600 leading-relaxed">
                    We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms and Conditions. Upon termination, your right to use the services will immediately cease.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Limitation of Liability</h2>
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <p className="text-zinc-600 leading-relaxed">
                    Softune shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black font-secondary uppercase">Changes to Terms</h2>
                <div className="bg-black text-white p-6 rounded-lg">
                  <p className="mb-4">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services.
                  </p>
                  <p>
                    For questions about these terms, please contact us at <span className="text-zinc-400">legal@softune.dev</span>
                  </p>
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