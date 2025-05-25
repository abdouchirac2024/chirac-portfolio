import type { JournalEntry } from '../types/journal';

// Function to generate unique IDs (basic implementation)
const generateId = () => Math.random().toString(36).substr(2, 9);

export const mockJournalEntries: JournalEntry[] = [
  {
    id: generateId(),
    date: new Date('2024-07-21T10:00:00Z'),
    title: 'Première entrée: Lancement du Journal',
    content: 'Aujourd\'hui marque le début de mon journal de travail. J\'ai initialisé le projet et configuré les structures de base pour les entrées du journal. J\'ai utilisé React, TypeScript et Tailwind CSS. L\'objectif est de documenter mes progrès quotidiens et de partager mes apprentissages.',
    likes: 15,
    comments: [
      {
        id: generateId(),
        author: 'Visiteur Curieux',
        text: 'Super initiative ! Hâte de lire la suite.',
        timestamp: new Date('2024-07-21T11:30:00Z'),
      },
      {
        id: generateId(),
        author: 'Dev Ami',
        text: 'Très propre la structure. Bon courage !',
        timestamp: new Date('2024-07-21T12:15:00Z'),
      },
    ],
  },
  {
    id: generateId(),
    date: new Date('2024-07-22T14:30:00Z'),
    title: 'Composant JournalEntryCard',
    content: 'J\'ai passé la journée à développer le composant `JournalEntryCard`. Il affiche le titre, la date, le contenu, les "likes" et les commentaires. J\'ai réutilisé des styles du `ProjectCard` existant pour garder une cohérence visuelle. La gestion de l\'état pour les likes et les nouveaux commentaires est pour l\'instant locale au composant.',
    likes: 22,
    comments: [
      {
        id: generateId(),
        author: 'User123',
        text: 'Le design est vraiment sympa !',
        timestamp: new Date('2024-07-22T16:00:00Z'),
      },
    ],
  },
  {
    id: generateId(),
    date: new Date('2024-07-23T09:15:00Z'),
    title: 'Intégration de la section Journal',
    content: 'Aujourd\'hui, j\'ai créé la section `WorkJournalSection` qui va lister toutes les entrées du journal. J\'ai également intégré cette nouvelle section dans la page principale du portfolio. Pour l\'instant, j\'utilise des données mockées, mais la prochaine étape sera de réfléchir à une solution de backend.',
    likes: 30,
    comments: [],
  },
];
