import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  DollarSign,
  LifeBuoy,
  Settings,
  LogOut,
} from 'lucide-react';

export default function AdminSidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Visão Geral', path: '/admin' },
    { icon: Users, label: 'Vendedores', path: '/admin/sellers' },
    { icon: GraduationCap, label: 'Alunos', path: '/admin/students' },
    { icon: DollarSign, label: 'Financeiro', path: '/admin/financial' },
    { icon: LifeBuoy, label: 'Suporte', path: '/admin/support' },
    { icon: Settings, label: 'Configurações', path: '/admin/settings' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <Link to="/admin" className="flex items-center">
          <img
            src="/src/img/Design_sem_nome-removebg-preview.png"
            alt="EditaFY Admin"
            className="h-8"
          />
          <span className="ml-2 text-xl font-bold text-[#2B580C]">Admin</span>
        </Link>
      </div>
      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#2B580C] ${
              location.pathname === item.path
                ? 'bg-gray-100 text-[#2B580C] border-r-4 border-[#2B580C]'
                : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 w-64 p-4 border-t">
        <button className="flex items-center px-6 py-3 text-gray-700 hover:text-[#2B580C] w-full">
          <LogOut className="w-5 h-5 mr-3" />
          Sair
        </button>
      </div>
    </div>
  );
}