import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Système ERP Livraison Express",
    description: "Système ERP complet pour la logistique du dernier kilomètre avec Angular 19.2.0, déployé sur Google Cloud Platform avec Cloud Functions et notifications Telegram automatisées.",
    stack: ["Angular 19.2.0", "PrimeNG", "Google Cloud", "Cloud Functions", "Firebase", "Telegram API"],
    imageUrl: "/images/livraisonexpres.png",
    liveUrl: "https://console.v2.firestore.livraison-express.net/",
    delay: 0,
  },
  {
    id: 2,
    title: "Congrès Adna Ndogbatjeck",
    description: "Plateforme de gestion d'événements avec système d'intégration continue",
    stack: ["Laravel", "Vue.js 3", "Tailwind CSS", "CI/CD", "Gitea", "SonarQube"],
    imageUrl: "/images/d5b56b19-946f-4854-a490-3256906951b3.png",
    liveUrl: "https://mangog2025.congresadnandogbatjeck.com/",
    delay: 200,
  },
  {
    id: 3,
    title: "Application de Gestion de Dépenses",
    description: "Une application web moderne pour suivre et gérer les dépenses personnelles avec des graphiques interactifs.",
    stack: ["React", "TypeScript", "TailwindCSS", "Recharts"],
    imageUrl: "/images/expense-tracker.png",
    liveUrl: "https://expense-tracker-demo.com",
    delay: 400,
  },
  {
    id: 4,
    title: "Africa Unity",
    description: "Plateforme de mise en relation professionnelle pour l'Afrique",
    stack: ["Vue.js 3", "Laravel", "MySQL"],
    imageUrl: "/images/90befa0a-f912-4893-b0b2-6f0309546b10.png",
    liveUrl: "https://africaunity.net",
    delay: 600,
  },
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const techFilters = [
    "Tous", "Angular", "React.js", "Vue.js 3", "Laravel", "Google Cloud", "Firebase"
  ];
  
  const filteredProjects = filter && filter !== "Tous"
    ? projects.filter(project => project.stack.some(tech => tech.includes(filter)))
    : projects;
    
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {techFilters.map(tech => (
            <button
              key={tech}
              onClick={() => {
                setFilter(tech === "Tous" ? null : tech);
                setShowAll(false); // Reset to show only 3 projects when filter changes
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                (tech === "Tous" && !filter) || tech === filter 
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-secondary hover:bg-primary/20'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              stack={project.stack}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              delay={index < 3 ? project.delay : (index - 2) * 150}
            />
          ))}
        </div>
        
        {filteredProjects.length > 3 && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="group px-6 sm:px-8 py-3 sm:py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {showAll ? (
                <>
                  <span className="text-sm sm:text-base">Voir moins de projets</span>
                  <ChevronUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              ) : (
                <>
                  <span className="text-sm sm:text-base">Voir plus de projets ({filteredProjects.length - 3} autres)</span>
                  <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </>
              )}
            </Button>
          </div>
        )}
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            Aucun projet ne correspond à ce filtre.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
