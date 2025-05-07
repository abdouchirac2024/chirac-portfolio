import React, { useRef, useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection: React.FC = () => {
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
  
  const education = [
    {
      degree: "Licence Professionnelle Métiers de l'Informatique et Applications Web",
      institution: "IUT d'Evry Val d'Essonne (Délocalisé à Douala)",
      year: "2023 - 2024",
      grade: "Mention Bien",
      description: "Spécialité : Développement avancé d'applications web",
      delay: 0,
    },
    {
      degree: "BTS Génie Logiciel",
      institution: "Université Istama (Douala)",
      year: "2022 - 2023",
      grade: "Mention Bien",
      description: "Conception et développement d'applications, architecture logicielle",
      delay: 200,
    },
    {
      degree: "Formation en Scrum Master",
      institution: "Scrum.org",
      year: "2023",
      grade: "udemy",
      description: "Gestion de projets agiles et méthodologie Scrum",
      delay: 400,
    },
  ];
  
  const certifications = [
    "DevOps Professional", 
    "AWS  Developer", 
    "MongoDB  Developer",
    "Vue.js  Developer",
    "react js   Developer",
    "Angular  Developer",
    "java  Developer",
  ];

  const formationImages = [
    '/lovable-uploads/formation1.jpg',
    '/lovable-uploads/formation2.jpg'
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-secondary/30 dark:bg-muted/10">
      <div className="container">
        <h2 className="section-title">Formation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`glass border-none opacity-0 ${
                visible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${edu.delay}ms` }}
            >
              <CardHeader className="pb-2">
                <Badge className="self-start mb-2">{edu.year}</Badge>
                <CardTitle>{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">{edu.description}</p>
                <div className="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {edu.grade}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="overflow-x-hidden w-full mb-12">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" style={{animation: 'marquee 20s linear infinite'}}>
            {formationImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Formation ${idx + 1}`}
                className="h-64 rounded-lg shadow-xl object-cover"
                style={{ minWidth: '320px', maxWidth: '400px' }}
              />
            ))}
            {formationImages.map((src, idx) => (
              <img
                key={idx + formationImages.length}
                src={src}
                alt={`Formation ${idx + 1}`}
                className="h-64 rounded-lg shadow-xl object-cover"
                style={{ minWidth: '320px', maxWidth: '400px' }}
              />
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
        <div className={`opacity-0 ${visible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '600ms' }}>
          <h3 className="text-xl font-bold mb-6 text-center">Formations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;