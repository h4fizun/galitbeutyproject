
import React from 'react';
import Navbar from '@/components/Navbar';

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
      <footer className="mt-16 border-t py-6 bg-gray-50">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>© 2025 Ila's Beauty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UserLayout;
