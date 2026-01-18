import React, { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  suffix = '',
  prefix = '',
  icon: Icon,
  color,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, 0, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
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
      className={`glass p-6 sm:p-8 rounded-2xl border-2 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group ${
        isVisible ? 'opacity-100 animate-scale-rotate-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.5} />
        </div>

        <div className="space-y-2">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {prefix}
            {count}
            {suffix}
          </div>

          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
