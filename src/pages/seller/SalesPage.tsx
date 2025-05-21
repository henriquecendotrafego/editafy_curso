import React, { useState } from 'react';
import { Edit, Eye, Plus, Layout, Palette, Code } from 'lucide-react';

export default function SalesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState('1');
  const [gtmId, setGtmId] = useState('');

  const templates = [
    {
      id: '1',
      name: 'Template Minimalista',
      description: 'Design limpo e moderno, ideal para produtos digitais',
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&h=200',
    },
    {
      id: '2',
      name: 'Template Destaque',
      description: 'Layout chamativo com foco em promoções e ofertas',
      preview: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200',
    },
    {
      id: '3',
      name: 'Template Profissional',
      description: 'Design corporativo para produtos premium',
      preview: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&h=200',
    },
    {
      id: '4',
      name: 'Template Webinar',
      description: 'Ideal para eventos online e lançamentos',
      preview: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=300&h=200',
    },
    {
      id: '5',
      name: 'Template Curso Online',
      description: 'Perfeito para venda de cursos e treinamentos',
      preview: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&h=200',
    },
    {
      id: '6',
      name: 'Template E-book',
      description: 'Especializado para venda de livros digitais',
      preview: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&h=200',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#2B580C] mb-6">
          Criar Página de Vendas
        </h2>

        {/* Template Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Layout className="w-5 h-5 mr-2" />
            Escolha um Template
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedTemplate === template.id
                    ? 'border-[#2B580C] shadow-lg scale-105'
                    : 'border-gray-200 hover:border-[#2B580C]'
                }`}
              >
                <img
                  src={template.preview}
                  alt={template.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-[#2B580C]">{template.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page Content */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título da Página
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              placeholder="Digite o título principal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subtítulo
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              placeholder="Digite o subtítulo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição do Produto
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              rows={6}
              placeholder="Descreva seu produto"
            />
          </div>

          {/* Google Tag Manager Integration */}
          <div className="border-t pt-6">
            <div className="flex items-center mb-4">
              <Code className="w-5 h-5 text-[#2B580C] mr-2" />
              <h3 className="text-lg font-semibold text-[#2B580C]">
                Integração com Google Tag Manager
              </h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-4">
                Adicione seu ID do Google Tag Manager para rastrear conversões e eventos na página de vendas.
              </p>
              <input
                type="text"
                value={gtmId}
                onChange={(e) => setGtmId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                placeholder="GTM-XXXXXX"
              />
            </div>
          </div>

          {/* Pricing Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Preços e Ofertas</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preço Original
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  placeholder="R$ 0,00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preço com Desconto
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  placeholder="R$ 0,00"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-[#2B580C] text-white py-3 px-4 rounded-lg hover:bg-[#1A3B06] transition-colors flex items-center justify-center">
              <Plus className="w-5 h-5 mr-2" />
              Criar Página
            </button>
            <button className="flex items-center justify-center px-4 py-3 border border-[#2B580C] text-[#2B580C] rounded-lg hover:bg-[#2B580C] hover:text-white transition-colors">
              <Eye className="w-5 h-5 mr-2" />
              Prévia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}