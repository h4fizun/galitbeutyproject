
export type ResellerStage = 'none' | 'brown' | 'silver' | 'gold';

export interface ResellerApplication {
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
