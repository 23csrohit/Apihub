import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    // Mock submit
    setSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSent(false);
      alert('Message sent (mock) — we will get back to you soon!');
    }, 800);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Contact Us</h2>
          <p className="text-sm text-gray-600">Need help? Send us a message or reach via the channels below.</p>
        </div>
        <div className="text-left sm:text-right border-t sm:border-none pt-4 sm:pt-0 mt-4 sm:mt-0">
          <p className="text-sm text-gray-500">Support hours</p>
          <p className="font-semibold text-indigo-600">Mon–Fri, 9am–6pm IST</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            type="email"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            rows={6}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-y min-h-[120px] transition-shadow"
          />
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              disabled={sent}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {sent ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={() => { setName(''); setEmail(''); setMessage(''); }}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border border-blue-100 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-800 text-base sm:text-lg">General Support</h4>
            <p className="text-sm sm:text-base text-gray-600 break-words">support@apihub.example</p>
            <p className="text-sm text-gray-500 mt-2">Response within 24 hours (business days)</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-5 border border-green-100 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Sales & Partnerships</h4>
            <p className="text-sm sm:text-base text-gray-600 break-words">sales@apihub.example</p>
            <p className="text-sm text-gray-500 mt-2">For enterprise pricing and integrations</p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Phone</h4>
            <p className="text-sm sm:text-base text-gray-600">+91 98765 43210 (Mon–Fri, 9am–6pm IST)</p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Office</h4>
            <p className="text-sm sm:text-base text-gray-600">Mumbai, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
