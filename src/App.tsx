
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import ResellerAdmin from "./pages/ResellerAdmin";
import AdminDashboard from "./pages/AdminDashboard";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Skincare from "./pages/Skincare";
import Makeup from "./pages/Makeup";
import Body from "./pages/Body";
import Collections from "./pages/Collections";
import About from "./pages/About";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<UserLayout><Index /></UserLayout>} />
            <Route path="/skincare" element={<UserLayout><Skincare /></UserLayout>} />
            <Route path="/makeup" element={<UserLayout><Makeup /></UserLayout>} />
            <Route path="/body" element={<UserLayout><Body /></UserLayout>} />
            <Route path="/collections" element={<UserLayout><Collections /></UserLayout>} />
            <Route path="/about" element={<UserLayout><About /></UserLayout>} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<UserLayout><Checkout /></UserLayout>} />
            <Route path="/order-success" element={<UserLayout><OrderSuccess /></UserLayout>} />
            <Route path="/profile" element={<ProtectedRoute><UserLayout><Profile /></UserLayout></ProtectedRoute>} />
            
            {/* Admin Routes */}
            <Route path="/reseller-admin" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout><ResellerAdmin /></AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminLayout><AdminDashboard /></AdminLayout>
              </ProtectedRoute>
            } />
            
            {/* Catch-all Route */}
            <Route path="*" element={<UserLayout><NotFound /></UserLayout>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
