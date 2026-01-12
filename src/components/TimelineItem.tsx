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
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pl-10' : 'md:pr-10'} md:text-${isLeft ? 'left' : 'right'}`}>
        <div className="p-6 sm:p-8 glass rounded-2xl shadow-xl border border-white/10 hover:border-primary/30 hover:shadow-primary/5 transition-all duration-500 group/card hover:-translate-y-1">
          <div className={`flex items-center gap-5 mb-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {logoUrl && (
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/5 flex-shrink-0 border border-white/10 group-hover/card:border-primary/30 transition-colors duration-500 p-2">
                <img src={logoUrl} alt={title} className="w-full h-full object-contain" />
              </div>
            )}
            <div className={`flex flex-col ${isLeft ? 'md:items-start' : 'md:items-end'}`}>
              <div className="inline-block px-4 py-1.5 text-xs font-bold bg-primary/10 text-primary rounded-full mb-2">
                {year}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover/card:text-primary transition-colors duration-300">{title}</h3>
            </div>
          </div>
          <div className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {description}
          </div>
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
