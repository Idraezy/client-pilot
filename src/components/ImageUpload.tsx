// components/ImageUpload.tsx - NEW COMPONENT
import React, { useRef, useState } from 'react';
import { Upload, X, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

interface ImageUploadProps {
  currentImage?: string;
  onImageChange: (base64Image: string | undefined) => void;
  name: string;
}

export function ImageUpload({ currentImage, onImageChange, name }: ImageUploadProps) {
  const { darkMode } = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | undefined>(currentImage);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size should be less than 2MB');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreview(base64String);
        onImageChange(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setPreview(undefined);
    onImageChange(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt={name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleRemove}
              className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              type="button"
            >
              <X size={16} />
            </motion.button>
          </div>
        ) : (
          <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
            darkMode ? 'bg-gray-700' : 'bg-gray-100'
          } border-2 border-dashed ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
            <User size={32} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="profile-image-upload"
      />

      <motion.label
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        htmlFor="profile-image-upload"
        className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
          darkMode 
            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Upload size={18} />
        <span className="text-sm font-medium">
          {preview ? 'Change Photo' : 'Upload Photo'}
        </span>
      </motion.label>

      <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} text-center`}>
        JPG, PNG or GIF (Max 2MB)
      </p>
    </div>
  );
}