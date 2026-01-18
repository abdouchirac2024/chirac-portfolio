import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language.startsWith('fr') ? 'fr' : 'en';
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('chirac-portfolio-language', newLang);
  };

  const currentLang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative group"
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5" />
      <span className="absolute -bottom-1 -right-1 text-[10px] font-bold uppercase bg-primary text-primary-foreground rounded px-1">
        {currentLang === 'fr' ? 'EN' : 'FR'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
