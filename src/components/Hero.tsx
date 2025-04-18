import React from 'react';

export const Hero = () => {
  const handleClientReviews = () => {
    window.open('https://www.google.com/maps/place/J.maçonnerie+des+Hauts+de+france/@49.8832458,2.2809585,15z/data=!3m1!5s0x47e784655c1dd697:0x3df55cca0b700646!4m8!3m7!1s0x47e785f1227c4f93:0xb7a861cdeea0efcc!8m2!3d49.8832458!4d2.2809585!9m1!1b1!16s%2Fg%2F11j0rgmx17?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const scrollToRealisations = () => {
    const section = document.getElementById('nos-realisations');
    if (section) {
      const headerHeight = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-20 min-h-screen relative bg-secondary">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
          alt="Construction background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            La Qualité Au <span className="text-primary">Coeur</span><br />
            De Chaque <span className="text-primary">Réalisation</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Nous façonnons votre vision : conception architecturale,<br />
            maçonnerie d'art et entretien de votre patrimoine bâti.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToRealisations}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Nos Services
            </button>
            <button 
              onClick={handleClientReviews}
              className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Avis Des Clients
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-white text-sm">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">84+</div>
              <div className="text-white text-sm">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-white text-sm">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};