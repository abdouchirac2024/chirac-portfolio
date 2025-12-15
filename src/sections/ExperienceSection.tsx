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
    <section id="experience" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 ${visible ? 'animate-fade-in' : ''}`}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Expérience Professionnelle</h2>
          </div>
          <p className="text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            Découvrez mon parcours professionnel de {totalYearsExperience()} ans en développement web, 
            avec des projets variés allant des applications web modernes aux systèmes ERP complexes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">{totalYearsExperience()}+ années d'expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">{experiences.length} entreprises</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">Full Stack Developer</span>
            </div>
          </div>
        </div>

        {experiences && experiences.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
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
          <div className={`mt-12 sm:mt-16 lg:mt-20 text-center opacity-0 ${visible ? 'animate-fade-in' : ''}`} 
               style={{ animationDelay: `${(experiences.length + 1) * 200}ms` }}>
            <div className="glass p-4 sm:p-6 rounded-lg inline-block">
              <p className="text-muted-foreground text-sm sm:text-base">
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
