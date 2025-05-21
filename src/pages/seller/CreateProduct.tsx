import React, { useState } from 'react';
import { FileText, Video, Upload, Plus, Code } from 'lucide-react';

export default function CreateProduct() {
  const [productType, setProductType] = useState<'ebook' | 'video'>('ebook');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [gtmId, setGtmId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement product creation logic
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#2B580C] mb-6">Criar Novo Produto</h2>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setProductType('ebook')}
            className={`flex-1 flex items-center justify-center p-4 rounded-lg border-2 ${
              productType === 'ebook'
                ? 'border-[#2B580C] bg-[#2B580C] text-white'
                : 'border-gray-300 hover:border-[#2B580C]'
            }`}
          >
            <FileText className="w-6 h-6 mr-2" />
            eBook
          </button>
          <button
            onClick={() => setProductType('video')}
            className={`flex-1 flex items-center justify-center p-4 rounded-lg border-2 ${
              productType === 'video'
                ? 'border-[#2B580C] bg-[#2B580C] text-white'
                : 'border-gray-300 hover:border-[#2B580C]'
            }`}
          >
            <Video className="w-6 h-6 mr-2" />
            Vídeo
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título do Produto
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              placeholder="Digite o título do seu produto"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              placeholder="Descreva seu produto"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preço
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              placeholder="R$ 0,00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload do {productType === 'ebook' ? 'PDF' : 'Vídeo'}
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
                id="file-upload"
                accept={productType === 'ebook' ? '.pdf' : 'video/*'}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <span className="text-gray-600">
                  Clique para fazer upload ou arraste o arquivo aqui
                </span>
                <span className="text-sm text-gray-500 mt-2">
                  {productType === 'ebook' ? 'PDF' : 'MP4, MOV'} até 2GB
                </span>
              </label>
            </div>
          </div>

          {/* Google Tag Manager Integration */}
          <div className="border-t pt-6 mt-6">
            <div className="flex items-center mb-4">
              <Code className="w-5 h-5 text-[#2B580C] mr-2" />
              <h3 className="text-lg font-semibold text-[#2B580C]">
                Integração com Google Tag Manager
              </h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-4">
                Adicione seu ID do Google Tag Manager para rastrear conversões e eventos na página do produto.
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

          <button
            type="submit"
            className="w-full bg-[#2B580C] text-white py-3 px-4 rounded-lg hover:bg-[#1A3B06] transition-colors flex items-center justify-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Criar Produto
          </button>
        </form>
      </div>
    </div>
  );
}