
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, userRole } = useAuth();
  const navigate = useNavigate();
  const isAdmin = userRole === 'admin';

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-beauty-800">Access Denied</h2>
          <p className="text-gray-600 mt-2">You don't have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-beauty-800 text-white p-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-red-500 hover:bg-red-600 border-none text-white">
              Admin View
            </Badge>
            <h1 className="text-xl font-serif">Ila's Beauty Admin</h1>
          </div>
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="text-white">Dashboard</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => navigate('/admin')}>Admin Dashboard</MenubarItem>
                <MenubarItem onClick={() => navigate('/reseller-admin')}>Reseller Admin</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="text-white">Store</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => navigate('/')}>Return to Store</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <div className="container mx-auto py-6 px-4">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
