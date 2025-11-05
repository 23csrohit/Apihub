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

  // Navigation links matching APISetu-like header
  const navLinks = [
    { name: 'Explore APIs', action: onApiDirectoryClick },
    { 
      name: 'Resources', 
      action: () => { 
        const el = document.getElementById('resources-section'); 
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          onApiDirectoryClick();
        }
      } 
    },
    { 
      name: 'Category', 
      action: () => { 
        const el = document.getElementById('top-apis-section'); 
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          onApiDirectoryClick();
        }
      } 
    },
    { name: 'Blog', action: () => { onApiDirectoryClick(); } },
    { name: 'Join Us', action: onSignInClick },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <ApiHubLogo className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={link.action} 
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors" aria-label="search">
              <SearchIcon className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>
            <button onClick={onSignInClick} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition">Log In</button>
            <button onClick={onSignInClick} className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm hover:shadow-md">Create Account</button>
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
          <nav className="flex flex-col items-center space-y-3 px-4">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => { setIsMenuOpen(false); link.action(); }} className="w-full text-left font-medium text-gray-700 py-2 px-3 rounded hover:bg-gray-50">
                {link.name}
              </button>
            ))}
            <div className="w-full mt-2 flex gap-3">
              <button onClick={() => { setIsMenuOpen(false); onSignInClick(); }} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">Log In</button>
              <button onClick={() => { setIsMenuOpen(false); onSignInClick(); }} className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg font-medium">Create Account</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;