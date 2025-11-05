import React, { useState } from 'react';

type Driver = {
  id: string;
  name: string;
  dl: string;
  phone?: string;
  assignedVehicle?: string;
  rating?: number;
  status?: 'Active' | 'Inactive';
};

const initial: Driver[] = [
  { id: 'd1', name: 'Rajesh Kumar', dl: 'MH-0120180001234', phone: '+91 98765 43210', assignedVehicle: 'MH12AB1234', rating: 4.6, status: 'Active' },
  { id: 'd2', name: 'Suresh Singh', dl: 'DL-0220190005678', phone: '+91 91234 56789', assignedVehicle: 'DL09CD5678', rating: 4.2, status: 'Active' },
  { id: 'd3', name: 'Asha Patel', dl: 'GJ-0320170009012', phone: '+91 99876 54321', assignedVehicle: '', rating: 4.8, status: 'Inactive' },
];

const MyDriver: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>(initial);
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  const [dl, setDl] = useState('');
  const [phone, setPhone] = useState('');
  const [assignedVehicle, setAssignedVehicle] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !dl.trim()) return;
    const d: Driver = {
      id: String(Date.now()),
      name: name.trim(),
      dl: dl.trim().toUpperCase(),
      phone: phone.trim() || undefined,
      assignedVehicle: assignedVehicle.trim() || undefined,
      rating: 0,
      status: 'Active',
    };
    setDrivers(s => [d, ...s]);
    setName(''); setDl(''); setPhone(''); setAssignedVehicle(''); setAdding(false);
  };

  const handleRemove = (id: string) => setDrivers(s => s.filter(d => d.id !== id));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">My Driver</h3>
          <p className="text-sm text-gray-500">Manage drivers, assign vehicles and view quick ratings.</p>
        </div>
        <div>
          <button onClick={() => setAdding(!adding)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:shadow">
            {adding ? 'Cancel' : 'Add Driver'}
          </button>
        </div>
      </div>

      {adding && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="px-3 py-2 border rounded-lg" />
          <input value={dl} onChange={e=>setDl(e.target.value)} placeholder="DL number" className="px-3 py-2 border rounded-lg" />
          <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" className="px-3 py-2 border rounded-lg" />
          <div className="flex items-center gap-2">
            <input value={assignedVehicle} onChange={e=>setAssignedVehicle(e.target.value)} placeholder="Assign vehicle reg" className="flex-1 px-3 py-2 border rounded-lg" />
            <button onClick={handleAdd} className="px-4 py-2 bg-green-600 text-white rounded-lg">Save</button>
          </div>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {drivers.map(d => (
          <div key={d.id} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-gray-800">{d.name}</div>
                <div className="text-sm text-gray-500">DL: {d.dl}</div>
                <div className="text-sm text-gray-500">Phone: {d.phone || '—'}</div>
                <div className="text-sm text-gray-500 mt-1">Vehicle: {d.assignedVehicle || 'Not assigned'}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">{d.rating ? d.rating.toFixed(1) : '—'}</div>
                <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${d.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{d.status}</div>
                <button onClick={() => handleRemove(d.id)} className="block mt-3 text-xs text-red-600 hover:underline">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDriver;
