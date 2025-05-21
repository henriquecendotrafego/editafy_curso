import React, { useState } from 'react';
import { ShoppingCart, Star, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
  // Diamonds & Jewelry Category
  {
    id: 1,
    category: "diamonds",
    name: 'Dominando o Mercado de Diamantes',
    price: 'R$ 2.997,00',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&w=400&h=400',
    description: 'Aprenda a avaliar, negociar e vender diamantes no mercado internacional'
  },
  {
    id: 2,
    category: "diamonds",
    name: 'Investimento em Pedras Preciosas',
    price: 'R$ 1.997,00',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1615655114865-4cc1890bcd0d?auto=format&fit=crop&w=400&h=400',
    description: 'Estratégias para investir e lucrar com pedras preciosas'
  },
  
  // Online Sales Category
  {
    id: 3,
    category: "sales",
    name: 'Explosão de Vendas Online 2.0',
    price: 'R$ 3.997,00',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=400&h=400',
    description: 'Método completo para escalar suas vendas online'
  },
  {
    id: 4,
    category: "sales",
    name: 'Tráfego Pago Avançado',
    price: 'R$ 2.497,00',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=400',
    description: 'Domine as principais plataformas de anúncios'
  },
  
  // Footwear Business
  {
    id: 5,
    category: "footwear",
    name: 'E-commerce de Calçados do Zero',
    price: 'R$ 1.997,00',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&h=400',
    description: 'Monte seu negócio de calçados online do zero'
  },
  {
    id: 6,
    category: "footwear",
    name: 'Dropshipping de Calçados',
    price: 'R$ 1.497,00',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&h=400',
    description: 'Aprenda a trabalhar com dropshipping no mercado de calçados'
  },
  
  // Financial Market
  {
    id: 7,
    category: "finance",
    name: 'Análise Técnica Avançada',
    price: 'R$ 4.997,00',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&h=400',
    description: 'Domine a análise técnica para operar no mercado financeiro'
  },
  {
    id: 8,
    category: "finance",
    name: 'Day Trade Profissional',
    price: 'R$ 5.997,00',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=400&h=400',
    description: 'Estratégias avançadas para day trade'
  },
  
  // Digital Influence
  {
    id: 9,
    category: "influence",
    name: 'Dominador Digital',
    price: 'R$ 2.997,00',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=400&h=400',
    description: 'Construa sua autoridade digital e monetize sua influência'
  },
  {
    id: 10,
    category: "influence",
    name: 'Instagram Profissional',
    price: 'R$ 1.997,00',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=400&h=400',
    description: 'Estratégias avançadas para crescer no Instagram'
  },
  // Additional courses...
  {
    id: 11,
    category: "diamonds",
    name: 'Certificação em Diamantes',
    price: 'R$ 3.497,00',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=400&h=400',
    description: 'Curso preparatório para certificação internacional em diamantes'
  },
  {
    id: 12,
    category: "sales",
    name: 'Copywriting para Vendas',
    price: 'R$ 1.997,00',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1455894127589-22f75500213a?auto=format&fit=crop&w=400&h=400',
    description: 'Domine a arte de escrever textos que vendem'
  },
  {
    id: 13,
    category: "finance",
    name: 'Análise Fundamentalista',
    price: 'R$ 3.997,00',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=400',
    description: 'Aprenda a analisar empresas e investir com segurança'
  },
  // Continue with more courses...
];

function Vitrine() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  
  const categories = [
    { id: 'all', name: 'Todos os Cursos' },
    { id: 'diamonds', name: 'Diamantes' },
    { id: 'sales', name: 'Vendas Online' },
    { id: 'footwear', name: 'Calçados' },
    { id: 'finance', name: 'Mercado Financeiro' },
    { id: 'influence', name: 'Influência Digital' }
  ];

  const handlePurchase = (courseId: number) => {
    navigate(`/checkout/${courseId}`);
  };

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold text-[#2B580C] mb-4">Nossos Cursos Online</h1>
          <p className="text-gray-600 text-lg mb-6 md:mb-0">
            Transforme sua carreira com nossos cursos especializados
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#2B580C] text-white'
                  : 'bg-white text-[#2B580C] border-2 border-[#2B580C] hover:bg-[#2B580C] hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{course.rating}</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <BookOpen className="w-5 h-5 text-[#2B580C] mr-2" />
                <h3 className="text-xl font-semibold text-[#2B580C]">{course.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-[#2B580C]">{course.price}</span>
                <span className="text-sm text-gray-500">12x sem juros</span>
              </div>
              <button
                onClick={() => handlePurchase(course.id)}
                className="w-full bg-[#2B580C] text-white py-3 px-4 rounded-lg hover:bg-[#1A3B06] transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Matricular Agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vitrine;