import React, { useState } from 'react';
import { ApiHubLogo, SearchIcon } from './icons';

interface HeaderProps {
  onSignInClick: () => void;
  onApiDirectoryClick: () => void;
  onAboutClick: () => void;
  onPrivacyClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignInClick, onApiDirectoryClick, onAboutClick, onPrivacyClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated navLinks to use onClick for navigation
  const navLinks = [
    { name: 'Home', action: () => window.location.reload() },
    { name: 'Services', action: onApiDirectoryClick },
    { name: 'Contact', action: () => {
      const contactSection = document.getElementById('contact-section');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }},
    { name: 'Privacy Policy', action: onPrivacyClick || (() => {}) },
    { name: 'Terms and Conditions', action: () => {} },
    { name: 'Pricing', action: () => {
      const pricingSection = document.getElementById('pricing-section');
      pricingSection?.scrollIntoView({ behavior: 'smooth' });
    }},
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <ApiHubLogo className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <button key={link.name} onClick={link.action} className="font-medium text-gray-600 hover:text-api-blue transition-colors">
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-api-blue">
              <SearchIcon className="h-6 w-6" />
            </button>
            <button
              onClick={onSignInClick}
              className="px-6 py-2 border border-api-blue text-api-blue font-semibold rounded-full hover:bg-api-blue hover:text-white transition-all duration-300"
            >
              Sign in / Register
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-api-blue focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <button key={link.name} onClick={link.action} className="font-medium text-gray-600 hover:text-api-blue transition-colors">
                {link.name}
              </button>
            ))}
            <button
              onClick={onSignInClick}
              className="w-4/5 text-center mt-2 px-6 py-2 bg-api-blue text-white font-semibold rounded-full hover:bg-api-blue-800 transition-all duration-300"
            >
              Sign in / Register
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;