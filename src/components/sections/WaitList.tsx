"use client"

import React, { useState } from 'react';

const Pricing = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (planType: string) => (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email subscription service
    console.log(`Subscription request for ${planType} plan with email: ${email}`);
    setEmail('');
  };

  const Subscribe = ({ title, price, description }: {
    title: string;
    price: string;
    description: string;
  }) => (
    <div className="pricing-card border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <p className="mb-4">{description}</p>
      <form onSubmit={handleSubmit(email)} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email here"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );

  return (
    <section className="pricing-section py-20">
      <div className="container mx-auto text-center px-1">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <Subscribe
            title="Awaiting List"
            price="Enter on the list"
            description="Get free early access to our product to 30 days."
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;