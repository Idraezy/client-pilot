// components/Dashboard.tsx
import { motion } from 'framer-motion';
import { Users, Check, Plus} from 'lucide-react';
import { useTheme } from '../ThemeContext';
import type { Client, Stats } from '../types';
import { StatusBadge } from './StatusBadge';

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
      className="p-6"
    >
      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${
                stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                <stat.icon size={24} />
              </div>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
              {stat.label}
            </p>
            <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Recent Clients
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewClients}
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            View All →
          </motion.button>
        </div>
        <div className="space-y-3">
          {clients.slice(0, 5).map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ x: 4 }}
              className={`flex items-center justify-between p-4 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  client.status === 'Active' ? 'bg-green-100 text-green-600' :
                  client.status === 'Lead' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {client.name[0]}
                </div>
                <div>
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {client.name}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
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