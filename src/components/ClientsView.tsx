// components/ClientsView.tsx - RESPONSIVE UPDATE

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import type { Client } from '../types';
import { StatusBadge } from './StatusBadge';
import { EmptyState } from './EmptyState';
import { ProfileAvatar } from './ProfileAvatar';

interface ClientsViewProps {
  clients: Client[];
  statusFilter: 'All' | Client['status'];
  setStatusFilter: (filter: 'All' | Client['status']) => void;
  onSelectClient: (client: Client) => void;
}

export function ClientsView({ 
  clients, 
  statusFilter, 
  setStatusFilter, 
  onSelectClient 
}: ClientsViewProps) {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-4 md:p-6"
    >
      {/* Header with Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Clients
        </h2>
        
        {/* Filter Buttons - Scrollable on small screens */}
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
          {['All', 'Lead', 'Active', 'Completed'].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStatusFilter(filter as any)}
              className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap text-sm md:text-base ${
                statusFilter === filter
                  ? 'bg-blue-500 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>

      {clients.length === 0 ? (
        <EmptyState message="No clients found" darkMode={darkMode} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => onSelectClient(client)}
              className={`p-4 md:p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <ProfileAvatar 
                  name={client.name}
                  profileImage={client.profileImage}
                  size="md"
                  status={client.status}
                />
                <StatusBadge status={client.status} />
              </div>
              <h3 className={`text-base md:text-lg font-bold mb-1 truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {client.name}
              </h3>
              {client.company && (
                <p className={`text-sm mb-3 truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {client.company}
                </p>
              )}
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Mail size={14} className="md:w-4 md:h-4 flex-shrink-0" />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className={`flex items-center gap-2 text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Phone size={14} className="md:w-4 md:h-4 flex-shrink-0" />
                  <span className="truncate">{client.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}