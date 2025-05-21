import React, { useState } from 'react';
import { FileText, Video, Upload, Plus, Code } from 'lucide-react';

interface CreateProductProps {}

export default function CreateProduct() {
  const [productType, setProductType] = useState<'ebook' | 'video'>('ebook');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [gtmId, setGtmId] = useState<string>('');

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
          {/* Campos do formulário */}
        </form>
      </div>
    </div>
  );
}