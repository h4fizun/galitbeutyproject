
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-gray-100 py-4 px-4 md:px-8 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="font-serif text-2xl font-medium text-beauty-800">
            Ila's Beauty
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-beauty-700 transition-colors">Skincare</a>
          <a href="#" className="text-gray-700 hover:text-beauty-700 transition-colors">Makeup</a>
          <a href="#" className="text-gray-700 hover:text-beauty-700 transition-colors">Body</a>
          <a href="#" className="text-gray-700 hover:text-beauty-700 transition-colors">Collections</a>
          <a href="#" className="text-gray-700 hover:text-beauty-700 transition-colors">About</a>
        </div>
        
        <div className="flex items-center">
          <Button variant="ghost" className="p-2 mr-2" aria-label="Shopping cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
