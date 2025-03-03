// filepath: /go-learning-landing/go-learning-landing/src/components/common/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold p-7">GoLang Learning</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#wishlist" className="hover:underline">Subscribe</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;