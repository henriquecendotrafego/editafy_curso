import React from 'react';
import { Award, Clock, Target, TrendingUp, BookOpen } from 'lucide-react';
import Chart from 'react-apexcharts';

export default function Progress() {
  const studyTimeData = {
    options: {
      chart: {
        id: 'study-time',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      },
      colors: ['#2B580C'],
    },
    series: [
      {
        name: 'Horas de Estudo',
        data: [2, 3, 1.5, 4, 2.5, 3, 1],
      },
    ],
  };

  const achievements = [
    {
      title: 'Primeira Aula Concluída',
      description: 'Você começou sua jornada de aprendizado!',
      icon: Award,
      date: '10/03/2024',
    },
    {
      title: '10 Horas de Estudo',
      description: 'Dedicação é a chave do sucesso!',
      icon: Clock,
      date: '12/03/2024',
    },
    {
      title: 'Módulo Completo',
      description: 'Você completou seu primeiro módulo!',
      icon: Target,
      date: '14/03/2024',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#2B580C]">
              Total de Cursos
            </h3>
            <BookOpen className="w-6 h-6 text-[#2B580C]" />
          </div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-gray-600">Em andamento</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#2B580C]">
              Horas Estudadas
            </h3>
            <Clock className="w-6 h-6 text-[#2B580C]" />
          </div>
          <p className="text-3xl font-bold">36</p>
          <p className="text-sm text-gray-600">Este mês</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#2B580C]">
              Conquistas
            </h3>
            <Award className="w-6 h-6 text-[#2B580C]" />
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-600">Desbloqueadas</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#2B580C]">
              Progresso Geral
            </h3>
            <TrendingUp className="w-6 h-6 text-[#2B580C]" />
          </div>
          <p className="text-3xl font-bold">67%</p>
          <p className="text-sm text-gray-600">Média dos cursos</p>
        </div>
      </div>

      {/* Study Time Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Tempo de Estudo Semanal
        </h3>
        <Chart
          options={studyTimeData.options}
          series={studyTimeData.series}
          type="bar"
          height={300}
        />
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Conquistas Recentes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex items-start space-x-4"
            >
              <achievement.icon className="w-8 h-8 text-[#2B580C]" />
              <div>
                <h4 className="font-semibold">{achievement.title}</h4>
                <p className="text-sm text-gray-600 mb-2">
                  {achievement.description}
                </p>
                <p className="text-xs text-gray-500">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}