import React, { useRef, useEffect, useState } from 'react';
import SkillBar from '../components/SkillBar';
import TimelineItem from '../components/TimelineItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AboutSection: React.FC = () => {
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

  const skills = [
    { name: 'Angular 19+', percentage: 75, delay: 0 },
    { name: 'Google Cloud Platform', percentage: 60, delay: 100 },
    { name: 'Cloud Functions', percentage: 65, delay: 200 },
    { name: 'Cloud Run', percentage: 80, delay: 300 },
    { name: 'Firebase', percentage: 55, delay: 400 },
    { name: 'React.js', percentage: 70, delay: 500 },
    { name: 'Vue.js', percentage: 75, delay: 600 },
    { name: 'Laravel', percentage: 85, delay: 700 },
    { name: 'TypeScript', percentage: 70, delay: 800 },
    { name: 'Telegram Bot API', percentage: 90, delay: 900 },
    { name: 'Tailwind CSS', percentage: 60, delay: 1000 },
    { name: 'RxJS', percentage: 75, delay: 1100 },
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
        <h2 className="section-title">À Propos</h2>

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
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Plus qu'un développeur, un créateur de solutions</h3>
              <p className="mb-4 sm:mb-6 responsive-text">
                Je suis <strong>NJUTAPMVOUI Abdou Arahamanou Chirac</strong>, un développeur passionné par l'intersection entre
                design et technologie. Mon objectif n'est pas seulement d'écrire du code, mais de créer des expériences numériques
                qui résolvent de vrais problèmes.
              </p>
              <p className="mb-4 sm:mb-6 responsive-text">
                J'aime transformer des idées complexes en interfaces simples, intuitives et performantes.
                Que ce soit pour optimiser un processus logistique ou faciliter l'accès à l'information,
                je place toujours l'utilisateur final au cœur de mes décisions techniques.
              </p>
              <p className="responsive-text">
                Mon approche combine une rigueur technique (Angular, React, Cloud) avec une sensibilité produit.
                Je m'efforce de livrer des applications qui sont non seulement robustes et scalables,
                mais aussi agréables à utiliser au quotidien.
              </p>
            </div>

            <div className={`mt-6 sm:mt-8 md:mt-10 lg:mt-12 opacity-0 ${visible ? 'animate-fade-in' : ''
              }`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Compétences</h3>
              <div className="grid grid-cols-1 gap-x-4 sm:gap-x-6 md:gap-x-8">
                {skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={skill.delay}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold mb-10 text-center">Mon Parcours</h3>
          <div className="max-w-4xl mx-auto">
            <TimelineItem
              year="Mai 2025 - Présent"
              title="Développeur Full Stack & Angular Specialist - MULTI CANAL SERVICE"
              description={
                <>
                  Développement d'un système ERP complet avec Angular 19.2.0 pour la logistique du dernier kilomètre.
                  Déploiement sur Google Cloud Platform avec Cloud Functions et Cloud Run. Implémentation de notifications
                  Telegram automatisées, purge Firebase via Cloud Functions, et architecture serverless complète.
                </>
              }
              isLeft={false}
              logoUrl="/images/multicanalservice.jpeg"
            />
            <TimelineItem
              year="2024 - 2025"
              title="Développeur Full Stack - DA VINCI IT SOLUTIONS"
              description={
                <>
                  Développement d'applications web modernes avec React.js, Node.js, Express et MongoDB.
                  Création d'une application de blog et d'un système de gestion des dépenses avec authentification OAuth.
                  Conception complète du projet Congrès ADNA avec Laravel API et Vue.js.
                </>
              }
              isLeft={true}
              logoUrl="/images/logo_daviinci.jpeg"
            />
            <TimelineItem
              year="2023 - 2024"
              title="Développeur Full Stack & Testeur - ADAA"
              description={
                <>
                  Développement et maintenance des plateformes{" "}
                  <a
                    href="https://jobs.adaalearning.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Jobs ADAALearning
                  </a>
                  {" "}et{" "}
                  <a
                    href="https://adaasummit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    ADAA Summit
                  </a>
                  . Tests fonctionnels pendant 2 mois puis développement full stack pendant 6 mois.
                </>
              }
              isLeft={false}
              logoUrl="/images/adaa.jpeg"
            />
            <TimelineItem
              year="2022 - 2023"
              title="Développeur Full Stack - GENO CONSULTING"
              description={
                <>
                  Développement d'{" "}
                  <a
                    href="https://africaunity.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Africa Unity
                  </a>
                  , une plateforme complète de gestion d'événements, d'articles et de formations en ligne
                  avec Vue.js 3 en frontend et Laravel API en backend.
                </>
              }
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
