import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const Logo = ({ size = "normal" }) => {
  const sizeClasses = size === "small" ? "w-8 h-8" : "w-10 h-10";
  const iconClasses = size === "small" ? "w-6 h-6" : "w-8 h-8";
  const textClasses = size === "small" ? "text-lg" : "text-2xl";

  return (
    <div className="flex items-center gap-2">
      <div className={`${sizeClasses} bg-emerald-500 flex items-center justify-center rounded`}>
        <svg viewBox="0 0 24 24" className={`${iconClasses} text-white`}>
          <path d="M5 12L19 5L12 19L11 13L5 12Z" fill="currentColor"/>
        </svg>
      </div>
      <span className={`${textClasses} font-bold text-emerald-500`}>
        SendNow
      </span>
    </div>
  );
};

export default Logo;