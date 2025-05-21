import React from 'react';
import {
  BarChart3,
  BookOpen,
  DollarSign,
  Users,
  TrendingUp,
  Settings,
  Megaphone,
  Bell,
} from 'lucide-react';
import Chart from 'react-apexcharts';

export default function SellerDashboard() {
  // Sample data for charts
  const revenueData = {
    options: {
      chart: {
        id: 'revenue-chart',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      colors: ['#2B580C'],
    },
    series: [
      {
        name: 'Receita',
        data: [30000, 40000, 35000, 50000, 49000, 60000],
      },
    ],
  };

  const courseDistribution = {
    options: {
      chart: {
        id: 'course-distribution',
      },
      labels: ['Curso A', 'Curso B', 'Curso C', 'Curso D'],
      colors: ['#2B580C', '#3E7B14', '#519E1B', '#64C122'],
    },
    series: [44, 55, 13, 33],
  };

  const kpis = [
    {
      title: 'Receita Total',
      value: 'R$ 264.000',
      change: '+12%',
      icon: DollarSign,
    },
    {
      title: 'Total de Vendas',
      value: '1,234',
      change: '+8%',
      icon: BarChart3,
    },
    {
      title: 'Alunos Ativos',
      value: '892',
      change: '+15%',
      icon: Users,
    },
    {
      title: 'Taxa de Conversão',
      value: '3.2%',
      change: '+2%',
      icon: TrendingUp,
    },
  ];

  const recentSales = [
    {
      id: 1,
      course: 'Curso de Vendas Online',
      student: 'João Silva',
      amount: 'R$ 997,00',
      date: '2024-03-15',
    },
    {
      id: 2,
      course: 'Marketing Digital Avançado',
      student: 'Maria Santos',
      amount: 'R$ 1.497,00',
      date: '2024-03-14',
    },
    {
      id: 3,
      course: 'SEO Profissional',
      student: 'Pedro Costa',
      amount: 'R$ 797,00',
      date: '2024-03-14',
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex items-start justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm">{kpi.title}</p>
              <p className="text-2xl font-bold text-[#2B580C] mt-2">{kpi.value}</p>
              <p className="text-green-600 text-sm mt-1">{kpi.change} esse mês</p>
            </div>
            <kpi.icon className="w-8 h-8 text-[#2B580C]" />
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
            Receita ao Longo do Tempo
          </h3>
          <Chart
            options={revenueData.options}
            series={revenueData.series}
            type="line"
            height={300}
          />
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
            Distribuição de Vendas por Curso
          </h3>
          <Chart
            options={courseDistribution.options}
            series={courseDistribution.series}
            type="pie"
            height={300}
          />
        </div>
      </div>

      {/* Recent Sales */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Vendas Recentes
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-3">Curso</th>
                <th className="pb-3">Aluno</th>
                <th className="pb-3">Valor</th>
                <th className="pb-3">Data</th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((sale) => (
                <tr key={sale.id} className="border-b">
                  <td className="py-3">{sale.course}</td>
                  <td className="py-3">{sale.student}</td>
                  <td className="py-3">{sale.amount}</td>
                  <td className="py-3">{sale.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}