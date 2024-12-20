import React, { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import StatCard from './components/cards/StatCard';
import ActivityCard from './components/cards/ActivityCard';
import { MENU_ITEMS, MOCK_ACTIVITIES } from './utils/constants';
import { useTheme } from './contexts/ThemeContext';
import { MessageCircle, Mic, Image, FileText, Filter } from 'lucide-react';

const App = () => {
  const [activeItem, setActiveItem] = useState('início');
  const { isDark } = useTheme();

  const stats = [
    { icon: MessageCircle, title: 'Mensagens', value: '1,234', growth: '8.5' },
    { icon: Mic, title: 'Áudios', value: '846', growth: '12.3' },
    { icon: Image, title: 'Mídias', value: '2,157', growth: '5.7' },
    { icon: FileText, title: 'Documentos', value: '427', growth: '15.2' },
    { icon: Filter, title: 'Funis', value: '12', growth: '3.8' }
  ];

  return (
    <div className={isDark ? 'dark' : ''}>
      <Header />
      <div className={`flex min-h-screen pt-16 transition-colors ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="flex-1 p-6 ml-72">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h2 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                Dashboard
              </h2>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Gerencie suas atividades
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                growth={stat.growth}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ActivityCard
              title="Atividades Recentes"
              activities={MOCK_ACTIVITIES}
            />
            
            <div className={`p-6 rounded-xl border transition-colors
              ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}
            `}>
              <h3 className={`text-lg font-medium mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                Desempenho
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Taxa de Resposta</span>
                    <span className={isDark ? 'text-gray-100' : 'text-gray-800'}>98%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '98%'}} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Tempo Médio</span>
                    <span className={isDark ? 'text-gray-100' : 'text-gray-800'}>1.5min</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '85%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;