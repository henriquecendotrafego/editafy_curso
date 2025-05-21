import React from 'react';
import { Bell, Lock, User, Globe, CreditCard } from 'lucide-react';

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#2B580C] mb-6">
          Configurações da Conta
        </h2>

        {/* Profile Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Perfil
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-gray-200"></div>
              <button className="px-4 py-2 border border-[#2B580C] text-[#2B580C] rounded-lg hover:bg-[#2B580C] hover:text-white transition-colors">
                Alterar Foto
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            Segurança
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Senha Atual
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nova Senha
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar Nova Senha
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2" />
            Notificações
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Notificações por email</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2B580C]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2B580C]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span>Notificações push</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2B580C]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2B580C]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Pagamento
          </h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Cartão de Crédito</span>
                <span className="text-gray-500">**** **** **** 1234</span>
              </div>
              <div className="text-sm text-gray-500">Expira em 12/25</div>
            </div>
            <button className="text-[#2B580C] hover:text-[#1A3B06]">
              + Adicionar novo método de pagamento
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-[#2B580C] text-white px-6 py-2 rounded-lg hover:bg-[#1A3B06] transition-colors">
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
}