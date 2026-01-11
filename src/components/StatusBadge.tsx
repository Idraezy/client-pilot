// components/StatusBadge.tsx
import { motion } from 'framer-motion';
import type { Client } from '../types';

interface StatusBadgeProps {
  status: Client['status'];
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    Lead: 'bg-amber-900/40 text-amber-300',
    Active: 'bg-blue-900/40 text-blue-300',
    Completed: 'bg-green-900/40 text-green-300'
  };

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}
    >
      {status}
    </motion.span>
  );
}