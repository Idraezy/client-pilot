// components/Dashboard.tsx - RESPONSIVE UPDATE

import { motion } from 'framer-motion';
import { Users, Check, Plus } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import type { Client, Stats } from '../types';
import { StatusBadge } from './StatusBadge';
import { ProfileAvatar } from './ProfileAvatar';

interface DashboardProps {
  stats: Stats;
  clients: Client[];
  onViewClients: () => void;
}

export function Dashboard({ stats, clients, onViewClients }: DashboardProps) {
  const { darkMode } = useTheme();

  const statCards = [
    { label: 'Total Clients', value: stats.total, color: 'blue', icon: Users },
    { label: 'Active Projects', value: stats.active, color: 'green', icon: Check },
    { label: 'New Leads', value: stats.leads, color: 'yellow', icon: Plus },
    { label: 'Completed', value: stats.completed, color: 'gray', icon: Check }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-4 md:p-6"
    >
      <h2 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Dashboard
      </h2>

      {/* Stat Cards - Responsive Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={`p-4 md:p-6 rounded-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className={`p-2 md:p-3 rounded-lg ${
                stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                <stat.icon size={20} className="md:w-6 md:h-6" />
              </div>
            </div>
            <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
              {stat.label}
            </p>
            <p className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Recent Clients */}
      <div className={`p-4 md:p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg md:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recent Clients
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewClients}
            className="text-sm md:text-base text-blue-500 hover:text-blue-600 font-medium"
          >
            View All →
          </motion.button>
        </div>
        <div className="space-y-2 md:space-y-3">
          {clients.slice(0, 5).map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ x: 4 }}
              className={`flex items-center justify-between p-3 md:p-4 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                <ProfileAvatar 
                  name={client.name}
                  profileImage={client.profileImage}
                  size="sm"
                  status={client.status}
                />
                <div className="min-w-0 flex-1">
                  <p className={`font-medium truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {client.name}
                  </p>
                  <p className={`text-xs md:text-sm truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {client.company || client.email}
                  </p>
                </div>
              </div>
              <StatusBadge status={client.status} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}