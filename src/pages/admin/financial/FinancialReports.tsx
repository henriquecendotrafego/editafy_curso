import React from 'react';
import { DollarSign, TrendingUp, CreditCard, Wallet } from 'lucide-react';
import Chart from 'react-apexcharts';

export default function FinancialReports() {
  const financialStats = [
    {
      title: 'Receita Total',
      value: 'R$ 789.012',
      change: '+8%',
      icon: DollarSign,
    },
    {
      title: 'Lucro Líquido',
      value: 'R$ 234.567',
      change: '+12%',
      icon: TrendingUp,
    },
    {
      title: 'Transações',
      value: '1,234',
      change: '+15%',
      icon: CreditCard,
    },
    {
      title: 'Comissões',
      value: 'R$ 123.456',
      change: '+10%',
      icon: Wallet,
    },
  ];

  const revenueData = {
    options: {
      chart: {
        id: 'revenue-chart',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Relatórios Financeiros</h2>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex items-start justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold text-[#2B580C] mt-2">{stat.value}</p>
              <p className="text-green-600 text-sm mt-1">{stat.change} esse mês</p>
            </div>
            <stat.icon className="w-8 h-8 text-[#2B580C]" />
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
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

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Transações Recentes
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-3">ID</th>
                <th className="pb-3">Data</th>
                <th className="pb-3">Vendedor</th>
                <th className="pb-3">Produto</th>
                <th className="pb-3">Valor</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Add transaction rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}