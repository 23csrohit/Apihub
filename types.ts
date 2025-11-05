import React from 'react';

export interface Category {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Api {
  name: string;
  description: string; // Short description for cards
  category: string;
  longDescription: string;
  endpoint: string;
  pricing: string;
  documentationUrl: string;
  usageExample: {
    language: string;
    code: string;
  };
}