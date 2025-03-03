"use client"

import { subscribeUser } from '@/services/subscriptionService';
import React, { useState } from 'react';

const WaitList = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await subscribeUser({ email });
    
    if (result.success) {
      setStatus({ 
        success: true, 
        message: 'You have been added to the waiting list! We will notify you when we launch.' 
      });
      setEmail('');
    } else {
      setStatus({ 
        success: false, 
        message: 'Failed to join waiting list. Please try again.' 
      });
    }
  };

  return (
    <section className="py-20  bg-gray-800">
      <div className="container mx-auto py-10 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Waiting List</h2>
        <p className="text-gray-600 mb-8">Be the first to know when we launch and get exclusive early access!</p>
        
        <div className="max-w-md mx-auto ">
          <div className="rounded-lg shadow-lg p-8 ">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required
                autoFocus={true}
              />
              <button 
                type="submit"
                className="w-full text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                style={{ backgroundColor: "#50b7e0" }}
              >
                Join Waiting List
              </button>
              
              {status.message && (
                <div 
                  className={`mt-4 p-3 rounded-lg ${
                    status.success 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>✓ Be the first to access our platform</p>
            <p>✓ Get exclusive early-bird benefits</p>
            <p>✓ No spam, unsubscribe anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitList;