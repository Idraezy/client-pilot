// mockData.ts - UPDATED
import type { Client } from './types';

export const MOCK_CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@techstart.com',
    phone: '+1 (555) 123-4567',
    company: 'TechStart Inc',
    status: 'Active',
    notes: 'Working on website redesign project. Prefers email communication. Next meeting scheduled for next Tuesday.',
    createdAt: '2024-01-15T10:30:00Z',
    profileImage: 'https://i.pravatar.cc/150?img=5' // Sample profile image
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'mchen@innovate.io',
    phone: '+1 (555) 234-5678',
    company: 'Innovate Solutions',
    status: 'Lead',
    notes: 'Interested in digital marketing services. Requested proposal. Budget: $5k-10k.',
    createdAt: '2024-01-18T14:20:00Z',
    profileImage: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.r@gmail.com',
    phone: '+1 (555) 345-6789',
    status: 'Completed',
    notes: 'Logo design project completed successfully. Very satisfied with results. May return for branding work.',
    createdAt: '2023-12-10T09:15:00Z',
    profileImage: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: '4',
    name: 'David Park',
    email: 'david@greenleaf.com',
    phone: '+1 (555) 456-7890',
    company: 'Greenleaf Consulting',
    status: 'Active',
    notes: 'Monthly retainer for content creation. Invoiced on the 1st of each month. Very responsive.',
    createdAt: '2023-11-05T16:45:00Z',
    profileImage: 'https://i.pravatar.cc/150?img=13'
  },
  {
    id: '5',
    name: 'Jessica Martinez',
    email: 'jmartinez@startup.co',
    phone: '+1 (555) 567-8901',
    company: 'Startup Co',
    status: 'Lead',
    notes: 'Referred by Sarah Johnson. Looking for complete brand identity package. Following up next week.',
    createdAt: '2024-01-20T11:00:00Z',
    profileImage: 'https://i.pravatar.cc/150?img=10'
  }
];