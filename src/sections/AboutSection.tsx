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
    { name: 'Laravel', percentage: 70, delay: 0 },
    { name: 'Vue.js', percentage: 60, delay: 100 },
    { name: 'Angular', percentage: 45, delay: 200 },
    { name: 'Java', percentage: 30, delay: 300 },
    { name: 'React.js', percentage: 68, delay: 400 },
    { name: 'Node.js', percentage: 65, delay: 500 },
    { name: 'MongoDB', percentage: 56, delay: 600 },
    { name: 'Tailwind CSS', percentage: 75, delay: 700 },
    { name: 'Jenkins', percentage: 20, delay: 800 },
    { name: 'Sonar', percentage: 20, delay: 900 },
    { name: 'Docker', percentage: 50, delay: 1000 },
    { name: 'Animation : Extrêmement dans le futur', percentage: 100, delay: 1100 },
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
                Je suis <strong>NJUTAPMVOUI Abdou Arahamanou Chirac</strong>, un développeur Full Stack passionné par la création d'applications web modernes et performantes.
              </p>
              <p className="mb-4 sm:mb-6 responsive-text">
                Avec plusieurs années d'expérience dans le développement web, je me 
                spécialise dans les technologies JavaScript modernes comme Vue.js, React.js, 
                ainsi que des frameworks backend comme Laravel et Node.js. Je développe également
                mes compétences en DevOps pour améliorer les processus de déploiement et d'intégration continue.
              </p>
              <p className="responsive-text">
                J'aime résoudre des problèmes complexes et transformer des idées en 
                applications fonctionnelles et esthétiques. Ma méthodologie est axée sur les 
                bonnes pratiques, la qualité du code et une approche centrée sur l'utilisateur.
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
              year="2024 - 2025"
              title="Développeur Full Stack - DA VINCI IT SOLUTIONS"
              description="Développement d'applications web avec React.js, Node.js, MongoDB, Vue.js et Laravel."
              isLeft={true}
            />
            <TimelineItem 
              year="2023 - 2024"
              title="Développeur Full Stack - ADAA"
              description="Développement de plateformes comme Jobs ADAALearning et ADAA Summit."
              isLeft={false}
            />
            <TimelineItem 
              year="2022 - 2023"
              title="Développeur Full Stack - GENO CONSULTING"
              description="Développement d'Africa Unity, un site de gestion d'événements avec Vue.js 3 et Laravel."
              isLeft={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
