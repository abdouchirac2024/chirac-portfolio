import React, { useState, useEffect, useRef } from 'react';
import { Certification } from '../types/certification';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface CertificationCardProps {
  certification: Certification;
  delay?: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  delay = 0,
}) => {
  const { t } = useTranslation();
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
      className={`group glass p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 opacity-0 ${
        visible ? 'animate-zoom-in' : ''
      } hover:shadow-2xl hover:-translate-y-1`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
              {certification.name}
            </h3>
            <p className="text-sm text-muted-foreground">{certification.issuer}</p>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs font-bold rounded-md ${
          certification.status === 'completed'
            ? 'bg-green-500/20 text-green-500 border border-green-500/30'
            : 'bg-blue-500/20 text-blue-500 border border-blue-500/30'
        }`}>
          {certification.status === 'completed'
            ? t('certifications.completed')
            : t('certifications.inProgress')}
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Calendar className="w-4 h-4" />
        <span>
          {new Date(certification.startDate).toLocaleDateString(
            t('common.locale') === 'fr' ? 'fr-FR' : 'en-US',
            { year: 'numeric', month: 'long' }
          )}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>{t('currentWork.progress')}</span>
          <span className="font-bold text-primary">{certification.progress}%</span>
        </div>
        <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${certification.progress}%` }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {certification.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-foreground border border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>

      {certification.courseUrl && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-primary group-hover:text-white transition-all"
        >
          <a
            href={certification.courseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            {t('certifications.viewCourse')}
          </a>
        </Button>
      )}
    </div>
  );
};

export default CertificationCard;
