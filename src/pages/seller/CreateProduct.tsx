import React, { useState } from 'react';
import { FileText, Video, Upload, Plus, Code, BookOpen } from 'lucide-react';
import { coursesAPI } from '../../api/courses';

interface Module {
  title: string;
  lessons: {
    title: string;
    type: 'video' | 'pdf';
    content: string;
  }[];
}

export default function CreateProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [modules, setModules] = useState<Module[]>([]);
  const [currentModule, setCurrentModule] = useState<number>(0);

  const addModule = () => {
    setModules([...modules, { title: '', lessons: [] }]);
  };

  const addLesson = (moduleIndex: number) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.push({
      title: '',
      type: 'video',
      content: ''
    });
    setModules(newModules);
  };

  const updateModule = (index: number, title: string) => {
    const newModules = [...modules];
    newModules[index].title = title;
    setModules(newModules);
  };

  const updateLesson = (moduleIndex: number, lessonIndex: number, field: string, value: string) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons[lessonIndex][field] = value;
    setModules(newModules);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await coursesAPI.createCourse({
        title,
        description,
        price: parseFloat(price),
        modules,
        status: 'draft'
      });

      if (error) throw error;
      
      // Redirect to course list or show success message
      alert('Curso criado com sucesso!');
    } catch (error) {
      console.error('Error creating course:', error);
      alert('Erro ao criar curso');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#2B580C] mb-6">Criar Novo Produto</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título do Curso
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              placeholder="Digite o título do curso"
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
              placeholder="Descreva seu curso"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preço
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B580C]"
              placeholder="R$ 0,00"
            />
          </div>

          {/* Modules Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#2B580C]">Módulos</h3>
              <button
                type="button"
                onClick={addModule}
                className="flex items-center text-[#2B580C] hover:text-[#1A3B06]"
              >
                <Plus className="w-5 h-5 mr-1" />
                Adicionar Módulo
              </button>
            </div>

            {modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="border rounded-lg p-4 space-y-4">
                <input
                  type="text"
                  value={module.title}
                  onChange={(e) => updateModule(moduleIndex, e.target.value)}
                  placeholder="Título do Módulo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />

                {/* Lessons */}
                <div className="space-y-4 ml-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="space-y-2">
                      <input
                        type="text"
                        value={lesson.title}
                        onChange={(e) => updateLesson(moduleIndex, lessonIndex, 'title', e.target.value)}
                        placeholder="Título da Aula"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                      <select
                        value={lesson.type}
                        onChange={(e) => updateLesson(moduleIndex, lessonIndex, 'type', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      >
                        <option value="video">Vídeo</option>
                        <option value="pdf">PDF</option>
                      </select>
                      <input
                        type="text"
                        value={lesson.content}
                        onChange={(e) => updateLesson(moduleIndex, lessonIndex, 'content', e.target.value)}
                        placeholder={lesson.type === 'video' ? 'URL do Vídeo' : 'URL do PDF'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addLesson(moduleIndex)}
                    className="flex items-center text-[#2B580C] hover:text-[#1A3B06]"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Adicionar Aula
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[#2B580C] text-white py-3 px-4 rounded-lg hover:bg-[#1A3B06] transition-colors flex items-center justify-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Criar Curso
          </button>
        </form>
      </div>
    </div>
  );
}