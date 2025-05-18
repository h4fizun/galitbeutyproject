
import React from 'react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ResellerStage } from '@/types/reseller';
import { TableRow, TableCell } from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ApplicationRowProps {
  application: {
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
  };
  onStatusChange: (applicationId: string, status: string) => void;
  onResellerStageChange: (userId: string, hasStatus: boolean, stage: ResellerStage) => void;
}

const ResellerApplicationRow: React.FC<ApplicationRowProps> = ({ 
  application, 
  onStatusChange,
  onResellerStageChange
}) => {
  return (
    <TableRow>
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
          onValueChange={(value: ResellerStage) => onResellerStageChange(
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
            onClick={() => onStatusChange(application.id, 'approved')}
            className="mr-2"
          >
            Approve
          </Button>
        )}
        {application.status !== 'rejected' && (
          <Button 
            size="sm" 
            variant="destructive"
            onClick={() => onStatusChange(application.id, 'rejected')}
          >
            Reject
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ResellerApplicationRow;
