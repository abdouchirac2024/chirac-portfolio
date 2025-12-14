import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Calendar, MapPin } from 'lucide-react';
import type { WorkExperience } from '../types/experience';

interface ExperienceCardProps {
  experience: WorkExperience;
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentCardRef = cardRef.current;

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [delay]);

  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Présent";
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (diffMonths < 12) {
      return `${diffMonths} mois`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      return months > 0 ? `${years} an${years > 1 ? 's' : ''} ${months} mois` : `${years} an${years > 1 ? 's' : ''}`;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`group rounded-xl overflow-hidden glass transition-all duration-500 ease-out opacity-0 ${
        visible ? 'animate-zoom-in opacity-100' : ''
      } hover:shadow-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 w-full`}
    >
      {experience.logoUrl && (
        <div className="h-24 sm:h-28 md:h-32 flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5 p-3 sm:p-4">
          <img
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            className="max-h-full max-w-[80px] sm:max-w-[100px] md:max-w-[120px] object-contain rounded-md"
          />
        </div>
      )}
      
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors leading-tight">
              {experience.company}
            </h3>
            <p className="text-primary font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{experience.title}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{calculateDuration(experience.startDate, experience.endDate)}</span>
              </div>
            </div>
          </div>
        </div>

        {experience.projectDetails && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {experience.projectDetails.description}
            </p>
          </div>
        )}

        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-200 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></span>
              Responsabilités Clés
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-slate-300 text-xs sm:text-sm">
              {experience.responsibilities.slice(0, expanded ? undefined : 3).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary/60 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            
            {experience.responsibilities.length > 3 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 sm:mt-3 text-primary hover:text-primary/80 text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors"
              >
                {expanded ? (
                  <>
                    Voir moins <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  </>
                ) : (
                  <>
                    Voir plus ({experience.responsibilities.length - 3} autres) <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {experience.projectDetails?.keyFeatures && expanded && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Fonctionnalités Principales
            </h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              {experience.projectDetails.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.projectDetails?.architecture && expanded && (
          <div className="mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <h4 className="text-sm font-semibold text-blue-300 mb-2">Architecture</h4>
            <p className="text-slate-300 text-sm">{experience.projectDetails.architecture}</p>
          </div>
        )}

        {experience.projectDetails?.liveUrls && expanded && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Liens du Projet
            </h4>
            <div className="space-y-2">
              {experience.projectDetails.liveUrls.map((url, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {url}
                </a>
              ))}
            </div>
          </div>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-slate-200 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              Technologies Utilisées
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors font-medium whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
