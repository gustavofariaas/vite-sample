import React, { useState } from 'react';
import { Settings, User, LogOut, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import Logo from '../../shared/Logo';

const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    onClick={onToggle}
    className={`
      p-2 rounded-lg transition-colors
      ${isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}
    `}
  >
    {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
  </button>
);

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className={`h-16 fixed top-0 right-0 left-0 z-30 border-b transition-colors
      ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
    `}>
      <div className="flex items-center justify-between h-full px-6">
        <Logo size="small" />

        <div className="flex items-center gap-6">
          <div className="relative">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className={`transition-colors
                ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'}
              `}
            >
              <Settings className="w-6 h-6" />
            </button>

            {showSettings && (
              <div className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg border py-1 z-50
                ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}
              `}>
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                      Modo Escuro
                    </span>
                    <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className={`flex items-center gap-2 transition-colors
                ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'}
              `}
            >
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="font-medium">João Silva</span>
            </button>

            {showProfileMenu && (
              <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border py-1 z-50
                ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}
              `}>
                <button className={`w-full px-4 py-2 text-left flex items-center gap-2
                  ${isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'}
                `}>
                  <User className="w-4 h-4" />
                  Perfil
                </button>
                <button className={`w-full px-4 py-2 text-left flex items-center gap-2
                  ${isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'}
                `}>
                  <Settings className="w-4 h-4" />
                  Configurações
                </button>
                <hr className={isDark ? 'border-gray-700' : 'border-gray-100'} />
                <button className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-50 flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;