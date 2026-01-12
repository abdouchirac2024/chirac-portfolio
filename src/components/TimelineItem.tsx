import React, { useRef, useEffect, useState } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string | React.ReactNode;
  isLeft?: boolean;
  logoUrl?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  isLeft = false,
  logoUrl
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`flex ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} mb-10 opacity-0 ${visible ? 'animate-fade-in' : ''
        }`}
    >
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8'} md:text-${isLeft ? 'left' : 'right'}`}>
        <div className="p-4 glass rounded-lg shadow-lg">
          <div className="flex items-center gap-4 mb-2">
            {logoUrl && (
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex-shrink-0 border border-white/10">
                <img src={logoUrl} alt={title} className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <div className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                {year}
              </div>
              <h3 className="text-lg font-semibold mt-1">{title}</h3>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:justify-center md:w-16">
        <div className="h-full w-px bg-border relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  );
};

export default TimelineItem;
