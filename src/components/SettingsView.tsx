// components/SettingsView.tsx
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

export function SettingsView() {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6"
    >
      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Settings
      </h2>
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg max-w-2xl`}>
        <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          About ClientPilot
        </h3>
        <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          ClientPilot is a simple yet powerful client management tool designed for freelancers 
          and small businesses. All your data is stored locally in your browser.
        </p>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border-l-4 border-blue-500`}>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <strong>Note:</strong> This is a frontend-only demo. Your data persists in localStorage 
            and will be cleared if you clear your browser data.
          </p>
        </div>
      </div>
    </motion.div>
  );
}