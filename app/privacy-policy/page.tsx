import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white/80 px-6 py-16 md:px-20 lg:px-40">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-red-600 hover:underline text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-xs text-white/40 mb-8">Last Updated: June 2026</p>

        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            Welcome to <strong>Go Guest House Lahore</strong>. Your privacy is critically important to us. This privacy policy document outlines the types of personal information that is received and collected by our website and how it is used.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6">1. Information We Collect</h2>
          <p>
            When you use our website to inquire about accommodations or make a booking, we may ask for personal details such as your name, email address, phone number, and check-in/check-out dates.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6">2. How We Use Your Information</h2>
          <p>
            The information we collect is strictly used to process your reservation requests, contact you regarding your stay, answer your inquiries, and improve our hospitality services.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6">3. Data Security and Third-Parties</h2>
          <p>
            We value your trust. We do not sell, trade, or otherwise transfer your personally identifiable information to outside third parties. Your data is kept secure and accessed only by management to fulfill your booking.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6">4. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy or how your data is handled, please reach out to us directly through the contact options available on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;