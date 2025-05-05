
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-lg font-bold font-poppins">
              <span className="text-primary">Chirac</span>
              <span>.dev</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} NJUTAPMVOUI Abdou Arahamanou Chirac. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://github.com/abdouchirac2024" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://www.linkedin.com/in/abdou-njutapmvoui-288428223" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
