import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

const StatCard = ({ icon: Icon, title, value, growth }) => {
  const { isDark } = useTheme();

  return (
    <div className={`p-6 rounded-xl border flex items-start justify-between hover:shadow-md transition-all
      ${isDark 
        ? 'bg-gray-800 border-gray-700 shadow-gray-900' 
        : 'bg-white border-gray-100 shadow-gray-100'
      }
    `}>
      <div>
        <p className={`mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{value}</h3>
        <div className="flex items-center gap-1 text-emerald-500">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">{growth}%</span>
        </div>
      </div>
      <div className="p-4 rounded-lg bg-emerald-500">
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default StatCard;