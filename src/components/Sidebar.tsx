// components/Sidebar.tsx - RESPONSIVE UPDATE

import { motion, AnimatePresence } from 'framer-motion';
import { Users, LayoutDashboard, Settings, X } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import type { View, Stats } from '../types';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  stats: Stats;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function Sidebar({ 
  currentView, 
  setCurrentView, 
  stats, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}: SidebarProps) {
  const { darkMode } = useTheme();

  const navItems = [
    { id: 'dashboard' as View, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'clients' as View, label: 'Clients', icon: Users },
    { id: 'settings' as View, label: 'Settings', icon: Settings }
  ];

  const handleNavClick = (view: View) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <>
      {/* Desktop Sidebar - Hidden on mobile */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className={`hidden md:flex md:flex-col w-64 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-r`}
      >
        <div className="p-6">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Client<span className="text-blue-500">Pilot</span>
          </h1>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
            Manage with ease
          </p>
        </div>

        <nav className="flex-1 px-3">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                currentView === item.id
                  ? 'bg-blue-500 text-white'
                  : darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        <div className={`p-4 m-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
          <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Quick Stats
          </p>
          <div className="space-y-1 text-sm">
            <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Total Clients: <span className="font-semibold">{stats.total}</span>
            </div>
            <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Active: <span className="font-semibold text-green-500">{stats.active}</span>
            </div>
            <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Leads: <span className="font-semibold text-yellow-500">{stats.leads}</span>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Sidebar */}
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed left-0 top-0 bottom-0 w-72 ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border-r z-50 md:hidden flex flex-col`}
            >
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Client<span className="text-blue-500">Pilot</span>
                  </h1>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                    Manage with ease
                  </p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-2 rounded-lg ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <X size={20} />
                </motion.button>
              </div>

              <nav className="flex-1 px-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                      currentView === item.id
                        ? 'bg-blue-500 text-white'
                        : darkMode
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </nav>

              <div className={`p-4 m-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Quick Stats
                </p>
                <div className="space-y-1 text-sm">
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Total Clients: <span className="font-semibold">{stats.total}</span>
                  </div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Active: <span className="font-semibold text-green-500">{stats.active}</span>
                  </div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Leads: <span className="font-semibold text-yellow-500">{stats.leads}</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}