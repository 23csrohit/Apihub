import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface HomePageProps {
  navigateToLogin: () => void;
  navigateToApiDirectory: () => void;
  navigateToAbout: () => void;
  navigateToPrivacy?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateToLogin, navigateToApiDirectory, navigateToAbout, navigateToPrivacy }) => {
  return (
    <>
      <Header 
        onSignInClick={navigateToLogin} 
        onApiDirectoryClick={navigateToApiDirectory} 
        onAboutClick={navigateToAbout}
        onPrivacyClick={navigateToPrivacy}
      />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
          <div className="container mx-auto max-w-7xl text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-2">
              Search Vehicle Data in Seconds with Registration Number
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto px-4 leading-relaxed">
              Whether you're an insurer, logistics provider, broker, automaker, finance firm or fleet owner — our free API suite delivers instant FASTAG tracking, VAHAN RC lookups, SARATHI driver validation and E-Challan checks, plus automated VAHAN document reminders, all in one unified platform.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 max-w-6xl mx-auto px-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/20 hover:bg-white/25 hover:scale-105 hover:shadow-xl transition-all duration-300 transform cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 transform hover:scale-110 transition-transform">🚗</div>
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">FASTAG</h3>
                <p className="text-blue-100 text-xs sm:text-sm font-semibold">Free API!</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/20 hover:bg-white/25 hover:scale-105 hover:shadow-xl transition-all duration-300 transform cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 transform hover:scale-110 transition-transform">📋</div>
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">VAHAN</h3>
                <p className="text-blue-100 text-xs sm:text-sm font-semibold">Free API!</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/20 hover:bg-white/25 hover:scale-105 hover:shadow-xl transition-all duration-300 transform cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 transform hover:scale-110 transition-transform">👤</div>
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">SARATHI</h3>
                <p className="text-blue-100 text-xs sm:text-sm font-semibold">Free API!</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/20 hover:bg-white/25 hover:scale-105 hover:shadow-xl transition-all duration-300 transform cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 transform hover:scale-110 transition-transform">📝</div>
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">E-CHALLAN</h3>
                <p className="text-blue-100 text-xs sm:text-sm font-semibold">Free API!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Offer */}
        <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-8 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🎉</span>
              <p className="text-2xl md:text-3xl font-bold text-white">
                Sign up & claim 10 FREE API hits (₹100 value)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={navigateToLogin}
                className="px-8 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg"
              >
                Register
              </button>
              <button 
                onClick={navigateToLogin}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 transition-all"
              >
                Sign In
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform border border-blue-100">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 sm:mb-3">4+</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Years Of Experience</p>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform border border-indigo-100">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent mb-2 sm:mb-3">100,000+</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Vehicles Tracked Daily</p>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform border border-purple-100">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2 sm:mb-3">24/7</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Expert Support</p>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform border border-green-100">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2 sm:mb-3">99%</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Cutting-Edge APIs */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                Our Cutting-Edge APIs
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
                Fully managed, high-performance endpoints for tracking, verification, and compliance—100% free to use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* FASTAG Tracking */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-blue-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl">🚗</span>
                  <div>
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs sm:text-sm font-bold">Free API</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-2">FASTag Tracking</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Track goods & commercial vehicles' toll-plaza passes over the last 3 days with timestamped precision.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Real-time plaza pass logs
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> 3-day historical route replay
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Filter by vehicle-ID, date, or plaza code
                  </li>
                </ul>
                <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Explore API Docs →
                </button>
              </div>

              {/* VAHAN Data Lookup */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-blue-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl">📋</span>
                  <div>
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs sm:text-sm font-bold">Free API</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-2">Vahan Data Lookup</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Retrieve complete vehicle profiles using registration, chassis or engine numbers in one API call.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Make/model & registration details
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Owner history & transfer records
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Full vehicle specs (fuel, color, etc.)
                  </li>
                </ul>
                <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Explore API Docs →
                </button>
              </div>

              {/* SARATHI Driver Info */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-blue-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl">👤</span>
                  <div>
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs sm:text-sm font-bold">Free API</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-2">Sarathi Driver Info</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Instantly validate drivers by DL number & DOB with comprehensive license data.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> License class & validity
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Issue/expiry timestamps
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Status flags (suspended, renewed)
                  </li>
                </ul>
                <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Explore API Docs →
                </button>
              </div>

              {/* E-Challan Status Check */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-blue-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl">📝</span>
                  <div>
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs sm:text-sm font-bold">Free API</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-2">Challan Status Check</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Never miss fines—lookup outstanding challans by vehicle reg. number in seconds.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Active traffic violations
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Violation details & amount
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-green-500 text-lg sm:text-xl">✓</span> Payment status & due dates
                  </li>
                </ul>
                <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Explore API Docs →
                </button>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12 md:mt-16">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-gradient-to-r from-green-50 to-emerald-50 px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl border-2 border-green-200 hover:border-green-300 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-3xl sm:text-4xl md:text-5xl">🎉</span>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                  All APIs 100% Free — Get Started in Minutes!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Contact With Us
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Reach out to our team for any assistance or inquiries. We're here to help you 24/7.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a 
                href="tel:+919508686231" 
                className="group bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-center border-2 border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">📞</div>
                <p className="font-semibold text-white/90 mb-2 text-sm uppercase tracking-wide">Phone</p>
                <p className="text-white font-bold text-xl sm:text-2xl">+91 9508686231</p>
                <p className="text-white/70 text-sm mt-2">Tap to call</p>
              </a>
              <a 
                href="mailto:rkyo19085@gmail.com" 
                className="group bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-center border-2 border-purple-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">✉️</div>
                <p className="font-semibold text-white/90 mb-2 text-sm uppercase tracking-wide">Email</p>
                <p className="text-white font-bold text-base sm:text-lg break-all">rkyo19085@gmail.com</p>
                <p className="text-white/70 text-sm mt-2">Tap to email</p>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our services
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {[
                "What is Fastag Vehicle Tracking and How Does It Work?",
                "How Can I Track My Transport Vehicle's Toll Plaza Crossings?",
                "What Information Can I Access with the Vahan Portal?",
                "How Do I Verify Transport Vehicle Documents Using the Vahan Portal?",
                "Can I Verify a Driver's License?",
                "What is the SARATHI Portal and How Does It Help with Driver Verification?",
                "Is the Tracking Data in Real-Time?",
                "How Accurate is the Location Data from Fastag Tracking?",
                "Can I Track Multiple Transport Vehicles?",
                "How Do I Access the Vahan and SARATHI Portals for Free Tracking?",
                "Is My Data Secure When Using These Services?",
                "What Should I Do If I Encounter Issues with Tracking or Accessing Information?",
                "Is This Service Available for Personal Vehicles?",
                "Can I Track a Vehicle's Toll Plaza Crossings Beyond the Last 3 Days?",
                "Do I Need to Install Any Software to Use These Services?",
              ].map((question, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 cursor-pointer group"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-sm sm:text-base rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">
                      {question}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium APIs Section */}
        <section id="pricing-section" className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
                Our Premium Vehicle APIs
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Complete suite of vehicle tracking and verification APIs
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {['FASTAG Tracking', 'VAHAN Data API', 'SARATHI Validation', 'E-WAY Bill API', 'E-Challan Lookup'].map((api, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center border-2 border-white/20 hover:bg-white/25 hover:scale-110 hover:shadow-2xl transition-all duration-300 transform cursor-pointer group"
                >
                  <div className="text-3xl sm:text-4xl mb-3 transform group-hover:scale-125 transition-transform">
                    {api.includes('FASTAG') ? '🚗' : api.includes('VAHAN') ? '📋' : api.includes('SARATHI') ? '👤' : api.includes('E-WAY') ? '📄' : '📝'}
                  </div>
                  <p className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-yellow-200 transition-colors">
                    {api}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
