import React from 'react';
import { PlayCircle, BookOpen, Clock, Award } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'Marketing Digital Avançado',
      progress: 75,
      nextLesson: 'Estratégias de SEO',
      instructor: 'Maria Santos',
      totalHours: 20,
      completedHours: 15,
    },
    {
      id: 2,
      title: 'Vendas Online: Do Zero ao Profissional',
      progress: 45,
      nextLesson: 'Técnicas de Copywriting',
      instructor: 'João Silva',
      totalHours: 30,
      completedHours: 13.5,
    },
    {
      id: 3,
      title: 'Gestão de Tráfego Pago',
      progress: 30,
      nextLesson: 'Facebook Ads Avançado',
      instructor: 'Pedro Costa',
      totalHours: 25,
      completedHours: 7.5,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2B580C] mb-4">
                {course.title}
              </h3>
              
              <div className="space-y-4">
                <div>
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

                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    {course.completedHours} de {course.totalHours} horas
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    Próxima aula: {course.nextLesson}
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    Instrutor: {course.instructor}
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full bg-[#2B580C] text-white py-3 px-4 rounded-lg hover:bg-[#1A3B06] transition-colors flex items-center justify-center">
                <PlayCircle className="w-5 h-5 mr-2" />
                Continuar Curso
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}