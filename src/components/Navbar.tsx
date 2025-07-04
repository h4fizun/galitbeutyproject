
import React from 'react';
import { ShoppingBasket, User, Settings, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { user, userRole, signOut } = useAuth();
  const navigate = useNavigate();
  const isAdmin = userRole === 'admin';

  const handleAuthAction = () => {
    if (!user) {
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
          <Link to="/skincare" className="text-gray-700 hover:text-beauty-700 transition-colors">Skincare</Link>
          <Link to="/makeup" className="text-gray-700 hover:text-beauty-700 transition-colors">Makeup</Link>
          <Link to="/body" className="text-gray-700 hover:text-beauty-700 transition-colors">Body</Link>
          <Link to="/collections" className="text-gray-700 hover:text-beauty-700 transition-colors">Collections</Link>
          <Link to="/about" className="text-gray-700 hover:text-beauty-700 transition-colors">About</Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="p-2" aria-label="Shopping cart">
            <ShoppingBasket className="h-5 w-5" />
          </Button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  {isAdmin ? (
                    <>
                      <Shield className="h-4 w-4 text-red-500" />
                      <span>Admin</span>
                    </>
                  ) : (
                    <>
                      <User className="h-4 w-4" />
                      <span>Account</span>
                    </>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {isAdmin ? 
                    <div className="flex items-center gap-2">
                      My Account <Badge variant="destructive" className="ml-2">Admin</Badge>
                    </div> : 
                    "My Account"
                  }
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')}>Profile</DropdownMenuItem>
                {isAdmin && (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/admin')}>
                      <Settings className="h-4 w-4 mr-2" /> Admin Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/reseller-admin')}>
                      Reseller Admin
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="default"
              className="flex items-center space-x-2" 
              onClick={handleAuthAction}
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
