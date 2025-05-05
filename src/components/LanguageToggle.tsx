
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  onChange?: (lang: 'fr' | 'en') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ onChange }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'fr' | 'en' | null;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    if (onChange) {
      onChange(newLang);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="text-xs font-medium"
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
};

export default LanguageToggle;
