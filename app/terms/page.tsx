import React from 'react';
import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white/80 px-6 py-16 md:px-20 lg:px-40">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-red-600 hover:underline text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-xs text-white/40 mb-8">Last Updated: June 2026</p>

        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            By accessing or making a booking through the <strong>Go Guest House Lahore</strong> website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6">1. Booking and Check-In Policy</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Guests must provide valid, government-issued identification (CNIC for Pakistani citizens, Passport for international visitors) upon check-in.</li>
            <li>Rooms are subject to availability, and management reserves the right to decline bookings at its discretion.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-6">2. Guest Conduct</h2>
          <p>
            We maintain a peaceful and family-friendly environment. Guests are expected to conduct themselves in a respectable manner and avoid causing disturbances to other residents. Any damage caused to property during your stay will be charged directly to the responsible guest.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6">3. Cancellation and Refunds</h2>
          <p>
            Cancellation policies vary depending on the package or room rate selected during reservation. Please review reservation confirmations carefully or contact our desk regarding cancellation timelines or fee structures.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6">4. Modifications to Service</h2>
          <p>
            Go Guest House reserves the right to modify room pricing, amenities descriptions, and these Terms of Service at any given time without prior notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;