
import React from 'react';

const Collections = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg border">
          <h3 className="text-xl font-medium mb-4">Summer Glow</h3>
          <p className="text-gray-600 mb-4">Our brightest collection featuring luminous products for that perfect summer radiance.</p>
          <div className="text-beauty-600 font-medium">5 Products</div>
        </div>
        <div className="bg-white p-8 rounded-lg border">
          <h3 className="text-xl font-medium mb-4">Evening Luxury</h3>
          <p className="text-gray-600 mb-4">Sophisticated products for your nighttime beauty routine.</p>
          <div className="text-beauty-600 font-medium">7 Products</div>
        </div>
        <div className="bg-white p-8 rounded-lg border">
          <h3 className="text-xl font-medium mb-4">Daily Essentials</h3>
          <p className="text-gray-600 mb-4">Everything you need for your everyday beauty routine.</p>
          <div className="text-beauty-600 font-medium">10 Products</div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
