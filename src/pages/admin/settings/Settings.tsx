import React from 'react';
import { Save } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Configurações</h2>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-6">
          {/* General Settings */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
              Configurações Gerais
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da Plataforma
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  defaultValue="EditaFY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email de Contato
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  defaultValue="contato@editafy.com"
                />
              </div>
            </div>
          </div>

          {/* Payment Settings */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
              Configurações de Pagamento
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Taxa de Comissão (%)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  defaultValue="10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chave da API de Pagamento
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                />
              </div>
            </div>
          </div>

          {/* Email Settings */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
              Configurações de Email
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Servidor SMTP
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Usuário SMTP
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Senha SMTP
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-[#2B580C] text-white px-6 py-2 rounded-lg hover:bg-[#1A3B06] transition-colors flex items-center">
              <Save className="w-5 h-5 mr-2" />
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}