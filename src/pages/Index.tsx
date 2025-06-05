import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection'; // Added import
import ContactSection from '../sections/ContactSection';
import CustomCursor from '../components/CustomCursor';
import FormationSection from '../sections/FormationSection';
import WorkJournalSection from '../sections/WorkJournalSection'; // New import

const Index: React.FC = () => {
  useEffect(() => {
    // Set meta tags
    document.title = "Chirac NJUTAPMVOUI - Développeur Full Stack ";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Portfolio professionnel de Chirac NJUTAPMVOUI, Développeur Full Stack spécialisé en React, Vue.js et Laravel");
    }
    
    // Add scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FormationSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection /> {/* Added section */}
        <WorkJournalSection /> {/* Newly added section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
