import React from 'react';
import { ApiHubLogo } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ApiHubLogo className="h-8 w-auto text-white" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm">
              API Hub — India's trusted platform for vehicle paperwork, live tracking, and API integrations since 2022. We deliver accurate, real-time data to streamline your logistics and compliance needs.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="font-semibold text-sm">Pan-India Coverage</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Explore APIs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">SOP for API Access</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Join Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Dashboard</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Utilities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">API Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Data Standards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Developers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Digilocker</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Information Videos</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/40 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} API Hub. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Powered By Digital India Corporation (DIC) • National e-Governance Division (NeGD) • Ministry of Electronics & IT (MeitY) • Government of India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
