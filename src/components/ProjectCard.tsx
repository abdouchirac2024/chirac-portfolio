
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
  stack: string[];
  imageUrl: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  problem,
  solution,
  result,
  stack,
  imageUrl,
  liveUrl,
  delay = 0,
}) => {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group flex flex-col h-full rounded-xl overflow-hidden glass border border-white/10 hover:border-primary/30 transition-all duration-500 opacity-0 ${visible ? 'animate-zoom-in' : ''
        } hover:shadow-2xl hover:-translate-y-1`}
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex flex-wrap gap-2">
            {stack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-black/50 backdrop-blur-md text-white border border-white/10"
              >
                {tech}
              </span>
            ))}
            {stack.length > 3 && (
              <span className="px-2 py-1 text-[10px] font-bold rounded-md bg-black/50 backdrop-blur-md text-white border border-white/10">
                +{stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{description}</p>

        {(problem || solution || result) && (
          <div className="space-y-3 mb-6 bg-secondary/30 p-4 rounded-lg border border-white/5">
            {problem && (
              <div className="text-sm">
                <span className="font-semibold text-primary block mb-1">Problème :</span>
                <span className="text-muted-foreground">{problem}</span>
              </div>
            )}
            {solution && (
              <div className="text-sm">
                <span className="font-semibold text-primary block mb-1">Solution :</span>
                <span className="text-muted-foreground">{solution}</span>
              </div>
            )}
            {result && (
              <div className="text-sm">
                <span className="font-semibold text-green-500 block mb-1">Résultat :</span>
                <span className="text-foreground font-medium">{result}</span>
              </div>
            )}
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
          <div className="flex -space-x-2 overflow-hidden">
            {/* Placeholder for team avatars if needed later */}
          </div>

          {liveUrl && (
            <Button
              asChild
              size="sm"
              className="rounded-full px-6 group-hover:bg-primary group-hover:text-white transition-all"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Voir le projet
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
