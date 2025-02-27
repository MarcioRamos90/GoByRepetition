// filepath: /go-learning-landing/go-learning-landing/src/components/sections/Benefits.tsx
import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="benefits-section py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Benefits of Spaced Repetition</h2>
      <ul className="list-disc list-inside max-w-2xl mx-auto">
        <li className="mb-4">Enhances long-term retention of GoLang concepts.</li>
        <li className="mb-4">Optimizes study time by focusing on challenging topics.</li>
        <li className="mb-4">Increases engagement and motivation through structured learning.</li>
        <li className="mb-4">Adapts to individual learning speeds and styles.</li>
        <li className="mb-4">Provides a clear path to mastery of GoLang programming.</li>
      </ul>
    </section>
  );
};

export default Benefits;