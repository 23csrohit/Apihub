import React from 'react';
import { ApiHubLogo } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ApiHubLogo className="h-8 w-auto text-white" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              API Hub — India's trusted platform for vehicle paperwork, live tracking, and API integrations since 2022. We deliver accurate, real-time data to streamline your logistics and compliance needs.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="font-semibold">Pan-India Coverage</span>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-blue-400">Contact Us</h4>
            <div className="space-y-5">
              <a 
                href="tel:+919508686231" 
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">📞</div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <p className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                    +91 9508686231
                  </p>
                </div>
              </a>
              <a 
                href="mailto:rkyo19085@gmail.com" 
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">✉️</div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-white font-bold text-base group-hover:text-blue-400 transition-colors break-all">
                    rkyo19085@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/40 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} API Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
