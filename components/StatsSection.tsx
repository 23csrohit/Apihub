import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <p className="text-4xl font-bold text-api-blue">{value}</p>
    <p className="mt-2 text-lg text-gray-600">{label}</p>
  </div>
);

const StatsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard value="2,150+" label="Live APIs" />
          <StatCard value="15.2B+" label="Total Transactions" />
          <StatCard value="500+" label="Active Clients" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
