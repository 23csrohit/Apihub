import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LandingProps {
  navigateToLogin: () => void;
  navigateToApiDirectory: () => void;
  navigateToAbout: () => void;
  navigateToPrivacy?: () => void;
}

const LandingPage: React.FC<LandingProps> = ({ navigateToLogin, navigateToApiDirectory, navigateToAbout, navigateToPrivacy }) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedOrgType, setSelectedOrgType] = useState<string>('All');

  const heroSlides = [
    {
      title: "Use APIs as Building Blocks for Innovative Applications",
      subtitle: "Driving Digital Transformation",
      description: "Discover high-quality APIs from a wide range of reputable sources, both government and private sector, through our platform."
    },
    {
      title: "Get Access to Thousands of APIs",
      subtitle: "Explore a world of APIs for developing innovative solutions",
      description: "API Setu provides consent based access to APIs for a variety of use cases such KYC, Paperless Admission processes and employment."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const statEls = Array.from(root.querySelectorAll('.stat-number')) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statEls.forEach((el) => {
            const elEl = el as HTMLElement;
            const raw = elEl.dataset?.target ?? elEl.textContent ?? '0';
            const target = Number(String(raw).replace(/[+,KM%]/g, '')) || 0;
            let current = 0;
            const steps = 60;
            const inc = Math.max(1, Math.floor(target / steps));
            const suffix = elEl.dataset?.suffix ?? '';
            const id = window.setInterval(() => {
              current += inc;
              if (current >= target) {
                current = target;
                clearInterval(id);
              }
              if (target >= 1000000) elEl.textContent = (current / 1000000).toFixed(1) + 'M' + suffix;
              else if (target >= 1000) elEl.textContent = (current / 1000).toFixed(0) + 'K' + suffix;
              else elEl.textContent = String(current) + suffix;
            }, 20);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const statsSection = root.querySelector('.stats');
    if (statsSection) observer.observe(statsSection);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={rootRef} className="relative">
      <Header
        onSignInClick={navigateToLogin}
        onApiDirectoryClick={navigateToApiDirectory}
        onAboutClick={navigateToAbout}
        onPrivacyClick={navigateToPrivacy}
      />

      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="relative max-w-5xl mx-auto text-center">
              <div className="relative h-[400px] sm:h-[450px] flex items-center justify-center">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="max-w-4xl mx-auto">
                      <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-4 font-medium">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button 
                          onClick={navigateToApiDirectory} 
                          className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all"
                        >
                          Explore
                        </button>
                        <button 
                          onClick={navigateToLogin} 
                          className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center gap-4 overflow-x-auto pb-4">
                {['FASTAG', 'VAHAN', 'SARATHI', 'E-CHALLAN', 'E-WAY', 'KYC'].map((api, i) => (
                  <div 
                    key={api} 
                    className="flex-shrink-0 bg-white/10 backdrop-blur-lg rounded-2xl p-4 w-32 sm:w-40 flex flex-col items-center gap-2 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      {api.charAt(0)}
                    </div>
                    <div className="text-xs sm:text-sm text-white font-semibold text-center">{api}</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white stats">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Stats</h2>
              <p className="text-lg text-gray-600">API platform you can rely on</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 text-center hover:shadow-xl transition-all">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">
                  <span className="stat-number" data-target="7500">0</span>
                </h3>
                <p className="text-gray-600 font-semibold mb-1">Published APIs</p>
                <p className="text-sm text-gray-500">An ever-growing number of trusted APIs from reputable organizations.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 text-center hover:shadow-xl transition-all">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-2">
                  <span className="stat-number" data-target="2300">0</span>
                </h3>
                <p className="text-gray-600 font-semibold mb-1">Publishers</p>
                <p className="text-sm text-gray-500">Numerous organizations trust our platform to share their innovative APIs.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 text-center hover:shadow-xl transition-all">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-purple-600 mb-2">
                  <span className="stat-number" data-target="769">0</span>
                </h3>
                <p className="text-gray-600 font-semibold mb-1">Consumers</p>
                <p className="text-sm text-gray-500">More organizations are trusting our platform to discover and consume APIs.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 text-center hover:shadow-xl transition-all">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-green-600 mb-2">
                  <span className="stat-number" data-target="99" data-suffix="%">0</span>
                </h3>
                <p className="text-gray-600 font-semibold mb-1">Uptime</p>
                <p className="text-sm text-gray-500">Demonstrating the reliability of our platform and our commitment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Organizations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Partner Organizations</h2>
              <p className="text-lg text-gray-600">Vast directory of publishing organizations</p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-700 mb-4">Organization Type</p>
                <div className="flex flex-wrap gap-3">
                  {['All', 'Central Government', 'State Government', 'Industry & Private Sector'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedOrgType(type)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedOrgType === type
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                      {type !== 'All' && <span className="ml-2 text-xs opacity-75">
                        ({type === 'Central Government' ? '140' : type === 'State Government' ? '2026' : '117'})
                      </span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
                    {String.fromCharCode(65 + (i % 26))}
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Organization {i + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top APIs */}
        <section id="top-apis-section" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Top APIs</h2>
                <p className="text-lg text-gray-600">Explore and get access to hundreds of APIs</p>
                <p className="text-sm text-gray-500 mt-2">API Setu offers a diverse range of APIs from reputable organizations on a single platform</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Income Certificate', icon: '📄' },
                  { name: 'Caste Certificate', icon: '📋' },
                  { name: 'Registration of Vehicles', icon: '🚗' },
                  { name: 'Driving License', icon: '🪪' },
                  { name: 'Class X Marksheet', icon: '📜' },
                  { name: 'Ration Card', icon: '🛒' },
                  { name: 'Aadhaar Verification', icon: '🆔' },
                  { name: 'PAN Verification', icon: '💳' }
                ].map((api, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group"
                  >
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{api.icon}</div>
                    <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{api.name}</div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button 
                  onClick={navigateToApiDirectory}
                  className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all"
                >
                  Explore All APIs →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why API Setu */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Why API Setu?</h2>
              <p className="text-xl text-white/90 mb-8">Trusted by India Stack platforms</p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Equip your application with all the tools for API management in a collaborative environment. 
                API Setu is already a trusted partner for large Digital India platforms.
              </p>
              <button 
                onClick={navigateToLogin}
                className="px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">How It Works</h2>
                <p className="text-xl text-gray-600">Holistic API Management for Your Organization</p>
                <p className="text-sm text-gray-500 mt-2">
                  Optimize and streamline your API production and management by tailoring the process based on your organization's needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    title: 'Build APIs', 
                    icon: '🛠️',
                    description: 'With our complete toolset, create APIs tailored to your needs, simple or complex.',
                    features: ['Robust Toolset', 'Organized workflow', 'Easy Collaboration']
                  },
                  { 
                    title: 'Test APIs', 
                    icon: '⚙️',
                    description: 'Test your APIs with comprehensive testing tools before publishing.',
                    features: ['Automated Testing', 'Performance Metrics', 'Error Handling']
                  },
                  { 
                    title: 'Publish APIs', 
                    icon: '🚀',
                    description: 'Share your APIs with the community through our secure platform.',
                    features: ['Easy Publishing', 'Version Control', 'Documentation Tools']
                  },
                  { 
                    title: 'Consume APIs', 
                    icon: '🔗',
                    description: 'Discover and integrate APIs from our vast directory of providers.',
                    features: ['API Discovery', 'Quick Integration', 'Developer Support']
                  }
                ].map((step, i) => (
                  <div 
                    key={i} 
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                  >
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="text-blue-500">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section id="resources-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Learning Resources</h2>
                <p className="text-lg text-gray-600">Empower yourself with these helpful resources</p>
                <p className="text-sm text-gray-500 mt-2">
                  Explore our curated web resources to learn about industry-standard API development practices, 
                  from REST API basics to the latest OpenAPI specification.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    title: 'OpenAPI Initiative', 
                    desc: 'The OpenAPI Initiative is a non-profit organization that develops and maintains the OpenAPI Specification for building APIs.',
                    link: '#'
                  },
                  { 
                    title: 'OpenAPI Specification', 
                    desc: 'Open-source format for defining APIs, enabling machine-readable documentation and automated code generation.',
                    link: '#'
                  },
                  { 
                    title: 'REST APIs', 
                    desc: 'Learn about REST architectural style for web services, a widely-used standard for building scalable and interoperable APIs.',
                    link: '#'
                  }
                ].map((resource, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{resource.desc}</p>
                    <a 
                      href={resource.link} 
                      className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2"
                    >
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button 
                  onClick={navigateToApiDirectory}
                  className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
