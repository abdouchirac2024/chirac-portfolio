import React from 'react';

const formationImages = [
  '/lovable-uploads/formation1.jpg',
  '/lovable-uploads/formation2.jpg'
];

const FormationSection: React.FC = () => {
  return (
    <section id="formation" className="py-20 bg-secondary/10 dark:bg-muted/10">
      <div className="container">
        <h2 className="section-title">Formation</h2>
        <div className="overflow-x-hidden w-full">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" style={{animation: 'marquee 20s linear infinite'}}>
            {formationImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Formation ${idx + 1}`}
                className="h-64 rounded-lg shadow-xl object-cover"
                style={{ minWidth: '320px', maxWidth: '400px' }}
              />
            ))}
            {/* Duplique les images pour un effet de boucle fluide */}
            {formationImages.map((src, idx) => (
              <img
                key={idx + formationImages.length}
                src={src}
                alt={`Formation ${idx + 1}`}
                className="h-64 rounded-lg shadow-xl object-cover"
                style={{ minWidth: '320px', maxWidth: '400px' }}
              />
            ))}
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