import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import Overview from './Overview';
import SellerManagement from './sellers/SellerManagement';
import StudentManagement from './students/StudentManagement';
import FinancialReports from './financial/FinancialReports';
import SupportTickets from './support/SupportTickets';
import Settings from './settings/Settings';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/sellers/*" element={<SellerManagement />} />
              <Route path="/students/*" element={<StudentManagement />} />
              <Route path="/financial/*" element={<FinancialReports />} />
              <Route path="/support/*" element={<SupportTickets />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}