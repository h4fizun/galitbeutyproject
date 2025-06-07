
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif mb-8">About Ila's Beauty</h1>
        
        <div className="prose prose-gray max-w-none">
          <div className="bg-white p-8 rounded-lg border mb-8">
            <h2 className="text-2xl font-medium mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a passion for natural beauty and self-care, Ila's Beauty has been dedicated to creating premium skincare and cosmetic products that enhance your natural radiance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every product in our collection is carefully formulated with the finest ingredients, ensuring that you receive the highest quality beauty solutions for your daily routine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-medium mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible luxury beauty products that make everyone feel confident and beautiful in their own skin.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-medium mb-3">Our Values</h3>
              <p className="text-gray-600">
                Quality, sustainability, and inclusivity are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
