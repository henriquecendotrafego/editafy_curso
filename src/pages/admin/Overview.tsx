import React, { useState } from 'react';
import { Users, DollarSign, BookOpen, TrendingUp, MessageCircle, X } from 'lucide-react';
import Chart from 'react-apexcharts';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// Componente de Estatísticas
function StatCard({ title, value, change, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex items-start justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold text-[#2B580C] mt-2">{value}</p>
        <p className="text-green-600 text-sm mt-1">{change} esse mês</p>
      </div>
      <Icon className="w-8 h-8 text-[#2B580C]" />
    </div>
  );
}

// Componente do Chatbot
function Chatbot({ isChatOpen, setIsChatOpen }) {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const chatOptions = [
    { id: 'financial', title: 'Questões Financeiras', icon: DollarSign },
    { id: 'support', title: 'Suporte ao Vendedor', icon: Users },
    { id: 'technical', title: 'Suporte Técnico', icon: BookOpen },
  ];

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${isChatOpen ? 'w-96' : 'w-auto'}`}>
      {!isChatOpen ? (
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-[#2B580C] text-white p-4 rounded-full shadow-lg hover:bg-[#1A3B06] transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-white rounded-xl shadow-2xl w-96">
          <div className="p-4 bg-[#2B580C] text-white rounded-t-xl flex justify-between items-center">
            <h3 className="font-semibold">Suporte Administrativo</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            {!selectedChat ? (
              <div className="space-y-3">
                <p className="text-gray-600 mb-4">Como posso ajudar você hoje?</p>
                {chatOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleChatSelect(option.id)}
                    className="w-full p-3 text-left rounded-lg border border-gray-200 hover:border-[#2B580C] hover:bg-gray-50 flex items-center space-x-3"
                  >
                    <option.icon className="w-5 h-5 text-[#2B580C]" />
                    <span>{option.title}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedChat(null)}
                  className="text-[#2B580C] hover:underline flex items-center"
                >
                  ← Voltar
                </button>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-gray-600">
                    Como posso ajudar com {chatOptions.find(o => o.id === selectedChat)?.title.toLowerCase()}?
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Overview() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chartFilter, setChartFilter] = useState('monthly'); // Filtro para os gráficos

  const stats = [
    { title: 'Total de Vendedores', value: '1,234', change: '+12%', icon: Users },
    { title: 'Total de Alunos', value: '5,678', change: '+23%', icon: BookOpen },
    { title: 'Receita Total', value: 'R$ 789.012', change: '+8%', icon: DollarSign },
    { title: 'Taxa de Conversão', value: '3.2%', change: '+5%', icon: TrendingUp },
  ];

  const markers = [
    { coordinates: [-43.2096, -22.9035], name: "Rio de Janeiro", students: 1200 },
    { coordinates: [-46.6333, -23.5505], name: "São Paulo", students: 2500 },
    { coordinates: [-47.9292, -15.7801], name: "Brasília", students: 800 },
  ];

  // Dados para o gráfico de rosca
  const donutChartData = {
    options: {
      chart: { id: 'donut-chart', toolbar: { show: false } },
      labels: ['Ativo', 'Inativo', 'Pendente'],
      colors: ['#2B580C', '#FFA500', '#FF4500'],
      dataLabels: { enabled: true },
      legend: { position: 'bottom' },
    },
    series: [60, 30, 10],
  };

  // Dados para o gráfico de barras empilhadas
  const stackedBarData = {
    options: {
      chart: { id: 'stacked-bar', toolbar: { show: false } },
      xaxis: { categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'] },
      colors: ['#2B580C', '#FFA500', '#FF4500'],
      dataLabels: { enabled: false },
      legend: { position: 'top' },
    },
    series: [
      { name: 'Ativo', data: [500, 600, 550, 700, 800, 900] },
      { name: 'Inativo', data: [100, 150, 200, 180, 250, 300] },
      { name: 'Pendente', data: [50, 80, 70, 100, 120, 150] },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Visão Geral</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Distribuição Geográfica de Usuários
        </h3>
        <div style={{ height: "400px" }}>
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 400 }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#EAEAEC"
                    stroke="#D6D6DA"
                  />
                ))
              }
            </Geographies>
            {markers.map(({ coordinates, name, students }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={Math.sqrt(students) / 10} fill="#2B580C" opacity={0.8} />
                <title>{`${name}: ${students} students`}</title>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Distribuição de Status dos Vendedores
        </h3>
        <Chart
          options={donutChartData.options}
          series={donutChartData.series}
          type="donut"
          height={300}
        />
      </div>

      {/* Stacked Bar Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Distribuição de Alunos por Categoria
        </h3>
        <div className="flex justify-end mb-4">
          <button
            className={`px-3 py-1 rounded-md mr-2 ${chartFilter === 'monthly' ? 'bg-[#2B580C] text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setChartFilter('monthly')}
          >
            Mensal
          </button>
          <button
            className={`px-3 py-1 rounded-md ${chartFilter === 'quarterly' ? 'bg-[#2B580C] text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setChartFilter('quarterly')}
          >
            Trimestral
          </button>
        </div>
        <Chart
          options={stackedBarData.options}
          series={stackedBarData.series}
          type="bar"
          height={300}
        />
      </div>

      {/* Financial Transactions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Transações Financeiras Recentes
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-3">ID</th>
                <th className="pb-3">Vendedor</th>
                <th className="pb-3">Valor</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Data</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">#123456</td>
                <td>João Silva</td>
                <td>R$ 1.500,00</td>
                <td>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Concluída
                  </span>
                </td>
                <td>15/03/2024</td>
              </tr>
              {/* Add more transactions */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
    </div>
  );
}