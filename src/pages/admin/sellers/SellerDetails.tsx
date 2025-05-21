import React from 'react';
import { useParams } from 'react-router-dom';
import { Mail, Phone, Calendar, BookOpen, Users, DollarSign, Star, Edit, Trash2 } from 'lucide-react';

export default function SellerDetails() {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: 'Marketing Digital Avançado',
      students: 156,
      revenue: 'R$ 15.600,00',
      rating: 4.8,
      status: 'active'
    },
    {
      id: 2,
      title: 'SEO para Iniciantes',
      students: 78,
      revenue: 'R$ 7.800,00',
      rating: 4.9,
      status: 'active'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Seller Details</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#2B580C] text-[#2B580C] rounded-lg hover:bg-[#2B580C] hover:text-white">
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white">
            <Trash2 className="w-4 h-4" />
            Delete Account
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Seller Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-6">
              <div className="h-20 w-20 rounded-full bg-gray-200"></div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">João Silva</h2>
                <p className="text-gray-500">Professional Seller</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3" />
                <span>joao@example.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3" />
                <span>+55 11 98765-4321</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-3" />
                <span>Joined: Jan 15, 2024</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Total Revenue</span>
                    <span className="font-semibold">R$ 23.400,00</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Total Students</span>
                    <span className="font-semibold">234</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Average Rating</span>
                    <span className="font-semibold flex items-center">
                      4.8
                      <Star className="w-4 h-4 text-yellow-400 fill-current ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Courses</h3>
              <button className="flex items-center gap-2 text-[#2B580C] hover:text-[#1A3B06]">
                <BookOpen className="w-5 h-5" />
                View All Courses
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{course.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.students}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.revenue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-500">{course.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {course.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}