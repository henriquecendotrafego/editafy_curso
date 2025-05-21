import React, { useState } from 'react';
import { Video, Globe, ShoppingBag, Save } from 'lucide-react';

export default function LiveStream() {
  const [isLive, setIsLive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const [showBuyButton, setShowBuyButton] = useState(false);
  const [productPrice, setProductPrice] = useState('');

  const languages = [
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];

  const startLive = () => {
    setIsLive(true);
    // Implement Agora SDK integration here
  };

  const endLive = () => {
    setIsLive(false);
    // Implement live stream end logic
  };

  const saveLiveAsProduct = () => {
    // Implement save live stream as product logic
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-[#2B580C] mb-6">
            Transmissão ao Vivo
          </h2>

          {/* Live Stream Preview */}
          <div className="aspect-video bg-gray-900 rounded-lg mb-6">
            {isLive ? (
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>Transmissão ao vivo</p>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                <Video className="w-12 h-12" />
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Idiomas para Interpretação
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preço do Produto
              </label>
              <input
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="R$ 0,00"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={isLive ? endLive : startLive}
              className={`flex items-center px-6 py-3 rounded-lg text-white ${
                isLive ? 'bg-red-600 hover:bg-red-700' : 'bg-[#2B580C] hover:bg-[#1A3B06]'
              }`}
            >
              <Video className="w-5 h-5 mr-2" />
              {isLive ? 'Encerrar Live' : 'Iniciar Live'}
            </button>

            <button
              onClick={() => setShowBuyButton(!showBuyButton)}
              className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              {showBuyButton ? 'Ocultar Botão Comprar' : 'Mostrar Botão Comprar'}
            </button>

            <button
              onClick={saveLiveAsProduct}
              className="flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
            >
              <Save className="w-5 h-5 mr-2" />
              Salvar como Produto
            </button>
          </div>
        </div>

        {/* Live Settings */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#2B580C] mb-4">
            Configurações da Live
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título da Live
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                placeholder="Digite o título da sua live"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                rows={4}
                placeholder="Descreva sua live"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                placeholder="Adicione tags separadas por vírgula"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}