import { useTranslation } from 'react-i18next';

const LanguageDebug = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50">
      <div>Current Language: <strong>{i18n.language}</strong></div>
      <div>Test Translation: <strong>{t('hero.greeting')}</strong></div>
      <div>Available Languages: {i18n.languages.join(', ')}</div>
    </div>
  );
};

export default LanguageDebug;
