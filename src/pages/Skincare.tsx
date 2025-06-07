
import React from 'react';

const Skincare = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">Skincare</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Moisturizers</h3>
          <p className="text-gray-600 text-sm">Hydrating formulas for all skin types</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Cleansers</h3>
          <p className="text-gray-600 text-sm">Gentle cleansing for daily use</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Serums</h3>
          <p className="text-gray-600 text-sm">Targeted treatments for specific concerns</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Sunscreens</h3>
          <p className="text-gray-600 text-sm">Daily protection from UV rays</p>
        </div>
      </div>
    </div>
  );
};

export default Skincare;
