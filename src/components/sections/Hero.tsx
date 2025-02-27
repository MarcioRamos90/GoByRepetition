// filepath: /go-learning-landing/go-learning-landing/src/components/sections/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero text-white text-center py-20" style={{ backgroundColor:"#50b7e0"}}>
      <h1 className="text-4xl font-bold mb-4">Master GoLang with Spaced Repetition</h1>
      <p className="text-lg mb-8">Unlock your potential and learn GoLang effectively through our innovative training platform.</p>
      <a href="#pricing" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded" style={{ color:"#50b7e0"}}>
        Get Started
      </a>
    </section>
  );
};

export default Hero;