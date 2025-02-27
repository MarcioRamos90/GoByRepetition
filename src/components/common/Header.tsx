// filepath: /go-learning-landing/go-learning-landing/src/components/common/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">GoLang Learning</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#benefits" className="hover:underline">Benefits</a></li>
          <li><a href="#pricing" className="hover:underline">Subscribe</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;