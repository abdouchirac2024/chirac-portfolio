import React, { useEffect, lazy, Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import CustomCursor from '../components/CustomCursor';

// Lazy load heavy components
const ParticleBackgroundSafe = lazy(() => import('../components/ParticleBackgroundSafe'));
const StatsSection = lazy(() => import('../sections/StatsSection'));
const ServicesSection = lazy(() => import('../sections/ServicesSection'));
const ProjectsSection = lazy(() => import('../sections/ProjectsSection'));
const EducationSection = lazy(() => import('../sections/EducationSection'));
const ExperienceSection = lazy(() => import('../sections/ExperienceSection'));
const ContactSection = lazy(() => import('../sections/ContactSection'));
const WorkJournalSection = lazy(() => import('../sections/WorkJournalSection'));
const CertificationsSection = lazy(() => import('../sections/CertificationsSection'));

const Index: React.FC = () => {
  useEffect(() => {
    // Set meta tags
    document.title = "Chirac NJUTAPMVOUI - Meilleur Développeur Full Stack au Cameroun | Angular, React & Cloud";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Chirac NJUTAPMVOUI, un des meilleurs développeurs Full Stack au Cameroun. Expert Angular 19, React, Vue.js, Laravel et Google Cloud. +3 ans d'expérience, +15 projets livrés à Douala.");
    }
    
    // Add scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />}>
        <ParticleBackgroundSafe />
      </Suspense>
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<div className="min-h-screen" />}>
          <StatsSection />
          <ServicesSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <EducationSection />
          <WorkJournalSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Index;
