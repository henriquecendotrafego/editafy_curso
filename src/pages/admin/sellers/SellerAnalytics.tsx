import React from 'react';
import { useParams } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';
import Chart from 'react-apexcharts';

export default function SellerAnalytics() {
  const { id } = useParams();

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
        name: 'Revenue',
        data: [12500, 15000, 18000, 16500, 21000, 23400],
      },
    ],
  };

  const studentGrowthData = {
    options: {
      chart: {
        id: 'student-growth',
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
        name: 'Students',
        data: [45, 52, 68, 74, 98, 112],
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Seller Analytics</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-[#2B580C]">R$ 23.400,00</p>
              <p className="text-green-600 text-sm">+12% this month</p>
            </div>
            <DollarSign className="w-8 h-8 text-[#2B580C]" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-[#2B580C]">234</p>
              <p className="text-green-600 text-sm">+8% this month</p>
            </div>
            <Users className="w-8 h-8 text-[#2B580C]" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Course Sales</p>
              <p className="text-2xl font-bold text-[#2B580C]">156</p>
              <p className="text-green-600 text-sm">+15% this month</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-[#2B580C]" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Conversion Rate</p>
              <p className="text-2xl font-bold text-[#2B580C]">3.2%</p>
              <p className="text-green-600 text-sm">+2% this month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-[#2B580C]" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Over Time</h3>
          <Chart
            options={revenueData.options}
            series={revenueData.series}
            type="line"
            height={300}
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Growth</h3>
          <Chart
            options={studentGrowthData.options}
            series={studentGrowthData.series}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}