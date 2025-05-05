import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3000); // Durée de l'animation de typing
    return () => clearTimeout(timer);
  }, []);

  const heroContent = {
    title: "Abdou",
    subtitle: "Développeur Full Stack",
    description: "Je crée des applications web modernes et performantes avec les dernières technologies.",
    cta: "Voir mes projets"
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20">
      <div className="container text-center">
        <div className="mb-6">
          <h1 className="text-4xl md:text-7xl font-bold mb-2 font-poppins">
            <span className="block mb-2">Bonjour, je suis</span>
            <div
              ref={titleRef}
              className="typing-text inline-block text-primary animate-typing animate-blink-caret"
            >
              {heroContent.title}
            </div>
          </h1>
          <h2 className={`text-2xl md:text-3xl text-muted-foreground mt-4 opacity-0 ${
            isTypingComplete ? 'animate-fade-in' : ''
          }`}>
            {heroContent.subtitle}
          </h2>
          <p className={`mt-6 max-w-2xl mx-auto text-muted-foreground opacity-0 ${
            isTypingComplete ? 'animate-fade-in' : ''
          }`} style={{ animationDelay: '0.3s' }}>
            {heroContent.description}
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 opacity-0 ${
          isTypingComplete ? 'animate-fade-in' : ''
        }`} style={{ animationDelay: '0.5s' }}>
          <Button asChild size="lg" className="group">
            <a href="#projects">
              {heroContent.cta} 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://wa.me/237658488485" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="h-5 w-5 text-green-500" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
