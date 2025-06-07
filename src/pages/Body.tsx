
import React from 'react';

const Body = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">Body Care</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Body Lotions</h3>
          <p className="text-gray-600 text-sm">Moisturizing formulas for silky skin</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Body Wash</h3>
          <p className="text-gray-600 text-sm">Gentle cleansing with luxurious lather</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Scrubs</h3>
          <p className="text-gray-600 text-sm">Exfoliating treatments for smooth skin</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Body Oils</h3>
          <p className="text-gray-600 text-sm">Nourishing oils for deep hydration</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
