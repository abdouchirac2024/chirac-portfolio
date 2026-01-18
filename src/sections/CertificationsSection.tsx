import React, { useState, useRef, useEffect } from 'react';
import { certifications } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';
import { Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CertificationsSection: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string | null>(null);
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

  const categories = [
    { key: null, label: t('certifications.allCategories') },
    { key: 'cloud', label: 'Cloud' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'devops', label: 'DevOps' },
  ];

  const filteredCertifications = filter
    ? certifications.filter((cert) => cert.category === filter)
    : certifications;

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container">
        <div className={`text-center mb-12 opacity-0 ${visible ? 'animate-fade-in' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="section-title">{t('certifications.title')}</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 opacity-0 ${
            visible ? 'animate-fade-in' : ''
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {categories.map((category) => (
            <button
              key={category.key || 'all'}
              onClick={() => setFilter(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                filter === category.key
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-secondary/50 hover:bg-primary/20 border border-transparent hover:border-primary/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              delay={index * 150}
            />
          ))}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            {t('certifications.noResults')}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
