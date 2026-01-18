
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { title: t('nav.home'), href: '#home' },
    { title: t('nav.about'), href: '#about' },
    { title: t('nav.experience'), href: '#experience' },
    { title: t('nav.projects'), href: '#projects' },
    { title: t('nav.education'), href: '#education' },
    { title: t('nav.journal'), href: '#work-journal' },
    { title: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'py-2 sm:py-3 bg-background/80 backdrop-blur-md border-b shadow-sm'
          : 'py-3 sm:py-4 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="text-lg sm:text-xl lg:text-2xl font-bold font-poppins flex-shrink-0 group">
          <span className="text-primary group-hover:text-primary/80 transition-colors">Chirac</span>
          <span className="group-hover:text-foreground/80 transition-colors">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-md transition-all duration-300 whitespace-nowrap ${isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
              >
                {link.title}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
          <div className="flex items-center gap-1 ml-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>

        {/* Tablet Navigation */}
        <nav className="hidden md:flex lg:hidden items-center space-x-1">
          {navLinks.slice(0, 5).map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-2 py-2 text-xs font-medium rounded-md transition-colors ${isActive
                    ? 'text-primary bg-secondary/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/30'
                  }`}
              >
                {link.title}
              </a>
            );
          })}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <LanguageToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b shadow-lg animate-in slide-in-from-top-5">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm sm:text-base rounded-lg transition-colors font-medium flex items-center justify-between ${isActive
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
