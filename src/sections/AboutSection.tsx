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
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/30 dark:bg-muted/10">
      <div className="container">
        <h2 className="section-title">À Propos</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`opacity-0 ${visible ? 'animate-fade-in' : ''}`}>
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/d6a9ce7d-c905-40e5-b74f-232a1aae62ec.png" 
                  alt="Chirac NJUTAPMVOUI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div>
            <div className={`glass p-6 rounded-lg shadow-lg opacity-0 ${
              visible ? 'animate-fade-in' : ''
            }`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-4">Qui suis-je?</h3>
              <p className="mb-4">
                Je suis <strong>NJUTAPMVOUI Abdou Arahamanou Chirac</strong>, un développeur Full Stack et apprenti DevOps Junior 
                actuellement chez Canal Multi Service. Je suis passionné par la création d'applications web modernes et performantes.
              </p>
              <p className="mb-4">
                Avec plusieurs années d'expérience dans le développement web, je me 
                spécialise dans les technologies JavaScript modernes comme Vue.js, React.js, 
                ainsi que des frameworks backend comme Laravel et Node.js. Je développe également
                mes compétences en DevOps pour améliorer les processus de déploiement et d'intégration continue.
              </p>
              <p>
                J'aime résoudre des problèmes complexes et transformer des idées en 
                applications fonctionnelles et esthétiques. Ma méthodologie est axée sur les 
                bonnes pratiques, la qualité du code et une approche centrée sur l'utilisateur.
              </p>
            </div>
            
            <div className={`mt-10 opacity-0 ${
              visible ? 'animate-fade-in' : ''
            }`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-6">Compétences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
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
              year="2025 - Présent"
              title="Développeur Full Stack & Apprenti DevOps Junior - CANAL MULTI SERVICE"
              description={
                <>
                  Développement d'applications web et apprentissage des pratiques DevOps chez{" "}
                  <a 
                    href="https://multicanalservices.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Canal Multi Service
                  </a>
                  .
                </>
              }
              isLeft={false}
            />
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
