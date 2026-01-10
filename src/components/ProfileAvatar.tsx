// components/ProfileAvatar.tsx - NEW COMPONENT
// import React from 'react';
// import { User } from 'lucide-react';

interface ProfileAvatarProps {
  name: string;
  profileImage?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'Lead' | 'Active' | 'Completed';
}

export function ProfileAvatar({ name, profileImage, size = 'md', status }: ProfileAvatarProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl',
    xl: 'w-24 h-24 text-3xl'
  };

  const statusColors = {
    Lead: 'bg-yellow-100 text-yellow-600',
    Active: 'bg-green-100 text-green-600',
    Completed: 'bg-gray-100 text-gray-600'
  };

  const bgColor = status ? statusColors[status] : 'bg-blue-100 text-blue-600';

  return (
    <div className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold overflow-hidden ${!profileImage && bgColor}`}>
      {profileImage ? (
        <img 
          src={profileImage} 
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to initials if image fails to load
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = name[0].toUpperCase();
          }}
        />
      ) : (
        name[0].toUpperCase()
      )}
    </div>
  );
}