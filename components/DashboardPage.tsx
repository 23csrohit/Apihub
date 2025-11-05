import React, { useMemo, useState } from 'react';
import ContactUs from './ContactUs';
import DLCheck from './DLCheck';
import DriverReview from './DriverReview';
import MyDriver from './MyDriver';
import MyFleet from './MyFleet';
import OwnerHistory from './OwnerHistory';
import Upgrade from './Upgrade';
import VehicleRC from './VehicleRC';

interface DashboardPageProps {
  navigateToHome: () => void;
}

type TabKey = 'client' | 'logs' | 'wallet' | 'payments' | 'vehicles' | 'notifications' | 'reports' | 'support' | 'profile' | 'settings' | 'pricing';

const DashboardPage: React.FC<DashboardPageProps> = ({ navigateToHome }) => {
  const [apiKeys, setApiKeys] = useState<string[]>([]);
  const [generationMessage, setGenerationMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState<number>(100);
  const [isRechargeOpen, setIsRechargeOpen] = useState<boolean>(false);
  const [rechargeAmount, setRechargeAmount] = useState<string>('');
  const [rechargeError, setRechargeError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [logMethodFilter, setLogMethodFilter] = useState<string>('');
  const [logStatusFilter, setLogStatusFilter] = useState<string>('');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState<string>('');
  const [paymentMethodFilter, setPaymentMethodFilter] = useState<string>('');
  const [vehicleStatusFilter, setVehicleStatusFilter] = useState<string>('');
  const [vehicleSearchQuery, setVehicleSearchQuery] = useState<string>('');
  const [expiryDaysFilter, setExpiryDaysFilter] = useState<number>(60);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const apiLogs = useMemo(
    () => [
      { id: 'LOG-1001', time: '2025-11-05 10:21:14', endpoint: '/v1/vehicle/status', method: 'GET', status: 200, ms: 128, ip: '192.168.1.45', responseSize: '2.3 KB' },
      { id: 'LOG-1002', time: '2025-11-05 10:18:09', endpoint: '/v1/wallet/balance', method: 'GET', status: 200, ms: 64, ip: '192.168.1.45', responseSize: '1.1 KB' },
      { id: 'LOG-1003', time: '2025-11-05 09:50:33', endpoint: '/v1/vehicle/search', method: 'POST', status: 400, ms: 212, ip: '192.168.1.45', responseSize: '0.5 KB' },
      { id: 'LOG-1004', time: '2025-11-05 09:45:01', endpoint: '/v1/vehicle/details', method: 'GET', status: 200, ms: 92, ip: '192.168.1.45', responseSize: '3.2 KB' },
      { id: 'LOG-1005', time: '2025-11-05 09:30:22', endpoint: '/v1/vehicle/toll-history', method: 'GET', status: 200, ms: 145, ip: '192.168.1.45', responseSize: '5.8 KB' },
      { id: 'LOG-1006', time: '2025-11-05 09:15:10', endpoint: '/v1/payment/verify', method: 'POST', status: 500, ms: 312, ip: '192.168.1.45', responseSize: '0.8 KB' },
      { id: 'LOG-1007', time: '2025-11-05 08:55:45', endpoint: '/v1/vehicle/status', method: 'GET', status: 200, ms: 98, ip: '192.168.1.45', responseSize: '2.3 KB' },
      { id: 'LOG-1008', time: '2025-11-05 08:40:12', endpoint: '/v1/wallet/transactions', method: 'GET', status: 200, ms: 76, ip: '192.168.1.45', responseSize: '4.1 KB' },
    ],
    []
  );

  const payments = useMemo(
    () => [
      { id: 'TXN-0091', date: '2025-11-02 14:32:15', amount: 50, method: 'UPI', status: 'Success', gateway: 'Razorpay', invoice: 'INV-0091', description: 'Wallet Recharge' },
      { id: 'TXN-0089', date: '2025-10-28 11:20:45', amount: 100, method: 'Card', status: 'Success', gateway: 'Stripe', invoice: 'INV-0089', description: 'Wallet Recharge' },
      { id: 'TXN-0087', date: '2025-10-20 16:15:30', amount: 25, method: 'Card', status: 'Failed', gateway: 'Stripe', invoice: '-', description: 'Wallet Recharge - Declined' },
      { id: 'TXN-0085', date: '2025-10-15 09:45:22', amount: 200, method: 'Net Banking', status: 'Success', gateway: 'PayU', invoice: 'INV-0085', description: 'Wallet Recharge' },
      { id: 'TXN-0083', date: '2025-10-10 13:22:10', amount: 75, method: 'UPI', status: 'Success', gateway: 'Razorpay', invoice: 'INV-0083', description: 'Wallet Recharge' },
    ],
    []
  );

  const vehicles = useMemo(
    () => [
      { reg: 'MH12AB1234', tagId: 'FTG902134', owner: 'Acme Logistics', status: 'Active', lastSeen: '2025-11-03 08:14', vehicleType: 'Truck', chassisNo: 'CH1234567890', insuranceExpiry: '2026-03-15', pucExpiry: '2025-12-20', balance: 1250.50 },
      { reg: 'DL09CD5678', tagId: 'FTG771245', owner: 'BlueTrans', status: 'Inactive', lastSeen: '2025-10-31 19:02', vehicleType: 'Car', chassisNo: 'CH9876543210', insuranceExpiry: '2025-11-30', pucExpiry: '2025-11-15', balance: 450.00 },
      { reg: 'KA51EF9012', tagId: 'FTG664390', owner: 'Rapid Movers', status: 'Active', lastSeen: '2025-11-02 12:45', vehicleType: 'Bus', chassisNo: 'CH5556667778', insuranceExpiry: '2026-06-10', pucExpiry: '2026-01-05', balance: 3200.75 },
      { reg: 'TN07GH3456', tagId: 'FTG889012', owner: 'Swift Transport', status: 'Active', lastSeen: '2025-11-04 15:30', vehicleType: 'Truck', chassisNo: 'CH1112223334', insuranceExpiry: '2026-02-28', pucExpiry: '2025-12-10', balance: 890.25 },
      { reg: 'GJ03IJ6789', tagId: 'FTG445566', owner: 'Metro Logistics', status: 'Active', lastSeen: '2025-11-05 10:15', vehicleType: 'Car', chassisNo: 'CH7778889990', insuranceExpiry: '2026-04-20', pucExpiry: '2026-02-15', balance: 567.80 },
    ],
    []
  );

  const filteredLogs = useMemo(() => {
    return apiLogs.filter((r) => {
      const byMethod = !logMethodFilter || r.method === logMethodFilter;
      const byStatus = !logStatusFilter || String(r.status) === logStatusFilter;
      return byMethod && byStatus;
    });
  }, [apiLogs, logMethodFilter, logStatusFilter]);

  const filteredPayments = useMemo(() => {
    return payments.filter((p) => {
      const byStatus = !paymentStatusFilter || p.status === paymentStatusFilter;
      const byMethod = !paymentMethodFilter || p.method === paymentMethodFilter;
      return byStatus && byMethod;
    });
  }, [payments, paymentStatusFilter, paymentMethodFilter]);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      const byStatus = !vehicleStatusFilter || v.status === vehicleStatusFilter;
      const bySearch = !vehicleSearchQuery || 
        v.reg.toLowerCase().includes(vehicleSearchQuery.toLowerCase()) ||
        v.tagId.toLowerCase().includes(vehicleSearchQuery.toLowerCase()) ||
        v.owner.toLowerCase().includes(vehicleSearchQuery.toLowerCase()) ||
        v.chassisNo.toLowerCase().includes(vehicleSearchQuery.toLowerCase());
      return byStatus && bySearch;
    });
  }, [vehicles, vehicleStatusFilter, vehicleSearchQuery]);

  const exportToCsv = (rows: Array<Record<string, unknown>>, filename: string) => {
    if (!rows.length) return;
    const headers = Object.keys(rows[0]);
    const csv = [headers.join(','), ...rows.map((r) => headers.map((h) => JSON.stringify((r as any)[h] ?? '')).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleGenerateKey = () => {
    const newKey = `sk-live-${Math.random().toString(36).substring(2, 12)}${Math.random().toString(36).substring(2, 12)}`;
    setApiKeys(prevKeys => [newKey, ...prevKeys]);
    setGenerationMessage(`New API Key generated successfully!`);

    setTimeout(() => {
      setGenerationMessage('');
    }, 5000);
  };

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key).then(() => {
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy API key: ', err);
    });
  };


  const navItems = [
    { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    { key: 'location', label: 'Location', icon: '📍' },
    { key: 'vehicle-rc', label: 'Vehicle RC', icon: '🚗' },
    { key: 'owner-history', label: 'Owner History', icon: '👤' },
    { key: 'dl-check', label: 'DL Check', icon: '🪪' },
    { key: 'my-fleet', label: 'My Fleet', icon: '🚛' },
    { key: 'my-driver', label: 'My Driver', icon: '👷' },
    { key: 'driver-review', label: 'Driver-review', icon: '⭐' },
    { key: 'upgrade', label: 'Upgrade', icon: '⬆️' },
    { key: 'contact', label: 'Contact Us', icon: '📞' },
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-blue-700 to-indigo-800 text-white transition-all duration-300 flex flex-col fixed h-full z-50`}>
        {/* Logo */}
        <div className="p-4 border-b border-blue-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">A</span>
            </div>
            {sidebarOpen && (
              <h1 className="text-xl font-bold">API Hub</h1>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => setActiveTab(item.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.key
                      ? 'bg-white text-blue-700 shadow-lg'
                      : 'text-blue-100 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {sidebarOpen && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Toggle Sidebar Button */}
        <div className="p-4 border-t border-blue-600">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-600 transition-all"
          >
            <span className="text-xl">{sidebarOpen ? '◀' : '▶'}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="p-4 md:p-6">
          {/* Top Bar */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            </div>
            <button 
              onClick={navigateToHome} 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
            >
              ← Back to Home
            </button>
          </div>

          {/* User Profile Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  R
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Rohit</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold">Plan:</span> Basic
                    </span>
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold">Expiry:</span> 18/11/2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-gray-600 uppercase">Max Search Limit</h4>
                <span className="text-2xl">🔍</span>
        </div>
              <p className="text-3xl font-bold text-blue-600">10</p>
                  </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-gray-600 uppercase">API Hit Limit</h4>
                <span className="text-2xl">⚡</span>
                  </div>
              <p className="text-3xl font-bold text-indigo-600">100</p>
                </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-gray-600 uppercase">Total Searches</h4>
                <span className="text-2xl">📊</span>
                  </div>
              <p className="text-3xl font-bold text-green-600">0</p>
                  </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-gray-600 uppercase">Total API Hit</h4>
                <span className="text-2xl">🎯</span>
                  </div>
              <p className="text-3xl font-bold text-purple-600">0</p>
                  </div>
          </div>

          {/* Remaining Limits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-md p-6 border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-gray-800">Remaining Searches</h4>
                <span className="text-3xl">✅</span>
              </div>
              <p className="text-4xl font-bold text-green-600">10</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-gray-800">Remaining API Hits</h4>
                <span className="text-3xl">💪</span>
              </div>
              <p className="text-4xl font-bold text-blue-600">100</p>
                </div>
              </div>
              
          {/* Vehicle Expiry Reminders */}
          <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Vehicle Expiry Reminders</h3>
              <select
                value={expiryDaysFilter}
                onChange={(e) => setExpiryDaysFilter(Number(e.target.value))}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={30}>30 Days</option>
                <option value={60}>60 Days</option>
                <option value={90}>90 Days</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {['Registration', 'Insurance', 'Permit', 'Fitness', 'Tax', 'PUCC', 'NP'].map((type) => (
                <div key={type} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-800">{type}</h4>
                    <span className="text-2xl">
                      {type === 'Registration' && '📝'}
                      {type === 'Insurance' && '🛡️'}
                      {type === 'Permit' && '📄'}
                      {type === 'Fitness' && '✅'}
                      {type === 'Tax' && '💰'}
                      {type === 'PUCC' && '🌿'}
                      {type === 'NP' && '🚗'}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">No vehicles</p>
                      </div>
                    ))}
                  </div>
                  </div>

          {/* Location Tab with Indian Map */}
          {activeTab === 'location' && (
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">📍 Location Map - India</h2>
                <p className="text-sm text-gray-600">View vehicle locations across India</p>
              </div>
              
              {/* Map Container */}
              <div className="relative w-full h-[600px] rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=68.1%2C6.5%2C97.4%2C37.1&layer=mapnik&marker=20.5937,78.9629"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="India Map"
                ></iframe>
              </div>

              {/* Location List */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📍</span>
                    <h3 className="font-bold text-gray-800">Mumbai</h3>
                  </div>
                  <p className="text-sm text-gray-600">Vehicles: 45</p>
                  <p className="text-xs text-gray-500 mt-1">Coordinates: 19.0760°N, 72.8777°E</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📍</span>
                    <h3 className="font-bold text-gray-800">Delhi</h3>
                  </div>
                  <p className="text-sm text-gray-600">Vehicles: 38</p>
                  <p className="text-xs text-gray-500 mt-1">Coordinates: 28.6139°N, 77.2090°E</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📍</span>
                    <h3 className="font-bold text-gray-800">Bangalore</h3>
                  </div>
                  <p className="text-sm text-gray-600">Vehicles: 32</p>
                  <p className="text-xs text-gray-500 mt-1">Coordinates: 12.9716°N, 77.5946°E</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📍</span>
                    <h3 className="font-bold text-gray-800">Chennai</h3>
                  </div>
                  <p className="text-sm text-gray-600">Vehicles: 28</p>
                  <p className="text-xs text-gray-500 mt-1">Coordinates: 13.0827°N, 80.2707°E</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-4 border border-red-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📍</span>
                    <h3 className="font-bold text-gray-800">Hyderabad</h3>
                  </div>
                  <p className="text-sm text-gray-600">Vehicles: 25</p>
                  <p className="text-xs text-gray-500 mt-1">Coordinates: 17.3850°N, 78.4867°E</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📍</span>
                    <h3 className="font-bold text-gray-800">Kolkata</h3>
                  </div>
                  <p className="text-sm text-gray-600">Vehicles: 22</p>
                  <p className="text-xs text-gray-500 mt-1">Coordinates: 22.5726°N, 88.3639°E</p>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="mt-6 flex flex-wrap gap-3">
                <input
                  type="text"
                  placeholder="🔍 Search location..."
                  className="flex-1 min-w-[200px] px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <select className="px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                  <option>All States</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>West Bengal</option>
                </select>
                <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg">
                  🔄 Refresh
                </button>
              </div>
            </div>
          )}

          {/* Vehicle RC tab */}
          {activeTab === 'vehicle-rc' && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Vehicle RC Lookup</h2>
              <VehicleRC />
            </div>
          )}

          {/* Owner History tab */}
          {activeTab === 'owner-history' && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Owner History</h2>
              <OwnerHistory />
            </div>
          )}

          {/* DL Check tab */}
          {activeTab === 'dl-check' && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">DL Check</h2>
              <DLCheck />
            </div>
          )}

          {/* My Fleet tab */}
          {activeTab === 'my-fleet' && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">My Fleet</h2>
              <MyFleet />
            </div>
          )}

          {/* My Driver tab */}
          {activeTab === 'my-driver' && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">My Driver</h2>
              <MyDriver />
            </div>
          )}

          {/* Driver Review tab */}
          {activeTab === 'driver-review' && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Driver Reviews</h2>
              <DriverReview />
            </div>
          )}

          {/* Upgrade tab */}
          {activeTab === 'upgrade' && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Upgrade</h2>
              <Upgrade />
            </div>
          )}

          {/* Contact Us tab */}
          {activeTab === 'contact' && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <ContactUs />
            </div>
          )}

          {/* Additional Tabs Content (fallback for other tabs) */}
          {activeTab !== 'dashboard' && activeTab !== 'location' && activeTab !== 'vehicle-rc' && (
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <p className="text-gray-600">Content for {navItems.find(item => item.key === activeTab)?.label || 'selected tab'}</p>
            </div>
          )}
                </div>
      </main>

      {/* Recharge Modal */}
      {isRechargeOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-200 transform transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl">
                💰
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Recharge Wallet</h3>
            </div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (USD)</label>
            <input
              type="number"
              min="1"
              step="0.01"
              value={rechargeAmount}
              onChange={(e) => {
                setRechargeAmount(e.target.value);
                setRechargeError('');
              }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg font-medium"
              placeholder="e.g. 25.00"
            />
            {rechargeError && (
              <p className="mt-2 text-sm text-red-600 font-medium">{rechargeError}</p>
            )}
            <div className="mt-8 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setIsRechargeOpen(false);
                  setRechargeAmount('');
                  setRechargeError('');
                }}
                className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const amount = parseFloat(rechargeAmount);
                  if (isNaN(amount) || amount <= 0) {
                    setRechargeError('Please enter a valid amount greater than 0.');
                    return;
                  }
                  setWalletBalance(prev => prev + amount);
                  setIsRechargeOpen(false);
                  setRechargeAmount('');
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                + Add Funds
                </button>
              </div>
          </div>
        </div>
      )}
      </div>

      {/* Recharge Modal */}
      {isRechargeOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-200 transform transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl">
                💰
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Recharge Wallet</h3>
            </div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (USD)</label>
            <input
              type="number"
              min="1"
              step="0.01"
              value={rechargeAmount}
              onChange={(e) => {
                setRechargeAmount(e.target.value);
                setRechargeError('');
              }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg font-medium"
              placeholder="e.g. 25.00"
            />
            {rechargeError && (
              <p className="mt-2 text-sm text-red-600 font-medium">{rechargeError}</p>
            )}
            <div className="mt-8 flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setIsRechargeOpen(false);
                  setRechargeAmount('');
                  setRechargeError('');
                }}
                className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const amount = parseFloat(rechargeAmount);
                  if (isNaN(amount) || amount <= 0) {
                    setRechargeError('Please enter a valid amount greater than 0.');
                    return;
                  }
                  setWalletBalance(prev => prev + amount);
                  setIsRechargeOpen(false);
                  setRechargeAmount('');
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                + Add Funds
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPage;