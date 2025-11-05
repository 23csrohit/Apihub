import React from 'react';

const plans = [
  { id: 'basic', name: 'Basic', price: 0, description: 'Free tier — limited searches, great to try the APIs', features: ['10 searches / month', 'Basic support', 'Community access'] },
  { id: 'pro', name: 'Pro', price: 29, description: 'For small teams and frequent lookups', features: ['500 searches / month', 'Priority support', 'Export reports'] },
  { id: 'business', name: 'Business', price: 99, description: 'Enterprise-grade usage and SLAs', features: ['Unlimited searches', 'Dedicated support', 'SAML SSO'] },
];

const Upgrade: React.FC = () => {
  const handleUpgrade = (planId: string) => {
    // Mock action: in real app this would open a checkout flow
    alert(`Proceeding to upgrade to ${planId} — (mock)`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Upgrade Plan</h2>
          <p className="text-sm text-gray-600">Choose the best plan for your needs and unlock higher quotas.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Current plan</p>
          <p className="font-semibold text-indigo-600">Basic</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.id} className="border border-gray-200 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                <span className="text-sm text-gray-500">{p.price === 0 ? 'Free' : `$${p.price}/mo`}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{p.description}</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <button
                onClick={() => handleUpgrade(p.id)}
                className={`w-full py-2 rounded-lg font-semibold ${p.id === 'basic' ? 'bg-gray-100 text-gray-700' : 'bg-indigo-600 text-white hover:shadow-lg'}`}
              >
                {p.id === 'basic' ? 'Current' : 'Upgrade'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upgrade;
