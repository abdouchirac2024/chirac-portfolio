export interface WorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
  logoUrl?: string;
  projectDetails?: {
    description: string;
    keyFeatures: string[];
    architecture?: string;
    liveUrls?: string[];
  };
}
