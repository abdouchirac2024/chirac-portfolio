import React from 'react';
import JournalEntryCard from '../components/JournalEntryCard';
import { mockJournalEntries } from '../data/journalEntries'; // Importing mock data
import { useTranslation } from 'react-i18next';

const WorkJournalSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="work-journal" className="py-20">
      <div className="container">
        <h2 className="section-title mb-12">{t('journal.title')}</h2>

        {mockJournalEntries.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            {t('journal.noEntries')}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockJournalEntries.map((entry) => (
              <JournalEntryCard
                key={entry.id}
                entry={entry}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkJournalSection;
