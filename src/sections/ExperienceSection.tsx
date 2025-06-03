import React from 'react';
import { experiences } from '../data/experiences';
import ExperienceCard from '../components/ExperienceCard';
// Assuming section-title provides necessary base styling (like font size, weight, color)
// Adding text-center and margin-bottom here for layout control.

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4"> {/* Added mx-auto and px-4 for typical container behavior */}
        <h2 className="text-3xl font-bold text-center mb-12 text-white"> {/* Assuming section-title might not exist, providing defaults */}
          Expérience Professionnelle
        </h2>

        {experiences && experiences.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.title}-${index}`} // Enhanced key
                experience={exp}
                delay={index * 200}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400"> {/* Adjusted text color for muted message */}
            <p>Aucune expérience professionnelle à afficher pour le moment.</p>
            <p className="mt-2 text-sm">Veuillez ajouter des données dans <code>src/data/experiences.ts</code>.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
