import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackgroundSafe from '../components/ParticleBackgroundSafe';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import StatsSection from '../sections/StatsSection';
import ServicesSection from '../sections/ServicesSection';
import ProjectsSection from '../sections/ProjectsSection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection';
import ContactSection from '../sections/ContactSection';
import CustomCursor from '../components/CustomCursor';
import FormationSection from '../sections/FormationSection';
import WorkJournalSection from '../sections/WorkJournalSection';
import LanguageDebug from '../components/LanguageDebug';

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
      <ParticleBackgroundSafe />
      <CustomCursor />
      <Header />
      <LanguageDebug />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <FormationSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <WorkJournalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
