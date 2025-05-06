import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Congrès Adna Ndogbatjeck",
    description: "Plateforme de gestion d'événements avec système d'intégration continue",
    stack: ["Laravel", "Vue.js 3", "Tailwind CSS", "CI/CD", "Gitea", "SonarQube"],
    imageUrl: "/lovable-uploads/d5b56b19-946f-4854-a490-3256906951b3.png",
    liveUrl: "https://mangog2025.congresadnandogbatjeck.com/",
    delay: 0,
  },
  {
    id: 2,
    title: "Application de Gestion de Dépenses",
    description: "Une application web moderne pour suivre et gérer les dépenses personnelles avec des graphiques interactifs.",
    stack: ["React", "TypeScript", "TailwindCSS", "Recharts"],
    imageUrl: "/lovable-uploads/expense-tracker.png",
    liveUrl: "https://expense-tracker-demo.com",
    delay: 200,
  },
  {
    id: 3,
    title: "Africa Unity",
    description: "Plateforme de mise en relation professionnelle pour l'Afrique",
    stack: ["Vue.js 3", "Laravel", "MySQL"],
    imageUrl: "/lovable-uploads/90befa0a-f912-4893-b0b2-6f0309546b10.png",
    liveUrl: "https://africaunity.net",
    delay: 400,
  },
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const techFilters = [
    "Tous", "React.js", "Vue.js 3", "Laravel", "Node.js", "MongoDB"
  ];
  
  const filteredProjects = filter && filter !== "Tous"
    ? projects.filter(project => project.stack.some(tech => tech.includes(filter)))
    : projects;

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {techFilters.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech === "Tous" ? null : tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                (tech === "Tous" && !filter) || tech === filter 
                  ? 'bg-primary text-white'
                  : 'bg-secondary hover:bg-primary/20'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              stack={project.stack}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              delay={project.delay}
            />
          ))}
        </div>
        
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
