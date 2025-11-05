import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface PrivacyPolicyPageProps {
  navigateToHome: () => void;
  navigateToLogin: () => void;
  navigateToApiDirectory: () => void;
  navigateToAbout: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ 
  navigateToHome, 
  navigateToLogin, 
  navigateToApiDirectory, 
  navigateToAbout 
}) => {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: "📋",
      content: [
        "Personal Information: Name, email address, phone number, company details, and billing information when you register for our services.",
        "Vehicle Data: Registration numbers, vehicle identification numbers (VIN), and other vehicle-related information you provide for tracking and verification purposes.",
        "Usage Data: API call logs, access timestamps, IP addresses, browser type, and device information for service optimization and security.",
        "Payment Information: Transaction details processed through secure third-party payment gateways."
      ]
    },
    {
      title: "2. How We Use Your Information",
      icon: "🔒",
      content: [
        "Service Delivery: To provide vehicle tracking, verification, and API services as requested.",
        "Account Management: To manage your account, process payments, and provide customer support.",
        "Communication: To send service updates, notifications, and respond to your inquiries.",
        "Security: To detect and prevent fraud, unauthorized access, and other security threats.",
        "Analytics: To improve our services, analyze usage patterns, and enhance user experience."
      ]
    },
    {
      title: "3. Data Sharing and Disclosure",
      icon: "🤝",
      content: [
        "We do not sell your personal information to third parties.",
        "We may share data with trusted service providers who assist in operating our platform (payment processors, cloud hosting, etc.).",
        "We may disclose information if required by law, court order, or government regulation.",
        "Aggregated, anonymized data may be used for statistical analysis and business insights."
      ]
    },
    {
      title: "4. Data Security",
      icon: "🛡️",
      content: [
        "We implement industry-standard security measures including encryption, secure protocols, and access controls.",
        "All API communications are secured using HTTPS/TLS encryption.",
        "Regular security audits and updates are conducted to protect your data.",
        "Your payment information is processed through PCI-DSS compliant payment gateways."
      ]
    },
    {
      title: "5. Your Rights",
      icon: "⚖️",
      content: [
        "Access: Request a copy of your personal data we hold.",
        "Correction: Update or correct inaccurate information.",
        "Deletion: Request deletion of your account and associated data.",
        "Portability: Export your data in a machine-readable format.",
        "Withdrawal: Opt-out of marketing communications at any time."
      ]
    },
    {
      title: "6. Cookies and Tracking",
      icon: "🍪",
      content: [
        "We use cookies and similar technologies to enhance user experience and analyze website traffic.",
        "Essential cookies are required for the website to function properly.",
        "Analytics cookies help us understand how visitors interact with our site.",
        "You can manage cookie preferences through your browser settings."
      ]
    },
    {
      title: "7. Third-Party Links",
      icon: "🔗",
      content: [
        "Our platform may contain links to third-party websites or services.",
        "We are not responsible for the privacy practices of external sites.",
        "We encourage you to review the privacy policies of any third-party sites you visit."
      ]
    },
    {
      title: "8. Data Retention",
      icon: "📦",
      content: [
        "We retain your personal data for as long as necessary to provide our services and comply with legal obligations.",
        "Account data is retained until you request deletion or the account is inactive for an extended period.",
        "API logs and transaction records may be retained for security and compliance purposes."
      ]
    },
    {
      title: "9. Children's Privacy",
      icon: "👶",
      content: [
        "Our services are not intended for individuals under 18 years of age.",
        "We do not knowingly collect personal information from children.",
        "If you believe we have collected data from a minor, please contact us immediately."
      ]
    },
    {
      title: "10. International Data Transfers",
      icon: "🌍",
      content: [
        "Your data may be processed and stored in servers located outside your country of residence.",
        "We ensure appropriate safeguards are in place to protect your data during international transfers.",
        "By using our services, you consent to the transfer of your data as described in this policy."
      ]
    },
    {
      title: "11. Changes to This Policy",
      icon: "📝",
      content: [
        "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.",
        "Significant changes will be notified via email or prominent website notice.",
        "Your continued use of our services after policy updates constitutes acceptance of the revised policy.",
        "We recommend reviewing this policy regularly to stay informed about how we protect your data."
      ]
    },
    {
      title: "12. Contact Us",
      icon: "📞",
      content: [
        "If you have questions, concerns, or requests regarding your privacy, please contact us:",
        "Email: rkyo19085@gmail.com",
        "Phone: +91 9508686231",
        "We will respond to your inquiries within 48 hours."
      ]
    }
  ];

  return (
    <>
      <Header 
        onSignInClick={navigateToLogin} 
        onApiDirectoryClick={navigateToApiDirectory} 
        onAboutClick={navigateToAbout}
        onPrivacyClick={() => {}}
      />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-lg rounded-full mb-6 sm:mb-8">
              <span className="text-4xl sm:text-5xl">🔒</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, protect, and share your information when you use our services.
            </p>
            <p className="text-sm sm:text-base text-blue-200 mt-4">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 border border-gray-100">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                Introduction
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                API Hub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our API services, or interact with our platform.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-6 sm:space-y-8">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 border-b-2 border-blue-100">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-3xl sm:text-4xl">{section.icon}</span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <ul className="space-y-3 sm:space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 sm:gap-4">
                          <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mt-0.5">
                            ✓
                          </span>
                          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed flex-1">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-12 sm:mt-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-white">
              <div className="text-center">
                <span className="text-4xl sm:text-5xl mb-4 block">📧</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Questions About Privacy?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to reach out to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <a 
                    href="mailto:rkyo19085@gmail.com"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg text-sm sm:text-base"
                  >
                    📧 Email Us
                  </a>
                  <a 
                    href="tel:+919508686231"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transform hover:scale-105 transition-all shadow-lg text-sm sm:text-base"
                  >
                    📞 Call Us
                  </a>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 sm:mt-12 text-center">
              <button 
                onClick={navigateToHome}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all shadow-md border-2 border-gray-200 text-sm sm:text-base"
              >
                <span>←</span> Back to Home
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;

