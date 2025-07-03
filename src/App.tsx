import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import SellerDashboard from './pages/seller/Dashboard';
import StudentDashboard from './pages/student/Dashboard';
import LiveStream from './pages/seller/LiveStream';
import CreateProduct from './pages/seller/CreateProduct';
import SalesPage from './pages/seller/SalesPage';
import Courses from './pages/student/Courses';
import Progress from './pages/student/Progress';
import Community from './pages/student/Community';
import Settings from './pages/student/Settings';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SuccessCases from './pages/SuccessCases';
import Vitrine from './pages/Vitrine';
import Checkout from './pages/Checkout';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center">
                  <img
                    src="/src/img/Design_sem_nome-removebg-preview.png"
                    alt="EditaFY"
                    className="h-8"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="text-gray-900 hover:text-[#2B580C] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Início
                  </Link>
                  <Link
                    to="/vitrine"
                    className="text-gray-900 hover:text-[#2B580C] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Produtos
                  </Link>
                  <Link
                    to="/cases"
                    className="text-gray-900 hover:text-[#2B580C] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Cases de Sucesso
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-900 hover:text-[#2B580C] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sobre Nós
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/seller"
                  className="text-gray-900 hover:text-[#2B580C] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Painel Vendedor
                </Link>
                <Link
                  to="/student"
                  className="text-gray-900 hover:text-[#2B580C] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Painel Aluno
                </Link>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="text-gray-900 hover:text-[#2B580C] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="ml-4 bg-[#2B580C] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1A3B06]"
                >
                  Cadastre-se
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cases" element={<SuccessCases />} />
            <Route path="/vitrine" element={<Vitrine />} />
            <Route path="/checkout/:courseId" element={<Checkout />} />
            
            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminDashboard />} />
            
            {/* Seller Routes */}
            <Route path="/seller" element={
              <DashboardLayout userType="seller">
                <SellerDashboard />
              </DashboardLayout>
            } />
            <Route path="/seller/live" element={
              <DashboardLayout userType="seller">
                <LiveStream />
              </DashboardLayout>
            } />
            <Route path="/seller/create-product" element={
              <DashboardLayout userType="seller">
                <CreateProduct />
              </DashboardLayout>
            } />
            <Route path="/seller/sales-page" element={
              <DashboardLayout userType="seller">
                <SalesPage />
              </DashboardLayout>
            } />

            {/* Student Routes */}
            <Route path="/student" element={
              <DashboardLayout userType="student">
                <StudentDashboard />
              </DashboardLayout>
            } />
            <Route path="/student/courses" element={
              <DashboardLayout userType="student">
                <Courses />
              </DashboardLayout>
            } />
            <Route path="/student/progress" element={
              <DashboardLayout userType="student">
                <Progress />
              </DashboardLayout>
            } />
            <Route path="/student/community" element={
              <DashboardLayout userType="student">
                <Community />
              </DashboardLayout>
            } />
            <Route path="/student/settings" element={
              <DashboardLayout userType="student">
                <Settings />
              </DashboardLayout>
            } />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Modals */}
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          isRegister={false}
        />
        <LoginModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          isRegister={true}
        />
      </div>
    </Router>
  );
}

export default App;