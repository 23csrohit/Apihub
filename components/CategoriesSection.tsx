import React from 'react';
import { Category } from '../types';
import CategoryCard from './CategoryCard';
import { HealthIcon, FinanceIcon, EducationIcon, TransportIcon, AgricultureIcon, UtilitiesIcon } from './icons';

const categories: Category[] = [
  { name: 'Health', description: 'APIs related to health services, hospitals, and medical data.', icon: HealthIcon },
  { name: 'Finance', description: 'Access financial data, payment gateways, and banking services.', icon: FinanceIcon },
  { name: 'Education', description: 'Integrate with educational institutions, results, and learning materials.', icon: EducationIcon },
  { name: 'Transport', description: 'APIs for vehicle registration, public transport, and logistics.', icon: TransportIcon },
  { name: 'Agriculture', description: 'Get data on crops, weather, and market prices for agriculture.', icon: AgricultureIcon },
  { name: 'Utilities', description: 'Connect with utility services like electricity, water, and gas.', icon: UtilitiesIcon },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Explore by Category</h2>
          <p className="mt-4 text-lg text-gray-600">Find the right APIs for your needs by browsing our categories.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
