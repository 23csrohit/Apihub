import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, description, icon: Icon } = category;
  return (
    <div className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-api-blue hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="flex items-center justify-center h-16 w-16 bg-api-blue/10 rounded-full group-hover:bg-api-orange/20 transition-colors duration-300">
        <Icon className="h-8 w-8 text-api-blue group-hover:text-api-orange transition-colors duration-300" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-gray-800">{name}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
      <a href="#" className="mt-4 inline-block font-semibold text-api-blue group-hover:text-api-orange transition-colors duration-300">
        View APIs &rarr;
      </a>
    </div>
  );
};

export default CategoryCard;
