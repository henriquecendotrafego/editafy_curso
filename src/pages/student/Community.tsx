import React from 'react';
import { MessageSquare, Users, Share2, ThumbsUp } from 'lucide-react';

export default function Community() {
  const discussions = [
    {
      id: 1,
      user: {
        name: 'Ana Silva',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100',
      },
      title: 'Dicas para aumentar conversão em vendas',
      content: 'Quais são as melhores práticas que vocês utilizam para aumentar a taxa de conversão?',
      likes: 24,
      comments: 12,
      shares: 5,
      time: '2h atrás',
    },
    {
      id: 2,
      user: {
        name: 'Carlos Santos',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100',
      },
      title: 'Experiências com Facebook Ads',
      content: 'Alguém aqui já teve sucesso com campanhas de remarketing no Facebook?',
      likes: 18,
      comments: 8,
      shares: 3,
      time: '4h atrás',
    },
    {
      id: 3,
      user: {
        name: 'Mariana Costa',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
      },
      title: 'Grupo de estudos para Marketing Digital',
      content: 'Estou formando um grupo de estudos para o curso de Marketing Digital. Quem tiver interesse!',
      likes: 32,
      comments: 15,
      shares: 7,
      time: '6h atrás',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Create Post */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <input
            type="text"
            placeholder="Compartilhe algo com a comunidade..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-[#2B580C] text-white px-6 py-2 rounded-lg hover:bg-[#1A3B06] transition-colors">
            Publicar
          </button>
        </div>
      </div>

      {/* Discussions */}
      <div className="space-y-6">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={discussion.user.avatar}
                alt={discussion.user.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{discussion.user.name}</h4>
                <p className="text-sm text-gray-500">{discussion.time}</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#2B580C] mb-2">
              {discussion.title}
            </h3>
            <p className="text-gray-600 mb-4">{discussion.content}</p>

            <div className="flex items-center space-x-6 text-gray-500">
              <button className="flex items-center space-x-2 hover:text-[#2B580C]">
                <ThumbsUp className="w-5 h-5" />
                <span>{discussion.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-[#2B580C]">
                <MessageSquare className="w-5 h-5" />
                <span>{discussion.comments}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-[#2B580C]">
                <Share2 className="w-5 h-5" />
                <span>{discussion.shares}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}