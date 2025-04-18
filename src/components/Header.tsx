import React from 'react';
import { Hammer } from 'lucide-react';

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-secondary z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Hammer className="w-8 h-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-white">J.MAÇONNERIE</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-primary transition-colors">Accueil</a>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-primary transition-colors"
            >
              Service
            </button>
            <button 
              onClick={() => scrollToSection('nos-realisations')} 
              className="text-white hover:text-primary transition-colors"
            >
              Nos Réalisations
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contactez-nous
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};