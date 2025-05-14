
import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="border-b border-gray-100 py-4 px-4 md:px-8 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-serif text-2xl font-medium text-beauty-800">
            Ila's Beauty
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#" className="text-gray-700 hover:text-beauty-700 transition-colors">Skincare</Link>
          <Link to="#" className="text-gray-700 hover:text-beauty-700 transition-colors">Makeup</Link>
          <Link to="#" className="text-gray-700 hover:text-beauty-700 transition-colors">Body</Link>
          <Link to="#" className="text-gray-700 hover:text-beauty-700 transition-colors">Collections</Link>
          <Link to="#" className="text-gray-700 hover:text-beauty-700 transition-colors">About</Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="p-2" aria-label="Shopping cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button 
            variant={user ? "outline" : "default"} 
            className="flex items-center space-x-2" 
            onClick={handleAuthAction}
          >
            <User className="h-4 w-4" />
            <span>{user ? 'Sign Out' : 'Sign In'}</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
