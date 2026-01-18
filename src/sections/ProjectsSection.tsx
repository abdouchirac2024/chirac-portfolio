import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.data.project1.title'),
      description: t('projects.data.project1.description'),
      problem: t('projects.data.project1.problem'),
      solution: t('projects.data.project1.solution'),
      result: t('projects.data.project1.result'),
      stack: ["Angular 19", "GCP", "Cloud Functions", "Firebase", "Telegram API"],
      imageUrl: "/images/livraisonexpres.png",
      liveUrl: "https://console.v2.firestore.livraison-express.net/",
      delay: 0,
    },
    {
      id: 2,
      title: t('projects.data.project2.title'),
      description: t('projects.data.project2.description'),
      problem: t('projects.data.project2.problem'),
      solution: t('projects.data.project2.solution'),
      result: t('projects.data.project2.result'),
      stack: ["Vue.js 3", "Laravel", "Tailwind CSS", "CI/CD", "Docker"],
      imageUrl: "/images/d5b56b19-946f-4854-a490-3256906951b3.png",
      liveUrl: "https://mangog2025.congresadnandogbatjeck.com/",
      delay: 200,
    },
    {
      id: 3,
      title: t('projects.data.project3.title'),
      description: t('projects.data.project3.description'),
      problem: t('projects.data.project3.problem'),
      solution: t('projects.data.project3.solution'),
      result: t('projects.data.project3.result'),
      stack: ["React", "TypeScript", "TailwindCSS", "Recharts"],
      imageUrl: "/images/expense-tracker.png",
      liveUrl: "https://expense-davincit.vercel.app/",
      delay: 400,
    },
    {
      id: 4,
      title: t('projects.data.project4.title'),
      description: t('projects.data.project4.description'),
      problem: t('projects.data.project4.problem'),
      solution: t('projects.data.project4.solution'),
      result: t('projects.data.project4.result'),
      stack: ["Vue.js 3", "Laravel", "MySQL", "Bootstrap"],
      imageUrl: "/images/90befa0a-f912-4893-b0b2-6f0309546b10.png",
      liveUrl: "https://africaunity.net",
      delay: 600,
    },
  ];
  const [filter, setFilter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const techFilters = [
    t('projects.allTech'), "Angular", "React.js", "Vue.js 3", "Laravel", "Google Cloud", "Firebase"
  ];

  const filteredProjects = filter && filter !== t('projects.allTech')
    ? projects.filter(project => project.stack.some(tech => tech.includes(filter)))
    : projects;

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] pointer-events-none"></div>
      <div className="container relative z-10">
        <h2 className="section-title">{t('projects.title')}</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {techFilters.map(tech => (
            <button
              key={tech}
              onClick={() => {
                setFilter(tech === t('projects.allTech') ? null : tech);
                setShowAll(false); // Reset to show only 3 projects when filter changes
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${(tech === t('projects.allTech') && !filter) || tech === filter
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-secondary/50 hover:bg-primary/20 border border-transparent hover:border-primary/20'
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
              problem={project.problem}
              solution={project.solution}
              result={project.result}
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
                  <span className="text-sm sm:text-base">{t('projects.showLess')}</span>
                  <ChevronUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              ) : (
                <>
                  <span className="text-sm sm:text-base">{t('projects.showMore')} ({filteredProjects.length - 3})</span>
                  <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </>
              )}
            </Button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            {t('projects.noResults')}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
