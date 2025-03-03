// filepath: /go-learning-landing/go-learning-landing/src/components/sections/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero text-white text-center py-20" style={{ backgroundColor:"#50b7e0"}}>
      <h1 className="text-4xl font-bold mb-4">Master GoLang with Spaced Repetition</h1>
      <p className="text-lg mb-8">Unlock your potential and learn GoLang effectively through our innovative training platform.</p>
          <div className=" py-10">
          <h2 className="text-2xl font-bold text-center mb-1">Benefits of Spaced Repetition</h2>
          <ul className="list-disc list-inside text-center max-w-2xl mx-auto">
            <li className="mb-4">Enhances long-term retention of GoLang concepts.</li>
            <li className="mb-4">Optimizes study time by focusing on challenging topics.</li>
            <li className="mb-4">Increases engagement and motivation through structured learning.</li>
            <li className="mb-4">Adapts to individual learning speeds and styles.</li>
            <li className="mb-4">Provides a clear path to mastery of GoLang programming.</li>
          </ul>
        </div>
    </section>
  );
};

export default Hero;