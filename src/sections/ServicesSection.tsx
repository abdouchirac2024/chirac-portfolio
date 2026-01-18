import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground mt-4">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
