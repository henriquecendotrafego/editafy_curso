import React from 'react';
import { useParams } from 'react-router-dom';
import { UserCircle, Mail, Phone, Calendar, BookOpen } from 'lucide-react';

export default function StudentDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Student Details</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-start">
            <div className="h-24 w-24 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="ml-6">
              <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Joined: January 15, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Enrolled Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-medium text-gray-800">Web Development Fundamentals</h4>
                </div>
                <div className="mt-2">
                  <div className="text-sm text-gray-600">Progress: 75%</div>
                  <div className="mt-1 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}