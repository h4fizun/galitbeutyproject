
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ResellerStage } from "@/types/reseller";
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface ResellerData {
  id: string;
  user_id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  reseller_stage: ResellerStage | null;
  total_orders: number;
  total_sales: number;
}

const ResellerMonitoring = () => {
  const [resellers, setResellers] = useState<ResellerData[]>([]);
  const [loading, setLoading] = useState(true);

  // Sample data for now - in a real app this would come from the database
  const sampleResellers: ResellerData[] = [
    {
      id: '1',
      user_id: 'u1',
      email: 'john@example.com',
      first_name: 'John',
      last_name: 'Doe',
      reseller_stage: 'brown',
      total_orders: 12,
      total_sales: 560.75,
    },
    {
      id: '2',
      user_id: 'u2',
      email: 'sarah@example.com',
      first_name: 'Sarah',
      last_name: 'Johnson',
      reseller_stage: 'silver',
      total_orders: 28,
      total_sales: 1450.25,
    },
    {
      id: '3',
      user_id: 'u3',
      email: 'michael@example.com',
      first_name: 'Michael',
      last_name: 'Smith',
      reseller_stage: 'gold',
      total_orders: 45,
      total_sales: 3200.50,
    },
  ];

  useEffect(() => {
    // In a real implementation, fetch reseller data from the database
    setResellers(sampleResellers);
    setLoading(false);
  }, []);

  const getStageColor = (stage: ResellerStage | null): string => {
    switch (stage) {
      case 'brown':
        return 'bg-amber-100 text-amber-800';
      case 'silver':
        return 'bg-gray-100 text-gray-800';
      case 'gold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading reseller data...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Reseller Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Sales</TableHead>
                <TableHead>Discount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resellers.map((reseller) => {
                const discount = reseller.reseller_stage === 'brown' ? '10%' :
                                reseller.reseller_stage === 'silver' ? '15%' :
                                reseller.reseller_stage === 'gold' ? '20%' : '0%';
                
                return (
                  <TableRow key={reseller.id}>
                    <TableCell>
                      {reseller.first_name} {reseller.last_name}
                    </TableCell>
                    <TableCell>{reseller.email}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStageColor(reseller.reseller_stage)}`}>
                        {reseller.reseller_stage || 'None'}
                      </span>
                    </TableCell>
                    <TableCell>{reseller.total_orders}</TableCell>
                    <TableCell>${reseller.total_sales.toFixed(2)}</TableCell>
                    <TableCell>{discount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResellerMonitoring;
