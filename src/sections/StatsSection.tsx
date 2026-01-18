import React from 'react';
import { Calendar, Briefcase, Code2, Users } from 'lucide-react';
import StatCard from '../components/StatCard';
import { useTranslation } from 'react-i18next';

const StatsSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      label: t('stats.yearsExperience'),
      value: 4,
      suffix: '+',
      icon: Calendar,
      color: 'text-blue-500',
    },
    {
      label: t('stats.projectsCompleted'),
      value: 15,
      suffix: '+',
      icon: Briefcase,
      color: 'text-green-500',
    },
    {
      label: t('stats.technologiesMastered'),
      value: 20,
      suffix: '+',
      icon: Code2,
      color: 'text-purple-500',
    },
    {
      label: t('stats.happyClients'),
      value: 10,
      suffix: '+',
      icon: Users,
      color: 'text-yellow-500',
    },
  ];

  return (
    <section id="stats" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">{t('stats.title')}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              icon={stat.icon}
              color={stat.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
