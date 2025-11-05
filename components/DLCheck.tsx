import React, { useState } from 'react';

const mockDlLookup = (dl: string) => {
  const v = dl.trim().toUpperCase();
  if (!v) return null;
  return {
    dl: v,
    name: 'Amit Sharma',
    dob: '1987-02-14',
    gender: 'Male',
    classes: 'MCWG, LMV',
    issueDate: '2018-06-21',
    expiry: '2028-06-20',
    status: 'VALID',
    authority: 'RTO Mumbai',
  };
};

const DLCheck: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLookup = async () => {
    setError(null);
    const q = query.trim();
    if (!q) {
      setError('Please enter a Driving Licence number.');
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      const data = mockDlLookup(q);
      if (!data) {
        setError('No record found for this DL number.');
        setResult(null);
      } else {
        setResult(data);
      }
    } catch (e) {
      setError('Unexpected error while fetching DL details.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800">DL Check</h3>
      <p className="text-sm text-gray-500 mt-1">Quickly validate a driving licence number and view holder details.</p>

      <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. MH-0120200001234"
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLookup}
          disabled={loading}
          className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-transform transform hover:scale-105"
        >
          {loading ? 'Checking…' : 'Check DL'}
        </button>
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      {result && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
            <h4 className="text-sm text-gray-500">DL Number</h4>
            <p className="text-lg font-bold text-gray-800">{result.dl}</p>
            <h4 className="text-sm text-gray-500 mt-3">Name</h4>
            <p className="text-sm font-medium text-gray-700">{result.name}</p>
            <div className="mt-3 text-sm text-gray-600">
              <div>DOB: {result.dob}</div>
              <div>Gender: {result.gender}</div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-gray-100">
            <h4 className="text-sm text-gray-500">License Details</h4>
            <p className="text-sm font-medium text-gray-700">Classes: {result.classes}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>
                <h5 className="text-xs text-gray-500">Issued</h5>
                <p className="font-medium text-gray-700">{result.issueDate}</p>
              </div>
              <div>
                <h5 className="text-xs text-gray-500">Expiry</h5>
                <p className="font-medium text-gray-700">{result.expiry}</p>
              </div>
            </div>

            <div className="mt-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${result.status === 'VALID' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>Status: {result.status}</span>
              <p className="mt-2 text-xs text-gray-500">Authority: {result.authority}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DLCheck;
