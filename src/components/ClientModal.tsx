// components/ClientModal.tsx - UPDATED
import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Edit2, Trash2, Calendar } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import type { Client } from '../types';
import { ImageUpload } from './ImageUpload';

interface ClientModalProps {
  client: Client;
  onClose: () => void;
  onUpdate: (client: Client) => void;
  onDelete: (id: string) => void;
}

export function ClientModal({ client, onClose, onUpdate, onDelete }: ClientModalProps) {
  const { darkMode } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(client);

  const handleSave = () => {
    onUpdate(formData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this client?')) {
      onDelete(client.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Client Details
            </h3>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsEditing(!isEditing)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
              >
                <Edit2 size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDelete}
                className="p-2 rounded-lg bg-red-100 text-red-600"
              >
                <Trash2 size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
              >
                <X size={20} />
              </motion.button>
            </div>
          </div>

          <div className="space-y-6">
            {/* NEW: Profile Image Section */}
            {isEditing ? (
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border-2 border-dashed ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <ImageUpload
                  currentImage={formData.profileImage}
                  onImageChange={(image) => setFormData({ ...formData, profileImage: image })}
                  name={formData.name}
                />
              </div>
            ) : (
              formData.profileImage && (
                <div className="flex justify-center">
                  <img
                    src={formData.profileImage}
                    alt={formData.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                  />
                </div>
              )
            )}

            <div>
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={!isEditing}
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-200 text-gray-900'
                } ${!isEditing && 'opacity-60'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={!isEditing}
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-200 text-gray-900'
                } ${!isEditing && 'opacity-60'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={!isEditing}
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-200 text-gray-900'
                } ${!isEditing && 'opacity-60'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Company
              </label>
              <input
                type="text"
                value={formData.company || ''}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                disabled={!isEditing}
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-200 text-gray-900'
                } ${!isEditing && 'opacity-60'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Client['status'] })}
                disabled={!isEditing}
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-200 text-gray-900'
                } ${!isEditing && 'opacity-60'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="Lead">Lead</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                disabled={!isEditing}
                rows={5}
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-200 text-gray-900'
                } ${!isEditing && 'opacity-60'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <Calendar size={16} />
              <span>Created: {new Date(formData.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {isEditing && (
            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
              >
                Save Changes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setFormData(client);
                  setIsEditing(false);
                }}
                className={`flex-1 px-4 py-2 rounded-lg font-medium ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Cancel
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}