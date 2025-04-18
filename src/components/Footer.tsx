import React from 'react';
import { Hammer, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Hammer className="w-8 h-8 text-primary" />
              <span className="ml-2 text-xl font-bold">J.MAÇONNERIE</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Forts de notre équipe professionnelle et certifiée, de matériaux
              de haute qualité et de notre expertise dans le domaine, nous
              sommes confiants de vous offrir le meilleur service.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Bureau</h3>
            <p className="text-gray-400">
              28 A RUE JEAN MOULIN GÉNÉRATION CFF<br />
              80000 AMIENS FRANCE
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: divers_travaux@yahoo.fr<br />
              Phone: 07 89 04 76 91
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-400">&copy; 2024 J.Maçonnerie. Tous droits réservés.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};