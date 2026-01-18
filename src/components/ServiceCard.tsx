import React, { useEffect, useRef, useState } from 'react';
import { Service } from '../types/service';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay = 0 }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
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

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className={`glass p-6 sm:p-8 rounded-2xl border-2 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col relative group ${
        isVisible ? 'opacity-100 animate-slide-up-fade' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {service.popular && (
        <Badge className="absolute -top-3 -right-3 bg-primary text-primary-foreground animate-pulse">
          {t('services.popular')}
        </Badge>
      )}

      {/* Icon */}
      <div className="mb-6">
        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110">
          <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl sm:text-2xl font-bold mb-3 font-poppins group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 ${
              isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${delay + index * 100}ms` }}
          >
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground/90">{feature}</span>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>

      {/* CTA */}
      <Button className="w-full group/btn" asChild>
        <a href="#contact">
          {t('services.getStarted')}
          <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
        </a>
      </Button>
    </div>
  );
};

export default ServiceCard;
