import React from 'react';
import { Shield, Users, Target, Award, TrendingUp, Globe } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Alunos' },
    { icon: TrendingUp, value: '98%', label: 'Taxa de Satisfação' },
    { icon: Globe, value: '20+', label: 'Países Atendidos' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Compromisso com Qualidade',
      description: 'Oferecemos conteúdo premium e suporte dedicado para garantir seu sucesso.'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Nossa metodologia é comprovada por milhares de casos de sucesso.'
    },
    {
      icon: Award,
      title: 'Excelência Reconhecida',
      description: 'Premiada como melhor plataforma de ensino em vendas do Brasil.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mb-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#2B580C] mb-6">
          Transformando Vidas Através do Conhecimento
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A EditaFY nasceu com a missão de democratizar o acesso ao conhecimento de alta qualidade
          em vendas e empreendedorismo, conectando os melhores especialistas aos alunos.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
            <stat.icon className="w-12 h-12 text-[#2B580C] mx-auto mb-4" />
            <div className="text-4xl font-bold text-[#2B580C] mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-[#2B580C] text-center mb-12">
          Nossos Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <value.icon className="w-10 h-10 text-[#2B580C] mb-4" />
              <h3 className="text-xl font-semibold text-[#2B580C] mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-xl shadow-lg p-12">
        <h2 className="text-3xl font-bold text-[#2B580C] text-center mb-12">
          Por Que Trabalhar Conosco?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#2B580C] mb-4">
              Para Vendedores
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="w-6 h-6 text-[#2B580C] mr-3 mt-1" />
                <span>Acesso a uma plataforma segura e profissional para vender seus cursos</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-6 h-6 text-[#2B580C] mr-3 mt-1" />
                <span>Potencial de crescimento exponencial com nossa base de alunos</span>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-[#2B580C] mr-3 mt-1" />
                <span>Suporte dedicado para maximizar suas vendas</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#2B580C] mb-4">
              Para Alunos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Award className="w-6 h-6 text-[#2B580C] mr-3 mt-1" />
                <span>Acesso aos melhores especialistas do mercado</span>
              </li>
              <li className="flex items-start">
                <Target className="w-6 h-6 text-[#2B580C] mr-3 mt-1" />
                <span>Conteúdo prático e focado em resultados</span>
              </li>
              <li className="flex items-start">
                <Globe className="w-6 h-6 text-[#2B580C] mr-3 mt-1" />
                <span>Comunidade global de empreendedores</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}