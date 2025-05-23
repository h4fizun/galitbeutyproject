
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { ResellerStage, ResellerApplication } from '@/types/reseller';
import ResellerApplicationsTable from '@/components/reseller/ResellerApplicationsTable';

const ResellerAdmin = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState<ResellerApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchApplications();
    }
  }, [user]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      // First get all applications
      const { data: applicationsData, error: applicationsError } = await supabase
        .from('reseller_applications')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (applicationsError) throw applicationsError;
      
      // Then for each application, get the profile data
      const applicationsWithProfiles = await Promise.all((applicationsData || []).map(async (app) => {
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('first_name, last_name, reseller_stage')
          .eq('id', app.user_id)
          .single();
        
        return {
          ...app,
          profile: profileError ? null : profileData
        };
      }));
      
      setApplications(applicationsWithProfiles);
    } catch (error: any) {
      toast({
        title: "Error fetching applications",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (applicationId: string, status: string) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('reseller_applications')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', applicationId);
      
      if (error) throw error;
      
      // Update the applications list
      setApplications(applications.map(app => 
        app.id === applicationId ? { ...app, status } : app
      ));
      
      toast({
        title: "Status updated",
        description: `Application status changed to ${status}.`
      });
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateResellerStatus = async (userId: string, status: boolean, stage: ResellerStage) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('profiles')
        .update({ 
          is_reseller: status,
          reseller_stage: stage,
          reseller_approved_at: status ? new Date().toISOString() : null,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);
      
      if (error) throw error;
      
      // Update the applications list with the new stage
      setApplications(applications.map(app => 
        app.user_id === userId 
          ? { 
              ...app, 
              profile: app.profile ? {
                ...app.profile,
                reseller_stage: stage
              } : {
                first_name: null,
                last_name: null,
                reseller_stage: stage
              }
            } 
          : app
      ));
      
      toast({
        title: "Reseller status updated",
        description: status 
          ? `User is now a ${stage} tier reseller.` 
          : "User is no longer a reseller."
      });
    } catch (error: any) {
      toast({
        title: "Error updating reseller status",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-serif text-beauty-800 mb-8">Reseller Applications</h1>
      
      <ResellerApplicationsTable
        applications={applications}
        loading={loading}
        onStatusChange={updateApplicationStatus}
        onResellerStageChange={updateResellerStatus}
      />
    </div>
  );
};

export default ResellerAdmin;
