import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  isRegister?: boolean;
}

export default function LoginModal({ isOpen, onClose, isRegister = false }: LoginModalProps) {
  const [activeTab, setActiveTab] = React.useState<'student' | 'seller'>('student');

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title as="h3" className="text-lg font-medium text-[#2B580C]">
                    {isRegister ? 'Cadastro' : 'Login'}
                  </Dialog.Title>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {isRegister && (
                  <div className="flex space-x-2 mb-6">
                    <button
                      className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                        activeTab === 'student'
                          ? 'bg-[#2B580C] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('student')}
                    >
                      Aluno
                    </button>
                    <button
                      className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                        activeTab === 'seller'
                          ? 'bg-[#2B580C] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('seller')}
                    >
                      Vendedor
                    </button>
                  </div>
                )}

                <form className="space-y-4">
                  {isRegister && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                      placeholder="••••••••"
                    />
                  </div>
                  {isRegister && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirmar Senha
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
                        placeholder="••••••••"
                      />
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-[#2B580C] text-white py-2 px-4 rounded-lg hover:bg-[#1A3B06] transition-colors"
                  >
                    {isRegister ? `Cadastrar como ${activeTab === 'student' ? 'Aluno' : 'Vendedor'}` : 'Entrar'}
                  </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-500">
                  {!isRegister && (
                    <a href="#" className="text-[#2B580C] hover:underline">
                      Esqueceu sua senha?
                    </a>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}