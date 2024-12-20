import React, { useState } from 'react';
import { Search, MoreVertical, Phone, Video, Star } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

const MessageList = () => {
  const { isDark } = useTheme();
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      id: 1,
      name: "João Silva",
      lastMessage: "Ok, combinado então!",
      time: "10:30",
      unread: 2,
      avatar: "JS"
    },
    {
      id: 2,
      name: "Maria Oliveira",
      lastMessage: "Você viu o novo projeto?",
      time: "09:45",
      unread: 0,
      avatar: "MO"
    },
    // Adicione mais chats conforme necessário
  ];

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Lista de Conversas */}
      <div className={`w-80 border-r ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        {/* Barra de Pesquisa */}
        <div className="p-4">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Buscar conversa"
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' 
                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            />
          </div>
        </div>

        {/* Lista de Chats */}
        <div className="overflow-y-auto h-full">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 flex items-center gap-3 cursor-pointer border-b ${
                isDark 
                  ? 'border-gray-700 hover:bg-gray-700' 
                  : 'border-gray-100 hover:bg-gray-50'
              } ${selectedChat?.id === chat.id ? (isDark ? 'bg-gray-700' : 'bg-gray-50') : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium">
                {chat.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className={`font-medium truncate ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                    {chat.name}
                  </h3>
                  <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {chat.time}
                  </span>
                </div>
                <p className={`text-sm truncate ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-xs text-white">{chat.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Área da Conversa */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Header da Conversa */}
            <div className={`p-4 border-b flex items-center justify-between ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium">
                  {selectedChat.avatar}
                </div>
                <div>
                  <h2 className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                    {selectedChat.name}
                  </h2>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Online
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <Phone className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
                <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <Video className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
                <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <Star className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
                <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <MoreVertical className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>
            </div>

            {/* Área das Mensagens */}
            <div className={`flex-1 p-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
              {/* Aqui virão as mensagens */}
            </div>

            {/* Input de Mensagem */}
            <div className={`p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
            </div>
          </>
        ) : (
          <div className={`flex-1 flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Selecione uma conversa para começar
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageList;