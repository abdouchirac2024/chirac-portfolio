import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

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
        {i18n.language === 'fr' ? 'EN' : 'FR'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
