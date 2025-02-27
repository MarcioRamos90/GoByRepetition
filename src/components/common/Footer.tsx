// filepath: /go-learning-landing/go-learning-landing/src/components/common/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} GoLang Learning. All rights reserved.
      </p>
      <div className="ml-4">
        <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
        <span className="mx-2">|</span>
        <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;