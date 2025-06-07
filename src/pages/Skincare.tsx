
import React from 'react';
import { Male, Female } from 'lucide-react';

const Skincare = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">Skincare</h1>
      
      {/* Gender Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Shop by Gender</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <Male className="h-8 w-8 text-beauty-600 mr-3" />
              <h3 className="text-xl font-medium">Men's Skincare</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Targeted skincare solutions designed specifically for men's skin needs</p>
            <div className="text-beauty-600 font-medium">Explore Men's Products →</div>
          </div>
          <div className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <Female className="h-8 w-8 text-beauty-600 mr-3" />
              <h3 className="text-xl font-medium">Women's Skincare</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Comprehensive skincare range crafted for women's diverse skin concerns</p>
            <div className="text-beauty-600 font-medium">Explore Women's Products →</div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div>
        <h2 className="text-2xl font-medium mb-6">Product Categories</h2>
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
    </div>
  );
};

export default Skincare;
