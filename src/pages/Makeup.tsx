
import React from 'react';

const Makeup = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">Makeup</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Foundation</h3>
          <p className="text-gray-600 text-sm">Perfect coverage for every skin tone</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Lipstick</h3>
          <p className="text-gray-600 text-sm">Bold colors and long-lasting wear</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Eyeshadow</h3>
          <p className="text-gray-600 text-sm">Vibrant palettes for every look</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-medium mb-2">Mascara</h3>
          <p className="text-gray-600 text-sm">Volume and length for beautiful lashes</p>
        </div>
      </div>
    </div>
  );
};

export default Makeup;
