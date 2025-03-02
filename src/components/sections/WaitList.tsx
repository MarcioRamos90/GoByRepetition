"use client"

import { subscribeUser } from '@/services/subscriptionService';
import React, { useState } from 'react';

const Pricing = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => (e: React.FormEvent) => {
    e.preventDefault();
    subscribeUser({ email})
  };

  const Subscribe = ({ price, description }: {
    price: string;
    description: string;
  }) => (
    <div className="pricing-card border rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow max-w-4x3 mx-auto">
      <p className="text-2xl font-bold mb-4">{price}</p>
      <p className="mb-4">{description}</p>
      <form onSubmit={handleSubmit()} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email here"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          autoFocus={true}
        />
        <button 
          type="submit"
          className="w-full  text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
         style={{ backgroundColor:"#50b7e0"}}>
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
            price="Enter on the list"
            description="Get free early access to our product to 30 days."
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;