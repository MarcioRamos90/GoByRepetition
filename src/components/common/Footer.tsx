// filepath: /go-learning-landing/go-learning-landing/src/components/common/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} GoLang Learning. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;