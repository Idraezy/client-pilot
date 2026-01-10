// components/EmptyState.tsx
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface EmptyStateProps {
  message: string;
  darkMode: boolean;
}

export function EmptyState({ message, darkMode }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16"
    >
      <div className={`w-24 h-24 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center mb-4`}>
        <Users size={48} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {message}
      </h3>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Try adjusting your filters or add a new client to get started
      </p>
    </motion.div>
  );
}