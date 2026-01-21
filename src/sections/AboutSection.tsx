import React, { useRef, useEffect, useState } from 'react';
import SkillBar from '../components/SkillBar';
import SkillCategory from '../components/SkillCategory';
import TimelineItem from '../components/TimelineItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Code2, Server, Cloud, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
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

  const skillCategories = [
    {
      title: t('about.frontend'),
      icon: Code2,
      skills: [
        { name: 'Angular 19+', percentage: 65 },
        { name: 'React.js', percentage: 75 },
        { name: 'Vue.js', percentage: 80 },
        { name: 'TypeScript', percentage: 65 },
        { name: 'Tailwind CSS', percentage: 70 },
        { name: 'RxJS', percentage: 75 },
      ]
    },
    {
      title: t('about.backend'),
      icon: Server,
      skills: [
        { name: 'Laravel', percentage: 75 },
        { name: 'Node.js', percentage: 60 },
        { name: 'Express.js', percentage: 40 },
        { name: 'PHP', percentage: 85 },
        { name: 'MySQL / MongoDB', percentage: 70 },
      ]
    },
    {
      title: t('about.cloudDevops'),
      icon: Cloud,
      skills: [
        { name: 'Google Cloud Platform', percentage: 35 },
        { name: 'Cloud Functions', percentage: 60 },
        { name: 'Cloud Run', percentage: 60 },
        { name: 'Firebase', percentage: 70 },
        { name: 'Docker', percentage: 65 },
      ]
    },
    {
      title: t('about.tools'),
      icon: Wrench,
      skills: [
        { name: 'Telegram Bot API', percentage: 90 },
        { name: 'Git / GitHub', percentage: 70 },
        { name: 'Figma', percentage: 45 },
        { name: 'Postman', percentage: 85 },
        { name: 'Agile / Scrum', percentage: 70 },
      ]
    }
  ];

  const aboutContent = {
    title: "À propos de moi",
    description: "Développeur Full Stack passionné avec une expertise en React, Node.js et TypeScript. Je crée des applications web modernes et performantes.",
    skills: [
      "React & Next.js",
      "Node.js & Express",
      "TypeScript",
      "MongoDB & PostgreSQL",
      "Docker & Kubernetes",
      "AWS & GCP"
    ]
  };

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/10">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          <div className={`opacity-0 ${visible ? 'animate-fade-in' : ''} order-2 lg:order-1`}>
            <div className="relative max-w-md mx-auto lg:max-w-none group">
              <div className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-primary/20 hover:shadow-3xl border border-white/10">
                <img
                  src="/images/d6a9ce7d-c905-40e5-b74f-232a1aae62ec.png"
                  alt="Chirac NJUTAPMVOUI"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110 filter hover:brightness-110"
                />
                {/* Overlay gradient animé */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Effet de brillance qui traverse l'image */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </div>

              {/* Cercles décoratifs animés */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-primary/10 rounded-full -z-10 animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/10 rounded-full -z-10 animate-bounce-slow"></div>

              {/* Particules flottantes */}
              <div className="absolute top-1/4 -right-2 w-2 h-2 bg-primary/40 rounded-full animate-float-1"></div>
              <div className="absolute top-1/2 -left-3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float-2"></div>
              <div className="absolute bottom-1/3 -right-4 w-1 h-1 bg-primary/50 rounded-full animate-float-3"></div>

              {/* Bordure animée */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 animate-border-glow"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className={`glass p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-white/10 opacity-0 ${visible ? 'animate-fade-in' : ''
              }`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">{t('about.subtitle')}</h3>
              <p className="mb-4 sm:mb-6 responsive-text">
                {t('about.description')}
              </p>
              <p className="mb-4 sm:mb-6 responsive-text">
                {t('about.passion')}
              </p>
              <p className="responsive-text">
                {t('about.approach')}
              </p>
            </div>

          </div>
        </div>

        <div className={`mt-16 sm:mt-20 opacity-0 ${visible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t('about.skillsTitle')}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.skillsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                delay={index * 150}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-16 text-center">{t('about.journeyTitle')}</h3>
          <div className="max-w-6xl mx-auto">
            <TimelineItem
              year={`Mai 2025 - ${t('about.present') || 'Présent'}`}
              title={t('timeline.items.mcs.title')}
              description={t('timeline.items.mcs.description')}
              isLeft={false}
              logoUrl="/images/multicanalservice.jpeg"
            />
            <TimelineItem
              year="2024 - 2025"
              title={t('timeline.items.davinci.title')}
              description={t('timeline.items.davinci.description')}
              isLeft={true}
              logoUrl="/images/logo_daviinci.jpeg"
            />
            <TimelineItem
              year="2023 - 2024"
              title={t('timeline.items.adaa.title')}
              description={t('timeline.items.adaa.description')}
              isLeft={false}
              logoUrl="/images/adaa.jpeg"
            />
            <TimelineItem
              year="2022 - 2023"
              title={t('timeline.items.geno.title')}
              description={t('timeline.items.geno.description')}
              isLeft={true}
              logoUrl="/images/geno-logo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
