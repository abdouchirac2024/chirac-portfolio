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
    { name: 'Angular 19+', percentage: 85, delay: 0 },
    { name: 'Google Cloud Platform', percentage: 80, delay: 100 },
    { name: 'Cloud Functions', percentage: 85, delay: 200 },
    { name: 'Cloud Run', percentage: 80, delay: 300 },
    { name: 'Firebase', percentage: 75, delay: 400 },
    { name: 'React.js', percentage: 80, delay: 500 },
    { name: 'Vue.js', percentage: 75, delay: 600 },
    { name: 'Laravel', percentage: 85, delay: 700 },
    { name: 'TypeScript', percentage: 90, delay: 800 },
    { name: 'Telegram Bot API', percentage: 70, delay: 900 },
    { name: 'Tailwind CSS', percentage: 90, delay: 1000 },
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <div className={`opacity-0 ${visible ? 'animate-fade-in' : ''} order-2 lg:order-1`}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/d6a9ce7d-c905-40e5-b74f-232a1aae62ec.png" 
                  alt="Chirac NJUTAPMVOUI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/10 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className={`glass p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-lg opacity-0 ${
              visible ? 'animate-fade-in' : ''
            }`} style={{ animationDelay: '0.2s' }}>
              <h3 className="responsive-heading mb-4 sm:mb-6">Qui suis-je?</h3>
              <p className="mb-4 sm:mb-6 responsive-text">
                Je suis <strong>NJUTAPMVOUI Abdou Arahamanou Chirac</strong>, un développeur Full Stack avec une expertise 
                particulière en Angular, systèmes ERP et technologies cloud. Actuellement, je développe un système complet de gestion logistique 
                chez Multi Canal Service avec Angular 19.2.0, déployé sur Google Cloud Platform.
              </p>
              <p className="mb-4 sm:mb-6 responsive-text">
                Avec plusieurs années d'expérience dans le développement web, je maîtrise un large éventail de technologies : 
                Angular, React.js, Vue.js pour le frontend, Laravel, Node.js pour le backend, et Google Cloud Platform pour le déploiement. 
                J'ai une expertise avancée en Cloud Functions, Cloud Run, Firebase et systèmes de notifications automatisées.
              </p>
              <p className="responsive-text">
                Ma passion réside dans la résolution de problèmes complexes et la transformation d'idées en 
                applications robustes et esthétiques. Je privilégie les bonnes pratiques, la qualité du code, 
                l'architecture modulaire et une approche centrée sur l'expérience utilisateur.
              </p>
            </div>
            
            <div className={`mt-6 sm:mt-8 md:mt-10 lg:mt-12 opacity-0 ${
              visible ? 'animate-fade-in' : ''
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
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
