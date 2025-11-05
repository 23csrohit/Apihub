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
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-sm text-gray-600">Need help? Send us a message or reach via the channels below.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Support hours</p>
          <p className="font-semibold text-indigo-600">Mon–Fri, 9am–6pm IST</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            type="email"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            rows={6}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={sent}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:shadow-lg"
            >
              {sent ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={() => { setName(''); setEmail(''); setMessage(''); }}
              className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
            <h4 className="font-semibold text-gray-800">General Support</h4>
            <p className="text-sm text-gray-600">support@apihub.example</p>
            <p className="text-sm text-gray-500 mt-2">Response within 24 hours (business days)</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
            <h4 className="font-semibold text-gray-800">Sales & Partnerships</h4>
            <p className="text-sm text-gray-600">sales@apihub.example</p>
            <p className="text-sm text-gray-500 mt-2">For enterprise pricing and integrations</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <h4 className="font-semibold text-gray-800">Phone</h4>
            <p className="text-sm text-gray-600">+91 98765 43210 (Mon–Fri, 9am–6pm IST)</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <h4 className="font-semibold text-gray-800">Office</h4>
            <p className="text-sm text-gray-600">Mumbai, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
