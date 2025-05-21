import React, { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  DollarSign,
  Users,
  BarChart3,
  Settings,
  Megaphone,
  LogOut,
  Video,
  FileText,
  ShoppingCart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  userType: 'seller' | 'student';
}

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sellerMenuItems = [
    { icon: LayoutDashboard, label: 'Início', path: '/seller' },
    { icon: FileText, label: 'Criar Produto', path: '/seller/create-product' },
    { icon: Video, label: 'Criar Live', path: '/seller/live' },
    { icon: ShoppingCart, label: 'Página de Vendas', path: '/seller/sales-page' },
    { icon: BookOpen, label: 'Cursos', path: '/seller/courses' },
    { icon: DollarSign, label: 'Vendas', path: '/seller/sales' },
    { icon: Users, label: 'Alunos', path: '/seller/students' },
    { icon: BarChart3, label: 'Relatórios', path: '/seller/reports' },
    { icon: Settings, label: 'Configurações', path: '/seller/settings' },
    { icon: Megaphone, label: 'Anúncios', path: '/seller/ads' },
  ];

  const studentMenuItems = [
    { icon: LayoutDashboard, label: 'Início', path: '/student' },
    { icon: BookOpen, label: 'Meus Cursos', path: '/student/courses' },
    { icon: BarChart3, label: 'Progresso', path: '/student/progress' },
    { icon: Users, label: 'Comunidade', path: '/student/community' },
    { icon: Settings, label: 'Configurações', path: '/student/settings' },
  ];

  const menuItems = userType === 'seller' ? sellerMenuItems : studentMenuItems;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-4 flex justify-between items-center">
          {!isCollapsed && (
            <Link to="/" className="flex items-center">
              <img
                src="/src/img/Design_sem_nome-removebg-preview.png"
                alt="EditaFY"
                className="h-8"
              />
            </Link>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            )}
          </button>
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
              title={isCollapsed ? item.label : ''}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {!isCollapsed && item.label}
            </Link>
          ))}
        </nav>
        <div className={`absolute bottom-0 ${isCollapsed ? 'w-20' : 'w-64'} p-4 border-t`}>
          <button className="flex items-center px-6 py-3 text-gray-700 hover:text-[#2B580C] w-full">
            <LogOut className="w-5 h-5 mr-3" />
            {!isCollapsed && 'Sair'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold text-[#2B580C]">
              {userType === 'seller' ? 'Dashboard do Vendedor' : 'Dashboard do Aluno'}
            </h1>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}