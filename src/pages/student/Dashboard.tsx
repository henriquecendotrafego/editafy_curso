import React from 'react';
import {
  BookOpen,
  Clock,
  Award,
  Users,
  TrendingUp,
  Star,
  PlayCircle,
} from 'lucide-react';
import Chart from 'react-apexcharts';

export default function StudentDashboard() {
  const progressData = {
    options: {
      chart: {
        id: 'progress-chart',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
        },
      },
      labels: ['Progresso Total'],
      colors: ['#2B580C'],
    },
    series: [67], // 67% progress
  };

  const timeSpentData = {
    options: {
      chart: {
        id: 'time-spent',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ['Módulo 1', 'Módulo 2', 'Módulo 3', 'Módulo 4'],
      },
      colors: ['#2B580C'],
    },
    series: [
      {
        name: 'Horas de Estudo',
        data: [4, 6, 3, 8],
      },
    ],
  };

  const activeCourses = [
    {
      id: 1,
      title: 'Marketing Digital Avançado',
      progress: 75,
      nextLesson: 'Estratégias de SEO',
      instructor: 'Maria Santos',
    },
    {
      id: 2,
      title: 'Vendas Online: Do Zero ao Profissional',
      progress: 45,
      nextLesson: 'Técnicas de Copywriting',
      instructor: 'João Silva',
    },
    {
      id: 3,
      title: 'Gestão de Tráfego Pago',
      progress: 30,
      nextLesson: 'Facebook Ads Avançado',
      instructor: 'Pedro Costa',
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Primeira Aula Concluída',
      icon: Star,
      date: '2024-03-10',
    },
    {
      id: 2,
      title: '10 Horas de Estudo',
      icon: Clock,
      date: '2024-03-12',
    },
    {
      id: 3,
      title: 'Módulo Completo',
      icon: Award,
      date: '2024-03-14',
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#2B580C]">Bem-vindo de volta!</h2>
        <p className="text-gray-600 mt-2">
          Continue de onde parou e mantenha seu progresso.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
            Progresso Geral
          </h3>
          <Chart
            options={progressData.options}
            series={progressData.series}
            type="radialBar"
            height={300}
          />
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
            Tempo de Estudo por Módulo
          </h3>
          <Chart
            options={timeSpentData.options}
            series={timeSpentData.series}
            type="bar"
            height={300}
          />
        </div>
      </div>

      {/* Active Courses */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Cursos em Andamento
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCourses.map((course) => (
            <div
              key={course.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-[#2B580C]">{course.title}</h4>
                  <p className="text-sm text-gray-500">
                    Instrutor: {course.instructor}
                  </p>
                </div>
                <PlayCircle className="w-6 h-6 text-[#2B580C]" />
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progresso</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#2B580C] rounded-full h-2"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Próxima aula: {course.nextLesson}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#2B580C] mb-4">
          Conquistas Recentes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex items-center space-x-3 p-3 border rounded-lg"
            >
              <achievement.icon className="w-8 h-8 text-[#2B580C]" />
              <div>
                <p className="font-semibold">{achievement.title}</p>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}