import React, { useState } from 'react';

const mockLookup = (reg: string) => {
  // Mocked response — replace with real API call later
  const normalized = reg.trim().toUpperCase();
  if (!normalized) return null;
  return {
    reg: normalized,
    make: 'Mahindra & Mahindra',
    model: 'Bolero Pickup',
    color: 'White',
    fuel: 'Diesel',
    owner: 'Acme Logistics Pvt Ltd',
    regDate: '2019-07-18',
    fitness: 'Valid',
    insuranceExpiry: '2026-03-15',
    chassis: 'CH1234567890',
  };
};

const VehicleRC: React.FC = () => {
  const [reg, setReg] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null);
    const query = reg.trim();
    if (!query) {
      setError('Please enter a registration number.');
      return;
    }
    setLoading(true);
    try {
      // Simulate API latency
      await new Promise((r) => setTimeout(r, 600));
      const data = mockLookup(query);
      if (!data) {
        setError('No data found for this registration number.');
        setResult(null);
      } else {
        setResult(data);
      }
    } catch (e) {
      setError('Unexpected error.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-600">Vehicle Registration Number</label>
          <input
            value={reg}
            onChange={(e) => setReg(e.target.value)}
            placeholder="e.g. MH12AB1234"
            className="mt-2 w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {loading ? 'Searching…' : 'Lookup RC'}
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600 font-medium">{error}</p>
      )}

      {result && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
            <h4 className="text-sm text-gray-500">Registration</h4>
            <p className="text-lg font-bold text-gray-800">{result.reg}</p>

            <h4 className="text-sm text-gray-500 mt-4">Owner</h4>
            <p className="text-sm text-gray-700 font-medium">{result.owner}</p>

            <h4 className="text-sm text-gray-500 mt-4">Chassis</h4>
            <p className="text-sm text-gray-700">{result.chassis}</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100">
            <h4 className="text-sm text-gray-500">Make / Model</h4>
            <p className="text-lg font-bold text-gray-800">{result.make} — {result.model}</p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>
                <h5 className="text-xs text-gray-500">Color</h5>
                <p className="font-medium text-gray-700">{result.color}</p>
              </div>
              <div>
                <h5 className="text-xs text-gray-500">Fuel</h5>
                <p className="font-medium text-gray-700">{result.fuel}</p>
              </div>
              <div>
                <h5 className="text-xs text-gray-500">Reg Date</h5>
                <p className="font-medium text-gray-700">{result.regDate}</p>
              </div>
              <div>
                <h5 className="text-xs text-gray-500">Insurance</h5>
                <p className="font-medium text-gray-700">{result.insuranceExpiry}</p>
              </div>
            </div>

            <div className="mt-4">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Fitness: {result.fitness}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleRC;
