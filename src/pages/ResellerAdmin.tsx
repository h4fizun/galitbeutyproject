
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

type ResellerStage = 'none' | 'brown' | 'silver' | 'gold';

interface Application {
  id: string;
  email: string;
  status: string;
  created_at: string;
  user_id: string;
  profile?: {
    first_name: string | null;
    last_name: string | null;
    reseller_stage: ResellerStage | null;
  } | null;
}

const ResellerAdmin = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminEmails] = useState(['admin@example.com']); // Replace with actual admin emails

  const isAdmin = user && adminEmails.includes(user.email || '');

  useEffect(() => {
    if (user && isAdmin) {
      fetchApplications();
    }
  }, [user, isAdmin]);

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

  if (!user || !isAdmin) {
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
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-serif text-beauty-800 mb-8">Reseller Applications</h1>
      
      {loading && applications.length === 0 ? (
        <div className="text-center py-12">Loading applications...</div>
      ) : applications.length === 0 ? (
        <div className="text-center py-12 text-gray-500">No reseller applications found.</div>
      ) : (
        <Table>
          <TableCaption>List of reseller applications</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reseller Tier</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell className="font-medium">{application.email}</TableCell>
                <TableCell>
                  {application.profile ? `${application.profile.first_name || ''} ${application.profile.last_name || ''}`.trim() || 'N/A' : 'N/A'}
                </TableCell>
                <TableCell>
                  {format(new Date(application.created_at), 'MMM dd, yyyy')}
                </TableCell>
                <TableCell>
                  <Badge variant={
                    application.status === 'approved' ? 'default' :
                    application.status === 'rejected' ? 'destructive' : 'secondary'
                  }>
                    {application.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Select 
                    defaultValue={application.profile?.reseller_stage || 'none'}
                    onValueChange={(value: ResellerStage) => updateResellerStatus(
                      application.user_id, 
                      value !== 'none', 
                      value
                    )}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="brown">Brown (10%)</SelectItem>
                      <SelectItem value="silver">Silver (15%)</SelectItem>
                      <SelectItem value="gold">Gold (20%)</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  {application.status !== 'approved' && (
                    <Button 
                      size="sm" 
                      variant="default"
                      onClick={() => updateApplicationStatus(application.id, 'approved')}
                      className="mr-2"
                    >
                      Approve
                    </Button>
                  )}
                  {application.status !== 'rejected' && (
                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => updateApplicationStatus(application.id, 'rejected')}
                    >
                      Reject
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ResellerAdmin;
