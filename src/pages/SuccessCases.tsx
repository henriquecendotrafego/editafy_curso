import React from 'react';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

const successStories = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Empreendedora Digital",
    category: "Vendas Online",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400",
    description: "Após o curso de Explosão de Vendas Online, aumentei meu faturamento em 300% em apenas 6 meses.",
    metrics: {
      revenue: "R$ 50.000/mês",
      growth: "300%",
      students: "1.200+"
    }
  },
  {
    id: 2,
    name: "Carlos Santos",
    role: "Trader Profissional",
    category: "Mercado Financeiro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
    description: "O curso de Day Trade mudou minha vida. Hoje vivo exclusivamente do mercado financeiro.",
    metrics: {
      revenue: "R$ 30.000/mês",
      growth: "250%",
      students: "800+"
    }
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Influenciadora Digital",
    category: "Influência Digital",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400",
    description: "O programa Dominador Digital me ajudou a construir uma audiência engajada e monetizar minha influência.",
    metrics: {
      revenue: "R$ 40.000/mês",
      growth: "400%",
      students: "2.000+"
    }
  }
];

export default function SuccessCases() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#2B580C] mb-4">Cases de Sucesso</h1>
        <p className="text-gray-600 text-lg">
          Conheça as histórias de transformação dos nossos alunos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {successStories.map((story) => (
          <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white text-xl font-semibold">{story.name}</h3>
                <p className="text-gray-200">{story.role}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-[#2B580C] text-white text-sm rounded-full">
                  {story.category}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{story.description}</p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-[#2B580C] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{story.metrics.revenue}</p>
                  <p className="text-xs text-gray-500">Faturamento</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-[#2B580C] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{story.metrics.growth}</p>
                  <p className="text-xs text-gray-500">Crescimento</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 text-[#2B580C] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{story.metrics.students}</p>
                  <p className="text-xs text-gray-500">Alunos</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}