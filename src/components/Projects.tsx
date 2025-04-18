import React from 'react';
import  toitureIMG  from "../assets/images/image3.jpg";
import securityIMG from "../assets/images/image2.jpg";
import terasseIMG from "../assets/images/image1.jpg";

const projects = [
  {
    title: 'Travaux De Toiture',
    subtitle: 'Rénovation & Couverture',
    image: toitureIMG // First image - Roofing work
  },
  {
    title: 'Aménagement De Terrasse',
    subtitle: 'Construction & Extérieur',
    image: terasseIMG // Second image - Terrace
  },
  {
    title: 'Clôture De Sécurité',
    subtitle: 'Clôture Esthétique & Moderne',
    image: securityIMG // Third image - Security fence
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-primary" id="nos-realisations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">Nos Réalisations</h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};