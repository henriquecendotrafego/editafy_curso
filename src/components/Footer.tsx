import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2B580C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/src/img/Design_sem_nome-removebg-preview.png"
              alt="EditaFY"
              className="h-12 mb-4"
            />
            <p className="text-sm">
              Transformando o conhecimento em oportunidades através da educação digital.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contato@editafy.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">Sobre Nós</a></li>
              <li><a href="/terms" className="hover:text-gray-300">Termos de Uso</a></li>
              <li><a href="/privacy" className="hover:text-gray-300">Política de Privacidade</a></li>
              <li><a href="/help" className="hover:text-gray-300">Central de Ajuda</a></li>
              <li>
                <Link to="/admin" className="flex items-center hover:text-gray-300">
                  <Shield className="w-4 h-4 mr-2" />
                  Área Administrativa
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; 2024 EditaFY. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}