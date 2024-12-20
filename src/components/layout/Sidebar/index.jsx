import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import MenuItem from '../../shared/MenuItem';
import { MENU_ITEMS } from '../../../utils/constants';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const { isDark } = useTheme();

  return (
    <div className={`w-72 p-6 fixed h-full overflow-y-auto border-r ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <nav className="space-y-2">
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            id={item.id}
            active={activeItem === item.id}
            onClick={setActiveItem}
            isDark={isDark}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;