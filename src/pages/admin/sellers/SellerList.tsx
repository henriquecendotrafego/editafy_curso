import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Search, Plus, BookOpen, DollarSign, Star } from 'lucide-react';

export default function SellerList() {
  const sellers = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@example.com',
      courses: 5,
      students: 234,
      revenue: 'R$ 45.678,00',
      rating: 4.8,
      status: 'active'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@example.com',
      courses: 3,
      students: 156,
      revenue: 'R$ 32.450,00',
      rating: 4.9,
      status: 'active'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-[#2B580C]" />
          <h1 className="text-2xl font-bold text-gray-800">Seller Management</h1>
        </div>
        <button className="flex items-center gap-2 bg-[#2B580C] text-white px-4 py-2 rounded-lg hover:bg-[#1A3B06]">
          <Plus className="w-5 h-5" />
          Add New Seller
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Sellers</p>
              <p className="text-2xl font-bold text-[#2B580C]">156</p>
            </div>
            <Users className="w-8 h-8 text-[#2B580C]" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Courses</p>
              <p className="text-2xl font-bold text-[#2B580C]">432</p>
            </div>
            <BookOpen className="w-8 h-8 text-[#2B580C]" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-[#2B580C]">R$ 789.654,00</p>
            </div>
            <DollarSign className="w-8 h-8 text-[#2B580C]" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg. Rating</p>
              <p className="text-2xl font-bold text-[#2B580C]">4.8</p>
            </div>
            <Star className="w-8 h-8 text-[#2B580C]" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search sellers..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Seller</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Courses</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sellers.map((seller) => (
                  <tr key={seller.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{seller.name}</div>
                          <div className="text-sm text-gray-500">{seller.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {seller.courses}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {seller.students}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {seller.revenue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-500">{seller.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {seller.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link to={`/admin/sellers/${seller.id}`} className="text-[#2B580C] hover:text-[#1A3B06] mr-3">
                        View
                      </Link>
                      <Link to={`/admin/sellers/${seller.id}/analytics`} className="text-[#2B580C] hover:text-[#1A3B06]">
                        Analytics
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}