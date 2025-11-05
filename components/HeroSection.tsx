import React from 'react';
import { SearchIcon } from './icons';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-800 pt-24 pb-32 sm:pt-32 sm:pb-40">
      <img
        src="https://picsum.photos/1920/1080?grayscale&blur=2"
        alt="Abstract background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-api-blue/80 mix-blend-multiply" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Welcome to <span className="text-api-orange">API Hub</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
          The National Open API Platform for seamless integration and digital transformation. Discover, connect, and innovate.
        </p>
        <div className="mt-12 max-w-2xl mx-auto">
          <form className="flex items-center w-full bg-white rounded-full shadow-lg overflow-hidden">
            <input
              type="search"
              placeholder="Search for APIs (e.g., Aadhaar, DigiLocker...)"
              className="w-full py-4 pl-6 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-api-orange hover:bg-api-orange-600 text-white font-bold py-4 px-6 sm:px-8 transition-colors duration-300"
            >
              <SearchIcon className="h-6 w-6 sm:mr-2" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
