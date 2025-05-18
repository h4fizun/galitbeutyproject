
import React from 'react';
import { format } from 'date-fns';
import { ResellerStage } from '@/types/reseller';
import ResellerApplicationRow from './ResellerApplicationRow';
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

interface ResellerApplicationsTableProps {
  applications: Application[];
  loading: boolean;
  onStatusChange: (applicationId: string, status: string) => void;
  onResellerStageChange: (userId: string, hasStatus: boolean, stage: ResellerStage) => void;
}

const ResellerApplicationsTable: React.FC<ResellerApplicationsTableProps> = ({
  applications,
  loading,
  onStatusChange,
  onResellerStageChange
}) => {
  if (loading && applications.length === 0) {
    return <div className="text-center py-12">Loading applications...</div>;
  }

  if (applications.length === 0) {
    return <div className="text-center py-12 text-gray-500">No reseller applications found.</div>;
  }

  return (
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
          <ResellerApplicationRow 
            key={application.id}
            application={application}
            onStatusChange={onStatusChange}
            onResellerStageChange={onResellerStageChange}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default ResellerApplicationsTable;
