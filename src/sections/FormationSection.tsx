import React from 'react';

const formationImages = [
  '/images/formation1.jpg',
  '/images/formation2.jpg',
  '/images/consulte-france.jpg'
];

const FormationSection: React.FC = () => {
  return (
    <section id="formation" className="py-20 bg-muted/10">
      <div className="container">
        <h2 className="section-title">Formation</h2>
        <div className="overflow-x-hidden w-full">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" style={{animation: 'marquee 20s linear infinite'}}>
            {formationImages.map((src, idx) => {
              const getAltText = (index: number) => {
                switch(index) {
                  case 0: return "Formation académique - Université";
                  case 1: return "Parcours éducatif - Études supérieures";
                  case 2: return "Remise de diplôme Licence Pro MIAW - IUT d'Évry Val d'Essonne par le Consulat de France à Douala";
                  default: return `Formation ${index + 1}`;
                }
              };
              
              return (
                <img
                  key={idx}
                  src={src}
                  alt={getAltText(idx)}
                  className="h-64 rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
                  style={{ minWidth: '320px', maxWidth: '400px' }}
                />
              );
            })}
            {/* Duplique les images pour un effet de boucle fluide */}
            {formationImages.map((src, idx) => {
              const getAltText = (index: number) => {
                switch(index) {
                  case 0: return "Formation académique - Université";
                  case 1: return "Parcours éducatif - Études supérieures";
                  case 2: return "Remise de diplôme Licence Pro MIAW - IUT d'Évry Val d'Essonne par le Consulat de France à Douala";
                  default: return `Formation ${index + 1}`;
                }
              };
              
              return (
                <img
                  key={idx + formationImages.length}
                  src={src}
                  alt={getAltText(idx)}
                  className="h-64 rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
                  style={{ minWidth: '320px', maxWidth: '400px' }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default FormationSection; 