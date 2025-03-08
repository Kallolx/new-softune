export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-[-0.06em] font-secondary uppercase mb-6">
              Privacy Policy
            </h1>
            <p className="text-zinc-600 text-lg font-dmSans">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 font-dmSans">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black font-secondary uppercase">Introduction</h2>
              <p className="text-zinc-600 leading-relaxed">
                At Softune, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black font-secondary uppercase">Information We Collect</h2>
              <div className="bg-zinc-100 p-6 rounded-lg space-y-4">
                <h3 className="text-xl font-bold text-black">Personal Information</h3>
                <ul className="list-disc list-inside text-zinc-600 space-y-2">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Billing and payment details</li>
                  <li>Account credentials</li>
                  <li>Usage data and preferences</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black font-secondary uppercase">How We Use Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-4">Service Provision</h3>
                  <ul className="text-zinc-600 space-y-2">
                    <li>• Provide and maintain our services</li>
                    <li>• Process your transactions</li>
                    <li>• Manage your account</li>
                  </ul>
                </div>
                <div className="bg-zinc-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-4">Communication</h3>
                  <ul className="text-zinc-600 space-y-2">
                    <li>• Send service updates</li>
                    <li>• Respond to inquiries</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black font-secondary uppercase">Data Security</h2>
              <p className="text-zinc-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black font-secondary uppercase">Your Rights</h2>
              <div className="bg-zinc-100 p-6 rounded-lg">
                <ul className="text-zinc-600 space-y-3">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate data</li>
                  <li>• Request deletion of your data</li>
                  <li>• Object to data processing</li>
                  <li>• Data portability</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black font-secondary uppercase">Contact Us</h2>
              <div className="bg-black text-white p-6 rounded-lg">
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <p>Email: privacy@softune.dev</p>
                  <p>Address: Your Company Address</p>
                  <p>Phone: Your Phone Number</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 