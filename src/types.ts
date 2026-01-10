// types.ts - UPDATED
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  status: 'Lead' | 'Active' | 'Completed';
  notes: string;
  createdAt: string;
  profileImage?: string; // NEW: Base64 encoded image or URL
}

export type View = 'dashboard' | 'clients' | 'settings';

export interface Stats {
  total: number;
  active: number;
  leads: number;
  completed: number;
}