export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo: string;
  badgeImage: string;
  courseUrl?: string;
  startDate: Date;
  progress: number; // 0-100
  skills: string[];
  category: 'cloud' | 'frontend' | 'backend' | 'devops' | 'other';
  status: 'learning' | 'completed';
}
