import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Shield, CreditCard } from 'lucide-react';

export default function Checkout() {
  const { courseId } = useParams();
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-center space-x-8">
          <Clock className="w-8 h-8 text-red-500" />
          <div className="text-center">
            <p className="text-red-600 font-semibold mb-2">
              Oferta especial expira em:
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">{formatTime(timeLeft.hours)}</span>
                <span className="text-sm">h</span>
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">{formatTime(timeLeft.minutes)}</span>
                <span className="text-sm">m</span>
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">{formatTime(timeLeft.seconds)}</span>
                <span className="text-sm">s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Course Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#2B580C] mb-6">Resumo do Pedido</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b">
              <span className="font-semibold">Curso</span>
              <span>Curso ID: {courseId}</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b">
              <span>Preço Original</span>
              <span className="line-through text-gray-500">R$ 3.997,00</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b">
              <span>Desconto</span>
              <span className="text-green-600">- R$ 2.000,00</span>
            </div>
            <div className="flex items-center justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-[#2B580C]">R$ 1.997,00</span>
            </div>
            <div className="text-sm text-gray-500 text-center">
              ou 12x de R$ 166,42 sem juros
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#2B580C] mb-6">Informações de Pagamento</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome no Cartão
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                placeholder="Como está no cartão"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número do Cartão
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  placeholder="1234 5678 9012 3456"
                />
                <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Validade
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  placeholder="MM/AA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2B580C] text-white py-3 px-4 rounded-lg hover:bg-[#1A3B06] transition-colors flex items-center justify-center"
            >
              <Shield className="w-5 h-5 mr-2" />
              Finalizar Compra Segura
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}