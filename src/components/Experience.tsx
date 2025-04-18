import React from 'react';
import { CheckCircle } from 'lucide-react';
import maconnerieIMG from "../assets/images/image4.jpg";

export const Experience = () => {
  const benefits = [
    'Système de contrôle qualité, garantie satisfaction 100%',
    'Professionnels qualifiés, tests précis',
    'Un travail impeccable, personnel professionnel et qualifié'
  ];

  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and Stats */}
          <div className="relative">
            <img
              src={maconnerieIMG}
              alt="Professional masonry work in progress"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            
            {/* Stats overlay */}
            <div className="absolute -bottom-8 left-0 right-0 bg-primary/95 rounded-lg p-6 mx-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">84+</div>
                <div className="text-sm">Projets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Taux de satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-primary">+10 Années</span><br />
              d'expérience!
            </h2>
            
            <p className="text-gray-300 mb-8">
              Nous disposons d'une équipe de professionnels expérimentés qui travaillent dans
              le secteur depuis plus de 10 ans. Nos entrepreneurs possèdent une riche
              expérience et des compétences qu'ils ont acquises au fil des ans, ce qui en fait des
              experts dans leur domaine.
            </p>
            
            <p className="text-gray-300 mb-8">
              Forts de 10 ans d'expérience, nos entrepreneurs ont une connaissance approfondie
              des normes et réglementations du secteur. Notre volonté est ce que tous nos projets
              soient conformes aux dernières codes de sécurité et de construction, et à ce que le
              produit final réponde à vos objectifs, les attentes de nos clients.
            </p>

            <div className="bg-primary/10 rounded-lg p-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 mb-3 last:mb-0">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-4xl font-signature text-primary">JM</div>
              <div>
                <div className="font-semibold">J.MAÇONNERIE</div>
                <div className="text-sm text-gray-400">Fondateur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};