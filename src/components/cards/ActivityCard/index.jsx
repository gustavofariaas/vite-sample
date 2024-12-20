import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const ActivityCard = ({ title, activities }) => {
  const { isDark } = useTheme();

  return (
    <div className={`p-6 rounded-xl border transition-colors
      ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}
    `}>
      <h3 className={`text-lg font-medium mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
        {title}
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              {activity.text}
            </p>
            <span className={`text-sm ml-auto ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;