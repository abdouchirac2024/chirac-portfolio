import React, { useRef, useEffect, useState } from 'react';
import { Briefcase, Calendar, TrendingUp } from 'lucide-react';
import { experiences } from '../data/experiences';
import ExperienceCard from '../components/ExperienceCard';

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const totalYearsExperience = () => {
    if (experiences.length === 0) return 0;
    const startYear = new Date(experiences[experiences.length - 1].startDate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - startYear + 1;
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 opacity-0 ${visible ? 'animate-fade-in' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="section-title">Expérience Professionnelle</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez mon parcours professionnel de {totalYearsExperience()} ans en développement web, 
            avec des projets variés allant des applications web modernes aux systèmes ERP complexes.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{totalYearsExperience()}+ années d'expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>{experiences.length} entreprises</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>

        {experiences && experiences.length > 0 ? (
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.title}-${index}`}
                className={`opacity-0 ${visible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <ExperienceCard
                  experience={exp}
                  delay={0} // Animation handled by parent
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="glass p-8 rounded-lg max-w-md mx-auto">
              <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Aucune expérience à afficher</h3>
              <p className="text-muted-foreground text-sm">
                Les expériences professionnelles seront bientôt ajoutées.
              </p>
            </div>
          </div>
        )}

        {experiences.length > 0 && (
          <div className={`mt-16 text-center opacity-0 ${visible ? 'animate-fade-in' : ''}`} 
               style={{ animationDelay: `${(experiences.length + 1) * 200}ms` }}>
            <div className="glass p-6 rounded-lg inline-block">
              <p className="text-muted-foreground">
                Intéressé par mon profil ? 
                <a href="#contact" className="text-primary hover:underline ml-1">
                  Contactez-moi
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
