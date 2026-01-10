// types.ts
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  status: 'Lead' | 'Active' | 'Completed';
  notes: string;
  createdAt: string;
}

export type View = 'dashboard' | 'clients' | 'settings';

export interface Stats {
  total: number;
  active: number;
  leads: number;
  completed: number;
}