import React, { useState } from 'react';

const mockOwnerHistory = (reg: string) => {
  const r = reg.trim().toUpperCase();
  if (!r) return null;
  return {
    reg: r,
    transfers: [
      { date: '2024-08-10', owner: 'Acme Logistics Pvt Ltd', location: 'Mumbai' },
      { date: '2022-04-03', owner: 'Speedy Movers', location: 'Pune' },
      { date: '2019-07-18', owner: 'First Transport Co.', location: 'Nagpur' },
    ],
    currentOwner: 'Acme Logistics Pvt Ltd',
    lastTransferDate: '2024-08-10',
  };
};

const OwnerHistory: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null);
    const q = query.trim();
    if (!q) {
      setError('Please enter a registration number to search owner history.');
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 550));
      const result = mockOwnerHistory(q);
      if (!result) {
        setError('No owner history found for this registration number.');
        setData(null);
      } else {
        setData(result);
      }
    } catch (e) {
      setError('Unexpected error while fetching owner history.');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800">Owner History Lookup</h3>
      <p className="text-sm text-gray-500 mt-1">Enter vehicle registration to view ownership transfers and history.</p>

      <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. MH12AB1234"
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-transform transform hover:scale-105"
        >
          {loading ? 'Searching…' : 'Search History'}
        </button>
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      {data && (
        <div className="mt-6 grid grid-cols-1 gap-4">
          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
            <h4 className="text-sm text-gray-500">Registration</h4>
            <p className="text-lg font-bold text-gray-800">{data.reg}</p>
            <h4 className="text-sm text-gray-500 mt-3">Current Owner</h4>
            <p className="text-sm font-medium text-gray-700">{data.currentOwner}</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-gray-700">Ownership Transfers</h4>
              <span className="text-xs text-gray-500">Last: {data.lastTransferDate}</span>
            </div>
            <div className="space-y-2">
              {data.transfers.map((t: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-md p-3">
                  <div>
                    <div className="text-sm font-medium text-gray-800">{t.owner}</div>
                    <div className="text-xs text-gray-500">{t.location}</div>
                  </div>
                  <div className="text-sm text-gray-600">{t.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerHistory;
