import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

interface CVDownloadButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export const CVDownloadButton = ({
  variant = 'default',
  size = 'lg',
  className = '',
}: CVDownloadButtonProps) => {
  const { i18n, t } = useTranslation();

  const handleDownload = () => {
    const currentLang = i18n.language.startsWith('fr') ? 'fr' : 'en';
    const cvPath = currentLang === 'fr'
      ? '/images/cv/CV_NJUTAPMVOUI_Chirac.pdf'
      : '/images/cv/CV_NJUTAPMVOUI_Chirac.pdf';

    const link = document.createElement('a');
    link.href = cvPath;
    link.download = `CV_Chirac_${currentLang.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success(
      currentLang === 'fr'
        ? 'CV téléchargé avec succès !'
        : 'CV downloaded successfully!'
    );
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      className={`group ${className}`}
    >
      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
      {t('hero.downloadCV')}
    </Button>
  );
};
