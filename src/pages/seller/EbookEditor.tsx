import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import htmlToPdf from 'html-to-pdf';

function EbookEditor({ onSave }) {
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSave = () => {
    const pdfContent = `
      <html>
        <body>${content}</body>
      </html>
    `;
    htmlToPdf.generatePdf(pdfContent, (pdf) => {
      onSave(pdf); // Envia o PDF gerado para o formulário principal
    });
  };

  return (
    <div className="space-y-4">
      <ReactQuill value={content} onChange={setContent} />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload de Imagens
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button onClick={handleSave} className="bg-[#2B580C] text-white py-2 px-4 rounded-lg">
        Salvar eBook
      </button>
    </div>
  );
}