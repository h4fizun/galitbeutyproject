
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

type ApplicationStatus = 'none' | 'pending' | 'approved' | 'rejected';

interface ResellerInfo {
  is_reseller: boolean;
  reseller_stage: 'none' | 'brown' | 'silver' | 'gold' | null;
  application_status: ApplicationStatus;
}

const ResellerApplication = () => {
  const { user } = useAuth();
  const [resellerInfo, setResellerInfo] = useState<ResellerInfo>({
    is_reseller: false,
    reseller_stage: 'none',
    application_status: 'none'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchResellerStatus();
    }
  }, [user]);

  const fetchResellerStatus = async () => {
    try {
      setLoading(true);
      
      // Get profile data
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('is_reseller, reseller_stage')
        .eq('id', user?.id)
        .single();
      
      if (profileError) throw profileError;
      
      // Check for existing application
      const { data: applicationData, error: applicationError } = await supabase
        .from('reseller_applications')
        .select('status')
        .eq('user_id', user?.id)
        .maybeSingle();
      
      if (applicationError) throw applicationError;
      
      setResellerInfo({
        is_reseller: profileData?.is_reseller || false,
        reseller_stage: profileData?.reseller_stage || 'none',
        application_status: applicationData?.status as ApplicationStatus || 'none'
      });
    } catch (error: any) {
      toast({
        title: "Error fetching reseller information",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const applyForReseller = async () => {
    try {
      if (!user?.email) {
        toast({
          title: "Error",
          description: "Your email is not available.",
          variant: "destructive"
        });
        return;
      }

      setLoading(true);
      const { error } = await supabase
        .from('reseller_applications')
        .insert({
          user_id: user.id,
          email: user.email
        });

      if (error) throw error;

      setResellerInfo(prev => ({...prev, application_status: 'pending'}));
      
      toast({
        title: "Application submitted!",
        description: "Your reseller application is being reviewed."
      });
    } catch (error: any) {
      toast({
        title: "Error submitting application",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusDisplay = () => {
    if (resellerInfo.is_reseller) {
      const discount = resellerInfo.reseller_stage === 'brown' ? '10%' :
                       resellerInfo.reseller_stage === 'silver' ? '15%' :
                       resellerInfo.reseller_stage === 'gold' ? '20%' : '0%';
      
      return (
        <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-md">
          <p className="font-medium text-green-800">
            You are a {resellerInfo.reseller_stage} tier reseller
          </p>
          <p className="text-green-600">Your discount: {discount}</p>
        </div>
      );
    }
    
    switch (resellerInfo.application_status) {
      case 'pending':
        return (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-100 rounded-md">
            <p className="font-medium text-yellow-800">Application pending</p>
            <p className="text-yellow-600">We're reviewing your application.</p>
          </div>
        );
      case 'rejected':
        return (
          <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-md">
            <p className="font-medium text-red-800">Application rejected</p>
            <p className="text-red-600">Please contact support for more information.</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-serif text-beauty-800">Reseller Program</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Info className="h-4 w-4" />
                <span className="sr-only">Info</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Join our reseller program to get discounts:<br />
                 Brown: 10%, Silver: 15%, Gold: 20%</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <Separator className="my-4" />
      
      <p className="text-gray-600 mb-4">
        Join our exclusive reseller program and enjoy special discounts on all our products.
      </p>
      
      {getStatusDisplay()}
      
      {!resellerInfo.is_reseller && resellerInfo.application_status === 'none' && (
        <Button 
          onClick={applyForReseller} 
          disabled={loading}
          className="mt-4"
        >
          Apply to become a reseller
        </Button>
      )}
    </div>
  );
};

export default ResellerApplication;
