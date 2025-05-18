
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ResellerApplication from '@/components/ResellerApplication';

const Profile = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-beauty-800">Not logged in</h2>
          <p className="text-gray-600 mt-2">Please sign in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-serif text-beauty-800">My Profile</h1>
          <Separator className="my-4" />
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="mt-1">{user.email}</p>
            </div>
            
            <div className="pt-2">
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
        
        <ResellerApplication />
      </div>
    </div>
  );
};

export default Profile;
