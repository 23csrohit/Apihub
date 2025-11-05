import React, { useState } from 'react';

type FleetVehicle = {
  id: string;
  reg: string;
  make: string;
  model: string;
  lastSeen?: string;
  status?: 'Active' | 'Inactive';
};

const sample: FleetVehicle[] = [
  { id: '1', reg: 'MH12AB1234', make: 'Mahindra', model: 'Bolero', lastSeen: '2025-11-04 15:30', status: 'Active' },
  { id: '2', reg: 'DL09CD5678', make: 'Tata', model: 'Ace', lastSeen: '2025-11-03 08:14', status: 'Active' },
  { id: '3', reg: 'KA51EF9012', make: 'Ashok Leyland', model: 'EComet', lastSeen: '2025-11-02 12:45', status: 'Inactive' },
];

const MyFleet: React.FC = () => {
  const [vehicles, setVehicles] = useState<FleetVehicle[]>(sample);
  const [adding, setAdding] = useState(false);
  const [newReg, setNewReg] = useState('');
  const [newMake, setNewMake] = useState('');
  const [newModel, setNewModel] = useState('');

  const handleAdd = () => {
    if (!newReg.trim()) return;
    const v: FleetVehicle = {
      id: String(Date.now()),
      reg: newReg.trim().toUpperCase(),
      make: newMake || 'Unknown',
      model: newModel || '-',
      lastSeen: '—',
      status: 'Active',
    };
    setVehicles((s) => [v, ...s]);
    setNewReg(''); setNewMake(''); setNewModel(''); setAdding(false);
  };

  const handleRemove = (id: string) => {
    setVehicles((s) => s.filter(v => v.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">My Fleet</h3>
          <p className="text-sm text-gray-500">Manage your vehicles, add new ones, and view quick status.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setAdding(!adding)}
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-md transition-all"
          >
            {adding ? 'Cancel' : 'Add Vehicle'}
          </button>
        </div>
      </div>

      {adding && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input value={newReg} onChange={(e) => setNewReg(e.target.value)} placeholder="Registration" className="px-3 py-2 border rounded-lg" />
          <input value={newMake} onChange={(e) => setNewMake(e.target.value)} placeholder="Make" className="px-3 py-2 border rounded-lg" />
          <div className="flex gap-2">
            <input value={newModel} onChange={(e) => setNewModel(e.target.value)} placeholder="Model" className="flex-1 px-3 py-2 border rounded-lg" />
            <button onClick={handleAdd} className="px-4 py-2 bg-green-600 text-white rounded-lg">Save</button>
          </div>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map(v => (
          <div key={v.id} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-gray-500">{v.reg}</div>
                <div className="text-lg font-semibold text-gray-800">{v.make} {v.model}</div>
                <div className="text-xs text-gray-500 mt-1">Last seen: {v.lastSeen}</div>
              </div>
              <div className="text-right">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${v.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{v.status}</div>
                <button onClick={() => handleRemove(v.id)} className="block mt-3 text-xs text-red-600 hover:underline">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFleet;
