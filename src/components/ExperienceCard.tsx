import React, { useState, useEffect, useRef } from 'react';
import type { WorkExperience } from '../types/experience';

interface ExperienceCardProps {
  experience: WorkExperience;
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay if provided, otherwise set visible immediately
          if (delay > 0) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    const currentCardRef = cardRef.current; // Capture value for cleanup

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group rounded-lg overflow-hidden glass transition-all duration-500 ease-out opacity-0 ${
        visible ? 'animate-zoom-in opacity-100' : ''
      } hover:shadow-2xl border border-white/10`} // Added border, adjusted shadow and opacity transition
    >
      {experience.logoUrl && (
        <div className="h-40 flex items-center justify-center bg-slate-800/30 p-4"> {/* Adjusted bg color */}
          <img
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            className="max-h-full max-w-[150px] object-contain rounded-md" // Adjusted max-width
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-white">{experience.company}</h3> {/* Adjusted text color */}
        <p className="text-customOrange font-medium mb-1">{experience.title}</p> {/* Adjusted text color */}
        <p className="text-xs text-slate-400 mb-4"> {/* Adjusted text color and margin */}
          {experience.startDate} – {experience.endDate}
        </p>

        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Responsibilities:</h4> {/* Adjusted text color and margin */}
            <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm"> {/* Adjusted text color */}
              {experience.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-2">Technologies Used:</h4> {/* Adjusted text color */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-customOrange/10 text-customOrange border border-customOrange/30" // Adjusted colors and padding
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
