// components/StatusBadge.tsx
import { motion } from 'framer-motion';
import type { Client } from '../types';

interface StatusBadgeProps {
  status: Client['status'];
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    Lead: 'bg-yellow-100 text-yellow-700',
    Active: 'bg-green-100 text-green-700',
    Completed: 'bg-gray-100 text-gray-700'
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