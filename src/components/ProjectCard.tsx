
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
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
      className={`group rounded-lg overflow-hidden glass transition-all duration-300 opacity-0 ${
        visible ? 'animate-zoom-in' : ''
      } hover:shadow-xl`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {liveUrl && (
          <Button 
            asChild 
            variant="outline"
            className="mt-2 w-full"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
