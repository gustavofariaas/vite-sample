import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const MenuItem = ({ icon: Icon, text, id, active, onClick }) => {
  const { isDark } = useTheme();

  return (
    <button
      onClick={() => onClick(id)}
      className={`
        w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200
        ${active 
          ? isDark 
            ? 'bg-gray-700 text-emerald-400' 
            : 'bg-emerald-50 text-emerald-600'
          : isDark
            ? 'text-gray-400 hover:bg-gray-700'
            : 'text-gray-600 hover:bg-gray-100'
        }
      `}
    >
      <div className={`
        p-2 rounded-lg 
        ${active 
          ? 'bg-emerald-500 text-white' 
          : isDark 
            ? 'bg-gray-600 text-gray-300' 
            : 'bg-gray-200 text-gray-600'
        }
      `}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium">{text}</span>
    </button>
  );
};

export default MenuItem;