import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CVDownloadButton } from '@/components/CVDownloadButton';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3000); // Durée de l'animation de typing
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center max-w-6xl">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 font-poppins leading-tight">
            <span className="block mb-2 sm:mb-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {t('hero.greeting')}
            </span>
            <div
              ref={titleRef}
              className="typing-text inline-block text-primary animate-typing animate-blink-caret"
            >
              {t('hero.name')}
            </div>
          </h1>
          <h2 className={`text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-4 sm:mt-6 opacity-0 ${isTypingComplete ? 'animate-fade-in' : ''
            }`}>
            {t('hero.subtitle')}
          </h2>
          <p className={`mt-4 sm:mt-6 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground opacity-0 leading-relaxed ${isTypingComplete ? 'animate-fade-in' : ''
            }`} style={{ animationDelay: '0.3s' }}>
            {t('hero.description')}
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 opacity-0 ${isTypingComplete ? 'animate-fade-in' : ''
          }`} style={{ animationDelay: '0.5s' }}>
          <Button asChild size="lg" className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            <a href="#projects">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <CVDownloadButton variant="outline" size="lg" className="w-full sm:w-auto" />

          <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-0">
            <Button variant="outline" size="icon" asChild className="h-10 w-10 sm:h-12 sm:w-12">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="h-10 w-10 sm:h-12 sm:w-12">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="h-10 w-10 sm:h-12 sm:w-12">
              <a href="https://wa.me/237658488485" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section" className="block p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-6 sm:h-6"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
